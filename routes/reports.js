const express = require('express')
const multer = require('multer')
const router = express.Router();
const report = require('../models/reports')
const upload = multer({dest:'uploads/'})


router.get('/',async(req,res) =>{
    try{
        const reports= await report.find()
        res.json(reports)
    }catch(error){
        res.status(500).json({mesage:error.mesage})
    }    
})

router.post('/reportUpload',upload.single('specimen'), async (req,res,next)=>{
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types    
    const newReport  = new report({
        title: req.query.fileName,
        report: {
            data: req.file.filename,
            contentType : 'application/pdf'

        }})
    try{
        const addedReport = await newReport.save()       
        res.status(201).json({file:req.file})
    }catch(err){
        res.status(400);
    }
    

})

module.exports = router