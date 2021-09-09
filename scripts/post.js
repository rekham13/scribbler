let editableElements = document.querySelectorAll(".editable");
let editBtn = document.querySelector(".edit");
let likeBtn = document.querySelector(".like-btn");
let likeText = document.querySelector(".like-btn .like");
let numberOfLikesCaption = document.querySelector(".number-of-likes");
let commentBox = document.querySelector("#comment-box");
let commentBtn = document.querySelector(".comment-btn");
let allComments = document.querySelector(".all-comments");


editBtn.addEventListener("click",(e)=>{
  if(!editBtn.classList.contains("edit-on")){
    editBtn.classList.add("edit-on");
    editBtn.innerHTML = `Save <i class="fas fa-save save-icon"></i>`;
    editableElements.forEach(editableElement=>{
      editableElement.setAttribute("contenteditable","true");
      editableElement.classList.add("editing");
    })
  }else{
    editBtn.classList.remove("edit-on");
    editBtn.innerHTML = `Edit <i class="fas fa-edit edit-icon"></i>`;
    editableElements.forEach(editableElement=>{
      editableElement.removeAttribute("contenteditable");
      editableElement.classList.remove("editing");
    })
  }
})

likeBtn.addEventListener("click",(e)=>{
  let numberOfLikes = parseInt(numberOfLikesCaption.getAttribute("data-like-count"));
  numberOfLikes+=1;
  numberOfLikesCaption.setAttribute("data-like-count",numberOfLikes);
  numberOfLikesCaption.innerText = numberOfLikes + ` person likes this!`;
  likeText.innerText = "Liked!";
  setTimeout(()=>{
    likeText.innerText = "Like";
  },400)
})

commentBtn.addEventListener("click",(e)=>{
  const commentTemplate = `<p class="comment">${commentBox.value}</p>`
  allComments.innerHTML = commentTemplate + allComments.innerHTML;
  commentBox.value = " ";
})