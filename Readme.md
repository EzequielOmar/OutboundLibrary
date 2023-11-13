##### Outbound Library

###### Use:
const lib = require('../src/index');

###### Functions:
_get(url: string, data: object)_
Makes a GET request to the specified URL with optional query parameters.
- url: The URL to which the GET request will be made.
- data: Optional query parameters in the form of an object.

_post(url: string, data: object, type: string = 'urlencoded', headers: object = {})_
Makes a POST request to the specified URL with optional request data and content type.
- url: The URL to which the POST request will be made.
- data: The data to be sent in the request body.
- type: The content type of the request. Default is 'urlencoded', can be set to 'json'.
- headers: Optional additional headers to be included in the request.