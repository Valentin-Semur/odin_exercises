import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
}

function ListGroup({ items, heading }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<ul className="list">
			<li className="p-4 pb-2 opacity-70 tracking-wide" key="title">
				{heading}
			</li>
			{items.length === 0 && <p>No city found</p>}
			{items.map((item, index) => (
				<li
					key={item}
					className={
						selectedIndex === index
							? "list-row bg-blue-500 text-white"
							: "list-row"
					}
					onClick={() => setSelectedIndex(index)}
					onKeyDown={() => setSelectedIndex(index)}
				>
					{item}
				</li>
			))}
		</ul>
	);
}

export default ListGroup;
