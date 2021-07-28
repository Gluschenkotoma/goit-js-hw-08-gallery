import galleryItems from "./gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");

const overlay = document.querySelector(".lightbox__overlay");
const modalBtnClose = document.querySelector(".lightbox__button");

galleryContainer.addEventListener("click", modalOpen);
galleryContainer.insertAdjacentHTML(
  "beforeend",
  galleryCardMarkup(galleryItems)
);

function galleryCardMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link"
            href=${original}>
            <img class="gallery__image"
            src=${preview}
            data-source=${original}
                          alt=${description} />
                          </a>
                    </li>`;
    })
    .join("");
}

function modalOpen(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  modal.classList.add("is-open");
  modalImg.src = event.target.dataset.source;
  modalImg.alt = event.target.alt;
  overlay.addEventListener("click", modalCloseByOverlayClick);
  document.addEventListener("keydown", modalCloseByEsc);
  modalBtnClose.addEventListener("click", modalClose);
}

function modalClose(event) {
  modal.classList.remove("is-open");
  overlay.removeEventListener("click", modalCloseByOverlayClick);
  document.removeEventListener("keydown", modalCloseByEsc);
  modalBtnClose.removeEventListener("click", modalClose);
}

function modalCloseByEsc(event) {
  if (event.code === "Escape") {
    modalClose(event);
  }
}

function modalCloseByOverlayClick(event) {
  if (event.currentTarget === event.target) {
    modalClose(event);
  }
}

const BtnNext = document.querySelector("[data-action=scroll-right]");
const BtnPrevious = document.querySelector("[data-action=scroll-left]");
BtnNext.addEventListener("click", onNextSwitchImg);
BtnPrevious.addEventListener("click", onPreviousSwitchImg);

function onNextSwitchImg(images) {
  for (let i = 0; i < images.length - 1; i += 1) {
    if (modalImg.src === images[i].original) {
      modalImg.src = images[i + 1].original;
      modalImg.alt = images[i + 1].description;
      break;
    }
  }
}

function onPreviousSwitchImg(images) {
  for (let i = 0; i < images.length - 1; i -= 1) {
    console.log(img);
    if (modalImg.src === images[i].original) {
      modalImg.src = images[i - 1].original;
      modalImg.alt = images[i - 1].description;
      break;
    }
  }
}
// modalImg.src = event.target.dataset.source;
// modalImg.alt = event.target.alt;
