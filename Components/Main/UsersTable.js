import React from 'react';
import ReactDom from 'react-dom';
import UsersTableRow from './UsersTableRow'
import {USERS} from '../../data/mockData';
import Table from 'react-bootstrap/Table'

const AdvancedSearchStyle = {
    cursor : "pointer",
    color : "blue",
    textDecoration : "underline"

}
const AdvancedSearchOptionsStyle = {
    display : "none"
}

export default class UsersTable extends React.Component{

    
    constructor(){
        super();
        this.state ={
            users :[],
            id : {value : 0, validations : {required : true, pattern : /^\d+$/}},
            employeeNumber : {value : '', validations : {required : true, minLength : 1, pattern : /^\d+$/}},
            firstName : {value : '', validations : {required : true, minLength : 2, pattern : /\d/gi}},
            lastName : {value : '', validations : {required : true, minLength : 2, pattern : /\d/gi}},
            roles : {value : '', validations : {required : true, minLength : 2}},
            department : {value : '', validations : {required : true, minLength : 2}},
            workSite : {value : '', validations : {required : true, minLength : 2, pattern : /\d/gi}},
            status : {value : '', validations : {required : true, minLength : 2}},
            errors: []
        }
        this.doubleClick = this.doubleClick.bind(this)
    }

    componentDidMount(){
        const errors = [];
        // this.setState({
        //     users:USERS
        // })

       fetch('http://localhost:8080/api/users', {
           method: 'GET',
           headers:{
            'authorization': 'basic ZmFkaUBnbWFpbC5jb206MTIzNDU2',
            'Content-Type':'application/x-www-form-urlencoded'
           },
           mode: 'no-cors'
       })
       .then(response => response.json())
       .then(users =>  this.setState({users}));
    

    
}

    showOptions(){
        const advancedSearchOptions = document.querySelector('#advancedSearchOptions');

        if(advancedSearchOptions.style.display == "flex"){
            advancedSearchOptions.style.display = "none";
            
        }
        else{
            advancedSearchOptions.style.display = "flex";
        }   
    }

    doubleClick(e){
        
        console.log(e)
    }

    render(){
        return(
            <div>
                <div className="col-8 m-auto justify-content-md-center">
                    <form>
                        <div className="form-row input-group lg-10 m-auto">
                            <input type="text" className="form-control" placeholder="Search by name" onBlur={this.searchValidation} aria-label="Search by name" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                        <div className="form-row m-auto d-flex align-items-center">
                            <div >
                                <a style={AdvancedSearchStyle} className="justify-content-md-center mr-2" onClick={this.showOptions}>Advanced Search</a>
                            </div>
                            <div  id="advancedSearchOptions" style={AdvancedSearchOptionsStyle}>
                                <div className="dropdown mr-1 mt-2">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        Role
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <a className="dropdown-item" href="#">Manager</a>
                                        <a className="dropdown-item" href="#">Employee</a>
                                        <a className="dropdown-item" href="#">Admin</a>
                                    </div>
                                </div>
                                <div className="dropdown mr-1 mt-2">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        Department
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <a className="dropdown-item" href="#">Manager</a>
                                        <a className="dropdown-item" href="#">Employee</a>
                                        <a className="dropdown-item" href="#">Admin</a>
                                    </div>
                                </div>
                                <div className="dropdown mr-1 mt-2">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                            Work Site
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <a className="dropdown-item" href="#">Manager</a>
                                        <a className="dropdown-item" href="#">Employee</a>
                                        <a className="dropdown-item" href="#">Admin</a>
                                        </div>
                                </div>
                                <div className="dropdown mr-1 mt-2">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                            Country
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <a className="dropdown-item" href="#">Manager</a>
                                        <a className="dropdown-item" href="#">Employee</a>
                                        <a className="dropdown-item" href="#">Admin</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <Table  responsive bordered 
                    className="table mt-2"
                    >
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Full Name</th>
                                <th>Roles</th>
                                <th>Department</th>
                                <th>Work Site</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* A Component for dynamically filling the table*/}
                            {
                                this.state.users.map(user => <UsersTableRow 
                                                    key={user.id}
                                                    user={user}
                                                    errors= {this.state.errors}
                                                    doubleClick={this.doubleClick}/>)
                            }  
                        </tbody>
                    </Table>
                </div>
            
            </div>
        );
    }
}

// ReactDom.render(<UsersTable/>,
//     document.querySelector('#container')
//     );