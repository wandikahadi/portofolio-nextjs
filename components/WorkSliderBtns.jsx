"use client";

import {useSwiper} from "swiper/react";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

const WorkSliderBtns = ({containerStyles, btnStyles, iconstyles}) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyles} onClick={()=>swiper.slidePrev()}>
        <button className={btnStyles}>
            <PiCaretLeftBold/>
        </button>
        <button className={btnStyles} onClick={()=>swiper.slideNext()}>
            <PiCaretRightBold/>
        </button>
    </div>
  )
}

export default WorkSliderBtns