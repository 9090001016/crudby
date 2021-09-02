import React, { useState } from 'react'
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
  
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };

const StateManagement = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState("");
    const [date, setDate] = useState('');
    const [exp, setExp] = useState('');
    const [items, SetItems] = useState(getLocalData());
    const addItem =()=>{
        if(!name && !email && !date && !exp){
            alert("plz fill the data");
        }else{
            const myData ={
                id:new Date().getTime().toString(),
                myName: name,
                myEmail: email,
                myDate: date,
                myExp: exp,
            };
            SetItems([...items,myData]);
            setName('');
            setEmail("");
            setDate('');
            setExp('');
        }
    }
    const deleteItem =(index)=>{
        const remainingItem = items.filter((curElem)=>{
            return curElem.id !== index;
        });
        SetItems(remainingItem);
        };
    return (
        <>
        <div className="addItems">
        <input type="text" placeholder="Add Name" className="form-control" value={name}
        onChange={(e)=>setName(e.target.value)} /><br />
        <input type="email" placeholder="Add Email" className="form-control" value={email}
        onChange={(e)=>setEmail(e.target.value)} /><br />
         <input type="date" placeholder="Dob" className="form-control" value={date}
        onChange={(e)=>setDate(e.target.value)} /><br />
        <input type="Number" placeholder="Add your experience" className="form-control" value={exp}
        onChange={(e)=>setExp(e.target.value)} /><br />
        <button onClick={addItem}>Submit</button>
        </div>
        <div className="showitems">
        {items.map((curElem)=>{
            return(
                <div key={curElem.id}>
                <h3>{curElem.myName}</h3>
                <h3>{curElem.myEmail}</h3>
                <h3>{curElem.myDate}</h3>
                <h3>{curElem.myExp}</h3>
                
                <button onClick={()=>deleteItem(curElem.id)}>Delete</button>
                </div>
            )
        })}
        </div>
        </>
    )
}

export default StateManagement
