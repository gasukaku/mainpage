function writeHeader(rootDir){
  $.ajax({
        url: "/amss/js/header.html",
        cache: false,
        async: false,
        success: function(html){

            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}

function writeFooter(rootDir){
  $.ajax({
        url: "/amss/js/footer.html",
        cache: false,
        async: false,
        success: function(html){

            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}

// 現在のURLを取得
const currentURL = window.location.href;

// パラメーターが既に含まれているかを確認
if (!currentURL.includes('?')) {
    // パラメーターが含まれていない場合、パラメーターを追加しないようにする
    const updatedURL = currentURL + '/';
    window.location.href = updatedURL;
}
