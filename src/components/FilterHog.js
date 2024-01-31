import React from "react";

function FilterHog( {onSortBy, onClickGreased} ) {
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
                Only Greased Hogs
            </button>
        </div>
    )
}

export default FilterHog