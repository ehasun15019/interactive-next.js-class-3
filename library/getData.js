export async function getData (url) {
    const data = await fetch(url);

    return await data.json();
}