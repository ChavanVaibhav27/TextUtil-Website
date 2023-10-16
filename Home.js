import React, { useState } from "react"

export default function Home(props)
{
  const handleUpClick=()=>{
    console.log("button is clicked");
    let newText=text.toUpperCase();
    setText(newText);
    // props.showAlert("Converted to uppercase!","success");
  
  }
  const handleCopy=()=>{
    console.log("I am Copy")
    var text=document.getElementById("myBox")
    navigator.clipboard.writeText(text.value)
    // props.showAlert("Copied to clipboard","success");
  }
  const handleLoClick=()=>{
    console.log("button is clicked");
    let newText=text.toLowerCase();
    setText(newText);
    // props.showAlert("Converted to lowercase!","success");
   }

  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    // props.showAlert("Clear text!","success");

   }
  
  const handleOnChange=(event)=>{
    console.log("onChange");
    setText(event.target.value);
  }


  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'rgb(48 38 86)', Color:props.mode==='dark'?'white':'rgb(48 38 86)'}}>
      <h4>{props.heading}</h4>
      <div className="mb-3">
        <textarea className="form-control"  value={text} placeholder="Enter your text" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#dee2e6':'white'}}id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to uppercase</button>
      
      <button className="btn btn-primary mx-1"  onClick={handleLoClick}>Convert to Lowercase</button>

      <button className="btn btn-primary mx-1"  onClick={handleClearClick}>Clear Text</button>


      <button className="btn btn-primary mx-1"  onClick={handleCopy}>Copy</button>

      



    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'rgb(48 38 86)'}}> 
      <h3>Text Summary</h3>
      <p>{text.split(" ").length} Word and {text.length} Character</p>
      <p>{0.008 * text.split(" ").length}Minute</p>
      <h3>Preview</h3>
      <p>{text.length>0 ?text:"Enter something in textbox Preview its here"}</p>

    </div>
    </>
)
  }

