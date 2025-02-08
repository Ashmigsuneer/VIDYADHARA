import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (name && email) {
      navigate("/student-main");
    } else {
      alert("Please enter name and email.");
    }
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-xl font-bold">Login / Sign Up</h2>
      <Input placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input placeholder="Enter Email / Phone" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button onClick={handleLogin}>Proceed</Button>
    </div>
  );
};

export default Login;
