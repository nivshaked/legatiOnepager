import React from "react";
import ReactDOM from "react-dom";

import LearnMore from "./LearnMore.js"
import Email from "./Email.js"
export default class HowItWorks extends React.Component{
	learnMore(element){


	}
	render() {
		const style = { 
			

		}; 
		return ( 
			<div className="how-it-works">
				<div className='container'>

				<div style={{marginTop : 30}}className='row'> 
					<div className="col-md-4 align-center">
					
						{/*<img className="gif" src="./img/animat-pencil-color.gif"></img>*/}
						<div className='notebook-icon'></div>
						
					</div>
					<div className="col-md-4 align-center">
					
						<img className="gif community-gif" src="./img/animat-lightbulb-color.gif"></img>
						
					</div>
					<div className="col-md-4 align-center">
					
						{/*<img className="gif" src="./img/animat-pencil-color.gif"></img>*/}
						<div className='trophy-icon'></div>
						
					</div>

				</div>

				<div className='row'>
					<div className="col-md-4">
					<h2 className="digital-notebook-heading"> Share Content </h2>
					</div>
					<div className="col-md-4">
					<h2 className="community-heading">Get Feedback</h2>
					</div>
					<div className="col-md-4">
					<h2 className="community-heading">Become Awesome</h2>
					</div>

				</div>

				<div className='row'>
					<div className="col-md-4">
					<h3>Document your lessons with video, audio and text, and share the content with your students and their parents using our app.</h3>
					
					</div>
					<div className="col-md-4">
					<h3>Based on the content you share, get suggestions for excercises, sheetmusic and new methods of teaching for each of your students.  </h3>
					
					</div>
					<div className="col-md-4">
					<h3>Become better as a teacher, and make your students better!!</h3>
					
					</div>
				</div>

				{/*<div className="row">
					
					<a  id = "learn_more_notebook" className="col-md-4">Learn more</a>
					
					<a  id = "learn_more_notebook" className="col-md-4">Learn more</a>
	
					<a id="learn_more_community" className="col-md-4">Learn more</a>
				</div>*/}
				{/*<LearnMore/>*/}
				<Email/>	
				</div>
			</div>

		)
	}
}