var cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

$(document).ready(function() {
  var memoryGame = new MemoryGame(cards);
  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
  var html = "";
  memoryGame.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += "</div>";
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += "</div>";
    html += "</div>";
  });
  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  $(".back").on("click", function(e) {
    if (memoryGame.pickedCards.length < 2) {
      memoryGame.pickedCards.push($(this).attr("name"));
      $(this).addClass("visible");
      if (memoryGame.pickedCards.length > 1) {
        $('.front, .back').addClass('blocked');
        if (
          memoryGame.checkIfPair(
            memoryGame.pickedCards[0],
            memoryGame.pickedCards[1]
          )
        ) {
          $(".visible").addClass("acertado");
        } else {
          setTimeout(function() {
            $(".visible").removeClass("visible");
          }, 1500);
        }
        $("#pairs_clicked").html(memoryGame.pairsClicked);
        $("#pairs_guessed").html(memoryGame.pairsGuessed);
        memoryGame.pickedCards = [];
        $('.front,.back').removeClass('blocked');
      }
    }
    if (memoryGame.finished()) {
      console.log(memoryGame.pairsGuessed);
      alert("Enhorabuena, has ganado!");
    }
  });
});
