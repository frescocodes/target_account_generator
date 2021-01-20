# Target Account Generator
By fresco#0001 on Discord

## Quickly generate multiple Target accounts with ease.

This CLI tool will allow you to quickly generate as many Target accounts as you'd like and then output them to a text file in a `username:password` format.

## How to run:

1. Clone this repository
2. Install [Node.js](https://nodejs.org/en/)
3. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/)
4. Run `yarn install` inside the directory
5. Copy paste your `proxies.txt` file to the root directory.
    - It **must** be named `proxies.txt`
    - **must** follow `ip:port:password` format
6. Run `node index.js`
7. You should be prompted for your catch-all domain, this will save to `config.json` (ex: @viperrapper.xyz)
    - you do not have to include "@", but you must include the top level domain (.com, org, .xyz, etc)
8. Give a number of accounts you would like to generate. 
    - this may be fewer than the amount of proxies you have in `proxies.txt` but **not** more.
9. Look inside the root directory for your newly exported `accounts.txt` containing the logins of every account generated in `username:password` format.
    - this will overwrite each time you run, so be sure to grab it before you generate new ones.
