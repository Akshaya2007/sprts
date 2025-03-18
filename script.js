// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    fetchLiveScores();
    fetchUpcomingEvents();
    fetchPastResults();
});

// Fetch live scores for Nepali football and cricket
function fetchLiveScores() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key (API-Football or Cricket API)
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all`; // Example URL for live football matches

    fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const scores = data.response.map(match => `
            <p><strong>${match.league.name}</strong> - ${match.team1.name} vs ${match.team2.name}</p>
            <p>Score: ${match.goals.team1} - ${match.goals.team2}</p>
            <hr>
        `).join('');
        document.getElementById('scores').innerHTML = scores;
    })
    .catch(err => {
        console.error(err);
        document.getElementById('scores').innerHTML = "Error fetching live scores.";
    });
}

// Fetch upcoming events for Nepali football and cricket
function fetchUpcomingEvents() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key (API-Football or Cricket API)
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2025&status=SCHEDULED`; // Example URL for upcoming football matches

    fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const events = data.response.map(match => `
            <li><strong>${match.league.name}</strong>: ${match.team1.name} vs ${match.team2.name} on ${match.fixture.date}</li>
        `).join('');
        document.getElementById('event-list').innerHTML = events;
    })
    .catch(err => {
        console.error(err);
        document.getElementById('event-list').innerHTML = "Error fetching upcoming events.";
    });
}

// Fetch past results for Nepali football and cricket
function fetchPastResults() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key (API-Football or Cricket API)
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2025&status=FINISHED`; // Example URL for past football matches

    fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const results = data.response.map(match => `
            <li><strong>${match.league.name}</strong>: ${match.team1.name} vs ${match.team2.name} - Final Score: ${match.goals.team1} - ${match.goals.team2}</li>
        `).join('');
        document.getElementById('results-list').innerHTML = results;
    })
    .catch(err => {
        console.error(err);
        document.getElementById('results-list').innerHTML = "Error fetching past results.";
    });
}
