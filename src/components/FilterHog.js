import React from "react";

function FilterHog( {onSortBy, onClickGreased, greaseClicked} ) {
    return (
        <div className="headerText">
        <h5>Sort by:</h5>
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
        </div>
    )
}

export default FilterHog