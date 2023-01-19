var counter = 0;
function sendMessage() {
    counter++;
    // Hier müsstest du die URL des Discord Webhooks einfügen
    var webhookURL = "https://discord.com/api/webhooks/1064902756533542984/aPaAbN9Hy27B5NpQxMZ0WnT7tInOJ2vLyMjm-wJ8zZ0SMvy_jhaV705kAPz-RLn_8yJU";
    var message = "Nachricht Nr. " + counter;
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "content": message
        })
    });
}