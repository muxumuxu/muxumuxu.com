# muxumuxu.com

This project host the source code of the [muxumuu.com](muxumuxu.com) website.

It use [Nuxt.js](https://nuxtjs.org/) for server side rendering.

## Project anatomy

```
.
├── api             # Retrieve content from contentful
├── assets          # CSS + SVG images
├── components      # All components you can see in the website
├── dist            # Generated production files
├── docs            # Generated documentation
├── docs-src        # Documentation source files
├── layouts         # The top level component
├── middleware      # Ensure we load content from contentful rendering
├── mixins          # Code that applies to components that use those mixins
├── node_modules    # All dependencies
├── pages           # The page used to render all components
├── plugins         # External libraries that needs to be loaded
├── static          # Static png images
└── store           # The app data
```

## Environment variables

You must create an `.env` file with the following :

```
NODE_ENV=development
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
```

## Branching model

We use [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/) branching model to deliver high quality features.

## Project management

You can follow the development process on Pivotal Tracker :
- https://www.pivotaltracker.com/n/projects/2141834

## Content management

Content is managed using Contentful.

- https://app.contentful.com/spaces/b7tpjef1e0cq/entries

## Setup

### Development on your local machine (Using docker)

```
docker-compose build # Build the docker image
docker-compose up -d # Launch the docker image (daemon)
docker-compose logs -f # Show logs (tailing)
open http://localhost:3000
```

### Without Docker

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

### Build documentation

You have to install the gitbook [CLI](https://github.com/GitbookIO/gitbook-cli).

Launch the documentation locally:

```
cd docs-src
gitbook serve # Launch the documentation locally
```

Build & deploy on GitHub pages:

```
npm run build-doc # Build the gitbook
git add .
git commit -m '[*] Update documentation'
git push origin master
```

The documentation is now live [here](https://muxumuxu.github.io/muxumuxu.com/).

## Deployment

### Heroku

Before you need to ensure you have added a git remote to the heroku project.
It push the docker image on Heroku.

```
npm run deploy # Deploy on muxumuxu.herokuapp.com
```

You can now access the app:

- [muxumuxu.herokuapp.com](muxumuxu.herokuapp.com)
- [preview-muxumuxu.herokuapp.com](preview-muxumuxu.herokuapp.com)

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Contributors

- David Miotti <david@muxumuxu.com>
- Audrey Labuxière <audrey@muxumuxu.com>
