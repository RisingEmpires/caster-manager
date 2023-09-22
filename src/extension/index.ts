import type NodeCG from '@nodecg/types';

module.exports = function (nodecg: NodeCG.ServerAPI) {
    const caster1 = nodecg.Replicant<string>('caster1');
	const caster2 = nodecg.Replicant<string>('caster2');
	const observer = nodecg.Replicant<string>('observer');
	const showobserver = nodecg.Replicant<boolean>('showobserver');

    const router = nodecg.Router();

    router.get('/casters', (req, res) => {
        let response = `Todays casters: Left: ${caster1.value} & Right: ${caster2.value}!`
        {showobserver.value ? response += `Observer: ${observer.value}` : ''}
		res.send(response);
	});

    
    router.get('/observer', (req, res) => {
        let response = ''
        {showobserver.value ? response = `Todays Observer: ${observer.value}` : response = 'No dedicated observer today :('}
        
		res.send(response);
	});

    nodecg.mount('/caster', router);
};