<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contributors-">Contributors</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


## About The Project
The idea behind the bot is to help people collaborate, learn and in the end make new friends. Especially now in the beginning where everything feels chaotic and you don’t know where to begin. The idea is that you can use the bot to see what other people are busy building and if they are available you can join and help build something awesome together.

### Built With
- TypeScript
- Discord.js
- Supabase 
  
## Getting Started
### Prerequisites
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)
- [Node.js](https://nodejs.org/en/download/) (16.13.0)
- [Supabase Account](https://app.supabase.io/)

### Installation
  1. Clone the repo
   ```sh
   git clone https://github.com/Developer-DAO/DAO-pairbot.git
   ```
  2. Change directory and install NPM packages
   ```sh
   cd DAO-pairbot && npm install
   ```
  3. Create Supabase project.
  4. Create .env file and fill it out with your details
   ```
   DISCORD_TOKEN=
   GUILD_ID=
   CLIENT_ID=
   SUPABASE_URL=
   SUPABASE_ANON_KEY=
   ```
   5. Copy the snippet from SQL-snippets and paste in the SQL Editor on Supabase and click run.

## Usage
These are the current commands the bot supports:
- `/add` - Add yourself to the pairing database
- `/edit` - Edit your profile on the pairing database
- `/available` - Set yourself as available
- `/unavailable` - Set yourself as unavailable
- `/developers all` - List all developers in the paring database 
- `/developers available` - List all available developers in the pairing database
- `/invite` - Invite an available developer to pair up with
- `/remove` - Remove yourself from the pairing database

## Roadmap
- [ ] Finish basic features
- [ ] Add Projects
- [ ] Add Website Interface
- [ ] Add User analytics to Website
- [ ] Add Project analytics to Website
## Contributing
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://buxmann.dev"><img src="https://avatars.githubusercontent.com/u/21178318?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Martin Buxmann</b></sub></a><br /><a href="https://github.com/Developer-DAO/DAO-pairbot/commits?author=mbuxmann" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Calvaz"><img src="https://avatars.githubusercontent.com/u/44518734?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Calvaz</b></sub></a><br /><a href="https://github.com/Developer-DAO/DAO-pairbot/commits?author=Calvaz" title="Code">💻</a> <a href="https://github.com/Developer-DAO/DAO-pairbot/commits?author=Calvaz" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
## License
## Contact
## Acknowledgments
