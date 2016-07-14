import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ModalService implements OnDestroy {
    // Observable source
    private responseSource = new Subject<any>();

    // service message command
    response(response: any) {
        this.responseSource.next(response);
    }

    getObservable(): Observable<any> {
        return this.responseSource.asObservable();
    }

    ngOnDestroy() {
        if (this.responseSource) {
            this.responseSource.complete();
            this.responseSource.unsubscribe();
        }
    }
}
