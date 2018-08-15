class Geolocation extends React.Component{
    
	constructor(props){
		super(props)

		this.state = {
			latitude: null,
			longitude: null
		}
		this.handleSuccess = this.handleSuccess.bind(this)
	}
    
	componentDidMount() {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(this.handleSuccess)
		}
	}
    
	componentWillUnmount() {

	}
    
	render(){
		return(
			<div>
				<div>Latitude: {this.state.latitude}</div>
				<div>Longitude: {this.state.longitude}</div>
			</div>
		)
	}
    
	handleSuccess({ coords}) {
		this.setState({
			latitude: coords.latitude,
			longitude: coords.longitude
		})
	}
}