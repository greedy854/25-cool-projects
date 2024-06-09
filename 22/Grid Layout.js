function openContent(contentName) {
    var i;
    var x = document.getElementsByClassName("content88");
    // alert(contentName)
    for (i = 0; i < x.length; i++) {
      //alert(x[i].innerHTML);
       x[i].style.display = "none";
    }
    document.getElementById(contentName).style.display = "block";
}