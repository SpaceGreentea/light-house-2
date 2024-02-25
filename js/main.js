'use strict';

{
  // ハンバーガーメニュー
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  const navi = document.getElementById("hamburger-navigation");

  const mask = document.querySelector(".mask");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle("active");
    mask.classList.toggle("active");
  });

  // マスク部分
  mask.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle("active");
    mask.classList.toggle("active");
  });

  // スクロールトップ　ボタン スムーススクロール
  const to_top = document.getElementById("to-top");

  to_top.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // スクロールトップ　ボタン　表示、非表示
  window.addEventListener("scroll", function() {
    const scroll = window.scrollY;
    // console.log(scroll);

    if (scroll > 700) {
      to_top.classList.add("active");
    } else {
      to_top.classList.remove("active");
    }
  });
}