import Profile from 'components/Profile';
import StatisticList from 'components/StatisticsList';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

import user from 'json-data/user';
import data from 'json-data/data';
import friends from 'json-data/friends';
import transactions from 'json-data/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList title="Upload stats" stats={data} />
      <StatisticList stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transactions} />
    </>
  );
};
