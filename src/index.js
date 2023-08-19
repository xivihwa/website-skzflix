document.getElementById("playButton").addEventListener("click", function () {
  window.location.href = "music.html";
});

document.getElementById("liveButton").addEventListener("click", function () {
  window.location.href = "live.html";
});

let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const allLang = ["en", "ua"];
const select = document.querySelector("select");
select.addEventListener("change", changeURLlanguage);

function changeURLlanguage() {
  let language = select.value;
  location.href = window.location.pathname + "#" + language;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;
  for (let key in langArr) {
    let element = document.querySelector(".lng-" + key);
    if (element) {
      element.innerHTML = langArr[key][hash];
    }
  }
}
changeLanguage();
