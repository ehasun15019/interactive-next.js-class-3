export async function getData (url, option = {}) {
    const data = await fetch(url, option);

    return data.json();
}