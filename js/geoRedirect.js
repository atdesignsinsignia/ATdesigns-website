function redirectToCatalog(e) {
  if (e) e.preventDefault();

  fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(data => {
      const country = data.country_code;

      if (country === "US") {
        window.location.href = "https://sageflip.com/50176-2026/";
      } else if (country === "CA") {
        window.location.href = "https://sageflip.com/67430-2026/";
      } else {
        alert("Catalog is not available for your location.");
      }
    })
    .catch(error => {
      console.error("Error fetching geolocation data:", error);
      alert("Unable to determine your location. Please try again later.");
    });

  return false; // extra safety for inline handlers
}
