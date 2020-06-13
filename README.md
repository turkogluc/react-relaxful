# react-relaxful
React Redux REST Utility

#### Add module
```shell script
yarn add @turkogluc/react-relaxful
```

#### Create Resource

```javascript
export const studentEntity = createManagedResource('student', 'students', '');
```

This function return the following:

`const { reducer, actions, name, services } = studentEntity`

#### Add the reducer to Redux

```javascript
export default configureStore({
   reducer: {
     studentReducer: studentEntity.reducer,
   },
 });
```

#### Usage
Now you can enjoy its ready to use service functions. Remember to dispatch them.

```javascript
const { services: studentService } = studentEntity;
studentService.findById(1);
studentService.findAll();
studentService.findAll({ name: 'user', surname: 'turkoglu' });
studentService.create({id:1, name:'cemal'});
studentService.update(1, {id:1, name:'kemal'});
studentService.deleteById(1);
```

#### Access the state
It creates a singular and a plural state field to store the entity, and also it adds `loading` and 
`error` states per each call. All state fields are prefixed with the given `name` string prefix.

#### How REST Calls are made
It uses `Axios` in order to make REST calls. Simple helper method `request` handles the call for given path and parameters. 

```javascript
const request = (url, options) => {

    let config = {
        url: url,
        ...options,
    };

    let response;
    try {
        response = axios(config);
    } catch (error) {
        console.error(error);
    }
    return response;
};
```


