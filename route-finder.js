const routeForm = document.getElementById("routeForm");

const routeResults = document.getElementById("routeResults");

const routeOptions = document.getElementById("routeOptions");


// ===============================
// FIND ROUTE
// ===============================

routeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const start =
        document.getElementById("startLocation").value.trim();

    const destination =
        document.getElementById("destination").value.trim();

    const travelMode =
        document.getElementById("travelMode").value;


    if (start === "" || destination === "") {

        alert("Please enter starting location and destination.");

        return;

    }


    // Show results

    routeResults.style.display = "block";


    // Create demo route information

    const routes = [

        {
            type: "Fastest Route",
            icon: "⚡",
            time: "9 hr 30 min",
            distance: "520 km",
            cost: "₹2,500"
        },

        {
            type: "Shortest Route",
            icon: "🛣️",
            time: "10 hr 15 min",
            distance: "485 km",
            cost: "₹2,300"
        },

        {
            type: "Cheapest Route",
            icon: "💰",
            time: "12 hr 30 min",
            distance: "540 km",
            cost: "₹1,200"
        }

    ];


    // Display routes

    routeOptions.innerHTML = `

        <p>
            📍 <strong>${start}</strong>
            →
            🎯 <strong>${destination}</strong>
        </p>

        <p>
            🚗 Travel Mode:
            <strong>${travelMode}</strong>
        </p>

        <div class="route-card">

            <div class="route-icon">
                ⚡
            </div>

            <div class="route-info">

                <h3>
                    Fastest Route
                </h3>

                <p>
                    ⏱️ ${routes[0].time}
                </p>

                <p>
                    📏 ${routes[0].distance}
                </p>

                <p>
                    💰 ${routes[0].cost}
                </p>

            </div>

        </div>


        <div class="route-card">

            <div class="route-icon">
                🛣️
            </div>

            <div class="route-info">

                <h3>
                    Shortest Route
                </h3>

                <p>
                    ⏱️ ${routes[1].time}
                </p>

                <p>
                    📏 ${routes[1].distance}
                </p>

                <p>
                    💰 ${routes[1].cost}
                </p>

            </div>

        </div>


        <div class="route-card">

            <div class="route-icon">
                💰
            </div>

            <div class="route-info">

                <h3>
                    Cheapest Route
                </h3>

                <p>
                    ⏱️ ${routes[2].time}
                </p>

                <p>
                    📏 ${routes[2].distance}
                </p>

                <p>
                    💰 ${routes[2].cost}
                </p>

            </div>

        </div>

    `;

});