import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
require('../../scss/style.scss');


const App = () => (
    <div className='App'>
        <h2>User List:</h2>
        <UserList />
        <hr/>
        <h2>User Twitter Messages:</h2>
        <UserDetail />
    </div>
);

export default App;