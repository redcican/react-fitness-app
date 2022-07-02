import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ setExercises, bodyPart, exercises }) => {

  const [currentPage, setcurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setcurrentPage(value);
    window.ScrollTo({ top: 1800, behavior: 'smooth' });
  }

  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px'}}}
      mt="50px"
      p="20px">

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: '100px', xs: '50px'} }}
        flexWrap="wrap" justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
            <Pagination
              color='standard'
              shape="rounded"
              defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises