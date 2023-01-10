import React, { useState } from "react";

import Header from "../components/Header";

import {login} from "../redux/actions/loginActions"
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch=useDispatch()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!form.email || !form.password){
        alert("Boş bırakılamaz")
        return
    }
    dispatch(login(form))
  }

  return (
    <>
      <Header />
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type={"password"}
            id="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
