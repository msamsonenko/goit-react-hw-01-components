import Stat from './Stat';
export default function StatsList({ followers, views, likes }) {
  return (
    <ul className="stats">
      <Stat label="Followers" quantity={followers} />
      <Stat label="Views" quantity={views} />
      <Stat label="Likes" quantity={likes} />
    </ul>
  );
}
