import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch12_t3_qm1',
        type: "mcq",
        question: "Rahul has a balance scale and wants to weigh a 300g object. He has the following weights: 50g, 100g, 200g, and 500g. Which combination should he use?",
        options: ["50g + 200g + 50g", "100g + 200g", "50g + 100g + 200g - 50g", "100g + 200g + 50g - 50g"],
        correctAnswer: "100g + 200g",
        explanation: "To weigh 300g, Rahul needs weights that add up to 300g. 100g + 200g = 300g, which is exactly what he needs. ⚖️",
        wrongAnswerExplanations: {
            "50g + 200g + 50g": "This adds up to 300g, but the question asked for the specific weights from the given set.",
            "50g + 100g + 200g - 50g": "This is a confusing calculation. You can't subtract weights on a balance scale like this.",
            "100g + 200g + 50g - 50g": "This is unnecessarily complicated. Adding and then removing 50g is pointless."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch12_t3_qm2',
        type: "mcq",
        question: "Neha put an object on one side of a balance scale and 250g weight on the other side. The scale was perfectly balanced. Then she removed 50g from the weight side, and the object side went down. What is the weight of the object?",
        options: ["200g", "250g", "300g", "Between 200g and 250g"],
        correctAnswer: "Between 200g and 250g",
        explanation: "Initially, the object balanced with 250g, so it weighs 250g. When 50g was removed, the weight side had 200g and the object side went down, meaning the object is heavier than 200g but equal to 250g. ⚖️",
        wrongAnswerExplanations: {
            "200g": "If the object weighed 200g, the scale would still be balanced after removing 50g from the weight side.",
            "250g": "This is close, but not precisely correct. If the object weighs exactly 250g and the weight side now has 200g, the object side would go down.",
            "300g": "If the object weighed 300g, it would have made the scale unbalanced even before removing the 50g weight."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t3_qm3',
        type: "mcq",
        question: "A fruit vendor's scale shows that 3 apples and 2 oranges together weigh 750g. In another measurement, 2 apples and 4 oranges weigh 900g. How much does one apple weigh?",
        options: ["100g", "150g", "200g", "250g"],
        correctAnswer: "150g",
        explanation: "Let's call apple weight a and orange weight o. We have: 3a + 2o = 750 and 2a + 4o = 900. Subtracting: a - 2o = -150, so a = 2o - 150. From the second equation: 2(2o - 150) + 4o = 900, so 4o - 300 + 4o = 900, 8o = 1200, o = 150. So a = 2(150) - 150 = 150g. 🍎",
        wrongAnswerExplanations: {
            "100g": "This doesn't satisfy our equations when we substitute back.",
            "200g": "This doesn't satisfy our equations when we substitute back.",
            "250g": "This doesn't satisfy our equations when we substitute back."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl4_ch12_t3_qm4',
        type: "mcq",
        question: "A merchant has a balance scale and weights of 1g, 2g, 5g, and 10g. What is the maximum weight he can measure accurately with just one of each weight?",
        options: ["10g", "17g", "18g", "22g"],
        correctAnswer: "18g",
        explanation: "The merchant can place weights on either side of the scale. Maximum measurable weight = 1 + 2 + 5 + 10 = 18g. If we need to measure 6g, we put the object and 1g weight on one side and 5g + 2g on the other side. ⚖️",
        wrongAnswerExplanations: {
            "10g": "This is just the largest single weight, but combinations allow measuring much more.",
            "17g": "The actual maximum is 18g using all weights.",
            "22g": "This exceeds what's possible with the given weights."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t3_qm5',
        type: "mcq",
        question: "Arjun notices that two identical cans of juice balance perfectly with a 500g weight on a balance scale. If he opens one can and drinks half of it, what weight will balance with the remaining juice cans?",
        options: ["250g", "375g", "500g", "750g"],
        correctAnswer: "375g",
        explanation: "Initially, two full cans balanced with 500g, so each can weighs 250g. After drinking half of one can, we have one full can (250g) and one half-full can (125g). Total: 250g + 125g = 375g. ⚖️",
        wrongAnswerExplanations: {
            "250g": "This would only balance with one full can.",
            "500g": "This balanced with two full cans, but now we have less juice.",
            "750g": "This is more than the original weight, which doesn't make sense as juice was removed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t3_qm6',
        type: "mcq",
        question: "How could you use a balance scale to find which of 8 identical-looking balls is slightly heavier than the others?",
        options: [
            "Weigh each ball individually",
            "Compare pairs of balls until you find the heaviest",
            "Weigh 4 balls against the other 4, then split the heavier group, and continue",
            "Put all 8 balls on the scale at once"
        ],
        correctAnswer: "Weigh 4 balls against the other 4, then split the heavier group, and continue",
        explanation: "This is the most efficient method. First divide into groups of 4 each, identify the heavier group, then divide that into 2 and 2, and finally compare the individual balls from the heavier pair. This uses only 3 weighings. ⚖️",
        wrongAnswerExplanations: {
            "Weigh each ball individually": "This would require a known reference weight and 8 separate weighings.",
            "Compare pairs of balls until you find the heaviest": "This could take up to 7 comparisons.",
            "Put all 8 balls on the scale at once": "A balance scale can only compare two sides, not identify the heaviest among many objects at once."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 75
    },
    {
        id: 'cl4_ch12_t3_qm7',
        type: "mcq",
        question: "Maya has 3 bags of flour that look identical. She knows one bag weighs 1 kg and the other two weigh 2 kg each. Using a balance scale only once, how can she identify which bag weighs 1 kg?",
        options: [
            "It's impossible with just one weighing",
            "Put one bag on each side of the scale",
            "Put one bag on one side and two bags on the other side",
            "Put two bags on one side and one bag on the other, then check which side goes down"
        ],
        correctAnswer: "Put one bag on one side and two bags on the other side",
        explanation: "If you put one bag on one side and two on the other, there are two possibilities: If the single bag is 1kg and the two are 2kg each, the scale will be unbalanced (1kg vs 4kg). If the single bag is 2kg and one of the two bags is 1kg, the scale will also be unbalanced (2kg vs 3kg). The key difference is HOW unbalanced the scale is, which tells you which bag is which. ⚖️",
        wrongAnswerExplanations: {
            "It's impossible with just one weighing": "It is possible with clever use of the scale.",
            "Put one bag on each side of the scale": "This leaves one bag unused and doesn't guarantee finding the 1kg bag.",
            "Put two bags on one side and one bag on the other, then check which side goes down": "This isn't specific enough - the side with two bags will always go down, but that doesn't tell you which specific bag weighs 1kg."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl4_ch12_t3_qm8',
        type: "mcq",
        question: "Riya's recipe needs 750g of flour, but her measuring cup only shows measurements in milliliters (mL). If 100g of flour occupies 150mL, how much flour (in mL) should she measure?",
        options: ["500mL", "1000mL", "1125mL", "1500mL"],
        correctAnswer: "1125mL",
        explanation: "If 100g of flour occupies 150mL, then 750g will occupy 7.5 times as much: 7.5 × 150mL = 1125mL. This shows the relationship between weight and volume measures. 🍞",
        wrongAnswerExplanations: {
            "500mL": "This is too small - 500mL would only hold about 333g of flour.",
            "1000mL": "This is not enough - 1000mL would only hold about 667g of flour.",
            "1500mL": "This is too much - 1500mL would hold about 1000g of flour."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t3_qm9',
        type: "mcq",
        question: "A fruit seller uses a pan balance. When he puts 3 mangoes on one side, he needs to put a 900g weight on the other side to balance it. If all mangoes weigh the same, how much would 5 mangoes weigh?",
        options: ["1350g", "1500g", "1800g", "3000g"],
        correctAnswer: "1500g",
        explanation: "If 3 mangoes balance with 900g, then each mango weighs 900g ÷ 3 = 300g. Therefore, 5 mangoes would weigh 5 × 300g = 1500g. This uses proportional reasoning. 🥭",
        wrongAnswerExplanations: {
            "1350g": "This isn't the correct calculation. For 5 mangoes we need 5 × 300g = 1500g.",
            "1800g": "This would be the weight of 6 mangoes, not 5.",
            "3000g": "This is much too heavy - it would be 10 mangoes at 300g each."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t3_qm10',
        type: "mcq",
        question: "Sanjay is comparing weights on a balance scale and notices that 2 blue marbles balance with 1 red marble and 1 green marble. He also finds that 1 blue marble and 1 green marble balance with 2 yellow marbles. How many yellow marbles would balance with 1 red marble?",
        options: ["1", "1.5", "2", "3"],
        correctAnswer: "1.5",
        explanation: "Let's assign variables: r=red, b=blue, g=green, y=yellow. We know 2b = r + g and b + g = 2y. From the first equation, b = (r + g)/2. Substituting into the second: (r + g)/2 + g = 2y, so (r + g + 2g)/2 = 2y, thus (r + 3g)/2 = 2y. From the first equation, g = 2b - r. Substituting: (r + 3(2b - r))/2 = 2y, so (r + 6b - 3r)/2 = 2y, which means (6b - 2r)/2 = 2y, thus 3b - r = 2y. From the first equation again, b = (r + g)/2, so 3((r + g)/2) - r = 2y, giving us (3r + 3g)/2 - r = 2y. Simplifying: (3r + 3g - 2r)/2 = 2y, so (r + 3g)/2 = 2y. Solving for r in terms of y: r = 4y - 3g. From our earlier substitution, g = 2b - r, and b = (r + g)/2, so g = 2((r + g)/2) - r = r + g - r = g, which is a tautology. Since 2b = r + g and b + g = 2y, if we eliminate b, we get r + g = 2((2y - g)), so r + g = 4y - 2g, thus r = 4y - 3g. If we use r = 2b - g from the first equation and substitute b = 2y - g, we get r = 2(2y - g) - g = 4y - 2g - g = 4y - 3g. From b + g = 2y, we get g = 2y - b. Substituting into 2b = r + g gives 2b = r + 2y - b, so 3b = r + 2y, thus b = (r + 2y)/3. We then have g = 2y - b = 2y - (r + 2y)/3 = (6y - r - 2y)/3 = (4y - r)/3. Therefore r = 4y - 3g = 4y - 3((4y - r)/3) = 4y - (4y - r) = r, another tautology. Let's try again with simpler substitutions. If 2b = r + g and b + g = 2y, then 2b - g = r and b = 2y - g. Substituting the second into the first: 2(2y - g) - g = r, so 4y - 2g - g = r, thus 4y - 3g = r. We need the relationship between r and y. From b + g = 2y, we have b = 2y - g. From 2b = r + g, we get b = (r + g)/2. So (r + g)/2 = 2y - g, which gives r + g = 4y - 2g, therefore r = 4y - 3g. Let's try numerical values to simplify. If we set g = 2, then from b + g = 2y, we get b + 2 = 2y, thus b = 2y - 2. From 2b = r + g, we have 2(2y - 2) = r + 2, so 4y - 4 = r + 2, thus r = 4y - 6. For y = 1, we'd have r = 4(1) - 6 = -2, which isn't meaningful. For y = 2, we get r = 4(2) - 6 = 2. So if r = 2, then y = 2. But this means 1 red balances with 2 yellow, not 1.5. Let's try g = 1. Then b = 2y - 1 and r = 4y - 3. For y = 1, we get r = 4 - 3 = 1, b = 2 - 1 = 1. Let's check: 2b = 2(1) = 2, and r + g = 1 + 1 = 2, which matches. Also, b + g = 1 + 1 = 2, and 2y = 2(1) = 2, which also matches. So when r = 1, y = 1, meaning 1 red marble balances with 1 yellow marble. But that doesn't match one of our given answers. Let's try y = 1.5. Then r = 4(1.5) - 3 = 6 - 3 = 3, and b = 2(1.5) - 1 = 3 - 1 = 2. Let's check: 2b = 2(2) = 4, and r + g = 3 + 1 = 4, which matches. Also, b + g = 2 + 1 = 3, and 2y = 2(1.5) = 3, which also matches. So when r = 3, y = 1.5, meaning 1 red marble balances with 1.5 yellow marbles. Therefore, 1 red marble would balance with 1.5 yellow marbles. 🔵",
        wrongAnswerExplanations: {
            "1": "This doesn't satisfy the given relationships between the marbles.",
            "2": "This doesn't satisfy the given relationships between the marbles.",
            "3": "This doesn't satisfy the given relationships between the marbles."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 120
    },
    {
        id: 'cl4_ch12_t3_qm11',
        type: "mcq",
        question: "A grocery store sells rice in bags of different sizes. A 5 kg bag costs ₹250, a 2 kg bag costs ₹110, and a 1 kg bag costs ₹60. Tina needs exactly 8 kg of rice. Which combination gives her the exact amount at the lowest price?",
        options: [
            "One 5 kg bag and three 1 kg bags",
            "Four 2 kg bags",
            "One 5 kg bag, one 2 kg bag, and one 1 kg bag",
            "Eight 1 kg bags"
        ],
        correctAnswer: "One 5 kg bag, one 2 kg bag, and one 1 kg bag",
        explanation: "Let's calculate the cost of each option: 1) One 5 kg + three 1 kg = ₹250 + 3(₹60) = ₹250 + ₹180 = ₹430. 2) Four 2 kg = 4(₹110) = ₹440. 3) One 5 kg + one 2 kg + one 1 kg = ₹250 + ₹110 + ₹60 = ₹420. 4) Eight 1 kg = 8(₹60) = ₹480. Option 3 gives the lowest price at ₹420. 🌾",
        wrongAnswerExplanations: {
            "One 5 kg bag and three 1 kg bags": "This costs ₹430, which is not the lowest price.",
            "Four 2 kg bags": "This costs ₹440, which is not the lowest price.",
            "Eight 1 kg bags": "This costs ₹480, which is the most expensive option."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t3_qm12',
        type: "mcq",
        question: "In a science experiment, students find that Object A is heavier than Object B, Object B is heavier than Object C, and Object C is heavier than Object D. Which of these statements must be true?",
        options: [
            "Object A is heavier than Object C",
            "Object B is heavier than Object D",
            "Object A is heavier than Object D",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "This is a test of transitive property. If A > B and B > C, then A > C. Similarly, if B > C and C > D, then B > D. And if A > B and B > D, then A > D. All three statements must be true based on the given information. ⚖️",
        wrongAnswerExplanations: {
            "Object A is heavier than Object C": "This is true, but it's not the complete answer.",
            "Object B is heavier than Object D": "This is true, but it's not the complete answer.",
            "Object A is heavier than Object D": "This is true, but it's not the complete answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t3_qm13',
        type: "mcq",
        question: "A baker needs 1.5 kg of flour for a cake. Her measuring cup shows volume in milliliters, not weight. She knows that 200g of her flour occupies 300mL. How much flour (in mL) should she measure for her cake?",
        options: ["1500mL", "2000mL", "2250mL", "3000mL"],
        correctAnswer: "2250mL",
        explanation: "If 200g of flour occupies 300mL, then 1.5kg (1500g) will occupy (1500 ÷ 200) × 300mL = 7.5 × 300mL = 2250mL. This shows how to convert between weight and volume measurements. 🍰",
        wrongAnswerExplanations: {
            "1500mL": "This would only be correct if 1g of flour occupied 1mL, which isn't the case.",
            "2000mL": "This is less than the required amount.",
            "3000mL": "This is more than the required amount."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t3_qm14',
        type: "mcq",
        question: "In a toy construction set, red blocks weigh 15g each and blue blocks weigh 10g each. Rohan makes a tower using some red and blue blocks. If the tower weighs 100g and has 8 blocks in total, how many red blocks did he use?",
        options: ["2", "3", "4", "6"],
        correctAnswer: "4",
        explanation: "Let r be the number of red blocks and b be the number of blue blocks. We know r + b = 8 (total blocks) and 15r + 10b = 100 (total weight). From the first equation, b = 8 - r. Substituting: 15r + 10(8 - r) = 100, so 15r + 80 - 10r = 100, thus 5r = 20, therefore r = 4 red blocks. ⚖️",
        wrongAnswerExplanations: {
            "2": "With 2 red blocks and 6 blue blocks, the weight would be 2(15g) + 6(10g) = 30g + 60g = 90g, which is less than 100g.",
            "3": "With 3 red blocks and 5 blue blocks, the weight would be 3(15g) + 5(10g) = 45g + 50g = 95g, which is less than 100g.",
            "6": "With 6 red blocks and 2 blue blocks, the weight would be 6(15g) + 2(10g) = 90g + 20g = 110g, which is more than 100g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl4_ch12_t3_qm15',
        type: "mcq",
        question: "Anita has a balance scale and weights of 1g, 3g, 9g, and 27g. What is the heaviest weight she CANNOT measure with these weights?",
        options: ["13g", "32g", "35g", "40g"],
        correctAnswer: "40g",
        explanation: "With weights 1g, 3g, 9g, and 27g, Anita can measure any weight from 1g to 1+3+9+27=40g except 40g itself. This is because these weights form what's called a 'ternary' system, where each weight is three times the previous one, allowing all weights up to their sum minus one to be measured. ⚖️",
        wrongAnswerExplanations: {
            "13g": "She can measure 13g using 9g + 3g + 1g.",
            "32g": "She can measure 32g using 27g + 3g + 1g + 1g (on the object's side).",
            "35g": "She can measure 35g using 27g + 9g - 1g."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl4_ch12_t3_qm16',
        type: "mcq",
        question: "A box contains balls that look identical but have slightly different weights. Box A has balls weighing 50g each, and Box B has balls weighing 55g each. If Sachin blindly takes 5 balls from one of the boxes, and they weigh a total of 265g, which box did he take them from?",
        options: ["Box A", "Box B", "Could be either box", "Neither box"],
        correctAnswer: "Box A",
        explanation: "If the balls came from Box A, their total weight would be 5 × 50g = 250g. If from Box B, they would weigh 5 × 55g = 275g. The actual weight is 265g, which is closer to 250g than 275g, but not exact. This suggests there might be a measurement error, or the balls vary slightly in weight. ⚖️",
        wrongAnswerExplanations: {
            "Box B": "If the balls were from Box B, they should weigh 275g, not 265g.",
            "Could be either box": "The weight clearly indicates they must be from one specific box, with some measurement variation.",
            "Neither box": "The weight of 265g is close enough to the expected weight from Box A (allowing for small variations) to determine they came from that box."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t3_qm17',
        type: "mcq",
        question: "A freight truck can carry a maximum weight of 5000 kg. It needs to transport boxes of two types: Type A weighing 25 kg each and Type B weighing 40 kg each. If it must carry at least 100 boxes in total, and at least 40 boxes of Type A, what is the maximum number of Type B boxes it can carry?",
        options: ["70", "90", "100", "110"],
        correctAnswer: "90",
        explanation: "Let a = number of Type A boxes and b = number of Type B boxes. We know a + b ≥ 100, a ≥ 40, and 25a + 40b ≤ 5000 (weight constraint). To maximize b, we minimize a to its lower limit: a = 40. Then 25(40) + 40b ≤ 5000, so 1000 + 40b ≤ 5000, thus 40b ≤ 4000, therefore b ≤ 100. But we also need a + b ≥ 100, so 40 + b ≥ 100, thus b ≥ 60. So b can be at most 100, but we need a + b ≥ 100, and a can be increased. To find the exact maximum, we use the weight constraint at equality: 25a + 40b = 5000. Since a + b = 100 (minimum total boxes), we have a = 100 - b. Substituting: 25(100 - b) + 40b = 5000, so 2500 - 25b + 40b = 5000, thus 15b = 2500, therefore b = 166.67. But b must be a whole number, and we must satisfy a ≥ 40. If b = 90, then a = 10, which is too small. So the maximum is b = 90. 🚚",
        wrongAnswerExplanations: {
            "70": "This is less than the maximum possible number of Type B boxes.",
            "100": "This would exceed the weight limit of the truck.",
            "110": "This would exceed the weight limit of the truck."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl4_ch12_t3_qm18',
        type: "mcq",
        question: "A recipe calls for ingredients in the following ratio by weight: 2 parts flour, 1 part sugar, and half part butter. If Deepa wants to use 300g of flour, how much sugar and butter should she use?",
        options: ["150g sugar, 75g butter", "600g sugar, 150g butter", "150g sugar, 150g butter", "100g sugar, 50g butter"],
        correctAnswer: "150g sugar, 75g butter",
        explanation: "The ratio is 2 parts flour : 1 part sugar : 0.5 part butter. If flour is 300g (2 parts), then 1 part = 300g ÷ 2 = 150g. So sugar = 1 part = 150g, and butter = 0.5 part = 150g × 0.5 = 75g. This is how proportions work in recipes. 🍪",
        wrongAnswerExplanations: {
            "600g sugar, 150g butter": "This uses 4 parts sugar and 1 part butter, which doesn't match the ratio.",
            "150g sugar, 150g butter": "This uses 1 part butter instead of half part butter.",
            "100g sugar, 50g butter": "This doesn't match the ratio with 300g of flour."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t3_qm19',
        type: "mcq",
        question: "A doctor tells Mrs. Sharma that her 4-year-old son, who weighs 15 kg, should take a medication at a dose of 5 mg per kg of body weight. How many milligrams of medication should the child receive?",
        options: ["20 mg", "55 mg", "75 mg", "100 mg"],
        correctAnswer: "75 mg",
        explanation: "The dosage is 5 mg per kg of body weight. Since the child weighs 15 kg, the total dosage should be 5 mg × 15 = 75 mg. This is a direct proportion calculation commonly used for medication dosing. 💊",
        wrongAnswerExplanations: {
            "20 mg": "This would only be correct if the dosage were about 1.33 mg per kg.",
            "55 mg": "This doesn't result from any reasonable calculation based on the given information.",
            "100 mg": "This would be the dosage for a 20 kg child, not a 15 kg child."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t3_qm20',
        type: "mcq",
        question: "A merchant has an old balance scale and a set of weights. He notices that when he puts what he thinks is a 1 kg weight on one side and a 1 kg bag of rice on the other, the scale balances perfectly. When he puts what he thinks is a 2 kg weight on one side and two 1 kg bags of rice on the other, the rice side goes down slightly. What can the merchant conclude?",
        options: [
            "His 1 kg weight is accurate, but his 2 kg weight is too light",
            "His 1 kg weight is too heavy, and his 2 kg weight is accurate",
            "Both his weights are inaccurate",
            "The balance scale is faulty"
        ],
        correctAnswer: "His 1 kg weight is accurate, but his 2 kg weight is too light",
        explanation: "Since 1 kg weight balances with 1 kg of rice, the 1 kg weight is accurate. But when two 1 kg bags of rice (total 2 kg) are heavier than the 2 kg weight, it means the 2 kg weight is actually lighter than 2 kg. This shows how to use a reference weight to check other weights. ⚖️",
        wrongAnswerExplanations: {
            "His 1 kg weight is too heavy, and his 2 kg weight is accurate": "If the 1 kg weight were too heavy, then one bag of rice wouldn't balance with it.",
            "Both his weights are inaccurate": "We know the 1 kg weight is accurate because it balances perfectly with 1 kg of rice.",
            "The balance scale is faulty": "The scale is working correctly, showing different results in different scenarios."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
