let currentColor = '#000000';

document.getElementById('color-picker').addEventListener('input', (event) => {
    currentColor = event.target.value;
});

const canvas = document.getElementById('paint-canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = 2;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath();
});

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function openApp(appId) {
    const apps = ['textEditor', 'control-panel', 'browser', 'timer', 'clock', 'paint', 'explorer', 'minesweeper', 'antivirus', 'sidemenu'];
    apps.forEach(app => {
        document.getElementById(app).style.display = 'none';
    });
    document.getElementById(appId).style.display = 'block';
}

function closeTextEditor() { document.getElementById('textEditor').style.display = 'none'; }
function closeControlPanel() { document.getElementById('control-panel').style.display = 'none'; }
function closeBrowser() { document.getElementById('browser').style.display = 'none'; }
function closeTimer() { document.getElementById('timer').style.display = 'none'; }
function closeClock() { document.getElementById('clock').style.display = 'none'; }
function closePaint() { document.getElementById('paint').style.display = 'none'; }
function closeExplorer() { document.getElementById('explorer').style.display = 'none'; }
function closeMinesweeper() { document.getElementById('minesweeper').style.display = 'none'; }
function closeAntivirus() { document.getElementById('antivirus').style.display = 'none'; }
function closeSidemenu() { document.getElementById('sidemenu').style.display = 'none'; }

function openControlPanel() { openApp('control-panel'); }
function openBrowser() { openApp('browser'); }
function openTimer() { openApp('timer'); }
function openClock() { openApp('clock'); }
function openPaint() { openApp('paint'); }
function openExplorer() { openApp('explorer'); }
function openMinesweeper() { openApp('minesweeper'); }
function openAntivirus() { openApp('antivirus'); }
function openSidemenu() { openApp('sidemenu'); }
function openBadsoft() { document.getElementById('badsoft').style.display = 'block'; }

function openStartMenu() {
    const startMenu = document.getElementById('start-menu');
    startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
}

function switchLanguage() {
    const currentLang = document.getElementById('language-switch').innerText;
    document.getElementById('language-switch').innerText = currentLang === 'EN' ? 'JA' : 'EN';
}

function lockScreen() { document.getElementById('lock-screen').style.display = 'flex'; }
function unlockScreen() { document.getElementById('lock-screen').style.display = 'none'; }

function shutdown() {
    document.getElementById('bluescreen').style.display = 'block';
}

function restart() {
    document.getElementById('bluescreen').style.display = 'none';
    document.getElementById('badsoft').style.display = 'none';
    document.getElementById('desktop').style.display = 'block';
}

function nextInstallationStep(step) {
    document.getElementById(`installation-step-${step}`).style.display = 'none';
    document.getElementById(`installation-step-${step + 1}`).style.display = 'block';
}

function finishInstallation() {
    document.getElementById('installation').style.display = 'none';
    document.getElementById('desktop').style.display = 'block';
}
