// Aguarda que o documento esteja completamente carregado
$(document).ready(function () {
    // Inicializa o carrossel
    $('#carouselExampleCaptions').carousel();

    // Adiciona evento de clique nos botões indicadores
    $('.carousel-indicators button').click(function () {
      // Obtém o índice do slide a ser exibido
      var slideIndex = $(this).data('bs-slide-to');
      // Muda para o slide correspondente
      $('#carouselExampleCaptions').carousel(slideIndex);
    });

    // Adiciona evento de clique nas setas do carrossel
    $('.carousel-control-prev').click(function () {
      $('#carouselExampleCaptions').carousel('prev');
    });

    $('.carousel-control-next').click(function () {
      $('#carouselExampleCaptions').carousel('next');
    });

    // Função para mudar de slide a cada 10 segundos
    setInterval(function () {
      $('#carouselExampleCaptions').carousel('next');
    }, 10000);
  });