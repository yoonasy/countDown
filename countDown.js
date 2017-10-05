/**
 * 
 * @authors Yoonasy (709533372@qq.com)
 * @date    2017-09-16 23:00:19
 * @version 0.0.1
 */


    function countDown(json) {
        /*var arr = json.target.split(" ");

        var dateT = arr[0].split( "-" );
        var timeT = [];

        if( arr[1] ) {
            timeT = arr[1].split(":");
        }

        var a,b,c,d,e,f;
        // 取出年月日
        a = dateT[0];
        b = dateT[1];
        c = dateT[2];

        // 取时分秒
        d = timeT[0]||0;
        e = timeT[1]||0;
        f = timeT[2]||0;
*/

        var time = json.target;
        var reg = /\.|\/|\s|:|-|,/g;
        var arr = time.split( reg );

        if( arr.length==2 || arr.length==5 ) {
            arr.unshift(new Date().getFullYear() + "");
        }
        if(arr[0].length != 4) {
            arr[0] = new Date().getFullYear() + "";
        }

        console.log(arr);

        var a,b,c,d,e,f;
        a = arr[0];
        b = arr[1];
        c = arr[2];
        d = arr[3]||0;
        e = arr[4]||0;
        f = arr[5]||0;

        var temp = (new Date(a, b-1, c, d, e, f) - new Date()) / 1000;

        // 获取秒
        var ss = parseInt(temp) % 60;
        // 获取分
        var mm = parseInt(temp / 60) % 60;
        // 获取小时
        var hh = parseInt(temp / 3600);

        if( json.success && (typeof json.success).toLowerCase() === "function" ) {
            json.success(hh, mm, ss);
        }

        return "距离目标时间还差："+hh+"时"+mm+"分"+ss+"秒";
    }