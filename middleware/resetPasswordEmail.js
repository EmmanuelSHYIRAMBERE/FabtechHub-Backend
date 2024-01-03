import nodemailer from "nodemailer";

export const resetPasswordEmail = (userEmail, userNames, otpCode) => {
  let config = {
    service: "gmail",
    auth: {
      user: process.env.Email,
      pass: process.env.Password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  };
  let transporter = nodemailer.createTransport(config);

  let message = {
    from: process.env.Email,
    to: userEmail,
    subject: "Password reset OTP",

    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Password Reset - Smart Parking System</title>
    <style>
      body {
        background-color: hsl(230, 19%, 81%);
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }

      .header {
        background-color: hsl(210, 100%, 76%);
        padding: 20px;
        display: flex;
        align-items: center;
        padding: 2px 15%;
        padding-right: 25%;
        justify-content: space-between;
      }

      .header img {
        max-width: 200px;
        border-radius: 50%;
        height: auto;
        transition: all 0.3s ease-in-out;
      }

      .header h1 {
        color: hsl(328, 100%, 59%);
        font-size: 28px;
        font-weight: 700;
        margin: 0;
        padding-bottom: 10px;
        text-align: center;
      }

      .content {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: hsl(210, 60%, 98%);
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      h2 {
        color: hsl(60, 100%, 25%);
        font-size: 28px;
        margin: 0;
        padding-bottom: 10px;
        text-align: center;
      }

      p {
        color: hsl(0, 0%, 0%);
        font-size: 16px;
        margin: 0;
        text-align: left;
      }

      .otp-container {
        text-align: center;
      }

      .button-container {
        text-align: center;
        margin-top: 20px;
      }

      .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: hsl(328, 100%, 59%);
        color: hsl(210, 60%, 98%);
        font-weight: bold;
        border-radius: 5px;
        text-decoration: none;
      }

      .button:hover {
        background-color: hsl(25, 100%, 50%);
      }

      .footer {
        text-align: left;
        padding: 20px 5%;
        margin-top: 20px;
        font-size: 12px;
        color: hsl(0, 0%, 0%);
      }
    </style>
  </head>
  <body>
    <div class="header">
      <a href="https://smart-parking-system.com">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWtvKgAkMj_gzrRKUkaonxClNNp3evQwwdmPox9nDg&s"
          alt="Smart Parking System logo"
        />
      </a>
      <h1>Smart Parking System</h1>
    </div>
    <div class="content">
      <h2>Password Reset Request</h2>
      <p>
        Dear ${userNames ? userNames.split(" ")[0] : "Valued Customer"},
        <br /><br />
        You have requested to reset your password for Smart Parking System. To
        proceed, please use the following One-Time Password (OTP):
      </p>
      <br /><br />
      <div class="otp-container">
        <strong>${otpCode}</strong>
      </div>
      <br /><br />
      <p>When you have any questions or need assistance, feel free to reach out. We
        are here to help you. <br /><br />If you did not initiate this request, please ignore this message.
        </p><br /><br />
        <p>Best regards,</p>
        <br /><br />
      </div>
    </div>
  </body>
</html>



`,
  };

  transporter.sendMail(message);
};
