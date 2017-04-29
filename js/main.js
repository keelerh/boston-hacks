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

function getRelativeHref(href) {
  var currentLocation = window.location.href;
  var prefixArray = currentLocation.split('/');
  var prefixArray = prefixArray.slice(0, prefixArray.length - 1);
  return prefixArray.join('/') + href;
}

function populateTiles() {
  var row = $('#tileRow');
  for (var i=0; i<bugs.length; i++) {
    var bug = bugs[i];
    var outerDiv = $('<div>', {"class":"col-md-3 col-sm-6 hero-feature " + bug.language});
    var thumbnail = $('<div>', {"class": "thumbnail"});
    var img = $('<img>', {"src": "http://placehold.it/800x500"});
    thumbnail.append(img);
    var caption = $('<div>', {"class":"caption"});
    var title = $('<h3>', {"margin-bottom": "10px"}).text(bug.title);
    var compensation = $('<h5>', {"margin-bottom": "5px", "margin-top": "0px"}).text("Compensation: $"+bug.compensation);
    var language = $('<h5>', {"margin-bottom": "10px", "margin-top": "0px"}).text("Language: "+bug.language);
    var twitterDesc = $('<p>').text(bug.twitterDesc);
    var p = $('<p>');
    var bugBtn = $('<a>', {"class": "btn btn-primary", href: getRelativeHref("/bugPage.html?bug=" + bug.href)}).text("See More");
    p.append(bugBtn);
    caption.append(title).append(compensation).append(language).append(twitterDesc).append(p);
    thumbnail.append(caption);
    outerDiv.append(thumbnail);
    row.append(outerDiv);
  }
};
