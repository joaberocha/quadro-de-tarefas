const columns = document.querySelectorAll(".column__cards");


let draggedcard;

const dragstart = (event) => {
    draggedcard = event.target;
    console.log(draggedcard);
};

const dragover = (event) => {
    event.preventDefault();
};

const dragenter = ({ target }) => {
    if (target.classList.contains("column__cards")) {
        target.classList.add("column--highlight");
    }
};

const dragleave = ({ target }) => {
    target.classList.remove("column--highlight");
};


const drop = ({ target }) => {
    if (target.classList.contains("column__cards")){
        target.classList.remove("column--highlight");
        target.append(draggedcard);
    }
    
            
};  

const createCard = ({target}) => {
    if (!target.classList.contains("column__cards")) return;
    const card = document.createElement("section")


    card.className = "card";
    card.draggable = "true";
    card.addEventListener("dragstart", dragstart);
    card.contentEditable = "true";
    card.addEventListener("focusout", () =>  {
        card.contentEditable = "false";

        if (!card.textContent) card.remove();
    });



    target.append(card);
    card.focus();

};



columns.forEach((column) => {
    column.addEventListener("dragover", dragover);
    column.addEventListener("dragenter", dragenter);
    column.addEventListener("dragleave", dragleave);
    column.addEventListener("drop", drop);
    column.addEventListener("dblclick", createCard);


    


});





