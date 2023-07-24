const landing = document.getElementById('landing')

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		})
	})
})

landing.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}
