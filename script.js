// script.js

// Função para alterar a mensagem ao clicar
const changeMessage = () => {
  const message = document.getElementById('message');
  const submessage = document.getElementById('submessage');

  if (message.textContent === 'Feliz 3 meses, Sarinha!') {
    message.textContent = 'Você é incrível!';
    submessage.textContent = 'Obrigada por tudo! ❤️';
  } else {
    message.textContent = 'Feliz 3 meses, Sarinha!';
    submessage.textContent = 'Eu te amo muito ❤️';
  }
};

// Adiciona um evento de clique no contêiner da mensagem
const messageBox = document.getElementById('message-box');
messageBox.addEventListener('click', changeMessage);

// Controle do áudio
const backgroundMusic = document.getElementById('background-music');

// Botão para pausar ou reproduzir a música
const toggleMusic = () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
};

// Adiciona um botão dinâmico para controlar a música
const musicControlButton = document.createElement('button');
musicControlButton.textContent = 'Pausar Música';
musicControlButton.style.position = 'fixed';
musicControlButton.style.bottom = '20px';
musicControlButton.style.right = '20px';
musicControlButton.style.padding = '10px 15px';
musicControlButton.style.fontSize = '1rem';
musicControlButton.style.backgroundColor = '#ffffff';
musicControlButton.style.color = '#000';
musicControlButton.style.border = 'none';
musicControlButton.style.borderRadius = '5px';
musicControlButton.style.cursor = 'pointer';
musicControlButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';

musicControlButton.addEventListener('click', () => {
  toggleMusic();
  musicControlButton.textContent = backgroundMusic.paused ? 'Reproduzir Música' : 'Pausar Música';
});

document.body.appendChild(musicControlButton);
