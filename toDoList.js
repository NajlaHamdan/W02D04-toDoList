const h1=document.createElement("h1");
const body=document.querySelector("body");
h1.innerHTML="to do list";
body.append(h1);

////////Delete button


const toDos=document.createElement("ul");
const toDo=["wake up","eat breakfast","code"];
body.append(toDos);


function renderList(){
    toDos.innerHTML ="";
    toDo.forEach((element,index) => {
        const items=document.createElement("li");
        const deleteButton=document.createElement("button");
        deleteButton.innerHTML="Delete";
        const updateButton=document.createElement("button");
        updateButton.innerHTML="Update";
        items.innerHTML=element;
        items.appendChild(deleteButton);
        items.appendChild(updateButton);
        toDos.append(items);
        deleteButton.addEventListener('click',()=>{deleteItemsList(index)});
        updateButton.addEventListener('click',()=>{updateItemsList(index)});
    });
}

renderList();
////////////////Add button
const addItem=document.createElement("button");
addItem.innerHTML="add to list";
body.append(addItem);
addItem.addEventListener('click',addToList);

function addToList(){
    const inputValue = input.value;
    toDo.push(inputValue);
    renderList();
}

const input=document.createElement("input");
input.placeholder="to do";
body.append(input);

function deleteItemsList(index){
    toDo.splice(index,1);
    renderList();
}

function updateItemsList(index){
    let editedItem = prompt("Please enter your item");
    toDo.splice(index,1,editedItem);
    renderList()
}