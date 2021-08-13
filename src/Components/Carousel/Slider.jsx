import React from 'react';
import { IoPlaySharp } from 'react-icons/io5';
import { HiVolumeUp } from 'react-icons/hi';
import { AiFillSetting } from 'react-icons/ai';
import { RiFullscreenFill } from 'react-icons/ri';
import './Slider.css';
import { Badge, Stack } from '@chakra-ui/react';

function Slider(props) {
  let {image} = props;
  return (
    <div className="slider">
      <div className="slider__video">
        <video
          poster={image}
          alt="live-user-thijs-320x180"
        >
          <source
            src="https://www.w3schools.com/tags/movie.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="live_status">
          <Badge color="white" background="#e91916" fontSize="14px">
            LIVE
          </Badge>
        </div>
        <div className="video_controller">
          <div>
            <button
              className="controllerBtn"
              onClick={() => console.log('hello world')}
            >
              <IoPlaySharp />
            </button>
            <button className="controllerBtn">
              <HiVolumeUp />
            </button>
          </div>
          <div>
            <button className="controllerBtn">
              <AiFillSetting />
            </button>
            <button className="controllerBtn">
              <RiFullscreenFill />
            </button>
          </div>
        </div>
      </div>
      <div className="slider__description">
        <div className="flex flex-row py-2 px-2 items-center">
          <img
            className="rounded-full"
            width="50"
            height="50"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/0dafdeaf-b507-4bd3-826a-629be1645cd5-profile_image-70x70.png"
            alt=""
          />
          <div className="flex flex-col ml-1">
            <span className="description__about font-medium">Spaceboy</span>
            <span className="description__about">Grand Theft Auto V</span>
            <span style={{ fontSize: '14px' }}>1.2K viewers</span>
          </div>
        </div>
        <div className="px-2">
          <Badge
            background="#ffffff26"
            color="#ffffffb3"
            borderRadius="full"
            style={{ padding: '3px 0.6rem', margin: '0 3px' }}
          >
            English
          </Badge>
          <Badge
            background="#ffffff26"
            color="#ffffffb3"
            borderRadius="full"
            style={{ padding: '3px 0.6rem', margin: '0 3px' }}
          >
            +18
          </Badge>
        </div>
        <div className="px-2 mt-2">
          <p style={{fontSize:"14px"}}>
            Art Month celebrates artists and every part of their process — the
            craft, the care, the commentary, the talent. Check out the people
            who make Art on Twitch so special all month long!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
