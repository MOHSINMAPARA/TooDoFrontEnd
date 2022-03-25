import {useState,useEffect} from 'react'
import "./EditTask.css"
import axios from "axios"
import { useNavigate ,useParams} from 'react-router-dom'


function EditTask() {

  const Navigate=useNavigate()
  const {userId} = useParams()  

  const[taskTitle,setTaskTitle]=useState({})
  const[taskName,setTaskName]=useState({})

  useEffect(()=>{

  
    axios.put(`http://localhost:5001/todo/${userId}`)
    .then (res => {
    //  console.log (res.data)
     setTaskTitle(res.data.taskTitle)
     setTaskName(res.data.taskName)
 
    })
    .catch(err => alert(err))
  
  },[])

  const submitForm = (e) =>{
      e.preventDefault()
      const data={
        taskTitle:taskTitle,
        taskName:taskName
      }
      console.log(data)
      axios.put(`http://localhost:5001/todo/${userId}`,data)
          .then (res=>{
          alert("Task Added")
          Navigate("/")

          })
          .catch(err=>alert(err))
      

  }
  return (
    <div>
      <div className='EditTask' >  
        <h2>Edit Task</h2>
        <form onSubmit={submitForm}>
        <div className="form-group">
            <label for="exampleInputEmail1">Enter Task Title</label>
            <input required value={taskTitle} onChange={(e)=> setTaskTitle(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Enter Task</label>
            <input  required value={taskName} onChange={(e)=> setTaskName(e.target.value)} type="text" className="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>
    </div>
  )
}

export default EditTask