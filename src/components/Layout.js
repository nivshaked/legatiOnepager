import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.js"
import Welcome from "./Welcome.js"
import HowItWorks from "./HowItWorks.js"
import '../App.css';
export default class Layout extends React.Component{
	constructor() { 
		super();
		

	}

	/*changeScrollPosition(position) { 


	}*/
	render() { 
		return (
			<div > 
				<Welcome/>
				<HowItWorks/>
			</div>
			)
	};

	}