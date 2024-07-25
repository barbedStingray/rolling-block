import React, { useState } from 'react';




const RollBox = ({ lyric }) => {

  const [rollState, setRollState] = useState(false);


  return (
    <div 
      className='emptyBox'
      onMouseEnter={() => setRollState(true)}
      onMouseLeave={() => setRollState(false)}
    >
      {rollState && (
        <div className='rollBox'>
          <p>{lyric}</p>
        </div>
      )
      }
    </div>
  )
}

export default RollBox;
