<script>
// @ts-nocheck

export let itemCount = 1;

document.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        document.getElementById("add-item-button").click();
    };
});
</script>

<ul class="list-group m-3" id="items"></ul>

<div class="input-group mb-3 fixed-bottom">
    <input type="text" class="form-control ms-3" placeholder="Type a list item here" id="add-item-input">
    <button class="btn btn-primary input-group-text me-3" id="add-item-button" on:click={() => {
        let li = document.createElement("li");
        let input = document.getElementById("add-item-input");
        let items = document.getElementById("items");

        li.classList.add("list-group-item");
        li.id = `item-${itemCount}`;
        li.innerHTML = input.value;
        input.value = "";
        items.appendChild(li);
        itemCount++;
    }}>Add</button>
</div>