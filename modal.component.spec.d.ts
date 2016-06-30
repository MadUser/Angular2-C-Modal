import { ComponentResolver, ComponentFactory } from "@angular/core";
import { Type } from "@angular/http/esm/src/facade/lang";
export declare class DummyComponentResolver implements ComponentResolver {
    private _resolver;
    constructor(_resolver: ComponentResolver);
    resolveComponent(componentType: string | Type): Promise<ComponentFactory<any>>;
    clearCache(): void;
}
