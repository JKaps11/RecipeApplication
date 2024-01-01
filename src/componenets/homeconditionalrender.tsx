import React from "react";
import StartMessage from "./startmesesage";
import CulinarySelector from "./culinaryselector";
import NameSelector from "./nameselector";
import ViewRecipes from "./viewrecipes";
interface renderProps {
  option: string;
}

const HomeConditionalRender = ({ option }: renderProps) => {
  if (option === "CulinarySelector") {
    return <CulinarySelector />;
  } else if(option === "ViewRecipes"){
    return<ViewRecipes/>
  }else if (option === "NameSelector") {
    return <NameSelector />;
  } else if (option === "") {
    return <StartMessage />;
  } else {
    return <h2>Not rendering Properly</h2>;
  }
};
export default HomeConditionalRender;
