import {HasFormatter} from '../interface/Interface'
export class Invoice implements HasFormatter{
    readonly client:string;
    private details:String;
    public amount:number;
    constructor(client:string,details:String,amount:number){
        this.client=client,
        this.details=details,
        this.amount=amount
    }
    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}