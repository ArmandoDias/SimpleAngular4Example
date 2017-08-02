# Simple Angular 4 Example
This is just a example, to show how I code a simple "One Page App" using `Angular 4`.
You probably found this code through my `CV` or [LinkedIn](https://www.linkedin.com/in/armandoschiavondias/).

## Mission:
Let's imagine a situation where we have to read files from three different sources. One provides a `XML` file, the second a `JSON` and the last, a simple `CSV` file. We need to load all the files, normalize this data and show the content, being carefully with some rules:

- If there is the same name on different files, presume that is the same fighter.
- By default, show all fighters in alphabetical order.
- Option to show fighters by game title.
- Search by name, case insensitive and of `"%Like%"` kind.

Some points that I keep in mind all the time:
- [Object Calisthenics](https://www.cs.helsinki.fi/u/luontola/tdd-2009/ext/ObjectCalisthenics.pdf) ( Always when possible... )
- I am using `TESlint` ( ESLint for TypeScript Files ): This helps a lot with the code's pattern.
- I am using `TypeScript` files because of `Angular 4`

## To see this in action right now!
Please access the link: [https://armandodias.github.io/simpleAngular4Example/](https://armandodias.github.io/simpleAngular4Example/)