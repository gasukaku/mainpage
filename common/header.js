function writeHeader(rootDir){
    $.ajax({
       url : "https://www.gasukaku.net/common/header.html"
        
        async: false,
        success: function(html){

            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}
