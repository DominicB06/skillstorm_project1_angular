export class Inventory{

    vaultID: number
    size: number
    warehouse: number


    constructor(vaultID = 0, size = 0, warehouse = 0){

        this.vaultID = vaultID
        this.size = size
        this.warehouse = warehouse
        
    }
}