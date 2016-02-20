		var link = document.querySelector(".map-contacts-btn");
		var popap = document.querySelector(".modal-content");
		var overlay =document.querySelector(".modal-overlay");
		link.addEventListener("click", function(event) {
		event.preventDefault();
		popap.classList.add("modal-content-show");
		overlay.classList.add("modal-content-show");
		});	

		var linkClose = document.querySelector(".modal-content-close");
		var overlay = document.querySelector(".modal-overlay");
		linkClose.addEventListener("click", function(event) {
		event.preventDefault();
		popap.classList.remove("modal-content-show");
		overlay.classList.remove("modal-content-show");
		});
		
		overlay.addEventListener("click", function(event) {
		event.preventDefault();
		popap.classList.remove("modal-content-show");
		overlay.classList.remove("modal-content-show");
		});