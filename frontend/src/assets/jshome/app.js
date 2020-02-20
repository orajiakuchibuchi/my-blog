// get todays date

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

//datepicker
// $(document).ready(function(){
//     var date_input=$('input[name="date"]'); //our date input has the name "date"
//     var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
//     var options={
//       format: 'mm/dd/yyyy',
//       container: container,
//       todayHighlight: true,
//       autoclose: true,
//     };
//     date_input.datepicker(options);
//   })