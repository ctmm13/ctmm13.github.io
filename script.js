"use strict";

const submit = document.querySelector(".submit");
submit.addEventListener("click", function () {
  // Giá trị của email
  const emailValue = document.getElementById("email").value;
  // Định dạng email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Kiểm tra email
  const check = emailValue.match(regex);
  // Các content cần hiện, ẩn
  const showContent = document.querySelector(".hide");
  const hideContent = document.querySelector(".show");
  // Code khi nhập gmail sai / không nhập
  const errorCode = document.querySelector(".tryagaincode");
  if (check) {
    showContent.style.display = "block";
    hideContent.style.display = "none";
  } else {
    errorCode.style.color = "red";
    errorCode.textContent = "Định dạng email không hợp lệ!";
  }
});

function view_move(element) {
  const view = element.querySelector(".items .view-button");
  view.style.visibility = "visible";
}

function view_out(element) {
  const view = element.querySelector(".items .view-button");
  view.style.visibility = "hidden";
}

function view_click(element) {
  const viewMore = element.querySelector(".item");
  const btn = element.querySelector(".view-button");
  const check = viewMore.classList.contains("hidden");
  if (check) {
    btn.addEventListener("click", function () {
      viewMore.classList.remove("hidden");
      btn.textContent = "▲ VIEW LESS";
    });
  } else {
    btn.addEventListener("click", function () {
      viewMore.classList.add("hidden");
      btn.textContent = "▼ VIEW MORE";
    });
  }
}
