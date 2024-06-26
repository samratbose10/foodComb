
const ingredients = {
    Fruits: ["Banana", "Mango", "Blueberries", "Pineapple"],
    Vegetables: ["Pickles", "Avocado", "Beetroot"],
    Dairy: ["Cheese", "Yogurt", "Ice Cream"],
    Proteins: ["Bacon", "Sardines"],
    Spices: ["Sriracha", "Chili"],
    Others: ["Peanut Butter", "Chocolate", "Honey", "Marshmallows", "Coconut", "Soy Sauce", "Lemon", "Coffee", "Garlic", "Maple Syrup"]
};

function generateCombination() {
    const categories = Object.keys(ingredients);
    const randomCategory1 = categories[Math.floor(Math.random() * categories.length)];
    const randomCategory2 = categories[Math.floor(Math.random() * categories.length)];
    const randomIndex1 = Math.floor(Math.random() * ingredients[randomCategory1].length);
    const randomIndex2 = Math.floor(Math.random() * ingredients[randomCategory2].length);
    const ingredient1 = ingredients[randomCategory1][randomIndex1];
    const ingredient2 = ingredients[randomCategory2][randomIndex2];

    // Ensure the two ingredients are not the same
    if (ingredient1 === ingredient2) {
        generateCombination();
    } else {
        const combinationElement = document.getElementById("combination");
        combinationElement.style.opacity = 0;
        setTimeout(() => {
            combinationElement.textContent = `${ingredient1} and ${ingredient2}`;
            combinationElement.style.opacity = 1;
        }, 300);
    }
}

function addIngredient() {
    const newIngredient = document.getElementById("new-ingredient").value;
    const category = document.getElementById("ingredient-category").value;
    if (newIngredient && !ingredients[category].includes(newIngredient)) {
        ingredients[category].push(newIngredient);
        alert(`${newIngredient} has been added to the ${category} list!`);
        document.getElementById("new-ingredient").value = '';
        displayIngredients();
    } else {
        alert("Please enter a valid, unique ingredient.");
    }
}

function removeIngredient(category, ingredient) {
    const index = ingredients[category].indexOf(ingredient);
    if (index > -1) {
        ingredients[category].splice(index, 1);
        alert(`${ingredient} has been removed from the ${category} list!`);
        displayIngredients();
    }
}

function displayIngredients() {
    const ingredientsList = document.getElementById("ingredients");
    ingredientsList.innerHTML = '';
    Object.keys(ingredients).forEach(category => {
        ingredients[category].forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = `${ingredient} (${category})`;
            li.appendChild(createRemoveButton(category, ingredient));
            ingredientsList.appendChild(li);
        });
    });
}

function createRemoveButton(category, ingredient) {
    const button = document.createElement("button");
    button.textContent = "Remove";
    button.onclick = () => removeIngredient(category, ingredient);
    return button;
}

displayIngredients();