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

  updateTotal();
})

$(document).on("click", "span.label.success", function() {

  var label = $(this).parent();

  label.removeClass("completed");

  label.append('<span class="label pending">Pending</span>');

  $(this).remove();

  updateTotal();
})

function addToList(item) {

  var span = '<span class="label pending">Pending</span>'

  $("ol#items").append("<li>" + item + span + "</li>")

  updateTotal();
}

function updateTotal() {

  var pending = $("span.pending").length

  var completed = $("span.success").length

  var totals = "Pending: " + pending + " Completed: " + completed

  $(".total").text(totals)
}
