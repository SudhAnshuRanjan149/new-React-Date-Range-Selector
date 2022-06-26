export const removeClassFromMultipleDiv = (clas) => {
  const boxes = Array.from(document.getElementsByClassName(clas));

  boxes.forEach((box) => {
    box.classList.remove(clas);
  });
};
