var nodemailer = require('nodemailer');
var config  = require("../config");
function mailHost(person)
{
  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.email,
        pass: config.pass
    }
  });

  var mailOptions = {
      from: config.email,
      to: person.hEmail,
      subject: `${person.vName} is visiting you at Innovacer`,
      html:  `Following are the details of your visitor at Innovacer:
              <br><br>Name: ${person.vName}
              <br><br>Phone: ${person.vpnum}
              <br><br>Email: ${person.vEmail}
              <br><br>Check in: ${person.inTime}
              <br><br>
              <i>This mail is intended for ${person.hEmail}. Immediately delete if wrongly received.</i>`
  };
  
  smtpTransport.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        return res.notOk({
          status: 'error',
          msg: 'Email sending failed'
        });
      } 
      else {
        console.log('Message %s sent: %s', info.messageId, info.response);
        return res.ok({
          status: 'ok',
          msg: 'Email sent'
        })
      }
  });
}

module.exports = mailHost;