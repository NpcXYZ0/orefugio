const menubt = document.querySelector(".menu-botao");
const menulateral = document.querySelector(".menu-lateral");

menubt.addEventListener("click", function(){
    menulateral.classList.toggle("active");
    menubt.classList.toggle("active");
})