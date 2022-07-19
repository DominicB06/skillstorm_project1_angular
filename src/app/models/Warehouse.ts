export class Warehouse{

    warehouseID: number
    address: string
    capacity: number

    constructor(warehouseID = 0, address='', capacity = 0){

        this.warehouseID = warehouseID
        this.address = address
        this.capacity = capacity
        
    }
}