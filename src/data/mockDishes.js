export const dishes = [
    {
        id: 1,
        name: "Kadhai Paneer",
        description: "Paneer cubes in spicy onion gravy with onions and capsicum.",
        image: "https://placehold.co/400x260/F7D0B3/422402?text=Kadhai+Paneer",
        mealType: "MAIN COURSE",
        type: "VEG",
        ingredients: [
            { name: "Paneer", quantity: "200g" },
            { name: "Onion", quantity: "2 large" },
            { name: "Capsicum", quantity: "1 large" },
            { name: "Tomato Puree", quantity: "1 cup" },
        ],
    },
    {
        id: 2,
        name: "Chicken 65",
        description: "Crispy spicy deep-fried chicken bites with curry leaves.",
        image: "https://placehold.co/400x260/FFD2D2/7A1F1F?text=Chicken+65",
        mealType: "STARTER",
        type: "NON-VEG",
        ingredients: [
            { name: "Chicken", quantity: "500g" },
            { name: "Yogurt", quantity: "1/2 cup" },
            { name: "Chili Powder", quantity: "1 tbsp" },
        ],
    },
    {
        id: 3,
        name: "Gulab Jamun",
        description: "Soft milk-solid dumplings in sugar syrup.",
        image: "https://placehold.co/400x260/FFF2CC/5C3A00?text=Gulab+Jamun",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Khoya", quantity: "250g" },
            { name: "Sugar", quantity: "200g" },
        ],
    },
    {
        id: 4,
        name: "Paneer Tikka",
        description: "Marinated paneer cubes roasted with spices.",
        image: "https://placehold.co/400x260/CFE7D8/1A5F3A?text=Paneer+Tikka",
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            { name: "Paneer", quantity: "250g" },
            { name: "Yogurt", quantity: "1/2 cup" },
            { name: "Spices", quantity: "to taste" },
        ],
    },
    {
        id: 5,
        name: "Fried Rice",
        description: "Vegetable fried rice tossed with light soy and veggies.",
        image: "https://placehold.co/400x260/CEE7FF/063A5F?text=Fried+Rice",
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            { name: "Rice", quantity: "3 cups" },
            { name: "Mixed Veg", quantity: "1 cup" },
        ],
    },
];


export const CATEGORIES = ["ALL", "STARTER", "MAIN COURSE", "SIDES", "DESSERT"];