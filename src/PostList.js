class PostList extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			posts: []
		}
	}
    
	componentDidMount() {
		Post.fetch().then(posts => {
			this.setState({
				posts
			})
		})
	}

	render() {
		return(
			<List
				collection={this.state.posts}
				textKey="excerpt"
				titleKey="title"
			/>
		)
	}
}

const UserList = ({ users }) => (
	<List
		collection={users}
		textKey="bio"
		titleKey="username"
	/>
)

List.propTypes = {
	collection: React.PropTypes.array,
	textKey: React.PropTypes.string,
	titleKey: React.PropTypes.string
}

const List = ({ collection, textKey, titleKey }) => (
	<ul>
		{collection.map(item => 
			<Item
				key={item.id}
				text={item[textKey]}
				title={item[titleKey]}
			/>
		)}
	</ul>
)

const Item = ({ text, title }) => (
	<li>
		<h1>{title}</h1>
		{text && <p>{text}</p>}
	</li>
)

Item.propTypes = {
	text: React.PropTypes.string,
	title: React.PropTypes.string
}

