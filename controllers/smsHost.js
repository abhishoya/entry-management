var FormData = require('form-data');
var fetch = require('node-fetch');
function sendsms(data)
{
    var form = new FormData();
    form.append('VAR1',data.vName);
    form.append('VAR2',data.vpnum);
    form.append('VAR3',data.vEmail);
    form.append('To',data.hpnum);
    form.append('From','VSTRIN');
    form.append('TemplateName','entry');
    fetch('http://2factor.in/API/V1/20613569-0c98-11ea-9fa5-0200cd936042/ADDON_SERVICES/SEND/TSMS',{
            method: 'POST',
            mode: 'cors',
            body: form
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}

module.exports = sendsms;
