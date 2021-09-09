import * as util from "./commonFunctions.js";

let signinBtn = document.querySelector(".signin");
let signupBtn = document.querySelector(".signup");
let modalCloseBtns = document.querySelectorAll(".modal-close");
let signupModal = document.querySelector(".signup-modal");
let signinModal = document.querySelector(".signin-modal");
let notMemberSignUp = document.querySelector(".not-member .signup-link");
let createPostBtn = document.querySelector(".create-posts");
let createPostModal = document.querySelector(".create-post-modal");
let allPostsBtn = document.querySelector(".all-posts");


signupBtn.addEventListener("click",(e)=>{
	util.openModal(signupModal);
})

signinBtn.addEventListener("click",(e)=>{
	util.openModal(signinModal);
})

createPostBtn.addEventListener("click",(e)=>{
	util.openModal(createPostModal);
})

notMemberSignUp.addEventListener("click",(e)=>{
	e.preventDefault();
	util.closeModal(signinModal);
	util.openModal(signupModal);
})

allPostsBtn.addEventListener("click",(e)=>{
	util.goToPage("/html/postslist.html");
})

modalCloseBtns.forEach(modalCloseBtn=>{
	modalCloseBtn.addEventListener("click",(e)=>{
		const modalToClose = util.parentUntill("modal-container",modalCloseBtn);
		util.closeModal(modalToClose);
	})
})
