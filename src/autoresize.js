function resize(node) {
    let clone = node.cloneNode();
    clone.className = 'clone';
    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    node.parentNode.insertBefore(clone, node);
    clone.style.height = 'auto';
    clone.value = node.value;
    node.style.height =
        clone.scrollTop + clone.scrollHeight + 20 + 'px';
    node.parentNode.removeChild(clone);
}

function delayedResize(node) {
    window.setTimeout(resize.bind(null, node), 0);
}

export function autoresize(node) {
    const events = [
        ['change', resize.bind(null, node)],
        ['cut', delayedResize.bind(null, node)],
        ['paste', delayedResize.bind(null, node)],
        ['drop', delayedResize.bind(null, node)],
        ['keydown', delayedResize.bind(null, node)],
	];
	for(event in events){
		node.addEventListener(events[event][0], events[event][1], false);
	}

    return {
        destroy() {
			for(event in events){
				node.removeEventListener(events[event][0], events[event][1], false);
			}
        },
    };
}
