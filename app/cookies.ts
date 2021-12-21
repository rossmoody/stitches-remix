import { createCookie } from "remix";

export let colorSchemeCookie = createCookie("color-scheme");

export const getColorScheme = async (request: Request) =>
  await colorSchemeCookie.parse(request.headers.get("Cookie"));
