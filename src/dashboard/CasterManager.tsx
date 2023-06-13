import React from 'react';
import { useReplicant } from 'use-nodecg';

export function CasterManager() {

	const [caster1, set_caster1] = useReplicant<string>('caster1', '');
	const [caster2, set_caster2] = useReplicant<string>('caster2', '');


	const handleSubmit = (event) => {
		event.preventDefault();
		set_caster1(event.target.caster1.value)
		set_caster2(event.target.caster2.value)
	}

	const swapTeams = (event: any) => {
		event.preventDefault();
		console.log("Swapping casters around")
		let temp = caster1
		set_caster1(caster2)
		set_caster2(temp)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>Caster 1</label>
				<input type="text" placeholder="Caster1" name="caster1" defaultValue={caster1} />
				<button onClick={swapTeams} className="swapButton w-36" name="swapTeams">
					Swap Casters
				</button>
				<label>Caster 2</label>
				<input type="text" placeholder="Caster2" name="caster2" defaultValue={caster2} />

				<input type="submit" />
			</form>
		</>
	)
}
