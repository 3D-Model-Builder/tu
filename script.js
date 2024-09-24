document.getElementById("generate").addEventListener("click", function() {
    const urlInput = document.getElementById("url").value;
    
    if (!urlInput) {
        alert("Please enter a URL.");
        return;
    }

    // Simulate generating a shortened tracking URL
    const baseUrl = "https://yourtracker.com/";
    const uniqueID = Math.random().toString(36).substring(7); // Random string for the unique ID
    const trackingLink = baseUrl + uniqueID;

    // Display the generated tracking link
    document.getElementById("tracking-link").innerText = trackingLink;
    document.getElementById("output").style.display = "block";
});
