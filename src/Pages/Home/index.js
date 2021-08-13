import React, { useState } from 'react'
import { connect } from 'react-redux'
import {Container, Text , Grid , Box , SimpleGrid} from '@chakra-ui/react'
import {BiChevronDown} from 'react-icons/bi'
import Carousel from '../../Components/Carousel/index.jsx'
import Streamer from '../../Components/Streamer/index'
import './index.css'

let streams = [
  {
    image: "https://s4.uupload.ir/files/live_user_panizmlkz-440x248_jfk1.jpg",
    view: 455,
    profile: "https://s4.uupload.ir/files/d2e92124-a60c-41b1-b2c7-6ed253aeaaae-profile_image-70x70_6qgs.png",
    title: "🔥 WARZONE 🔥 [Persian / Fa] !donate !discord !sub !farsi 🇮🇷",
    username:"panizmlkz",
    category:"Call of Duty: Warzone",
    language: ["Persian"]
  },
  {
    image: "https://s4.uupload.ir/files/live_user_pixiieow-440x248_us3s.jpg",
    view: 160,
    profile: "https://s4.uupload.ir/files/8e8f4ea5-f8de-4c77-b275-f49e36fcb789-profile_image-70x70_fono.png",
    title: "Pixie Is Here  | !donate | !ig | !yt | !dis | !sub | !tip |",
    username:"pixiieow",
    category:"Just Chatting",
    language: ["Persian"]
  },
  {
    image: "https://s4.uupload.ir/files/live_user_iwasintheshower-440x248_tr9o.jpg",
    view: 240,
    profile: "https://s4.uupload.ir/files/63a396d8-cb54-453d-a52a-8f2c5aeec12e-profile_image-70x70_mpm7.png",
    title: "🥰 I READ EVERYTHING IN CHAT, SAY HI!! 🥰 !giveaway !ig !discord !twitter",
    username:"iwasintheshower",
    category:"Just Chatting",
    language: ["Ama","Animals","Cosplay"]
  },
  {
    image: "https://s4.uupload.ir/files/live_user_samirasaly-440x248_xx0u.jpg",
    view: 133,
    profile: "https://s4.uupload.ir/files/9a11b55f-bb54-494c-a3a7-584aa97fe859-profile_image-70x70_t7h.png",
    title: "Val OOOO Rant [ Persian / Farsi ] !lidoma !insta !tip !donate !help +18",
    username:"samirasaly",
    category:"VALORANT",
    language: ["English","Shooter","FPS"]
  },
]

let categories = [
  {
    categoryCover: "https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20Rainbow%20Six%20Siege-188x250.jpg",
    categoryTitle: "Tom Clancy's Rainbow Six Siege",
    categoryView : "6.8K",
    language: ["FPS","Shooter"]
  },
  {
    categoryCover: "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-188x250.jpg",
    categoryTitle: "Just Chatting",
    categoryView : "216K",
    language: ["IRL"]
  },
  {
    categoryCover: "https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-188x250.jpg",
    categoryTitle: "Fortnite",
    categoryView : "69.7K",
    language: ["Shooter","Action"]
  },
  {
    categoryCover: "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Warzone-188x250.jpg",
    categoryTitle: "Call of Duty: Warzone",
    categoryView : "80.3K",
    language: ["FPS","Shooter"]
  },
  {
    categoryCover: "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20by%20Daylight-188x250.jpg",
    categoryTitle: "Dead by Daylight",
    categoryView : "20.2K",
    language: ["Action","Horror"]
  },
  {
    categoryCover: "https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-188x250.jpg",
    categoryTitle: "VALORANT",
    categoryView : "152K",
    language: ["FPS","Shooter"]
  },
  {
    categoryCover: "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-188x250.jpg",
    categoryTitle: "Counter-Strike: Global Offensive",
    categoryView : "32.8K",
    language: ["FPS","Shooter"]
  },
    {
    categoryCover: "https://static-cdn.jtvnw.net/ttv-boxart/ASMR-188x250.jpg",
    categoryTitle: "ASMR",
    categoryView : "8.7K",
    language: ["IRL"]
  },
]

