import { useState, useEffect } from 'react'

export default () => {
	const [lat, setLat] = useState(null)
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		if (window.navigator.geolocation) {
			window.navigator.geolocation.getCurrentPosition(
				position => setLat(position.coords.latitude),
				err => setErrorMessage(err.message)
			)
		} else {
			// this.setState({ errorMessage: ' Something went wrong' })
			setLat(37)
		}
	}, [])

	return [lat, errorMessage]
}
