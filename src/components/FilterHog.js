import React from "react";

function FilterHog( {onSortBy, onClickGreased, greaseClicked} ) {
    return (
        <span className="headerText">
        <h3>Sort by:</h3>
        {["name", "weight"].map((element) => {
            return (
                <button 
                    key={element} 
                    onClick={onSortBy}>
                    {element}
                </button>
            )
        })}
            <button onClick={onClickGreased}>
                {(greaseClicked ? "remove filter" : "greased only")}
            </button>
        </span>
    )
}

export default FilterHog