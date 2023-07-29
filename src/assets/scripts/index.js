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

		const data = {
			name: elements['name'].value,
			email: elements['email'].value,
			message: elements['message'].value
		}
		elements['name'].value = ''
		elements['email'].value = ''
		elements['message'].value = ''

		fetch('/api/communications', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((response) => {
				if (response.ok) {
					const successMessage = document.createElement('div')
					successMessage.textContent = 'Email is sent successfully'
					successMessage.classList.add('success-message')

					document.body.appendChild(successMessage)

					setTimeout(() => {
						document.body.removeChild(successMessage)
					}, 5000)
				} else {
					throw new Error('Email sending failed')
				}
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	})

function updateScreenSize() {
  // Get the screen height and width using JavaScript
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;

  // Update the CSS custom properties with dynamic values
  document.documentElement.style.setProperty('--screen-height', `${screenHeight}px`);
  document.documentElement.style.setProperty('--screen-width', `${screenWidth}px`);
}

window.addEventListener('resize', updateScreenSize);
