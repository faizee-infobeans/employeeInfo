const nodemailer = require('nodemailer')


    let mailTransporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"faizeebano98@gmail.com",
            pass:"Faizee@786"
        }
    })

    //const mail = getEmailData(to,name,type)




let mailDetails = {
    from :'faizeebano98@gmail.com',
    to:"banofaizee1@gm ail.com",
    subject:"test mail",
    text: "this is faizee"
}

module.export= {mailTransporter, mailDetails}