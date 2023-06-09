import React from 'react';
import { useReplicant } from 'use-nodecg';

export function Index() {

	const [caster1, set_caster1] = useReplicant<string>('caster1', '');
	const [caster2, set_caster2] = useReplicant<string>('caster2', '');

	return (
		<>
			<div className='caster1'><h1>{caster1}</h1></div>
			<div className='caster2'><h1>{caster2}</h1></div>
		</>
	);
}
