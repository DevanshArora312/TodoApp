# This is a web app to keep a track of your tasks

# Installation
1. Clone the repository on your local machine
   ```
   git clone (link)
   ```
2. Open folder
   ```
   cd TodoApp
   ```
3. Go into Client and Server separately and install required modules
  ## For Server
   ```
   cd Server
   npm i
   ```
## For Client
   ```
   cd Client
   npm i
   ```
4. Add env files to client and server
  ## For Server
   ```
  PORT = 4001
  DB_URL = "YOUR_MONGO_DB_URL"
  JWT_SECRET_KEY = "YOUR_KEY"
  ```
  ## For Client
  ```
  VITE_REACT_APP_BASE_URL = "http://localhost:4001/api/v1"
  (Note ---> the port in server and Base URL here must be same if you decide to change it )
  ```
5. Start server and client in separate terminals with `npm run dev`
