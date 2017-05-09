import {Injectable} from '@angular/core';

declare let $: any;

@Injectable()
export class CommonHelperService {
    constructor() {

    }

    /** Common */
    public cloneObject(obj): any {
        return JSON.parse(JSON.stringify(obj));
    }

    /** Table */
    public addColorSelectedRowTable(id) {
        $(`#${id}`).on('click', 'tbody tr', function(event) {
            $(this).addClass('highlight').siblings().removeClass('highlight');
        });
    }
}
