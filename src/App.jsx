import Teclado from './components/Teclado'
import Forca from './components/Forca'
import { useEffect, useState } from 'react'

function App() {
	const [resposta, setResposta] = useState('melancia')
	const [palavra, setPalavra] = useState('')

	useEffect(() => {
		setPalavra('_'.repeat(resposta.length))
	}, [resposta])

	return (
		<div className="bg-lime-500 h-screen flex justify-center items-center">
			<main className="bg-white p-8 rounded flex gap-16">
				<Forca />
				<Teclado palavra={palavra} />
			</main>
		</div>
	)
}
export default App
