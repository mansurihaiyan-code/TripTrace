const reportContainer =
    document.getElementById("reportContainer");


// Get logged-in user

const currentUser =
    JSON.parse(
        localStorage.getItem("triptraceCurrentUser")
    );


// Get all trips

const trips =
    JSON.parse(
        localStorage.getItem("triptraceTrips")
    ) || [];


// Check login

if (!currentUser) {

    reportContainer.innerHTML = `
        <p>
            🔐 Please login first to view your trip report.
        </p>
    `;

} else {

    // Get user's trips

    const userTrips =
        trips.filter(function(trip) {

            return trip.userEmail ===
                   currentUser.email;

        });


    if (userTrips.length === 0) {

        reportContainer.innerHTML = `
            <div class="route-result">

                <h2>📄 No Trips Found</h2>

                <p>
                    Create a trip first to generate
                    your trip report.
                </p>

            </div>
        `;

    } else {

        let reportHTML = `
            <div class="route-result">

                <h2>🌍 TripTrace Travel Report</h2>

                <p>
                    👤 Traveler:
                    <strong>${currentUser.name}</strong>
                </p>

                <hr>
        `;


        userTrips.forEach(function(trip, index) {

            reportHTML += `

                <div class="route-info">

                    <h2>
                        ✈️ Trip ${index + 1}:
                        ${trip.tripName}
                    </h2>

                    <p>
                        📍
                        <strong>From:</strong>
                        ${trip.startLocation}
                    </p>

                    <p>
                        🎯
                        <strong>Destination:</strong>
                        ${trip.destination}
                    </p>

                    <p>
                        📅
                        <strong>Start Date:</strong>
                        ${trip.startDate}
                    </p>

                    <p>
                        📅
                        <strong>End Date:</strong>
                        ${trip.endDate}
                    </p>

                    <p>
                        👥
                        <strong>Travelers:</strong>
                        ${trip.travelers}
                    </p>

                    <p>
                        💰
                        <strong>Estimated Budget:</strong>
                        ₹${trip.budget}
                    </p>

                    <p>
                        📝
                        <strong>Description:</strong>
                        ${trip.description || "No description"}
                    </p>

                </div>

            `;

        });


        reportHTML += `
            </div>
        `;


        reportContainer.innerHTML =
            reportHTML;

    }

}