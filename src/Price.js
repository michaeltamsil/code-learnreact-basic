class Price extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			price: `${props.currency}${props.value}`
		};
	}
    
	render() {
		return <div>{this.state.price}</div>;
	}
}