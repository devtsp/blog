## Blog ✒


### Before [Launching the app](https://devtsp.github.io/blog) 👇👇

You will have to simulate an API endpoint at http://localhost:3500/.

#### How to do it with npm package _json-server_ (You'll have to have Node and npm installed on your computer

* Copy the contents of `db.json` at `/data` on this repo, to a local json file (`db.json`)
* Run `npx json-server --watch db.json --port 3500` command inside a terminal.  
 **Make sure you are placed in the actual folder containing the file!!**, eg: `//users/fooUser/desktop`, if you created `db.json` in the desktop.
* Now if you navigate to http://localhost:3500, you should get on the browser window the exacts contents of your `db.json` file.
* Now you can finally [launch the app.](https://devtsp.github.io/blog) 💣
