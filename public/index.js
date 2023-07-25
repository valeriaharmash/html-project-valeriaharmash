const landing = document.getElementById('landing')

landing.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		})
	})
})

document
	.getElementById('contact-form')
	.addEventListener('submit', function (event) {
		event.preventDefault()

		const elements = event.target.elements

		const url = 'http://localhost:3000/api/communications'
		const data = {
			name: elements['name'].value,
			email: elements['email'].value,
			message: elements['message'].value
		}
		elements['name'].value = ''
		elements['email'].value = ''
		elements['message'].value = ''

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).catch((error) => {
			// Handle errors
			console.error('Error:', error)
		})
	})
