import React, { useState } from 'react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { Switch , Transition  } from '@headlessui/react';
import { BiDotsVerticalRounded, BiDiamond, BiCheck ,BiUserPlus , BiLogOut , BiMoon , BiWallet , BiChevronRight} from 'react-icons/bi';
import { FiInbox , FiSliders} from 'react-icons/fi';
import { BsChatSquare , BsStar } from 'react-icons/bs';
import {AiOutlineProject , AiFillInfoCircle , AiFillSetting} from 'react-icons/ai'
import {MdLanguage} from 'react-icons/md'
import {GoPrimitiveDot} from 'react-icons/go'
import {CgToolbox} from 'react-icons/cg'
import SearchBox from '../SearchBox/Index';
import './Index.css';

function Index() {
  const [status, setStatus] = useState(false);
  const [activity, setActivity] = useState(false);
  const [dark , setDark] = useState(true)

  
  return (
    <div className="navbar" bg="navbar.default">
      <div className="navbar__left">
        <img
          width="27"
          height="27"
          src="https://brand.twitch.tv/assets/logos/svg/glitch/purple.svg"
        />
        <div className="menu__first menu">
          <a href="#" className="menu__link">
            Following
          </a>
          <a href="#" className="menu__link">
            Browse
          </a>
        </div>
        <div className="menu__second menu">
          <a href="#" className="menu__link">
            Esports
          </a>
          <a href="#" className="menu__link">
            Music
          </a>
          <Menu>
            <MenuButton className="moreBtn">
              <BiDotsVerticalRounded />
            </MenuButton>
            <MenuList style={{ height: '630px' }}>
              <span style={{ margin: '0 3px', color: '#adadb8' }}>GENERAL</span>
              <MenuItem>About</MenuItem>
              <MenuItem>Advertisers</MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>Developers</MenuItem>
              <MenuItem>Download Apps</MenuItem>
              <MenuItem>Gift Card</MenuItem>
              <MenuItem>IGDB</MenuItem>
              <MenuItem>Jobs</MenuItem>
              <MenuItem>Loot Cave - Store</MenuItem>
              <MenuItem>Partners</MenuItem>
              <MenuItem>Press</MenuItem>
              <MenuItem>Turbo</MenuItem>
              <hr style={{ borderColor: 'hsla(0,0%,100%,0.1)' }} />
              <span style={{ margin: '8px 3px 0 3px', color: '#adadb8' }}>
                HELP & LEGAL
              </span>
              <MenuItem>Accessibility Statement</MenuItem>
              <MenuItem>Ad Choices</MenuItem>
              <MenuItem>Community Guidelines</MenuItem>
              <MenuItem>Cookie Policy</MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuItem>Privacy Policy</MenuItem>
              <MenuItem>Security</MenuItem>
              <MenuItem>Terms</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="navbar__center">
        <div>
          <SearchBox />
        </div>
      </div>
      <div className="navbar__right">
        <IconButton icon={<FiInbox size={20} />} className="account__btn mx-2" />
        <IconButton
          icon={<BsChatSquare size={20} />}
          className="account__btn"
        />
        <Button className="account__bits mx-2">
          <BiDiamond size={20} style={{ marginRight: '5px' }} />
          Get Bits
        </Button>
        <Menu closeOnSelect={false}>
          <MenuButton className="account__profile">
            <img
              className="account_profilePic"
              src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-70x70.png"
            />
            <span className="account_status"></span>
          </MenuButton>
          <MenuList style={{padding: "10px 14px"}}>
            <div className="flex items-center flex-row">
            <img
              className="account_profilePic account_profilePic2"
              src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-70x70.png"
            />
            <div className="flex flex-col ml-4">
              <span style={{color: "#efeff1",fontWeight:"700",fontSize:'14px'}}>fshotoverflow</span>
              <div className="flex flex-row items-center">
                <GoPrimitiveDot style={{color: status ? '#00f593' : '#adadb8'}} size={13} />
                <span style={{color: '#adadb8',fontSize:'12px'}}>{status ? "Online" : "Offline"}</span>
              </div>
            </div>
            </div>
            <MenuItem className="noHoverItem">
              <Switch.Group display="flex" >
                <div className="flex items-center justify-between w-full">
                <Switch.Label className="mr-4 cursor-pointer">Online</Switch.Label>
                <Switch
                  checked={status}
                  onChange={setStatus}
                  className={`relative inline-flex items-center h-5 rounded-full w-9 border-2`}
                  style={{ borderColor: status ? '#9147ff' : '' }}
                >
                  <span className="sr-only">Online</span>
                  {status ? (<BiCheck
                    className="absolute -left-px"
                    size={15}
                    style={{ color: status ? '#9147ff' : '' }}
                  />) : ''}
                  <span
                    className={`${
                      status ? 'translate-x-4' : 'translate-x-1 bg-white'
                    } inline-block w-3 h-3 transform rounded-full transition ease-in-out duration-200`}
                    style={{ backgroundColor: status ? '#9147ff' : '' }}
                  />
                </Switch>
                </div>
              </Switch.Group>
            </MenuItem>
            {status ? (<MenuItem className="noHoverItem">
              <Switch.Group display="flex" >
                <div className="flex items-center justify-between w-full">
                <Switch.Label className="mr-4 cursor-pointer">Share My Activity</Switch.Label>
                <Switch
                  checked={activity}
                  onChange={setActivity}
                  className={`relative inline-flex items-center h-5 rounded-full w-9 border-2`}
                  style={{ borderColor: activity ? '#9147ff' : '' }}
                >
                  <span className="sr-only">Share My Activity</span>
                  {activity ? (<BiCheck
                    className="absolute -left-px"
                    size={15}
                    style={{ color: activity ? '#9147ff' : '' }}
                  />) : ''}

                  <span
                    className={`${
                      activity ? 'translate-x-4' : 'translate-x-1 bg-white'
                    } inline-block w-3 h-3 transform rounded-full transition ease-in-out duration-200`}
                    style={{ backgroundColor: activity ? '#9147ff' : '' }}
                  />
                </Switch>
                </div>
              </Switch.Group>
            </MenuItem>) : ''}
            
            <hr style={{ borderColor: 'hsla(0,0%,100%,0.1)' }} />
            <MenuItem>
              <BiUserPlus size={18} style={{marginRight:"8px"}}  />
              Channel
            </MenuItem>
            <MenuItem>
              <FiSliders size={18} style={{marginRight:"8px"}}  />
              Video Producer
            </MenuItem>
            <MenuItem>
              <AiOutlineProject size={18} style={{marginRight:"8px"}}  />
              Creator Dashboard
            </MenuItem>
            <hr style={{ borderColor: 'hsla(0,0%,100%,0.1)' }} />
            <MenuItem>
              <BsStar size={18} style={{marginRight:"8px"}} />
              Subscriptions
            </MenuItem>
            <MenuItem>
              <CgToolbox size={18} style={{marginRight:"8px"}} />
              Drops
            </MenuItem>
            <MenuItem>
              <BiWallet size={18} style={{marginRight:"8px"}} />
              Wallet
            </MenuItem>
            <hr style={{ borderColor: 'hsla(0,0%,100%,0.1)' }} />
            <MenuItem>
              <AiFillSetting size={18} style={{marginRight:"8px"}} />
              Setting
            </MenuItem>
            <MenuItem>
              <MdLanguage size={18} style={{marginRight:"8px"}} />
              Language
              <div className="w-max ml-auto">
              <BiChevronRight size={23} />
              </div>
            </MenuItem>
            <MenuItem>
              <BiMoon size={18} style={{marginRight:"8px"}} />
              Dark Theme
              <div className="w-max ml-auto transition">
              <Switch
                  checked={dark}
                  onChange={setDark}
                  className={`relative inline-flex items-center h-5 rounded-full w-9 border-2`}
                  style={{ borderColor: dark ? '#9147ff' : '' }}
                >
                  <span className="sr-only">Online</span>
                  {dark ? (<BiCheck
                    className="absolute -left-px"
                    size={15}
                    style={{ color: dark ? '#9147ff' : '' }}
                  />) : ''}
                  <span
                    className={`${
                      dark ? 'translate-x-4' : 'translate-x-1 bg-white'
                    } inline-block w-3 h-3 transform rounded-full transition ease-in-out duration-200`}
                    style={{ backgroundColor: dark ? '#9147ff' : '' }}
                  />
                </Switch>
              </div>
            </MenuItem>
            <MenuItem>
              <AiFillInfoCircle size={18} style={{marginRight:"8px"}} />
              Cookie Preferences
            </MenuItem>
            <hr style={{ borderColor: 'hsla(0,0%,100%,0.1)' }} />
            <MenuItem>
              <BiLogOut size={18} style={{marginRight:"8px"}} />
              Log Out
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default Index;
