const mailjet = require ('node-mailjet')
.connect('d24e9be58c4d7abb6884f65111a02736', '739caadd3474f196754dea5d2363596e')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "shinubichan@gmail.com",
        "Name": "kazi"
      },
      "To": [
        {
          "Email": "kaziikram04@gmail.com",
          "Name": "kazi"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
