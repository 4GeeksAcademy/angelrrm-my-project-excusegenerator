// Evento de excusa
document.getElementById('generateExcuse').addEventListener('click', function() {
    // Valores de los campos de texto
    const who = document.getElementById('who').value;
    const when = document.getElementById('when').value;
    const what = document.getElementById('what').value;
    const action = document.getElementById('action').value;

    // Crear la excusa
    const excuse = "${who} ${action} ${what} ${when}.";
    // Mostrar la excusa en el elemento de salida
    document.getElementById('excuseOutput').innerText = excuse;
});

// Enviar la excusa
document.getElementById('sendExcuse').addEventListener('click', function() {
    alert('¡Excusa enviada!');
});
