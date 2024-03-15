// 以下のコードはChatGPT(GPT3.5)が書いています
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('question-form');

    // Google Apps Scriptの公開ウェブアプリケーションURL
    const gasUrl = 'https://script.google.com/macros/s/AKfycbw1r6KN9alKNRqFdooAH7Gl_KDnDEhz-jbIWngzSrBYotBbsOyL14w1gnqn-4_7AHxcIw/exec';

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const question = document.getElementById('question').value;

        // Google Apps Scriptにデータを送信
        fetch(gasUrl, {
            method: 'POST',
            body: JSON.stringify({ question }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.ok) {
                alert('質問が送信されました！');
                document.getElementById('question').value = ''; // テキストボックスをクリア
            } else {
                alert('質問の送信に失敗しました。');
            }
        })
        .catch(error => {
            console.error('エラー:', error);
            alert('エラーが発生しました。');
        });
    });
});
