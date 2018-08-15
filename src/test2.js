const Profile = ({ user }) => (
	<div>
		<div>Username: {user.username}</div>
		<div>Age: {user.age}</div>
	</div>
)

Profile.propTypes = {
	user: React.PropTypes.object,
}