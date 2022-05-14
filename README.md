# Fi-Writer

Fi-Writer is an interactive fiction writer made as a [Progressive Web Application](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps), using React with Typescript and built using Vite.

## Planned features

- Import a story made in [Twine](https://twinery.org/)
  - [ ] [SugarCube](https://www.motoslave.net/sugarcube/2/)
  - [ ] [Chapbook](https://klembot.github.io/chapbook/)
  - [ ] [Harlowe](https://twine2.neocities.org/)
  - [ ] [Snowman](https://videlais.github.io/snowman/2/)
- Edit a passage in a text editor
  - [ ] Implement a simple [TipTap](https://tiptap.dev/) editor
  - [ ] Add format specific [menus](https://tiptap.dev/guide/menus#menus) (or even [slash commands](https://tiptap.dev/guide/menus#slash-commands))
  - [ ] Offer [suggestions](https://tiptap.dev/api/utilities/suggestion) for variables
- See and edit a diagram view of the story, using [react-diagrams](https://github.com/projectstorm/react-diagrams)
- Publish a story
  - [ ] Export a story in Twine-compatible HTML/JS format
  - [ ] Publish to itch.io using [butler](https://itch.io/docs/butler/)

## Running the application

You can run the development server very simply by running `npm run dev`.

⚠️ If you want to try to build the application and run it in prod, you need to create a `.pem` certificate and provide it to the https server. ⚠️
Steps:

1. `brew install mkcert`: install mkcert tool - macOS; you can see the mkcert repo for details
2. `brew install nss`: install nss (only needed if you use Firefox)
3. `mkcert -install`: Setup mkcert on your machine (creates a CA)
4. `npm run cert` ⚠ ️ at the root of the application: generate the application's certificate
5. `npm run serve`: start the build and the production server

## Architecture

### main.tsx

This is the website renderer. It simply renders the `App` component and wraps it into the DOM router.

### App.tsx

This is the main app router. It describes the application routes, links them to their respective views, and wraps them in global contexts.
Contexts are:

- `ThemeProvider`: provides the application theme through [Theme UI](https://theme-ui.com/)
- `ModalProvider`: provides a global application modal component through [styled-react-modal](https://github.com/AlexanderRichey/styled-react-modal)
- `Routes`: describes the application routes and links them to their respective views

### components

### themes

All theme's elements are described here:

- `colors`: defines all colors for all modes, such as `light`/`dark`/etc.
- `fonts`: defines fonts family used in the application
- `theme`: provides the application theme to the `ThemeProvider` context
- `styles`: defines base html elements' styles, such as `root`, `h1`, etc.
- `buttons`, ...: defines basic components' styles and variants through the global theme

### views

This is the views folder. It describe the main application views (or pages). These views are mostly organising the layouts for components.

## Contributing

Contributions can be made in various forms:

- Feedback, bugs, or feature proposals using the proper issue template and labels
- Code contributions made by forking the repository and make a PR
- Translations using the translation tools (WIP maybe [Weblate](https://weblate.org/) or [Crowdin](https://crowdin.com/)?)

You have a more complete document here: [CONTRIBUTING.md](./CONTRIBUTING.md)

## We use Discord for communication

The [discord server](https://discord.gg/TCCbb5qFC8) is used both for development and communicating with the application users. There is a [specific channel](https://discord.com/channels/966586970966986762/966587028990988329) to talk about Fi-Writer development.
