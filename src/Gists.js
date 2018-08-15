import {connect} from 'react-refetch'

class Gists extends React.Component {
	constructor(props) {
		super(props)

		this.state = { gists: [] }
		const connectWithGists = connect(({
			gists: 'https://api.githubcom/users/',
		}))
	}
    
	componentDidMount() {
		const endpoint = typeof url === 'function' ? url(this.props) : url

		fetch(endpoint)
			.then(response => response.json())
			.then(gists => this.setState({ gists }))
		
	}
    
	render() {
		return (
			<ul>
				{this.state.gists.map(gist => (
					<li key={gist.id}>{gist.description}</li>
				))}
			</ul>
		)
	}
}


const List = ({ data: gists }) => (
	<ul>
		{gists.map(gist => (
			<li key={gist.id}>{gist.description}</li>
		))}
	</ul>
)

List.propTypes = {
	data: React.PropTypes.array
}

const withGists = withData(
	props => 'https://api.github.com/users/gaearon/gists'
)

const listWithGists = withGists(List)


const List = ({ gists }) => (
    gists.fulfilled && (
        <ul>
            {
                gists.value.map(gist => (
                    <li key={gist.id}>{gist.description}</li>
                ))
            }
        </ul>
    )
)

List.propTypes = {
	gists: React.PropTypes.object
}

const List = ({ gists }) => (
	gists.fulfilled && (
		<ul>
			{
				gists.value.map(gist => (
					<Gist key={gist.id} {...gist} />
				))
			}
		</ul>
	)
)

const Gist = ({ description }) => (
	<li>
		{description}
		<button>+1</button>
	</li>
)
Gist.propTypes = {
	description: React.PropTypes.string,
}

const token = 'access_token=123'
const connectWithStar = connect(({
	id 
}) => ({
	star: () => ({
		starResponse: {
			url: `https://api.github.com/gists/${id}/star?${token}`,
			method: 'PUT'
		}
	})
}))

handleChangeFirstName({ target }) {
	this.setState({
		firstName: target.value
	})
}

handleChangeLastName({ target }) {
	this.setState({
		lastName: target.value
	})
}

handleSubmit(e) {
	e.preventDefault()

	console.log(`${this.state.firstName} ${this.state.lastName}`)
}

render() {
	return (
		<form onSubmit={this.handleSubmit}>
			<input type="text" onChange={this.handleChangeFirstName} />
			<input type="text" onChange={this.handleChangeLastName} />
		</form>
	)
}

const Controller = () => (
	<form>
		<input type="text" value="Hello React" />
		<button>Submit</button>
	</form>
)