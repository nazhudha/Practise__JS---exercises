import { useState } from 'react';
import './WeaterApp.css';

export const WeaterApp = () => {
    const isRaining = true;
    const LoreumText = "Lorem Ipsum Paragrah text: is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
    {/* Using Variables to Update4 Values */}   


    return <div>
        <h1>1. Weather App</h1>
        {isRaining ? 
            <div><h2>This is true</h2><p>It is now Raining</p></div> 
            :<div><h2>This is False</h2><p>It is not Raining</p></div>
        }
        {isRaining && <p>ONLY whenTrue</p>}
        <p>{LoreumText}</p>
        {/* COMMENT TEST */}     
    </div>
  }

{/* Using Props to Set Values */}  
  export const Button = (props) => { 
    return <div>
        <button onClick={() => {
          console.log("Click worked");
          alert("it worked - check console.log too")
        }} >{props.buttonText}</button>
          
    </div>
  }


  {/* Destrucing Props for Value Inputs */}    
  export const BannerPage = ({titleText, description}) => { 
    return (
        <div className="bannerPage">
          <h1>{titleText}</h1>
          <p>{description}</p>
        </div>
    )
  }

  export const LightSwitch = ({on}) => {
    return <>
      {on ? <h1>2. turned ON </h1> :<h1>turned OFF </h1>}
      {!on && <button>Please Turn On</button>}
      {on && <button>Please Turn Off</button>}
    </>

  }

  export const List = ({ListItem}) => {
    return <ol>
      <h1>3. List Items</h1>
      {ListItem.map(item => {
       return  <li>{item}</li>
        })}
    </ol>
  }

  export const Counter = () => {
    const [Currentnumber, updateNumber] = useState(-2)

    return <div>
      <h1>4. Number Counter is: {Currentnumber}</h1>
      <button onClick={() => {
        console.log(updateNumber)
        updateNumber(Currentnumber + 1)
      }}>Increment

      </button>
    </div>
  } 

  export const Addname = () => {
    const [currentName, setName] = useState("")
    const [outPut, setOutput] = useState("")

    return <div>
      <h1>5. Inputs</h1>
      <input onChange={(event) => setName(event.target.value)
      } />
      <button onClick={() => {
        console.log(currentName)
        setOutput(currentName)
      }} >Log vlaue</button>
      <p>current output: {outPut}</p>
    </div>
  }