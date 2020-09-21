var header = document.getElementById('header');
if(header){
    var headerH = header.clientHeight;
    document.body.style.paddingTop = headerH+"px";
}

//로딩 창
window.onload = function(){
    setTimeout(function(){
        document.getElementById('loading').classList.add('done');
    },1000);
}
