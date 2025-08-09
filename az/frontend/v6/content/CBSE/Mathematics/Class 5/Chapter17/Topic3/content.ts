import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl5_ch17_t3',
    topicNumber: 3,
    topicName: "Time Management (Calendars, Schedules)",
    duration: 45,
    description: "Understanding time management concepts and practical scheduling skills",
    explanation: `
# Time Management (Calendars, Schedules) ⏰

Time is precious, and managing it well helps us accomplish more! 🎯 In this topic, we'll learn how to use calendars and create schedules to organize our daily activities. Let's explore the world of time management! 🚀

## Understanding Time Units 📅

### 1. Basic Time Units ⏱️
- **Seconds**: Smallest unit (60 seconds = 1 minute)
- **Minutes**: 60 minutes = 1 hour
- **Hours**: 24 hours = 1 day
- **Days**: 7 days = 1 week
- **Weeks**: 4 weeks ≈ 1 month
- **Months**: 12 months = 1 year

### 2. Calendar Basics 📆
- **Months**: January to December
- **Days in Months**:
  * 31 days: January, March, May, July, August, October, December
  * 30 days: April, June, September, November
  * 28/29 days: February

### 3. Weekly Schedule 📝
- **Weekdays**: Monday to Friday
- **Weekend**: Saturday and Sunday
- **School Days**: Usually Monday to Friday
- **Holidays**: Special days off

## Creating a Daily Schedule 🗓️

### Step 1: List Your Activities
- School time
- Study time
- Play time
- Meal times
- Sleep time

### Step 2: Allocate Time Slots
- Morning: 6:00 AM - 12:00 PM
- Afternoon: 12:00 PM - 5:00 PM
- Evening: 5:00 PM - 9:00 PM
- Night: 9:00 PM - 6:00 AM

### Step 3: Create a Timetable
Example Schedule:
- 6:00 AM: Wake up
- 7:00 AM: School
- 2:00 PM: Lunch
- 3:00 PM: Study
- 5:00 PM: Play
- 7:00 PM: Dinner
- 9:00 PM: Sleep

## Time Management Tips 💡

1. **Prioritize Tasks**
   - Important tasks first
   - Urgent tasks next
   - Fun activities last

2. **Use a Calendar**
   - Mark important dates
   - Plan ahead
   - Track deadlines

3. **Create Routines**
   - Same time for daily activities
   - Regular study hours
   - Consistent sleep schedule

## Practical Examples 🌟

### Example 1: School Day Schedule
Monday to Friday:
- 6:00 AM: Wake up
- 7:00 AM: Get ready
- 8:00 AM: School starts
- 2:00 PM: School ends
- 3:00 PM: Homework
- 5:00 PM: Play time
- 7:00 PM: Dinner
- 8:00 PM: Reading
- 9:00 PM: Sleep

### Example 2: Weekend Schedule
Saturday:
- 7:00 AM: Wake up
- 8:00 AM: Breakfast
- 9:00 AM: Hobbies
- 12:00 PM: Lunch
- 2:00 PM: Family time
- 5:00 PM: Play
- 7:00 PM: Dinner
- 9:00 PM: Sleep

## Sample Questions ❓

1. If school starts at 8:00 AM and ends at 2:00 PM, how many hours do you spend in school?
   - Answer: 6 hours (2:00 PM - 8:00 AM)

2. You have 2 hours of homework and 1 hour of play time. If you start homework at 3:00 PM, when will you finish playing?
   - Answer: 6:00 PM (3:00 PM + 2 hours + 1 hour)

3. If you sleep at 9:00 PM and wake up at 6:00 AM, how many hours do you sleep?
   - Answer: 9 hours (9:00 PM to 6:00 AM)

## Real-Life Applications 🌍

Time management is used in:
- Planning school days 📚
- Organizing study time 📝
- Scheduling activities 🎨
- Managing homework 📖
- Planning family time 👨‍👩‍👧‍👦

## Tips for Better Time Management 💡

1. Use a planner or calendar
2. Set reminders for important tasks
3. Break big tasks into smaller ones
4. Follow a daily routine
5. Leave time for fun activities

## Summary ✨

- Time is divided into different units
- Calendars help track dates and events
- Schedules organize daily activities
- Good time management leads to success
- Balance work and play time

Remember: Time well managed is time well spent! Practice good time management habits! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 