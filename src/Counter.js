class Counter extends React.Component(){
    
	constructor(props){
		super(props)

		this.state = {
			counter: 0,
		}
		

		this.handleDecrement = this.handleDecrement.bind(this)
		this.handleIncrement = this.handleIncrement.bind(this)
	}
    
	handleDecrement() {
		this.setState({
			counter: this.state.counter -1
		})
	}
    
	handleIncrement(){
		this.setState({

		})
	}

	render() {
		return (
			<div>
				<h1>{this.state.counter}</h1>
				<Buttons
					onDecrement={this.handleDecrement}
					onIncrement={this.handleDecrement}
				/>
			</div>
		)
	}
}

const Buttons = ({ onDecrement, onIncrement}) => (
	<div>
		<button onClick={onDecrement}>-</button>
		<button onClick={onIncrement}>+</button>
	</div>
)

Buttons.propTypes = {
	onDecrement: React.PropTypes.func,
	onIncrement: React.PropTypes.func
}


const Display = ({ counter }) => <h1>{counter}</h1>

Display.propTypes = {
	counter: React.PropTypes.number
}