export class ServiceMethods {
    constructor(create, update, findAll, findById, deleteById) {
        this.create = create;
        this.update = update;
        this.findAll = findAll;
        this.findById = findById;
        this.deleteById = deleteById;
    }
}
