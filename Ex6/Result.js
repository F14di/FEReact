import React from 'react';

export default class Result extends React.Component {
    render(){
        return (
            <div className="alert alert-primary text-center" role="alert">
                You chose: {this.props.number}
            </div>
        );
    }
}