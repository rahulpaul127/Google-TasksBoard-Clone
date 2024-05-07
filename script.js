// This function runs when the window is fully loaded
window.onload = () => {
    // Retrieve stored notes from local storage or initialize an empty array
    let storedNotes = JSON.parse(localStorage.getItem('note')) || [];
    if (storedNotes) {
        let Complete = document.getElementById("cmplt2");
        Complete.innerHTML = '';
        
        // Loop through each stored note and create HTML elements to display them
        storedNotes.forEach((task, index) => {
            // Create a container div for each note
            let div1 = document.createElement('div');
            div1.className = 'hvr';
            
            // Populate the container div with HTML content based on each note
            div1.innerHTML = `
                <div class="inp">
                    <textarea class="myTextarea grd1" placeholder="Title" disabled>${task.title}</textarea>
                    <textarea class="myTextarea grd2" placeholder="Details" disabled>${task.details}</textarea>
                    <input type="datetime-local" class="time" value="${task.date}" disabled onclick="notedate(event)" />
                </div>
                <div class="lg2">
                    <img src="svg/delete.svg" alt="3dot" onclick="deleteTask(${index})" />
                </div>
            `;
            
            // Append the container div to the specified element in the DOM
            Complete.appendChild(div1);

            // Resize textareas to fit their content
            const textareas = document.getElementsByClassName("myTextarea");
            Array.from(textareas).forEach((textarea) => {
                textarea.addEventListener("input", function () {
                    // Adjust textarea height based on content
                    if (this.value === "") {
                        this.style.height = "1em";
                    } else {
                        this.style.height = "0";
                        this.style.height = this.scrollHeight + "px";
                    }
                });
                // Set initial textarea height
                textarea.style.height = "0";
                textarea.style.height = textarea.scrollHeight + "px";
            });

            // Disable textareas and datetime-local input
            div1.querySelectorAll('textarea').forEach(textarea => {
                textarea.disabled = true;
            });
            div1.querySelector('input.time').disabled = true;
        });
    }
};

// Function to delete a task based on its index
window.deleteTask = function (index) {
    let tasks = JSON.parse(localStorage.getItem('note')) || [];
    // Remove the task at the specified index from the tasks array
    tasks.splice(index, 1);
    // Update the tasks array in local storage
    localStorage.setItem('note', JSON.stringify(tasks));

    // Display the updated list of tasks after deletion
    let storedNotes = localStorage.getItem('note');
    if (storedNotes) {
        let Complete = document.getElementById("cmplt2");
        Complete.innerHTML = '';
        // Loop through the updated list of tasks and recreate HTML elements to display them
        JSON.parse(storedNotes).forEach((task, index) => {
            // Create a container div for each task
            let div1 = document.createElement('div');
            div1.className = 'hvr';
            
            // Populate the container div with HTML content based on each task
            div1.innerHTML = `
                <div class="inp">
                    <textarea class="myTextarea grd1" placeholder="Title" disabled>${task.title}</textarea>
                    <textarea class="myTextarea grd2" placeholder="Details" disabled>${task.details}</textarea>
                    <input type="datetime-local" class="time" value="${task.date}" disabled onclick="notedate(event)" />
                </div>
                <div class="lg2">
                    <img src="svg/delete.svg" alt="3dot" onclick="deleteTask(${index})" />
                </div>
            `;
            
            // Append the container div to the specified element in the DOM
            Complete.appendChild(div1);

            // Resize textareas to fit their content
            const textareas = document.getElementsByClassName("myTextarea");
            Array.from(textareas).forEach((textarea) => {
                textarea.addEventListener("input", function () {
                    // Adjust textarea height based on content
                    if (this.value === "") {
                        this.style.height = "1em";
                    } else {
                        this.style.height = "0";
                        this.style.height = this.scrollHeight + "px";
                    }
                });
                // Set initial textarea height
                textarea.style.height = "0";
                textarea.style.height = textarea.scrollHeight + "px";
            });

            // Disable textareas and datetime-local input
            div1.querySelectorAll('textarea').forEach(textarea => {
                textarea.disabled = true;
            });
            div1.querySelector('input.time').disabled = true;
        });
    }
};

// Function to add a new note
let addnote = () => {
    let tasks = [];
    // Collect data from existing notes in the DOM
    document.body.querySelectorAll('.hvr').forEach(elem => {
        // Create an object for each note and push it to the tasks array
        tasks.push({
            title: elem.querySelector(".grd1").value,
            details: elem.querySelector(".grd2").value,
            date: elem.querySelector(".time").value
        });
    });
    // Store the updated notes in local storage
    localStorage.setItem('note', JSON.stringify(tasks));

    // Clear input fields after storing the new note
    let storedNote = JSON.parse(localStorage.getItem('note')) || [];
    let titleElement = document.querySelector('.grd1');
    let detailsElement = document.querySelector('.grd2');
    let dateElement = document.querySelector('.time');
    let titleValue = titleElement ? titleElement.value.trim() : '';
    let detailsValue = detailsElement ? detailsElement.value.trim() : '';
    let dateValue = dateElement ? dateElement.value.trim() : '';
    let hvrExists = document.querySelector('.hvr') !== null;

    // Display the updated list of notes
    if (!hvrExists || titleValue !== '' || detailsValue !== '' || dateValue !== '') {
        let Complete = document.getElementById("cmplt2");
        Complete.innerHTML = '';
        // Loop through the updated list of notes and recreate HTML elements to display them
        storedNote.forEach((task, index) => {
            // Create a container div for each note
            let div1 = document.createElement('div');
            div1.className = 'hvr';
            
            // Populate the container div with HTML content based on each note
            div1.innerHTML = `
                <div class="inp">
                    <textarea class="myTextarea grd1" placeholder="Title" disabled>${task.title}</textarea>
                    <textarea class="myTextarea grd2" placeholder="Details" disabled>${task.details}</textarea>
                    <input type="datetime-local" class="time" value="${task.date}" disabled onclick="notedate(event)" />
                </div>
                <div class="lg2">
                    <img src="svg/delete.svg" alt="3dot" onclick="deleteTask(${index})" />
                </div>
            `;
            
            // Append the container div to the specified element in the DOM
            Complete.appendChild(div1);

            // Disable textareas and datetime-local input
            div1.querySelectorAll('textarea').forEach(textarea => {
                textarea.disabled = true;
            });
            div1.querySelector('input.time').disabled = true;
        });
        // Clear input fields after displaying updated notes
        if (titleElement) titleElement.value = '';
        if (detailsElement) detailsElement.value = '';
        if (dateElement) dateElement.value = '';

        // Resize textareas to fit their content
        const textareas = document.getElementsByClassName("myTextarea");
        Array.from(textareas).forEach((textarea) => {
            textarea.addEventListener("input", function () {
                // Adjust textarea height based on content
                if (this.value === "") {
                    this.style.height = "1em";
                } else {
                    this.style.height = "0";
                    this.style.height = this.scrollHeight + "px";
                }
            });
            // Set initial textarea height
            textarea.style.height = "0";
            textarea.style.height = textarea.scrollHeight + "px";
        });

    } else {
        alert('Please fill in at least one field to add a new note.');
    }
};

// Function to handle datetime-local input click event
const notedate = (event) => {
    event.target.showPicker();
}

// Function to set the minimum date of datetime-local input to current date and time
function mindate() {
    let today = new Date().toISOString().slice(0, 16);
    document.querySelector(`.time`).min = today;
}

// Function to delete a DOM element
function deleteElement(element) {
    element.parentNode.removeChild(element);
}
