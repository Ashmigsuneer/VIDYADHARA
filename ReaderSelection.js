import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const ReaderSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-6">
      <h2 className="text-xl font-bold mb-4">Select Your Role</h2>
      <Button onClick={() => navigate("/student")}>Student</Button>
      <Button onClick={() => alert("Teacher interface coming soon!")}>Teacher</Button>
      <Button onClick={() => alert("Other interface coming soon!")}>Other</Button>
    </div>
  );
};

export default ReaderSelection;