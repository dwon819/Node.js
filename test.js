const nodemailer = require('nodemailer'); //nodemailer 가져오기
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "351e7ba488868e",
        pass: "d46dbeac5abb6d"
    }
};
const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });//계정정보 선언
};

let email_data = {
    from : 'dwon819@naver.com',
    to: 'dwon819@naver.com',
    subject: '테스트 메일입니다.',
    text: 'nodeMailer Test mail 입니다'
};

send(email_data);