<script>
    // @ts-nocheck

    export let itemCount = 0;
    export let items = [];
</script>

<main>
    <ul class="list-group m-3" id="items"></ul>
    <br>
    <br>

    <div class="input-group mb-3 fixed-bottom d-print-none">
        <input type="text" class="form-control ms-3" placeholder="Type a list item here" id="add-item-input" on:keydown={(event) => {
            if (event.key == "Enter") {
                document.getElementById("add-item-button").click();
            };
        }}>
        <button class="btn btn-primary input-group-text me-3" id="add-item-button" on:click={() => {
            let li = document.createElement("li");
            let input = document.getElementById("add-item-input");
            let item = document.getElementById("items");

            li.classList.add("list-group-item", "text-break");
            li.id = `item-${itemCount}`;
            li.innerHTML = input.value;
            items.push(input.value);
            input.value = "";
            item.appendChild(li);
            itemCount++;
        }}>Add</button>
    </div>
</main>