function header(){
    $.ajax({
        url: 'https://www.gasukaku.net/common/header.html',
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    });
}
