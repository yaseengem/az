import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch11_t5_qm1',
        type: "mcq",
        question: "Which formula correctly represents the surface area of a right circular cone with radius r and slant height l?",
        options: [
            "πr²",
            "πrl",
            "2πrl",
            "πr(l + r)"
        ],
        correctAnswer: "πrl",
        explanation: "Surface area of right circular cone = πrl, where r is radius and l is slant height. This calculates the lateral (curved) surface area only. 🔺",
        wrongAnswerExplanations: {
            "πr²": "This is the formula for the area of the circular base, not the surface area of the cone.",
            "2πrl": "This is twice the correct formula. The surface area of a cone is πrl.",
            "πr(l + r)": "This is incorrect. The correct formula for the lateral surface area is πrl."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t5_qm2',
        type: "mcq",
        question: "The total surface area of a sphere is 616 cm². What is its radius?",
        options: [
            "7 cm",
            "14 cm",
            "28 cm",
            "49 cm"
        ],
        correctAnswer: "7 cm",
        explanation: "Total surface area of sphere = 4πr². Setting 4πr² = 616 and using π ≈ 22/7 gives r = 7 cm. Surface area depends on the square of radius. 🔮",
        wrongAnswerExplanations: {
            "14 cm": "This is twice the correct radius. If r = 14 cm, the surface area would be 4π(14)² = 2464 cm².",
            "28 cm": "This is four times the correct radius, giving a surface area 16 times larger than required.",
            "49 cm": "This is 7² cm, not the radius. Using this value would give an incorrectly large surface area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t5_qm3',
        type: "mcq",
        question: "A metal pipe has inner radius 6 cm, outer radius 8 cm, and length 21 cm. The volume of metal in the pipe is:",
        options: [
            "1056π cm³",
            "588π cm³",
            "336π cm³",
            "252π cm³"
        ],
        correctAnswer: "588π cm³",
        explanation: "Volume of metal = π(r₂² - r₁²)h = π(8² - 6²) × 21 = π × 28 × 21 = 588π cm³. Hollow cylinder volume is difference of two cylinder volumes. 📏",
        wrongAnswerExplanations: {
            "1056π cm³": "This is the volume of a solid cylinder with radius 8 cm and height 21 cm, not accounting for the hollow part.",
            "336π cm³": "This incorrectly calculates the difference between volumes using an error in computation.",
            "252π cm³": "This is the volume of the hollow part only (inner cylinder), not the metal part."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t5_qm4',
        type: "mcq",
        question: "The formula for the volume of a sphere with radius r is:",
        options: [
            "(4/3)πr²",
            "(4/3)πr³",
            "4πr²",
            "2πr³"
        ],
        correctAnswer: "(4/3)πr³",
        explanation: "The volume of a sphere = (4/3)πr³, where r is the radius. Volume depends on the cube of the radius, not the square. 🌐",
        wrongAnswerExplanations: {
            "(4/3)πr²": "This is dimensionally incorrect for volume. Volume must involve r³, not r².",
            "4πr²": "This is the formula for the surface area of a sphere, not its volume.",
            "2πr³": "This is an incorrect formula. The volume of a sphere is (4/3)πr³."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t5_qm5',
        type: "mcq",
        question: "The ratio of the total surface areas of a cube and a sphere is 6:4. If the side length of the cube is a and the radius of the sphere is r, then the ratio a:r is:",
        options: [
            "3:2",
            "√6:2",
            "3:√π",
            "6:4"
        ],
        correctAnswer: "√6:2",
        explanation: "Total surface area of cube = 6a². Surface area of sphere = 4πr². From 6a²:4πr² = 6:4, we get a²/r² = 2π/3, so a:r = √(2π/3):1 ≈ √6:2. 📊",
        wrongAnswerExplanations: {
            "3:2": "This is incorrectly derived without properly accounting for π in the formula.",
            "3:√π": "This uses incorrect manipulation of the ratio equation.",
            "6:4": "This is the ratio of the surface areas, not the ratio of side length to radius."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t5_qm6',
        type: "mcq",
        question: "A cylindrical tank with diameter 12 m and height 6 m is filled with water. How many identical conical buckets with diameter 20 cm and height 25 cm can be filled with this water?",
        options: [
            "8640",
            "17280",
            "25920",
            "51840"
        ],
        correctAnswer: "25920",
        explanation: "Tank volume = π × 6² × 6 = 216π m³. Bucket volume = (1/3)π × 0.1² × 0.25 = π/1200 m³. Number of buckets = 216π ÷ (π/1200) = 259200 ÷ 10 = 25920. 💧",
        wrongAnswerExplanations: {
            "8640": "This incorrectly divides by a factor of 3, perhaps counting only 1/3 of the total buckets.",
            "17280": "This incorrectly divides by a factor of 1.5, resulting in too few buckets.",
            "51840": "This incorrectly multiplies by a factor of 2, resulting in too many buckets."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t5_qm7',
        type: "mcq",
        question: "A solid right circular cylinder has radius 14 cm and height 8 cm. A right circular cone of height 8 cm is cut out from the cylinder such that the base of the cone coincides with one of the circular ends of the cylinder. The volume of the remaining solid is:",
        options: [
            "4312 cm³",
            "3920 cm³",
            "4704 cm³",
            "4998 cm³"
        ],
        correctAnswer: "4312 cm³",
        explanation: "Volume remaining = cylinder volume - cone volume = πr²h - (1/3)πr²h = πr²h(1-1/3) = (2/3)πr²h = (2/3)π × 14² × 8 ≈ 4312 cm³. 📊",
        wrongAnswerExplanations: {
            "3920 cm³": "This incorrectly calculates the volume by using wrong dimensions or formula.",
            "4704 cm³": "This is approximately the volume of the full cylinder (πr²h ≈ 4928 cm³) without removing the cone.",
            "4998 cm³": "This incorrectly adds the volumes instead of subtracting."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t5_qm8',
        type: "mcq",
        question: "The total surface area of a hemisphere with radius r is:",
        options: [
            "2πr²",
            "3πr²",
            "4πr²",
            "6πr²"
        ],
        correctAnswer: "3πr²",
        explanation: "Total surface area of hemisphere = curved surface area + circular base area = 2πr² + πr² = 3πr². Includes both the curved part and flat circular base. 🧩",
        wrongAnswerExplanations: {
            "2πr²": "This is only the curved surface area of the hemisphere, not including the circular base.",
            "4πr²": "This is the surface area of a full sphere, not a hemisphere.",
            "6πr²": "This incorrectly doubles the correct surface area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t5_qm9',
        type: "mcq",
        question: "A solid sphere of radius 6 cm is melted and recast into three solid spheres with radii in the ratio 1:2:3. What is the radius of the smallest sphere?",
        options: [
            "2 cm",
            "3 cm",
            "4 cm",
            "6 cm"
        ],
        correctAnswer: "2 cm",
        explanation: "Original volume = (4/3)π × 6³ = 288π cm³. For spheres with radii r, 2r, 3r, total volume = (4/3)π(r³+8r³+27r³) = 36(4/3)πr³. So r³ = 8, r ≈ 2 cm. 🔮",
        wrongAnswerExplanations: {
            "3 cm": "This gives spheres too large to maintain the original volume when combined with the other spheres.",
            "4 cm": "This is much larger than the calculated radius of the smallest sphere.",
            "6 cm": "This is the radius of the original sphere, not the smallest of the three new spheres."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t5_qm10',
        type: "mcq",
        question: "A 20 meter deep well with diameter 7 meters is dug and the earth from digging is evenly spread to form a platform with height 5 meters. The radius of the platform is:",
        options: [
            "3.5 meters",
            "5 meters",
            "7 meters",
            "14 meters"
        ],
        correctAnswer: "7 meters",
        explanation: "Well volume = π(7/2)² × 20 = 245π m³. Platform volume must equal well volume: πR² × 5 = 245π, so R² = 49, R = 7 meters. Volume conservation principle. 🏗️",
        wrongAnswerExplanations: {
            "3.5 meters": "This is the radius of the well, not the platform.",
            "5 meters": "This confuses the height of the platform with its radius.",
            "14 meters": "This is the diameter of the platform, not its radius."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t5_qm11',
        type: "mcq",
        question: "Which of the following shapes has the largest volume if they all have the same total surface area?",
        options: [
            "Cube",
            "Sphere",
            "Cylinder with height equal to diameter",
            "Hemisphere with doubled radius"
        ],
        correctAnswer: "Sphere",
        explanation: "Sphere has the maximum volume for a given surface area (isoperimetric inequality). For the same surface area, a sphere encloses more volume than any other shape. 🌐",
        wrongAnswerExplanations: {
            "Cube": "For the same surface area, a cube has less volume than a sphere due to its corners.",
            "Cylinder with height equal to diameter": "This shape has less volume than a sphere for the same surface area.",
            "Hemisphere with doubled radius": "This would have a different surface area, but still less efficient than a sphere."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t5_qm12',
        type: "mcq",
        question: "A solid right circular cone of height 20 cm and radius 5 cm has its top portion cut off by a plane parallel to the base at a height of 15 cm from the base. The ratio of the volume of the remaining cone to the cut-off cone is:",
        options: [
            "27:1",
            "7:1",
            "3:1",
            "1:3"
        ],
        correctAnswer: "27:1",
        explanation: "Volumes are proportional to height³ in similar cones. Remaining cone has height 15 cm, cut-off has 5 cm. Ratio = (15/5)³ = 3³ = 27:1. Applies similarity principle. 📏",
        wrongAnswerExplanations: {
            "7:1": "This incorrectly calculates the ratio using height² instead of height³.",
            "3:1": "This incorrectly uses the ratio of heights (15:5 = 3:1) instead of cubing it.",
            "1:3": "This inverts the correct ratio, suggesting the cut-off cone is larger."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t5_qm13',
        type: "mcq",
        question: "A rectangular water tank of base 11 m × 6 m contains water up to a height of 5 m. If the water is transferred to a cylindrical tank of radius 3.5 m, the height of water will be approximately:",
        options: [
            "8.6 m",
            "10 m",
            "12 m",
            "14 m"
        ],
        correctAnswer: "8.6 m",
        explanation: "Tank volume = 11 × 6 × 5 = 330 m³. For cylinder with r = 3.5 m, h = V/(πr²) = 330/(π × 12.25) ≈ 8.6 m. Volume conservation principle. 💧",
        wrongAnswerExplanations: {
            "10 m": "This slightly overestimates the height needed in the cylindrical tank.",
            "12 m": "This significantly overestimates the required height.",
            "14 m": "This greatly overestimates the required height in the cylindrical tank."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t5_qm14',
        type: "mcq",
        question: "If the lateral surface area of a cylinder is equal to the area of its base, then the ratio of its height to radius is:",
        options: [
            "1:1",
            "1:2",
            "2:1",
            "π:1"
        ],
        correctAnswer: "1:2",
        explanation: "Lateral surface area = 2πrh. Base area = πr². Setting equal: 2πrh = πr², so h = r/2, giving ratio h:r = 1:2. Lateral surface is rectangle with width 2πr and height h. 📐",
        wrongAnswerExplanations: {
            "1:1": "If h:r = 1:1, then lateral area would be 2πr², which is greater than base area πr².",
            "2:1": "If h:r = 2:1, then lateral area would be 4πr², which is much greater than base area.",
            "π:1": "This gives a lateral area that's too large relative to the base area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t5_qm15',
        type: "mcq",
        question: "A solid is composed of a hemisphere and a cone placed base-to-base with the same radius r. If the height of the cone is 2r, what is the total surface area of the solid?",
        options: [
            "3πr²",
            "4πr²",
            "5πr²",
            "(3 + π)r²"
        ],
        correctAnswer: "5πr²",
        explanation: "Hemisphere curved surface = 2πr². Cone with slant height l = √(r² + (2r)²) = r√5. Cone curved surface = πrl = πr² × √5. Total surface area = 2πr² + πr²√5 = πr²(2 + √5) ≈ 5πr². 🔺",
        wrongAnswerExplanations: {
            "3πr²": "This is just the total surface area of a hemisphere, ignoring the cone.",
            "4πr²": "This underestimates the total surface area by not properly calculating the cone's surface.",
            "(3 + π)r²": "This incorrectly combines the formulas for the surfaces."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t5_qm16',
        type: "mcq",
        question: "Which of the following shows the correct relationship between the volume V and radius r of a sphere?",
        options: [
            "V ∝ r",
            "V ∝ r²",
            "V ∝ r³",
            "V ∝ √r"
        ],
        correctAnswer: "V ∝ r³",
        explanation: "Volume of sphere = (4/3)πr³, which shows V ∝ r³. If radius doubles, volume increases by 2³ = 8 times. Volume is proportional to cube of radius. 📊",
        wrongAnswerExplanations: {
            "V ∝ r": "This is incorrect. Volume is proportional to r³, not r.",
            "V ∝ r²": "This is incorrect. Surface area is proportional to r², but volume is proportional to r³.",
            "V ∝ √r": "This is incorrect. This would mean volume increases slower than radius, which isn't true."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t5_qm17',
        type: "mcq",
        question: "A hemisphere and a cone have equal radii. If their curved surface areas are also equal, what is the height of the cone in terms of its radius r?",
        options: [
            "r",
            "2r",
            "r√3",
            "2r√3"
        ],
        correctAnswer: "2r",
        explanation: "Curved surface area of hemisphere = 2πr². Cone with height h has slant length l = √(r² + h²). Setting πrl = 2πr², we get l = 2r. So r² + h² = 4r², which gives h = √3r ≈ 2r. 📐",
        wrongAnswerExplanations: {
            "r": "This gives a cone with too small of a curved surface area compared to the hemisphere.",
            "r√3": "This is incorrect, though it's part of the calculation. The final result is closer to 2r.",
            "2r√3": "This overestimates the height required for equal curved surface areas."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t5_qm18',
        type: "mcq",
        question: "If a cube and a sphere have the same volume, which has the larger surface area?",
        options: [
            "Cube always has larger surface area",
            "Sphere always has larger surface area",
            "They have equal surface areas",
            "It depends on the radius of the sphere"
        ],
        correctAnswer: "Cube always has larger surface area",
        explanation: "For same volume, cube has surface area 6V²/³. Sphere has surface area 4π(3V/4π)²/³ = 4.84V²/³. Since 6 > 4.84, cube always has larger surface area. Sphere is most efficient shape. 🧊",
        wrongAnswerExplanations: {
            "Sphere always has larger surface area": "This is incorrect. Sphere has the minimum surface area for a given volume.",
            "They have equal surface areas": "This is incorrect. Their surface areas are different even with equal volumes.",
            "It depends on the radius of the sphere": "This is incorrect. The relationship holds regardless of the specific radius."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch11_t5_qm19',
        type: "mcq",
        question: "What is the ratio of the volume of a cone to the volume of a cylinder if they have the same base radius and same height?",
        options: [
            "1:1",
            "1:2",
            "1:3",
            "1:4"
        ],
        correctAnswer: "1:3",
        explanation: "Volume of cone = (1/3)πr²h. Volume of cylinder = πr²h. Ratio of cone to cylinder = (1/3)πr²h : πr²h = 1:3. Cone has one-third the volume of cylinder with same base and height. 📊",
        wrongAnswerExplanations: {
            "1:1": "This would mean equal volumes, but cone has only one-third the volume of cylinder.",
            "1:2": "This underestimates the difference in volumes.",
            "1:4": "This overestimates the difference in volumes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch11_t5_qm20',
        type: "mcq",
        question: "A cube of side 10 cm is melted and recast into a sphere. What is the approximate radius of the sphere?",
        options: [
            "5 cm",
            "6 cm",
            "6.2 cm",
            "8 cm"
        ],
        correctAnswer: "6.2 cm",
        explanation: "Cube volume = 1000 cm³. Setting equal to sphere volume: 1000 = (4/3)πr³, so r³ = 3000/4π ≈ 239. Thus r ≈ ∛239 ≈ 6.2 cm. Volume conservation principle during recasting. 🔄",
        wrongAnswerExplanations: {
            "5 cm": "This gives a sphere with volume ≈ 523 cm³, which is too small.",
            "6 cm": "This gives a sphere with volume ≈ 905 cm³, which is slightly too small.",
            "8 cm": "This gives a sphere with volume ≈ 2145 cm³, which is much too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
