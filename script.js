
document.getElementById('tell-fortune').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const category = document.getElementById('category').value;

  if (fortuneData[category]) {
    const randomFortune = fortuneData[category][Math.floor(Math.random() * fortuneData[category].length)];
    document.getElementById('fortune').innerText = `${name}, your fortune is: ${randomFortune}`;
  } else {
    document.getElementById('fortune').innerText = "Please select a valid category.";
  }
});