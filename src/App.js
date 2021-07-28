import React, { useState } from "react";
import "./App.css";

import Header from "./Header";
import RoleSelect from "./RadioButtons/RoleSelect";
import ClassAttributes from "./ClassAttributes";
import Footer from "./Footer";
import HealerSelect from "./Checkboxes/HealerSelect";

function App() {
  const initialFormState = {
    role: "",
  };
  //create state and handlers
  const [radioValue, setRadioValue] = useState({ ...initialFormState });
  const [checkedValue, setCheckedValue] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setRadioValue({
      ...radioValue,
      [target.name]: target.value,
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", radioValue);
    //setRadioValue({ ...initialFormState });
  };

  return (
    <div className="App">
      <Header />
      {/* <RoleSelect
        handleChange={handleChange}
        formSubmit={formSubmit}
        radioValue={radioValue}
      /> */}
      <HealerSelect />
      <ClassAttributes />
      <Footer />
    </div>
  );
}

export default App;
