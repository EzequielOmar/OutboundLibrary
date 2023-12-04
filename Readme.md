# Outbound Library Documentation
The Outbound Library (OB) is a simple HTTP client library for making outbounding requests. It is designed to handle common HTTP operations with ease.

## Usage
##### Import the Library
In your code, import the library:
```
const OB = require('outbound-library');
```
##### Create an instance
You can specify config defaults that will be applied to every request made with that instance.
```
const client = new OB(config = {});
```
###### - config (object) Options:
- `timeout` (number): Timeout for the request in milliseconds (default: 5000).
- `type` (string): Data type for POST request ('urlencoded' or 'json', default: 'urlencoded').
- `resType` (string): Response type expected ('json' or 'plain', default: 'json').
- `headers` (object): Additional headers to include in the request.

You can pass any config option on any request to overwrite the defaults on that request. 
### GET Request
Use the get method to make GET requests:
```
const response = await client.get(url, data = {}, config = {});
```
- `url` (string): The URL for the GET request.
- `data?` (object): Query parameters to be included in the request (optional).
- `config?` (object): Additional configuration options (optional).

### POST Request
Use the post method to make POST requests:
```
const response = await client.post(url, data, config = {});
```
- `url` (string): The URL for the POST request.
- `data` (object): The data to be included in the request body.
- `config?` (object): Additional configuration options (optional).

### PUT Request
Use the put method to make PUT requests:
```
const response = await client.put(url, data, config = {});
```
- `url` (string): The URL for the POST request.
- `data` (object): The data to be included in the request body.
- `config?` (object): Additional configuration options (optional).
- 
### PATCH Request
Use the patch method to make PATCH requests:
```
const response = await client.patch(url, data, config = {});
```
- `url` (string): The URL for the POST request.
- `data` (object): The data to be included in the request body.
- `config?` (object): Additional configuration options (optional).


### Success Response Object
When a request is successful, the Outbound Library returns a success object with the following properties:
- `status` (number): The HTTP status code of the successful response.
- `data` (any): The response data received from the server.
- `dataSize` (number): The size of the response data in bites.

### Error Response Object
In case of an error, the Outbound Library returns an error object with the following properties:
- `code` (string): The error code associated with the error.
- `status` (number): The HTTP status code of the error response.
- `message` (string): A descriptive error message providing more information about the error.
- `url` (string): The URL of the request that resulted in an error.
- `timeout` (number, optional): In casae of timeout error, indicates configured timeout.


### Running Tests
The Outbound Library comes with a set of Jest tests to ensure its functionality. You can run the tests using the following command:

```
npm test
```

#### Examples
###### Pass a custom header: 
```
  await client.get(url, data, {headers: {'custom-header': 'value'}});
```
###### Set global timeout: 
```
  const client = new OB({ timeout: 2000 });
  const res = await client.get(url); //Timeout will be 2s
```
###### Overwrite global timeout on single request: 
```
  const client = new OB({ timeout: 2000 });
  const res = await client.get(url, { timeout: 3000 }); //Timeout will be 3s
```
###### Obtain response data in plain text: 
```
  const res = await client.get(url, { resType: 'plain' });
```