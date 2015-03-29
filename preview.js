(function(){
    var preview = {
        init: function(){
            var elements = document.querySelectorAll("[data-preview]");
            for(e in elements) {
                if(elements[e] instanceof Element)
                window.preview(elements[e], elements[e].dataset);
            }
        },
        preview: function(source, options){
            if(!options.target) options.target = source.dataset.target;

            var target = document.querySelector(options.target);
            source.addEventListener("change", function(event){
                if(this.files.length < 1) return;
                
                var reader = new FileReader();
                reader.onloadend = function(data){
                    if(data.target.result) target.src = data.target.result;
                };
                reader.readAsDataURL(this.files[0]);
            });
        }
    }

    window.preview = preview.preview;
    document.addEventListener("DOMContentLoaded", preview.init);
}());