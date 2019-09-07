import React from 'react';

export default class User extends React.Component {
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">Address: {this.props.city}</p>
                </div>
            </div>
        );
    }
}