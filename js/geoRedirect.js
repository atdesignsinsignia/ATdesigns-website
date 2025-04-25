function redirectToCatalog() {
    // Use a free geolocation API to determine the user's country
    fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then(data => {
            const country = data.country_code;
            if (country === "US") {
                // Redirect to US catalog
                window.location.href = "https://sageflip.com/50176-2025/";
            } else if (country === "CA") {
                // Redirect to Canada catalog
                window.location.href = "https://sageflip.com/67430-2025/";
            } else {
                // Optional: Handle visitors from other countries
                alert("Catalog is not available for your location.");
            }
        })
        .catch(error => {
            console.error("Error fetching geolocation data:", error);
            alert("Unable to determine your location. Please try again later.");
        });
}
