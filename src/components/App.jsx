// import './normalize.css'
import data from './profile/user.json';
import Profile from './profile/Profile';
export const App = () => {
  return (
    <div>
      <Profile
        avatar={data.avatar}
        username={data.username}
        tag={data.tag}
        location={data.location}
        stats={data.stats}
      />
    </div>
  );
};
