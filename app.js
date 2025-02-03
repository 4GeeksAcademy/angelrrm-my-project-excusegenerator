// Enviar la excusa
document.getElementById('sendExcuse').addEventListener('click', function() {
    alert('¡Excusa enviada!');
});
// Generar excusas genéricas
function generateGenericExcuse() {
    const whoList = ['My dog', 'The boss', 'My cousin', 'A neighbor'];
    const actionList = ['lost', 'broke', 'hid', 'threw away'];
    const whatList = ['my homework', 'the keys', 'my phone', 'the important documents'];
    const whenList = ['yesterday', 'today', 'last week', 'in the morning'];

    const who = whoList[Math.floor(Math.random() * whoList.length)];
    const action = actionList[Math.floor(Math.random() * actionList.length)];
    const what = whatList[Math.floor(Math.random() * whatList.length)];
    const when = whenList[Math.floor(Math.random() * whenList.length)];

    const excuse = `${who} ${action} ${what} ${when}.`;
    document.getElementById('excuseOutput').innerText = excuse;

    saveExcuse(excuse);
}

// Guardar las excusas
function saveExcuse(excuse) {
    let excuses = JSON.parse(localStorage.getItem('excuses')) || [];
    excuses.push(excuse);
    localStorage.setItem('excuses', JSON.stringify(excuses));
}

// Generar excusas personalizadas
document.getElementById('generateExcuse').addEventListener('click', function () {
    const who = document.getElementById('who').value;
    const when = document.getElementById('when').value;
    const what = document.getElementById('what').value;
    const action = document.getElementById('action').value;

    const excuse = `${who} ${action} ${what} ${when}.`;
    document.getElementById('excuseOutput').innerText = excuse;

    saveExcuse(excuse);
});

// Evento para generar excusas genéricas
document.getElementById('generateGenericExcuse').addEventListener('click', generateGenericExcuse);

// Evento para enviar la excusa
document.getElementById('sendExcuse').addEventListener('click', function () {
    alert('Excuse sent!');
});
