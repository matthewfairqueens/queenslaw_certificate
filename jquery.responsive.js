(function ($) {
  $(document).ready(function() {
    var window_width = $(window).width();
    if (window_width < 960) {
      var mainNavFirstUL = $('#block-mainnavigation ul').first();
      $('#block-secondarynavigation ul').first().contents().appendTo(mainNavFirstUL);
    }
    if (window_width < 640) {
      $('.page-node-type-podcast .field--name-field-audio').insertBefore('.page-node-type-podcast #content .node__content');
    }
  });
}(jQuery));
