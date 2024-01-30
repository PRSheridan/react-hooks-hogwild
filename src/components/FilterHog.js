import React from "react";

function FilterHog(handleSortBy) {
    return (
        <div>
        <h5>Sort by:</h5>
        {["name", "weight"].map((element) => {
            return (
                <button 
                    key={element} 
                    onClick={handleSortBy}>
                    {element}
                </button>
            )
        })}
        </div>
    )
}

export default FilterHog