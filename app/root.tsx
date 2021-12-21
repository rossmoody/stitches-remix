import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  HeadersFunction,
  MetaFunction,
} from "remix";
import { getColorScheme } from "./cookies";
import { globalStyles } from "../stitches.config";

export const meta: MetaFunction = () => ({
  title: "Stitches Theme Example",
});

export const headers: HeadersFunction = () => ({
  "Accept-CH": "Sec-CH-Prefers-Color-Scheme",
});

export const loader: LoaderFunction = async ({ request }) => {
  const userSelectedColorScheme = await getColorScheme(request);
  const systemPreferredColorScheme = request.headers.get(
    "Sec-CH-Prefers-Color-Scheme"
  );

  return userSelectedColorScheme ?? systemPreferredColorScheme;
};

export default function App() {
  globalStyles();

  const colorScheme = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={colorScheme}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
