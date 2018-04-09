## Structure

```
.
├── adapters              // current adapters for services witch retrieve the data
│   ├── low.conf.js       // lowdb configs
│   ├── low.js            // lowdb adapter class
│   └── low-provider.js   // singleton provider for lowdb service
├── low.database.json     // tmp database
├── models                // behavior representation
│   ├── app.js            // app core service management
│   ├── common.js         // abstract service
│   └── developer.js      // ..
├── package.json
├── resources             // basic http resource class
│   └── basic-resource.js
├── ritley.conf.js        // ritley configs
├── run.js                // __init script
├── SUMMARY.md            // you're here
└── test
    └── developers.test.js

4 directories, 13 files

```
