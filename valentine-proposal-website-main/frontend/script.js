async function sendAnswer(answer) {
    const response = await fetch("http://localhost:5000/answer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ answer: answer })
    });

    const data = await response.json();
    alert(data.message);
}