/* Exercise 1: Wish list */
function addToList(item) {
  $("ol#items").append("<li>" + item + "</li>")
}
$(document).on("click", "#add-to-list", function(){
  var input = $("#item").val();
  addToList(input)
  $("#item").val("");
})