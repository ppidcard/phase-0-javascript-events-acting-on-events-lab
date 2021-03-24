// Your code here

const dodger = document.getElementById("dodger");


function moveDodgerLeft() {
    const left_ = dodger.style.left.replace("px", "");
    const left = parseInt(left_, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
function moveDodgerRight() {
    const left_ = dodger.style.left.replace("px", "");
    const left = parseInt(left_, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }


  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  }); 