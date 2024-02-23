import React from "react";
import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { tableData } from "./common";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./api";

function App() {
  const [formName, setFormName] = useState('')
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.user.data) ?? []

  useEffect(()=> {
    dispatch(fetchUser())
  }, [window])

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(formName){
      
    }
  }

  return (
    <div className="App">
       <form onSubmit={handleSubmit}>
          <label>Product Name : </label>
          <input type='text' value={formName} onChange={(e)=> setFormName(e.target.value)}/>
          <input type='submit'/>
       </form>
       <table>
        <tr>
          <th>name</th>
          <th>action</th>
        </tr>
        {tableData?.products?.map((item)=> {
          return (
            <tr>
              <td>{item.title}</td>
              <td>
              <button>edit</button>
              <button>delete</button></td>
            </tr>
          )
        })}
       </table>
    </div>
  );
}

export default App;
