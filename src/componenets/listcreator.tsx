import React, {useState} from "react";
import "../styling/listcreator.css"
interface listCreatorProps{
    title:string
    placeholder: string
    sendUserInput:(arr:Array<any>) => void
    typeIngredient:boolean
}

const ListCreator = ({title, placeholder, sendUserInput, typeIngredient}:listCreatorProps)=> {
    const [numInputFields, setNumInputFields] = useState(1);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const inputValue = e.target.value;

        //makes text red if the user doesn't enter an invalid input
        //will remove it when the user fixes it
        if (/^[a-z -]+$/i.test(inputValue)) {
            e.target.classList.remove("wrong")
        }
        else if (!e.target.classList.contains("wrong")){
            e.target.classList.add("wrong");
        }
    };

    const handleChangeNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const inputValue = e.target.value;

        if (/^[a-z 0-9/]+$/i.test(inputValue)) {
            e.target.classList.remove("wrong")
        }
        else if (!e.target.classList.contains("wrong")){
            e.target.classList.add("wrong");
        }
    }

    const addInputField = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        if(numInputFields === 15){
            alert("max amount of ingredients reached")
        }
        else {
            const val = numInputFields + 1;
            setNumInputFields(val);
        }
    }

    const removeInputField = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        if(numInputFields === 1){
            alert("lowest amount of ingredients reached")
        }
        else{
            const val = numInputFields - 1;
            setNumInputFields(val);
        }
    }

    const displayInputFields = () => {
        const displayInputField = () => {
            if(typeIngredient) {
                return <div key={numInputFields + Math.random()} id="ingDiv">
                    <input
                    id="lcInput"
                    type="text"
                    required
                    name="input"
                    maxLength={20}
                    placeholder={placeholder}
                    onChange={(e) => handleChange(e)}
                />
                    <h2 id="lcTitle">:</h2>
                <input
                    id="lcInput"
                    type="text"
                    required
                    name="input"
                    maxLength={20}
                    placeholder="Amount"
                    onChange={(e) => handleChangeNum(e)}
                />
                </div>
            } else {
                return <input key={numInputFields + Math.random()}
                    id="lcInput"
                    type="text"
                    required
                    name="input"
                    maxLength={20}
                    placeholder={placeholder}
                    onChange={(e) => handleChange(e)}
                />
            }
        };

        const inputFields = [];

        for (let i = 0; i < numInputFields; i++) {
            inputFields.push(displayInputField());
        }

        return inputFields;
    };


    return <div id="lcFormDiv">
        <div id="lcTitleDiv">
        <h2 id="lcTitle">{title}</h2>
        </div>
        <div id="lcInputField">
            {displayInputFields()}
            <div id="lcButtons">
                <button id="crButton" onClick={(e) => addInputField(e)}>
                    add
                </button>
                <button id="crButton" onClick={(e) => removeInputField(e)}>
                    remove
                </button>
            </div>
        </div>
    </div>
}

export default ListCreator;