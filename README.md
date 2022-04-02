## Blog App

### Disclaimer:

In order to lend the app an endpoint to retrieve and post data, you will have to simulate an API endpoint at http://localhost:3500/.

### How to do it with npm package _json-server_

**You'll have to have Node and npm installed on your computer**

1. Copy the contents of db.json at /data on this repo, to a local json file named db ("db.json")
2. Run `npx json-server --watch db.json --port 3500` command inside a terminal. **Make sure you are placed in the actual folder containing the file!!**, eg: C://users/fooUser/desktop, if you created "db.json" in the desktop.
3. Now if you navigate to http://localhost:3500, you should get on the browser window the exacts contents of the db.json file.
4. Now you can finally [launch the app.](https://devtsp.github.io/blog)
