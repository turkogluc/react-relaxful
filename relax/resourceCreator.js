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

export const createManagedResource = function(name, path) {
    const slice = createCustomSlice(name);
    const actions = createCustomActionMethods(slice.actions);
    const services = createCustomServiceMethods(path, actions);
    return new Resource(name, slice.reducer, slice.actions, services)
};
