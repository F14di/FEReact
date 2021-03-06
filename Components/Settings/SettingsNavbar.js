import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom';

export default class SettingsNavbar extends React.Component{
    render(){
        return(<>
        <div className="my-4">
            <Nav variant="tabs" defaultActiveKey="" justify >
                <Nav.Item>
                    <Link to="/settings/add/roles">Roles</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/settings/add/department">Departments</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/settings/add/worksite">WorkSite</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/settings/add/user" onClick={()=>console.log('Emad')}>Users</Link>
                </Nav.Item>
            </Nav>
        </div>
                
        </>
        )
    }
}