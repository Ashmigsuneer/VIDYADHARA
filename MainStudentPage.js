import React from "react";
import { Input } from "../components/ui/input";
import { Settings } from "lucide-react";
import Tabs from "../components/Tabs";

const MainStudentPage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
        <Settings className="cursor-pointer" />
        <Input placeholder="Search books by title, author, year, edition" className="w-2/3" />
        <div className="cursor-pointer font-bold">User</div>
      </div>
      <Tabs />
    </div>
  );
};

export default MainStudentPage;
