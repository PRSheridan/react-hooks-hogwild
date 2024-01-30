import React, {useState} from "react";

function Hog( {hog} ) {
    const [isClicked, setIsClicked] = useState(false)

    function handleHogClick() {
        setIsClicked(isClicked ? false : true)
    }

    function HogInfo() {
        if (isClicked) {
             return (
            <div className="normalText">
                <ul>
                    <li>{`Specialty: ${hog.specialty}`}</li>
                    <li>{`Weight: ${hog.weight}`}</li>
                    <li>{hog.greased ? "Greased hog" : "Ain't greased"}</li>
                    <li className="achievementText">{`Highest Medal Acheived: ${hog["highest medal acheived"]}`}</li>
                </ul>
            </div>
        )} else {
            return (
                <div/>
            )
        }   
    }

    return (
        <div className="pigTile" onClick={handleHogClick}>
            <h3>{hog.name}</h3>
            <img className="minPigTile" src={hog.image} alt={`${hog.name}`}/>
            <div>{isClicked ? "Click to Hide" : "Click to Show"}
                <HogInfo/>
            </div>
        </div>
    )
}

export default Hog