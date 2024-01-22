import React, {ForwardedRef, forwardRef} from "react";
import "../styling/customdialog.css";

interface customDialogProps{
    onContinue: () => void,
    title: string
}

const CustomDialog = forwardRef<HTMLDialogElement, customDialogProps>(({onContinue, title}:customDialogProps, ref:ForwardedRef<HTMLDialogElement>) => {

    const handleCancel = () =>{
        console.log("trying to cancel");
        if(ref && 'current' in ref && ref.current){
            ref.current.close();
        }
    }

    return <dialog className="customDialog" ref={ref}>
        <div id="cdLayout">
        <h2>{title}</h2>
        <div>
            <button style={{backgroundColor:"red"}} onClick={handleCancel}>Cancel</button>
            <button style={{backgroundColor:"green"}} onClick={onContinue}>Continue</button>
        </div>
        </div>
    </dialog>
})

export default CustomDialog;