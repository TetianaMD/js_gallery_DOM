"use strict";
const gallery = document.querySelector(".gallery");
const clickHandler = (e)=>{
    e.preventDefault();
    const link = e.target.closest(".list-item__link");
    link;
    const largeImg = document.querySelector("#largeImg");
    largeImg.setAttribute("src", link.href);
};
gallery.addEventListener("click", clickHandler);

//# sourceMappingURL=index.f75de5e1.js.map
