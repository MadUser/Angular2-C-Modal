# Angular2-C-Modal
There are several modal dialogs for html templates, for quick alert and confirm dialogs,
This is not the purpose of this module.
This module is only for opening modal dialog with a seperate inner component.

The module supports:
- passing request object from the parent to the modal dialog.
- passing response from the modal dialog to the parent caller.
- open as many dialogs as needed, nested or flat.
 
# Example:

```typescript

@Component({
    selector: "my-caller",
    template: `<button (click)="popupModal()">click me</button>
    <sky-modal></sky-modal>`, // embed the component on html
    directives: [SkyModal]
})

export class MyCaller {
    @ViewChild(SkyModal) skyModal: SkyModal; // create reference to the component

    constructor() {
    }

    popupModal() {
        this.skyModal.show(MyPopup, {}, {}) // call the modal dialog with (component, params, config)
            .subscribe(response => console.log("return value: " + response)); // get response from the modal on close.
    }
}


@Component({
    selector: 'my-popup',
    templateUrl: '<div>This is the child component</div>',
})

export class MyPopup{
    constructor(private modalService: ModalService) {
    if(this.request != null) //the request is injected to the component.
        console.log("we have a request: "+this.request);
    }

    close(res) {
        this.modalService.response(res); //send response to the parent caller
    }
}

```
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Se
