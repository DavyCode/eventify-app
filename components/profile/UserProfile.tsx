import ProfileForm from './ProfileForm';
import classes from './user-profile.module.css';

function UserProfile() {
  // Redirect away if NOT auth

  return (
    <section className={classes.profile}>
      <h1>Your Profile</h1>
      <p>Take a moment to wire this up yourself, might learn a thing or 2</p>
      <h2>API Target endpoint: https://eventify-api.herokuapp.com/users/:userId</h2>
      <h3>1 - Make a PUT request to update user data, to the above endpoint supplying Authorization Header Bearer Token </h3>
      <h3>2 - Make a GET request to fetch user data to the same above endpoint supplying Authorization Header Bearer Token </h3>
      <hr/>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
