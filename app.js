//*********************
// Select Item
//*********************
const scoreContainer = document.querySelector(".score-container");
const scoreNumber = document.querySelectorAll(".score-number");
const ratingSubmit = document.querySelector(".rating-submit");
const showScore = document.querySelector(".show-score");
const ratingsWrapper = document.querySelector(".ratings-wrapper");
const thankWrapper = document.querySelector(".thank-wrapper");

//*********************
// Event Listener
//*********************
scoreContainer.addEventListener("click", selectRate);
ratingSubmit.addEventListener("click", submitScore);

//*********************
// Function
//*********************

// Select Ratings
function selectRate(e) {
  if (e.target.classList.contains("score-number")) {
    // remove active classes from other button
    scoreNumber.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");
  }
}

function submitScore() {
  let dataRate;
  let chosen = false;
  scoreNumber.forEach((btn) => {
    if (btn.classList.contains("active")) {
      dataRate = btn.dataset.rate;
      chosen = true;
    }
  });

  if (chosen === true) {
    ratingsWrapper.style.display = "none";
    showScore.innerHTML = `You selected ${dataRate} out of 5`;
    thankWrapper.style.display = "flex";
  } else {
    alert("Select a Rating before submit");
  }
}
