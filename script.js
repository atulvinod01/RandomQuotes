const apiUrl = 'https://api.quotable.io/random';

async function getRandomQuote() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const quoteText = document.getElementById("quote-text");
            quoteText.textContent = `${data.content} - ${data.author}`;
        } else {
            console.error(`Failed to fetch quote. Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}
