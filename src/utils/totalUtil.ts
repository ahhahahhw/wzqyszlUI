
export const getDateDiff = (dateStr: any) => {
    let publishTime = isNaN(Date.parse(dateStr.replace(/-/gi, "/")) / 1000) ? Date.parse(dateStr) / 1000 : Date.parse(dateStr.replace(/-/gi, "/")) / 1000;
    let d_seconds,
        d_minutes,
        d_hours,
        d_days,
        timeNow = Math.floor(new Date().getTime() / 1000),
        d,
        date = new Date(publishTime * 1000),
        Y = date.getFullYear(),
        M: any = date.getMonth() + 1,
        D: any = date.getDate(),
        H: any = date.getHours(),
        m: any = date.getMinutes(),
        s: any = date.getSeconds();
    //小于10的在前面补0
    if (M < 10) {
        M = '0' + M;
    }
    if (D < 10) {
        D = '0' + D;
    }
    if (H < 10) {
        H = '0' + H;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    d = timeNow - publishTime;
    d_days = Math.floor(d / 86400);
    d_hours = Math.floor(d / 3600);
    d_minutes = Math.floor(d / 60);
    d_seconds = Math.floor(d);
    if (d_days > 0 && d_days < 3) {
        return d_days + '天前';
    } else if (d_days <= 0 && d_hours > 0) {
        return d_hours + '小时前';
    } else if (d_hours <= 0 && d_minutes > 0) {
        return d_minutes + '分钟前';
    } else if (d_seconds < 60) {
        if (d_seconds <= 0) {
            return '刚刚发表';
        } else {
            return d_seconds + '秒前';
        }
    } else if (d_days >= 3) {
        return Y + '-' + M + '-' + D + ' ' + H + ':' + m;
    }
}