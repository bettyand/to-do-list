const list = document.getElementsByTagName("ul")[0];
const textInput = document.getElementsByTagName("input")[0];
textInput.value = "";
const button = document.getElementsByTagName("button")[0];
const listDefaults = document.getElementsByTagName("li");
listDefaults.map(this.onclick = e => list.removeChild(e.target));


button.onclick = e => {
    let newItem = document.createElement("li");
    textVal = textInput.value;
    newItem.textContent = textVal;
    newItem.onclick = e => list.removeChild(e.target);
    list.appendChild(newItem);
    textInput.value = "";
}
