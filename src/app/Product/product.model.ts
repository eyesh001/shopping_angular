import { SharedUtil } from '../Shared/shared-util';

export declare type Products = Product[];
export enum ProdStatus { WAIT_FOR_SALE, ON_SALE, NOT_FOR_SALE }

export class Product {
    no: number;
    catNo?: number;
    name: string;
    qty: number;
    listPrice: number;
    status: ProdStatus;
    img: string;
    desc?: string;
    date: string;

    constructor( no: number,  status: ProdStatus ) {
        this.no = no;
        this.catNo = 0;
        this.name = '';
        this.qty = 0;
        this.listPrice = 0;
        this.status = status;
        this.img = '';
        this.desc = '';
        this.date = SharedUtil.getCurrentDate();
    }
}
