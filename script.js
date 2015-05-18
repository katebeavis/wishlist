/* Exercise 1: Wish list */
$(document).on("click", "#add-to-list", function(){

  var input = $("#item").val();

  addToList(input)

  $("#item").val("").focus();
})

$(document).on("click", "span.label.pending", function() {

  var label = $(this).parent();

  label.addClass("completed");

  label.append('<span class="label success">Done!</span>');

  $(this).remove();
})

function addToList(item) {

  var span = '<span class="label pending">Pending</span>'

  $("ol#items").append("<li>" + item + span + "</li>")
}
