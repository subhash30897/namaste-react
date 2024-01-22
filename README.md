# Namaste React🚀

- Shortcuts
- cmd + ctrl + space -> emoji keyboard
- npx parcel index.html - for dev build
- npx parcel build index.html - for prod build, will get an error saying main: App.js remove it as it is the entry point for app.
- hosted files will be from dist folder.
- only 3 files index.html, js, css
- ctrl + c for stopping the server.
- dist & parcel_cache can ge regenerated so we can put them in gitignore
- to make the app compatible for older browsers, we use browsers list module.
- https://browserslist.dev/

# parcel

- Dev Build
- Local Server
- HMR = Hot module replacement.
- Uses file watching algorithm - written in c++
- Faster Builds because of Caching.
- Image Optimization.
- Minify & bundle files.
- Compress files.
- Consistent Hashing.
- Code Splitting
- Differential Bundling - support older browser
- Diagnostics - better error suggestions.
- https
- Tree shaking algo - removes unused code.
- https://parceljs.org/ - documentation.
- Diff dev & prod build

- Ep 3
- Create a script instead of running commands.
- npm run name-of-the-script
- npm run start / npm start -> keyword reserved
- JSX - not part of react.
- we can write react without jsx as well.
- jsx is different from html. html like syntax.
- jsx is a react element.
- js engine doesn't understand jsx.
- parcel (Babel) transpiles jsx behind scenes.
- https://babeljs.io/
- jsx is converted to react.createelement.
- babel transpiles newer code to older code
- attributes in jsx are camelcase.
- jsx we need to wrap it paranthesis if it is multiline
- Everything is component in react
- Functional - new
- Class based - old
- Difference b/w react elt & comp
- Component Composition - comp in another comp.
- Inside Curly braces in jsx we can run any js exp
- React component cannot be called before initialization.
- cross site scripting
- jsx takes care of injection attacks, sanitizes the code inside flower brackets.
- Why we are writing the things we are writing.
