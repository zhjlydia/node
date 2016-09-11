var express=require('express');
var port=process.env.PORT||4000;
var app=express();

app.set('views','./views');
app.set('view engine','jade');
app.listen(port);
console.log('started '+port);

app.get('/',function(req,res){
    res.render('index',{
        title:'首页'
    })
})

app.get('/detail',function(req,res){
    res.render('detail',{
        title:'详情页'
    })
})

app.get('/admin',function(req,res){
    res.render('admin',{
        title:'后台'
    })
})

app.get('/list',function(req,res){
    res.render('list',{
        title:'列表'
    })
})