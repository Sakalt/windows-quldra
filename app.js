// UI コントロール
document.addEventListener('DOMContentLoaded', function() {
    const startMenu = document.getElementById('start-menu');
    const lockScreen = document.getElementById('lock-screen');
    const bluescreen = document.getElementById('bluescreen');
    const explorerImage = document.getElementById('explorer-image');
    let isLocked = false;

    // スタートメニューを開く
    window.openStartMenu = function() {
        startMenu.style.display = startMenu.style.display === 'none' ? 'block' : 'none';
    };

    // 言語切り替え
    window.switchLanguage = function() {
        const langButton = document.getElementById('language-switch');
        langButton.textContent = langButton.textContent === 'EN' ? 'JA' : 'EN';
    };

    // アプリを開く
    window.openApp = function(app) {
        closeAllWindows();
        document.getElementById(app).style.display = 'block';
    };

    // 各ウィンドウを閉じる
    window.closeControlPanel = function() { document.getElementById('control-panel').style.display = 'none'; };
    window.closeBrowser = function() { document.getElementById('browser').style.display = 'none'; };
    window.closeTimer = function() { document.getElementById('timer').style.display = 'none'; };
    window.closeClock = function() { document.getElementById('clock').style.display = 'none'; };
    window.closePaint = function() { document.getElementById('paint').style.display = 'none'; };
    window.closeExplorer = function() { document.getElementById('explorer').style.display = 'none'; };
    window.closeMinesweeper = function() { document.getElementById('minesweeper').style.display = 'none'; };
    window.closeAntivirus = function() { document.getElementById('antivirus').style.display = 'none'; };
    window.closeBadsoft = function() { document.getElementById('badsoft').style.display = 'none'; };

    // ロック画面
    window.lockScreen = function() {
        isLocked = true;
        lockScreen.style.display = 'flex';
        document.getElementById('desktop').style.pointerEvents = 'none';
    };

    window.unlockScreen = function() {
        isLocked = false;
        lockScreen.style.display = 'none';
        document.getElementById('desktop').style.pointerEvents = 'auto';
    };

    // シャットダウン
    window.shutdown = function() {
        bluescreen.style.display = 'block';
        setTimeout(() => location.reload(), 3000); // 3秒後にリロード
    };

    // インストールの進行
    window.nextInstallationStep = function(step) {
        document.getElementById(`installation-step-${step}`).style.display = 'none';
        document.getElementById(`installation-step-${step + 1}`).style.display = 'block';
    };

    window.finishInstallation = function() {
        document.getElementById('installation').style.display = 'none';
        document.getElementById('desktop').style.display = 'block';
    };

    // タイマー機能
    let timerInterval;
    window.startTimer = function() {
        const minutes = document.getElementById('timer-minutes').value;
        const totalTime = minutes * 60 * 1000;
        const endTime = Date.now() + totalTime;

        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            const remainingTime = endTime - Date.now();
            if (remainingTime <= 0) {
                document.getElementById('timer-display').textContent = '00:00';
                clearInterval(timerInterval);
            } else {
                const minutesLeft = Math.floor(remainingTime / (60 * 1000));
                const secondsLeft = Math.floor((remainingTime % (60 * 1000)) / 1000);
                document.getElementById('timer-display').textContent =
                    `${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
            }
        }, 1000);
    };

    // 時計機能
    setInterval(() => {
        const now = new Date();
        document.getElementById('clock-display').textContent =
            now.toTimeString().split(' ')[0];
    }, 1000);

    // ペイント機能
    const canvas = document.getElementById('paint-canvas');
    const ctx = canvas.getContext('2d');
    let painting = false;

    canvas.addEventListener('mousedown', () => painting = true);
    canvas.addEventListener('mouseup', () => painting = false);
    canvas.addEventListener('mousemove', (e) => {
        if (painting) {
            ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            ctx.stroke();
        }
    });

    window.clearCanvas = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    // エクスプローラーにペイント画像を表示
    window.openExplorer = function() {
        const imageUrl = canvas.toDataURL();
        explorerImage.src = imageUrl;
        openApp('explorer');
    };
});
