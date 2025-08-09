import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl7_ch18_t3',
    topicNumber: 3,
    topicName: 'Time management and scheduling',
    duration: 45,
    description: 'Learn how to manage your time effectively and create schedules for better productivity and less stress.',
    explanation: `
# Time Management and Scheduling ⏰📅

Time is one of our most valuable resources. Everyone has the same 24 hours in a day, but how we use those hours can make a big difference in our success, happiness, and stress levels. In this topic, you will learn what time management is, why it is important, and how to create effective schedules to make the most of your day.

## 1. What is Time Management? 🤔
Time management means planning and organizing how much time you spend on different activities. It helps you get more done in less time, reduces stress, and gives you more free time for fun and relaxation.

## 2. Why is Time Management Important? 🌟
- **Reduces stress:** When you plan your day, you know what to do and when to do it.
- **Increases productivity:** You can finish your work faster and have more time for hobbies or rest.
- **Helps meet deadlines:** You are less likely to forget important tasks or miss deadlines.
- **Improves focus:** You can concentrate better when you know what to do next.
- **Gives more free time:** Good planning means you can enjoy your favorite activities without worry.

## 3. Steps for Effective Time Management 📝
### a) Make a To-Do List
Write down all the tasks you need to do. This helps you remember everything and see what is most important.

### b) Prioritize Your Tasks
Decide which tasks are most important or urgent. Do those first. For example, if you have homework due tomorrow and a game to play, finish your homework first.

### c) Set Goals
Set clear goals for what you want to achieve each day. For example, "I will finish my math homework and read one chapter of my science book."

### d) Create a Timetable or Schedule
Plan your day or week. Decide when you will do each task. For example:
- 4:00 PM – 5:00 PM: Homework
- 5:00 PM – 5:30 PM: Snack and break
- 5:30 PM – 6:30 PM: Reading
- 6:30 PM – 7:00 PM: Playtime

### e) Use Tools to Help You
Use calendars, planners, alarms, or reminder apps to keep track of your schedule and deadlines.

### f) Take Breaks
Short breaks help you relax and focus better when you return to work. For example, after 30 minutes of study, take a 5-minute break.

### g) Review and Adjust
At the end of the day, check what you finished and what you need to do tomorrow. Adjust your plan if needed.

## 4. Scheduling: Making a Plan That Works 📆
Scheduling means deciding when you will do each task. A good schedule:
- Includes all important tasks (school, homework, meals, play, rest)
- Has time for breaks and fun
- Is realistic (not too much work in one day)
- Can be changed if something unexpected happens

### Example of a Simple Daily Schedule:
| Time         | Activity         |
|--------------|-----------------|
| 6:30 AM      | Wake up         |
| 7:00 AM      | Breakfast       |
| 8:00 AM      | School          |
| 2:00 PM      | Lunch           |
| 3:00 PM      | Homework        |
| 4:00 PM      | Play/Sports     |
| 5:00 PM      | Reading         |
| 6:00 PM      | Family time     |
| 7:00 PM      | Dinner          |
| 8:00 PM      | Free time       |
| 9:00 PM      | Sleep           |

## 5. Tips for Better Time Management 💡
- **Start with the most important tasks.**
- **Avoid distractions** like TV, mobile phones, or chatting during study time.
- **Set reminders** for important tasks and deadlines.
- **Don't try to do everything at once.** Focus on one thing at a time.
- **Be flexible.** Sometimes plans change. Adjust your schedule if needed.
- **Reward yourself** after finishing big tasks.

## 6. Common Time Wasters to Avoid 🚫
- Procrastination (delaying tasks)
- Spending too much time on social media or games
- Not having a plan
- Trying to multitask too much
- Forgetting to take breaks

## 7. Real-Life Examples 🏠
- **Exam Preparation:** Riya has 5 days before her exam. She makes a plan to study 2 subjects each day and review everything on the last day.
- **Project Work:** Arjun has a science project due in a week. He divides the work into small parts and does a little each day.
- **Sports and Study:** Priya loves playing badminton. She finishes her homework before going to play so she can enjoy her game without worry.

## 8. Sample Questions for Practice 📝
1. If you have 3 tasks and 2 hours, how will you plan your time?
2. What should you do if you finish your work before the deadline?
3. How can a planner or calendar help you?
4. Why is it important to take breaks?
5. What is the best way to avoid distractions while studying?

## 9. Short Summary ✨
- Time management means planning your day to use your time wisely.
- Making lists, setting goals, and creating schedules help you finish tasks on time.
- Good time management reduces stress and gives you more free time.
- Use tools like calendars and reminders to help you stay organized.
- Practice and review your schedule regularly to improve your skills.

Remember, time is precious—use it well to achieve your goals and enjoy life! ⏰🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 