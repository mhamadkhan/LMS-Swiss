let express = require('express');
let router = express.Router();
let Slider = require('../models/slider');
let {uploadFile,deleteFile,generatePublicUrl,folderCreate}=require('../utils/googleApi');
const multer = require('multer');
const upload = multer();

router.post('/',upload.fields([
    {
        name:'SImage1',maxCount:1
    },
    {
        name:'SImage2',maxCount:1
    },
    {
        name:'SImage3',maxCount:1
    },
    {
        name:'SImage4',maxCount:1
    }
]),async(req,res)=>{

    try {
        console.log(req.files);

        let folder = await folderCreate("SliderImages");
        console.log(folder);
    
        let Simage1=req.files.SImage1[0];
        let Simage2=req.files.SImage2[0];
        let Simage3=req.files.SImage3[0];
        let Simage4=req.files.SImage4[0];
    
        let image1data = await uploadFile(Simage1,folder);
        let image1dataid=image1data.id;
        let image2data = await uploadFile(Simage2,folder);
        let image2dataid=image2data.id;
        let image3data = await uploadFile(Simage3,folder);
        let image3dataid=image3data.id;
        let image4data = await uploadFile(Simage4,folder);
        let image4dataid=image4data.id;
    
        let slider= new Slider(req.body);
        slider.SImage1=image1dataid;
        slider.SImage2=image2dataid;
        slider.SImage3=image3dataid;
        slider.SImage4=image4dataid;
        slider.SliderFolder=folder;
    
        console.log(slider)
        await slider.save();
        res.send({slider:slider});
     
    } catch (error) {
        res.send(error.message);
    }
})

router.delete('/delete/:id',async(req,res)=>{

    try {
    // const deleteItems=[]

    let sliderdelete = await Slider.findById(req.params.id);
    console.log(sliderdelete);

    // deleteItems.push(sliderdelete.SImage1);
    // deleteItems.push(sliderdelete.SImage2);
    // deleteItems.push(sliderdelete.SImage3);
    // deleteItems.push(sliderdelete.SImage4);
    // console.log(deleteItems);

    // for (let i=0;i<deleteItems.length;i++){
    //     await deleteFile(deleteItems[i])
    // }
        await deleteFile(sliderdelete.SliderFolder);

    sliderdelete=await Slider.findByIdAndDelete(req.params.id);
    res.send('file deleted');
    } catch (error) {
        res.send(error.message);
    }
    
})

router.get('/sliderImages',async(req,res)=>{
    try {
        
        let sliderImages= await Slider.find();
        res.send(sliderImages);
    } catch (error) {
        res.send(error.message);
    }

})
module.exports = router;