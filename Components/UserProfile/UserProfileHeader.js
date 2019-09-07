import React from 'react';
import ImgProfile from '../../assets/profileImg.png'

const styleProfileImg={
    backgroundColor:'white',
    borderRadius:'50%',
    width:"90px",
    right:'45px',
    top:'45px',
    zIndex:'3',
    cursor:'pointer'
}

export default class extends React.Component{
    constructor(props){
        super(props);
        this.toggleEditMode=this.toggleEditMode.bind(this);
        this.browseImage=this.browseImage.bind(this);
    }
    toggleEditMode(){
        this.props.toggleEditMode();
    }

    browseImage(){
        this.props.browseImage();
    }

    render(){
    return(
    <>
      <h5 style={{marginBottom:'-25px'}}>{this.props.employeeName}'s User Profile</h5>
        <div className=" d-flex justify-content-between align-items-baseline">
            
            <img onClick={this.browseImage} className="position-relative shadow" src={ImgProfile}  style={styleProfileImg}></img>
            
            {!this.props.isLocked.locked&&<i 
            className="fas fa-edit mb-1"
            style={{fontSize:'1.5rem', opacity:'0.8', cursor:'pointer'}}
            onClick={this.toggleEditMode}></i>}
        </div>
    </>
    )
}
}