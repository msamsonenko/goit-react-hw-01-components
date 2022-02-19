import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendlist/friends.json';
import transactions from './transactionHistory/transactions.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Sattistics';
import Friendlist from './friendlist/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';
import './App.css';
export const App = () => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <div>
      <div className="task-wrapper">
        <p className="task">Task 1</p>
        <Profile
          avatar={avatar}
          username={username}
          tag={tag}
          location={location}
          stats={stats}
        />
      </div>
      <div className="task-wrapper">
        <p className="task">Task 2</p>
        <Statistics title="Upload stats" props={data} />
      </div>
      <div className="task-wrapper">
        <p className="task">Task 3</p>
        <Friendlist friends={friends} />
      </div>
      <div className="task-wrapper">
        <p className="task">Task 4</p>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
