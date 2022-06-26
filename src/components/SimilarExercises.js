import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' }, p: '20px' }}>
      <Typography mb={5} variant="h4">
        The same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{ p: '2', position: 'relative' }}
      >
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>

      <Typography mb={5} variant="h4">
        Exercises with the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{ p: '2', position: 'relative' }}
      >
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises