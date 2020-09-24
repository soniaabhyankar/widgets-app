import React, { useState } from 'react';
import Header from './components/Header';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './Route';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework.'
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS library among engineers'
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components'
	}
];

const dropdownOptions = [
	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'The Color Blue',
		value: 'blue'
	},
	{
		label: 'The Color Green',
		value: 'green',
	}
]

export default () => {
	const [selected, setSelected] = useState(dropdownOptions[0]);

	return (
		<div className="ui container">
			<h1 style={{ textAlign: 'center' }}>Widgets</h1>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>

			<Route path="/list">
				<Search />
			</Route>

			<Route path="/dropdown">
				<Dropdown
					label="Select a Color"
					options={dropdownOptions}
					selected={selected}
					onSelectedChange={setSelected}
				/>
				<p style={{ color: `${selected.value}` }}>This text is {selected.value}!</p>
			</Route>

			<Route path="/translate">
				<Translate />
			</Route>
		</div >
	);
};