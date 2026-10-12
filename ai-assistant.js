const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");


// ===============================
// SEND MESSAGE
// ===============================

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addUserMessage(message);

    userInput.value = "";

    setTimeout(function () {

        const response = getAIResponse(message);

        addBotMessage(response);

    }, 500);
}


// ===============================
// USER MESSAGE
// ===============================

function addUserMessage(message) {

    const messageDiv = document.createElement("div");

    messageDiv.className = "user-message";

    messageDiv.innerHTML = `
        <div class="message-content">
            <strong>You</strong>
            <p>${message}</p>
        </div>
    `;

    chatMessages.appendChild(messageDiv);

    scrollChat();
}


// ===============================
// AI MESSAGE
// ===============================

function addBotMessage(message) {

    const messageDiv = document.createElement("div");

    messageDiv.className = "bot-message";

    messageDiv.innerHTML = `
        <span class="message-icon">🤖</span>

        <div class="message-content">

            <strong>TripTrace AI</strong>

            <p>${message}</p>

        </div>
    `;

    chatMessages.appendChild(messageDiv);

    scrollChat();
}


// ===============================
// TRAVEL AI
// ===============================

function getAIResponse(message) {

    const text = message.toLowerCase();


    // GREETING

   if (
    text === "hi" ||
    text === "hello" ||
    text === "hey" ||
    text.startsWith("hi ") ||
    text.startsWith("hello ") ||
    text.startsWith("hey ")
) {
        return `
            👋 Hello! I'm your <strong>TripTrace Travel AI</strong> 🤖
            <br><br>

            I can help you with:
            <br><br>

            📍 Places to visit<br>
            🗺️ Trip planning<br>
            🍴 Food suggestions<br>
            💰 Budget tips<br>
            🎒 Packing tips<br>
            📅 Itinerary ideas
        `;

    }


    // GOA

    if (text.includes("goa")) {

        return `
            🌴 <strong>Goa Travel Guide</strong>
            <br><br>

            📍 Places you can visit:
            <br><br>

            🏖️ Baga Beach<br>
            🌊 Calangute Beach<br>
            🏰 Fort Aguada<br>
            ⛪ Basilica of Bom Jesus<br>
            🌴 Palolem Beach<br>
            🌅 Panjim<br>
            💦 Dudhsagar Falls
            <br><br>

            📅 <strong>2-Day Suggestion:</strong>
            <br>
            Day 1 → North Goa + Fort Aguada
            <br>
            Day 2 → South Goa + Palolem Beach
        `;

    }


    // JAIPUR

    if (text.includes("jaipur")) {

        return `
            🕌 <strong>Jaipur Travel Guide</strong>
            <br><br>

            📍 Places to visit:
            <br><br>

            🏰 Amber Fort<br>
            🏯 City Palace<br>
            🪟 Hawa Mahal<br>
            🔭 Jantar Mantar<br>
            🌊 Jal Mahal<br>
            🏔️ Nahargarh Fort
            <br><br>

            🍴 Try Dal Baati Churma and Rajasthani Thali.
        `;

    }


    // AHMEDABAD

    if (text.includes("ahmedabad")) {

        return `
            🏙️ <strong>Ahmedabad Travel Guide</strong>
            <br><br>

            📍 Places to visit:
            <br><br>

            🕊️ Sabarmati Ashram<br>
            🏛️ Adalaj Stepwell<br>
            🌊 Kankaria Lake<br>
            🔬 Science City<br>
            🌅 Sabarmati Riverfront<br>
            🕌 Sidi Saiyyed Mosque
            <br><br>

            🍴 Try Gujarati Thali and Fafda-Jalebi.
        `;

    }


    // MUMBAI

    if (text.includes("mumbai")) {

        return `
            🌆 <strong>Mumbai Travel Guide</strong>
            <br><br>

            📍 Places to visit:
            <br><br>

            🏛️ Gateway of India<br>
            🌊 Marine Drive<br>
            🚉 CSMT<br>
            🛍️ Colaba<br>
            🏝️ Elephanta Caves<br>
            🏖️ Juhu Beach
            <br><br>

            🍴 Try Vada Pav, Pav Bhaji and Bhel Puri.
        `;

    }


    // DELHI

    if (text.includes("delhi")) {

        return `
            🏛️ <strong>Delhi Travel Guide</strong>
            <br><br>

            📍 Places to visit:
            <br><br>

            🇮🇳 India Gate<br>
            🏰 Red Fort<br>
            🗼 Qutub Minar<br>
            🕌 Humayun's Tomb<br>
            🌸 Lotus Temple<br>
            🛕 Akshardham
        `;

    }


    // MANALI

    if (text.includes("manali")) {

        return `
            🏔️ <strong>Manali Travel Guide</strong>
            <br><br>

            📍 Places to visit:
            <br><br>

            🏔️ Solang Valley<br>
            🛕 Hadimba Temple<br>
            🛍️ Mall Road<br>
            🌲 Old Manali<br>
            🏔️ Rohtang area
            <br><br>

            🎒 Carry warm clothes and comfortable shoes.
        `;

    }


    // KASHMIR

    if (text.includes("kashmir")) {

        return `
            🏔️ <strong>Kashmir Travel Guide</strong>
            <br><br>

            📍 Places to visit:
            <br><br>

            🌊 Dal Lake<br>
            🏔️ Gulmarg<br>
            🌲 Pahalgam<br>
            🏔️ Sonamarg<br>
            🏙️ Srinagar
        `;

    }


    // KERALA

    if (text.includes("kerala")) {

        return `
            🌴 <strong>Kerala Travel Guide</strong>
            <br><br>

            📍 Places to visit:
            <br><br>

            🌿 Munnar<br>
            🚤 Alleppey<br>
            🏙️ Kochi<br>
            🌲 Thekkady<br>
            🏔️ Wayanad
        `;

    }


    // UDAIPUR

    if (text.includes("udaipur")) {

        return `
            🌊 <strong>Udaipur Travel Guide</strong>
            <br><br>

            📍 Places to visit:
            <br><br>

            🏰 City Palace<br>
            🚤 Lake Pichola<br>
            🛕 Jagdish Temple<br>
            🌄 Monsoon Palace<br>
            🌊 Fateh Sagar Lake
        `;

    }


    // AGRA

    if (text.includes("agra")) {

        return `
            🕌 <strong>Agra Travel Guide</strong>
            <br><br>

            📍 Places to visit:
            <br><br>

            🕌 Taj Mahal<br>
            🏰 Agra Fort<br>
            🌳 Mehtab Bagh<br>
            🕌 Itmad-ud-Daulah
        `;

    }


    // PACKING

    if (
        text.includes("pack") ||
        text.includes("packing")
    ) {

        return `
            🎒 <strong>Travel Packing Checklist</strong>
            <br><br>

            📱 Phone + Charger<br>
            🪪 ID Documents<br>
            💳 Money / Cards<br>
            👕 Suitable Clothes<br>
            🧴 Personal Items<br>
            💊 Basic Medicines<br>
            🔋 Power Bank
            <br><br>

            💡 Check the destination weather before packing.
        `;

    }


    // BUDGET

    if (
        text.includes("budget") ||
        text.includes("save money") ||
        text.includes("cheap")
    ) {

        return `
            💰 <strong>Budget Travel Tips</strong>
            <br><br>

            1️⃣ Compare transport prices.<br>
            2️⃣ Book accommodation early.<br>
            3️⃣ Prefer local food.<br>
            4️⃣ Travel with a group.<br>
            5️⃣ Set a daily spending limit.<br>
            6️⃣ Track your expenses in TripTrace.
        `;

    }


    // FOOD

    if (
        text.includes("food") ||
        text.includes("eat")
    ) {

        return `
            🍴 Sure! I can suggest local food.
            <br><br>

            Tell me your destination.
            <br><br>

            Example:
            <br>
            "Best food in Goa?"
            <br>
            "What should I eat in Jaipur?"
        `;

    }


    // PLANNING

    if (
        text.includes("plan") ||
        text.includes("itinerary")
    ) {

        return `
            🗺️ <strong>Trip Planning Guide</strong>
            <br><br>

            1️⃣ Choose destination.<br>
            2️⃣ Select travel dates.<br>
            3️⃣ Set your budget.<br>
            4️⃣ Choose transportation.<br>
            5️⃣ Select places to visit.<br>
            6️⃣ Book accommodation.<br>
            7️⃣ Create a daily itinerary.
        `;

    }


    // HELP

    if (
        text.includes("help") ||
        text.includes("what can you do")
    ) {

        return `
            🤖 <strong>I can help you with:</strong>
            <br><br>

            📍 Places to visit<br>
            🗺️ Trip planning<br>
            🍴 Food recommendations<br>
            💰 Budget tips<br>
            🎒 Packing checklist<br>
            📅 Itinerary ideas
            <br><br>

            Try:
            <br>
            <strong>"Which places should I visit in Goa?"</strong>
        `;

    }


    // DEFAULT

    return `
        🤔 I don't have information about that yet.
        <br><br>

        Try asking:
        <br><br>

        • Which places should I visit in Goa?
        <br>
        • What should I visit in Jaipur?
        <br>
        • What should I pack?
        <br>
        • How can I save money?
        <br>
        • Help me plan my trip.
    `;
}


// ===============================
// QUICK QUESTIONS
// ===============================

function askQuestion(question) {

    userInput.value = question;

    sendMessage();
}


// ===============================
// ENTER KEY
// ===============================

userInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendMessage();
        }
    }
);


// ===============================
// SEND BUTTON
// ===============================

sendButton.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        sendMessage();
    }
);


// ===============================
// SCROLL
// ===============================

function scrollChat() {

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}