import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch18_t3_qe1',
    type: 'mcq',
    question: 'If Rohan can complete a task in 3 hours and Mohan can complete the same task in 6 hours, how long will it take them to complete the task working together?',
    options: ['2 hours', '3 hours', '4 hours', '9 hours'],
    correctAnswer: '2 hours',
    explanation: 'Using the formula 1/T = 1/a + 1/b, where a=3, b=6, we get T = 2 hours when they work together.',
    wrongAnswerExplanations: {
      '3 hours': 'This is the time taken by Rohan alone, not when they work together.',
      '4 hours': 'This is not the correct application of the work-time formula.',
      '9 hours': 'Adding individual times is incorrect; rates should be added instead.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe2',
    type: 'mcq',
    question: 'A train travels at a constant speed of 60 km/h. How far will it travel in 2 hours and 15 minutes?',
    options: ['135 km', '120 km', '150 km', '145 km'],
    correctAnswer: '135 km',
    explanation: 'Distance = Speed × Time = 60 × 2.25 = 135 km, where 2 hours 15 minutes = 2.25 hours.',
    wrongAnswerExplanations: {
      '120 km': 'This calculates the distance for only 2 hours, forgetting the additional 15 minutes.',
      '150 km': 'This uses incorrect time conversion in the calculation.',
      '145 km': 'This is a calculation error in multiplying speed with time.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe3',
    type: 'mcq',
    question: 'If it takes 8 workers 6 days to build a wall, how many days would it take 12 workers to build the same wall?',
    options: ['4 days', '9 days', '3 days', '6 days'],
    correctAnswer: '4 days',
    explanation: 'Using the formula w₁×d₁=w₂×d₂, we get 8×6=12×d₂, so d₂=4 days.',
    wrongAnswerExplanations: {
      '9 days': 'This calculation incorrectly assumes that more workers would take more time.',
      '3 days': 'This is an incorrect application of the work-time formula.',
      '6 days': 'This assumes the number of workers doesn`t affect completion time.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe4',
    type: 'mcq',
    question: 'A car travels 240 km in 3 hours. What is its average speed?',
    options: ['80 km/h', '75 km/h', '85 km/h', '70 km/h'],
    correctAnswer: '80 km/h',
    explanation: 'Average speed = Total distance / Total time = 240 km / 3 h = 80 km/h.',
    wrongAnswerExplanations: {
      '75 km/h': 'This is a calculation error in dividing distance by time.',
      '85 km/h': 'This is a miscalculation of the average speed.',
      '70 km/h': 'This is an incorrect value due to division error.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch18_t3_qe5',
    type: 'mcq',
    question: 'If a student allocates 2 hours each for 4 subjects, how many total days will it take to complete if they study 4 hours per day?',
    options: ['2 days', '4 days', '8 days', '1 day'],
    correctAnswer: '2 days',
    explanation: 'Total study hours needed = 2 hours × 4 subjects = 8 hours. At 4 hours/day, it takes 8 ÷ 4 = 2 days.',
    wrongAnswerExplanations: {
      '4 days': 'This incorrectly assumes they can study only 1 subject per day.',
      '8 days': 'This incorrectly assumes they can study only 1 hour per day.',
      '1 day': 'This assumes they can study 8 hours in a day, which exceeds their 4-hour limit.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe6',
    type: 'mcq',
    question: 'If a tap can fill a tank in 8 hours and another tap can fill it in 12 hours, how long will they take to fill the tank together?',
    options: ['4.8 hours', '5.5 hours', '4 hours', '6 hours'],
    correctAnswer: '4.8 hours',
    explanation: 'Using 1/T = 1/8 + 1/12 = (3+2)/24 = 5/24, thus T = 24/5 = 4.8 hours.',
    wrongAnswerExplanations: {
      '5.5 hours': 'This is an incorrect application of the time formula for combined work.',
      '4 hours': 'This is a miscalculation in combining the rates.',
      '6 hours': 'This is incorrect; the combined time should be less than the faster individual time.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe7',
    type: 'mcq',
    question: 'A student has 3 hours to complete a test with 60 questions. How much time should be allocated per question on average?',
    options: ['3 minutes', '2 minutes', '5 minutes', '3.5 minutes'],
    correctAnswer: '3 minutes',
    explanation: 'Time per question = Total time / Number of questions = 180 minutes / 60 questions = 3 minutes.',
    wrongAnswerExplanations: {
      '2 minutes': 'This incorrectly converts hours to minutes (120 instead of 180).',
      '5 minutes': 'This is a calculation error in dividing the total time by questions.',
      '3.5 minutes': 'This is a miscalculation of the average time per question.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch18_t3_qe8',
    type: 'mcq',
    question: 'A project requires 40 person-days of work. If 5 people work on it, how many days will it take to complete?',
    options: ['8 days', '10 days', '12 days', '5 days'],
    correctAnswer: '8 days',
    explanation: 'Days required = Total person-days / Number of people = 40 / 5 = 8 days.',
    wrongAnswerExplanations: {
      '10 days': 'This is a calculation error in dividing the total person-days by number of people.',
      '12 days': 'This represents an incorrect calculation of the work formula.',
      '5 days': 'This confuses the number of people with the days required.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch18_t3_qe9',
    type: 'mcq',
    question: 'If a train covers 180 km in 2 hours, how long will it take to cover 450 km at the same speed?',
    options: ['5 hours', '4 hours', '4.5 hours', '5.5 hours'],
    correctAnswer: '5 hours',
    explanation: 'Speed = 180/2 = 90 km/h. Time required = 450 ÷ 90 = 5 hours.',
    wrongAnswerExplanations: {
      '4 hours': 'This calculation underestimates the time required for the longer distance.',
      '4.5 hours': 'This is a miscalculation in converting the distance-speed relationship.',
      '5.5 hours': 'This overestimates the time required for the given speed and distance.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe10',
    type: 'mcq',
    question: 'A water tank can be filled by pipe A in 20 minutes and by pipe B in 30 minutes. If both pipes are opened, in how many minutes will the tank be filled?',
    options: ['12 minutes', '15 minutes', '10 minutes', '25 minutes'],
    correctAnswer: '12 minutes',
    explanation: 'Using 1/T = 1/20 + 1/30 = (3+2)/60 = 5/60, thus T = 60/5 = 12 minutes.',
    wrongAnswerExplanations: {
      '15 minutes': 'This is an incorrect application of the work-time formula.',
      '10 minutes': 'This underestimates the combined filling time.',
      '25 minutes': 'This incorrectly assumes slower filling when both pipes are used together.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe11',
    type: 'mcq',
    question: 'A student needs to read 300 pages in 5 days. How many pages should they read each day to stay on schedule?',
    options: ['60 pages', '50 pages', '70 pages', '75 pages'],
    correctAnswer: '60 pages',
    explanation: 'Pages per day = Total pages / Number of days = 300 / 5 = 60 pages.',
    wrongAnswerExplanations: {
      '50 pages': 'This pace would not allow completion of all pages within the given time.',
      '70 pages': 'This exceeds the required daily reading to meet the deadline.',
      '75 pages': 'This pace would finish the reading before the 5 days are up.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch18_t3_qe12',
    type: 'mcq',
    question: 'A train covers a distance of 300 km at a uniform speed. If the speed was 10 km/h more, it would take 1 hour less for the journey. What is the original speed?',
    options: ['50 km/h', '60 km/h', '40 km/h', '45 km/h'],
    correctAnswer: '50 km/h',
    explanation: '300/x - 300/(x+10) = 1, solving gives x = 50 km/h.',
    wrongAnswerExplanations: {
      '60 km/h': 'This speed doesn`t satisfy the equation 300/x - 300/(x+10) = 1.',
      '40 km/h': 'This value is too low and doesn`t satisfy the given conditions.',
      '45 km/h': 'This is a miscalculation in solving the equation for speed.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe13',
    type: 'mcq',
    question: 'If a pipe can fill a tank in 15 hours and another pipe can empty it in 20 hours, how long will it take to fill the tank if both pipes are open?',
    options: ['60 hours', '45 hours', '30 hours', '75 hours'],
    correctAnswer: '60 hours',
    explanation: 'Using 1/T = 1/15 - 1/20 = (4-3)/60 = 1/60, so T = 60 hours.',
    wrongAnswerExplanations: {
      '45 hours': 'This does not account for the emptying pipe correctly.',
      '30 hours': 'This is a calculation error in combining filling and emptying rates.',
      '75 hours': 'This overestimates the time by incorrect application of the rate formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe14',
    type: 'mcq',
    question: 'A bus travels at 60 km/h and reaches its destination in 5 hours. If the speed is reduced by 10 km/h, how much extra time would the journey take?',
    options: ['1 hour', '1.5 hours', '0.5 hours', '2 hours'],
    correctAnswer: '1 hour',
    explanation: 'Total distance = 60 × 5 = 300 km. At 50 km/h, time = 300/50 = 6 hours. Extra time = 6 - 5 = 1 hour.',
    wrongAnswerExplanations: {
      '1.5 hours': 'This overestimates the additional time needed.',
      '0.5 hours': 'This underestimates the additional time required.',
      '2 hours': 'This significantly overestimates the extra time needed.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe15',
    type: 'mcq',
    question: 'If a person types 40 words per minute, how much time will they take to type a 2000-word document?',
    options: ['50 minutes', '45 minutes', '55 minutes', '60 minutes'],
    correctAnswer: '50 minutes',
    explanation: 'Time required = Total words / Words per minute = 2000 / 40 = 50 minutes.',
    wrongAnswerExplanations: {
      '45 minutes': 'This underestimates the time required at the given typing speed.',
      '55 minutes': 'This overestimates the time required for typing.',
      '60 minutes': 'This is significantly more than needed at 40 words per minute.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch18_t3_qe16',
    type: 'mcq',
    question: 'A tap can fill a tank in 12 hours. Due to a leak, it takes 20 hours to fill the tank. If the tank is full, how long will it take for the leak to empty it?',
    options: ['30 hours', '25 hours', '15 hours', '40 hours'],
    correctAnswer: '30 hours',
    explanation: 'Leak empties 1/T of tank per hour. 1/12 - 1/T = 1/20, solving gives T = 30 hours.',
    wrongAnswerExplanations: {
      '25 hours': 'This is an incorrect solution of the equation relating filling, emptying, and combined rates.',
      '15 hours': 'This underestimates the emptying time of the leak.',
      '40 hours': 'This overestimates how long the leak would take to empty the tank.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe17',
    type: 'mcq',
    question: 'A factory produces 400 units in 8 hours. How many units will it produce in 12 hours at the same rate?',
    options: ['600 units', '500 units', '550 units', '650 units'],
    correctAnswer: '600 units',
    explanation: 'Rate = 400 units / 8 hours = 50 units per hour. In 12 hours: 50 × 12 = 600 units.',
    wrongAnswerExplanations: {
      '500 units': 'This underestimates the production for 12 hours at the given rate.',
      '550 units': 'This is a calculation error in extending the production rate to 12 hours.',
      '650 units': 'This overestimates the production capacity for the given time.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch18_t3_qe18',
    type: 'mcq',
    question: 'A student needs to score at least 75% to get an A grade. In a test of 400 marks, what is the minimum score needed?',
    options: ['300 marks', '250 marks', '350 marks', '275 marks'],
    correctAnswer: '300 marks',
    explanation: '75% of 400 = 0.75 × 400 = 300 marks.',
    wrongAnswerExplanations: {
      '250 marks': 'This is only 62.5% of the total marks, below the required percentage.',
      '350 marks': 'This is 87.5% of total marks, more than the minimum required.',
      '275 marks': 'This is 68.75% of the total, below the 75% threshold.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch18_t3_qe19',
    type: 'mcq',
    question: 'If 3 workers can build a wall in 10 days working 6 hours per day, how many days will it take 2 workers to build the same wall working 9 hours per day?',
    options: ['10 days', '15 days', '5 days', '12 days'],
    correctAnswer: '10 days',
    explanation: 'Total work = 3 workers × 10 days × 6 hours = 180 worker-hours. For 2 workers at 9 hours/day: 180 ÷ (2×9) = 10 days.',
    wrongAnswerExplanations: {
      '15 days': 'This doesn`t account for the increased hours per day correctly.',
      '5 days': 'This underestimates the time required for fewer workers, even with more hours per day.',
      '12 days': 'This doesn`t properly balance the worker-hours equation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t3_qe20',
    type: 'mcq',
    question: 'A car travels 60 km in 1.5 hours and then another 50 km in 1 hour. What is the average speed for the entire journey?',
    options: ['55 km/h', '50 km/h', '60 km/h', '45 km/h'],
    correctAnswer: '55 km/h',
    explanation: 'Average speed = Total distance / Total time = (60 + 50) / (1.5 + 1) = 110 / 2.5 = 44 km/h.',
    wrongAnswerExplanations: {
      '50 km/h': 'This is not the correct average speed for the entire journey.',
      '60 km/h': 'This is only the speed for the first part of the journey.',
      '45 km/h': 'This is lower than the actual average speed for the entire journey.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
