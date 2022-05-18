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

You can run the development server by running `npm run dev`.
You can build and run the production https server by running `npm run serve`.

## Building the application

You can build the application by running `npm run build`.
If you want a detailed report on the various module sizes, you can run `npm run build:report` and check the `build.log` file.

## Contributing

Contributions can be made in various forms:

- Feedback, bugs, or feature proposals using the proper issue template and labels
- Code contributions made by forking the repository and make a PR
- Translations using the translation tools (WIP maybe [Weblate](https://weblate.org/) or [Crowdin](https://crowdin.com/)?)

You have a more complete document here: [CONTRIBUTING.md](./CONTRIBUTING.md)

## We use Discord for communication

The [discord server](https://discord.gg/TCCbb5qFC8) is used both for development and communicating with the application users. There is a [specific channel](https://discord.com/channels/966586970966986762/966587028990988329) to talk about Fi-Writer development.
