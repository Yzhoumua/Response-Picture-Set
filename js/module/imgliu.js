export let imgS = [
    {
        src: './image/liuimg/1.jpg',
        num: 1
    },
    {
        src: './image/liuimg/2.jpg',
        num: 1
    },
    {
        src: './image/liuimg/3.jpg',
        num: 1
    },
    {
        src: './image/liuimg/4.jpg',
        num: 2
    },
    {
        src: './image/liuimg/5.jpg',
        num: 2
    },
    {
        src: './image/liuimg/6.jpg',
        num: 2
    },
    {
        src: './image/liuimg/7.jpg',
        num: 3
    },
    {
        src: './image/liuimg/8.jpg',
        num: 3
    },
    {
        src: './image/liuimg/9.jpg',
        num: 3
    },
    {
        src: './image/liuimg/10.jpg',
        num: 4
    },
    {
        src: './image/liuimg/11.jpg',
        num: 4
    },
    {
        src: './image/liuimg/12.jpg',
        num: 4
    },
]


const imgContent = document.getElementsByClassName('imgContent')[0];
creatPage(imgS);
// 在页面中生成
export function creatPage(arr){
    if(arr.length == 0 || arr == null) arr = imgS;
    imgContent.innerHTML = '';
    for (const iterator of arr) {
        imgContent.append(creatDom(iterator.src, iterator.num))
    }
    return ''
}
//创建dom元素
function creatDom(src, num) {
    let imgBox = document.createElement('div');
    imgBox.data = num;
    imgBox.className = 'col-md-4 col-xl-3 col-sm-6 imgBox my-3 mx-2 p-0  position-relative';
    let img = document.createElement('img');
    img.src = src;
    img.className = 'img-fluid rounded';
    imgBox.append(img);
    return imgBox;
}
export const imgBox = document.getElementsByClassName('imgBox');


//创建一个Hover元素
function hoverImg() {
    let imgBoxHover = document.createElement('div');
    imgBoxHover.className = 'position-absolute d-flex w-100 h-100 imgBoxHover justify-content-center';
    imgBoxHover.innerHTML = `<div class="imgBoxHoverCenter align-self-center">
    <i class="d-inline-block text-center icon-kanguo iconfont"></i>
    <i class="d-inline-block text-center icon-quanping_o iconfont"></i>
</div>
<div class="position-absolute imgBoxHoverText">
    <h5>PROJECT TITLE</h4>
        <p>SKILLS</p>
</div>`
    return imgBoxHover
}
export function imgShow(doms) {
    for (const iterator of doms) {
        iterator.append(hoverImg());
    }
}
