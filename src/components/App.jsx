import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";
import AddHogForm from "./AddHogForm";

import initialHogs from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState(initialHogs);
	const [showGreasedOnly, setShowGreasedOnly] = useState(false);
	const [sortBy, setSortBy] = useState("all");

	function handleAddHog(newHog) {
		setHogs([...hogs, newHog]);
	}

	const filteredHogs = hogs
		.filter((hog) => (showGreasedOnly ? hog.greased : true))
		.sort((a, b) => {
			if (sortBy === "name") {
				return a.name.localeCompare(b.name);
			} else if (sortBy === "weight") {
				return a.weight - b.weight;
			}
			return 0;
		});

	return (
		<div className="App">
			<Nav />
			<div className="ui container">
				<AddHogForm onAddHog={handleAddHog} />
				<Filter 
					showGreasedOnly={showGreasedOnly} 
					onGreasedChange={setShowGreasedOnly}
					sortBy={sortBy}
					onSortChange={setSortBy}
				/>
				<br />
				<HogList hogs={filteredHogs} />
			</div>
		</div>
	);
}

export default App;
