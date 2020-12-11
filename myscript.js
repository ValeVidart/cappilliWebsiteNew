// import { tns } from "./node_modules/tiny-slider/src/tiny-slider"

var slider = tns({
  container: '.my-slider',
  items: 1,
  touch: true,
  gutter: 30,
  edgePadding: 30,
  loop: true,
  responsive: {
    640: {
      items: 2
    },
    900: {
      items: 3
    }
  }
});
