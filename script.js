
document.getElementById('tell-fortune').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const fortunes = {
        general: ["You will have a lucky day!", "An unexpected surprise awaits you.", "Today is the start of something new."],
        love: ["Love is in the air!", "A romantic encounter will brighten your day.", "Your heart will find what it seeks."],
        career: ["A new opportunity is on the horizon.", "Your hard work will pay off soon.", "Success is within reach."],
        health: ["Take time to rest and recharge.", "Good health and happiness are coming your way.", "A balanced diet brings a balanced life."],
        philosophy: ["Life is a journey, not a destination.", "The answer lies within you.", "Embrace the unknown with courage."],
        dreams: ["Your dreams hold hidden messages.", "A recent dream will come true.", "Pay attention to your intuition."],
        supernatural: ["You will experience a déjà vu moment.", "A mysterious event will leave you amazed.", "The universe is aligning in your favor."]
    };
    const fortuneList = fortunes[category];
    const randomFortune = fortuneList[Math.floor(Math.random() * fortuneList.length)];
    document.getElementById('fortune').innerText = `${name}, ${randomFortune}`;
});
