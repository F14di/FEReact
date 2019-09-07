import React from 'react';
import ImgProfile from '../../assets/profileImg.png'

const styleProfileImg={
    backgroundColor:'white',
    borderRadius:'50%',
    width:"90px",
    right:'45px',
    top:'45px',
    zIndex:'3'
}

export default props=>(
    <>
      <h5 style={{marginBottom:'-25px'}}>Employee Name's User Profile</h5>
        <div className=" d-flex justify-content-between align-items-baseline">
            <img className="position-relative shadow" src={ImgProfile}  style={styleProfileImg}></img>
            <i className="fas fa-edit mb-1" style={{fontSize:'1.5rem', opacity:'0.8', cursor:'pointer'}}></i>
        </div>
    </>
)