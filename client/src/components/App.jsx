import React, {useState, useEffect} from "react";


function App() {

  const Record = (props) => (
      <li onClick={() => {
        deleteRecord(props.record._id);
      }
    }>
      {props.record.name}
      </li>
   );

  const [newItem , setItem] = useState("");
  const [listItem , setList] = useState([]);
  
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/record/`);
 
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
 
      const listItem = await response.json();
      console.log(listItem)
      setList(listItem);
     }
 
    getRecords();
 
    return;
  }, [listItem.length]);
  //   }
  // });

 
  function handleChange(event){
    console.log(event.target.value)
    const newListItem = event.target.value
    setItem(newListItem)
  }

  function handleClick(){
      setList(previous => {
        return [...previous, newItem]
      });
      setItem("")
     
     const newListItem = {name : newItem}
     fetch("http://localhost:5050/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newListItem),
   })
   .catch(error => {
     window.alert(error);
     return;
   });

  }

  async function deleteRecord(id) {
    await fetch(`http://localhost:5050/record/${id}`, {
      method: "DELETE"
    });
 
    const newRecords = listItem.filter((el) => el._id !== id);
    setList(newRecords);
  }
 
  function recordList() {
    return listItem.map((record) => {
      return (
        <Record
          record={record}
          key={record._id}
        />
      );
    });
  }


 
    
  return (
    
    
    <div className="container">
      <div>
      
      </div>
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
        {recordList()}
        </ul>
      </div>
    </div>
  );
}

export default App;