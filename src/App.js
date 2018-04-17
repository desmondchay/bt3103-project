import React from 'react';
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import './homepage/assets/css/main.css';

class App extends React.Component{
  render(){
    return(
      <div>
      <AppFrame>

    <div>
    <head>
      <title>Photon by HTML5 UP</title>
      <meta charset="utf-8" />
		  <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="assets/css/main.css" />
    </head>
    <body>
    <section id="header">
				<div className="inner">
					<span className="icon major fa-cloud"></span>
					<h1>Hi, I'm <strong>Photon</strong>, another fine<br />
					little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
					<p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
					lobortis feugiat sapien sed etiam volutpat accumsan.</p>
				</div>
			</section>
    </body>

    </div>

      </AppFrame>
      </div>
    )
  }
}

export default App;


