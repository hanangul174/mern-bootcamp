import React from 'react'
import "./main.css"
function Main() {
    const[Todo,setTodo]=React.useState([]);
    const[edit,setedit]=React.useState("");
    const[idstore,setidstore]=React.useState(null);
    const[show,setshow]=React.useState(false);
    const [display,setdisplay]=React.useState("");
    const handleonclick=()=>{
        if (display===""){
            alert("please enter task")
        }
        else{
        const value=[...Todo,display];
        setTodo(value);
        setdisplay("");
    }
}
    const handleondelete =(val)=> {
        const del=Todo.filter((v)=>v !==val);
        setTodo(del);
    }
    const handleonedit =(val,index) => {
        setidstore(index)
        setshow(!show);
     if(edit){
        const replic = Todo.map((e, i)=>{
        if(i===index){
            e = edit
        }
        return e;
    });
    setTodo(replic);
    setedit('');
       console.log('check', replic) 
    } }


  return (
    <div className='container'>
        <div className='todo_container'>
            <div className='header'>
                <div className='bar'/>
                <div className='title'> 
                    Tasks List
                </div>
                <div className='bar'/>
            </div>
            <div className='input'>
                <input className='input_field'value={display} onChange={(e)=>setdisplay(e.target.value)} type="text" />
                

                <button className='button_design' onClick={handleonclick}>+</button>
            </div>
            <div className='result'>
                {Todo.map((val,index)=>(
                <div className='result_output' key={index}>
                    <input className='result_content' disabled={show && idstore===index ?false :true}  value={show && idstore===index?edit :val} onChange={(e)=>setedit(e.target.value)}/>
                 
                    <div className='buttons_action'>
                        <button className='btn' onClick={()=>handleonedit(val,index)}>{show && idstore===index?"save":"edit"}</button>
                    
                        <button className='btn' onClick={()=>handleondelete(val)}>delete</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Main