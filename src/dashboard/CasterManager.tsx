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

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>Caster 1</label>
				<input type="text" placeholder="Caster1" name="caster1" defaultValue={caster1} />
				<label>Caster 2</label>
				<input type="text" placeholder="Caster2" name="caster2" defaultValue={caster2} />

				<input type="submit" />
			</form>
		</>
	)
}
