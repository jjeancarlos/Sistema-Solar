//código 1.0 - resposta imprecisa cursor do mouse
// function zoomIn(image) {
//     image.style.transform = 'scale(0.8)'; // Aumenta o tamanho da imagem em 20%
//   }
  
//   function zoomOut(image) {
//     image.style.transform = 'scale(1)'; // Retorna o tamanho original da imagem
//   }
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//código 2.0 - corrigido o problema de imprecisão
// function zoomIn(image) {
//   image.addEventListener('mousemove', function(e) {
//     var rect = image.getBoundingClientRect();
//     var centerX = rect.left + rect.width / 2;
//     var centerY = rect.top + rect.height / 2;
    
//     var mouseX = e.clientX;
//     var mouseY = e.clientY;
    
//     var threshold = 50; // Tamanho da área central em pixels
    
//     if (Math.abs(mouseX - centerX) <= threshold && Math.abs(mouseY - centerY) <= threshold) {
//       image.style.transform = 'scale(0.8)'; // Aumenta o tamanho da imagem em 20%
//     } else {
//       image.style.transform = 'scale(1)'; // Retorna o tamanho original da imagem
//     }
//   });
  
//   image.addEventListener('mouseleave', function() {
//     image.style.transform = 'scale(1)'; // Retorna o tamanho original da imagem quando o mouse sai da imagem
//   });
// }
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//código 3.0 - adicionado uma transição suave ao "código 2.0"
function zoomIn(image) {
  var transitionTime = '0.5s'; // Duração da transição em segundos
  
  image.addEventListener('mousemove', function(e) {
    var rect = image.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;
    
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    
    var threshold = 50; // Tamanho da área central em pixels
    
    if (Math.abs(mouseX - centerX) <= threshold && Math.abs(mouseY - centerY) <= threshold) {
      image.style.transition = 'transform ' + transitionTime + ' ease';
      image.style.transform = 'scale(0.8)'; // Aumenta o tamanho da imagem em 20%
    } else {
      image.style.transition = 'transform ' + transitionTime + ' ease';
      image.style.transform = 'scale(1)'; // Retorna o tamanho original da imagem
    }
  });
  
  image.addEventListener('mouseleave', function() {
    image.style.transition = 'transform ' + transitionTime + ' ease';
    image.style.transform = 'scale(1)'; // Retorna o tamanho original da imagem quando o mouse sai da imagem
  });
}
