    import React,{useEffect,useState} from 'react'
    import {  Link } from 'react-router-dom'
    import { ImPlus } from 'react-icons/im'
    import { RiMenu2Line } from 'react-icons/ri'
    import { AiFillNotification,AiFillEdit} from 'react-icons/ai'
    import { MdDelete } from 'react-icons/md'
    import "./Home.css"
    import axios from "axios" 

    function Home() {

        const [taskData,setTaskData]=useState([]) 
       
        useEffect(()=>{

            axios.get("http://localhost:5001/todo")
            .then(res =>{           
            setTaskData((res.data))
            console.log(setTaskData)
            })
            .catch(err => alert(err))
   
          },[])


       

    return (

        <div>
            
        <div className='title'>

            <h3> 
            {/* <Link to="./"  className="btn btn-success float-right"> <RiMenu2Line /></Link>   */}
            <Link className='btn btn-primary' to="./Schedule" >Go to Schedule</Link>
            </h3>
    
            <h3>Category</h3>
        
            <Link to="./AddTask"  className="btn btn-success float-right"><ImPlus/></Link>            
            
        </div>

        <div >
            {
                taskData.map((res)=>{
                    

                    const deleteButton = (e) =>{
                       
                        axios.delete(`http://localhost:5001/todo/${res._id}`)
                        .then (res =>{
                          alert("User Deleted")
                          window.location.reload()
                         })
                        .catch(err => alert(err) )
                        }

                 return(   
                    <div className='block' key={res._id}>
                        <h4><AiFillNotification/></h4>
                        <h4>{res.taskTitle}</h4>
                        <Link to={`/EditTask/${res._id}`} >  <h4> <AiFillEdit/> </h4></Link>
                        {/* <button value={res._id} onClick={deleteButton}><h4><MdDelete/></h4></button>  */}
                       <h4><MdDelete onClick={deleteButton}  /></h4>
                    </div>
                 )})}
               

        </div>

        </div>
    )
    }

    export default Home