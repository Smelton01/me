# Personal Website

A personal website for Simon Juba based on a template by [Michael D'Angelo](https://github.com/mldangelo.)
Live demo: [Here](https://smelton01@github.io/me).

A simple, easily modifiable, statically-exportable [React](https://reactjs.org/), [Jamstack](https://jamstack.org/) application deployed automatically for free using [github pages](https://pages.github.com/). Built using modern javascript, based on [create-react-app](https://github.com/facebook/create-react-app) with [React-Router](https://reactrouter.com/), SCSS, [github actions](https://github.com/features/actions), and many other useful technologies.

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
git clone https://github.com/Smelton01/me.git
cd me
npm install
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

### Static Export

To statically export the site without deploying to github pages, delete or disable `.github/workflows/github-pages.yml` and run `npm run predeploy`. This generates a static export of the website as `me/build/`. Copy this and self-host or deploy to a CDN.

## Acknowledgements

* Template based on [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](html5up.net).
