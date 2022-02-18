import './Profile.css';
import StatsList from './StatsList';
export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <StatsList
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
}
