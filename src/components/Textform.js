import React,{useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = () =>{
           // console.log("upparcase was clicked " + text);
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("convert to upprcase is successfully", "success");
           
    }

    const handleLoClick = () =>{
       // console.log("upparcase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("convert to lowercase is successfully", "success");
       
}
    const handleOnChange = (event) =>{
        console.log("on change  ")
        setText(event.target.value);
        
    }   
    const [text, setText] = useState('Enter Text here');

  return (
      <>
    <div  className="container" style={{color: props.mode=== 'dark' ? 'white' :'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                style={{backgroundColor: props.mode=== 'dark' ? '#13466e' :'white' , color: props.mode=== 'dark' ? 'white' :'#042743' }} id="MYBOX" rows="5"></textarea>
            </div>
            
            <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={handleUpClick}>Convert into upparcase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert into lowercase </button>

    </div>
    <div  className="container  my-3 "style={{color: props.mode=== 'dark' ? 'white' :'#042743'}}  >
        <h1>your text  </h1>
        <p>{text.split(" ").filter((element) =>{return element.length!==0}).length}words and {text.length} charcter</p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length } Minutes read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the to preview it here "}</p>
    </div>
    </>
  )
}
