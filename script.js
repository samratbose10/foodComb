const ingredients = [
    "Peanut Butter", "Bacon", "Banana", "Chocolate", "Pickles", "Cheese",
    "Sardines", "Honey", "Marshmallows", "Avocado", "Mango", "Sriracha",
    "Ice Cream", "Coconut", "Beetroot", "Soy Sauce", "Lemon", "Coffee",
    "Garlic", "Yogurt", "Blueberries", "Chili", "Pineapple", "Maple Syrup"
];

function generateCombination() {
  const randomIndex1 = Math.floor(Math.random() * ingredients.length);
  const randomIndex2 = Math.floor(Math.random() * ingredients.length);
  const ingredient1 = ingredients[randomIndex1];
  const ingredient2 = ingredients[randomIndex2];

  if (ingredient1 === ingredient2) {
    generateCombination();
  } else {
    document.getElementById("combination").textContent = `${ingredient1} and ${ingredient2}`;
  }
}