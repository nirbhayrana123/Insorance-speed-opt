
$(document).ready(function(){

 $(".hamberger").click(function(){  
  $(".main-header ul.manu").toggleClass("active");
});

$(".close-menu").click(function(){
  $(".main-header ul.manu").removeClass("active");
});

$(".main-header ul.manu  li a").click(function(){
  $(".main-header ul.manu").removeClass("active");
});







const buttons = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-modal");

// buttons.forEach((button) => button.addEventListener("mouseup", openModal));
// closeButton.addEventListener("mouseup", closeModal);
// overlay.addEventListener("mouseup", closeModal);
// document.addEventListener("keyup", escapeKeyHandle);

function openModal(e) {
	overlay.classList.remove("hidden");
	modal.classList.remove("hidden");
}

function closeModal(e) {
	overlay.classList.add("hidden");
	modal.classList.add("hidden");
}

function escapeKeyHandle(e) {
	if (e.key !== "Escape") return;
	closeModal();
}








 
 });
 
 
 //////////////////////MLT/////////////////////
  
 //DOM elements
 
  
  
  
  
  
  
  
  
  