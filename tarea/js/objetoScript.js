let itemList = localStorage.getItem('itemList');
let items = itemList ? JSON.parse(itemList) : [];
showItems();

function addItem() {
    let nameItem = document.getElementById('itemInput').value;
    let descripItem = document.getElementById('descripInput').value;
    let valueItem = document.getElementById('valueInput').value;

    if (nameItem && descripItem && valueItem) {
        items.push({ 'nombreArticulo': nameItem, 'descripArticulo': descripItem, 'valorArticulo': valueItem });
        showItems();
    }
}

function showItems() {
    document.getElementById('itemInput').value = '';
    document.getElementById('descripInput').value = '';
    document.getElementById('valueInput').value = '';

    let html = '';

    items.forEach((element, index) => {
        html += `<div class="col-4 mb-3">${element.nombreArticulo}</div>`;
        html += `<div class="col-4 mb-3">${element.descripArticulo}</div>`;
        html += `<div class="col-2 mb-3">${element.valorArticulo}</div>`;
        html += `<div class="col-2"><a href="#" class="btn btn-danger" onclick="deleteItem(${index})">X</a></div>`;
    });

    localStorage.setItem('itemList', JSON.stringify(items));
    document.getElementById('items').innerHTML = html;
}

function deleteItem(item) {
    items.splice(item, 1);
    showItems();
}

function goToIndex() {
    location.href = "./index.html";
}
