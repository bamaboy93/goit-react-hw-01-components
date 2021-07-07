import React from 'react';

import SocialProfile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Container from './components/Container/Container'


import { avatar, name, tag, location, stats } from './components/user.json'
import statisticalData from './components/statistical-data.json'
import friends from './components/friends.json';
import transactions from './components/transactions.json';

const App = () => (
    <Container>
        <SocialProfile
        avatar={avatar}
        alt={name}
        name={name}
        tag={tag}
        location={location}
        stats={stats} />
    
        <Statistics stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
    </Container>
      
);

export default App;