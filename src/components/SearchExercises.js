import React, { useState, useEffect } from 'react'
import { Box, Stack, Button, Typography, TextField } from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercise = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['...all', ...exercise]);
    }

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const searchedExercise = exercisesData.filter(el => 
        el.name.toLowerCase().includes(search) || el.target.toLowerCase().includes(search) ||
        el.equipment.toLowerCase().includes(search) || el.target.toLowerCase().includes(search) || 
        el.bodyPart.toLowerCase().includes(search));

      window.scrollTo({ top: 1800, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercise);
    }
  }

  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: '44px', sx: '30px' } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box
        position="relative"
        mb="72px"
      >
        <TextField 
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#FFF', borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={e => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{ 
            backgroundColor: '#FF2526',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ 
        position: 'relative',
        p: '20px',
        width: '100%'
       }}>
        {bodyParts.length && <HorizontalScrollbar bodyPart={bodyPart} setBodyPart={setBodyPart} data={bodyParts} />}
      </Box>
    </Stack>
  )
}

export default SearchExercises