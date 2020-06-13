import {ActionMethods} from "../object/ActionMethods";
import {create, del, fetchAll, fetchById, pending, rejected, resolved, update} from "./Constants";

export const createCustomActionMethods = function (actions) {
    return new ActionMethods(
        {
            pending: actions[create + pending],
            success: actions[create + resolved],
            failure: actions[create + rejected]
        }, {
            pending: actions[update + pending],
            success: actions[update + resolved],
            failure: actions[update + rejected]
        },
        {
            pending: actions[fetchAll + pending],
            success: actions[fetchAll + resolved],
            failure: actions[fetchAll + rejected]
        },
        {
            pending: actions[fetchById + pending],
            success: actions[fetchById + resolved],
            failure: actions[fetchById + rejected]
        },
        {
            pending: actions[del + pending],
            success: actions[del + resolved],
            failure: actions[del + rejected]
        }
    )
};
