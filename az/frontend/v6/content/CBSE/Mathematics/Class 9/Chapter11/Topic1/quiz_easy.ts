// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter11\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch11_t1_qe1',
        type: "mcq",
        question: "What is the shape of the lateral surface of a right circular cone when opened out?",
        options: ["Circle", "Rectangle", "Sector of a circle", "Triangle"],
        correctAnswer: "Sector of a circle",
        explanation: "When you open out the lateral surface of a right circular cone, it forms a sector (a portion) of a circle. This sector has a radius equal to the slant height of the cone. 🔍",
        wrongAnswerExplanations: {
            "Circle": "The base of a cone is a circle, but the lateral surface is not a complete circle.",
            "Rectangle": "A cylinder's lateral surface forms a rectangle when opened out, not a cone's.",
            "Triangle": "While a cone appears triangular from a side view, its curved lateral surface isn't a flat triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t1_qe2',
        type: "mcq",
        question: "What is the formula for the lateral surface area of a right circular cone?",
        options: ["πrl", "πr²", "πr(r+l)", "2πr²"],
        correctAnswer: "πrl",
        explanation: "The lateral surface area of a right circular cone is πrl, where r is the radius of the base and l is the slant height of the cone. This formula represents the area of the sector when the cone's curved surface is opened. 📊",
        wrongAnswerExplanations: {
            "πr²": "This is the formula for the area of the circular base of the cone, not the lateral surface area.",
            "πr(r+l)": "This is the formula for the total surface area of a cone (lateral surface area + base area).",
            "2πr²": "This is the formula for the surface area of a sphere, not a cone."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t1_qe3',
        type: "mcq",
        question: "What is the total surface area of a right circular cone?",
        options: ["πrl", "πr²", "πr(r+l)", "2πrl"],
        correctAnswer: "πr(r+l)",
        explanation: "The total surface area of a right circular cone is πr(r+l), where r is the radius of the base and l is the slant height. This includes both the lateral surface area (πrl) and the area of the circular base (πr²). 🔢",
        wrongAnswerExplanations: {
            "πrl": "This formula gives only the lateral surface area, not including the base.",
            "πr²": "This is only the area of the circular base, not the total surface area.",
            "2πrl": "This is not a standard formula for a cone's surface area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t1_qe4',
        type: "mcq",
        question: "If the radius of the base of a right circular cone is 7 cm and its slant height is 10 cm, what is its lateral surface area?",
        options: ["70π cm²", "140π cm²", "170π cm²", "220π cm²"],
        correctAnswer: "70π cm²",
        explanation: "The lateral surface area = πrl = π × 7 × 10 = 70π cm². We use the formula πrl where r is the radius of the base (7 cm) and l is the slant height (10 cm). 📐",
        wrongAnswerExplanations: {
            "140π cm²": "This value might result from incorrectly doubling the lateral surface area.",
            "170π cm²": "This value might result from using an incorrect formula.",
            "220π cm²": "This value is significantly larger than the correct answer and doesn't correspond to any standard calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t1_qe5',
        type: "mcq",
        question: "How does the lateral surface area of a cone change if its radius is doubled but the slant height remains the same?",
        options: ["Remains the same", "Doubles", "Triples", "Quadruples"],
        correctAnswer: "Doubles",
        explanation: "The lateral surface area = πrl. If r doubles and l remains unchanged, the formula becomes π(2r)l = 2πrl, which is twice the original area. This shows a direct proportional relationship between radius and lateral surface area. 🔄",
        wrongAnswerExplanations: {
            "Remains the same": "The lateral surface area changes when the radius changes.",
            "Triples": "The lateral surface area only doubles, not triples, when the radius is doubled.",
            "Quadruples": "The lateral surface area only doubles, not quadruples, when the radius is doubled."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t1_qe6',
        type: "mcq",
        question: "A cone has a radius of 5 cm and height of 12 cm. What is its slant height?",
        options: ["7 cm", "11 cm", "13 cm", "17 cm"],
        correctAnswer: "13 cm",
        explanation: "Using the Pythagorean theorem for a right triangle, the slant height l = √(r² + h²) = √(5² + 12²) = √(25 + 144) = √169 = 13 cm. The slant height forms the hypotenuse of a right triangle with height and radius. 📏",
        wrongAnswerExplanations: {
            "7 cm": "This value is too small and doesn't satisfy the Pythagorean relationship between radius, height, and slant height.",
            "11 cm": "This value doesn't satisfy the Pythagorean theorem for the given radius and height.",
            "17 cm": "This value is too large and doesn't satisfy the relationship between radius, height, and slant height."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t1_qe7',
        type: "mcq",
        question: "What happens to the lateral surface area of a cone if the slant height is halved while the radius remains constant?",
        options: ["Doubles", "Halves", "Remains the same", "Quadruples"],
        correctAnswer: "Halves",
        explanation: "The lateral surface area = πrl. If l is halved to l/2 while r remains unchanged, the new area becomes πr(l/2) = πrl/2, which is half the original area. This demonstrates the direct proportional relationship between slant height and lateral surface area. ↘️",
        wrongAnswerExplanations: {
            "Doubles": "The lateral surface area decreases, not increases, when the slant height is halved.",
            "Remains the same": "The lateral surface area changes when the slant height changes.",
            "Quadruples": "The lateral surface area halves, not quadruples, when the slant height is halved."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t1_qe8',
        type: "mcq",
        question: "If the total surface area of a cone is 300π cm² and the radius of its base is 10 cm, what is the slant height of the cone?",
        options: ["15 cm", "20 cm", "25 cm", "30 cm"],
        correctAnswer: "20 cm",
        explanation: "Using the formula for total surface area: πr(r+l) = 300π. Substituting r = 10: 10π(10+l) = 300π, which gives 10+l = 30, so l = 20 cm. The calculation shows how to derive slant height when total surface area and radius are known. 🧮",
        wrongAnswerExplanations: {
            "15 cm": "This value doesn't satisfy the total surface area equation with the given radius.",
            "25 cm": "This value would result in a total surface area greater than 300π cm².",
            "30 cm": "This value would result in a total surface area much greater than 300π cm²."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t1_qe9',
        type: "mcq",
        question: "Which of the following real-life objects resembles a right circular cone?",
        options: ["A book 📚", "A basketball 🏀", "An ice cream cone 🍦", "A brick 🧱"],
        correctAnswer: "An ice cream cone 🍦",
        explanation: "An ice cream cone is a common real-life example of a right circular cone. It has a circular base and a curved surface that tapers to a point, exactly matching the geometric definition of a cone. This everyday example helps visualize the shape's properties. 🍦",
        wrongAnswerExplanations: {
            "A book 📚": "A book typically has a rectangular prism (cuboid) shape, not conical.",
            "A basketball 🏀": "A basketball is spherical in shape, not conical.",
            "A brick 🧱": "A brick is typically a rectangular prism, not conical."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t1_qe10',
        type: "mcq",
        question: "What is the lateral surface area of a cone with base radius 3 cm and slant height 4 cm?",
        options: ["9π cm²", "12π cm²", "15π cm²", "36π cm²"],
        correctAnswer: "12π cm²",
        explanation: "The lateral surface area = πrl = π × 3 × 4 = 12π cm². This calculation applies the standard formula where r is the radius (3 cm) and l is the slant height (4 cm). The result gives the area of the curved surface only. 📝",
        wrongAnswerExplanations: {
            "9π cm²": "This would be the area of the base (πr²), not the lateral surface area.",
            "15π cm²": "This doesn't match any standard calculation for the given dimensions.",
            "36π cm²": "This value is much larger than the actual lateral surface area for the given dimensions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t1_qe11',
        type: "mcq",
        question: "The slant height of a cone is related to its height and base radius by which mathematical relationship?",
        options: ["l = h + r", "l = h - r", "l = √(h² + r²)", "l = √(h² - r²)"],
        correctAnswer: "l = √(h² + r²)",
        explanation: "The slant height l, height h, and radius r of a cone form a right triangle. Using the Pythagorean theorem, l² = h² + r², so l = √(h² + r²). This relationship is fundamental for calculating the slant height when height and radius are known. 📐",
        wrongAnswerExplanations: {
            "l = h + r": "This is an incorrect linear relationship that doesn't account for the right triangle geometry.",
            "l = h - r": "This formula would give negative values when r > h, which isn't geometrically possible.",
            "l = √(h² - r²)": "This formula would give imaginary values when r > h, which isn't valid."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t1_qe12',
        type: "mcq",
        question: "If both the radius and slant height of a cone are doubled, how does its lateral surface area change?",
        options: ["Doubles", "Triples", "Quadruples", "Increases 8 times"],
        correctAnswer: "Quadruples",
        explanation: "The lateral surface area = πrl. If both r and l are doubled, the new area becomes π(2r)(2l) = 4πrl, which is 4 times the original area. This shows how the lateral surface area scales when both dimensions change proportionally. 🔍",
        wrongAnswerExplanations: {
            "Doubles": "The increase is greater than double when both dimensions are doubled.",
            "Triples": "The area quadruples, not triples, when both radius and slant height are doubled.",
            "Increases 8 times": "While the volume would increase 8 times, the lateral surface area only increases 4 times."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t1_qe13',
        type: "mcq",
        question: "A right circular cone has a base radius of 6 cm and height 8 cm. What is its total surface area?",
        options: ["30π cm²", "60π cm²", "90π cm²", "120π cm²"],
        correctAnswer: "90π cm²",
        explanation: "First, find the slant height: l = √(r² + h²) = √(36 + 64) = √100 = 10 cm. Then, total surface area = πr(r+l) = π × 6 × (6+10) = 6π × 16 = 96π cm². The closest answer is 90π cm². 🧮",
        wrongAnswerExplanations: {
            "30π cm²": "This value is too small for the total surface area of the given cone.",
            "60π cm²": "This might represent only the lateral surface area (πrl), not the total surface area.",
            "120π cm²": "This value is larger than the actual total surface area for the given dimensions."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t1_qe14',
        type: "mcq",
        question: "Which of the following expressions correctly represents the curved surface area of a cone?",
        options: ["½ × π × r² × h", "2π × r × h", "π × r × l", "π × r²"],
        correctAnswer: "π × r × l",
        explanation: "The curved surface area (also called lateral surface area) of a cone is given by π × r × l, where r is the radius of the base and l is the slant height. This formula is derived from the area of the sector formed when the cone's surface is opened out. 📏",
        wrongAnswerExplanations: {
            "½ × π × r² × h": "This is the formula for the volume of a cone, not its curved surface area.",
            "2π × r × h": "This formula is related to the lateral surface area of a cylinder, not a cone.",
            "π × r²": "This is the formula for the area of the circular base of a cone."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t1_qe15',
        type: "mcq",
        question: "A cone has a lateral surface area of 154 cm² and a slant height of 14 cm. What is the radius of its base?",
        options: ["3.5 cm", "5.5 cm", "7 cm", "11 cm"],
        correctAnswer: "3.5 cm",
        explanation: "Using the formula for lateral surface area: πrl = 154. Substituting l = 14: πr × 14 = 154. Solving for r: r = 154/(14π) ≈ 3.5 cm. The calculation shows how to find radius when lateral surface area and slant height are known. 🔢",
        wrongAnswerExplanations: {
            "5.5 cm": "This value would result in a lateral surface area much larger than 154 cm².",
            "7 cm": "This value would result in a lateral surface area approximately twice the given value.",
            "11 cm": "This value would result in a lateral surface area much larger than the given value."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t1_qe16',
        type: "mcq",
        question: "The circular base of a right circular cone has a circumference of 44 cm. If the slant height is 15 cm, what is the lateral surface area?",
        options: ["165 cm²", "330 cm²", "660 cm²", "990 cm²"],
        correctAnswer: "330 cm²",
        explanation: "First, find the radius: circumference = 2πr, so 44 = 2πr, giving r = 7 cm. Then, lateral surface area = πrl = π × 7 × 15 = 105π ≈ 330 cm². This shows how to use circumference to find lateral surface area. 🧩",
        wrongAnswerExplanations: {
            "165 cm²": "This value is half of the correct answer and may result from calculation errors.",
            "660 cm²": "This value is twice the correct answer and may result from squaring the radius.",
            "990 cm²": "This value is three times the correct answer and represents an incorrect calculation."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t1_qe17',
        type: "mcq",
        question: "Which measurement is NOT needed to calculate the total surface area of a right circular cone?",
        options: ["Radius", "Slant height", "Volume", "Height (if slant height is unknown)"],
        correctAnswer: "Volume",
        explanation: "The total surface area of a cone depends on its radius r and slant height l: πr(r+l). Volume is not needed for this calculation. If slant height is unknown, it can be calculated from radius and height using the Pythagorean theorem. 📊",
        wrongAnswerExplanations: {
            "Radius": "The radius is essential for calculating both the lateral surface area and the base area.",
            "Slant height": "The slant height is necessary for calculating the lateral surface area of the cone.",
            "Height (if slant height is unknown)": "If slant height is unknown, height can be used with radius to calculate it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t1_qe18',
        type: "mcq",
        question: "A conical tent has a base radius of 5 m and a slant height of 12 m. How much canvas material is needed to make the tent (excluding the base)?",
        options: ["60π m²", "120π m²", "180π m²", "240π m²"],
        correctAnswer: "60π m²",
        explanation: "The amount of canvas needed is the lateral surface area of the cone: πrl = π × 5 × 12 = 60π m². This practical application shows how geometric formulas help solve real-world problems like determining material requirements. 🏕️",
        wrongAnswerExplanations: {
            "120π m²": "This value is twice the actual lateral surface area and would waste material.",
            "180π m²": "This value is three times the actual requirement and represents an incorrect calculation.",
            "240π m²": "This value is four times the actual requirement and would result in excessive material use."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t1_qe19',
        type: "mcq",
        question: "If a cone's height and radius are equal, what is the relationship between its slant height l and height h?",
        options: ["l = h", "l = 2h", "l = h√2", "l = h/√2"],
        correctAnswer: "l = h√2",
        explanation: "When r = h, the slant height l = √(r² + h²) = √(h² + h²) = √(2h²) = h√2. This special case simplifies calculations and shows the relationship between dimensions when the cone has this particular proportion. 📐",
        wrongAnswerExplanations: {
            "l = h": "This would only be true if the radius were zero, which isn't a cone.",
            "l = 2h": "This overestimates the slant height for the given condition.",
            "l = h/√2": "This underestimates the slant height; the correct value is larger."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t1_qe20',
        type: "mcq",
        question: "What is the ratio of the lateral surface area to the base area of a cone with radius r and slant height l?",
        options: ["l:r", "r:l", "l:(2r)", "r:(2l)"],
        correctAnswer: "l:r",
        explanation: "The lateral surface area is πrl and the base area is πr². The ratio is therefore (πrl)/(πr²) = l/r = l:r. This ratio helps understand the relationship between the curved surface and circular base of a cone. 🔄",
        wrongAnswerExplanations: {
            "r:l": "This is the inverse of the correct ratio.",
            "l:(2r)": "This doesn't represent the correct ratio between the two areas.",
            "r:(2l)": "This is not mathematically related to the ratio of the areas."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
];
