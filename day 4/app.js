let addToDo = document.getElementById('addToDo');
let toDocontainer = document.getElementById('toDocontainer');
let inputField = document.getElementById('inputField');

addToDo.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dbclick', function(){
        toDocontainer.removeChild(paragraph);
    })
})