// Topic 3: Time management (calendars, schedules)
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch17_t3',
    topicNumber: 3,
    topicName: "Time Management (Calendars, Schedules)",
    duration: 45,
    description: "Understanding time management using calendars and schedules",
    explanation: `
# Time Management (Calendars, Schedules) ⏰

Welcome to the world of time management! 📅 In this topic, we'll learn how to use calendars and schedules to organize our time effectively. Let's explore how math helps us manage our daily activities! 🚀

## Understanding Time Management 📊

### Calendars and Dates 📅
- **Months**: 12 months in a year
- **Weeks**: 7 days in a week
- **Days**: 24 hours in a day
- **Common Abbreviations**: Mon, Tue, Wed, Thu, Fri, Sat, Sun

### Time Conversions 🔄
- 1 hour = 60 minutes
- 1 minute = 60 seconds
- 1 day = 24 hours
- 1 week = 7 days
- 1 month ≈ 30 days
- 1 year = 12 months = 365 days

## Reading and Understanding Schedules 📝

### Schedule Components
1. **Time Slots** ⏱️
   - Start and end times
   - Duration of activities
   - Example: 9:00 AM - 10:30 AM (1.5 hours)

2. **Activities** 📋
   - List of tasks or events
   - Priority levels
   - Example: "Math Class", "Lunch Break"

### Creating and Managing Schedules 📈

#### Planning Your Day
- Break down activities into time slots
- Allocate appropriate time for each task
- Include breaks and transitions

#### Weekly Planning
- Assign activities to specific days
- Balance different types of activities
- Plan for regular events

## Real-Life Examples 🌟

### Example 1: School Schedule
Monday Schedule:
- 8:00 AM - 8:45 AM: Assembly
- 8:45 AM - 9:30 AM: Math
- 9:30 AM - 10:15 AM: Science
- 10:15 AM - 10:30 AM: Break
- 10:30 AM - 11:15 AM: English
- 11:15 AM - 12:00 PM: Social Studies

### Example 2: Study Schedule
Evening Study Plan:
- 4:00 PM - 4:45 PM: Math Practice
- 4:45 PM - 5:30 PM: Science Revision
- 5:30 PM - 6:00 PM: Break
- 6:00 PM - 6:45 PM: English Reading
- 6:45 PM - 7:30 PM: Homework

## Important Tips 💡

1. **Time Management** ⏰
   - Use a calendar or planner
   - Set realistic time limits
   - Include buffer time between activities

2. **Understanding Time** 📊
   - Read analog and digital clocks
   - Calculate durations
   - Convert between time units

3. **Scheduling Tips** 📅
   - Prioritize important tasks
   - Balance work and breaks
   - Be flexible with your schedule

## Common Mistakes to Avoid ❌

1. **Time Estimation** 🤔
   - Don't underestimate task duration
   - Include transition time
   - Account for unexpected delays

2. **Over-scheduling** 📉
   - Don't pack too many activities
   - Leave time for breaks
   - Allow for flexibility

3. **Ignoring Time Zones** 🌍
   - Consider different time formats
   - Be aware of AM/PM
   - Check for daylight saving time

## Practice Problems 🏋️‍♀️

1. **Problem**: If a class starts at 9:15 AM and ends at 10:45 AM, how long is the class?
   - Solution: 1 hour and 30 minutes

2. **Problem**: Convert 2.5 hours to minutes.
   - Solution: 150 minutes (2.5 × 60)

3. **Problem**: If you have 3 activities that each take 45 minutes, how much total time do you need?
   - Solution: 2 hours and 15 minutes

## Summary ✨

In this topic, we learned:
- How to read and use calendars
- Time conversions and calculations
- Creating and managing schedules
- Important time management tips
- Common scheduling mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: If you start studying at 4:30 PM and study for 2 hours and 15 minutes, what time will you finish? (Answer: 6:45 PM)

2. **Example**: How many minutes are there in 3.25 hours? (Answer: 195 minutes)

3. **Question**: If a movie starts at 2:15 PM and is 2 hours and 45 minutes long, what time will it end? (Answer: 5:00 PM)

4. **Question**: If you have 4 classes that each last 40 minutes, with 10-minute breaks between them, how much total time will you spend? (Answer: 3 hours and 30 minutes)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
