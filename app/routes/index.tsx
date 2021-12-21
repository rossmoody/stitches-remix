import { Button } from "~/components/Button";
import { ActionFunction, Form, redirect, Link } from "remix";
import { colorSchemeCookie, getColorScheme } from "../cookies";

export const action: ActionFunction = async ({ request }) => {
  const currentTheme = await getColorScheme(request);
  const newTheme = currentTheme === "light" ? "dark" : "light";

  return redirect(request.url, {
    headers: {
      "Set-Cookie": await colorSchemeCookie.serialize(newTheme),
    },
  });
};

export default function Index() {
  return (
    <div>
      <h1>Home</h1>
      <Form method="post">
        <Button type="submit">Change Theme</Button>
      </Form>
      <ul>
        <li>
          <Link to="/pages">Go to /pages</Link>
        </li>
        <li>
          <Link to="/pages/hello">Go to /pages/hello</Link>
        </li>
        <li>
          <Link to="/pages/goodbye">Go to /pages/goodbye</Link>
        </li>
      </ul>
    </div>
  );
}
