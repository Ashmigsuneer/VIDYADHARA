import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to Vidyadhara Library</h1>
      <Button onClick={() => navigate("/reader-selection")}>I am a Reader</Button>
      <Button onClick={() => alert("Librarian interface coming soon!")}>I am a Librarian</Button>
    </div>
  );
};

export default Home;
