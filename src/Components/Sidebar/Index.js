import React, { useState } from 'react'
import {Tooltip } from '@chakra-ui/react'
import {BsArrowBarLeft , BsArrowBarRight} from 'react-icons/bs'
import SidebarStream from './SidebarStream'
import {connect} from 'react-redux'
import {ToggleSidebar} from '../../Actions'
import './Index.css'

let defaultStreamer = [
  {
    id: 1,
    name: "SabaViva",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/185da68d-4005-4177-901a-4d6fb9d12932-profile_image-70x70.png",
    category: "Just Chatting",
    status :{
      view: 77
    }
  },
  {
    id: 2,
    name: "HEENofficial",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/62d8aeba-3639-4201-a263-49ba15be2cc8-profile_image-70x70.png",
    videos: "8",
  },
  {
    id: 3,
    name: "Bonnie_TheKillers",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/18dcb3d7-ed70-4f38-aec8-ed628d9b134a-profile_image-70x70.png",
    videos: "3",
  },
  {
    id: 4,
    name: "zironicdk",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/090780c1-06c0-4803-bc0b-a85c89a7ce2e-profile_image-70x70.jpeg",
    category: "Tom Clancy's Rainbow Six Siege",
    status :{
      view: 293
    }
  },
  {
    id: 5,
    name: "samirasaly",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/9a11b55f-bb54-494c-a3a7-584aa97fe859-profile_image-70x70.png",
    category: "VALORANT",
    status :{
      view: 293
    }
  },
  {
    id: 6,
    name: "Rozhiin",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/7f661041-063f-4fb5-90a7-f9cf5956c0ac-profile_image-70x70.png",
  },
]

let defaultRecommendedChannel = [
  {
    id: 1,
    name: "panizmlkz",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/d2e92124-a60c-41b1-b2c7-6ed253aeaaae-profile_image-70x70.png",
    category: "Call of Duty: Warzone",
    status :{
      view: 150
    }
  },
  {
    id: 2,
    name: "hiwagirl",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/88977d48-db27-45e2-af25-0fde4ad958f4-profile_image-70x70.png",
    category:"League of Legends",
    status :{
      view: 27
    }
  },
  {
    id: 3,
    name: "melina",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/03ed0dc1-683a-4db0-ac12-16f0573b6be2-profile_image-70x70.png",
    category:"Just Chatting",
    status :{
      view: "4.2K"
    }
  },
  {
    id: 4,
    name: "evaanna",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/d1eab6a5-72b6-42e1-8223-55d1c713cbb2-profile_image-70x70.png",
    category: "Tom Clancy's Rainbow Six Siege",
    status :{
      view: "3.6K"
    }
  },
  {
    id: 5,
    name: "SeenaCrash",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/5ffe1732-edce-4c1c-ba1e-88efcc84b4c4-profile_image-70x70.png",
    category: "Cuphead",
    status :{
      view: 303
    }
  },
  {
    id: 6,
    name: "iimOMEGA",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/dd768bee-d9e3-4460-8c17-556645edcd05-profile_image-70x70.png",
    category: "VALORANT",
    status :{
      view: 20
    }
  },
  {
    id: 7,
    name: "dytv",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/5ebfdaba-d251-41ae-8a46-65f2dde18c3a-profile_image-70x70.png",
    category: "Call of Duty: Warzone",
    status :{
      view: 44
    }
  },
  {
    id: 8,
    name: "IR6Media",
    profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/8895fe25-6028-4e42-b0fd-9699a537b141-profile_image-70x70.png",
    category: "Call of Duty: Warzone",
    status :{
      view: 833
    }
  },
]

function Index(props) {
  console.log(props)
  let {responsive , toggleSide} = props
  let filterStreamer = (list)=>{
    let online = list.filter(item=> item.status)
    return [...online,...list.filter(x => !online.includes(x))]
  }


  const allFollowedStream = defaultStreamer
  const allRecommendedStream = defaultRecommendedChannel

  const [streamers,setStreamers] = useState(filterStreamer(defaultStreamer.slice(0,5)));
  const [recommendedChannel ,setRecommendedChannel] = useState(defaultRecommendedChannel.slice(0,5))

  const [showFollowed,setShowFollowed] = useState(false);
  const [showRecommended,setShowRecommended] = useState(false);

  let showFollowedMore = ()=>{
    setStreamers(filterStreamer(allFollowedStream))
    setShowFollowed(!showFollowed);
  }

  let showFollowedLess = ()=>{
    setStreamers(filterStreamer(allFollowedStream.slice(0,5)))
    setShowFollowed(!showFollowed)
  }

  let showRecommendedMore = ()=>{
    setRecommendedChannel(filterStreamer(allRecommendedStream))
    setShowRecommended(!showRecommended);
  }

  let showRecommendedLess = ()=>{
    setRecommendedChannel(filterStreamer(allRecommendedStream.slice(0,5)))
    setShowRecommended(!showRecommended)
  }

  let sideBarToggle = (mode)=>{
    if(mode === "COLLAPSE"){
      return toggleSide(mode)
    }
    toggleSide(mode)
  }

  return (
    <div className="sidebar" style={{width:`${responsive}%`,alignItems:"center",overflowX: responsive === 16 ? null : "hidden"}}>
      <div className="sidebar__header">
        {responsive === 16 ? <span className="text-sm font-medium">FOLLOWED CHANNELS</span> : null}
        <Tooltip hasArrow placement="right" bg="white" color="black" label={responsive === 16 ? "Collapse" : "Expand"}>
          <button onClick={()=>responsive === 16 ? sideBarToggle("COLLAPSE") : sideBarToggle("EXPAND")} style={{margin: responsive === 16 ? null : "0 0 0 5px"}} >
            {responsive === 16 ? <BsArrowBarLeft size={25} className="toggleSidebar" /> : <BsArrowBarRight size={25} className="toggleSidebar" />}
          </button>
        </Tooltip>
      </div>
      {streamers.map(stream=> <SidebarStream key={stream.id} {...stream} /> )}
      {responsive === 16
        ? (
          <div>
            {allFollowedStream.length > 5 
              ? !showFollowed ? <button className="showBtn" onClick={showFollowedMore}>Show More</button> : <button className="showBtn" onClick={showFollowedLess}>Show Less</button> 
              : null
            }
          </div>
        )
        : null
      }

      {responsive === 16 
      ? (
        <div className="sidebar__header">
        <span className="text-sm font-medium">RECOMMENDED CHANNELS</span>
      </div>
      )
      : null
      }
      {recommendedChannel.map(stream=>  <SidebarStream key={stream.id} {...stream} />)}
      {responsive === 16 
        ? (
          <div>
            {allRecommendedStream.length > 5 
            ? !showRecommended ? <button className="showBtn" onClick={showRecommendedMore}>Show More</button> : <button className="showBtn" onClick={showRecommendedLess}>Show Less</button> 
            : null
            }
          </div>
        )
        : null
      }

    </div>
  )
}

const mapStateToProps = state=>{
  return {
    responsive: state.Responsive
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    toggleSide: (mode,value)=> dispatch(ToggleSidebar(mode,value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)
