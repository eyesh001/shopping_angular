import { SharedUtil } from '../Shared/shared-util';

export declare type Products = Product[];

export class Product {
    no: number;
    catNo?: number;
    name: string;
    qty: number;
    listPrice: number;
    img: string;
    desc?: string;
    date: string;

    constructor( no: number ) {
        this.no = no;
        this.catNo = 0;
        this.name = '';
        this.qty = 0;
        this.listPrice = 0;
        this.img = '';
        this.desc = '';
        this.date = SharedUtil.getCurrentDate();
    }
}
