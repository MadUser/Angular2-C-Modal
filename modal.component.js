"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var modal_service_1 = require('./modal.service');
var Rx_1 = require("rxjs/Rx");
var SkyModal = (function () {
    function SkyModal(resolver, modalService) {
        var _this = this;
        this.resolver = resolver;
        this.modalService = modalService;
        this.visible = false;
        modalService.response$.subscribe(function (obj) {
            _this.subject.next(obj); // return result from modal component to parent;
            _this.subject.complete();
            _this.hide();
        });
    }
    /*TODO: force focus on popup so listener can catch the event*/
    SkyModal.prototype.escKey = function () {
        this.hide();
    };
    SkyModal.prototype.resolveComponent = function (component, request) {
        var _this = this;
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        this.resolver.resolveComponent(component).then(function (factory) {
            _this.cmpRef = _this.target.createComponent(factory);
            _this.cmpRef.instance.request = request; // inject request to the component
        });
    };
    SkyModal.prototype.ngOnDestroy = function () {
        if (this.cmpRef)
            this.cmpRef.destroy();
    };
    SkyModal.prototype.show = function (component, request, config) {
        this.resolveComponent(component, request);
        this.visible = true;
        this.subject = new Rx_1.Subject(); // new observable
        return this.subject;
    };
    SkyModal.prototype.hide = function () {
        this.visible = false;
    };
    __decorate([
        core_1.ViewChild('target', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], SkyModal.prototype, "target", void 0);
    __decorate([
        core_1.HostListener('keyup.esc'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], SkyModal.prototype, "escKey", null);
    SkyModal = __decorate([
        core_1.Component({
            selector: "sky-modal",
            templateUrl: 'app/shared/modal/modal.component.html',
            styleUrls: ['app/shared/modal/modal.component.css'],
            providers: [modal_service_1.ModalService]
        }), 
        __metadata('design:paramtypes', [core_1.ComponentResolver, modal_service_1.ModalService])
    ], SkyModal);
    return SkyModal;
}());
exports.SkyModal = SkyModal;
//# sourceMappingURL=modal.component.js.map