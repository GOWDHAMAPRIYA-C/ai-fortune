document.addEventListener("DOMContentLoaded", function() {
  const fortunes = [
    "You will soon embark on a journey that changes your life!",
    "A great opportunity is heading your way—be ready!",
    "Love is around the corner, keep your heart open!",
    "A hidden talent of yours will soon be recognized!",
    "Unexpected wealth may come your way soon!",
    "Your kindness will lead you to an unexpected reward!",
    "Happiness will find you when you least expect it!",
    "Adventure awaits those who dare to dream!"
  ];
  
  const fortuneBtn = document.getElementById("fortuneBtn");
  const nameInput = document.getElementById("nameInput");
  const fortuneText = document.getElementById("fortuneText");
  const darkModeToggle = document.getElementById("darkModeToggle");
  
  fortuneBtn.addEventListener("click", function() {
    const name = nameInput.value.trim();
    if (name === "") {
      alert("Please enter your name!");
      return;
    }
    
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    fortuneText.textContent = `${name}, your fortune: ${fortune}`;
    
    // Reset and trigger re-animation for smooth fade-in effect
    fortuneText.style.animation = 'none';
    void fortuneText.offsetWidth; // Trigger reflow
    fortuneText.style.animation = 'fadeIn 1s forwards';
  });
  
  darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    darkModeToggle.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
  });
});
