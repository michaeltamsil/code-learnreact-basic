class Button extends React.Component {
	constructor(props ){
		super(props)
        
		this.state = {
			text: 'Click me!',
		}
		this.handleClick = this.handleClick.bind(this)
	}
    
	handleClick() {
		console.log(this)
	}
    
	render() {
		return <button onClick={this.handleClick}>{this.props.text}</button>
	}
}

Button.propTypes = {
	text: React.prototype.string,
}

Button.defaultProps = {
	text: 'Click me!'
}

const Button = ({ text }) => (
	<button className="btn">{text}</button>
)

Button.propTypes = {
	text: React.PropTypes.string,
}

