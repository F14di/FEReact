import React from 'react';
import InputErrors from '../Errors/InputError';



export default class UsersTableRow extends React.Component{
    // constructor(){
    //     super();
        
    // }

    
    render(){
        if (this.props.errors.isEmpty){
            return <InputErrors/>;
        }
        
        return (
            <tr
            onDoubleClick={this.props.doubleClick}>
                <td><Link to="/">{this.props.user.number}</Link></td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.roles}</td>
                <td>{this.props.user.department}</td>
                <td>{this.props.user.worksite}</td>
            </tr>
        );
    }
}