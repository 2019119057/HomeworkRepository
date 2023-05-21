const express = require ("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("hello World");
});

app.get("/posts", function(req,res){
    res.json([
        {postID :1, title: "hello"},
        {postID :2, title: "World"},
    ]);
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("실행");
    console.log(`서버주소 : http://localhost:${PORT}`);

});

