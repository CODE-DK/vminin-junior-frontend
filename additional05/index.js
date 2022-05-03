const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";

const renderPost = async (postId) => {
  try {
    const response = await fetch(`${URL_POSTS}/${postId}`);
    const post = await response.json();

    const commentsResponse = await fetch(`${URL_COMMENTS}?postId=${postId}`);
    const comments = await commentsResponse.json();

    printMe(post, comments);
  } catch (error) {
    console.error(error);
  }
};

function printMe(post, comments) {
  const postComments = document.createElement("div");
  postComments.classList.add("post__comments");

  // ---

  comments.forEach((comment) => {
    const postCommentText = document.createElement("span");
    postCommentText.classList.add("post-comment__text");
    postCommentText.textContent = comment.body;

    const postCommentAuthor = document.createElement("span");
    postCommentAuthor.classList.add("post-comment__author");
    postCommentAuthor.textContent = comment.email;

    const postComment = document.createElement("div");
    postComment.classList.add("post-comment");
    postComment.append(postCommentAuthor);
    postComment.append(postCommentText);

    postComments.append(postComment);
  });

  // ---

  const postCommentsText = document.createElement("b");
  postCommentsText.classList.add("post__comments-text");
  postCommentsText.textContent = "Комментарии";

  const postText = document.createElement("p");
  postText.classList.add("post__text");
  postText.textContent = post.body;

  const postTitle = document.createElement("h1");
  postTitle.classList.add("post__title");
  postTitle.textContent = post.title;

  const postHTML = document.createElement("div");
  postHTML.id = "post";
  postHTML.classList.add("post");
  postHTML.append(postTitle);
  postHTML.append(postText);
  postHTML.append(postCommentsText);
  postHTML.append(postComments);

  const body = document.querySelector("body");
  body.append(postHTML);
}

renderPost(1);
