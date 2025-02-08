import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const StudentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold">"विद्या ददाति विनयम्" - "Knowledge gives humility"</h1>
      <Button onClick={() => navigate("/login")}>Continue</Button>
    </div>
  );
};

export default StudentPage;
