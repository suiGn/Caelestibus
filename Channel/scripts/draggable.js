let draggedItem = null;
let offsetX = 0, offsetY = 0;

document.getElementById('container').addEventListener('mousedown', function (e) {
    e.preventDefault();
    const rect = this.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    draggedItem = this;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    if (draggedItem) {
        draggedItem.style.left = (e.clientX - offsetX) + 'px';
        draggedItem.style.top = (e.clientY - offsetY) + 'px';
    }
}

function onMouseUp() {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    draggedItem = null;
}

function onMouseUp() {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    draggedItem = null;
}
