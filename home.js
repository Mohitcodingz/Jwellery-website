// TEXT CHANGE (already working)
let changeValue = document.getElementById("changeit");

setTimeout(() => {
    changeValue.style.opacity = "0";
    setTimeout(() => {
        changeValue.innerText = "Lavish!";
        changeValue.style.opacity = "1";
    }, 1000);
}, 2000);


// SEARCH + MIC LOGIC
const searchBtn = document.getElementById("searchBtn");
const micBtn = document.getElementById("micBtn");
const searchInput = document.getElementById("searchInput");

console.log("JS loaded", searchBtn, micBtn, searchInput);

// 🔍 SEARCH CLICK
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();

    if (!query) return;

    // redirect to search page with query
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
});
// ⌨️ ENTER KEY SUPPORT
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});

// 🎤 MIC CLICK (Chrome only)
micBtn.addEventListener("click", () => {
    if (!("webkitSpeechRecognition" in window)) {
        alert("Voice search not supported in this browser");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        searchInput.value = spokenText;
    };
});
