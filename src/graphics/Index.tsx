import React from 'react';
import { useReplicant } from 'use-nodecg';

export function Index() {

	const [caster1, set_caster1] = useReplicant<string>('caster1', '');
	const [caster1_social, set_caster1_social] = useReplicant<string>('caster1social', '');
	const [show_caster1_social, set_show_caster1_social] = useReplicant<boolean>('showcaster1social', false);

	const [caster2, set_caster2] = useReplicant<string>('caster2', '');
	const [caster2_social, set_caster2_social] = useReplicant<string>('caster2social', '');
	const [show_caster2_social, set_show_caster2_social] = useReplicant<boolean>('showcaster2social', false);

	const [observer, set_observer] = useReplicant<string>('observer', '');
	const [show_observer, set_show_observer] = useReplicant<boolean>('showobserver', false);
	const [observer_social, set_observer_social] = useReplicant<string>('observersocial', '');
	const [show_observer_social, set_show_observer_social] = useReplicant<boolean>('showobserversocial', false);

	return (
		<>
			<div className='caster1 text-3xl'>
				<h1>{caster1}</h1>
			</div>

			<div className='caster2 text-3xl'>
				<h1>{caster2}</h1>
			</div>



			{show_caster1_social ?
				<div className='caster1social flex flex-row'>
					<svg className="xsvg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
					<h1 className='text-2xl'>{caster1_social}</h1>
				</div>
				: <></>
			}

			{show_caster2_social ?
				<div className='caster2social flex flex-row'>
					<svg className="xsvg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
					<h1 className='text-2xl'>{caster2_social}</h1>
				</div>
				: <></>
			}
			{show_observer ?
				<div className='observer text-3xl'>
					<h1>Observer: {observer}</h1>
				</div>
				: <></>}

			{show_observer_social && show_observer ?
				<div>
					<div className='observerSocial flex flex-row'>
						<svg className="xsvg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
						<h1 className='text-2xl'>{observer_social}</h1>
					</div>
				</div>
				: <></>}
		</>
	);
}
