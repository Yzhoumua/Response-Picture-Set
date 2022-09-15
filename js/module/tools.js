//判断是否相等
export function screen (dom,imgs){
     return imgs.filter(function(n,nt){
        return   n.num == dom
     });
}
//添加active
export function isActive(dom,doms){
   
    for (const iterator of doms) {
         iterator.classList.remove('active')
    }
    dom.classList.add('active');
}