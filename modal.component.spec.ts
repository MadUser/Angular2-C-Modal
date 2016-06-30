/**
 * Created by afranco on 6/28/2016.
 */
import {SkyModal} from "./modal.component";
import {ModalService} from "./modal.service";
import {ComponentResolver, ComponentFactory} from "@angular/core";
import {Type} from "@angular/http/esm/src/facade/lang";

export declare class DummyComponentResolver implements ComponentResolver {
    private _resolver;
    constructor(_resolver: ComponentResolver);
    resolveComponent(componentType: string | Type): Promise<ComponentFactory<any>>;
    clearCache(): void;
}
describe('modal dialog', () => {

    it('test 1: passing invalid component name', () => {
        let modalService: ModalService = new ModalService();
        let resolver: DummyComponentResolver = new DummyComponentResolver();
        let modal: SkyModal = new SkyModal(resolver, modalService);
    });
});
