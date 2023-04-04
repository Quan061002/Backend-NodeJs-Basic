require('dotenv').config();
import nodemailer from 'nodemailer';

let sendSimpleEmail = async (dataSend) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });


    let info = await transporter.sendMail({
        from: '"quana" <steviaweed@gmail.com>',
        to: dataSend.reciverEmail,
        subject: "Thong tin dat lich kham benh",
        html: getBodyHTMLEmail(dataSend),
        
    });
}

let getAllDoctors = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result = 
            `
            <h3>Xin chao ${dataSend.patientName}!</h3>
            <p>Ban nhan duoc email nay vi da dat lich kham benh online tren Website cua chinh toi</p>
            <p>Thog tin dat lich kham benh:</p>
            <div><b>Bac si: ${dataSend.doctorName}</b></div>
            <div><b>Thoi gian: ${dataSend.time}</b></div>

            <p>Neu cac thong tin tren la chinh xac, vui long clock vao duong link duoi de hoan tat thu tuc         
            </p>
            <div>
                <a href=${dataSend.redirectLink} target="_blank" >Click here</a>
            </div>

            <div> Xin chan thnah cam on</div>
            `
    }
    if (dataSend.language === 'en') {
        result = 
            `
            <h3>Xin chao ${dataSend.patientName}!</h3>
            <p>idk why u gained this message but that how u die if u wont go health examination at my clinic</p>
            <p>medical appointment ìnỏmation</p>
            <div><b>Doctor: ${dataSend.doctorName}</b></div>
            <div><b>Time:  ${dataSend.time}</b></div>

            <p>if all information above is correctly, please click on the link below for continute       
            </p>
            <div>
                <a href=${dataSend.redirectLink} target="_blank" >Click here</a>
            </div>

            <div> Thanks </div>
            `
        }

        return result;
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail
}