import React from 'react';

export default class ListRoles extends React.Component{
render(){
    return(<>
     <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">{this.props.title}</label>
        <select multiple className="form-control" id="exampleFormControlSelect2" disabled={this.props.disabled}>
        {this.props.options.map((option,i)=>(<option key={i}>{option}</option>))}

        </select>
    </div>
    </>)
}
} 