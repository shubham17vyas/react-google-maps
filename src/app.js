import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'
import superagent from 'superagent'

class App extends Component {
	//to have overwritten the life cycle method- check by reloding the page in dev tools console
	//now the life cycle method is registered
	componentDidMount(){
		console.log('componentDidMount')
		
		//superagent is gonna make an api request and when a response comes back it will use it an display it on map
		superagent
			.get("https://api.foursquare.com/v2/venues/search?v=20161023&ll=41.7369803,-111.8338359&client_id=LPO2GRQUEQGAWGFIA1OMFWPC2OQOXIZEBG1MPM4HESXHSWU2&client_secret=L1KZGLZHMVLHSOUHG02IA15KU0ZFPQJ5JY45TYY0FSPQ2EL4")
			.query(null)
			.set('Accept', 'text/json')
			.end((error, response) => {

				const venues = response.body.response.venues
				console.log(JSON.stringify(venues))
			})
			//above 4 functions are called promises in chronological order for handling the api
	}


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