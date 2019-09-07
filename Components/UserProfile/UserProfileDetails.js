import React from 'react';

export default class UserProfileDetails extends React.Component{
    render(){
        return(<>
                          
                    <div className="card mb-2">
                        <h5 className="text-center mt-3 mb-1">Details</h5>
        
                        <div className="card-body">
                            
                        <div className="row mt-0">
                            <div className="col-lg-3 col-sm-6 mb-2">
                                <small className="mb-1">First Name</small>
                                <input type="text" className="form-control" placeholder="First Name" aria-label="Username"
                                    disabled></input>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-2">
                            <small className="mb-1">Last Name</small>
                                <input type="text" className="form-control input_lastName" placeholder="Last Name" aria-label="Username"
                                    disabled></input>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-2">
                                 <small className="mb-1">Work Site</small>
                                <input type="text" className="form-control input_workSite" placeholder="Work Site" aria-label="Username"
                                    disabled></input>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-2">
                                <small className="mb-1">Manager</small>
                                <input type="button" id="link__Manager" className="form-control input_manager" value="Manager" disabled></input>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-2">
                                <small className="mb-1">Phone</small>
                                <input type="text" className="form-control input_phone" placeholder="Phone" aria-label="Username"
                                    disabled></input>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-2">
                                <small className="mb-1">email</small>
                                <input type="email" className="form-control input_email" placeholder="email" aria-label="Username"
                                    disabled></input>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-2">
                                <small className="mb-1">Department</small>
                                <input type="text" className="form-control input_department" placeholder="Department" aria-label="Username"
                                    disabled></input>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-2">
                                <small className="mb-1">Last Login</small>
                                <p type="date" className="form-control input_lastLogin">21/07/2019</p>
                            </div>
                        </div>
                    
                           



                        </div>
                    </div>
                
                
        
        
        </>)
    }
}