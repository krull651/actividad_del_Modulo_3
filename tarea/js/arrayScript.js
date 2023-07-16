let itemList = localStorage.getItem('itemList');
let items = itemList ? itemList.split(',') : [];
showItems();

function addItem() {
    let item = document.getElementById('itemInput').value;
    item = item.split(',');

    for (let i = 0; i < item.length; i++) {
        if (item[i]) {
            items.push(item[i]);
            showItems();
        }
    }
}

function showItems() {
    document.getElementById('itemInput').value = '';
    let html = '';

    for (let i = 0; i < items.length; i++) {
        html += `<div class="col-10 mb-3">${items[i]}</div>`;
        html += `<div class="col"><a href="#" class="btn btn-danger" onclick="deleteItem(${i})">X</a></div>`;
    }

    localStorage.setItem('itemList', items);
    document.getElementById('items').innerHTML = html;
}

function deleteItem(item) {
    items.splice(item, 1);
    showItems();
}

function goToIndexObjeto() {
    location.href = "./index-objeto.html";
}
