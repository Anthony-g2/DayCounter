$(document).ready(function(){

  $('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
  });
  $('#datepicker2').datepicker({
    uiLibrary: 'bootstrap4'
  });

  $('#submit').click(function(){
    const date1 = $('#datepicker').val();
    const date2 = $('#datepicker2').val();
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (!date1 || !date2){
      $('#errormsg').text('Please enter two dates!');
      $('#errormsg').fadeIn("fast", function() {
        $(this).delay(1000).fadeOut("slow");
      });
    } else {
      let now = moment(date1,'MM-DD-YYYY');
      let expiration = moment(date2,'MM-DD-YYYY');
      let diff = expiration.diff(now,'days');
      let diffH = expiration.diff(now,'hours');
      let diffM = expiration.diff(now,'minutes');
      if (diff < 0) {
        $('#errormsg').text('First date must be before the second date!');
        $('#errormsg').fadeIn("fast", function() {
          $(this).delay(1000).fadeOut("slow");
        });
      } else if (isNaN(diff)) {
        $('#errormsg').text('Dates must be valid!');
        $('#errormsg').fadeIn("fast", function() {
          $(this).delay(1000).fadeOut("slow");
        });
      } else {
        $('#results-d').html(numberWithCommas(diff));
        $('#results-h').html(numberWithCommas(diffH));
        $('#results-m').html(numberWithCommas(diffM));
      }
    }
  });

});
