import React, { useState } from 'react'

function App() {
  const[formData , setFormData]=useState({
    username:"",
    email: "",
    password: "",
    gender:"",
    agree:false

  });


  const handleChange=(e)=>{
    const {name , value, type, checked}= e.target;

    

    setFormData({
      ...formData,[name]: type=== 'checkbox' ? checked : value
    })
  }


  const handleSubmit = (e) => {
   e.preventDefault();

   console.log("Username:", formData.username);
   console.log("Email:", formData.email);
   console.log("Password:", formData.password);
   console.log("Gender:", formData.gender);
   console.log("Agree:", formData.agree);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='username'
      placeholder='Enter Username'
      value={formData.username}
      onChange={handleChange}
      /> <br />

      <input type="email" name='email' 
      placeholder='Enter Your email' 
      value={formData.email}
      onChange={handleChange}
      /> <br />

      <input type="password" name='password'
      placeholder='password'
      value={formData.password}
      onChange={handleChange}
      /> <br />

      <select name='gender' value={formData.gender} onChange={handleChange}>
        <option >select the Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select> <br />

      <label >Agree</label>
      <input type="checkbox" 
      name='agree'
      checked={formData.agree}
      onChange={handleChange}/>

      <button type='submit'>Submit</button>

    </form>

  )
}

export default App