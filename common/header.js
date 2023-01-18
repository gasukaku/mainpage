function writeHeader(rootDir){
    $.ajax({
        url: rootDir + "https://www.gasukaku.net/common/header.html",
        cache: false,
        async: false,
        success: function(html){

            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}
