opera.extension.onmessage = function(e){
    if(e.data){
        (function(ctx){
            ctx.readConvertLinksToFootnotes=false;
            ctx.readStyle='style-newspaper';
            ctx.readSize='size-medium';
            ctx.readMargin='margin-wide';
            ctx._readability_script=document.createElement('script');
            ctx._readability_script.type='text/javascript';
            ctx._readability_script.src='http://lab.arc90.com/experiments/readability/js/readability.js?x='+(Math.random());
            ctx.document.documentElement.appendChild(ctx._readability_script);
            ctx._readability_css=document.createElement('link');
            ctx._readability_css.rel='stylesheet';
            ctx._readability_css.href='http://lab.arc90.com/experiments/readability/css/readability.css';
            ctx._readability_css.type='text/css';
            ctx._readability_css.media='all';
            ctx.document.documentElement.appendChild(ctx._readability_css);
            ctx._readability_print_css=document.createElement('link');
            ctx._readability_print_css.rel='stylesheet';
            ctx._readability_print_css.href='http://lab.arc90.com/experiments/readability/css/readability-print.css';
            ctx._readability_print_css.media='print';
            ctx._readability_print_css.type='text/css';
            ctx.document.getElementsByTagName('head')[0].appendChild(ctx._readability_print_css);
        })(window);

    }
}