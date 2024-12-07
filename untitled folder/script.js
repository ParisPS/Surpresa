document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a6c1ee'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(135deg, ${randomColor}, #ffffff)`;
  });  