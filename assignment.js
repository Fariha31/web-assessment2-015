window.onload = function () {
  var tbl = document.getElementById("myTable");
  var row2 = tbl.getElementsByClassName("second_row");
  var row3 = tbl.getElementsByClassName("third_row");
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  falseAll(checkboxes);
};

function falseAll(checkboxes) {
  for (var checkbox of checkboxes) checkbox.checked = this.checked;
}

function fun() {
  var clicked = event.srcElement.id;
  var span = document.getElementById("txt_result");
  for (var i = 1; i <= 7; i++) {
    if (clicked == "c" + i) {
      document.getElementById("c" + (i + 7)).checked = false;
      var f = document.getElementById("t" + i);
      f.readOnly = false;
      f.style.color = "black";
      f.style.background = "white";
      var t = document.getElementById("t" + (i + 7));
      t.style.background = "#dbdbdb";
      t.style.color = "#E7E8EA";
      t.style.borderColor = "black";
      t.readOnly = true;
      if (f.value == "" || !(f.value >= 1 && f.value <= 100)) {
        span.innerHTML = "Fill this box (0-100) then check";
        f.style.borderColor = "red";
        document.getElementById(clicked).checked = false;
      } else {
        span.innerHTML = "";
        f.style.borderColor = "black";
        document.getElementById(clicked).checked = true;
      }
    }
  }
}
function myfun() {
  for (var i = 8; i <= 14; i++) {
    var clicked = event.srcElement.id;
    var span = document.getElementById("txt_result");
    if (clicked == "c" + i) {
      document.getElementById("c" + (i - 7)).checked = false;
      var f = document.getElementById("t" + i);
      f.readOnly = false;
      f.style.color = "black";
      f.style.background = "white";
      var t = document.getElementById("t" + (i - 7));
      t.style.background = "#D9DBDF";
      t.style.color = "#E7E8EA";
      t.style.borderColor = "black";
      t.readOnly = true;
      if (f.value == "" || !(f.value > 0)) {
        span.innerHTML = "Fill this box (positive numbers only) then check";
        f.style.borderColor = "red";
        document.getElementById(clicked).checked = false;
      } else {
        span.innerHTML = "";
        f.style.borderColor = "black";
        document.getElementById(clicked).checked = true;
      }
    }
  }
}
function textvalidity(x) {
  var span = document.getElementById("txt_result");
  var clicked = event.srcElement.id;
  var f = document.getElementById(clicked);
  if (!(f.value >= 1 && f.value <= 100) && !(f.value == "")) {
    span.innerHTML = "Fill this box (0-100 only)";
    f.style.borderColor = "red";
  } else {
    span.innerHTML = "";
    f.style.borderColor = "black";
  }
}
function textvalidity1(x) {
  var span = document.getElementById("txt_result");
  var clicked = event.srcElement.id;
  var f = document.getElementById(clicked);
  if (!(f.value > 0) && !(f.value == "")) {
    span.innerHTML = "Fill this box (positive numbers only)";
    f.style.borderColor = "red";
  } else {
    span.innerHTML = "";
    f.style.borderColor = "black";
  }
}
