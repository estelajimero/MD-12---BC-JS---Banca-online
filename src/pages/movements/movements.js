/** 
 * Recoger parámetros de la url para ver el id de cuenta.
* Recuperar los movimientos disponibles de esa cuenta.
 */

import { history } from '../../core/router';
import { mapMovementsListFromApiToVM } from './movements.mappers';
import { mapAccountFromApiToVM } from '../../common/mappers/mapaccount.mappers';
import { getMovementsById } from './movements.api';
import { getAccount } from '../../common/api/getaccount.api';
import { addMovementRows } from './movements.helpers';
import { onSetValues } from '../../common/helpers';

const params = history.getParams();
    
getAccount(params.id).then(apiAccount => {
        const account = mapAccountFromApiToVM(apiAccount);
    
        onSetValues(account);
});
    
getMovementsById().then(movement => {
        const viewModelMovement = mapMovementsListFromApiToVM(movement, params.id);
    
        addMovementRows(viewModelMovement);
});