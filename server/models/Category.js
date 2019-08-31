const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },//objID，关联Category模型
})

module.exports = mongoose.model('Category', schema)

//分类数据库   类别父级