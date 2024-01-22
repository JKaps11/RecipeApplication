import React from "react";
import "../styling/textinput.css"

interface textInputProps{
    title: string
    placeholder: string
    sendUserInput: (input:string, val:any) => void
    paragraph:boolean
    type: string
}

const TextInput = ({title, placeholder, sendUserInput, paragraph, type}:textInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const inputValue = e.target.value;

        if (/^[a-z ',.-]+$/i.test(inputValue)) {
            e.target.classList.remove("wrong")
            sendUserInput(type, inputValue);
        }
        else if (!e.target.classList.contains("wrong")){
            e.target.classList.add("wrong");
        }
    };

    return <div id="tiFormDiv">
            {paragraph ? <textarea id="tiTextArea"
                placeholder={placeholder}
                                   cols={55}
                                   rows={3}
                /> :
                <input id="tiInput"
                type="text"
                required
                name="input"
                maxLength={20}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
            />
            }
    </div>
}

export default TextInput;