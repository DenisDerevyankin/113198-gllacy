<script>
		var link = document.querySelector(".map-contacts-btn");
		var popap = document.querySelector(".modal-content");
		var overlay =document.querySelector(".modal-overlay");
		link.addEventListener("click", function(event) {
		event.preventDefault();
		popap.classList.add("modal-content-show");
		overlay.classList.add("modal-content-show");
		});	

		var linkClose = document.querySelector(".modal-content-close");
		var overlay =document.querySelector(".modal-overlay");
		linkClose.addEventListener("click", function(event) {
		event.preventDefault();
		popap.classList.remove("modal-content-show");
		overlay.classList.remove("modal-content-show");
		});
</script>
		
	<script type="text/javascript" charset="utf-8" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=ddZHNwNFntkweu38ou94xHO3SVr1MDf0&height=430&lang=ru_RU&sourceType=constructor&id=yandex-map"></script>