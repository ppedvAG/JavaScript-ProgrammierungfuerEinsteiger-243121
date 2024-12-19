const apiKey = "2dad81464268f2145a1d50601dd6292d"
const apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather"

document.getElementById("searchButton").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("weatherResult");

    if (!city) {
        resultDiv.textContent = "Bitte eine Stadt eingeben!";
        resultDiv.style.color = "red";
        return;
    }

    resultDiv.textContent = "Wetter wird geladen..."
    resultDiv.style.color = "aquamarine";

    try {
        // Abrufen der Wetterdaten
        const response = await fetch(`${apiBaseUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("Stadt nicht gefunden");
        }

        const weatherData = await response.json();
        const temp = weatherData.main.temp;
        const weather = weatherData.weather[0].description;

        // Wetter anzeigen
        resultDiv.textContent = `Das Wetter in ${city} ist ${weather} bei ${temp}°C.`;
        resultDiv.style.color = "green";
    } catch (error) {
        resultDiv.textContent = error.message;
        resultDiv.style.color = "red";
    }
});