import React, { Fragment, useEffect, useState } from 'react'

const Items = ()=>{

    const[posts,setposts] = useState([]);

    
    const deleteUser = async(id)=>{
      const response = await fetch(`http://localhost:5000/users/${id}`,{method:"DELETE"});
      setposts(posts.filter((post)=>post.userid !== id));
    }

    const mycoolfetch = async()=>{
        const response = await fetch("http://localhost:5000/users/");
        const items = await response.json();
        setposts(items);
    }

    useEffect(()=>{
        mycoolfetch();
    },[]);
    return <Fragment>
        <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
     {posts.map(post=>{
       return <tr key={post.userid}>
         <td >{post.fullname}</td>
         <td > {post.age}</td>
         <td >{post.address}</td>
         <td > <button className="btn btn-danger" onClick={()=>deleteUser(post.userid)} > Delete</button> </td>
       </tr>
     })}
    </tbody>
  </table>
  </Fragment>
}
export default Items