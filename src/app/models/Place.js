const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Place = new Schema({
  name: String,
  content: String,
  image: String,
  status: Number,
  slug: { type: String, slug: "name", unique: true }
},
{
  timestamps: true
}
);

Place.query.sortable = function(req) {
  if (req.query.hasOwnProperty('_sort')) {
    return this.sort({
        [req.query.column]: req.query.type
    });
  }

  return this;
};

module.exports = mongoose.model('Place', Place);