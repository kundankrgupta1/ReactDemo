import { useContext } from "react"
import { ContextProviderAPI } from "../Context/ContextProvider"

const Card = ({ id, question, answer }) => {

	const { setCardId } = useContext(ContextProviderAPI);

	return (
		<div className="flex gap-4">
			<div className="rounded-md bg-green-200 flex flex-col gap-4 border"
				style={{ padding: "20px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}
			>
				<p>Question {id}. {question} </p>
				<p className="flex gap-4">Answer: {answer}
					<input type="radio" onClick={() => setCardId(id)} />
				</p>
			</div>
		</div>
	)
}

export default Card