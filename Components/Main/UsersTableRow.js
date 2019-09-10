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
            <tr>
                <td>{this.props.user.employeeNumber}</td>
                <td>{this.props.user.firstName.concat(' ',this.props.user.lastName)}</td>
                <td>{this.props.user.roles}</td>
                <td>{this.props.user.department}</td>
                <td>{this.props.user.workSite}</td>
            </tr>
        );
    }
}