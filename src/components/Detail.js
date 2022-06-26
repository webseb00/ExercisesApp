import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import Equipment from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetails }) => {
  const { bodyPart, equipment, target, gifUrl, name } = exerciseDetails;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    }, 
    {
      icon: TargetImage,
      name: target
    }, 
    {
      icon: Equipment,
      name: equipment
    }
  ]

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center'
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack
        sx={{
          gap: { lg: '35px', xs: '20px' }
        }}
      >
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">Some description about exercise {name}</Typography>
        {extraDetail.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            gap="24px"
          >
            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }}/>
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail