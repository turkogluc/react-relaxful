# react-relaxful
`React Redux REST Utility`

It is developed in order to automate providing necessary and useful REST calls with creating the reducers, actions and services by using Redux Toolkit components under the hood

#### Add module
```shell script
yarn add @turkogluc/react-relaxful
```

#### Create Resource

```javascript
const entityName = 'student';
const apiPath = 'students';
const host = 'https://5ee3417e8b27f3001609562a.mockapi.io/api';
export const studentEntity = createManagedResource(entityName, apiPath, host);
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

// find by id
studentService.findById(1);

// find all
studentService.findAll();

// find all with query parameters
studentService.findAll({ name: 'user', surname: 'turkoglu' });

// create
studentService.create({id:1, name:'cemal'});

// update with the given id
studentService.update(1, {id:1, name:'kemal'});

// delete by given id
studentService.deleteById(1);
```

#### Access the state
It creates a singular and a plural state field to store the entity, and also it adds `loading` and 
`error` states per each call. All state fields are prefixed with the given `name` string prefix.

```javascript
const studentList = useSelector(state => state.studentReducer.studentList);
const student = useSelector(state => state.studentReducer.student);

// loading and error states
const studentCreateLoading = useSelector(state => state.studentReducer.studentCreateLoading);
const studentCreateError = useSelector(state => state.studentReducer.studentCreateError);
```

![](docs/Store.png)

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

##### `findById` Call
```
GET
/resource/:id
```

##### `findAll` Call
```
GET
/resource?params=value
```

##### `create` Call
```
POST
/resource

{
    "age": 20,
    "name": "student"
}
```

##### `update` Call
```
POST
/resource/:id

{
    "age": 30,
    "name": "student"
}
```
