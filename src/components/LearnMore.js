import React from "react";
import ReactDOM from "react-dom";

export default class LearnMore extends React.Component{
		constructor(){
			super()
			this.setState.content = {
				community : ['Expand your knowledge','See how professionals teachers teach. Learn new exercises,explanations and ideas you wouldn’t see anywhere else.',
								'Teachers support team','Use legati’s forum to ask questions and get answers on what’s important for you'],
				notebook : ['Seeing is learning',`Using video allows you to share more information, in an easy, faster and clearer way.
				Document your demonstrations so students can use them whenever they need.`, 'Organized notebook, organized mind','Legati has an easy and intuitive User interface to keep the content organized, so you could focus on what’s important.',
				'Make it a team', `Support parents who want to be involved. Share your notes, demonstrations and ideas so they could be a part of the learning process.`,
				'Motivation 2.0' , 'Show students how they played in the past to make them feel the progress, or ask them to send you a video of them playing. Young children LOVE it']
			};
		}
		//default 

		
		render() {
			return(	
				<div className='learn-more'>
						<div id = 'notebook_content' className="row">
							<div className="col-md-3">
							<h2>Seeing is learning</h2>
							<h5>Using video allows you to share more information, in an easy, faster and clearer way.
								Document your demonstrations so students can use them whenever they need.</h5>
							</div>
							<div className="col-md-3">
							<h2>Organized notebook, organized mind</h2>
							<h5>legati has an easy and intuitive User interface to keep the content organized, so you could focus on what’s important.</h5>
							</div>
							<div className="col-md-3">
							<h2>Make it a team</h2>
							<h5>Support parents who want to be involved. Share your notes, demonstrations and ideas so they could be a part of the learning process.</h5>
							</div>
							<div className="col-md-3">
							<h2>Motivation 2.0</h2>
							<h5>Show students how they played in the past to make them feel the progress, or ask them to send you a video of them playing. Young children LOVE it</h5>
							</div> 
						</div>
				</div>
							
				)
		}


}