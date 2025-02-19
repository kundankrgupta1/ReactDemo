import { useContext } from 'react'
import Card from './Components/Card.jsx'
import data from './Data.js'
import { ContextProviderAPI } from './Context/ContextProvider.jsx'
console.log(data)
const App = () => {
	const { cardId } = useContext(ContextProviderAPI);
	return (
		<div>
			<progress max="5" value={cardId}>Completed</progress>

			{data && data.map((e, index) => {
				return (
					<Card key={index} {...e} />
				)
			})}

			<div className="flex gap-4">
				<button>submit</button>
			</div>
		</div>
	)
}

export default App