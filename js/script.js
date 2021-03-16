const modal = document.querySelector(".modal");
const modalLabel = document.querySelector(".modal_label");
const popup = document.querySelector(".wap_content__button");
const close = modal.querySelector(".modal_close");
const formModal = modal.querySelector("form");
const login = formModal.querySelector(".form_name");
const email = formModal.querySelector(".form_email");
const letter = formModal.querySelector(".form_letter");
const inputs = modal.querySelectorAll ("input");


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
    if (!login.value || !email.value || !letter.value ) {
        modal.classList.remove("modal_error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal_error");
        for (const i = 0; i < inputs.length; i++)  {
            if (!inputs[i].value || !inputs[i].checkValidity()) {
                inputs[i].classList.add("invalid");
            }
            else {
                inputs[i].classList.remove("invalid");
            }
            if (!email.value || !email.checkValidity ()) {
                email.classList.add("invalid");
            }
            else {
                email.classList.remove("invalid");
            }
            if (!letter.value || !letter.checkValidity ()) {
                letter.classList.add("invalid");
            }
            else {
                letter.classList.remove("invalid");
            }
        }   
    }  else {
        this.submit();
    }
});

//formRemoveError(inputs);


//закрытие на esc
document.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape" && modal.classList.contains("modal_show")) {
        modal.classList.remove("modal_show");
        modal.classList.remove("modal_error");  
    }
});
