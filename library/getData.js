export async function getData (url, options = {}) {
    const data = await fetch(url, options);

    return data.json();
}