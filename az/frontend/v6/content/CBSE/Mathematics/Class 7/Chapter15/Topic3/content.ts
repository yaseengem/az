import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl7_ch15_t3',
    topicNumber: 3,
    topicName: 'Views: Top, Front, Side',
    duration: 90,
    description: "Learn about different views of 3D shapes from various angles and how to visualize and draw them.",
    explanation: `# Views of 3D Shapes: Top, Front, and Side Views 📐

Understanding how 3D shapes look from different angles is essential for visualizing and working with three-dimensional objects. Let's explore the three main views: top view, front view, and side view.

## Basic Concepts 📚

1. **What are Different Views?**
   - Each view shows how an object looks from a specific direction
   - Top view: Looking down from above
   - Front view: Looking from the front
   - Side view: Looking from either side
   - Each view is a 2D representation of a 3D object

2. **Why Study Different Views? 🤔**
   - Helps in understanding 3D shapes better
   - Essential for engineering and architectural drawings
   - Used in design and construction
   - Important for spatial reasoning skills

## Common 3D Shapes and Their Views 🔷

1. **Cube**
   - Top view: Square
   - Front view: Square
   - Side view: Square
   - All views are identical squares because all faces are equal

2. **Rectangular Prism (Cuboid)**
   - Top view: Rectangle (length × width)
   - Front view: Rectangle (width × height)
   - Side view: Rectangle (length × height)
   - Views may be different rectangles depending on dimensions

3. **Cylinder**
   - Top view: Circle
   - Front view: Rectangle
   - Side view: Rectangle
   - Top and bottom views are identical circles

4. **Cone**
   - Top view: Circle
   - Front view: Triangle
   - Side view: Triangle
   - Base appears as circle, height creates triangular profile

5. **Sphere**
   - All views show circles
   - Only 3D shape that looks same from all angles
   - Perfect symmetry in all directions

## Understanding Different Views 🎯

1. **Top View**
   - Shows object as seen from above
   - Reveals length and width
   - Height is not visible
   - Examples:
     * Square pyramid → Square with lines to corners
     * Triangular prism → Triangle
     * Cylinder → Circle

2. **Front View**
   - Shows object as seen from front
   - Reveals width and height
   - Depth (length) is not visible
   - Examples:
     * Cube → Square
     * Cylinder → Rectangle
     * Cone → Triangle

3. **Side View**
   - Shows object as seen from side
   - Reveals length and height
   - Width is not visible
   - Examples:
     * Rectangular box → Rectangle
     * Cylinder → Rectangle
     * Cone → Triangle

## Important Points to Remember ⭐

1. **Dimensions in Views**
   - Each view shows only two dimensions
   - The third dimension is not visible
   - Combined views give complete information about the object

2. **Hidden Lines**
   - Dotted lines show hidden edges
   - Help understand complete shape
   - Important in technical drawings

3. **Scale and Proportion**
   - Views maintain relative proportions
   - Measurements should be consistent
   - Scale helps in accurate representation

## Practical Applications 🌟

1. **Architecture**
   - Building plans show different views
   - Helps in construction planning
   - Essential for spatial layout

2. **Engineering**
   - Technical drawings use multiple views
   - Important for manufacturing
   - Helps in understanding complex structures

3. **Daily Life**
   - Reading maps and floor plans
   - Assembling furniture
   - Understanding packaging designs

## Common Mistakes to Avoid ⚠️

1. **Confusing Views**
   - Mixing up front and side views
   - Not maintaining proportions
   - Forgetting hidden lines

2. **Dimension Errors**
   - Not considering all dimensions
   - Inconsistent scaling
   - Wrong orientation of object

3. **Visualization Problems**
   - Difficulty in mental rotation
   - Not understanding perspective
   - Confusing 2D and 3D representations

## Tips for Drawing Views 📝

1. **Step-by-Step Approach**
   - Start with basic outline
   - Add details gradually
   - Check proportions regularly
   - Use proper tools

2. **Practice Exercises**
   - Draw simple objects first
   - Progress to complex shapes
   - Practice mental visualization
   - Check work from all angles

3. **Verification Methods**
   - Compare with actual objects
   - Use models for reference
   - Cross-check measurements
   - Verify with other views

## Summary 📌

1. **Key Points**
   - Each view shows two dimensions
   - Different views give complete information
   - Maintain consistency in representation
   - Practice improves visualization

2. **Applications**
   - Technical drawings
   - Construction plans
   - Design and manufacturing
   - Everyday problem solving

3. **Skills Developed**
   - Spatial awareness
   - Technical drawing
   - Mental visualization
   - Problem-solving ability

Remember: Understanding different views helps in better visualization of 3D objects and their properties. Regular practice with various shapes will improve your ability to work with three-dimensional objects. 🎨`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 