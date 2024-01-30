import React, {useState} from "react";

function Hog( {hog} ) {
    const [isClicked, setIsClicked] = useState(false)

    function handleHogClick() {
        setIsClicked(isClicked ? false : true)
    }
    return (
        <div className="pigTile" onClick={handleHogClick}>
            <h3>{hog.name}</h3>
            <img className="minPigTile" src={hog.image} alt={`${hog.name}`}/>
            <div>{isClicked ? "Click to Hide" : "Click to Show"}
                
            </div>
        </div>
    )
}

export default Hog