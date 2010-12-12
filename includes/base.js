opera.extension.onmessage = function(e){
    if(e.data){
        ['readStyle', 'readSize', 'readMargin'].forEach(function(var_name){
            window[var_name] = '';
        })
        var scripts = [];
        for( var i = 0, _scripts = document.querySelectorAll('script'), l = _scripts.length; i < l && scripts.push( _scripts[i] ); i++);
        
        scripts.forEach(function(script){
            script.parentNode.removeChild(script);
        })
        
        
        var s = document.createElement('script');
        s.src = 'http://arc90labs-readability.googlecode.com/files/readability.js';
        document.body.appendChild(s);
        document.body.style.maxWidth = '960px';
        document.body.style.marginLeft = document.body.style.marginRight = 'auto';
    }
}
//http://lab.arc90.com/experiments/readability/images/footer.png