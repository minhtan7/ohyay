import React from "react";
import "./App.css";
import Session from "./components/Session";
import * as jwt from "jsonwebtoken";
import { useEffect } from "react";

// Create the request. Each request must container your user id.
// You can get your user id from https://ohyay.co/ohyay_api.html

function App() {
  const req = { userId: "u_7rgNArdf8we7HYtkdOtHGL84amd2" };
  const apiKey = "sRwLIUgSxN7xQzIfv1mqODwMEUQO/gIMd0JTtPwYViM=";
  const token = jwt.sign(req, apiKey);
  console.log(token);
  useEffect(() => {
    async function fetchData() {
      try {
        const url =
          "https://us-central1-ohyay-prod-d7acf.cloudfunctions.net/ohyayapi/list-workspaces";
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: token,
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [token]);

  return (
    <div className="App">
      <Session />
    </div>
  );
}

export default App;
