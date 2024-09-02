document.getElementById('fetchDataButton').addEventListener('click', function() {
    const apiUrl = 'https://38heo9rexf.execute-api.sa-east-1.amazonaws.com/v1/MP/dbwidgets';
    const data = {
        ids: "1",
        tipo: "",
        segmento: "",
        categoria: "",
        revision: "",
        widget: "cuadro",
        filtrowidget: "",
        proyectoid: ""
    }
    fetch(apiUrl, data,{
        method: 'POST',
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
    const apiUrl = 'https://38heo9rexf.execute-api.sa-east-1.amazonaws.com/v1/MP/dbwidgets';
    const data = {
        ids: "1",
        tipo: "",
        segmento: "",
        categoria: "",
        revision: "",
        widget: "proyecto",
        filtrowidget: "",
        proyectoid: ""
    }
    fetch(apiUrl, data,{
        method: 'POST',
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
