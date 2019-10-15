var categories = ["superman","pikachu","ferrari","crazy doctor","cats","dogs","love","breaking bad"];

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < categories.length; i++) {
      var a = $("<button>");
      a.addClass("gifs-btn");
      a.attr("data-name", categories[i]);
      a.text(categories[i]);
      $("#buttons-view").append(a);
    }
  }

  $("#add-gifCat").on("click", function(event) {
    event.preventDefault();
    var gifCategory = $("#gifCat-input").val().trim();
    categories.push(gifCategory);
    renderButtons();
    $("#gifCat-input").val("");
  });

  renderButtons();
