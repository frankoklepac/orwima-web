
var modal = document.getElementById("abilityModal");


var abilities = document.querySelectorAll(".ability img");

abilities.forEach(function(ability) {
  ability.addEventListener("click", function() {

    var iconSrc = this.src;
    var abilityName = this.alt;
    var abilityDescription = this.dataset.description; 

    document.getElementById("abilityIcon").src = iconSrc;
    document.getElementById("abilityName").innerText = abilityName;
    document.getElementById("abilityDescription").innerText = abilityDescription;

    modal.style.display = "block";
  });
});
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var ability_list = document.getElementsByClassName("ability");

for (var i = 0; i < ability_list.length; i++) {
  ability_list[i].addEventListener("mouseover", function() {
    this.querySelector(".ability-info").style.display = "block";
  });

  ability_list[i].addEventListener("mouseout", function() {
    this.querySelector(".ability-info").style.display = "none";
  });
}