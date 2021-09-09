// import {openModal} from "./commonFunctions.js";
// import {closeModal} from "./commonFunctions.js";
// import {goToPage} from "./commonFunctions.js";
// import {parentUntill} from "./commonFunctions.js";
import * as util from "./commonFunctions.js";

let deletePostBtns = document.querySelectorAll(".delete-post");
let deleteModal = document.querySelector(".delete-post-modal");
let deleteYes = document.querySelector(".delete-yes");
let deleteNo = document.querySelector(".delete-no");
let moreInfoBtns = document.querySelectorAll(".post-card .more-info");


deletePostBtns.forEach(deletePostBtn=>{
  deletePostBtn.addEventListener("click",(e)=>{
    let postToBeDeleted = util.parentUntill("post-card",e.target);
    deleteYes.setAttribute("data-delete-post",postToBeDeleted.id);
    util.openModal(deleteModal);
  })
})

deleteYes.addEventListener("click",(e)=>{
  deletePost(e.target.getAttribute("data-delete-post"));
})

deleteNo.addEventListener("click",e=>{
	util.closeModal(deleteModal);
})

moreInfoBtns.forEach(moreInfoBtn=>{
  moreInfoBtn.addEventListener("click",(e)=>{
    util.goToPage("post.html");
  })
})


function deletePost(postToBeDeletedId){
  const postToBeDeleted = document.getElementById(postToBeDeletedId);
  postToBeDeleted.remove();
  util.closeModal(deleteModal);
}