const tabBtn = document.querySelector('.spbtn');
const i = document.querySelector('.fas');
const links = document.querySelector('.links');

tabBtn.addEventListener("click", () => {
    if (i.classList.contains('fa-bars')){
        i.classList.remove('fa-bars');
        i.classList.add('fa-times');
    }
    else{
        i.classList.remove('fa-times');
        i.classList.add('fa-bars');
    }
    links.classList.toggle('show-links');
})