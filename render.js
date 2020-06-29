const Renderer = function () {

    const renderPosts = function (posts) {
        
         $('#posts').empty()
        let html = '';
        for (let post of posts) {
            html += '<div class="post" data-post="'+ post.id +'">'
            html += '<h3 class="post-text">'+ post.text +'</h3>'
            
            for(comment of post.comments){
                html += `<div class="comments" data-comment="${comment.id}">` 
                html += '<span  class="delete-comment">X</span>'
                html += comment.text
                html += '</div>'
            }
            html += '<input class="marom"type="text" placeholder="got somthing to say?" >'
            html += '<button class="asi">comment</button>'
            html +=  '<br><button class="delete">Delete Post</button>'
            html += '</div>'
        }

        $('#posts').append(html)
    }

    return {renderPosts}
}



const Renderer = function () {

    const renderPosts = function (posts) {

        $('#posts').empty()
        let html = '';
        for(let post of posts) {
            html +=
        }











    }

    return {renderPosts}
}
