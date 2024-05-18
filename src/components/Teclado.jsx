/* eslint-disable react/prop-types */
import Palavra from './Palavra'
import Tecla from './Tecla'

function Teclado({ palavra }) {
	const letras = 'abcdefghijklmnopqrstuvwxyz'.split('')
	return (
		<div className="flex flex-col justify-between">
			<Palavra palavra={palavra} />

			<div className="grid grid-cols-9 gap-1">
				{letras.map(letra => (
					<Tecla key={letra} letra={letra} />
				))}
			</div>
		</div>
	)
}
export default Teclado
