
window.onload=function () {

    // 连接我的优酷
    $('#myhome').click(function () {
        open('https://v.youku.com/v_show/id_XNDIyMzExMDgyOA==.html','_blank')
    })

    // 返回顶部锚链接
    $('#backup').click(function () {
        $.fn.fullpage.moveTo('page1')
    })


}