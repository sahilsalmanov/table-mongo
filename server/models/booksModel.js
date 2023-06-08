const { default: mongoose } = require("mongoose");

const BooksSchema = mongoose.Schema({
  name: String,
  description: String,
  publishDate: Date,
  addDate: { type: Date, default: Date.now },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: "Writer" },
  imagePath: String
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = {
    Books,
};