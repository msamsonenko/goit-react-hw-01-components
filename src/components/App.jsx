import data from './profile/user.json';
import Profile from './profile/Profile';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
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
