var modal = document.querySelector(".modal");
var popup = document.querySelector(".wap_content__button");
var close = modal.querySelector(".modal_close");
var formModal = modal.querySelector("form");
var formName = modal.querySelector("[name=send_us_name]");
var formEmail = modal.querySelector("[name=send_us_email]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("Name");
} catch (err) {
    isStorageSupport = false;
}

popup.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal_show");

    if (storage) {
        formName.value = storage;
        formEmail.focus();
    } else {
        formName.focus();

    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal_show");
    modal.classList.remove("modal_error");
});

formModal.addEventListener("submit", function (evt) {
    if (!formName.value) {
        evt.preventDefault();
        modal.classList.remove("modal_error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
        formName.focus();
    } else if (!formEmail.value) {
        evt.preventDefault();
        modal.classList.remove("modal_error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal_error");
        formEmail.focus();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("Name", formName.value);
            localStorage.setItem("Email", formEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal.classList.contains("modal_show")) {
            modal.classList.remove("modal_show");
            modal.classList.remove("modal_error");
        }
    }
});