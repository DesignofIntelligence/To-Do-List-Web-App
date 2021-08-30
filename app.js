//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");//bind all exports to date const
const app = express();

let items = [];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true})); //for post requests
app.use(express.static("public"))
app.get("/",function(req,res){
  day = date.getDate();
  //name of file is list (must be inside views)
  res.render("list", {listTitle: day, itemsList:items});
});
app.post("/",function(req,res){
  item = req.body.newItem;
  console.log(req.body.list);
  if(req.body.list ==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }


})
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List", itemsList:workItems});
});
app.post("/work",function(req,res){
  let item = req.body.newItem;
  workItems.push();
});
app.listen(3000,function(){
  console.log("Server started on port 3000");
});
