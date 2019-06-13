// ==UserScript==
// @name         去除CSDN博客侧边栏和下栏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       云未归来
// @match        https://blog.csdn.net/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var array=new Array("csdn-toolbar","asideCustom19062676","asideColumn","asideProfile","asideNewArticle","asideCategory","asideArchive","asideHotArticle","asideNewComments","asideFooter","commentPage");
    var doc;
    for(var i=0;i<array.length;i++)
    {
        doc=document.getElementById(array[i]);
        if(doc)
        {
            //  alert("1111111");
            //console.log(array[i]+"\r\n");
            doc.parentNode.removeChild(doc);
        }//else
        //  {
        //alert("222222");
        // }
    }
    function removeTags(tagName,tagClass){
        var tagElements = document.getElementsByTagName( tagName );
        for( var m = 0 ; m < tagElements.length ; m++ ){
            if( tagElements[m].className == tagClass ){
                tagElements[m].parentNode.removeChild( tagElements[m] );
                break;
            }
        }
    }
    function GetElementByTags(tagName,tagClass){
        var tagElements = document.getElementsByTagName( tagName );
        for( var m = 0 ; m < tagElements.length ; m++ ){
            if( tagElements[m].className == tagClass ){
                return tagElements[m];
            }
        }
        return null;
    }
    removeTags("div","comment-box");
    removeTags("div","recommend-box");
    removeTags("div","article-copyright");
    removeTags("div","article-bar-top");
    removeTags("div","recommend-right");

    var mymain=document.getElementsByTagName("main")
    if(mymain)
    {
        mymain[0].style.position="relative";
        mymain[0].style.left="-200px";
    }

    // var mybody=GetElementByTags("body","nodata ");
    // var myalign = document.createAttribute("align"); //创建属性
    //myalign.value = "center"; //设置属性值
    // mybody.setAttributeNode(myalign); //给div添加属性
    // Your code here...
})();