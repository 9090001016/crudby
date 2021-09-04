import React,{useState,useEffect} from 'react';
const localData = () =>{
    const ListOfEmp = localStorage.getItem("mylist");
    if(ListOfEmp){
        return JSON.parse(ListOfEmp);
    }else{
        return [];
    }
}

const Home = () => {
    const [employee, setEmployee] = useState({
        fname:"",
        lname:"",
        dob:"",
        designation:"",
        image:"",
        exp:""
    });
    const [empList, setEmpList] = useState(localData());
    const [myEdit, setMyEdit] = useState('');
    let name,value;
    const getUserData =(e) =>{
        name = e.target.name;
        value = e.target.value;
        setEmployee({...employee, [name]: value});
    };
    const addItem =()=>{
        if(!employee.fname && !employee.lname && !employee.dob && !employee.designation && !employee.image && !employee.exp){
            alert('plz fill the data');
        }else{
            const myNewData = {
                id: new Date().getTime().toString(),
                firstName:employee.fname,
                lastName:employee.lname,
                DOB:employee.dob,
                Designation:employee.designation,
                Image:employee.image,
                Exp:employee.exp,
            }
            setEmpList([...empList,myNewData]);
            setEmployee.fname("");
            setEmployee.lname("");
            setEmployee.dob("");
            setEmployee.designation("");
            setEmployee.image("");
            setEmployee.exp("");

        }
    }
    const deleteItem = (id) =>{
        const updatedItem = empList.filter((curElem)=>{
            return curElem.id !== id;
        });
        setEmpList(updatedItem);
    };
    const editItem = (id) =>{
        const editedItems = empList.find((curElem)=>{
            return curElem.id === id;
        });
        setEmployee(editedItems.firstName);
        setEmployee(editedItems.lastName);
        setEmployee(editedItems.DOB);
        setEmployee(editedItems.Designation);
        setEmployee(editedItems.Image);
        setEmployee(editedItems.Exp);
        setMyEdit(id);
    }
    useEffect(() => {
        localStorage.setItem("mylist",JSON.stringify(empList));
    }, [empList])
        
    
    return (
        <>
        
        <div className="main_div">
            <div className="child_div">
                <div className="add_items">
                <h2>Employee Table</h2>
                    <input type="text" name="fname" placeholder="enter Your first name" className="form-control"
                     value={employee.fname} onChange={getUserData}autoComplete="off" />
                     <input type="text" name="lname" placeholder="enter Your last name" className="form-control"
                     value={employee.lname} onChange={getUserData} autoComplete="off" />
                     <input type="date" name="dob" placeholder="enter Your DOB" className="form-control"
                     value={employee.dob} onChange={getUserData} autoComplete="off" />
                     <input type="text" name="designation" placeholder="Designation" className="form-control"
                     value={employee.designation} onChange={getUserData} autoComplete="off" />
                     <input type="text" name="image" placeholder="image" className="form-control"
                     value={employee.image} onChange={getUserData} autoComplete="off" />
                     <input type="Number" name="exp" placeholder="enter Your experience" className="form-control"
                     value={employee.exp} onChange={getUserData} autoComplete="off" />
                     <button onClick={addItem}> Add</button>
                </div>

                {/* show Items */}
                <div className="show_items">
                {empList.map((curElem)=>{
                    return(
                        <div className="eachItem" key={curElem.id}>
                            <h3>{curElem.firstName}</h3>
                            <h3>{curElem.lastName}</h3>
                            <h3>{curElem.DOB}</h3>
                            <h3>{curElem.Designation}</h3>
                            <h3>{curElem.Image}</h3>
                            <h3>{curElem.Exp}</h3>
                            <div>
                            <button onClick ={()=>editItem(curElem.id)}>Edit Item</button>
                            <button onClick ={()=>deleteItem(curElem.id)}>Delete Item</button>
                            
                            </div>
                        </div>
                        
                    )
                })}

                </div>
            </div>
        </div>
            
        </>
    )
}

export default Home
