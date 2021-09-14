const router = require("express").Router();
const Todo = require("../models/Todo")

router.get("/",(req,res)=>{
    Todo.find((err,result)=>{
        if(err) throw new Error(err);
        res.json(result);
    })

});
router.post("/",(req,res)=>{
    Todo.create(req.body,(err,result)=>{
    res.json(result);
    })
})

router.delete("/:id",(req,res)=>{
    Todo.findOneAndRemove({_id:req.params.id},(err,result)=>{
        if(err) throw new Error(err);
        res.end();
    })
})


router.put("/:id",(req,res)=>{
    console.log("hai")
    
    Todo.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,result)=>{
        if(err) {
            console.log(err);
            throw new Error(err);}
            res.json(result);
    })
})

module.exports = router;