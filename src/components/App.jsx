import Profile from 'components/Profile';
import Statistic from './Statistics/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

import user from 'json-data/user';
import data from 'json-data/data';
import friends from 'json-data/friends';
import item from 'json-data/transactions';

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
      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={item} />
    </>
  );
};
