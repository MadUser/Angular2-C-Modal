# Angular2-C-Modal
There are several modal dialogs for html templates, for quick alert and confirm dialogs,
This is not the purpose of this module.
This module is only for opening modal dialog with a seperate inner component to show.
The module supports:
 passing request object from the parent to the modal dialog.
 open stream of data between to modal dialog and the parent caller.
 open as many dialogs as you like, nested or flat.
 
# Example:

```typescript

@Component({
    selector: "my-caller",
    template: "<sky-modal></sky-modal>", // embed the component on your html
    directives: [SkyModal]
})

export class MyCaller {
    @ViewChild(SkyModal) skyModal: SkyModal; // create reference to the component

    constructor() {
    }

    popupModal() {
        this.skyModal.show(SomeComponent, "params", null) // call the modal dialog with (component, params, config)
            .subscribe(response => console.log("return value: " + response)); // get response from the modal on close.
    }
}


@Component({
    selector: 'my-popup',
    templateUrl: '<div>Hello world</div>',
})

export class MyPopup{
    constructor(private modalService: ModalService) {
    if(this.request != null) //thr request is injected to the component
        console.log("we have a request: "+this.request);
    }

    close(res) {
        this.modalService.response(res); //send response to the caller
    }
}

```
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Se
