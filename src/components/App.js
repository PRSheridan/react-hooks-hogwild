import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import FilterHog from "./FilterHog"
import HogList from "./HogList"

/*
Notes
Components: 
App: imported list
Hog: Title card (name and image) + click to display more (specialty, weight, greased, and highest medal achieved) + isclicked?
HogList: filter hogs greased/not + buttons for sort by name/weight
FilterHogs: button for filtering by greased or not
BONUS: hide, add, and semantic cards
*/
function App() {
	console.log(hogs)
	return (
		<div className="App">
			<Nav />
			<FilterHog/>
			<HogList hogs={hogs}/>
		</div>
	);
}

export default App;
