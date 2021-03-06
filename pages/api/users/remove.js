import { getUsersUrl } from "../../../src/utils/utils";
export default async function NewUser(req, res) {
  const user_data = req.body;

  console.log(
    "will delete " +
      user_data.name +
      " : " +
      user_data.email +
      " to " +
      getUsersUrl()
  );
  const response = await fetch(getUsersUrl(), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user_data),
  });
  const response_json = await response.json();
  res.status(200).json(response_json);
}
