import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import ExercisesCard from './ExercisesCard'

import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography className="right-arrow" onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="Left Arrow" />
    </Typography>
  );
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography className="left-arrow" onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="Right Arrow" />
    </Typography>
  );
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((el, index) => (
      <Box
        key={index}
        itemId={index}
        title={el}
        m='0 40px'
      >
        {isBodyParts ? <BodyPart
                        item={el}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                      /> : <ExercisesCard exercise={el} />}
      </Box>
    ))}
  </ScrollMenu>
)

export default HorizontalScrollbar