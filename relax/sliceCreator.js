import {createSlice} from "@reduxjs/toolkit";
import {capitalize} from "../util/stringHelper";
import {
    fetchAll,
    fetchById,
    loading,
    error,
    create,
    update,
    del,
    pending,
    rejected,
    resolved
} from "./Constants";

export const createCustomSlice = function (resourceName) {

    const resList = resourceName + 'List';
    const resName = resourceName;

    return createSlice({
        name: resourceName,
        initialState: {
            [resList]: [],
            [resName]: null,

            [resName + capitalize(fetchAll) + loading]: false,
            [resName + capitalize(fetchAll) + error]: null,

            [resName + capitalize(fetchById) + loading]: false,
            [resName + capitalize(fetchById) + error]: null,

            [resName + capitalize(create) + loading]: false,
            [resName + capitalize(create) + error]: null,

            [resName + capitalize(update) + loading]: false,
            [resName + capitalize(update) + error]: null,

            [resName + capitalize(del) + loading]: false,
            [resName + capitalize(del) + error]: null,
        },
        reducers: {
            // fetchAll
            [fetchAll + pending]: (state, action) => {
                state[resName + capitalize(fetchAll) + loading] = true
            },
            [fetchAll + resolved]: (state, action) => {
                state[resList] = action.payload;
                state[resName + capitalize(fetchAll) + loading] = false;
                state[resName + capitalize(fetchAll) + error] = null;
            },
            [fetchAll + rejected]: (state, action) => {
                state[resList] = null;
                state[resName + capitalize(fetchAll) + error] = action.payload;
                state[resName + capitalize(fetchAll) + loading] = false;
            },

            // fetchById
            [fetchById + pending]: (state, action) => {
                state[resName + capitalize(fetchById) + loading] = true
            },
            [fetchById + resolved]: (state, action) => {
                state[resName] = action.payload;
                state[resName + capitalize(fetchById) + loading] = false;
                state[resName + capitalize(fetchById) + error] = null;
            },
            [fetchById + rejected]: (state, action) => {
                state[resName] = null;
                state[resName + capitalize(fetchById) + error] = action.payload;
                state[resName + capitalize(fetchById) + loading] = false;
            },

            // create
            [create + pending]: (state, action) => {
                state[resName + capitalize(create) + loading] = true
            },
            [create + resolved]: (state, action) => {
                state[resName] = action.payload;
                state[resName + capitalize(create) + loading] = false;
                state[resName + capitalize(create) + error] = null;
            },
            [create + rejected]: (state, action) => {
                state[resName] = null;
                state[resName + capitalize(create) + error] = action.payload;
                state[resName + capitalize(create) + loading] = false;
            },

            // update
            [update + pending]: (state, action) => {
                state[resName + capitalize(update) + loading] = true
            },
            [update + resolved]: (state, action) => {
                state[resName] = action.payload;
                state[resName + capitalize(update) + loading] = false;
                state[resName + capitalize(update) + error] = null;
            },
            [update + rejected]: (state, action) => {
                state[resName] = null;
                state[resName + capitalize(update) + error] = action.payload;
                state[resName + capitalize(update) + loading] = false;
            },

            // delete
            [del + pending]: (state, action) => {
                state[resName + capitalize(del) + loading] = true
            },
            [del + resolved]: (state, action) => {
                state[resName + capitalize(del) + loading] = false;
                state[resName + capitalize(del) + error] = null;
            },
            [del + rejected]: (state, action) => {
                state[resName + capitalize(del) + error] = action.payload;
                state[resName + capitalize(del) + loading] = false;
            },
        },
    });
};
