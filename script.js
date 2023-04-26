let items = [];

function addTask() {
    const newItem = document.getElementById("inputText").value;
    if (newItem !== "") {
        items.push(newItem);
        displayList();
        document.getElementById("inputText").value = "";
    }
}

function displayList() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        list.appendChild(li);


        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
            li.remove();
        })
    }
}





