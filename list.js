//Elemnt selectors
let alertBox = document.querySelector('.alert');
let form = document.querySelector('.listform');
let listItem = document.querySelector('.list-item');
let listInput = document.getElementById('list-input');
let listContainer = document.querySelector('.shoplist');

//Buttons
let editBtn = document.querySelectorAll('.edit');
let trashBtn = document.querySelector('.delete');
let clearBtn = document.querySelector('.clear')

// Validation

form.addEventListener('submit', (e) =>{
 e.preventDefault();
 console.log('Button click');
 validate();
})

let validate = () => {
 if(listInput.value === ''){
  alertBox.innerHTML = 'Cannot be blank!';
  console.log('Failure');
 } else{
  console.log('Success');
  alertBox.innerHTML = 'Succesfully added';
  alertBox.style.color = 'green';
  acceptItem();
 }
};

// Adding item

let item = {};

let acceptItem = () => {
 item['text'] = listInput.value;
 console.log(item);
 
 addItem();
};

let addItem = () => {
 listContainer.innerHTML +=
 ` <div class="list">
   <p class="list-item">${item.text}</p>
   <span class="btns">
   <button type="button" class="edit" onClick = "edit(this)">
      📝
   </button>
   <button type="button" class="delete" onClick = "deleteItem(this)">
    ×
   </button>
   </span> 
   </div>`;
 listInput.value = '';
};

//Deleting and editing

let deleteItem = (e) => {
 listItem.innerText = 'Done✓';
 e.parentElement.parentElement.remove();
};

let edit = (e) => {
 listInput.value = e.parentElement.previousElementSibling.innerHTML;
 e.parentElement.parentElement.remove();
};