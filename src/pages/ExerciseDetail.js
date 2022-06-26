import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

function ExerciseDetail() {

  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbURL = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbURL}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetails(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchURL}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExerciseData = await fetchData(`${exerciseDbURL}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchData(`${exerciseDbURL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExerciseData);
    }

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetails={exerciseDetails} exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail