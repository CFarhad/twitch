import React from 'react'
import {BiChevronLeft,BiChevronRight} from 'react-icons/bi'
import Slider from './Slider'
import './index.css'

function index() {
  return (
    <div className="carousel">
      <button className="carousel__btn">
        <BiChevronLeft />
      </button>
      <div className="sliders">
          <div className="slide first">
            <Slider image="https://s4.uupload.ir/files/screenshot_(68)_amo1.png" />
          </div>
          <div className="slide third">
          <Slider image="https://s4.uupload.ir/files/screenshot_(69)_1nzr.png" />
          </div>
          <div className="slide main">
            <Slider image="https://s4.uupload.ir/files/screenshot_(67)_c0eu.png" />
          </div>
          <div className="slide second">
            <Slider image="https://s4.uupload.ir/files/screenshot_(70)_8jb6.png" />
          </div>
          <div className="slide fourth">
            <Slider image="https://s4.uupload.ir/files/screenshot_(71)_u5am.png" />
          </div>
        </div>
      <button className="carousel__btn">
        <BiChevronRight />
      </button>
    </div>
  )
}

export default index
