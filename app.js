const querystring = require('querystring');
const handleBlogRoute = require('./src/routes/blog.js');

const serverHandle = (req, res) => {
    res.setHeader('Content-Type', 'application/json'); // 设置返回格式

    const url = req.url;
    req.path = url.split('?')[0];
    req.query = querystring.parse(url.split('?')[1]);

    const blogData = handleBlogRoute(req, res);

    if (blogData) {
        res.end(
            JSON.stringify(blogData)
        );
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
}

module.exports = serverHandle;