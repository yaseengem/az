import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl3_ch7_t1',
  topicNumber: 1,
  topicName: 'Understanding Time: Clocks and Calendars',
  duration: 45,
  description: 'Learn to read clocks, understand hours, minutes, and seconds, and use calendars to find days, dates, and months.',
  explanation: `
# Understanding Time: Clocks and Calendars ⏰📅

Time is an important part of our daily life. We use time to know when to wake up, go to school, eat, play, and sleep. In this topic, we will learn how to read clocks, understand hours, minutes, and seconds, and use calendars to find days, dates, and months. Let’s explore time together!

## What is Time? 🕰️
Time helps us measure how long things take. It tells us when something starts and ends. We use clocks and calendars to measure time.

### Clocks
A clock shows us the time of day. There are two main types of clocks:
- **Analog Clock**: Has numbers 1 to 12 and two or three hands (hour, minute, and sometimes second hand).
- **Digital Clock**: Shows time in numbers, like 07:30 or 15:45.

#### Parts of an Analog Clock
- **Hour Hand**: Short hand, shows the hour.
- **Minute Hand**: Long hand, shows the minutes.
- **Second Hand**: Thin hand, moves quickly, shows seconds.

### Reading an Analog Clock
- The hour hand points to the hour.
- The minute hand points to the minutes. Each number is 5 minutes apart.
- When the minute hand is on 12, it is "o’clock" (e.g., 3 o’clock).
- When the minute hand is on 6, it is half past the hour (e.g., half past 3).
- When the minute hand is on 3, it is quarter past (e.g., quarter past 3).
- When the minute hand is on 9, it is quarter to the next hour (e.g., quarter to 4).

#### Examples:
- If the hour hand is on 4 and the minute hand is on 12, it is 4 o’clock.
- If the hour hand is between 5 and 6 and the minute hand is on 6, it is half past 5 (5:30).
- If the hour hand is on 7 and the minute hand is on 3, it is quarter past 7 (7:15).

### Digital Clocks
- Show time as numbers, like 08:45. The first two digits are hours, the last two are minutes.
- 08:45 means 8 hours and 45 minutes.

### Units of Time
- 1 minute = 60 seconds
- 1 hour = 60 minutes
- 1 day = 24 hours

## Calendars 📆
A calendar helps us keep track of days, weeks, and months.
- **Days of the week**: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
- **Months of the year**: January, February, March, April, May, June, July, August, September, October, November, December
- **A year has 12 months and 365 days (366 in a leap year).**

### Using a Calendar
- Find today’s date by looking at the month and the day.
- Find out what day of the week a date falls on.
- Count how many days are left until a special event.

#### Examples:
- If today is 10th August, and your birthday is on 25th August, there are 15 days left.
- If 1st January is a Monday, then 8th January is also a Monday.

### Leap Year
- A leap year has 366 days. February has 29 days in a leap year.
- Leap years come every 4 years (e.g., 2020, 2024).

## Sample Questions
1. What time is it when the hour hand is on 9 and the minute hand is on 12?
2. How many minutes are there in 2 hours?
3. If today is Wednesday, what day will it be after 5 days?
4. How many days are there in February in a leap year?
5. If the clock shows 6:30, what is the time in words?

## Summary ✨
- Clocks help us read the time in hours, minutes, and seconds.
- Calendars help us keep track of days, weeks, and months.
- Practice reading both analog and digital clocks.
- Learn the days of the week and months of the year.
- Time is measured in seconds, minutes, hours, days, weeks, months, and years.

Understanding time helps us plan our day and never miss important events! ⏳🎉
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
