$(document).ready(function(){

  $('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
  });
  $('#datepicker2').datepicker({
    uiLibrary: 'bootstrap4'
  });

  $('#submit').click(function(){
    let date1 = $('#datepicker').val();
    let date2 = $('#datepicker2').val();
    if (!date1 || !date2){
      console.log('Please enter two different days!')
    } else {
      console.log(date1,date2)
      let now = moment(date1,'MM-DD-YYYY');
      let expiration = moment(date2,'MM-DD-YYYY');
      let diff = expiration.diff(now,'days');
      let diffH = expiration.diff(now,'hours');
      let diffM = expiration.diff(now,'minutes');
      if (diff == 1) {
        $('#results').html('1 Day!')
        console.log(diff,diffH,diffM,diffS)
      } else {
        $('#results-d').html(diff);
        $('#results-h').html(diffH);
        $('#results-m').html(diffM);
      }
    }
  });

});
