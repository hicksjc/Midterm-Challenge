var MODEL = (function(){
    var _changePage = function(pageName){
        $.get(`pages/${pageName}/${pageName}.html`,function(data){
            $('#app').html(data);
        })
    }
    return {
        changePage: _changePage,
    };

}) ();
