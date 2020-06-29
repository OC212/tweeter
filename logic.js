const Tweeter = function () {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = 3
    let commentIdCounter = 7

    const addPost = function (text1) {
        const newPost = {
            text: text1,
            id: "p" + postIdCounter,
            comments: [],
        }
        postIdCounter++
        posts.push(newPost)
    }

    const getPosts = function () {
        return posts
    }

    const removePost = function (postID) {
        for (let i in posts) {
            if (posts[i].id === postID)
                posts.splice(i, 1)
        }
    }

    const addComment = function (postID, text2) {
        const newComment = {
            id: "c" + commentIdCounter,
            text: text2
        }
        commentIdCounter++
        for (let i in posts) {
            if (posts[i].id === postID)
                posts[i].comments.push(newComment)
        }
    }

    const removeComment = function (postID, commentID) {
        for (let i in posts) {
            if (posts[i].id === postID) {
                for (let j in posts[i].comments) {
                    if (posts[i].comments[j].id === commentID) {
                        posts[i].comments.splice(j, 1)
                    }
                }
            }
        }
    }

    return {
        addPost: addPost,
        addComment: addComment,
        getPosts: getPosts,
        removeComment: removeComment,
        removePost: removePost,
    }
}






