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

    // Ensure the two ingredients are not the same
    if (ingredient1 === ingredient2) {
        generateCombination();
    } else {
        document.getElementById("combination").textContent = `${ingredient1} and ${ingredient2}`;
    }
}

function addIngredient() {
    const newIngredient = document.getElementById("new-ingredient").value;
    if (newIngredient && !ingredients.includes(newIngredient)) {
        ingredients.push(newIngredient);
        alert(`${newIngredient} has been added to the list!`);
        document.getElementById("new-ingredient").value = '';
    } else {
        alert("Please enter a valid, unique ingredient.");
    }
}