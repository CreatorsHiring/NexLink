document.addEventListener("click", (e) => {

    const likeBtn = e.target.closest(".like, .liked");
    if (!likeBtn) return;

    const post = likeBtn.closest(".content-container");
    const likesText = post.querySelector(".likes-text");

    let likesCount = parseInt(likesText.innerText);

    // LIKE
    if (likeBtn.classList.contains("like")) {
        likesText.innerText = `${likesCount + 1} likes`;
        likeBtn.classList.replace("like", "liked");
    }

    // UNLIKE
    else if (likeBtn.classList.contains("liked")) {
        likesText.innerText = `${likesCount - 1} likes`;
        likeBtn.classList.replace("liked", "like");
    }

});



// document.addEventListener("click", (e) => {

//     // LIKE
//     if (e.target.classList.contains("like")) {
//         const post = e.target.closest(".content-container");
//         const likesText = post.querySelector(".likes-text");

//         let likesCount = parseInt(likesText.innerText);
//         likesText.innerText = `${likesCount + 1} likes`;

//         e.target.classList.replace("like", "liked");
//     }

//     // UNLIKE
//     if (e.target.classList.contains("liked")) {
//         const post = e.target.closest(".content-container");
//         const likesText = post.querySelector(".likes-text");

//         let likesCount = parseInt(likesText.innerText);
//         likesText.innerText = `${likesCount - 1} likes`;

//         e.target.classList.replace("liked", "like");
//     }

// });