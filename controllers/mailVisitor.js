var nodemailer = require('nodemailer');
var config  = require("../config");
function mailVisitor(person)
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
      to: person.vEmail,
      subject: `Your visit to ${person.hName}`,
      html:  `Following are the details of your recent visit at Innovacer:
              <br><br>Name: ${person.vName}
              <br><br>Phone: ${person.vpnum}
              <br><br>Check in: ${person.inTime}
              <br><br>Check out: ${person.outTime}
              <br><br>Host: ${person.hName}
              <br><br>
              <i>This mail is intended for ${person.vEmail}. Immediately delete if wrongly received.</i>`
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

module.exports = mailVisitor;