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

During development I didn't read carefully exercise definition so I ended doing a different approach, more complex. Although I don't have enough time to change the result I'll try to show how to cover needed functionalities with current implementation.

On the next section I'm going to answer one by one all exercise considerations.

## Considerations

_Currently, we are importing the data from 2 APIs: apps and developers. The output format is JSON. An example output is in the source-api-outputs zip file._

__I ended by putting API outputs on a tiny noSQL database rather than fetching resources directly. Although this can be changed very easy: `models/` folder contains every resource behavior and, depending on if its a search query or plain GET request, `find` or `read` will be called within that model. So its all about fetching sources directly on the model, parsing and catching here to be placed.__

_We plan to add more information from a third API soon, that will provide the information as XML (you don't need to implement this, just keep it mind)._

__Since domain implementation is decoupled from http resources we just need to add another model class and override common `toString()` method on any of their subclasses that resource will invoke.. U may see an example on `/home/k1r0s/Works/stnc_backend/project/models/app.js:20`__

_In the future we want to also serve the app information in a command line application (you don't need to implement this, just keep it mind)._

__I guess we can build binaries directly from model instances with an http provider and then ship these into a cmd line CLI__

_The focus here should be on design, more than implementation or performance. We are less interested in seeing that this works than in seeing how you approach the problem._

__That's why I ended doing that way, IMO its better run this micro with a tiny database that may help to save resources and, invalidate its contents every few hours, depending of outer data reliability.__

_You can use any programming language, libraries and frameworks that you need, but keep in mind the position you're applying to. (Our prefered languages are PHP, Node.js and Javascript)_

__JS <3__

_Please provide at least some unit tests (it is not required to write them for every class). Functional tests are also a plus._

__There is almost anything that should be unit tested here on this project since most of its code relies on third party libraries and we don't have any critical algorithms we rely on.

I wrote 3 acceptance/functional tests to tests requested functionalities.__

## Specific Questions

_Please provide a short summary as SUMMARY.md detailing anything you think is relevant, for example:_

Installation steps:
- clone
- npm i

How to run your code / tests:
- npm start runs raw node script
- npm run deploy:start deploys the service
- npm run deploy:stop stops the service

Where to find your code: well, you already did so

Was it your first time writing a unit test, using a particular framework, etc?:
I have few alternatives for E2E testing on FE, but, for Backend I prefer mocha.

Mocha is way simpler than jest so it may work for backend, then for more complex approaches like mocks or stubs I can add more libraries.. but on the FE I rely on jest since has more options and a great community.

What would you do to improve the performance/scalability?

Performance is all about clever catching and I don't have enough information to suggest rules on it, but .. of course fetching core sources for every incoming request isn't a good approach and that's why I setup lowdb stuff.

I guess scalability is very nice for now since every component is very independent from other pieces on the application.

What would you have done differently if you had had more time

Build exactly what you requested.. that means:

- create http adapter
- fetch source api outputs on every incoming request
- tweak model implementation to store responses on lowdb adapter and add some catch rules
Etc.
