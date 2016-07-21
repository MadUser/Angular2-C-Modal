Example:

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
        this.skyModal.show(MyPopup, "some string to display", null) // call the modal dialog with (component, params, config)
            .subscribe(response => console.log("return value: " + response)); // get response from the modal on close.
    }
}


@Component({
    selector: 'my-popup',
    templateUrl: '<div>Hello world</div>',
})

export class MyPopup{
    constructor(private modalService: ModalService) {
    if(this.request != null) //the request is injected to the component
        console.log("we have a request: "+this.request);
    }

    close() {
        let res = "anything"
        this.modalService.response(res); //send response to the caller
    }
}