function Index(props) {
  let {responsive} = props
  let [streamers , setStreamers] = useState(streams)

  let showMoreLikeChannel = ()=>{
    setStreamers([
      ...streamers,
      {
        image: "https://s4.uupload.ir/files/live_user_azra-440x248_xwwb.jpg",
        view: 756,
        profile: "https://s4.uupload.ir/files/938ac45e-1b35-42f9-9d5f-587424a800da-profile_image-70x70_7z4g.png",
        title: "💦Pool💦 !socials !s",
        username:"AZRA",
        category:"Hot Tubs",
        language: ["English","Dance Music","AMA"]
      },
      {
        image: "https://s4.uupload.ir/files/live_user_bad_juju_2323-440x248_t7wi.jpg",
        view: 124,
        profile: "https://static-cdn.jtvnw.net/jtv_user_pictures/0249024f-d82d-443f-8961-8ad0bb162bd6-profile_image-70x70.png",
        title: "playing with viewers Dota 2 Pro Krappa :D [ Persian / Farsi ]",
        username:"Bad_JuJu_2323",
        category:"Dota 2",
        language: ["Language: Other","MOBA",]
      },
      {
        image: "https://s4.uupload.ir/files/live_user_maryenigma-440x248_5p92.jpg",
        view: 40,
        profile: "https://s4.uupload.ir/files/b207841e-9281-44d6-90d9-89432be28b7a-profile_image-70x70_2bar.png",
        title: "HOOOOMMMMM | Fa-Persian | +18 | ❗️YT | ❗️dis ❗️insta",
        username:"MaryENIGMA",
        category:"PUBG Mobile",
        language: ["Action","Shooter","FPS"]
      },
      {
        image: "https://s4.uupload.ir/files/live_user_mammad_hilda-440x248_hnnc.jpg",
        view: 36,
        profile: "https://s4.uupload.ir/files/e038a1bc-cf8a-4d44-9f88-9332fd3115bd-profile_image-70x70_ex2m.png",
        title: "+18 🔥acc ASLI| !donate | !insta | !yt | !discord | !sub TEST Season 2",
        username:"Mammad_Hilda",
        category:"Tom Clancy's Rainbow Six Siege",
        language: ["English","FPS","Shooter"]
      },
    ])
  }
  return (
    <div className="homePage" style={{width: `calc(100% - ${responsive}%)`}}>
      <Carousel />
      <Container maxW="full" padding="0 2rem" marginTop={12}>
        <Text fontSize="large">Live channels we think you’ll like</Text>
        <SimpleGrid columns={4} gap={3} mt={3}>
        {streamers.length > 0 
        ? streamers.map((stream,id) => <Streamer key={id} {...stream} />)
        : <Text>Streamers is offline</Text> 
        }
        </SimpleGrid>
        <div className="divider" >
          <div className="divider__line">
            <div className="line"></div>
          </div>
          <button className="showMoreBtn" hidden={streamers.length > 4 ? true : false} onClick={showMoreLikeChannel}>Show more <BiChevronDown /></button>
          <div className="divider__line">
            <div className="line"></div>
          </div>
        </div>
        <Text fontSize="large"><span style={{color: "#9147ff",fontWeight: 700}}>Categories</span> we think you’ll like</Text>
        <SimpleGrid columns={8} gap={2} mt={3} >
          {categories.length > 0 
          ? categories.map((category,id) => <Streamer key={id} {...category} />)
          : <Text>No Category</Text> 
          }
        </SimpleGrid>
        <div className="divider" >
          <div className="divider__line">
            <div className="line"></div>
          </div>
          <div className="divider__line">
            <div className="line"></div>
          </div>
        </div>
        <Text fontSize="large">While <span style={{color: "#9147ff",fontWeight:700}}>itsAnahiita</span> is offline</Text>
        <SimpleGrid columns={4} gap={3} mt={3}>
        {streamers.length > 0 
        ? streamers.map((stream,id) => <Streamer key={id} {...stream} />)
        : <Text>Streamers is offline</Text> 
        }
        </SimpleGrid>
      </Container>
    </div>
  )
}

const mapStateToProps = state=>{
  return {
    responsive: state.Responsive
  }
}

export default connect(mapStateToProps)(Index)
