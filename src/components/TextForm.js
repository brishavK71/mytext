
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
    const[text, setText] = useState('Write your text here'); 
    return (
        <> 
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        
        <div className="container">
            <h1>Your Text Summary</h1>
            <p> {text === " " ? 0 : text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>
        </>
    )
}
