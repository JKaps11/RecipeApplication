import React from 'react';
import StartMessage from "./startmesesage";
import CulinarySelector from "./culinaryselector";
interface renderprops{
    option: string
}

const HomeConditionalRender = ({option}:renderprops) => {
    if(option === "CulinarySelector"){
        return <CulinarySelector/>
    }
    else if(option === ""){
        return <StartMessage/>
    }
    else{
        return <h2>
            Not rendering Properly
        </h2>
    }
}
export default HomeConditionalRender;