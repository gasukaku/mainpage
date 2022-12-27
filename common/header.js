function header(){
    $.ajax({
        url: '/common/tpl/header.html',
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    });
}
