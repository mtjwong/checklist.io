var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var elements = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markListItem () { 
	var elements = document.querySelectorAll("li");
for(i = 0; i<elements.length;i++){
   elements[i].addEventListener("click", function(){
      if(!this.dataset.clicked){
         this.setAttribute("data-clicked", "true");
         this.classList.toggle("done");
      }else{
         this.removeAttribute("data-clicked");
         this.classList.toggle("done");
      } 
   });
}}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

button.addEventListener("click", markListItem);
input.addEventListener("keypress", markListItem);

markListItem();





