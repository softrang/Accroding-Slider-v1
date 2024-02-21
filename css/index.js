let Index = 3;
showSlides(Index);

function add(n) {
  showSlides((Index += n));
}

function present(n) {
  showSlides((Index = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img");
  let slideImg = document.querySelectorAll("#img1");
  if (n > slides.length) {
    Index = 1;
  }
  if (n < 1) {
    Index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.width = "5%";
  
    slides[i].style.transition = "all 1s";
    slideImg[i].style.objectFit = "cover";
  }
  slides[Index - 1].style.width = "100%";

 slideImg[Index - 1].style.width = "119%";
  slides[Index - 1].style.transition = "all 1s";

  
}