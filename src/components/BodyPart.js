import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'


const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-cart"
      sx={{ 
        borderTop: item === bodyPart ? '4px solid #ff2625' : 'unset',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="dumpbell" className="bodyPart-card" style={{ width: '40px', height: '40px' }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        textTransform="capitalize"
        color="#3A1212"
      >
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart