import React, {useEffect, useState} from "react";
import "../styling/numberslider.css"

interface numberSliderProps{
    sendUserInput: (input:string, val:any) => void
    type: string
}

const NumberSlider = ({sendUserInput, type}:numberSliderProps) => {

    const [num, setNum] = useState<number>(0)

    useEffect(() => {
        sendUserInput(type, num)
    }, [setNum])

    return <div id="tiFormDiv">
        <h2 id="crTitle">Rating: {num}</h2>
        <input type="range"
               min={0}
               max={10}
               required
               value={num}
               onChange={(e) => setNum(parseInt(e.target.value))}/>
    </div>
}

export default NumberSlider;