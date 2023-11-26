var task = document.getElementById('task');

task.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    var data = this.elements.writeList.value;
    var list = document.querySelector('ol');
    var item = document.createElement('li');
    var text = document.createElement('p');

    text.textContent = data;
    this.elements.writeList.value = '';
    item.append(text);
    list.append(item);

    var rmvBtn = document.createElement('span');
    rmvBtn.classList.add('remove');
    item.append(rmvBtn);
    rmvBtn.addEventListener('click', deleteItem);
    item.addEventListener('click', doneItem);
}

function deleteItem(e) {
    this.parentElement.remove();
}

function doneItem(e) {
    this.classList.toggle('done');
}