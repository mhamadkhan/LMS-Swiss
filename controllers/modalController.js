let express = require('express');
let router = express.Router();
let Modal = require('../models/modal');
let {uploadFile,deleteFile,generatePublicUrl,folderCreate}=require('../utils/googleApi');
const multer = require('multer');
const upload = multer();

const convertBytes = function(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  
    if (bytes == 0) {
      return "n/a"
    }
  
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  
    if (i == 0) {
      return bytes + " " + sizes[i]
    }
  
    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
  }


// router.post('/fileupload'
// ,upload.fields([
//     {
//         name :'ModalFile', maxCount:1
//     },
//     {
//         name:'ModalObj',maxCount:1
//     },
//     {
//         name:'ModalTexture',maxCount:1
//     },
//     {
//         name:'ModalCard',maxCount:1
//     },
//     {
//         name:'ModalSlider',maxCount:6
//     }
//     ])
//     ,async(req,res)=>{

// const convertBytes = function(bytes) {
//     const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  
//     if (bytes == 0) {
//       return "n/a"
//     }
  
//     const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  
//     if (i == 0) {
//       return bytes + " " + sizes[i]
//     }
  
//     return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
//   }

// router.post('/fileupload',upload.single('modalfile'),async(req,res)=>{
//     try {
//         console.log(req.body);
//         console.log(req.file);
//         // console.log(req.file.path);
//       let data = await uploadFile(req.file);
//       let dataid=data.id;
//         // console.log(data);
//         let modal =new Modal(req.body);
//         modal.modalfile=dataid;
//         console.log(modal)
//         await modal.save();
//         res.send({modal:modal});

//         // res.send(req.file)
//     } catch (error) {
//         res.send(error.message);
//     }
// })
router.get('/',async(req,res)=>{
    try {     
        let modals = await Modal.find();        
        res.json(modals);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});
router.get('/singleModal/:id',async(req,res)=>{
    try {     
        let modal = await Modal.findById(req.params.id);        
        res.json(modal);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});

router.post('/fileupload'
,upload.fields([
    {
        name :'ModalFile', maxCount:1
    },
    {
        name:'ModalObj',maxCount:1
    },
    {
        name:'ModalTexture',maxCount:1
    },
    {
        name:'ModalCard',maxCount:1
    },
    {
        name:'ModalSlider',maxCount:6
    }
    ])
    ,async(req,res)=>{
    try {
        console.log(req.body);
        console.log(req.files);
       
        let folder = await folderCreate(req.body.ModalName);
        console.log(req.body.ModalName);
        console.log(folder);


        let convertedSize;
        if(req.files.ModalFile[0].fieldname==='ModalFile'){
        convertedSize=convertBytes(req.files.ModalFile[0].size);
        console.log(convertedSize);
        }

        let modalfile=req.files.ModalFile[0];
        let modalobj=req.files.ModalObj[0];
        let modaltexture=req.files.ModalTexture[0];
        let modalcard=req.files.ModalCard[0];

      let modaldata = await uploadFile(modalfile,folder);
      let modaldataid=modaldata.id;
      let objdata = await uploadFile(modalobj,folder);
      let objdataid=objdata.id;
      let texturedata = await uploadFile(modaltexture,folder);
      let texturedataid=texturedata.id;
      let carddata = await uploadFile(modalcard,folder);
      let carddataid=carddata.id;

      let slider=[];

      console.log(req.files.ModalSlider);
      for(let i=0;i<req.files.ModalSlider.length;i++){
          let data = await uploadFile(req.files.ModalSlider[i],folder);
          console.log(data.id);
          slider.push(data.id);
      }

        let modal =new Modal(req.body);
        modal.ModalFile=modaldataid;
        modal.ModalCompress=objdataid;
        modal.ModalObj=texturedataid;
        modal.ModalCard=carddataid;
        modal.ModalSlider=slider;
        modal.ModalSize=convertedSize;
        modal.ModalFolder=folder;
        console.log(modal)
        await modal.save();
        res.send({modal:modal});

        // res.send(req.file)
    } catch (error) {
        res.send(error.message);
    }
})

router.delete('/filedelete/:id',async(req,res)=>{
    try {
        const deleteItems=[]

    let modaldelete = await Modal.findById(req.params.id);
    console.log(modaldelete);
    // deleteItems.push(modaldelete.ModalFile);
    // console.log(modaldelete.ModalObj);
    // deleteItems.push(modaldelete.ModalObj);
    // deleteItems.push(modaldelete.ModalCard);
    // for (let i=0;i<modaldelete.ModalSlider.length;i++){
    //     deleteItems.push(modaldelete.ModalSlider[i]);
    // }
    // console.log(deleteItems);
    // console.log(deleteItems.length);
    // for (let j=0;j<deleteItems.length;j++){
        
        await deleteFile(modaldelete.ModalFolder);
    

    modaldelete=await Modal.findByIdAndDelete(req.params.id);
     res.send('file deleted');
    } catch (error) {
        res.send(error.message);
    }
    
})

router.get('/filedownload/:id',async(req,res)=>{
    let modaldownload = await Modal.findById(req.params.id);
    console.log(modaldownload.modalfile);
    await generatePublicUrl(modaldownload.modalfile);
})
router.get('/totalModals',async(req,res)=>{
    try {
        
        let totalModals = await Modal.find().countDocuments();
        console.log(totalModals);
        res.json(totalModals);
    } catch (error) {
        res.json(error.message);
    }

})
module.exports = router;