var warriors = [
  {
    name: "Bob",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Jerry",
    damage: 1,
    health: 12,
    warrior: true
  },
  {
    name: "Mavis",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Morty",
    damage: 4,
    health: 10,
    warrior: true
  },
  {
    name: "Shorty",
    damage: 10,
    health: 3,
    warrior: false
  },
  {
    name: "Porty",
    damage: 1,
    health: 14,
    warrior: true
  },
  {
    name: "Perry",
    damage: 2,
    health: 9,
    warrior: true
  },
  {
    name: "Larry",
    damage: 2,
    health: 17,
    warrior: false
  }
];

for (var i = 0; i < warriors.length; i++) {
  if (
    warriors[i].health >= 10 &&
    warriors[i].damage >= 2 &&
    warriors[i].warrior == true
  ) {
    var ele = document.createElement("div");
    var eleName = document.createElement("h1");
    var eleHealth = document.createElement("h4");
    var eleDamage = document.createElement("h4");
    var eleWarrior = document.createElement("h4");

    if (warriors[i].name.includes("A") || warriors[i].name.includes("a")) {
      ele.style.color = "red";
    }

    eleName.innerHTML = warriors[i].name;
    eleHealth.innerHTML = "Health: " + warriors[i].health;
    eleDamage.innerHTML = "Damage: " + warriors[i].damage;
    ele.appendChild(eleName);
    ele.appendChild(eleHealth);
    ele.appendChild(eleDamage);
    ele.appendChild(eleWarrior);

    document.body.appendChild(ele);
  }
}