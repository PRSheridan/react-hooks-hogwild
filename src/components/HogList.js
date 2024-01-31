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

    const filteredHogs = filterHogs(hogs)

    function filterHogs() {
//not returning greased hogs ??
        if (greaseClicked) { 
            console.log(hogs)
            hogs.filter((hog) => { return hog.greased })
            console.log(hogs)
        }
        if (sort === "weight") 
        { hogs.sort(compareWeight) } else 
        { hogs.sort(compareName) }
        return hogs
    }

    return (
        filteredHogs.map((hog) => {
            return <Hog key={hog.name} hog={hog}/>
        })
    )
}

export default HogList