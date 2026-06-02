const DEFAULT_SITE_URL = "http://localhost:8080";

export type PublicEnv = Readonly<{
  siteUrl: string;
}>;

function normalizeSiteUrl(value: string | undefined): string {
  const rawValue = value?.trim() || DEFAULT_SITE_URL;
  let url: URL;

  try {
    url = new URL(rawValue);
  } catch (error) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be a valid absolute URL, for example: https://www.myclawteam.com",
      { cause: error },
    );
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must use the http or https protocol.",
    );
  }

  return url.origin;
}

export const publicEnv: PublicEnv = Object.freeze({
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
});
