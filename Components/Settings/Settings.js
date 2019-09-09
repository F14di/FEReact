import React from 'react';
import SettingsNavbar from './SettingsNavbar'
import AddRole from '../Form-add/AddRole'
import AddDepartment from '../Form-add/AddDepartment'
import AddWorksite from '../Form-add/AddWorksite'


import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default class Settings extends React.Component{
    render(){
        return(<>
        <div className="">

        <BrowserRouter>
            <div>
            <SettingsNavbar />
                <Switch>
                    <Route path="/settings/add/roles" component={AddRole}/>
                    <Route path="/settings/add/department" component={AddDepartment}/>
                    <Route path="/settings/add/worksite" component={AddWorksite}/>
                </Switch>
            </div>
        </BrowserRouter>
               
        </div>
        </>)
    }
}