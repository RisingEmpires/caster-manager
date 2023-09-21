import type NodeCG from '@nodecg/types';

module.exports = function (nodecg: NodeCG.ServerAPI) {
    const caster1 = nodecg.Replicant<string>('caster1');
	const caster2 = nodecg.Replicant<string>('caster2');

    const router = nodecg.Router();

    router.get('/casters', (req, res) => {
		res.send(`Todays casters: Left: ${caster1.value} & Right: ${caster2.value}`);
	});

    nodecg.mount('/caster', router);
};
