const btaSdk = BookThatApp.init("token");

const auth = btaSdk.auth('{"key": "your_key", "password": "your_secret"}');

const btaApi = btaSdk.init("token");

console.log("sdk methods here", btaSdk);

console.log("here should be 404 due to no key", auth);

console.log(btaApi);
