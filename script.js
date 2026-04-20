// スクロール時にふわっと表示
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
});

// スムーズスクロール
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ヘッダーをスクロールで小さくする
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.padding = "15px";
  } else {
    header.style.padding = "30px";
  }
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// モーダル
const modal = document.getElementById("modal");
const cards = document.querySelectorAll(".card");
const closeBtn = document.querySelector(".close");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    // リンククリックならモーダル出さない
    if (e.target.tagName === "A") return;

    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
