import React from "react";
import { Tabs, Tab } from "../components/ui/tabs";

const CategoriesTabs = () => {
  return (
    <Tabs className="mt-4">
      <Tab>Engineering</Tab>
      <Tab>Medicine</Tab>
      <Tab>Law</Tab>
      <Tab>Accountancy</Tab>
      <Tab>Literature</Tab>
    </Tabs>
  );
};

export default CategoriesTabs;
