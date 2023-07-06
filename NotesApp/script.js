let itemsEl = document.querySelector(".items");
let addBtn = document.querySelector(".container .add");
let overlay = document.querySelector(".overlay");
let addText = document.querySelector(".addText");
overlay.addEventListener("click", (e) => {
    if (!addText.contains(e.target)) {
        overlay.style.display = "none";
    }
});
const colorArr = ["brown","tangerine","gray","orange","green"];
const randomCol = () => {
    let random = colorArr[Math.floor(Math.random()*colorArr.length)];
    return random;
}
const createElement = (color, message) => {
  const newCard = document.createElement("div");
  newCard.innerHTML = `<div class="card ${color}">
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    <p id="msgNotes">${message}</p>
    <div class="flex">
        <div class="date">${currentTime()}</div>
        <button class="edit"><i class="fa fa-pencil"></i></button>
    </div>
  </div>`;

  let deleteBtn = newCard.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    deleteNote(newCard, message);
  });

  let editBtn = newCard.querySelector(".edit");
  editBtn.addEventListener("click", () => {
    editNotes(newCard, message);
  });

  return newCard;
};

const deleteNote = (card, message) => {
  let savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    let notesArray = JSON.parse(savedNotes);
    let index = notesArray.indexOf(message);
    if (index !== -1) {
      notesArray.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesArray));
    }
  }
  card.remove();
};

const editNotes = (newCard, message) => {
  overlay.style.display = "flex";
  let textInput = document.querySelector("textarea");
  textInput.value = message;
  let savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    let notesArray = JSON.parse(savedNotes);
    let index = notesArray.indexOf(message);
    if (index !== -1) {
      textInput.addEventListener("input", (e) => {
        notesArray[index] = e.target.value;
      });
    }
    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  deleteNote(newCard, message);
};

addBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

let currentTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (hour > 12) {
    hour = hour - 12;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  if (second < 10) {
    second = `0${second}`;
  }

  let fullTime = `${hour}:${minute}:${second}`;
  return fullTime;
};

let buttons = document.querySelectorAll(".buttons button");
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    let color = element.getAttribute("class");
    overlay.style.display = "flex";
  });
});

let cardBtn = document.querySelector("#addNote");
let alert = document.querySelector(".alert");

cardBtn.addEventListener("click", () => {
  addNotes(randomCol());
});

const addNotes = (colors) => {
  let textInput = document.querySelector("textarea");
  if (textInput.value === "") {
    setTimeout(() => {
      alert.classList.add("danger");
      alert.innerHTML = "Please add a note.";
    }, 0);
    setTimeout(() => {
      alert.classList.remove("danger");
      alert.innerHTML = "";
      overlay.style.display = "none";
    }, 1000);
    return;
  } else {
    let savedNotes = localStorage.getItem("notes");
    let notesArray = savedNotes ? JSON.parse(savedNotes) : [];
    notesArray.push(textInput.value);
    localStorage.setItem("notes", JSON.stringify(notesArray));

    let textarea = createElement(colors, textInput.value);
    textInput.value = "";
    overlay.style.display = "none";
    itemsEl.prepend(textarea);

    setTimeout(() => {
      alert.classList.add("success");
      alert.innerHTML = "Note saved.";
    }, 0);
    setTimeout(() => {
      alert.classList.remove("success");
      alert.innerHTML = "";
    }, 1000);
  }
};

const loadNotes = () => {
  let savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    let notesArray = JSON.parse(savedNotes);
    notesArray.forEach((note) => {
      let finalNotes = createElement(randomCol(), note);
      itemsEl.append(finalNotes);
    });
  }
};

loadNotes();
