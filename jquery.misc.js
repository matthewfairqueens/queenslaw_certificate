(function ($){
  $(document).ready(function(){
    $('.queenslaw-alternate-teasers #teaser-blog:not(.has-teaser-image), .queenslaw-alternate-teasers #teaser-podcast:not(.has-teaser-image)').each(function(){
      var img_src = $(this).find('.teaser-image img').attr('src');
      if (img_src) {
        // replace the teaser style with the original image (can't use the title image
        // style used for other teasers because it might not have been generated)
        img_src = img_src.replace('/styles/teaser/public/', '/');
        $(this).css('background-image', 'url(' + img_src + ')').addClass('has-teaser-image');
      }
    });
  });
}(jQuery));
