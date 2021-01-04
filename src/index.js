const storage = window.localStorage

/*
    Create days with for loop.
    Create a new div for each elem.
    Add li tag with unchecked class.
*/
for (i = 1; i <= 365; i++) {
    const node = document.createElement("div")
    node.innerHTML = `<li class="unchecked">${i}</li>`
    document.getElementById('days').appendChild(node)
}
// Select all li tags contains unchecked class.
const uncheckedList = document.querySelectorAll(".unchecked")

/*
Simple local storage management.
Cycle through all ket items in storage.
If storage contains the day we checked before, checked it again.
*/
for (const storageKey in storage) {

    uncheckedList.forEach((key) => {

        if (storageKey == key.innerHTML) 
            key.classList.add('checked')

    })
    
}

// Add click listener all li tags and toggle checked class every click
uncheckedList.forEach((key) => {
    key.addEventListener('click', () => {

        if (key.classList.contains("checked")) {
            window.localStorage.removeItem(`${key.innerHTML}`);
            key.classList.remove('checked')
        }
        else {
            window.localStorage.setItem(`${key.innerHTML}`, 'checked');
            key.classList.add('checked')
        }
    })
})