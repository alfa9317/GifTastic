
var categories = ["superman","pikachu","ferrari","crazy doctor","cats","dogs","love","breaking bad"];



function displayGifs(){
    $("#gifs-view").empty();
    var category = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      category + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='gifContainer'>");
          var p = $("<p>").text("Rating: " + results[i].rating);
          var gifImage = $("<img>");
          gifImage.attr("src", results[i].images.fixed_height_still.url);
          gifImage.attr("data-still",results[i].images.fixed_height_still.url)
          gifImage.attr("data-animate",results[i].images.fixed_height.url)
          gifImage.attr("data-state","still");
          gifImage.addClass("gif")
          gifDiv.append(p);
          gifDiv.append(gifImage);
          $("#gifs-view").prepend(gifDiv);
        }

      });
  }

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < categories.length; i++) {
      var a = $("<button>");
      a.addClass("gifs-btn");
      a.attr("data-name", categories[i]);
      a.text(categories[i]);
      $("#buttons-view").append(a);
    };
    
  };

  function animate() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  };

  $("#add-gifCat").on("click", function(event) {
    event.preventDefault();
    var gifCategory = $("#gifCat-input").val().trim();
    categories.push(gifCategory);
    renderButtons();
    console.log(categories);
    $("#gifCat-input").val("");
  });

  $(document).on("click", ".gifs-btn", displayGifs);
  $(document).on("click", ".gif",animate);
  renderButtons();

  
    
 

 