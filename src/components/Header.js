import React from "react";
import ReactDOM from "react-dom";


export default class Header extends React.Component{
	render() {
		return (
		<nav>
			<div class='container'>
				<div class='row'>
				<img class="col-md-2"src="./img/legati-logo.jpg"></img>
				<div  class="col-md-offset-6 col-md-4 header-links">
					<a  href="#">About</a>
					<a href="#">Blog</a>
				</div>
				</div>
			</div>
		</nav>
		);
	}
}