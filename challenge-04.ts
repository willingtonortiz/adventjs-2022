type Box = {
  l: number;
  w: number;
  h: number;
};

const getVolume = ({ h, w, l }: Box) => h * w * l;

function fitsInOneBox(boxes: Box[]) {
  boxes.sort((a, b) => getVolume(a) - getVolume(b));

  for (let i = 1; i < boxes.length; i++) {
    const box1 = boxes[i - 1];
    const box2 = boxes[i];

    if (box1.l >= box2.l || box1.w >= box2.w || box1.h >= box2.h) {
      return false;
    }
  }

  return true;
}

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 },
//   { l: 3, w: 1, h: 3 },
// ];

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 3, w: 3, h: 3 },
//   { l: 2, w: 2, h: 2 },
// ];

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
];

console.log(fitsInOneBox(boxes));
