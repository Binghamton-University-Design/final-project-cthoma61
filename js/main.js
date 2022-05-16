/* javascript */

$(document).ready(function() {

console.log('hello');

});

<script>
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar-items");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
</script>