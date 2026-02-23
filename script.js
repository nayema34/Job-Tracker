const items = document.querySelectorAll(".job-item");

const totalCount = document.getElementById("count-total");
const interviewCount = document.getElementById("count-interview");
const rejectedCount = document.getElementById("count-rejected");
const visibleCount = document.getElementById("visible-count");

const showAll = document.getElementById("show-all");
const showInterview = document.getElementById("show-interview");
const showRejected = document.getElementById("show-rejected");

const emptyBox = document.getElementById("no-data");

const data = [];

items.forEach(function (card) {

  const record = {
    element: card,
    status: "none"
  };

  data.push(record);

  const interviewBtn = card.querySelector(".btn-interview");
  const rejectBtn = card.querySelector(".btn-reject");
  const deleteBtn = card.querySelector(".remove-card");

  const interviewLabel = card.querySelector(".state-interview");
  const rejectLabel = card.querySelector(".state-reject");
  const noneLabel = card.querySelector(".state-none");

  interviewBtn.addEventListener("click", function () {

    record.status = "interview";

    interviewLabel.classList.remove("hidden");
    rejectLabel.classList.add("hidden");
    noneLabel.classList.add("hidden");

    updateStats();
  });

  rejectBtn.addEventListener("click", function () {

    record.status = "rejected";

    rejectLabel.classList.remove("hidden");
    interviewLabel.classList.add("hidden");
    noneLabel.classList.add("hidden");

    updateStats();
  });

  deleteBtn.addEventListener("click", function () {

    card.remove();

    for (let i = 0; i < data.length; i++) {
      if (data[i].element === card) {
        data.splice(i, 1);
        break;
      }
    }

    updateStats();
  });

});


function updateStats() {

  let interview = 0;
  let rejected = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "interview") interview++;
    if (data[i].status === "rejected") rejected++;
  }

  totalCount.innerHTML = data.length;
  visibleCount.innerHTML = data.length;
  interviewCount.innerHTML = interview;
  rejectedCount.innerHTML = rejected;
}


function applyFilter(type) {

  let visible = 0;

  for (let i = 0; i < data.length; i++) {

    if (type === "all" || data[i].status === type) {
      data[i].element.style.display = "block";
      visible++;
    } else {
      data[i].element.style.display = "none";
    }

  }

  visibleCount.innerHTML = visible;

  if (visible === 0) {
    emptyBox.classList.remove("hidden");
  } else {
    emptyBox.classList.add("hidden");
  }

}


showAll.addEventListener("click", function () {
  applyFilter("all");
});

showInterview.addEventListener("click", function () {
  applyFilter("interview");
});

showRejected.addEventListener("click", function () {
  applyFilter("rejected");
});

updateStats();