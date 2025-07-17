export async function getData (url) {
    const data = await fetch(url);

    return data.json();
}