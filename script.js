document.getElementById('fetchDataButton').addEventListener('click', function() {
    const apiUrl = 'https://o9eaywu4ud.execute-api.sa-east-1.amazonaws.com/v1/test';
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('result').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
        document.getElementById('result').innerHTML = `<p style="color: red;">Error al obtener los datos: ${error.message}</p>`;
    });
});

document.getElementById('fetchDataButton2').addEventListener('click', function() {
    const apiUrl = 'https://lv33044550.execute-api.sa-east-1.amazonaws.com/v1/test';
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('result2').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
        document.getElementById('result2').innerHTML = `<p style="color: red;">Error al obtener los datos: ${error.message}</p>`;
    });
});