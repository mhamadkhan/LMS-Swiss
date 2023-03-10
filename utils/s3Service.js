const multerS3 = require("multer-s3");
// const aws = require("aws-sdk");
const multer = require('multer');
const { S3 } = require("aws-sdk");
const course = require("../models/course");
// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const uuid = require('uuid').v4;
require("dotenv").config();


const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_REGION
const accessKeyId = process.env.AWS_ACCESS_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const awsconfig=process.env.AWS_SDK_LOAD_CONFIG


const s3 = new S3({
            region,
            accessKeyId,
            secretAccessKey,
            bucketName,
            awsconfig
});



exports.upload = multer({
    storage: multerS3({
        s3: s3,
        // acl: "public-read",
        bucket: bucketName,
        key: function (req, file, cb) {
            console.log(file);
            cb(null, `courseImages/${uuid()}-${req.body.name}-${file.originalname}`)
        }
    })
})




