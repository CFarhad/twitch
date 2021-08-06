import React from 'react';
import {SkeletonCircle} from '@chakra-ui/react'
import {GoPrimitiveDot} from 'react-icons/go'
import './SidebarStream.css'
import { connect } from 'react-redux';

function SidebarStream(props) {
  let {name , category , profile , status , videos , responsive} = props
  return (
    <div className="sidebar__stream" style={{margin: responsive === 16 ? null : "10px 0 10px 5px"}}>
      {responsive === 16 
      ? (
        <>
          {profile ? (<img
            style={{filter: !status ? "grayscale(100%)" : ''}}
            alt="streamer_logo"
            src={profile}
          />) : <SkeletonCircle />}
          <div className="sidebar__stream_profile">
            <div style={{display: "flex",justifyContent:"space-between"}}>
            <span style={{fontSize: "14px",fontWeight: "700"}}>{name}</span>
            {status 
            ? <div style={{display: "flex",alignItems:"center"}} ><GoPrimitiveDot color="#e91916"/><span style={{fontSize:"14px"}}>{status.view}</span></div>
            : <span style={{fontSize: "13px"}}>Offline</span>
            }
            </div>
            {category 
            ? <span style={{color: "#adadb8",fontSize:"13px",width:"68%"}} className="truncate">{category}</span>
            : videos ? <span style={{color: "#adadb8",fontSize:"13px"}}>{videos} new videos</span> : ""
            }
          </div>
        </>
      ) 
      : (
        <>
          {profile ? (<img
            style={{filter: !status ? "grayscale(100%)" : ''}}
            alt="streamer_logo"
            src={profile}
          />) : <SkeletonCircle />}
        </>
      )}
    </div>
  );
}

const mapStateToProps = state=>{
  return {
    responsive: state.Responsive
  }
}

export default connect(mapStateToProps)(SidebarStream);
