document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("loaded");
        initApp();
    }
});
const initApp = () => {
    const inputField = document.querySelector("#add-to-do");
    const addList = document.querySelector(".plus");
    const listItems = document.querySelector(".list-content");
    let UUID = 1;
    let count = 1;
    addList.addEventListener("click", (event) => {
        event.preventDefault();
        addToTheList();
    });

    const addToTheList = () => {
        const value = inputField.value.trim();
        if (count > 5) {
            addList.disabled = true;
            inputField.disabled = true;
            inputField.value = "Limit exceeded";
            inputField.classList.add("redWarn");
        }
        else {
            if (value) {
                const individualItem = document.createElement("article");
                individualItem.dataset.uuid = UUID;  // Store UUID as a data attribute
                individualItem.innerHTML = `
            <div class="content " >
            <input type="checkbox" class="checkBox" id="item${UUID}" name="item${UUID}" value="${value}">
            <label for="item${UUID}">${value}</label>
            <button class="delete"><img class="trash" src="./assets/trash.png"></button>
            </div>`;
                listItems.appendChild(individualItem);
                sessionStorage.setItem(`${UUID}-item`, value); //set sessionstorage
                inputField.value = "";  // Clear the input field
                UUID++;
                count++;
            }
            else {
                document.querySelector("dialog").showModal();
                document.querySelector(".Close").addEventListener("click", () => {
                    document.querySelector("dialog").close();
                });
                
            }
        }
    };
    listItems.addEventListener("click", (event) => {
        if (
            event.target.classList.contains("delete") ||
            event.target.closest(".delete")
        ) {
            const article = event.target.closest("article");
            const uuid = article.dataset.uuid; // Get the UUID from the data attribute
            sessionStorage.removeItem(`${uuid}-item`); // Remove from sessionStorage
            article.remove(); // Remove from the DOM

            //allow addition to list when an item is deleted till count reach 5
            if (count >= 5 && inputField.classList.contains("redWarn")) {
                addList.disabled = false;
                inputField.disabled = false;
                inputField.value = "";
                inputField.classList.remove("redWarn");
            }
            count = count - 1;
        }
        else if(event.target.classList.contains("checkBox")){
            // event.target.disabled='true'
            event.target.closest("article").classList.toggle("fulfilled");
        }
    });
    
};
