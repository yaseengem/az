import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl10_ch18_t3',
  topicNumber: 3,
  topicName: "Time management and scheduling",
  duration: 45,
  description: "Understanding mathematical approaches to time management, scheduling problems, and applications in daily life with focus on time-work-rate relationships.",
  explanation: `
# Time Management and Scheduling 🕒

Time management and scheduling are essential life skills that have direct applications in mathematics and everyday problem-solving. By understanding the mathematical principles behind these concepts, you can make better decisions about allocating your time and resources efficiently. Let's explore these important concepts! ⏱️

## Understanding Time-Based Problems 🧩

Time-based problems in mathematics typically involve relationships between time, work, and rate. These concepts form the foundation for solving scheduling and time management problems in real life.

### Key Time-Work Relationships 📊

1. **Basic Rate Formula** 📝
   * Rate = Work ÷ Time
   * Work = Rate × Time
   * Time = Work ÷ Rate

   For example, if you can read 20 pages per hour (rate), then reading 100 pages (work) will take 5 hours (time).

2. **Combined Work Rate** 👥
   * When multiple people or machines work together, their rates add up.
   * If person A completes a job in 'a' time units and person B in 'b' time units, together they complete 1/a + 1/b of the job in one time unit.
   * Time to complete the job together = 1 ÷ (1/a + 1/b) = ab/(a+b)

   For example, if Ravi can paint a room in 6 hours and Sonia in 4 hours, together they can complete it in (6×4)/(6+4) = 24/10 = 2.4 hours.

3. **Efficiency and Productivity** 📈
   * Efficiency = Output ÷ Input × 100%
   * If someone produces 45 units in 5 hours instead of the standard 40 units, their efficiency is (45/40) × 100% = 112.5%

## Scheduling Principles and Techniques 📆

### Linear Scheduling 📏

Linear scheduling involves allocating time in direct proportion to tasks:

1. **Equal Time Allocation**: Dividing available time equally among tasks
   * Example: If you have 3 hours to study 3 subjects, allocating 1 hour per subject

2. **Proportional Time Allocation**: Allocating time based on importance, difficulty, or weightage
   * Example: For exam preparation with subjects weighted 50%, 30%, and 20%, allocating 5, 3, and 2 hours respectively from a 10-hour study session

3. **Critical Path Method** ⚡
   * Identifying the sequence of tasks that determines the minimum possible completion time
   * Example: In a group project, some tasks depend on others being completed first

### Average Speed Calculations ⏩

Average speed is a critical concept in time management and scheduling:

* Average Speed = Total Distance ÷ Total Time

For varying speeds:
* If a vehicle travels at speed v₁ for time t₁ and at speed v₂ for time t₂, the average speed is:
  * Total Distance / Total Time = (v₁×t₁ + v₂×t₂) / (t₁+t₂)

* For the same distance traveled at different speeds v₁ and v₂, the average speed is:
  * 2v₁v₂/(v₁+v₂)

Example: If you walk 2 km at 4 km/h and then another 2 km at 6 km/h, your average speed is:
* Total distance = 4 km
* Time for first 2 km = 2 ÷ 4 = 0.5 hours
* Time for second 2 km = 2 ÷ 6 = 0.33 hours
* Total time = 0.83 hours
* Average speed = 4 ÷ 0.83 = 4.82 km/h

## Practical Applications in Daily Life 🏡

### Study Planning 📚

Mathematics helps create effective study schedules:

1. **Time Allocation**: If a student needs to study 5 subjects with varying difficulties, they might allocate time proportionally.
   
   Example: For subjects with difficulty ratios 3:2:4:1:2, from a 12-hour weekly study time:
   * Total ratio units = 12
   * Time for each subject = (3/12)×12, (2/12)×12, etc. = 3, 2, 4, 1, and 2 hours respectively

2. **Deadline Management**: If a student has 300 pages to read in 10 days, they need to read 30 pages daily. If they read only 25 pages daily for the first 6 days, they must recalculate:
   * Pages read = 6 × 25 = 150
   * Remaining pages = 300 - 150 = 150
   * Remaining days = 4
   * New daily target = 150 ÷ 4 = 37.5 pages per day

### Time-Distance-Speed Problems 🚗

These problems are common in daily travel planning:

1. **Catching a Train**: If a train departs at 9:00 AM and you need 20 minutes to walk to the station, you should leave home by 8:40 AM.

2. **Journey Planning**: If you need to reach a destination 250 km away in 5 hours:
   * Required average speed = 250 ÷ 5 = 50 km/h
   * If there's a 30-minute lunch break, the driving time reduces to 4.5 hours
   * New required speed = 250 ÷ 4.5 = 55.56 km/h

3. **Meeting Time Calculation**: If two people start from points 100 km apart and travel toward each other at 30 km/h and 20 km/h respectively, they will meet in:
   * Time = Distance ÷ Combined Speed = 100 ÷ (30+20) = 100 ÷ 50 = 2 hours

### Work-Rate Problems 🔨

These are essential for project planning and resource allocation:

1. **Project Completion**: If 5 workers can complete a project in 12 days, how many workers are needed to complete it in 8 days?
   * Solution: (5 × 12) ÷ 8 = 7.5, so 8 workers are needed

2. **Pipe and Cistern Problems**: If pipe A can fill a tank in 6 hours and pipe B in 8 hours, together they can fill it in:
   * Combined rate = 1/6 + 1/8 = (4+3)/24 = 7/24 tank per hour
   * Time to fill = 1 ÷ (7/24) = 24/7 = 3.43 hours

3. **Efficiency Changes**: If a machine produces 20 units per hour but after servicing produces 25 units per hour, the efficiency increase is:
   * (25-20)/20 × 100% = 25% increase

## Time Management Strategies in Mathematics 📝

### The Eisenhower Matrix 🧠

This popular time management tool can be represented mathematically:

1. **Urgent and Important** (Priority 1): Tasks with highest weight, allocated most resources
2. **Important but Not Urgent** (Priority 2): Strategic tasks, allocated significant time
3. **Urgent but Not Important** (Priority 3): Delegation candidates
4. **Neither Urgent nor Important** (Priority 4): Lowest allocation or elimination

### Pareto Principle (80/20 Rule) 📊

This principle suggests that 80% of results come from 20% of efforts:

* If studying 5 subjects, focusing on the most challenging 20% of topics might address 80% of potential test questions
* Time allocation can be weighted to give more time to "high-yield" activities

### Advanced Scheduling Techniques 🔄

1. **Critical Path Analysis**: Calculating the minimum time needed to complete a sequence of dependent tasks
   
   Example: For a school project with tasks:
   * Research (2 days)
   * Writing (3 days, depends on research)
   * Creating visuals (2 days, can be done parallel to writing)
   * Final assembly (1 day, depends on both writing and visuals)
   
   The critical path is Research → Writing → Final Assembly = 6 days minimum

2. **Task Prioritization Formula**: P = I × U/E
   * P = Priority
   * I = Importance (scale 1-10)
   * U = Urgency (scale 1-10)
   * E = Effort required (scale 1-10)
   
   Higher P values indicate higher priority tasks

## Sample Questions and Problems 📝

### Example 1: Study Schedule Design 📖
A student has 20 hours to prepare for 3 exams with weightages of 50%, 30%, and 20% respectively. How many hours should they allocate to each subject?

**Solution**: 
* For 50% weightage: 0.5 × 20 = 10 hours
* For 30% weightage: 0.3 × 20 = 6 hours
* For 20% weightage: 0.2 × 20 = 4 hours

### Example 2: Work Rate Problem 👷‍♀️
Pipe A can fill a tank in 10 hours and pipe B in 15 hours. A leak in the tank can empty it in 30 hours. How long will it take to fill the tank if both pipes are open and the tank has a leak?

**Solution**:
* Rate of pipe A = 1/10 tank per hour
* Rate of pipe B = 1/15 tank per hour
* Rate of leak = -1/30 tank per hour (negative because it empties)
* Net rate = 1/10 + 1/15 - 1/30 = (3+2-1)/30 = 4/30 = 2/15 tank per hour
* Time to fill = 1 ÷ (2/15) = 15/2 = 7.5 hours

### Example 3: Average Speed Calculation 🚶‍♂️
A person walks to school at 4 km/h and runs back along the same route at 8 km/h. If the total journey takes 1.5 hours, how far is the school from home?

**Solution**:
* Let the distance be d km
* Time walking = d/4 hours
* Time running = d/8 hours
* Total time = d/4 + d/8 = 3d/8 hours
* Given that 3d/8 = 1.5
* So d = 1.5 × 8/3 = 4 km

## Summary ✨

Time management and scheduling in mathematics involve:

1. **Basic Principles**: 
   * Rate × Time = Work
   * Average speed calculations
   * Combined work rate formulas

2. **Planning Techniques**:
   * Proportional allocation based on priority/weightage
   * Critical path identification
   * Efficiency calculations and optimization

3. **Real-World Applications**:
   * Study planning and exam preparation
   * Travel and journey planning
   * Project management and resource allocation
   * Household tasks and daily scheduling

Understanding these mathematical concepts helps develop better time management skills, allowing for more efficient planning and execution of tasks in academic, professional, and personal life. By applying these principles, you can optimize your schedule, meet deadlines, and achieve better results with the available time and resources. ⏰

### Additional Practice Problems:

1. If Aarav can paint a fence in 6 hours and Priya can paint the same fence in 4 hours, how long will it take them to paint the fence working together?

2. A car travels at 60 km/h for 2 hours and then at 80 km/h for 3 hours. What is the average speed for the entire journey?

3. A student has read 60% of a book in 3 days. If the student maintains the same reading pace, how many more days will it take to finish the book?

4. Train A travels at 60 km/h and train B travels at 90 km/h in opposite directions. If they are initially 450 km apart, how long will it take for them to meet?
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
