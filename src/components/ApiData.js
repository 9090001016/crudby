import React,{useState,useEffect} from 'react'
import * as ReactBootStrap from "react-bootstrap";


const ApiData = () => {
    const [searchValue, setsearchValue] = useState(1);
    
     const apiData = async() =>{
         try{
             let url = `https://reqres.in/api/users?page=${searchValue}`;
             let res = await fetch(url);
             let maindata =  await res.json();
            const arrayData = maindata.data; 
            // console.log(arrayData.map((cur,index)=>{
            //     return cur.email;
            // }));
               const renderData = (curElem,index) =>{
                   return(
                       <tr key={index}>
                           <td>{curElem.id}</td>
                           <td>{curElem.email}</td>
                           <td>{curElem.first_name}</td>
                           <td>{curElem.last_name}</td>
                           <td>{curElem.avatar}</td>
                       </tr>
                   )
               }
            }catch(err){
             console.log(err);
         }
        }   
        console.log(apiData());
        useEffect(() => {
          apiData();
        }, []);
    return (
      <>
      <div className="main_div">
          <div className="center_div">
              <ReactBootStrap.Table striped bordered hover>
                  <thead>
                      <tr>ID</tr>
                      <tr>EMAIL</tr>
                      <tr>FIRST_NAME</tr>
                      <tr>LAST_NAME</tr>
                      <tr>AVATAR</tr>
                  </thead>
                  <tbody>
                      {arrayData.map(renderData)}
                  </tbody>
              </ReactBootStrap.Table>
          </div>
      </div>
      </>
    );
};

export default ApiData
