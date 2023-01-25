<script>
    // @ts-nocheck

    import { itemStatus } from "./lib/stores.js";

    var itemCount = 0;
</script>

<main>
    <ul class="list-group" id="items"></ul>
    <br>
    <br>

    <div class="input-group mb-3 fixed-bottom d-print-none">
        <input type="text" class="form-control ms-3" placeholder="Type a list item here" id="add-item-input" on:keydown={(event) => {
            if (event.key == "Enter") {
                document.getElementById("add-item-button").click();
            };
        }}>

        <button class="btn btn-primary input-group-text" id="add-item-button" on:click={() => {
            let li = document.createElement("li");
            let input = document.getElementById("add-item-input");
            let item = document.getElementById("items");

            li.classList.add("list-group-item", "text-break", "m-3", "rounded");
            li.innerHTML = `<span class="badge text-bg-${$itemStatus[1]}">${$itemStatus[0]}</span>
${input.value}
<span class="btn-close float-end d-print-none" data-bs-toggle="modal" data-bs-target="#deleteItem">
    <div class="visually-hidden">Remove item</div>    
</span>`;
            input.value = "";
            item.appendChild(li);
            itemCount++;
            itemStatus.set(["None", "light"]);
        }}>Add<span class="visually-hidden"> item</span></button>

        <button class="btn btn-primary dropdown-toggle me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Select a status</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li class="dropdown-item" on:click={() => {
                itemStatus.set(["To-Do", "danger"]);
            }}>To-Do</li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li class="dropdown-item" on:click={() => {
                itemStatus.set(["In Progress", "warning"]);
            }}>In Progress</li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li class="dropdown-item" on:click={() => {
                itemStatus.set(["Done", "success"]);
            }}>Done</li>
        </ul>
    </div>

    <div class="modal fade" id="deleteItem" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-md-down">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Delete this item?</h4>
                </div>
                <div class="modal-body">
                    Are you sure you want to delete this item? Once it's deleted, it can't be recovered.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="deleteItemConfirm" on:click={() => {
                        document.getElementById("deleteItem").addEventListener("show.bs.modal", (event) => {
                            document.getElementById("deleteItemConfirm").addEventListener("click", () => {
                                event.relatedTarget.parentNode.remove();
                            });
                        });
                    }}>Delete</button>
            </div>
        </div>
    </div>
</main>