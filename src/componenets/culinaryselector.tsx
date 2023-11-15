import React from "react";
import TextBubble from "./textbubble";
import Card from "./card"
import "../styling/culinaryselector.css"
const CulinarySelector = () => {
    return <TextBubble>
        <div id="csLayout">
            <div id="cshead">
                <h4>Choose your Culinary Type</h4>
            </div>
            <div id="cscards">
                <div id="csfrench">
                    <Card cuisineType="Cuisine" imgPath={require('../assets/image/crepe.jpg')} name="French"
                          desc="French cuisine, renowned worldwide, is characterized by its emphasis
                           on high-quality ingredients and meticulous preparation. Known for rich
                           sauces, delicate pastries, and iconic dishes like coq au vin and
                           ratatouille, it embodies a commitment to culinary excellence and a celebration
                           of flavors."></Card>
                </div>
                <div id="csitalian">
                    <Card cuisineType="Cuisine" imgPath={require("../assets/image/pasta.jpg")} name="Italian"
                          desc="Italian cuisine, celebrated globally, is characterized by its
                           simplicity and emphasis on fresh, quality ingredients. Known for pasta
                           , pizza, and flavorful sauces, it reflects a rich regional diversity.
                            Olive oil, tomatoes, and herbs play vital roles,
                          creating a vibrant and beloved culinary tradition."></Card>
                </div>
                <div id="csindian">
                    <Card cuisineType="Cuisine" imgPath={require("../assets/image/curry.png")} name="Indian"
                          desc="Indian cuisine is a symphony of flavors, blending aromatic spices with
                           diverse ingredients. Known for dishes like curry, biryani, and dosa,
                            it reflects a rich cultural tapestry. Vegetarian and non-vegetarian
                             options abound, offering a sensory journeythrough the vibrant
                             and diverse culinary landscape of the subcontinent."></Card>
                </div>
                <div id="csjapan">
                    <Card cuisineType="Cuisine" imgPath={require("../assets/image/ramen.jpg")} name="Japanese"
                          desc="Japanese cuisine is an artful balance of simplicity and precision,
                           highlighting fresh, seasonal ingredients. Renowned for sushi, sashimi, and
                            delicate dishes like tempura, it emphasizes umami and presentation. From
                             traditional tea ceremonies to ramen stalls, Japanese cuisine
                          embodies a harmonious blend of culinary mastery and cultural tradition."></Card>
                </div>
                <div id="csamerican">
                    <Card cuisineType="Cuisine" imgPath={require("../assets/image/burger.jpg")} name="American"
                          desc="American cuisine is a diverse blend of regional flavors,
                          influenced by Native American, European, African, and immigrant
                          traditions. Known for comfort foods like macaroni and cheese,
                          barbecue culture, and iconic fast food, it reflects the nation's
                          vast culinary tapestry."></Card>
                </div>
            </div>
            <div id="csparagraph">
                <p>You can select the culinary type you want by clicking on a card above</p>
            </div>
        </div>
    </TextBubble>;
}

export default CulinarySelector;