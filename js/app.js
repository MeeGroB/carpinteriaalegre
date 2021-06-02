function imageGallery() {
  const highlight = document.querySelector(".gallery-hightlight");
  const previews = document.querySelectorAll(".room-preview img");

  previews.forEach(preview => {
    preview.addEventListener("click", function() {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach(preview => preview.classList.remove("room-active"));
      highlight.src = bigSrc;
      preview.classList.add("room-active");
    });
  });
}


imageGallery();

function imageGallery2() {
  const highlight = document.querySelector(".gallery-hightlight2");
  const previews = document.querySelectorAll(".room-preview2 img");

  previews.forEach(preview => {
    preview.addEventListener("click", function() {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach(preview => preview.classList.remove("room-active2"));
      highlight.src = bigSrc;
      preview.classList.add("room-active2");
    });
  });
}


imageGallery2();


function imageGallery3() {
  const highlight = document.querySelector(".gallery-hightlight3");
  const previews = document.querySelectorAll(".room-preview3 img");

  previews.forEach(preview => {
    preview.addEventListener("click", function() {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach(preview => preview.classList.remove("room-active3"));
      highlight.src = bigSrc;
      preview.classList.add("room-active3");
    });
  });
}


imageGallery3();
