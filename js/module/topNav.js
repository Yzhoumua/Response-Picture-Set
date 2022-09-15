//获取元素
const imgHead = document.getElementsByClassName('imgHead')[0];
const headNav = document.getElementsByClassName('headNav')[0];

let navShowKey = true;

export function nvaShow(){
    if(navShowKey){
        addClass(imgHead);
        addClass(headNav);
        navShowKey = false;
    }else{
      
        removeClass(imgHead);
        removeClass(headNav);
        navShowKey = true;
    }
}
//添加Class
function addClass(dom){
    dom.classList.add('active');
}
//移出class
function removeClass(dom){
    dom.classList.remove('active');
}
