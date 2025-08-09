import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl3_ch7_t2',
  topicNumber: 2,
  topicName: 'Reading Clocks and Calendars',
  duration: 60,
  description: 'Learn to read time on clocks (analog and digital), understand hours, minutes, seconds, and use calendars to find days, dates, and months.',
  explanation: `
# Reading Clocks and Calendars 🕰️📅

Time is an important part of our daily lives. We use clocks to know when to wake up, go to school, eat, play, and sleep. Calendars help us remember birthdays, holidays, and special events. In this topic, we will learn how to read clocks and use calendars easily!

## What is Time? ⏳
Time tells us when things happen. It helps us organize our day. We measure time in seconds, minutes, hours, days, weeks, months, and years.

### Units of Time:
- **1 minute = 60 seconds**
- **1 hour = 60 minutes**
- **1 day = 24 hours**
- **1 week = 7 days**
- **1 month = 28-31 days**
- **1 year = 12 months**

## Reading a Clock 🕒
There are two main types of clocks:
- **Analog Clock**: Has numbers 1 to 12 and two or three hands (hour, minute, and sometimes second hand).
- **Digital Clock**: Shows time in numbers, like 07:30 or 18:45.

### Parts of an Analog Clock:
- **Hour hand**: Short hand, shows the hour.
- **Minute hand**: Long hand, shows the minutes.
- **Second hand**: Thin hand, moves quickly, shows seconds.

### How to Read an Analog Clock:
1. Look at the hour hand. Which number is it pointing to or just past? That is the hour.
2. Look at the minute hand. Each number stands for 5 minutes. Multiply the number by 5 to get the minutes.
3. If there is a second hand, read it the same way as the minute hand.

#### Example:
If the hour hand is on 3 and the minute hand is on 6, the time is 3:30.

#### Practice:
- If the hour hand is on 7 and the minute hand is on 12, what time is it? (Answer: 7:00)
- If the hour hand is between 4 and 5, and the minute hand is on 9, what time is it? (Answer: 4:45)

### Reading a Digital Clock:
A digital clock shows time like 08:15 or 14:50. The first number is the hour, the second is the minutes.
- 08:15 means 8 hours and 15 minutes.
- 14:50 means 2:50 PM (14 - 12 = 2 PM).

## AM and PM ☀️🌙
- **AM**: Midnight to noon (00:00 to 11:59)
- **PM**: Noon to midnight (12:00 to 23:59)

## Using a Calendar 📆
A calendar shows days, weeks, and months. It helps us plan and remember important dates.

### Parts of a Calendar:
- **Days**: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
- **Months**: January, February, March, ... December
- **Dates**: Numbers from 1 to 31

### How to Use a Calendar:
- Find today’s date and day of the week.
- Find out which day your birthday falls on this year.
- Count how many days until a holiday.

#### Example:
If today is 10th August and your birthday is on 25th August, there are 15 days left.

### Practice:
- What day of the week is 1st January?
- How many days are there in February in a leap year? (Answer: 29)

## Why is Time Important? ⏰
- Helps us be on time for school and activities.
- Helps us plan our day.
- Helps us remember special events.

## Sample Questions:
1. What time will it be 2 hours after 3:00 PM?
2. If today is Monday, what day will it be after 10 days?
3. How many minutes are there in 3 hours?
4. If your birthday is in 20 days, what date will it be?

## Summary 📝
- Clocks help us read time in hours, minutes, and seconds.
- Calendars help us find days, dates, and months.
- Knowing how to read clocks and calendars helps us organize our lives and never miss important events! 🎉
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
