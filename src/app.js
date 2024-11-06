const express = require("express");
const app = express();
const { adminAuth } = require("./middleware/auth");
//middleware
app.use("/admin", adminAuth);
//Request handler
app.use("/admin/test", (req,res) => {
  res.send("Talking from /test");
});
app.get("/admin/hello", (req,res) => {
  res.send("Talking from /hello");
});
app.use("/", (err, req, res, next) => {
    if(err){
        console.log(err)
        res.status(500).send("Something went wrong")
    }
//   res.send("Hello from the server's default path");
}); //write this route always at the end other wise our routing will always fall into this wildcard route

app.listen(3333, () => {
  console.log("Listening to 3333");
});
