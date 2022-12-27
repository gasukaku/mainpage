function header(){
    ajax({
        url: 'https://www.gasukaku.net/common/header.html',
        cache: false,
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    });
}
