const h1=document.createElement("h1");
const body=document.querySelector("body");
h1.innerHTML="to do list";
h1.className="page-header";
body.append(h1);
body.className="container";
////////Delete button


const toDoList=document.createElement("ul");
toDoList.className="list-group";
const tasks=["wake up","eat breakfast","code"];
body.append(toDoList);


function renderList(){
    toDoList.innerHTML ="";
    tasks.forEach((element,index) => {
        const items=document.createElement("li");
        items.className="list-group-item";
        const deleteButton=document.createElement("button");
        deleteButton.innerHTML="Delete";
        deleteButton.className="btn btn-danger";
        const updateButton=document.createElement("button");
        updateButton.innerHTML="Update";
        updateButton.className="btn btn-info"
        items.innerHTML=element;
        items.appendChild(deleteButton);
        items.appendChild(updateButton);
        toDoList.append(items);
        deleteButton.addEventListener('click',()=>{deleteItemsList(index)});
        updateButton.addEventListener('click',()=>{updateItemsList(index)});
    });
}

renderList();
////////////////Add button
const addItem=document.createElement("button");
addItem.innerHTML="add to list";
addItem.className="btn btn-primary";
body.append(addItem);
addItem.addEventListener('click',addToList);

function addToList(){
    const inputValue = input.value;
    tasks.push(inputValue);
    renderList();
}

const input=document.createElement("input");
input.className="form"
input.placeholder="to do";
body.append(input);

function deleteItemsList(index){
    tasks.splice(index,1);
    renderList();
}

function updateItemsList(index){
    let editedItem = prompt("Please enter your task");
    tasks.splice(index,1,editedItem);
    renderList()
}