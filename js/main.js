function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  
  $('.projects').hide();
  
  $('.projects-button').on('click', function() {
		//$('.projects').toggle();
    //$(this).next().toggle();
    $(this).next().slideToggle(400);
    //$('.projects-button').toggleClass('active');
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
	});
}

$(document).ready(main);
