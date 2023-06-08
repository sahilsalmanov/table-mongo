const { Books } = require("../models/booksModel")


const booksController = {
    getAll: (req, res) => {

        let limitProduct = req.query.limit;

        Books.find()
            .limit(limitProduct)
            .populate({
            path: "writer",
            populate: {
                path: "country"
            }
           })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    getById: (req, res) => {
        let id = req.params.id

        Books.findById(id).populate("writer")
            .then(data => {
                if (data)
                    res.json(data)
                else
                    res.status(404).json({});
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    // add: (req, res) => {
    
    //     let books = new Books({
    //         name: req.body.name,
    //         description: req.body.description,
    //         writer: req.body.writer,
    //         publishDate: req.body.publishDate
    //     })

    //     books.save()

    //     res.json(books)
    // },
    add: async (req, res) => {
        try {
          const file = req.files.imagePath;
          const namePic = uuidv4() + ".jpeg";
          const path = __dirname + "/.." + "/images/" + namePic;
          await file.mv(path);
    
          const books = new Boooks({
            name: req.body.name,
                    description: req.body.description,
                    writer: req.body.writer,
                    publishDate: req.body.publishDate,
                    imagePath: process.env.BASE_URI + namePic,
          });
    
          await books.save();
          res.send("Success!!");
        } catch (err) {
          res.status(500).json(err);
        }
      },
   
    delete: (req, res) => {
        let id = req.params.id;

        Books.findByIdAndDelete(id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}


module.exports = {
    booksController
}


