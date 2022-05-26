import React from "react";
import Spiderman from "./Images/spiderman.mp4";

function LandingPage() {
	return (
		<div>
			<div className="landing">
				<video
					autoPlay
					muted
					loop
					style={{ width: "100%", height: "500px", objectFit: "cover" }}
				>
					<source src={Spiderman} type="video/mp4" />
				</video>
			</div>
			<div className="text1" style={{ position: "absolute", top: "170px",margin:'50px' }}>
				<h3>SPIDERMAN-THE-COMPLETE-SERIES </h3>
				<br/>
				<h4>
					When bitten by a genetically modified spider,<br/> a nerdy, shy, and
					awkward high school student <br/>gains spider-like abilities that he
					eventually must <br/>use to fight evil as a superhero after tragedy befalls<br/>
					his family. Based on Marvel Comics' superhero character,<br/> this is a
					story of Peter Parker who is a nerdy high-schooler.
				</h4>
				<br/>
				<button>Watch Movie</button>
			</div>
		</div>
	);
}

export default LandingPage;
