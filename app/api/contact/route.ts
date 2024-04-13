import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const POST = async (req: NextRequest) => {
  const { subject, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_USER,
    subject: subject,
    text: `${message} \n\n\n from : ${email}`,
  };

  let msg;
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      msg = error;
      return NextResponse.json({ message: error });
    } else {
      msg = info.response;
    }
  });
  return NextResponse.json({
    message: msg,
  });
};

export { POST };
