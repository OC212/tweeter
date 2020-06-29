const tweeter = Tweeter()

const renderer = Renderer()
const posts = tweeter.getPosts()

renderer.renderPosts(posts)


$('#post').on('click', function () {
    tweeter.addPost($("#input").val())
    renderer.renderPosts(posts)
});

$('#posts').on('click', '.delete', function () {
    const post = $(this).closest($('.post'))
    tweeter.removePost(post.data().post)
    renderer.renderPosts(posts)
})

$('#posts').on('click', 'comment-btn', function () {
    const postId = $(this).closest($('.post')).data().post
    const commentText = $(this).closest($('.post')).find('.add-comment').val()
    tweeter.addComment(postId, commentText)
    renderer.renderPosts(posts)
})

$('#posts').on('click', '.delete-comment', function () {
    const pID = $(this).closest($('.post')).data().post
    const cId = $(this).closest($('.comments')).data().comment

    tweeter.removeComment(pID, cId)
    renderer.renderPosts(posts)
})

