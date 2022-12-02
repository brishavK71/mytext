
import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick= () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowClick= () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleClearText= () =>{
        let newText= '';
        setText(newText);
        props.showAlert("Text Cleared", "success")
    }

    const handleOnChange= (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy= () =>{
        var text= document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const[text, setText] = useState(""); 
    return (
        <> 
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"
                ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        
        <div className="container">
            <h1>Your Text Summary</h1>
            <p> {text.split("/\s+/").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>
        </>
    )
}
