const burger = document.querySelector(".burger");
const ulList = document.querySelector(".ul-list");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

burger.addEventListener("click", function (e) {
  ulList.classList.toggle("dropDownUlList");
  line1.classList.toggle("line1Active");
  line2.classList.toggle("line2Active");
  line3.classList.toggle("line3Active");
});
