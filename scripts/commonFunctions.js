export function openModal(modal){
	modal.classList.remove("hide");
	modal.classList.add("show");
}

export function closeModalById(modalID){
	let modal = document.getElementById(modalID); 
	modal.classList.add("hide");
	modal.classList.remove("show");
}

export function closeModal(modal){
	modal.classList.add("hide");
	modal.classList.remove("show");
}

export function goToPage(href){
	window.location.href = href;
}

export function parentUntill(untill,element){
  let parentFound = false;
  let parent = element.parentNode;
  while(parentFound === false){
    parent = parent.parentNode;
    if(parent.classList.contains(untill)){
      parentFound = true;
    }
  }
  return parent;
}
