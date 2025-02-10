
document.getElementById("fortune-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;

    const fortunes = {
        "General Fortune": [
            "Today is a lucky day for you!",
            "Expect a pleasant surprise in your near future.",
            "A new opportunity will knock on your door soon."
        ],
        "Love Life": [
            "Love is just around the corner.",
            "A romantic gesture will warm your heart.",
            "Someone special is thinking of you right now."
        ],
        "Career": [
            "A big career move is coming your way.",
            "Your hard work will soon pay off.",
            "A new project will bring unexpected success."
        ],
        "Health": [
            "A healthy lifestyle change will benefit you.",
            "Your energy levels will be higher than usual.",
            "Focus on balance and wellness."
        ],
        "Philosophy": [
            "The answer lies within you.",
            "Seek wisdom, and you shall find it.",
            "Every journey begins with a single step."
        ],
        "Dream Interpretation": [
            "A dream will reveal an important message.",
            "Your subconscious is guiding you.",
            "Dreams are the whispers of your soul."
        ],
        "Supernatural Events": [
            "You may experience déjà vu today.",
            "A mysterious coincidence will make you smile.",
            "Trust your intuition—it’s sharper than ever."
        ]
    };

    const selectedFortunes = fortunes[category];
    const randomFortune = selectedFortunes[Math.floor(Math.random() * selectedFortunes.length)];

    document.getElementById("fortune-result").textContent = `${name}, ${randomFortune}`;
});
