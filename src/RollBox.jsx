import React, { useState, useEffect } from 'react';




const RollBox = ({ lyric }) => {
  const [rollState, setRollState] = useState(false);
  const [enterSide, setEnterSide] = useState('');
  const [leaveSide, setLeaveSide] = useState('');

  console.log('enterSide', enterSide);
  console.log('leaveSide', leaveSide);

  const handleMouseEnter = (event) => {
    const { clientX, clientY, target } = event;
    const { top, right, bottom, left } = target.getBoundingClientRect();
    const topDist = clientY - top;
    const bottomDist = bottom - clientY;
    const leftDist = clientX - left;
    const rightDist = right - clientX;

    const minDist = Math.min(topDist, bottomDist, leftDist, rightDist);

    if (minDist === topDist) {
      setEnterSide('top');
    } else if (minDist === bottomDist) {
      setEnterSide('bottom');
    } else if (minDist === leftDist) {
      setEnterSide('left');
    } else {
      setEnterSide('right');
    }
    setLeaveSide('');
    setRollState(true);
  };

  const handleMouseLeave = (event) => {
    const { clientX, clientY, target } = event;
    const { top, right, bottom, left } = target.getBoundingClientRect();
    const topDist = clientY - top;
    const bottomDist = bottom - clientY;
    const leftDist = clientX - left;
    const rightDist = right - clientX;

    const minDist = Math.min(topDist, bottomDist, leftDist, rightDist);

    if (minDist === topDist) {
      setLeaveSide('leaveTop');
    } else if (minDist === bottomDist) {
      setLeaveSide('leaveBottom');
    } else if (minDist === leftDist) {
      setLeaveSide('leaveLeft');
    } else {
      setLeaveSide('leaveRight');
    }
    setEnterSide('');
    setRollState(false);
  };

  return (
    <div
      className='emptyBox'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`rollBox vertical ${enterSide} ${leaveSide}`}>
        <p>{lyric}</p>
      </div>
    </div>
  );
};

export default RollBox;