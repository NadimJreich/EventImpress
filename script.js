let Home = document.getElementById("Home");
let Festivals = document.getElementById("Festivals");
let Parties = document.getElementById("Parties");
let Showcasing = document.getElementById("Showcasing");
let Businesses = document.getElementById("Businesses");
let Sports = document.getElementById("Sports");

let homesection = document.getElementById("homesection");
let festsec = document.getElementById("festsec");
let partiessec = document.getElementById("partiessec");
let showsec = document.getElementById("showsec");
let businesssec = document.getElementById("businesssec");
let sportsec = document.getElementById("sportsec");


Home.addEventListener("click", function () {
    Home.classList.add("active");
    homesection.style.display = "flex";
    homesection.style.flexDirection = "column";

   
    Festivals.classList.remove("active");
    Parties.classList.remove("active");
    Showcasing.classList.remove("active");
    Sports.classList.remove("active");
    Businesses.classList.remove("active");

    festsec.style.display = "none";
    partiessec.style.display = "none";
    showsec.style.display = "none";
    sportsec.style.display = "none";
    businesssec.style.display = "none";
});

Festivals.addEventListener("click", function () {
Festivals.classList.add("active");
  festsec.style.display = "flex";
  festsec.style.flexDirection = "column";

  Home.classList.remove("active");
  Parties.classList.remove("active");
  Showcasing.classList.remove("active");
  Businesses.classList.remove("active");
  Sports.classList.remove("active");

  homesection.style.display = "none";
  partiessec.style.display = "none";
  showsec.style.display = "none";
  businesssec.style.display = "none";
  sportsec.style.display = "none";
});

Parties.addEventListener("click", function () {
    Parties.classList.add("active");
    partiessec.style.display = "flex";
    partiessec.style.flexDirection = "column";


    Home.classList.remove("active");
    Festivals.classList.remove("active");
    Showcasing.classList.remove("active");
    Businesses.classList.remove("active");
    Sports.classList.remove("active");

    homesection.style.display = "none";
    festsec.style.display = "none";
    showsec.style.display = "none";
    businesssec.style.display = "none";
    sportsec.style.display = "none";
});

Showcasing.addEventListener("click", function () {
    Showcasing.classList.add("active");
    showsec.style.display = "flex";
    showsec.style.flexDirection = "column";

    Home.classList.remove("active");
    Festivals.classList.remove("active");
    Parties.classList.remove("active");
    Businesses.classList.remove("active");
    Sports.classList.remove("active");

    homesection.style.display = "none";
    festsec.style.display = "none";
    partiessec.style.display = "none";
    businesssec.style.display = "none";
    sportsec.style.display = "none";
    
});

Businesses.addEventListener("click", function () {
    Businesses.classList.add("active");
    businesssec.style.display = "flex";
    businesssec.style.flexDirection = "column";

    Home.classList.remove("active");
    Festivals.classList.remove("active");
    Parties.classList.remove("active");
    Showcasing.classList.remove("active");
    Sports.classList.remove("active");

    homesection.style.display = "none";
    festsec.style.display = "none";
    partiessec.style.display = "none";
    showsec.style.display = "none";
    sportsec.style.display = "none";
});


Sports.addEventListener("click", function () {
    Sports.classList.add("active");
    sportsec.style.display = "flex";
    sportsec.style.flexDirection = "column";

   
    Festivals.classList.remove("active");
    Parties.classList.remove("active");
    Showcasing.classList.remove("active");
    Home.classList.remove("active");
    Businesses.classList.remove("active");

    festsec.style.display = "none";
    partiessec.style.display = "none";
    showsec.style.display = "none";
    homesection.style.display = "none";
    businesssec.style.display = "none";
});