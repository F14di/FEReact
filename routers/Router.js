import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Body from '../Components/Body'
import UserProfile from '../Components/UserProfile/UserProfile'
import Settings from '../Components/Settings/Settings'
import PageNotFound from '../Components/PageNotFound'


export default ()=>(
<BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={Body} exact={true}/>
            <Route path="/user-profile/" component={UserProfile} />
            <Route path="/settings" component={Settings} />
            <Route component={PageNotFound} />
        </Switch>
        <Footer />
    </div>
</BrowserRouter>
);