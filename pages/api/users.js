import { getUsersUrl } from "../../src/utils/utils";
import { encode } from "base-64";

export default async function Users(req, res) {
  const response = await fetch(getUsersUrl(), {
    method: "GET",
    headers: {"Authorization": "Basic "+encode("subkhon@mail.com:samrullo") },
  });
  try {
    const users_json = await response.json();
    console.log("about to send " + JSON.stringify(users_json) + " as response");
    res.status(200).json(users_json);
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
}
