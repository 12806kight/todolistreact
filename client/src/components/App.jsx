import React, {useState} from "react";

function App() {

  const [newItem , setItem] = useState("");
  const [listItem , setList] = useState([])
  function handleChange(event){
    console.log(event.target.value)
    const newListItem = event.target.value
    setItem(newListItem)
  }

    async function handleClick(){
      setList(previous => {
        return [...previous, newItem]
      });
      setItem("")
     
      const newPerson = {name : newItem}
     await fetch("http://localhost:5050/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });

    }
    
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value = {newItem}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {listItem.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;