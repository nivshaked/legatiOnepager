import React from "react";
import ReactDOM from "react-dom";


export default class Welcome extends React.Component{

	scrollOnHowItWorks() { 
    	const speed = 900;
    	$('html,body').animate({
        scrollTop: $('#music_teachers').offset().top
    	}, speed);


	}
	render() {
		const style = {
			Style : {
				'fontSize' : '30px',
				'textAlign' : 'center'
			},
			imageStyle : {
				height : 60,
				position: 'relative',
				top : 15,
				verticalAlign: 'initial'
			},
			h2Style : {
				height : 100,
				marginTop:0
			},
			btnStyle : {
				fontSize : 24,
				height : 60,
				width : 200,
				marginTop : 60,
				backgroundColor: '#3FADE9'
			},
			newtool : {
				marginTop : 50
			},
			music_teachers : {
				 marginTop: 80, 
 				fontWeight: 100,
  				fontSize: 60,
  				color: "rgba(0, 0, 0, 0.15)",
  				paddingTop: 20
			}

		};
		
		return(
		<div className="welcome-component" style={style.Style}>
			<div className='iconrow'>
				<img className="icon col-md-offset-5 col-md-2"  src="./img/legati-icon.jpg"></img>
			</div>	
			<div className="welcome">
				<h1>Becoming a Great Music Teacher is Hard</h1>
				<h1 style = {style.h2Style}>That's Why We Are Building<div className="logospan"><img src="./img/legati-logo.jpg" style={style.imageStyle}></img></div></h1>
				<h2 className = "a-new-tool fadeIn animated" style={style.newtool}>A revolutionary tool that allows you to: </h2>
				<p className= "fadeIn animated">Document and share your lessons in an easy way<br></br>
				Increase your student's motivation and practice quality<br></br>
				Become a better teacher</p>
				<button onClick={this.scrollOnHowItWorks} style = {style.btnStyle} className="what-is-button btn-primary btn-lg fadeIn animated">
				How It Works
				</button>
				<div id="music_teachers" style = {style.music_teachers}> music teachers who care</div>
			</div>
			
			
		</div>
		);
	}
}