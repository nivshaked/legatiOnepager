import React from "react";
import ReactDOM from "react-dom";

export default class Email extends React.Component{
		render() { 
			return(
					<div style={{marginTop:150, marginBottom: 150}}className="row">
						<input className="email-input col-md-offset-3 col-md-4" placeholder="Let me know when I can join!"></input>
						<button className="email-input-button col-md-2 btn-primary">Send</button>
					</div>

				)

		}

	}