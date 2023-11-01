import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

// function handleChange(event){
//     console.log(event.target.value)
//     const newListItem = event.target.value
//     setItem(newListItem)
//   }

//   function handleClick(){
//       setList(previous => {
//         return [...previous, newItem]
//       });
//       setItem("")
     
//      const newPerson = {name : newItem}
//      fetch("http://localhost:5050/record", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(newPerson),
//    })
//    .catch(error => {
//      window.alert(error);
//      return;
//    });

//   }