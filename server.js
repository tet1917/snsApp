const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const PORT = 3000;

//ミドルウェアの設定
app.use("/app/users",userRoute);
app.use("/app/auth",authRoute);
app.use("/app/post",postRoute);

// app.get("/",(req,res) => {
//   res.send("hello mern");
// });

app.listen(PORT,() => {
  return console.log("サーバーが起動しました。")
});