let images = [
  "./pics/scene00001.jpg",
  "./pics/scene00002.jpg",
  "./pics/scene00003.jpg",
  "./pics/scene00004.jpg",
  "./pics/scene00005.jpg",
  "./pics/scene00006.jpg",
  "./pics/scene00007.jpg",
  "./pics/scene00008.jpg",
  "./pics/scene00009.jpg",
  "./pics/scene00010.jpg",
  "./pics/scene00011.jpg",
  "./pics/scene00012.jpg",
  "./pics/scene00013.jpg",
  "./pics/scene00014.jpg",
  "./pics/scene00015.jpg",
  "./pics/scene00016.jpg",
  "./pics/scene00017.jpg",
  "./pics/scene00018.jpg",
  "./pics/scene00019.jpg",
  "./pics/scene00020.jpg",
  "./pics/scene00021.jpg",
  "./pics/scene00022.jpg",
  "./pics/scene00023.jpg",
  "./pics/scene00024.jpg",
  "./pics/scene00025.jpg",
  "./pics/scene00026.jpg",
  "./pics/scene00027.jpg",
  "./pics/scene00028.jpg",
  "./pics/scene00029.jpg",
  "./pics/scene00030.jpg",
  "./pics/scene00031.jpg",
  "./pics/scene00032.jpg",
  "./pics/scene00033.jpg",
  "./pics/scene00034.jpg",
  "./pics/scene00035.jpg",
  "./pics/scene00036.jpg",
  "./pics/scene00037.jpg",
  "./pics/scene00038.jpg",
  "./pics/scene00039.jpg",
  "./pics/scene00040.jpg",
  "./pics/scene00041.jpg",
  "./pics/scene00042.jpg",
  "./pics/scene00043.jpg",
  "./pics/scene00044.jpg",
  "./pics/scene00045.jpg",
  "./pics/scene00046.jpg",
  "./pics/scene00047.jpg",
  "./pics/scene00048.jpg",
  "./pics/scene00049.jpg",
  "./pics/scene00050.jpg",
  "./pics/scene00051.jpg",
  "./pics/scene00052.jpg",
  "./pics/scene00053.jpg",
  "./pics/scene00054.jpg",
  "./pics/scene00055.jpg",
  "./pics/scene00056.jpg",
  "./pics/scene00057.jpg",
  "./pics/scene00058.jpg",
  "./pics/scene00059.jpg"
];

function preloadImages(array) {
  if (!preloadImages.list) {
    preloadImages.list = [];
  }
  var list = preloadImages.list;
  for (var i = 0; i < array.length; i++) {
    var img = new Image();
    img.onload = function() {
      var index = list.indexOf(this);
      if (index !== -1) {
        // remove image from the array once it's loaded
        // for memory consumption reasons
        list.splice(index, 1);
      }
    };
    list.push(img);
    img.src = array[i];
  }
}

preloadImages(images);

const main = document.getElementById("imagesequence");
const text = main.querySelector("h1");

let obj = { curImg: 0 };

let tween = TweenMax.to(obj, 0.5, {
  curImg: images.length - 1,
  roundProps: "curImg",
  immediateRender: true,
  ease: Linear.easeNone,
  onUpdate: () => {
    document.getElementById("santaimg").src = images[obj.curImg];
  }
});

let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: imagesequence,
  triggerHook: 0
})
  .setTween(tween)
  .addIndicators()
  .setPin(imagesequence)
  .addTo(controller);

const textAnim = TweenMax.fromTo(text, 5, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: imagesequence,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);
