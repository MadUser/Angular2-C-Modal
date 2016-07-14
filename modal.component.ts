import {
    Component, ViewChild, ViewContainerRef, ComponentRef, ComponentResolver,
    ComponentFactory, OnDestroy, HostListener
} from "@angular/core";

import {ModalService} from './modal.service';
import {Subject, Observable} from "rxjs/Rx";

@Component({
    selector: "sky-modal",
    templateUrl: 'app/shared/modal/modal.component.html',
    styleUrls: ['app/shared/modal/modal.component.css'],
    providers: [ModalService]
})

export class SkyModal implements OnDestroy {
    @ViewChild('target', {read: ViewContainerRef}) target;
    subject: Subject<any>;
    cmpRef: ComponentRef<any>;
    visible = false;

    /*TODO: force focus on popup so listener can catch the event*/
    @HostListener('keyup.esc')
    escKey(): void {
        this.hide();
    }

    constructor(private resolver: ComponentResolver, private modalService: ModalService) {
        modalService.getObservable().subscribe(obj => {
            this.subject.next(obj); // return result from modal component to parent;
            this.hide();
        });
    }

    resolveComponent(component, request) {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }

        this.resolver.resolveComponent(component).then((factory: ComponentFactory<any>) => {
            this.cmpRef = this.target.createComponent(factory);
            this.cmpRef.instance.request = request; // inject request to the component
        });
    }

    ngOnDestroy() {
        if (this.cmpRef)
            this.cmpRef.destroy();
        if (this.subject) {
            this.subject.complete();
            this.subject.unsubscribe();
        }
    }

    show(component, request, config): Observable<any> {
        this.resolveComponent(component, request);
        this.visible = true;
        this.subject = new Subject(); // new observable
        return this.subject.asObservable();
    }

    hide() {
        this.visible = false;
    }
}
