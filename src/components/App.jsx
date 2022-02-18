import user from './profile/user.json';
import data from './statistics/data.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Sattistics';
export const App = () => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <div>
      <div>
        <Profile
          avatar={avatar}
          username={username}
          tag={tag}
          location={location}
          stats={stats}
        />
      </div>
      <div>
        <Statistics props={data} />
      </div>
    </div>
  );
};
