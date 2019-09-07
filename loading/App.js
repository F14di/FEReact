import React from 'react';

import User from './User';

import loading from '../assets/loading.gif';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            users: []
        }
    }
    
    componentDidMount(){
        //fetch data from remote api (promise)
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({
                users: json,
                isLoading: false
            }));
        }
        , 2000);
    }

    render() {
        return (
            this.state.isLoading ? 
            <img src={loading}></img>
            :
            this.state.users.map(user => <User name={user.name} city={user.address.city} />)
        );
    }
}