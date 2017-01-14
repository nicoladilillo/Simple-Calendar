$( document ).ready(function() {

  // these are labels for the days of the week
  cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // these are human-readable month name labels, in order
  cal_months_labels = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November',
                       'December'];

  //Constructor function for Calendar
  function Calendar(month) {
    $( "#month" ).html( cal_months_labels[month] );
    Day(month);
  }

  function Day(m) {
    var day;
    if (m ==2) day = 28;
    if(m%2 == 0) day = 30;
    if(m%2 == 0) day = 31;

    for (var i=1; i<=day; i++) {
      var name = cal_days_labels[(d.getDate()+i+69) % 7]
      if (i == d.getDate())
        var x = "<div class='day' style='color:red'>" + i + " " + name +"</div>";
      else
        var x = "<div class='day'>" + i + " " + name +"</div>";
      $( "#day" ).append( x );
    }
  }

  var d = new Date();
  var month = d.getMonth();
  var day = d.getDate();
  Calendar(month);

});
