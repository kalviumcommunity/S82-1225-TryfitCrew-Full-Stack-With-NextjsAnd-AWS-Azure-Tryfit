export async function fetchWithAuth(url: string) {
  let res = await fetch(url, {
    credentials: "include",
  });

  if (res.status === 401) {
    const refreshRes = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
    });

    if (!refreshRes.ok) throw new Error("Session expired");

    res = await fetch(url, {
      credentials: "include",
    });
  }

  return res;
}
