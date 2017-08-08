var express=require("express");
var bodyparser=require("body-parser");
var app=express();
var PORT=5000;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());
app.use(bodyparser.json({type:"application/vnd.api+json"}));

require("./app/routing/apirouting.js")(app);
require("./app/routing/htmlrouting.js")(app);

app.listen(PORT, function(){
  console.log("app listening on PORT:"+PORT);
});