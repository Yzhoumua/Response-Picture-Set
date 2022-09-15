import * as topNav from './topNav.js';
import * as imgliu from './imgliu.js';
import {screen, isActive} from './tools.js';
//给顶部导航添加效果
const navNone = document.querySelector('.navnone');
navNone.addEventListener('click',topNav.nvaShow);

//生成图片集
const imgContent = document.getElementsByClassName('imgContent')[0];
imgContent.append(imgliu.creatPage(imgliu.imgS));

//为每个图片添加hoverDom
const imgBox = document.getElementsByClassName('imgBox');
imgliu.imgShow(imgBox);

//筛选
let arr;
const centerHeadContNum = document.getElementsByClassName('centerHeadContNum');

//给每个li添加索引值
for(let i = 0; i < centerHeadContNum.length; i ++){
        centerHeadContNum[i].num = i;
        centerHeadContNum[i].addEventListener('click',function(){
                //添加激活效果并重新渲染
                isActive(this,centerHeadContNum);
                this.classList.add('active');
                arr =  screen(this.num,imgliu.imgS);
                imgContent.append(imgliu.creatPage(arr));
                imgliu.imgShow(imgBox);
        })
}
