function getAdvice() {
    document.getElementById("advice_btn").disabled = true;
    document.getElementById("advice_id").innerHTML = "...";
    document.getElementById("advice_content").innerHTML = "...";

    // Define the API URL
    const apiUrl = 'https://api.adviceslip.com/advice';

    // Make a GET request
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("advice_id").innerHTML = data.slip.id;
            document.getElementById("advice_content").innerHTML = data.slip.advice;
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            document.getElementById("advice_btn").disabled = false;
        });
}

getAdvice()