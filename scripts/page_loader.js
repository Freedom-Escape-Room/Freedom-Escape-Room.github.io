async function loadPage(url) {
    const res = await fetch(url);
    const html = await res.text();
    document.getElementById('content').innerHTML = html;
    history.pushState(null, '', url);
}
