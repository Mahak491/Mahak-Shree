const draggableItems = document.querySelectorAll('.draggable');
const droppableArea = document.querySelector('.right-container');
const successMessage = document.createElement('p');
successMessage.className = 'success-message';
successMessage.textContent = 'Item dropped successfully!';

draggableItems.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

droppableArea.addEventListener('dragover', dragOver);
droppableArea.addEventListener('dragenter', dragEnter);
droppableArea.addEventListener('dragleave', dragLeave);
droppableArea.addEventListener('drop', drop);

function dragStart(e) {
  this.classList.add('dragging');
}

function dragEnd(e) {
  this.classList.remove('dragging');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('drag-over');
}

function dragLeave() {
  this.classList.remove('drag-over');
}

function drop(e) {
  e.preventDefault();
  this.classList.remove('drag-over');
  const draggedItem = document.querySelector('.dragging');
  this.appendChild(draggedItem);
  this.appendChild(successMessage);
}

function reset() {
  const leftContainer = document.querySelector('.left-container');
  const rightContainer = document.querySelector('.right-container');
  leftContainer.innerHTML = `
  <h3>Draggable Items</h3>
  <img src="./images/image1.jpg" class="draggable" draggable="true">
  <img src="./images/image2.jpg" class="draggable" draggable="true">
  <img src="./images/image3.jpg" class="draggable" draggable="true">
  <img src="./images/image4.jpg" class="draggable" draggable="true">
  <img src="./images/image5.jpg" class="draggable" draggable="true">    
  `;
  rightContainer.innerHTML = '<h3>Droppable Area</h3>';
  successMessage.remove();
}
