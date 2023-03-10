const nodemailer = require('nodemailer');

module.exports = async(email,subject,text)=>{
    // console.log(email)
    // console.log(process.env.HOST)
    // console.log(typeof Number(process.env.EMAIL_PORT))
    // console.log(typeof Boolean(process.env.SECURE))
    // console.log(typeof process.env.USER)
    // console.log(typeof process.env.PASS)
    try {
        // let testAccount = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
            host:process.env.HOST,
            port:Number(process.env.EMAIL_PORT),
            secure:false,
            auth:{
                user:process.env.USER,
                pass:process.env.PASS
            }

            
        })
        await transporter.sendMail({
            from:process.env.USER,
            to:email,
            subject:subject,
            text:text
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.log("Email sending failed");
        console.log(error);
    }
}