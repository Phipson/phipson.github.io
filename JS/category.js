$(document).ready(function(){
    var showdefault = "all";
    var grid = document.querySelector('.grid-display');
    var elements = document.querySelectorAll('[data-category]');
    
    function filterer(){
        var category = this.getAttribute('data-button');
        $(grid).empty();
        if (category == showdefault){
            elements.forEach(function(item){
                grid.append(item);
            });
        } else {
            elements.forEach(function(item){
                var itemstring = item.getAttribute('data-category');
                var i;
                for (i = 0; i < itemstring.length; i++){
                    if (itemstring.charAt(i) == category){
                        grid.append(item);
                        break;
                    }
                }
            });
        }
    };

    $('.show-button').click(filterer);
})