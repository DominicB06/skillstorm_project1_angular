export class Item{

    serialNum: number
    name: string
    vaultID: number
    

    constructor(serialNum = 0, name = "", vaultID = 0){

        this.serialNum = serialNum
        this.name = name
        this.vaultID = vaultID
        
    }
}