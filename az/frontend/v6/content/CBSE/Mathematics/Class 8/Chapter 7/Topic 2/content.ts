import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

const content: TopicContent = {
  id: 'cl8_ch7_t2',
  topicNumber: 2,
  topicName: 'Profit and loss, discount, sales tax',
  duration: 60,
  description: 'Learn about calculating profit and loss, percentage profit/loss, discounts, and sales tax in commercial transactions.',
  explanation: `# Profit and Loss, Discount, Sales Tax

## Introduction to Profit and Loss

In our daily lives, we often buy and sell things. When we sell something for more than what we paid for it, we make a profit. When we sell for less, we incur a loss. Understanding how to calculate profit and loss is an essential life skill.

## Basic Terms in Profit and Loss

### Cost Price (CP)
The price at which an article is purchased is called its cost price. It includes all expenses incurred in buying the article.

### Selling Price (SP)
The price at which an article is sold is called its selling price.

### Profit or Gain
When SP > CP, the seller makes a profit.
Profit = SP - CP

### Loss
When SP < CP, the seller incurs a loss.
Loss = CP - SP

## Percentage Profit and Loss

To compare profits and losses on different transactions, we express them as percentages of the cost price.

### Profit Percentage
Profit Percentage = (Profit/CP) × 100

### Loss Percentage
Loss Percentage = (Loss/CP) × 100

### Example 1:
A shopkeeper buys a book for ₹250 and sells it for ₹300.
- Cost Price (CP) = ₹250
- Selling Price (SP) = ₹300
- Profit = SP - CP = ₹300 - ₹250 = ₹50
- Profit Percentage = (Profit/CP) × 100 = (50/250) × 100 = 20%

### Example 2:
A shopkeeper buys a chair for ₹1200 and sells it for ₹1000.
- Cost Price (CP) = ₹1200
- Selling Price (SP) = ₹1000
- Loss = CP - SP = ₹1200 - ₹1000 = ₹200
- Loss Percentage = (Loss/CP) × 100 = (200/1200) × 100 = 16.67%

## Finding Cost Price or Selling Price

### Finding CP when SP and Profit/Loss Percentage are given
- When Profit% is given: CP = (SP × 100)/(100 + Profit%)
- When Loss% is given: CP = (SP × 100)/(100 - Loss%)

### Finding SP when CP and Profit/Loss Percentage are given
- When Profit% is given: SP = CP × (100 + Profit%)/100
- When Loss% is given: SP = CP × (100 - Loss%)/100

### Example 3:
A merchant sells an article at a profit of 25%. If the cost price is ₹400, find the selling price.
- CP = ₹400, Profit% = 25%
- SP = CP × (100 + Profit%)/100 = ₹400 × (100 + 25)/100 = ₹400 × 125/100 = ₹500

### Example 4:
An article is sold for ₹460 at a loss of 8%. Find its cost price.
- SP = ₹460, Loss% = 8%
- CP = (SP × 100)/(100 - Loss%) = (₹460 × 100)/(100 - 8) = (₹460 × 100)/92 = ₹500

## Discount

Discount is a reduction in the marked price of an article offered by the seller to attract customers.

### Marked Price (MP)
The price marked on an article is called its marked price or list price.

### Discount
Discount = Marked Price - Selling Price

### Discount Percentage
Discount Percentage = (Discount/Marked Price) × 100

### Selling Price after Discount
Selling Price = Marked Price - Discount
                = Marked Price - (Discount% × Marked Price)/100
                = Marked Price × (100 - Discount%)/100

### Example 5:
A shirt is marked at ₹800 and is sold at a discount of 15%. Find the selling price and the discount.
- Marked Price (MP) = ₹800
- Discount% = 15%
- Discount = (Discount% × MP)/100 = (15 × ₹800)/100 = ₹120
- Selling Price (SP) = MP - Discount = ₹800 - ₹120 = ₹680

### Example 6:
A shop offers a 25% discount on all items. If the selling price of an article is ₹1,500, what was its marked price?
- SP = ₹1,500
- Discount% = 25%
- SP = MP × (100 - Discount%)/100
- ₹1,500 = MP × (100 - 25)/100
- ₹1,500 = MP × 75/100
- MP = (₹1,500 × 100)/75 = ₹2,000

## Successive Discounts

Sometimes, sellers offer more than one discount in succession.

If two successive discounts of a% and b% are given, then:
- The single equivalent discount = a + b - (a×b)/100

### Example 7:
A shopkeeper offers successive discounts of 20% and 10% on a shirt. Find the single equivalent discount.
- First discount (a) = 20%
- Second discount (b) = 10%
- Single equivalent discount = a + b - (a×b)/100
                            = 20 + 10 - (20×10)/100
                            = 30 - 2 = 28%

## Sales Tax

Sales tax is a tax imposed by the government on the sale of goods and services.

### Amount Including Tax
Amount to be paid = Selling Price + Sales Tax
                   = SP + (Tax% × SP)/100
                   = SP × (100 + Tax%)/100

### Example 8:
A laptop costs ₹25,000 and is subject to a 12% sales tax. Find the total amount to be paid.
- SP = ₹25,000
- Tax% = 12%
- Total amount = SP × (100 + Tax%)/100
               = ₹25,000 × 112/100
               = ₹28,000

### Example 9:
If the total bill including 8% sales tax is ₹2,160, what was the price before tax?
- Let the price before tax be x
- x × (100 + 8)/100 = ₹2,160
- x × 108/100 = ₹2,160
- x = (₹2,160 × 100)/108
- x = ₹2,000

## Applications in Real Life

### 1. Shopping and Discounts
When shopping during sale seasons, understanding discounts helps us calculate actual savings and make informed decisions.

### 2. Business Decisions
Entrepreneurs use profit and loss calculations to determine pricing strategies and evaluate the success of their business.

### 3. Investment Analysis
Investors use percentage profit and loss to compare different investment options.

### 4. Tax Planning
Understanding sales tax helps in budgeting and financial planning.

## Summary

- Profit occurs when SP > CP and Loss occurs when SP < CP
- Profit% and Loss% are always calculated on the Cost Price
- Discount is a reduction from the Marked Price
- Sales Tax increases the amount to be paid by the customer
- The concepts of profit, loss, discount, and tax are interconnected and form the basis of commercial mathematics
- These concepts are essential for making informed financial decisions in daily life.

Remember that in real-world scenarios, there might be additional factors like overhead costs, various types of taxes, and complex discount structures. The principles learned in this topic provide a foundation for understanding those more complex situations.`,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions]
  }
};

export default content;
