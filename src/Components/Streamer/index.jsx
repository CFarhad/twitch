import React from 'react';
import { Badge, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import {HiOutlineEyeOff} from 'react-icons/hi'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {GoReport} from 'react-icons/go'
import {Stream , StreamerInfo} from './style'

function index(props) {
  let { image, view, profile, title, username,name ,categoryView , categoryCover ,category,categoryTitle, language} = props;
  let channelBackground = ["#9147ff","#8205B3","#BD0078","#FA1ED2","#FAB3FF","#FA2929","#FF6666","#FFBF00","#00FA04","#00C7AC","#00FAFA","#1F69FF","#0013A3"]
  return (
      <div className="flex flex-col">
        <Stream bg={channelBackground[Math.floor(Math.random() * channelBackground.length)]}>
          <div className="stream__thumbnail">
            {view ? <span className="live">LIVE</span> : null}
            {image ? <img src={image} alt="stream thumnail" /> : <img src={categoryCover} alt="category thumbnail" />}
            {view ? <span className="view">{view} viewers</span> : null}
          </div>
        </Stream>
        <div className="mt-2 flex justify-between items-start">
          {profile ? <img src={profile} alt={title} className="rounded-full" width="40" /> : null}
          <StreamerInfo className="streamer__info">
            {title 
              ? <p className="truncate" style={{width:"220px",fontSize:"14px",color: "white"}} title={title}>{title}</p>
              : <p className="truncate" style={{width:"130px",fontSize:"14px",color: "white"}} title={categoryTitle}>{categoryTitle}</p>
            }
            
            <p>{username || name}</p>
            <p>{category ? category : `${categoryView} viewers`}</p>
            {language.length > 1
            ? [...language].map(lang=> <Badge background="#ffffff26" fontSize="xx-small" color="#ffffffb3 "borderRadius="full" style={{ padding: '3px 0.6rem', margin: '0 3px' }}>{lang === "Persian" ? "Language: Other" : lang}</Badge>)
            : <Badge background="#ffffff26" color="#ffffffb3 "borderRadius="full" style={{ padding: '3px 0.6rem', margin: '0 3px' }}>{language === "Persian" ? "Language: Other" : language}</Badge>
            }
          </StreamerInfo>
          <Menu>
            <MenuButton className="moreBtn">
                <BiDotsVerticalRounded />
            </MenuButton>
            <MenuList zIndex="modal">
              <MenuItem>
                <HiOutlineEyeOff />
                <Text>Not Interested</Text>
              </MenuItem>
              <MenuItem>
                <GoReport />
                <Text>Not Interested</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
  );
}

export default index;
