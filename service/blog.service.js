const db = require('_helpers/db');

module.exports = {
    createBlogService
}

async function createBlogService({ enTitle, enDescription,enBody }){
    const blog = new db.Blog({enTitle, enDescription,enBody})
    const createdNewBlogs = await blog.save()
    return {
        blog:createdNewBlogs
    }
}


