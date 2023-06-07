$(document).ready(function() {
    // $('.link-image').magnificPopup({type:'image'});
    $('.containerfoto').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}
        // other options
      });
  });