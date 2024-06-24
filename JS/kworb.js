function adjustIframeHeight(iframe) {
    try {
        const contentHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        iframe.style.height = contentHeight + 'px';
    } catch (error) {
        console.warn("Cross-origin iframe height adjustment failed: ", error);
    }
}

function setupIframeResizing(iframeId) {
    const iframe = document.getElementById(iframeId);
    iframe.onload = function() {
        adjustIframeHeight(iframe);
    };

    window.addEventListener('resize', function() {
        adjustIframeHeight(iframe);
    });
}

setupIframeResizing('kworbArtistsIframe');
setupIframeResizing('kworbListenersIframe');