import { format } from 'date-fns';

export declare type Domain = 'product' | 'category';
export declare type ActionMode = 'create' | 'read' | 'edit' | 'delete';

export class SharedUtil {
    static getCurrentDate() {
        return format(new Date(), 'yyyy-MM-dd');
    }

    static getCurrentDateTime() {
        return format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }
}