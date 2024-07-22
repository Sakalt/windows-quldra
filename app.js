// UI コントロール
document.addEventListener('DOMContentLoaded', function() {
    const startMenu = document.getElementById('start-menu');
    const lockScreen = document.getElementById('lock-screen');
    const bluescreen = document.getElementById('bluescreen');
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

    // アプリを閉じる
    window.closeControlPanel = function() { document.getElementById('control-panel').style.display = 'none'; };
    window.closeBrowser = function() { document.getElementById('browser').style.display = 'none'; };
    window.closeTimer = function() { document.getElementById('timer').style.display = 'none'; };
    window.closeClock = function() { document.getElementById('clock').style.display = 'none'; };
    window.closePaint = function() { document.getElementById('paint').style.display = 'none'; };
    window.closeExplorer = function() { document.getElementById('explorer').style.display = 'none'; };
    window.closeMinesweeper = function() { document.getElementById('minesweeper').style.display = 'none'; };
    window.closeAntivirus = function() { document.getElementById('antivirus').style.display = 'none'; };
    window.closeBadsoft = function() { document.getElementById('badsoft').style.display = 'none'; };

    // すべてのウィンドウを閉じる
    function closeAllWindows() {
        const windows = document.querySelectorAll('.window');
        windows.forEach(win => win.style.display = 'none');
    }

    // ロック画面を表示
    window.lockScreen = function() {
        lockScreen.style.display = 'flex';
        document.getElementById('desktop').style.display = 'none';
        isLocked = true;
    };

    // ロック画面を解除
    window.unlockScreen = function() {
        lockScreen.style.display = 'none';
        document.getElementById('desktop').style.display = 'block';
        isLocked = false;
    };

    // シャットダウン
    window.shutdown = function() {
        document.getElementById('bluescreen').style.display = 'block';
        setTimeout(() => {
            document.getElementById('bluescreen').style.display = 'none';
            alert('シャットダウンします。');
        }, 3000);
    };

    // タイマー
    let timerInterval;
    window.startTimer = function() {
        const minutes = parseInt(document.getElementById('timer-minutes').value, 10);
        if (isNaN(minutes) || minutes <= 0) return;
        let seconds = minutes * 60;
        timerInterval = setInterval(() => {
            const min = Math.floor(seconds / 60);
            const sec = seconds % 60;
            document.getElementById('timer-display').textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
            if (seconds > 0) {
                seconds--;
            } else {
                clearInterval(timerInterval);
                alert('タイマー終了!');
            }
        }, 1000);
    };

    // クロック
    window.updateClock = function() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('clock-display').textContent = `${hours}:${minutes}:${seconds}`;
    };
    setInterval(updateClock, 1000);

    // ペイント
    const canvas = document.getElementById('paint-canvas');
    const ctx = canvas.getContext('2d');
    let painting = false;

    canvas.addEventListener('mousedown', () => { painting = true; });
    canvas.addEventListener('mouseup', () => { painting = false; });
    canvas.addEventListener('mousemove', draw);

    function draw(event) {
        if (!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#aaaaaa'; // ペイントの色を設定
        ctx.beginPath();
        ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
    }

    window.clearCanvas = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    // エクスプローラー画像のアップロード
    window.openExplorer = function() {
        closeAllWindows();
        document.getElementById('explorer').style.display = 'block';
        // 画像を読み込みます
        document.getElementById('explorer-image').src = 'path_to_image.jpg'; // 適切なパスを設定
    };

    // インストール機能
    window.nextInstallationStep = function(step) {
        document.getElementById(`installation-step-${step}`).style.display = 'none';
        if (step < 4) {
            document.getElementById(`installation-step-${step + 1}`).style.display = 'block';
        }
    };

    window.finishInstallation = function() {
        document.getElementById('installation').style.display = 'none';
        document.getElementById('desktop').style.display = 'block';
    };
});
