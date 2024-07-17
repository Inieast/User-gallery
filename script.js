document.querySelectorAll(".profile").forEach((profile) => {
	profile.addEventListener("click", function () {

		document.querySelectorAll(".detail").forEach((detail) => {
			detail.classList.add("active");
		});
	});
});

document.querySelectorAll(".close").forEach((close) => {
	close.addEventListener("click", function () {
		document.querySelectorAll(".detail").forEach((detail) => {
			detail.classList.remove("active");
		});
	});
});