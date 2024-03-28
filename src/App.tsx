import React from "react";
import { useState } from "react";
import Resume from "./Resume";
import Inputs from "./Inputs";

export default function App() {
  const [inputs, setInputs] = useState({
    firstName: "Rafael",
    lastName: "Cestti",
    email: "rafaelcestti@gmail.com",
    phone: "786-361-6567",
    school: "Florida International University",
    degree: "Bachelor of Business Administration in Finance",
    schoolStartDate: "2020-08-01",
    schoolEndDate: "2024-06-01",
    company: "FTMO",
    position: "Proprietary trader",
    positionResponsibilities:
      "Analyzed market trends, risk factors, & financial data to inform trading decisions, leading to a succesful trading portfolio",
    positionStartDate: "2023-01-01",
    positionEndDate: "2023-06-01",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, inputType: string) {
    const newInputs = { ...inputs };
    newInputs[inputType] = e.target.value;
    setInputs(newInputs);
  }

  return (
    <div className="flex max-sm:flex-col">
      <Inputs inputs={inputs} handler={handleChange}></Inputs>
      <div className="flex w-full justify-center">
        <Resume inputs={inputs}></Resume>
      </div>
    </div>
  );
}
