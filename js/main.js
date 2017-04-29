var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $('#tileRow > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#tileRow > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})

$('.range-slider').jRange({
    from: 0,
    to: 100,
    step: 1,
    scale: [0,25,50,75,100],
    format: '%s',
    width: 300,
    showLabels: true,
    isRange : true
});
