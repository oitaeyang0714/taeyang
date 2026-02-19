const imgs = document.querySelectorAll(".grid img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const thumbs = document.getElementById("thumbs");
const dateText = document.getElementById("date");

let index = 0;

/* 썸네일 생성 */
imgs.forEach((img,i)=>{
    const t = document.createElement("img");
    t.src = img.src;
    t.onclick = ()=> show(i);
    thumbs.appendChild(t);
});

/* 열기 */
imgs.forEach((img,i)=>{
    img.onclick = ()=>{
        modal.classList.add("show");
        show(i);
    }
});

function show(i){
    index = i;
    modalImg.src = imgs[i].src;
    dateText.textContent = imgs[i].dataset.date;

    document.querySelectorAll(".thumbs img").forEach(t=>t.classList.remove("active"));
    thumbs.children[i].classList.add("active");
}

/* 닫기 */
closeBtn.onclick=()=> modal.classList.remove("show");

modal.onclick=e=>{
    if(e.target===modal) modal.classList.remove("show");
};

/* 다음 이전 */
next.onclick=()=> show((index+1)%imgs.length);
prev.onclick=()=> show((index-1+imgs.length)%imgs.length);

/* 키보드 */
document.addEventListener("keydown",e=>{
    if(!modal.classList.contains("show")) return;

    if(e.key==="ArrowRight") next.click();
    if(e.key==="ArrowLeft") prev.click();
    if(e.key==="Escape") modal.classList.remove("show");
});
