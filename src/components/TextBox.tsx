import { useState } from "react";

const TextBox = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<article>
			<h1>Content</h1>
			<button>{isOpen ? "open" : "close"}</button>
			{isOpen ? (
				<p>
					descriptison ipsum dolor sit, amet consectetur adipisicing elit. In suscipit
					dolor, harum maiores hic amet sit itaque, similique perspiciatis
					repellendus voluptatibus. Aliquam a nemo quod molestias, ea minus eos
					tempora?
				</p>
			) : (
				""
			)}
		</article>
	);
};

export default TextBox;
