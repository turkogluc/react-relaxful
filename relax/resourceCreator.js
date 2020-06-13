import {createCustomActionMethods} from "./actionCreator";
import {createCustomSlice} from "./sliceCreator";
import {createCustomServiceMethods} from "./serviceCreator";

class Resource {
    constructor(name, reducer, actions, services) {
        this.name = name;
        this.reducer = reducer;
        this.actions = actions;
        this.services = services;
    }
}

export const createManagedResource = function(name, path, host) {
    const slice = createCustomSlice(name);
    const actions = createCustomActionMethods(slice.actions);
    const services = createCustomServiceMethods(host, path, actions);
    return new Resource(name, slice.reducer, slice.actions, services)
};
