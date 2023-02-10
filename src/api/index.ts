import service from "@/utils/request";

//测试
export const fTest = () => {
    return service.get('/test')
}

//获取图片信息
export const fGetImageByType = (data: any) => {
    return service.post('/visitor/getImageByType', data)
}

// 获取图片信息
export const fGetRandomImage = (data: any) => {
    return service.post('/visitor/getRandomImage', data)
}