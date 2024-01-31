import React from "react";
import Hog from "./Hog";

function HogList( {hogs, sort, greaseClicked} ) {
    function compareWeight(a, b){
        return a.weight - b.weight;
    }

    function compareName(a, b) {
        const textA = a.name.toLowerCase();
        const textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }

    const sortedHogs = sortHogs(hogs)

    function sortHogs() {
        if (sort === "weight") 
        { hogs.sort(compareWeight) } else 
        { hogs.sort(compareName) }
        return hogs
    }

    return (
        sortedHogs
        .filter((hog) => ( greaseClicked
            ? hog.greased
            : hog)).map((hog) => 
            <Hog key={hog.name} hog={hog}/>
        )
    )
}

export default HogList