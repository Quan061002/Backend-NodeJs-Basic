import db from "../models/index";
require('dotenv').config();
import emailService from './emailService';

let postBookAppointment = (data) => {
    return new Promise(async (resolve, reject ) => {
        try {
            if  (!data.email || !data.doctorId || data.timeType  || !data.date
            
                || !data.fullName
            ) {
            resolve({
                errCode: 1,
                errMessage: 'Missing parameter'
            })             
        } else {

            await emailService.sendSimpleEmail({
                reciverEmail: data.email,
                patientName: data.fullName,
                time: data.timeString,
                doctorName: data.doctorName,
                language: data.language,
                redirectLink: 'https:wwww.twitter.com/Nagoonimation'
            })

            let user = await db.User.findOrCreate({
                where: { email: data.email },
                defaults: {
                    email: data.email,
                    role: 'R3'
                },
            });
            console.log('quana check user: ', user[0])

            if (user && user[0]) {
                await db.Booking.findOrCreate({
                    where: { patientId: user[0].id},
                    defaults: {
                        statusId: 'S1',
                        doctorId: data.doctorId,
                        patientId: user[0].id,
                        date: data.date,
                        timeType: data.timeType
                    }
                })
            }
            resolve({
                errCode: 0,
                errMessage: 'Save infor patient succeed'

            })
        }
        
        
        }catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    postBookAppointment: postBookAppointment
}
