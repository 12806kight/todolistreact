import React, {useState, useEffect} from "react";

export default function RecordList() {
    const Record = (props) => (
        <li>{props.record.name}</li>
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
       
        const newPerson = {name : newItem}
       fetch("http://localhost:5050/record", {
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
    
     

