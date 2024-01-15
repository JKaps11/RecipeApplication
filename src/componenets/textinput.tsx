import React from "react";
import "../styling/textinput.css"

interface textInputProps{
    title: string
    placeholder: string
    sendUserInput: (input:string) => void
    paragraph:boolean
}

const TextInput = ({title, placeholder, sendUserInput, paragraph}:textInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const inputValue = e.target.value;

        if (/^[a-z ',-]+$/i.test(inputValue)) {
            e.target.classList.remove("wrong")
            sendUserInput(inputValue);
        }
        else if (!e.target.classList.contains("wrong")){
            e.target.classList.add("wrong");
        }
    };

    return <div id="tiFormDiv">
        <div id="tiTitleDiv">
            <h2 id="tiTitle">{title}</h2>
        </div>
        <div id="inputFieldDiv">
            <input id="tiInput"
                type="text"
                required
                name="input"
                maxLength={paragraph ? 200 : 20}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
            />
        </div>
    </div>
}

export default TextInput;