$(document).ready(function() {
    // Check if user device is greater than 1000px
    if(window.matchMedia("(min-width: 1000px)").matches) {
      
      var pdp_thumbnail = $('.product-gallery__thumbnail');
    
      pdp_thumbnail.on('mouseenter', handleThumbnailMouseenter)
      $('.Product__Gallery_arrows').click(toggleLeftRightMedia)
    
      function handleThumbnailMouseenter() {
        var $this = $(this),
            img_id = $this.data('image-id'),
            main_img = $(`.product-gallery__carousel-item[data-image-id=${img_id}]`);
  
  
        var slider = Flickity.data(document.querySelector('.product-gallery__carousel'))
  
        if(slider) {
          slider.select($this.index())
        }
    
        // Toggle 'is-nav-selected' class
        $this.addClass('is-nav-selected').siblings().removeClass('is-nav-selected');
    
        // Toggle 'is-gallery-selected' class on the main gallery image
        main_img.addClass('is-gallery-selected').siblings().removeClass('is-gallery-selected');
      }
  
      function toggleLeftRightMedia() {
        var next_elem = $('.product-gallery__carousel-item.is-gallery-selected').next();
        var prev_elem = $('.product-gallery__carousel-item.is-gallery-selected').prev();
        var slider = Flickity.data(document.querySelector('.product-gallery__carousel'))
  
  
    
        if($(this).data('control') === 'right' && next_elem.length > 0) {
          next_elem.addClass('is-gallery-selected').siblings().removeClass('is-gallery-selected')
          var media_id = next_elem.data('image-id')
          $(`.product-gallery__thumbnail[data-image-id=${media_id}]`).addClass('is-nav-selected').siblings().removeClass('is-nav-selected')
          if(slider) {
            slider.select($(`.product-gallery__thumbnail[data-image-id=${media_id}]`).index())
          }
        } else if($(this).data('control') === 'left' && prev_elem.length > 0) {
          prev_elem.addClass('is-gallery-selected').siblings().removeClass('is-gallery-selected')
          var media_id = prev_elem.data('image-id')
          $(`.product-gallery__thumbnail[data-image-id=${media_id}]`).addClass('is-nav-selected').siblings().removeClass('is-nav-selected')
          if(slider) {
            slider.select($(`.product-gallery__thumbnail[data-image-id=${media_id}]`).index())
          }
        }else {
          $('.product-gallery__carousel-item').eq(0).addClass('is-gallery-selected').siblings().removeClass('is-gallery-selected')
          $('.product-gallery__thumbnail').eq(0).addClass('is-nav-selected').siblings().removeClass('is-nav-selected')
        }
      }
    }
  })