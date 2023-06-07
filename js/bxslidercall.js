$(document).ready(function () {
  $(".banners ul").bxSlider({
    mode: 'horizontal', // Modo de exibição do carrossel
    captions: false, // Exibir legendas abaixo dos slides (opcional)
    auto: true, // Avançar automaticamente para o próximo slide (opcional)
    pause: 5000, // Tempo de pausa entre os slides (opcional)
    controls: true, // Exibir controles de navegação (opcional)
    pager: false // Exibir paginador (opcional)
  });
});