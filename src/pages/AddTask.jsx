import {useState} from 'react'
import "./AddTask.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

// import {  Link } from 'react-router-dom'

const AddTask = () => {
    const Navigate=useNavigate()

    const[taskTitle,setTaskTitle]=useState("")
    const[taskName,setTaskName]=useState("")

    const submitForm = (e) =>{
        e.preventDefault()
        const data ={
          taskTitle:taskTitle,
          taskName:taskName
        }
        console.log(data)
        axios.post("http://localhost:5001/todo",data)
            .then (res=>{
            alert("Task Added")
            Navigate("/")

            })
            .catch(err=>alert(err))
        

    }
  return (
    <div className='AddTask' >  
        <h2>Add Task</h2>
        <form onSubmit={submitForm}>
        <div className="form-group">
            <label for="exampleInputEmail1">Enter Task Title</label>
            <input required onChange={(e)=> setTaskTitle(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Enter Task</label>
            <input required onChange={(e)=> setTaskName(e.target.value)} type="text" className="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>
  )
}
export default AddTask