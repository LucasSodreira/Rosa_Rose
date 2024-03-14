// Seleciona todas as estrelas
const stars = document.querySelectorAll('.star');

// Adiciona evento de clique a cada estrela
stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = parseFloat(star.getAttribute('data-value')); // Obtém o valor da estrela clicada
    const roundedValue = Math.round(value); // Arredonda o valor para o inteiro mais próximo
    const remainder = value - roundedValue; // Calcula o valor fracionário restante
    resetStars(); // Limpa todas as estrelas
    highlightStars(roundedValue); // Destaca as estrelas até a estrela clicada
    if (remainder >= 0.5) { // Se houver uma metade ou mais
      const nextStar = star.nextElementSibling; // Obtém a próxima estrela
      if (nextStar) { // Verifica se há uma próxima estrela
        nextStar.innerHTML = '&#9734;'; // Preenche a próxima estrela como metade
      }
    }
  });
});

// Função para limpar todas as estrelas
function resetStars() {
  stars.forEach(star => {
    star.innerHTML = '&#9734;'; // Estrela vazia
  });
}

// Função para destacar as estrelas até a estrela clicada
function highlightStars(value) {
  stars.forEach((star, index) => {
    if (index < value) {
      star.innerHTML = '&#9733;'; // Estrela preenchida
    }
  });
}
