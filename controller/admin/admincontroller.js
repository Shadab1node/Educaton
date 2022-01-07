const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Admin = require("../../model/admin/adminModel");
const Otp = require("../../model/admin/otpModel");

const createToken = (user) => {
  return jwt.sign({ user }, process.env.PROCESS_KEY, {
    expiresIn: "7d",
  });
};
exports.adminlogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Admin.findOne({ email });
    if (user) {
      const matched = await bcrypt.compare(password, user.password);
      if (matched) {
        const token = createToken(user);
        return res
          .status(200)
          .json({ msg: "You have login successfully", token, user });
      } else {
        return res
          .status(401)
          .json({ errors: [{ msg: "Password is not correct" }] });
      }
    } else {
      return res.status(404).json({ errors: [{ msg: "Email not found" }] });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error });
  }
};

exports.mailSend = async (req, res) => {
  const { email } = req.body;
  if (email === "") {
    res.status(500).json({ msg: "Email is required" });
  } else {
    try {
      const checkUser = await Admin.find({ email });
      if (checkUser) {
        let otpData = new Otp({
          email,
          code: Math.floor(100000 + Math.random() * 900000),
          expireIn: new Date().getTime() + 300 * 1000,
        });

        let optResponse = await otpData.save();
        mailer(email, otpData.code);
        return res.status(200).json({ msg: "OTP sended to your mail" });
      } else {
        return res.status(400).json({ errors: [{ msg: "Email not exist" }] });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: error });
    }
  }
};

const mailer = (email, otp) => {
  var nodemailer = require("nodemailer");
  let mailTransporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass:
        "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",
    },
  });
  var mailOptions = {
    from: "node1flyweis@gmail.com",
    to: email,
    subject: "OTP for forgot password",
    text: otp,
  };
  mailTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

exports.forgotPassword = async (req, res) => {
  var { email, code } = req.body;
  let otp = await Otp.findOne({ email: email, code: code });
  if (otp) {
    let currentTime = new Date().getTime();
    let diff = otp.expireIn - currentTime;
    if (diff < 0) {
      return res.status(400).json({ errors: [{ msg: "Token expire" }] });
    } else {
      let user = await Admin.findOne({ email: req.body.email });
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      user.password = hash;
      user.save();
      return res.status(200).json({ msg: "Password changes successfully" });
    }
  } else {
    return res.status(400).json({ errors: [{ msg: "Token Expired" }] });
  }
};
