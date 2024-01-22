import React from "react";
import "../styling/textinput.css"

interface numberInputProps{
    title: string
    placeholder: string
    sendUserInput: (input:string, val:any) => void
    type: string
}

const NumberInput = ({title, placeholder, sendUserInput, type}:numberInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const inputValue = e.target.value;
        const validValues: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

        if (validValues.includes(parseInt(inputValue))){
            e.target.classList.remove("wrong");
            sendUserInput(type, inputValue);
        } else if (!e.target.classList.contains("wrong")) {
            e.target.classList.add("wrong");
        }

    };

    return <div id="tiFormDiv">
            <input id="tiInput"
                   type="number"
                   required
                   name="input"
                   maxLength={2}
                   placeholder={placeholder}
                   onChange={(e) => handleChange(e)}
            />
    </div>
}

export default NumberInput;