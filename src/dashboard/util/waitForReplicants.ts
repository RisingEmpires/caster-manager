import NodeCG from '@nodecg/types';
import ClientReplicant from '@nodecg/types/client/api/replicant';

export default function waitForReplicants(replicants: ClientReplicant<unknown>[], callback: () => void): void {
    let count = 0
    replicants.forEach((r): void => {
        r.once('change', (): void => {
            count += 1
            if (count === replicants.length) {
                callback()
            }
        })
    })
}