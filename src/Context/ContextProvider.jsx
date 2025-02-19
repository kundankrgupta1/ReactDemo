import { createContext, useState } from "react";

export const ContextProviderAPI = createContext();

const ContextProvider = ({ children }) => {
	const [cardId, setCardId] = useState(1)
	return (
		<ContextProviderAPI.Provider value={{cardId, setCardId}}>
			{children}
		</ContextProviderAPI.Provider>
	)
}

export default ContextProvider;