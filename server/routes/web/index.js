module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')
    const Hero = mongoose.model('Hero')


    //新闻分类
    router.get('/news/list', async (req, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.aggregate([
            { $match: { parent: parent._id } },
            {
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }
            },
            {
                $addFields: {
                    newsList: { $slice: ['$newsList', 5] }
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            newsList: await Article.find().where({
                categories: { $in: subCats }
            }).populate('categories').limit(5).lean()
        })

        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = (cat.name === '热门')
                    ? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)

    })

    // 英雄列表接口
    router.get('/heroes/list', async (req, res) => {
        const parent = await Category.findOne({
          name: '英雄分类'
        })
        const cats = await Category.aggregate([
          { $match: { parent: parent._id } },
          {
            $lookup: {
              from: 'heroes',
              localField: '_id',
              foreignField: 'categories',
              as: 'heroList'
            }
          }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
          name: '热门',
          heroList: await Hero.find().where({
            categories: { $in: subCats }
          }).limit(10).lean()
        })
        
        res.send(cats)
      });

    //文章详情
    router.get('/articles/:id', async (req, res) => {
        const data = await Article.findById(req.params.id);
        data.related = await Article.find().where({
            categories: { $in: data.categories }
        }).limit(2)
        res.send(data);
    });
    //英雄
    router.get('/heroes/:id',async(req,res)=>{
        const data = await Hero
        .findById(req.params.id)
        .populate('categories items1 items2 partners.hero')
        .lean()
        res.send(data);
    })

    app.use('/web/api', router)
}
