import React, { useState } from "react";

function App() {
  const [FullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function update(event) {
    console.log(event.target.value, FullName.fName);
    // now , we need to set that state with the value properties to be
    // equal values ====> controlled -->
    // to do that we need to create a function and pass that value to it
    // const newValue = event.target.value;
    // const nam = event.target.name;
    const { name, value } = event.target;

    function moh(pro) {
      return {
        ...pro,
        [name]: value
      };
    }
    setFullName(moh);
  }
  return (
    <div className="container">
      <form>
        <h1>
          Hello world
          {FullName.fName}
          {FullName.lName}
        </h1>
        <input
          onChange={update}
          type="text"
          placeholder="fName"
          name="fName"
          value={FullName.fName}
        />
        <input
          onChange={update}
          type="text"
          placeholder="lname"
          name="lName"
          value={FullName.lName}
        />

        <button> click </button>
      </form>
    </div>
  );
}
export default App;
// assigning the object properties to their own components
//onChange method
