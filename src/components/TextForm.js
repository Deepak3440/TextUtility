import React,{useState} from 'react';


export default function TextForm(props) {
    const [text,setText]=useState('Enter the text here');
    const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upperCase","success");
    }
    const handleLoClick=()=>
    {
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("converted to Lower","success");
    }
    const handleClearClick=()=>
    {
      let newText=" ";
      setText(newText);
      props.showAlert("Clear","success");
    }

    const handleCopy=()=>{
      console.log("Copied");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied","success");
    }
    const handleExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
        props.showAlert("Remove","success");
    }


  return (
    <>
    <div>
        <h1>{props.heading}</h1>
    <div className="mb-3">
   
    <textarea className="form-control" value={text}  onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white'}}id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upperCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
  </div>
  <div className="container my-2">
    <h1> Your Text Summary</h1>
    <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p> {0.008 * text.split(" ").length}  Minutes to Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    <p>Enter Something to preview</p>
  </div>
  </>
  )
}
