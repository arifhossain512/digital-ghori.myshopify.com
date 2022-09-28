// Put your application javascript here
$(document).ready(function () {
    $(document).on('change', '#variant-id', function () {
        variant_id = this.value;
        console.log(variant_id);
        variant_image = $(
            '.single-product-image[data-variant="'+variant_id +'"]');
        variant_image.show().siblings(':visible').hide();
    });
});
