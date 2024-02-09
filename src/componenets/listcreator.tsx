import React, { useEffect, useState } from "react";
import "../styling/listcreator.css";

interface listCreatorProps {
    placeholder: string;
    sendUserInput: (input: string, val: any) => void;
    typeIngredient: boolean;
    type: string;
}

const ListCreator = ({placeholder, sendUserInput, typeIngredient, type }: listCreatorProps) => {
    const [inputList, setInputList] = useState<Array<{ input: string; amount?: string }>>([
        { input: "" },
    ]);

    useEffect(() => {
        console.log(inputList);
        sendUserInput(type, inputList);
    }, [inputList]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        e.preventDefault();

        const inputValue = e.target.value;

        // Allow empty input when deleting
        if (inputValue === "" || /^[a-zA-Z -]+$/.test(inputValue)) {
            e.target.classList.remove("wrong");
            // Update the corresponding element in the list
            setInputList((prevInputList) => {
                const updatedList = [...prevInputList];
                updatedList[index] = { ...updatedList[index], input: inputValue };
                return updatedList;
            });
        } else {
            e.target.classList.add("wrong");
        }
    };

    const handleChangeNum = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        e.preventDefault();

        const inputValue = e.target.value;

        // Allow empty input when deleting
        if (inputValue === "" || /^[a-zA-Z 0-9/]+$/.test(inputValue)) {
            e.target.classList.remove("wrong");
            // Update the corresponding element in the list
            setInputList((prevInputList) => {
                const updatedList = [...prevInputList];
                updatedList[index] = { ...updatedList[index], amount: inputValue };
                return updatedList;
            });
        } else {
            e.target.classList.add("wrong");
        }
    };


    const addInputField = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (inputList.length === 15) {
            alert("max amount of ingredients reached");
        } else {
            setInputList((prevInputList) => [...prevInputList, { input: "" }]);
        }
    };

    const removeInputField = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
        e.preventDefault();
        if (inputList.length === 1) {
            alert("lowest amount of ingredients reached");
        } else {
            setInputList((prevInputList) => {
                const updatedList = [...prevInputList];
                updatedList.splice(index, 1);
                return updatedList;
            });
        }
    };

    const displayInputFields = () => {
        return inputList.map((input, index) => (
            <div key={index} id="ingDiv">
                <input
                    id="lcInput"
                    type="text"
                    required
                    name="input"
                    maxLength={20}
                    placeholder={placeholder}
                    value={input.input}
                    onChange={(e) => handleChange(e, index)}
                />
                {typeIngredient && (
                    <>
                        <h2 id="lcTitle">:</h2>
                        <input
                            id="lcInput"
                            type="text"
                            required
                            name="input"
                            maxLength={20}
                            placeholder="Amount"
                            value={input.amount || ""}
                            onChange={(e) => handleChangeNum(e, index)}
                        />
                    </>
                )}
                {index > 0 && (
                    <button id="crButton" onClick={(e) => removeInputField(e, index)}>
                        remove
                    </button>
                )}
            </div>
        ));
    };

    return (
        <div id="lcFormDiv">
            <div id="lcInputField">
                {displayInputFields()}
                <div id="lcButtons">
                    <button id="crButton" onClick={(e) => addInputField(e)}>
                        add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListCreator;
