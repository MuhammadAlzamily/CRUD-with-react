import React, { useState } from 'react'


const SomeForm = ()=>{

    const [name,setname] = useState("");
    const [age,setage] = useState("");
    const [address,setaddress] = useState("");
    const formSubmitHandler = async(e)=>{
      e.preventDefault();
      try {
        fetch("http://localhost:5000/users/",{
          method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({name,age,address}),
        });
        
      } catch (err) {
        console.error(err.message);
      }
    };

    return <div>
           <form onSubmit={formSubmitHandler}>
      <div className="form-group">
        <label htmlFor="" > Name</label>
        <input type="text" className="form-control" value={name}
        onChange={
          e=>{setname(e.target.value)}
        }/>
        <label htmlFor="" > Age</label>
        <input type="text" className="form-control" value={age}
        onChange={
          e=>(setage(e.target.value))
        }/>
        <label htmlFor="" > Address</label>
        <input type="text" className="form-control" value={address}
        onChange={
          e=>(setaddress(e.target.value))
        }/>
      </div>
      <div className="form-group">
        <input type="submit" value="Add" className="btn bg-info text-white" />
      </div>
    </form>
    </div>
};

export default SomeForm