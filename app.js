let isEnglish = true;

function openStartMenu() {
    const menu = document.getElementById('start-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function switchLanguage() {
    isEnglish = !isEnglish;
    document.getElementById('language-switch').innerText = isEnglish ? 'EN' : 'JA';
    updateLanguage();
}

function updateLanguage() {
    const startMenuItems = document.querySelectorAll('#start-menu li');
    startMenuItems[0].textContent = isEnglish ? 'Text Editor' : 'テキストエディタ';
    startMenuItems[1].textContent = isEnglish ? 'Control Panel' : 'コントロールパネル';
    startMenuItems[2].textContent = isEnglish ? 'Browser' : 'ブラウザ';
    startMenuItems[3].textContent = isEnglish ? 'Timer' : 'タイマー';
    startMenuItems[4].textContent = isEnglish ? 'Clock' : '時計';
    startMenuItems[5].textContent = isEnglish ? 'Paint' : 'ペイント';
    startMenuItems[6].textContent = isEnglish ? 'Explorer' : 'エクスプローラー';
    startMenuItems[7].textContent = isEnglish ? 'Minesweeper' : 'マインスイーパー';
    startMenuItems[8].textContent = isEnglish ? 'Antivirus' : 'ウイルス対策';
    startMenuItems[9].textContent = isEnglish ? 'BadSoft' : 'BadSoft';
    startMenuItems[10].textContent = isEnglish ? 'Lock Screen' : 'ロック画面';
    startMenuItems[11].textContent = isEnglish ? 'Shutdown' : 'シャットダウン';
}

function openApp(appId) {
    document.querySelectorAll('.window').forEach(win => win.style.display = 'none');
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
function openBadsoft() { document.getElementById('bluescreen').style.display = 'block'; }

function lockScreen() {
    document.getElementById('lock-screen').style.display = 'flex';
}

function unlockScreen() {
    const password = document.getElementById('password').value;
    if (password === 'your_password') { // ここでパスワードチェックを行う
        document.getElementById('lock-screen').style.display = 'none';
    } else {
        alert('Incorrect password');
    }
}

function shutdown() {
    document.getElementById('bluescreen').style.display = 'block';
    document.getElementById('desktop').style.display = 'none';
}

function startTimer() {
    const minutes = document.getElementById('timer-minutes').value;
    const display = document.getElementById('timer-display');
    let seconds = minutes * 60;
    setInterval(function() {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        display.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
        if (seconds > 0) seconds--;
    }, 1000);
}

function updateClock() {
    const now = new Date();
    document.getElementById('clock-display').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

function clearCanvas() {
    const canvas = document.getElementById('paint-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function finishInstallation() {
    document.getElementById('installation').style.display = 'none';
}

function nextInstallationStep(step) {
    document.getElementById(`installation-step-${step}`).style.display = 'none';
    if (step < 4) {
        document.getElementById(`installation-step-${step + 1}`).style.display = 'block';
    } else {
        finishInstallation();
    }
}
