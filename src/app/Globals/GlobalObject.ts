export var GlobalObject = {

    serverAddress: 'http://localhost:8080',

    // Resize font to fit width and height of current div
    // Use 'global-font-resize' class on parent element of text to resize
    FontResize(elementId?: string) {
        var elements;
        if (elementId) {
            elements = [document.getElementById(elementId)];
        } else {
            elements = document.getElementsByClassName('global-font-resize');
        }

        for (var i = 0, elem = elements[i] as HTMLElement; i < elements.length; i++, elem = elements[i] as HTMLElement) {
            // Here is the magic happening
            var newFontSize = (parseInt(window.getComputedStyle(elem).getPropertyValue('font-size').slice(0, -2)));

            // First loop - increasing font until it greater then its parent
            while (elem.scrollHeight <= elem.offsetHeight) {
                newFontSize++;
                elem.style.fontSize = newFontSize + 'px';
            }

            // Second loop - decreasing font until it lower then its parent
            while (elem.scrollHeight > elem.offsetHeight) {
                newFontSize--;
                elem.style.fontSize = newFontSize + 'px';
            }
        }
    }
};
