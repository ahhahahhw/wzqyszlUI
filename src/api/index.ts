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

/**
 * 获取所有blog
 */
export const fGetBlogAll = () => {
    return service.post('/manager/getBlogAll')
}


//文件上传
export const fUploadImage = (file: any) => {
    return service.post('/manager/uploadImage', file,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    )
}

/**
 * 获取所有图片信息
 */
export const fGetImageInfoAll = () => {
    return service.post('/manager/getImageInfoAll')
}

/**
 * 删除图片
 * @param id 图片的id
 */
export const fDeleteImage = (id: any) => {
    return service.post('/manager/deleteImage', id)
}

/**
 * 获取一篇blog
 * @param data
 */
export const fGetBlog = (data: any) => {
    return service.post('/visitor/getBlog', data, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
}

/**
 * 登录接口
 * @param data
 */
export const fLogin = (data: any) => {
    return service.post('/visitor/login', data, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
}

/**
 * 获取所有用户
 */
export const fGetUserAll = () => {
    return service.post('/manager/getUserAll')
}

/**
 * 获取指定类型所有blog
 * @param type
 */
export const fGetBlogsByType = (type: any) => {
    return service.post('/visitor/getBlogsByType', type)
}

/**
 * 保存blog
 * @param data
 */
export const fSaveBlog = (data: any) => {
    return service.post('/manager/saveBlog', data, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
}

/**
 * 分页获取消息
 * @param data
 */
export const fGetMessagesByPage = (data: any) => {
    return service.post('/visitor/getMessagesByPage', data, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
}

/**
 * 分页获取评论
 * @param data
 */
export const fGetCommentsByPage = (data: any) => {
    return service.post('/visitor/getCommentsByPage', data, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
}

/**
 * 保存评论
 * @param data
 */
export const fSaveComment = (data: any) => {
    return service.post('/visitor/saveComment', data, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
}



