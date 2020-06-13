import request from "../util/Request";
import {ServiceMethods} from "../object/ServiceMethods";

export const createCustomServiceMethods = function (path, actions) {
    return new ServiceMethods(
        (data) => async dispatch => {
            console.log('create service called');
            try{
                dispatch(actions.create.pending());
                const response = await request('/'+ path, {
                    data: data,
                    method: 'POST'
                });
                if (response.status === 200 || response.status === 201) {
                    dispatch(actions.create.success(response.data))
                } else {
                    dispatch(actions.create.failure(response.data))
                }
            } catch (e) {
                dispatch(actions.create.success(e))
            }
        },
        (id, data) => async dispatch => {
            console.log('update service called');
            try{
                dispatch(actions.update.pending());
                const response = await request('/'+ path + '/' + id, {
                    data: data,
                    method: 'PUT'
                });
                if (response.status === 200) {
                    dispatch(actions.update.success(response.data))
                } else {
                    dispatch(actions.update.failure(response.data))
                }
            } catch (e) {
                dispatch(actions.update.success(e))
            }
        },
        () => async dispatch => {
            console.log('find all serviice called');
            try{
                dispatch(actions.findAll.pending());
                const response = await request('/'+ path, { method: 'GET'});
                if (response.status === 200) {
                    dispatch(actions.findAll.success(response.data))
                } else {
                    dispatch(actions.findAll.failure(response.data))
                }
            } catch (e) {
                dispatch(actions.findAll.success(e))
            }
        },
        (id) => async dispatch => {
            console.log('findById serviice called');
            try {
                dispatch(actions.findById.pending());
                const response = await request('/'+ path + '/' + id, { method: 'GET'});
                if(response.status === 200) {
                    dispatch(actions.findById.success(response.data))
                } else {
                    dispatch(actions.findById.failure(response.data));
                }
            } catch (e) {
                dispatch(actions.findById.failure(e));
            }
        },
        (id) => async dispatch => {
            console.log('delete by Id serviice called');
            try {
                dispatch(actions.deleteById.pending());
                const response = await request('/'+ path + '/' + id, { method: 'DELETE'});
                if (response.status === 200){
                    dispatch(actions.deleteById.success())
                } else{
                    dispatch(actions.deleteById.failure(response.data))
                }
            } catch (e) {
                console.log('error while making async call:',e);
                dispatch(actions.deleteById.failure(e))
            }
        }
    );
};
