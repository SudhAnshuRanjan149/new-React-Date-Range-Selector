export const addClassToMultipleDivs = (selectClas, addClas) => {
  const boxes = Array.from(document.getElementsByClassName(selectClas));

  boxes.forEach((box) => {
    // ✅ Add class to each element
    box.classList.add(addClas);
  });
};
