window.addEventListener("load",()=>{

const slides=document.querySelectorAll(".slides img");
let index=0;

function change(){
    slides[index].classList.remove("active");
    index=(index+1)%slides.length;
    slides[index].classList.add("active");
}

setInterval(change,5000);

});

const quotes = document.querySelectorAll(".quote-section");

window.addEventListener("scroll",()=>{
    quotes.forEach(q=>{
        const top = q.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            q.classList.add("show");
        }
    });
});
