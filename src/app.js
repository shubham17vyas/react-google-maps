import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'

class App extends Component {
	render(){
		const location = {
			lat: 41.7369803,
			lng: -111.8338359 
		}
		const markers = [
			{
				location:{
					lat: 41.7369803,
					lng: -111.8338359 
				}
			}
		]
		


		return (
			<div>
				This is a REACT app!!
				<div style={{width:300, height: 600, background:'red'}}>
					<Map center={location} markers={markers} />
					
				</div>
				<Places />
				
			</div>

		)
	}
}


ReactDom.render(<App />, document.getElementById('app'));