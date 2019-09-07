import React from 'react';

import List from './List';
import Result from './Result';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            number: undefined
        };

        this.onButtnClick = this.onButtnClick.bind(this);
    }

    onButtnClick(e){
        this.setState({number:e.target.innerText});
    }

    render() {
        return (
            <>
                <h1>Choose A Number</h1>
                <List numbers={[1,2,3,4,5,6]} onButtonClick={this.onButtnClick} />
                {this.state.number ? <Result number={this.state.number} /> : '' }                
            </>
        );
    }
}