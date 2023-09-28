const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();



// データベース接続
mongoose.connect(process.env.MONGOURL)
.then(() =>{
  console.log("DBと接続中...");
})
.catch((err) => {
  console.lgo(err);
});


//ミドルウェアの設定
app.use(express.json());
app.use("/app/users",userRoute);
app.use("/app/auth",authRoute);
app.use("/app/post",postRoute);

app.get("/",(req,res) => {
  res.send("hello express");
});

app.listen(PORT,() => {
  return console.log("サーバーが起動しました")
});