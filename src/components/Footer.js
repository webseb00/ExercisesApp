import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

function Footer() {
  return (
    <Box
      mt="80px"
      bgColor="#fff3f4"
    >
      <Stack
        gap="40px"
        alignItems="center"
        pt="24px"
        px="40px"
      >
        <img src={Logo} alt="Footer logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          &copy; 2022. All Rights Reserved.
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer