const Task = require('../models/tasks')
const getALLTasks = async (req,res)=> {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch(error) {
        res.status(500).json({msg: error})
    }
}

const createtask = async (req,res) =>  {
    try{ 
    const task =await Task.create(req.body)
    res.status(201).json({ task })
    } catch(error){
        res.status(500).json({msg: error})
    }
}
const gettask = (req,res)=>{
    res.json({id:req.params.id})
}
const updatetask = (req,res)=>{
    res.send('update task')
}
const deletetask = (req,res)=>{
    res.send('delete task')
}



module.exports = {
    getALLTasks,createtask,gettask,updatetask,deletetask
}
