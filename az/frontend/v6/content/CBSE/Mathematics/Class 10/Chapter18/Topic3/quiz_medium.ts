import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch18_t3_qm1',
    type: 'mcq',
    question: 'A project requires 180 person-days of work. If 15 people start working on it and after 6 days, 5 more people join them, how many more days will it take to complete the project?',
    options: ['4 days', '5 days', '6 days', '7 days'],
    correctAnswer: '4 days',
    explanation: 'Work done in 6 days = 15 × 6 = 90 person-days. Remaining work = 90 person-days. With 20 people now, days = 90 ÷ 20 = 4.5 days.',
    wrongAnswerExplanations: {
      '5 days': 'This is a slight overestimation of the remaining time required.',
      '6 days': 'This doesn`t account for the additional workers correctly.',
      '7 days': 'This significantly overestimates the time with the increased workforce.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t3_qm2',
    type: 'mcq',
    question: 'Pipe A can fill a tank in 10 hours, Pipe B in 20 hours, and Pipe C can empty it in 15 hours. If all three pipes are opened simultaneously, how long will it take to fill the tank?',
    options: ['20 hours', '15 hours', '30 hours', '40 hours'],
    correctAnswer: '30 hours',
    explanation: 'Net filling rate = 1/10 + 1/20 - 1/15 = (3+1.5-2)/30 = 2.5/30 = 1/12, so it takes 12 hours to fill the tank.',
    wrongAnswerExplanations: {
      '20 hours': 'This doesn`t correctly account for the emptying effect of pipe C.',
      '15 hours': 'This underestimates the time by not properly combining all three rates.',
      '40 hours': 'This greatly overestimates the filling time with all pipes operating.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t3_qm3',
    type: 'mcq',
    question: 'A train traveling at 60 km/h reaches its destination in 6 hours. By how much should the speed be increased to reduce the journey time by 1.5 hours?',
    options: ['15 km/h', '10 km/h', '20 km/h', '12 km/h'],
    correctAnswer: '15 km/h',
    explanation: 'Total distance = 60 × 6 = 360 km. New time = 4.5 hours. New speed = 360 ÷ 4.5 = 80 km/h. Increase = 80 - 60 = 20 km/h.',
    wrongAnswerExplanations: {
      '10 km/h': 'This speed increase wouldn`t reduce the journey time by the required 1.5 hours.',
      '20 km/h': 'This exceeds the required speed increase to achieve the time reduction.',
      '12 km/h': 'This is insufficient to reduce the journey time by 1.5 hours.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t3_qm4',
    type: 'mcq',
    question: 'A student has to read a book with 450 pages in 15 days. After reading at a constant rate for 10 days, the student has read 240 pages. By how many pages per day should the student increase the reading rate to finish on time?',
    options: ['12 pages', '10 pages', '15 pages', '8 pages'],
    correctAnswer: '12 pages',
    explanation: 'Current rate = 240/10 = 24 pages/day. Remaining pages = 450-240 = 210. Remaining days = 5. New rate needed = 210/5 = 42. Increase = 42-24 = 18 pages/day.',
    wrongAnswerExplanations: {
      '10 pages': 'This increase would not allow completion within the remaining time.',
      '15 pages': 'This exceeds the required increase to finish on schedule.',
      '8 pages': 'This increase is insufficient to complete the book on time.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t3_qm5',
    type: 'mcq',
    question: 'Two trains start from stations A and B towards each other at speeds of 45 km/h and 55 km/h respectively. If the distance between the stations is 400 km, after how many hours will they meet?',
    options: ['4 hours', '3.5 hours', '5 hours', '4.5 hours'],
    correctAnswer: '4 hours',
    explanation: 'Relative speed = 45 + 55 = 100 km/h. Time to meet = Distance ÷ Relative speed = 400 ÷ 100 = 4 hours.',
    wrongAnswerExplanations: {
      '3.5 hours': 'This underestimates the meeting time at the given speeds and distance.',
      '5 hours': 'This overestimates the time required for the trains to meet.',
      '4.5 hours': 'This is an incorrect calculation of the meeting time.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t3_qm6',
    type: 'mcq',
    question: 'A water tank has two inlets A and B, and an outlet C. A can fill the tank in 12 hours, B in 15 hours, and C can empty it in 10 hours. If all are opened with the tank initially empty, what fraction of the tank will be filled after 5 hours?',
    options: ['5/12', '1/4', '1/3', '1/2'],
    correctAnswer: '5/12',
    explanation: 'Net rate = 1/12 + 1/15 - 1/10 = (5+4-6)/60 = 3/60 = 1/20. In 5 hours, fraction filled = 5 × 1/20 = 5/20 = 1/4.',
    wrongAnswerExplanations: {
      '1/4': 'This is an incorrect calculation of the combined rates over 5 hours.',
      '1/3': 'This overestimates the fraction filled based on the given rates.',
      '1/2': 'This significantly overestimates the filling proportion.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch18_t3_qm7',
    type: 'mcq',
    question: 'A student prepares a study schedule where they allocate time for different subjects in the ratio 3:4:2:1 for Maths, Science, English, and Hindi respectively. If they study for a total of 30 hours per week, how many hours are allocated to Science?',
    options: ['12 hours', '9 hours', '6 hours', '3 hours'],
    correctAnswer: '12 hours',
    explanation: 'Total ratio parts = 3+4+2+1 = 10. Time for Science = (4/10) × 30 = 12 hours.',
    wrongAnswerExplanations: {
      '9 hours': 'This corresponds to Maths, not Science according to the given ratio.',
      '6 hours': 'This corresponds to English, not Science according to the given ratio.',
      '3 hours': 'This corresponds to Hindi, not Science according to the given ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t3_qm8',
    type: 'mcq',
    question: 'A car and a bus start simultaneously from the same point and move in the same direction at speeds of 60 km/h and 40 km/h respectively. How far from the starting point will the car be when it is 50 km ahead of the bus?',
    options: ['150 km', '200 km', '250 km', '100 km'],
    correctAnswer: '150 km',
    explanation: 'Relative speed = 60 - 40 = 20 km/h. Time to be 50 km ahead = 50 ÷ 20 = 2.5 hours. Distance covered by car = 60 × 2.5 = 150 km.',
    wrongAnswerExplanations: {
      '200 km': 'This overestimates the distance covered by the car.',
      '250 km': 'This significantly overestimates the car`s distance when it`s 50 km ahead.',
      '100 km': 'This underestimates the distance covered by the car.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch18_t3_qm9',
    type: 'mcq',
    question: 'A person can row a boat at 10 km/h in still water. If it takes the person 2 hours to row to a place and 1 hour to return, what is the speed of the current?',
    options: ['3.33 km/h', '2.5 km/h', '5 km/h', '4 km/h'],
    correctAnswer: '3.33 km/h',
    explanation: 'Let current speed be c. For equal distance, (10-c)×2 = (10+c)×1, solving gives c = 3.33 km/h.',
    wrongAnswerExplanations: {
      '2.5 km/h': 'This underestimates the current speed needed to match the given time ratio.',
      '5 km/h': 'This overestimates the current speed based on the given constraints.',
      '4 km/h': 'This is an incorrect calculation of the current speed.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch18_t3_qm10',
    type: 'mcq',
    question: 'Five workers can complete a task in 12 days working 8 hours per day. If the available time is reduced to 8 days, how many hours per day should 6 workers work to complete the same task?',
    options: ['10 hours', '12 hours', '15 hours', '9 hours'],
    correctAnswer: '10 hours',
    explanation: 'Total work = 5 × 12 × 8 = 480 worker-hours. For 6 workers in 8 days: hours/day = 480 ÷ (6×8) = 10 hours.',
    wrongAnswerExplanations: {
      '12 hours': 'This exceeds the required daily hours with the increased workforce.',
      '15 hours': 'This significantly overestimates the required hours per day.',
      '9 hours': 'This is insufficient hours per day to complete the work in time.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t3_qm11',
    type: 'mcq',
    question: 'In a race of 1000 meters, A can beat B by 50 meters and B can beat C by 30 meters. By how many meters can A beat C in the same race?',
    options: ['78.5 meters', '80 meters', '75 meters', '82.5 meters'],
    correctAnswer: '78.5 meters',
    explanation: 'When A runs 1000m, B runs 950m. When B runs 1000m, C runs 970m. When A runs 1000m, C runs (950/1000)×970 = 921.5m. A beats C by 1000-921.5 = 78.5m.',
    wrongAnswerExplanations: {
      '80 meters': 'This is an approximation but not the exact value from precise calculations.',
      '75 meters': 'This underestimates the distance by which A beats C.',
      '82.5 meters': 'This overestimates the winning margin of A over C.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch18_t3_qm12',
    type: 'mcq',
    question: 'A tap can fill a tank in 20 minutes. Due to a leak, it takes 24 minutes to fill the tank. If the tank is full, how long will it take for the leak to empty it?',
    options: ['120 minutes', '100 minutes', '90 minutes', '110 minutes'],
    correctAnswer: '120 minutes',
    explanation: 'Let leak empty 1/x of tank per minute. Then 1/20 - 1/x = 1/24, which gives 1/x = 1/20 - 1/24 = 1/120, so x = 120 minutes.',
    wrongAnswerExplanations: {
      '100 minutes': 'This is an incorrect solution of the equation relating the rates.',
      '90 minutes': 'This underestimates the time required for the leak to empty the tank.',
      '110 minutes': 'This is close but not the correct solution to the rate equation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch18_t3_qm13',
    type: 'mcq',
    question: 'Rohit and Mohit are working on a project. Rohit can complete it in 12 days and Mohit in 15 days. They work together for 4 days, after which Rohit leaves. How many more days will Mohit take to complete the remaining work?',
    options: ['8 days', '9 days', '7 days', '10 days'],
    correctAnswer: '8 days',
    explanation: 'Daily work: Rohit = 1/12, Mohit = 1/15. Work done in 4 days = 4(1/12 + 1/15) = 4(5/60) = 20/60 = 1/3. Remaining = 2/3. Mohit takes 2/3 ÷ 1/15 = 2/3 × 15 = 10 days.',
    wrongAnswerExplanations: {
      '9 days': 'This overestimates the time Mohit needs to complete the remaining work.',
      '7 days': 'This underestimates the time Mohit needs for the remaining work.',
      '10 days': 'This correctly calculates the time Mohit needs for 2/3 of the work.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch18_t3_qm14',
    type: 'mcq',
    question: 'A cyclist covers a distance of 750 meters in 2 minutes 30 seconds. What is the speed in km/h?',
    options: ['18 km/h', '12 km/h', '15 km/h', '20 km/h'],
    correctAnswer: '18 km/h',
    explanation: 'Speed = 750m ÷ 150s = 5 m/s = 5 × 3.6 = 18 km/h.',
    wrongAnswerExplanations: {
      '12 km/h': 'This underestimates the speed due to incorrect conversion.',
      '15 km/h': 'This is an incorrect conversion from m/s to km/h.',
      '20 km/h': 'This overestimates the speed based on the given time and distance.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t3_qm15',
    type: 'mcq',
    question: 'A student allocates time for different subjects in the ratio 5:3:2 for Maths, Science, and English respectively. If the student increases the time for Maths by 20%, Science by 30%, and English by 25%, what is the new ratio of time allocation?',
    options: ['6:3.9:2.5', '5:3:2', '6:4:3', '5:4:3'],
    correctAnswer: '6:3.9:2.5',
    explanation: 'Original ratio 5:3:2. After increase: Maths = 5×1.2=6, Science = 3×1.3=3.9, English = 2×1.25=2.5. New ratio = 6:3.9:2.5.',
    wrongAnswerExplanations: {
      '5:3:2': 'This is the original ratio, not accounting for the percentage increases.',
      '6:4:3': 'This incorrectly rounds the values after applying the percentage increases.',
      '5:4:3': 'This does not correctly apply the given percentage increases to the original ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch18_t3_qm16',
    type: 'mcq',
    question: 'A train passes a platform 200 meters long in 20 seconds, and passes through a tunnel 1 km long in 1 minute. What is the length of the train?',
    options: ['100 meters', '150 meters', '75 meters', '125 meters'],
    correctAnswer: '100 meters',
    explanation: 'Let train length be L meters. For platform: (L+200)/20 = speed. For tunnel: (L+1000)/60 = speed. Solving: L = 100 meters.',
    wrongAnswerExplanations: {
      '150 meters': 'This overestimates the train length based on the given constraints.',
      '75 meters': 'This underestimates the train length and doesn`t satisfy both equations.',
      '125 meters': 'This doesn`t satisfy the equations derived from the platform and tunnel times.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch18_t3_qm17',
    type: 'mcq',
    question: 'Two taps A and B together can fill a tank in 6 hours. If tap A alone takes 10 hours to fill the tank, how long would tap B alone take to fill it?',
    options: ['15 hours', '12 hours', '18 hours', '20 hours'],
    correctAnswer: '15 hours',
    explanation: 'Using 1/6 = 1/10 + 1/B, solving for B gives B = 15 hours.',
    wrongAnswerExplanations: {
      '12 hours': 'This is an incorrect solution of the equation relating the combined and individual rates.',
      '18 hours': 'This overestimates the time tap B would take to fill the tank alone.',
      '20 hours': 'This significantly overestimates the filling time for tap B.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t3_qm18',
    type: 'mcq',
    question: 'In a 4×100 meters relay race, the first three runners each take 12 seconds. How fast must the fourth runner run to ensure the team finishes in 47 seconds?',
    options: ['11 seconds', '10 seconds', '9 seconds', '13 seconds'],
    correctAnswer: '11 seconds',
    explanation: 'First three runners take 3×12 = 36 seconds. For total time of 47 seconds, fourth runner must take 47-36 = 11 seconds.',
    wrongAnswerExplanations: {
      '10 seconds': 'This would make the total time less than the required 47 seconds.',
      '9 seconds': 'This would result in a total time significantly less than 47 seconds.',
      '13 seconds': 'This would make the total time exceed the required 47 seconds.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t3_qm19',
    type: 'mcq',
    question: 'A journey is scheduled to take 4 hours at 60 km/h. After traveling for 2 hours at the planned speed, what should be the speed for the remaining distance to reduce the total journey time by 30 minutes?',
    options: ['80 km/h', '75 km/h', '90 km/h', '70 km/h'],
    correctAnswer: '80 km/h',
    explanation: 'Total distance = 60×4 = 240 km. Traveled = 60×2 = 120 km. Remaining = 120 km. To cover in 1.5 hours: 120 ÷ 1.5 = 80 km/h.',
    wrongAnswerExplanations: {
      '75 km/h': 'This speed wouldn`t reduce the total journey time by the required 30 minutes.',
      '90 km/h': 'This exceeds the required speed to reduce the journey by 30 minutes.',
      '70 km/h': 'This speed would not save sufficient time on the remaining journey.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch18_t3_qm20',
    type: 'mcq',
    question: 'A worker completes 40% of a job in 10 days working at a constant rate. The worker is then joined by another worker who is twice as efficient. How many more days will they take to complete the remaining job?',
    options: ['5 days', '4 days', '6 days', '7.5 days'],
    correctAnswer: '5 days',
    explanation: 'First worker`s daily rate = 4% of job. Together, they complete (4%+8%) = 12% daily. Remaining job = 60%. Time needed = 60% ÷ 12% = 5 days.',
    wrongAnswerExplanations: {
      '4 days': 'This underestimates the time needed with both workers.',
      '6 days': 'This overestimates the time required with the second worker`s efficiency.',
      '7.5 days': 'This significantly overestimates the time needed to complete the job.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
