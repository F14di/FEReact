import React from 'react';

export default class ListRoles extends React.Component{
render(){
    return(<>
     <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
        <select multiple className="form-control" id="exampleFormControlSelect2" disabled>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
    </div>
    </>)
}
} 