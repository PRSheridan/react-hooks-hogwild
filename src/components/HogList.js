import React from "react";
import Hog from "./Hog";

function HogList( {hogs} ) {
    return (
        hogs.map((hog) => {
            return <Hog key={hog.name} hog={hog}/>
        })
    )
}

export default HogList