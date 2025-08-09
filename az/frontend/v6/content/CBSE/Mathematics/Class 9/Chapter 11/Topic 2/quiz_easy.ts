// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter11\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch11_t2_qe1',
        type: "mcq",
        question: "What is the formula for the surface area of a sphere?",
        options: ["4πr²", "πr²", "2πr²", "4πr³/3"],
        correctAnswer: "4πr²",
        explanation: "The surface area of a sphere is 4πr², where r is the radius of the sphere. This formula represents the total area of the curved surface that encloses the sphere completely. 🌐",
        wrongAnswerExplanations: {
            "πr²": "This is the formula for the area of a circle, not a sphere.",
            "2πr²": "This represents the surface area of a hemisphere, not a complete sphere.",
            "4πr³/3": "This is the formula for the volume of a sphere, not its surface area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t2_qe2',
        type: "mcq",
        question: "If the radius of a sphere is doubled, what happens to its surface area?",
        options: ["Doubles", "Triples", "Quadruples", "Increases 8 times"],
        correctAnswer: "Quadruples",
        explanation: "Since the surface area of a sphere is 4πr², when the radius is doubled from r to 2r, the surface area becomes 4π(2r)² = 4π × 4r² = 16πr². This is 4 times the original surface area (4πr²), so the surface area quadruples. 📏",
        wrongAnswerExplanations: {
            "Doubles": "This underestimates the increase. Surface area scales as the square of radius.",
            "Triples": "This underestimates the increase in surface area.",
            "Increases 8 times": "This would be correct for volume, but not for surface area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t2_qe3',
        type: "mcq",
        question: "What is the surface area of a sphere with radius 7 cm?",
        options: ["49π cm²", "196π cm²", "147π cm²", "28π cm²"],
        correctAnswer: "196π cm²",
        explanation: "Using the formula for the surface area of a sphere: Surface area = 4πr² = 4π × 7² = 4π × 49 = 196π cm². This calculation directly applies the standard formula with the given radius. 🧮",
        wrongAnswerExplanations: {
            "49π cm²": "This is πr², which is a circle's area, not a sphere's surface area.",
            "147π cm²": "This value doesn't correspond to any standard calculation for a sphere.",
            "28π cm²": "This value is 4πr, which confuses radius with area calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe4',
        type: "mcq",
        question: "A sphere has a surface area of 100π cm². What is its radius?",
        options: ["5 cm", "10 cm", "√25 cm", "50 cm"],
        correctAnswer: "5 cm",
        explanation: "Using the formula: Surface area = 4πr², we get 100π = 4πr², which gives r² = 25, so r = 5 cm. This involves solving for the radius when the surface area is known. 🔍",
        wrongAnswerExplanations: {
            "10 cm": "This value would give a surface area of 400π cm², not 100π cm².",
            "√25 cm": "While this simplifies to 5 cm, it's redundant as 5 cm is already an option.",
            "50 cm": "This value would give a surface area much larger than 100π cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe5',
        type: "mcq",
        question: "Which of the following real-life objects most closely resembles a sphere?",
        options: ["A cone 🔺", "A basketball 🏀", "A cylinder 🥫", "A pyramid 🏛️"],
        correctAnswer: "A basketball 🏀",
        explanation: "A basketball is designed to be spherical and closely resembles a perfect mathematical sphere. This everyday example helps visualize the properties of a sphere in the real world. A sphere has a perfectly round shape with all points on its surface equidistant from the center. 🏀",
        wrongAnswerExplanations: {
            "A cone 🔺": "A cone has a circular base and a curved surface that tapers to a point, which is very different from a sphere.",
            "A cylinder 🥫": "A cylinder has two parallel circular bases connected by a curved rectangular surface, unlike a sphere.",
            "A pyramid 🏛️": "A pyramid has a polygonal base and triangular faces that meet at a point, not resembling a sphere."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t2_qe6',
        type: "mcq",
        question: "The surface area of a sphere is 256π square units. What is its radius?",
        options: ["4 units", "8 units", "16 units", "64 units"],
        correctAnswer: "8 units",
        explanation: "Using the formula: Surface area = 4πr², we get 256π = 4πr², which gives r² = 64, so r = 8 units. This calculation demonstrates how to find a sphere's radius from its surface area. 📊",
        wrongAnswerExplanations: {
            "4 units": "This value would give a surface area of 64π square units, not 256π.",
            "16 units": "This value would give a surface area of 1024π square units, not 256π.",
            "64 units": "This value would give a surface area of 16384π square units, not 256π."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe7',
        type: "mcq",
        question: "If the radius of a sphere increases by 50%, how does its surface area change?",
        options: ["Increases by 50%", "Increases by 75%", "Increases by 125%", "Increases by 250%"],
        correctAnswer: "Increases by 125%",
        explanation: "If radius increases by 50%, the new radius is 1.5r. The new surface area is 4π(1.5r)² = 4π × 2.25r² = 9πr², which is 2.25 times the original. This means an increase of 125% (2.25 = 1 + 1.25). Surface area scales as the square of radius, affecting the percent increase. 📈",
        wrongAnswerExplanations: {
            "Increases by 50%": "This underestimates the increase. The surface area doesn't scale linearly with radius.",
            "Increases by 75%": "This underestimates the increase in surface area.",
            "Increases by 250%": "This overestimates the increase in surface area."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe8',
        type: "mcq",
        question: "What is the surface area of Earth if it is considered a perfect sphere with a radius of 6400 km?",
        options: ["12,800π km²", "25,600π km²", "409,600π km²", "163,840,000π km²"],
        correctAnswer: "163,840,000π km²",
        explanation: "Surface area = 4πr² = 4π × 6400² = 4π × 40,960,000 = 163,840,000π km². This calculation applies the sphere formula to Earth's approximate radius, illustrating the scale of planetary surface areas. 🌍",
        wrongAnswerExplanations: {
            "12,800π km²": "This is 2πr, not 4πr², and greatly underestimates Earth's surface area.",
            "25,600π km²": "This is 4πr, not 4πr², and greatly underestimates Earth's surface area.",
            "409,600π km²": "This calculation error underestimates the surface area."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe9',
        type: "mcq",
        question: "A ping pong ball has a diameter of 4 cm. What is its approximate surface area (use π = 3.14)?",
        options: ["12.56 cm²", "25.12 cm²", "50.24 cm²", "62.8 cm²"],
        correctAnswer: "50.24 cm²",
        explanation: "First, find the radius: r = diameter/2 = 4/2 = 2 cm. Then, surface area = 4πr² = 4 × 3.14 × 2² = 4 × 3.14 × 4 = 50.24 cm². This real-world example shows how to calculate the surface area of a small spherical object. 🏓",
        wrongAnswerExplanations: {
            "12.56 cm²": "This is the circular cross-sectional area (πr²), not the sphere's surface area.",
            "25.12 cm²": "This is 2πr², which underestimates the correct surface area.",
            "62.8 cm²": "This value doesn't match the correct calculation for the given dimensions."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe10',
        type: "mcq",
        question: "How many times larger is the surface area of a sphere with radius 9 cm compared to a sphere with radius 3 cm?",
        options: ["3 times", "6 times", "9 times", "27 times"],
        correctAnswer: "9 times",
        explanation: "The surface area of a sphere is 4πr². The ratio of surface areas = 4π(9)²/4π(3)² = 81/9 = 9. This demonstrates how the surface area scales with the square of the radius ratio (9/3)² = 3² = 9. 🔢",
        wrongAnswerExplanations: {
            "3 times": "This equals the ratio of radii (9/3), but surface area scales as the square of radius.",
            "6 times": "This doesn't correspond to any standard relationship between the spheres.",
            "27 times": "This would be the ratio of volumes (cubes of radii), not surface areas."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe11',
        type: "mcq",
        question: "The surface area of a sphere is numerically equal to its volume. What is the radius of the sphere?",
        options: ["3 units", "4 units", "6 units", "9 units"],
        correctAnswer: "3 units",
        explanation: "For a sphere with radius r: Surface area = 4πr² and Volume = (4/3)πr³. If these are equal, then 4πr² = (4/3)πr³, which simplifies to r = 3. This special case occurs only when the radius is exactly 3 units. 🧩",
        wrongAnswerExplanations: {
            "4 units": "This value doesn't satisfy the condition that surface area equals volume.",
            "6 units": "This value doesn't satisfy the condition that surface area equals volume.",
            "9 units": "This value doesn't satisfy the condition that surface area equals volume."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t2_qe12',
        type: "mcq",
        question: "What is the surface area of a hemisphere with radius 10 cm?",
        options: ["100π cm²", "200π cm²", "300π cm²", "400π cm²"],
        correctAnswer: "300π cm²",
        explanation: "The surface area of a hemisphere = 2πr² (curved surface) + πr² (flat base) = 3πr² = 3π × 10² = 3π × 100 = 300π cm². This calculation shows that a hemisphere's surface area is 3/4 of a complete sphere's surface area. 🌓",
        wrongAnswerExplanations: {
            "100π cm²": "This is just the area of the circular base (πr²), not the full hemisphere.",
            "200π cm²": "This is half the surface area of a sphere (2πr²), but ignores the flat circular base.",
            "400π cm²": "This is the surface area of a complete sphere (4πr²), not a hemisphere."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe13',
        type: "mcq",
        question: "A soap bubble is a thin layer of soap enclosing air, forming an approximate sphere. If a soap bubble has a radius of 3.5 cm, what is its surface area?",
        options: ["12.25π cm²", "24.5π cm²", "49π cm²", "154π cm²"],
        correctAnswer: "49π cm²",
        explanation: "The surface area of the spherical bubble = 4πr² = 4π × (3.5)² = 4π × 12.25 = 49π cm². This application shows how the surface area formula helps understand physics concepts like surface tension in bubbles. 🫧",
        wrongAnswerExplanations: {
            "12.25π cm²": "This is r², not 4πr², greatly underestimating the surface area.",
            "24.5π cm²": "This is 2r², not 4πr², greatly underestimating the surface area.",
            "154π cm²": "This doesn't match the correct calculation for the given radius."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe14',
        type: "mcq",
        question: "If the surface area of a sphere increases by 69%, what is the percentage increase in its radius?",
        options: ["23%", "30%", "46%", "69%"],
        correctAnswer: "30%",
        explanation: "If surface area increases by 69%, then new surface area = 1.69 × old surface area. Since surface area = 4πr², we have 4πr₂² = 1.69 × 4πr₁², giving r₂²/r₁² = 1.69, so r₂/r₁ = √1.69 ≈ 1.3. This means the radius increases by 30%. 📈",
        wrongAnswerExplanations: {
            "23%": "This underestimates the increase in radius needed to achieve the given surface area increase.",
            "46%": "This overestimates the increase in radius needed.",
            "69%": "This would be correct if radius scaled linearly with surface area, but it doesn't."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t2_qe15',
        type: "mcq",
        question: "Which statement is NOT true about the surface area of a sphere?",
        options: [
            "It equals 4πr²",
            "It increases by a factor of 4 when the radius doubles",
            "It is directly proportional to the radius",
            "It is directly proportional to the square of the radius"
        ],
        correctAnswer: "It is directly proportional to the radius",
        explanation: "The surface area of a sphere is not directly proportional to its radius but to the square of its radius. The formula 4πr² shows a square relationship (r²). If direct proportionality existed, the formula would be of the form kr, not kr². 🔍",
        wrongAnswerExplanations: {
            "It equals 4πr²": "This is the correct formula for a sphere's surface area.",
            "It increases by a factor of 4 when the radius doubles": "This correctly reflects how surface area scales with radius.",
            "It is directly proportional to the square of the radius": "This correctly states the relationship between surface area and radius squared."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe16',
        type: "mcq",
        question: "A sphere has a surface area of 36π cm². What is its diameter?",
        options: ["3 cm", "6 cm", "9 cm", "12 cm"],
        correctAnswer: "6 cm",
        explanation: "Surface area = 4πr² = 36π, so r² = 9, giving r = 3 cm. The diameter = 2r = 2 × 3 = 6 cm. This shows the relationship between surface area and diameter, which is twice the radius. 📏",
        wrongAnswerExplanations: {
            "3 cm": "This is the radius, not the diameter of the sphere.",
            "9 cm": "This value would give a surface area of 81π cm², not 36π cm².",
            "12 cm": "This value would give a surface area of 144π cm², not 36π cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe17',
        type: "mcq",
        question: "If the surface area of a sphere is 16π square units, what is its radius?",
        options: ["1 unit", "2 units", "4 units", "8 units"],
        correctAnswer: "2 units",
        explanation: "Using the formula: Surface area = 4πr² = 16π, which gives r² = 4, so r = 2 units. This calculation directly applies the surface area formula to find the radius. 🧮",
        wrongAnswerExplanations: {
            "1 unit": "This value would give a surface area of 4π square units, not 16π.",
            "4 units": "This value would give a surface area of 64π square units, not 16π.",
            "8 units": "This value would give a surface area of 256π square units, not 16π."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t2_qe18',
        type: "mcq",
        question: "A basketball has a circumference of 75 cm. What is its approximate surface area? (Use π = 3)",
        options: ["450 cm²", "900 cm²", "1800 cm²", "3600 cm²"],
        correctAnswer: "1800 cm²",
        explanation: "First, find the radius: Circumference = 2πr, so 75 = 2 × 3 × r, giving r = 75/6 = 12.5 cm. Then, surface area = 4πr² = 4 × 3 × (12.5)² = 12 × 156.25 = 1875 cm², closest to 1800 cm². This shows how to calculate surface area from circumference. 🏀",
        wrongAnswerExplanations: {
            "450 cm²": "This significantly underestimates the surface area for the given circumference.",
            "900 cm²": "This underestimates the surface area for the given circumference.",
            "3600 cm²": "This overestimates the surface area for the given circumference."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t2_qe19',
        type: "mcq",
        question: "If a sphere has a surface area of 144π cm², what is the length of its diameter?",
        options: ["6 cm", "12 cm", "18 cm", "24 cm"],
        correctAnswer: "12 cm",
        explanation: "Surface area = 4πr² = 144π, so r² = 36, giving r = 6 cm. The diameter = 2r = 2 × 6 = 12 cm. This calculation relates the surface area to the diameter through the radius. 📊",
        wrongAnswerExplanations: {
            "6 cm": "This is the radius, not the diameter of the sphere.",
            "18 cm": "This value is 3r, not 2r, and doesn't represent the diameter.",
            "24 cm": "This value is 4r, not 2r, and would result in a much larger sphere."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t2_qe20',
        type: "mcq",
        question: "A spherical hot air balloon expands from a radius of 3 m to a radius of 6 m as it heats up. By what factor does its surface area increase?",
        options: ["2 times", "3 times", "4 times", "9 times"],
        correctAnswer: "4 times",
        explanation: "Initial surface area = 4π × 3² = 36π m². Final surface area = 4π × 6² = 144π m². The ratio is 144π/36π = 4. This matches the general rule that surface area increases as the square of the radius ratio: (6/3)² = 2² = 4. 🎈",
        wrongAnswerExplanations: {
            "2 times": "This equals the ratio of radii (6/3), but surface area scales as the square of radius.",
            "3 times": "This doesn't correspond to any standard relationship between the spheres.",
            "9 times": "This would be the scaling if we had tripled (not doubled) the radius."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
];
