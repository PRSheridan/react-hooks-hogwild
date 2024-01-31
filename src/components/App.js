import React, {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import FilterHog from "./FilterHog"
import HogList from "./HogList"

/*
Notes
Components: 
DONE App: imported list, sort
DONE Hog: Title card (name and image) + click to display more (specialty, weight, greased, and highest medal achieved) + isclicked?
HogList: filter hogs greased/not + buttons for sort by name/weight
FilterHogs: button for filtering by greased or not
BONUS: hide, add, and semantic cards
*/
function App() {
	const [sort, setSort] = useState("weight")
	const [greaseClicked, setGreaseClicked] = useState(false)

	function handleSortBy(event) {
		setSort(event.target.innerText)
	}

	function handleClickGreased() {
		setGreaseClicked((greaseClicked) => !greaseClicked)
	}

	return (
		<div className="App">
			<Nav />
			<FilterHog onSortBy={handleSortBy} onClickGreased={handleClickGreased} greaseClicked={greaseClicked}/>
			<HogList hogs={hogs} sort={sort} greaseClicked={greaseClicked}/>
		</div>
	);
}

export default App;
