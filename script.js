const letterElement = document.getElementById('letter');
const playArea = document.getElementById('play-area');
const successImage = document.getElementById('success-image');

// Sequência de letras "SUELLEN"
const sequence = ['S', 'U', 'E', 'L', 'L', 'E', 'N'];
let currentIndex = 0;

// Função para mover a letra aleatoriamente dentro do retângulo
function moveLetter() {
    const areaWidth = playArea.clientWidth;
    const areaHeight = playArea.clientHeight;

    const letterWidth = letterElement.offsetWidth;
    const letterHeight = letterElement.offsetHeight;

    const randomX = Math.random() * (areaWidth - letterWidth);
    const randomY = Math.random() * (areaHeight - letterHeight);

    letterElement.style.left = `${randomX}px`;
    letterElement.style.top = `${randomY}px`;

    const randomRotation = Math.random() * 360;
    letterElement.style.transform = `rotate(${randomRotation}deg)`;
}

// Adicionar evento de clique na letra
letterElement.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= sequence.length) {
        alert('Parabéns! Você completou a sequência SUELLEN!');
        successImage.style.display = 'block';
        letterElement.style.display = 'none'; // Esconde a letra ao vencer
    } else {
        letterElement.textContent = sequence[currentIndex];
        moveLetter();
    }
});

// Posicionar a letra após a página ser carregada
window.addEventListener('DOMContentLoaded', moveLetter);
