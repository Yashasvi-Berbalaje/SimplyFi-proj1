import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setUsers(data)
      setLoading(false)
    })
  },[])

  return (
    loading===true?(
      <div class="sk-fading-circle">
      <div class="sk-circle1 sk-circle"></div>
      <div class="sk-circle2 sk-circle"></div>
      <div class="sk-circle3 sk-circle"></div>
      <div class="sk-circle4 sk-circle"></div>
      <div class="sk-circle5 sk-circle"></div>
      <div class="sk-circle6 sk-circle"></div>
      <div class="sk-circle7 sk-circle"></div>
      <div class="sk-circle8 sk-circle"></div>
      <div class="sk-circle9 sk-circle"></div>
      <div class="sk-circle10 sk-circle"></div>
      <div class="sk-circle11 sk-circle"></div>
      <div class="sk-circle12 sk-circle"></div>
    </div>
    ):(
      users.map(user=>(
        <div className="container">
        <div  className="card-container" style={{padding:'10px',margin:'20px 0px'}}>
           <div class="row">
             <div class="col-auto">
               <img src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`} width="200px" height="200px" alt="profilePic"></img>
                 </div>
                 <div class="col">
                   <h2>{user.name}</h2>
                   <p ><strong>Email: </strong>{user.email}</p>
                   <p ><strong>Phone: </strong>{user.phone}</p>
                   <p ><strong>Company: </strong>{user.company.name}</p>
                   <p ><strong>Website: </strong>{user.website}</p>
                   <p ><strong>Address: </strong>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                   </div>
                   </div>
                   
         </div>
     </div>
      ))
       
    )
  )
}




