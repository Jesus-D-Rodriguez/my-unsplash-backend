const express = require("express");
const cors = require('cors');
require('./src/database');
const bodyParser = require('body-parser');

const router = express.Router();


const Image = require('./src/models/image');



/*const newImage = new Image({
  title: 'Mi imagen',
  url: 'https://example.com/myimage.jpg'
});

newImage.save()
  .then(result => {
    console.log('Imagen guardada:', result);
  })
  .catch(error => {
    console.error('Error al guardar la imagen:', error);
  });*/

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());

app.use(require('./src/routes/index'));

/*app.get("/", async (req, res)=> {
    const images = await Image.find();
    res.setHeader('Content-Type', 'application/json');
    res.json(images);
})*/

app.get("/", async (req, res)=> {
  const { page, perPage, search } = req.query;
  const filter = search ? {title: {$regex: search, $options: "i"}} : {};
  const images = await Image.find(filter).sort({_id: -1}).skip((page - 1) * perPage).limit(perPage);
  res.setHeader('Content-Type', 'application/json');
  //console.log("images: " + images);
  res.json(images);
});

app.post('/images/:id', async (req, res)=>{
  console.log("lego al servidor");
  try {
    const imageId = req.params.id;
    const image = await Image.findById(imageId);
  
    if (!image) {
      return res.status(404).json({message: "Image not found"});
    }
  
    await image.remove();
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Server error' });
  }


})

app.listen(5000, ()=> {
    console.log("Server on port 5000");
})

module.exports = router;