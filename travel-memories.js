const memoryForm = document.getElementById("memoryForm");
const memoryList = document.getElementById("memoryList");


// ===============================
// LOAD MEMORIES
// ===============================

function loadMemories() {

    const memories =
        JSON.parse(
            localStorage.getItem("triptraceMemories")
        ) || [];

    memoryList.innerHTML = "";

    if (memories.length === 0) {

        memoryList.innerHTML = `
            <p style="margin-top:20px;">
                📸 No memories saved yet.
            </p>
        `;

        return;
    }


    memories.forEach(function(memory, index) {

        const memoryCard =
            document.createElement("div");

        memoryCard.className = "route-result";

        memoryCard.innerHTML = `

            <h2>📸 ${memory.title}</h2>

            <p>
                📍 <strong>${memory.place}</strong>
            </p>

            <p>
                📅 ${memory.date}
            </p>

            <p>
                ${memory.description || "No description added."}
            </p>

            ${
                memory.photo
                ? `<img src="${memory.photo}"
                    style="width:100%; max-width:300px;
                    border-radius:12px; margin-top:10px;">`
                : ""
            }

            <br>

            <button
                type="button"
                class="auth-button"
                onclick="deleteMemory(${index})"
                style="margin-top:15px;">

                🗑️ Delete Memory

            </button>

        `;

        memoryList.appendChild(memoryCard);

    });

}


// ===============================
// SAVE MEMORY
// ===============================

memoryForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const title =
            document.getElementById("memoryTitle")
            .value.trim();

        const place =
            document.getElementById("memoryPlace")
            .value.trim();

        const date =
            document.getElementById("memoryDate")
            .value;

        const description =
            document.getElementById("memoryDescription")
            .value.trim();

        const photoInput =
            document.getElementById("memoryPhoto");


        // Get existing memories

        const memories =
            JSON.parse(
                localStorage.getItem("triptraceMemories")
            ) || [];


        // Save photo if selected

        if (photoInput.files.length > 0) {

            const reader =
                new FileReader();


            reader.onload = function() {

                const memory = {

                    title: title,

                    place: place,

                    date: date,

                    description: description,

                    photo: reader.result

                };


                memories.push(memory);


                localStorage.setItem(
                    "triptraceMemories",
                    JSON.stringify(memories)
                );


                memoryForm.reset();

                loadMemories();

                alert("📸 Memory saved successfully!");

            };


            reader.readAsDataURL(
                photoInput.files[0]
            );

        }

        else {

            const memory = {

                title: title,

                place: place,

                date: date,

                description: description,

                photo: ""

            };


            memories.push(memory);


            localStorage.setItem(
                "triptraceMemories",
                JSON.stringify(memories)
            );


            memoryForm.reset();

            loadMemories();

            alert("📸 Memory saved successfully!");

        }

    }
);


// ===============================
// DELETE MEMORY
// ===============================

function deleteMemory(index) {

    const memories =
        JSON.parse(
            localStorage.getItem("triptraceMemories")
        ) || [];


    memories.splice(index, 1);


    localStorage.setItem(
        "triptraceMemories",
        JSON.stringify(memories)
    );


    loadMemories();

}


// ===============================
// INITIAL LOAD
// ===============================

loadMemories();