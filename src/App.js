import './App.css';
import Button from "./Button";
import {useState} from "react";

function App() {
    const [isLongButton, setLongButton] = useState(false)


    return (
        <div className="App">
            <div>привет</div>
            <Button className={isLongButton ? 'longButton' : 'button'} text='asd'
                    onClick={() => setLongButton(!isLongButton)}/>
        </div>
    );
}

export default App;
