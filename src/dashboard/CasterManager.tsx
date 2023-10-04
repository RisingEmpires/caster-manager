import React from 'react';
import { useReplicant } from 'use-nodecg';
import { Tooltip as ReactTooltip } from "react-tooltip";

export function CasterManager() {

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


	const handleSubmit = (event) => {
		event.preventDefault();
		set_caster1(event.target.caster1.value)
		set_caster2(event.target.caster2.value)
		set_observer(event.target.observer.value)

		set_caster1_social(event.target.caster1Social.value)
		set_caster2_social(event.target.caster2Social.value)
		set_observer_social(event.target.observerSocial.value)

		set_show_observer(event.target.show_observer.checked)

		set_show_caster1_social(event.target.show_caster1_social.checked)
		set_show_caster2_social(event.target.show_caster2_social.checked)
		set_show_observer_social(event.target.show_observer_social.checked)
	}

	const swapCasters = (event: any) => {
		event.preventDefault();
		console.log("Swapping casters around")
		let temp = caster1
		set_caster1(caster2)
		set_caster2(temp)
	}

	//, show_caster2_social, show_observer, show_observer_social
	
	//Currently not working, waiting for assistance
	//@ts-ignore
	//waitForReplicants([show_caster1_social]).then(() => {
	//	console.log("Replicants avaliabe")
	//}).catch((error) => {
	//	console.log(error)
	//})

	return (
		<> 
			<form onSubmit={handleSubmit} className='p-4'>
				<label>Caster 1</label>
				<input type="text" placeholder="Caster1" name="caster1" defaultValue={caster1} />

				<label>Caster 1 Social Media</label>
				<div className='flex flex-row'>
					<input className="w-8 mr-4 caster1" type="checkbox" name="show_caster1_social" defaultChecked={show_caster1_social} />
					<ReactTooltip
						anchorSelect=".caster1"
						id="tooltip1"
						place="bottom"
						content="Display the social media link under the Casters Name. Updates instantly"
					/>
					<input type="text" placeholder="Caster1Social" name="caster1Social" defaultValue={caster1_social} />
				</div>

				<div style={{
					padding: '5px 0px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					width: '100%'
				}}>
					<hr style={{
						margin: '2rem',
						width: '33.3%'
					}} />
					<button onClick={swapCasters} className="swapButton w-36" name="swapCasters">
						Swap Casters
					</button>
					<hr style={{
						margin: '2rem',
						width: '33.3%'
					}} />
				</div>

				<label>Caster 2</label>
				<input type="text" placeholder="Caster2" name="caster2" defaultValue={caster2} />
				
				<label>Caster 2 Social Media</label>
				<div className='flex flex-row'>
					<input className="w-8 mr-4 caster2" type="checkbox" name="show_caster2_social" defaultChecked={show_caster2_social}/>
					<input type="text" placeholder="Caster2Social" name="caster2Social" defaultValue={caster2_social} />
					<ReactTooltip
						anchorSelect=".caster2"
						id="tooltip1"
						place="bottom"
						content="Display the social media link under the Casters Name. Updates instantly"
					/>
				</div>

				<label>Observer</label>
				<div className='flex flex-row'>
					<input className="w-8 mr-4 observerName" type="checkbox" name="show_observer" defaultChecked={show_observer}
					//onChange={(() => set_show_observer(!show_observer))} 
					/>
					<input type="text" placeholder="Observer" name="observer" defaultValue={observer} />
					<ReactTooltip
						anchorSelect=".observerName"
						id="tooltip1"
						place="bottom"
						content="Display Observers Name in the middle. Updates instantly"
					/>
				</div>
				<div className='flex flex-row'>
					<input className="w-8 mr-4 observer" type="checkbox" name="show_observer_social" defaultChecked={show_observer_social}/>
					<input type="text" placeholder="ObserverSocial" name="observerSocial" defaultValue={observer_social} />
					<ReactTooltip
						anchorSelect=".observer"
						id="tooltip1"
						place="bottom"
						content="Display the social media link under the Observers Name. Updates instantly"
					/>
				</div>

				<input type="submit" value={'Update Graphics'} />
			</form>
		</>
	)
}
