import React from 'react'
import { useState } from 'react'

function Textfield() {
    const [name, setName] = useState("");
    const [data, setData] = useState([]);

const addData=()=>{
    setData([...data,name])
    console.log(data)
    setName("")
}
function removeTask(i){
const list2 =data.filter((element,id)=>{
return i!=id;
})
setData(list2)
}

    return (
        <>
        <div className='container'>
            <input className='text' placeholder='Type your tasks' type="text" value={name}  onChange={(event) =>{console.log(event); setName(event.target.value)}}/>

            <button onClick={addData} className='add'> Add</button>
        </div>

        <div className="data">
           <div className="dataValue">
            <h4>Task</h4>
            <h4>Remove</h4>
            </div> 

            {data.map((list,i)=>{
                return(
                    <div className='addedData'>
                    <p key={i}><div className='list2'>{list}</div></p>
                    <button className='add'onClick={()=>removeTask(i)}>Remove</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Textfield
