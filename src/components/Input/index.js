import React, { useState, useContext } from "react"
import { TodoContext } from "../../context/todostore"
import "./input.css";


const Input = () => {
    const [note, setNote] = useState("");
    const { genarateNote }  = useContext(TodoContext)
    
    return(<div className="input">
        <input type={"text"}   value={note} onChange={(e) => setNote(e.target.value)}/>
        <input type={"button"} value={"Add Todo"} onClick={() =>{ 
            genarateNote(note) 
            setNote("")
            }} />
    </div>)
}


export default Input