function main() {
  $('.euler').hide();
  $('.euler').fadeIn(1000);

  $('.projects').hide();

  $('.projects-button').on('click', function() {
		//$('.projects').toggle();
    //$(this).next().toggle();
    //if (true){
    if ($(this).text() === 'calculate'){
      $(this).next().slideToggle(400);
      $(this).toggleClass('active');
      var sumTotal = 0;

      for (var i = 0 ; i < 1001 ; i++){
        if (i % 3 === 0 || i % 5 === 0){
          sumTotal = sumTotal + i;
        }
      }

      $(this).text('Reset?');
      $(this).next().text(sumTotal);
      //$(this).next().text($("input:text").val());
      //var titleList = $.getJSON("https://query.yahooapis.com/v1/yql?q=select%20title%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.aip.com.au%2Fpricing%2Ffacts%2FWeekly_Petrol_Prices_Report.htm%22&diagnostics=true");
      //$(this).next().text(titleList);
      //var json = '{"result":true,"count":1}',  obj = JSON.parse(json);
      //alert(obj.count);
    }
    else {
      $(this).next().slideToggle(400);
      $(this).text('calculate');
      $(this).toggleClass('active');
      $("input:text").val("user")
    }
	});
}

$(document).ready(main);
