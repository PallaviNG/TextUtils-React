import React, { useRef, useState } from 'react'

function TextForm({ heading,mode,showAlert }) {
    const [text, setText] = useState("");
    const inputElement = useRef();

    let handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Converted to Uppercase","success");
    }
    
    let handleLowerClick = () => {
        let lowerCaseText = text.toLowerCase();
        setText(lowerCaseText);
        showAlert("Converted to Lowercase","success");
    }
    
    let handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    let handleCopyClick = (event) => {
        const el = inputElement.current;
        el.select();
        document.execCommand("copy");
        showAlert("Copied text into Clipboard","success");
    }
    
    let handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        showAlert("Removed Extra spaces","success");
    }

    return (<>
        <div className="container" style={{color:(mode==='light')?'black':'white'}}>
            <h3>{heading}</h3>
            <div className="my-3 ">
                <textarea value={text} ref={inputElement} style={{backgroundColor:(mode==='light')?'white':'gray',color:(mode==='light')?'black':'white'}} onChange={(event) => handleOnChange(event)} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={(event) =>handleCopyClick(event)}>Copy to Clipboard</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <div className="container my-2">
                <h3>Your Text Summary</h3>
                <summary>
                    {text.split(" ").length} words and {text.length} characters 
                </summary>
                <summary>{(0.008 *text.split(" ").length).toPrecision(5)}Minutes read</summary>
                <h4>Preview:</h4>
                <p>{text.length > 0 ? text : 'Enter your text in above textbox to preview here'}</p>
            </div>
        </div>
    </>
    )
}

export default TextForm