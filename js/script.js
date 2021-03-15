const modal = document.querySelector(".modal");
const popup = document.querySelector(".wap_content__button");
const close = modal.querySelector(".modal_close");
const formModal = modal.querySelector("form");
const login = modal.querySelector(".form_name");
const email = modal.querySelector(".form_email");

// открытие окна
popup.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    modal.classList.add("modal_show");
    document.body.style.overflow = "hidden";
});


// закрытие окна
close.addEventListener("click", function (evt) {
    modal.classList.remove("modal_show");
    modal.classList.remove("modal_error"); 
    document.body.style.overflow = "";
});


// отправка формы
formModal.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!login.value || !email.value ) {
        modal.classList.remove("modal_error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal_error");
    } else {
        this.submit();
    }
});

//закрытие на esc
document.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape" && modal.classList.contains("modal_show")) {
        modal.classList.remove("modal_show");
        modal.classList.remove("modal_error");  
    }

});
