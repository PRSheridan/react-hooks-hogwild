import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
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
	return (
		<div className="App">
			<Nav />
			<FilterHog/>
			<HogList/>
		</div>
	);
}

export default App;
