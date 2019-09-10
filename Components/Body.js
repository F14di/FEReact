import React from 'react';
import InputErrors from './Errors/InputError'
import {validation} from '../validations/Validations'
import {Link} from 'react-router-dom';

export default class Body extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:{value:'',errors:[],validations:{required:true, isEmail:true}},
            password:{value:'',errors:[],validations:{required:true}}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this)
    }


    handleInputChange({target:{name, value}}){
        const {validations}=this.state[name];
        const errors=[];

{/** required input validation */}
    if(validations.required){
        if (validation.isRequired(value)){
            errors.push(`*${name} is required`)}
        }

{/** Valid email input */}
        if(validations.isEmail){
            if (validation.isValidEmail(value)) 
                errors.push(`*invalid ${name}`)
         }


{/** Update the state with the errors if exist*/}
        this.setState({             
            [name]:{
                ...this.state[name],
                value:value,
                errors
            }
        });
    }


    loginSubmit(e){
        e.preventDefault();
        let noErrors = true;
    // Test each field of the form for errors
        Object.keys(this.state).forEach(name=>{
            this.handleInputChange({target:{name, value:this.state[name].value}})
        })
        
    }

render(){
    return(
        <div style={{minHeight:"82vh"}} className="d-flex flex-lg-row-reverse align-items-lg-center flex-column" > 
            <div className="flex-grow-1">
                <h3 className="text-center my-3" style={{ fontFamily:"Sans-Serif", letterSpacing:"2px"}}>
                    {/* <img style={{width:'72px', position:'relative', right:'-15px', bottom:"38px"}} src="g5185.png"></img> */}
                    <img style={{width:"29px"}} src="a_logo.png"></img>ssign {/*<i style={{color:"teal", fontSize:"23px"}} className="fas fa-terminal"></i>  */} Me 
                </h3>
                <hr className="col-12 col-md-8"></hr>
            </div>

                                {/* AVATAR */}
            <div className=" flex-grow-1 ">
                <div className="rounded shadow pt-5 pb-2 pr-4 pl-4 mt-5 ml-auto mr-auto card col-10 col-sm-8 col-md-7">
                    <div className="d-flex justify-content-center">
                        <img className="position-absolute" src="avatar.jpg" style={{width:"5rem", top:"-42px", border:"1px solid teal", borderRadius:"50%"}}></img>
                    </div>
                                {/* LOGIN FORM INPUT*/}
            <form onSubmit={this.loginSubmit}>
{/* Input Email */}
            <div className="form-group mb-3">
                <label className="mb-0" htmlFor="input__email">Email address</label>
                <div className="input-group mb-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                                <i className="fas fa-at"></i>
                        </span>
                    </div>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email" 
                    id="input__email"
                    aria-label="email"
                    name="email"
                    defaultValue={this.state.email.value}
                    onBlur={this.handleInputChange} ></input>
                </div>
                <InputErrors errors = {this.state.email.errors}/>
            </div>


{/* Input Password */}
            <div className="form-group">
                <label htmlFor="input__password">Password</label>
                <div className="input-group mb-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-unlock"></i>
                        </span>
                    </div>
                    <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="input__password"
                    name="password"
                    onBlur={this.handleInputChange}
                    aria-label="password"></input>
                </div>
                <InputErrors errors = {this.state.password.errors}/>
                <a className="nav-link text-left p-0 mb-3 mt-2" style={{"color":"teal"}}><small className="m-0">Forgot Your Password?</small></a>
            </div>


            <div className="d-flex justify-content-end">
                <button type="submit" className="mr-2 mb-3 btn btn-info"><Link to="/home" style={{color:'white'}}>Login</Link></button>
            </div>

            </form>
                

        
            </div>
        </div>
    </div>
    )}
}