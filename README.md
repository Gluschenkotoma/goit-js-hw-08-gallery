<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Homework 8</title>
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
    <!-- В этот список добавляй элементы галереи -->
    <ul class="gallery js-gallery"></ul>

    <!--
      Модальное окно для полноразмерного изображения
      Для того чтобы открыть, необходимо добавить на div.lightbox CSS-класс is-open
    -->
    <div class="lightbox js-lightbox">
      <div class="lightbox__overlay"></div>

      <div class="lightbox__content">
        <img class="lightbox__image" src="" alt="" />
      </div>

      <button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"
      ></button>
    </div>

    <script src="app.js" type="module"></script>

  </body>
</html>

:root {
--timing-function: cubic-bezier(0.4, 0, 0.2, 1);
--animation-duration: 250ms;
}

html {
box-sizing: border-box;
}

_,
_::before,
\*::after {
box-sizing: inherit;
}

body {
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
background-color: #fff;
color: #212121;
}

.gallery {
display: grid;
width: 1200px;
grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
grid-auto-rows: 240px;
grid-gap: 12px;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;
}

.gallery\_\_item {
position: relative;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.gallery\_\_image:hover {
transform: scale(1.03);
}

.gallery\_\_image {
height: 100%;
width: 100%;
object-fit: cover;
transition: transform var(--animation-duration) var(--timing-function);
}

.gallery\_\_link {
display: block;
text-decoration: none;
height: 100%;
}

.gallery\_\_link:hover {
cursor: zoom-in;
}

/_ Lightbox _/
.lightbox {
display: flex;
align-items: center;
justify-content: center;
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
opacity: 0;
pointer-events: none;
transition: opacity var(--animation-duration) var(--timing-function);
}

.lightbox.is-open {
opacity: 1;
pointer-events: initial;
}

.lightbox\_\_overlay {
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.8);
}

.lightbox\_\_content {
transform: scale(0.95);
transition: transform var(--animation-duration) var(--timing-function);
}

.lightbox.is-open .lightbox\_\_content {
transform: scale(1);
}

.lightbox\_\_image {
display: block;
width: auto;
height: auto;
max-height: 100vh;
max-width: 100vw;
}

.lightbox\_\_button {
position: absolute;
top: 8px;
right: 8px;
display: flex;
align-items: center;
justify-content: center;
width: 48px;
height: 48px;
padding: 0;
margin: 0;
border: none;
border-radius: 50%;
background-color: transparent;
color: #fff;
cursor: pointer;
transition: background-color var(--animation-duration) var(--timing-function);
outline: none;
background-image: url('../images/icon-close.svg');
background-position: center;
background-size: 60%;
background-repeat: no-repeat;
}

.lightbox**button:hover,
.lightbox**button:focus {
background-color: rgba(0, 0, 0, 0.5);
}
