import React from 'react';
import UserProfileHeader from './UserProfileHeader'
import UserProfileDetails from './UserProfileDetails'
import UserProfileRoles from './UserProfileRoles';
import UserProfileChart from './UserProfileChart';
import UserProfileFooter from './UserProfileFooter';

export default class UserProfile extends React.Component{

    render(){
        return <>
        <div className="container">
            <div className="row p-0 m-0">
                <div className="col-12 mb-2 mr-3 ml-3 p-0 mt-5">
                    <UserProfileHeader />
                    <UserProfileDetails />
                    <UserProfileRoles />
                    <UserProfileChart />
                    <UserProfileFooter />
                </div>
            </div>
        </div>  


         
                
        </>
    }
}