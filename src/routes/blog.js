const { SuccessModel } = require('../model/responseModel.js');
const { getList } = require('../../src/controllers/blog.js')
const handleBlogRoute = (req, res) => {
    // 定义处理路由的逻辑
    let { method, path, query = {} } = req;

    switch(method) {
        case 'GET':
            if (path === '/api/blog/list') {
                const name = query.name || '';
                const keyword = query.keyword || '';
                const listData = getList(name, keyword);

                return new SuccessModel(listData);
                // return {
                //     message: 'ok, success!'
                // }
            }
            break;

        case 'POST':
            if (path === '/post/test') {
                return {
                    message: 'post api success'
                }
            }

            break;
        default:
            break;
    }
}

module.exports = handleBlogRoute;