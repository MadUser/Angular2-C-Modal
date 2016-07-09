import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ModalService {
    // Observable source
    private responseSource = new Subject<any>();

    // Observable stream
    response$ = this.responseSource.asObservable();

    // service message command
    response(response: any) {
        this.responseSource.next(response);
    }
}
