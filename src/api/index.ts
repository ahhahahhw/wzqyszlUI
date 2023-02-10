import service from "@/utils/request";

/**
 * 测试后端使用,无需理会
 */
export const fTest = () => {
    return service.get('/test')
}

/**
 * 获取指定图片类型
 * @param data 示例:"背景图片"
 */
export const fGetImageByType = (data: any) => {
    return service.post('/visitor/getImageByType', data)
}

/**
 * 获取指定图片类型,随机一张
 * @param data 示例:"背景图片"
 */
export const fGetRandomImage = (data: any) => {
    return service.post('/visitor/getRandomImage', data)
}