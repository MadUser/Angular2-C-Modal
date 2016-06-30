"use strict";
/**
 * Created by afranco on 6/28/2016.
 */
var modal_component_1 = require("./modal.component");
var modal_service_1 = require("./modal.service");
describe('modal dialog', function () {
    it('test 1: passing invalid component name', function () {
        var modalService = new modal_service_1.ModalService();
        var resolver = new DummyComponentResolver();
        var modal = new modal_component_1.SkyModal(resolver, modalService);
    });
});
//# sourceMappingURL=modal.component.spec.js.map