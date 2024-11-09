var allproducts = document.querySelectorAll(".pod-title");
var btn = document.querySelectorAll(".btn1");
var btn2 = document.querySelector("#btn2");
var div = document.querySelector("#price-side");
var div2 = document.querySelector("#price")
var icon = document.querySelector(".fin")
var totalprice = 0;

allproducts.forEach(function (item, index) {
   btn[index].onclick = function () {
      totalprice += +(item.getAttribute("price"));
      div.innerHTML += item.textContent + "<br>";
      if (div.innerHTML != "") {
         div.style.display = "block";
         div2.style.display = "block";
         btn2.style.display = "block";
         icon.style.display = "block";
      }
   };
});

btn2.onclick = function () {
   div2.innerHTML = "Total price : " + totalprice + "$"
};

