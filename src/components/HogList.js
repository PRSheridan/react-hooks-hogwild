import React from "react";
import Hog from "./Hog";

function HogList( {hogs, sort, greaseClicked} ) {
    console.log(sort)

    function compareWeight(a, b){
        return a.weight - b.weight;
    }
    function compareName(a, b) {
        const textA = a.name.toLowerCase();
        const textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }

    function filterHogs() {
        const filteredHogs = [...hogs];
        if (greaseClicked) { filteredHogs.filter((hog) => hog.greased === true) }
        if (sort === "weight") 
        { hogs.sort(compareWeight) } else 
        { hogs.sort(compareName) }
        return filteredHogs
    }

    return (
        filterHogs.map((hog) => {
            return <Hog key={hog.name} hog={hog}/>
        })
    )
}

export default HogList