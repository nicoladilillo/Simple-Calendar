$( document ).ready(function() {

  // these are labels for the days of the week
  cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // these are human-readable month name labels, in order
  cal_months_labels = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November',
                       'December'];

  //Constructor function for Calendar
  function Calendar(year,month,day) {
    $( "#month" ).html( cal_months_labels[month] );
    Day(year,month,day);
  }

  function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
  }

  function daysNames(day,month,year) {
    return new Date(year, month, day).getDay();
  }

  function Day(year,month,day) {
    console.log("Mesi: "+month);
    console.log("anni: "+year);
    var y = daysInMonth(month+1,year);
    console.log(y);

    for (var i=1; i<=y; i++) {
      var name = cal_days_labels[daysNames(i,month,year)];
      if (i == day)
        var x = "<div class='day' style='color:red'>" + i + " " + name +"</div>";
      else
        var x = "<div class='day'>" + i + " " + name +"</div>";
      $( "#day" ).append( x );
    }
  }

  var d = new Date("02/02/2017");
  console.log(d);
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  Calendar(year,month,day);

});
