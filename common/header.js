function writeHeader(rootDir){
    $.ajax({
        url: rootDir + "header.html", 
        cache: false, //キャッシュを利用するか（お好みで）
         success: function(html){

            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}
