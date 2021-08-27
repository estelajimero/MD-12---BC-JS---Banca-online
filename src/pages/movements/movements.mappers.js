const mapMovementFromApitoVM = movement => {
    return {
        id: movement.id,
        iban: movement.iban,
        alias: movement.name,
        description: movement.description,
        amount: `${movement.amount}€`,
        balance: `${movement.balance}€`,
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction: new Date (movement.realTransaction).toLocaleDateString(),
        accountId: movement.accountId
    };
};

export const mapMovementsListFromApiToVM = (movementsList, id) => {
    return movementsList.map(movement => mapMovementFromApitoVM(movement))
                        .filter(element => element.accountId === id);
};