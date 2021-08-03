import React from 'react';
import {SkeletonCircle} from '@chakra-ui/react'
import {GoPrimitiveDot} from 'react-icons/go'
import './SidebarStream.css'

function SidebarStream(props) {
  let {name , category , profile , status , videos} = props
  return (
    <div className="sidebar__stream">
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
    </div>
  );
}

export default SidebarStream;
