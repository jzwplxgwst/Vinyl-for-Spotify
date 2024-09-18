document.addEventListener('DOMContentLoaded', function() {
    const vinylDisc = document.getElementById('vinylDisc');
    let spinning = true;

    vinylDisc.addEventListener('click', function() {
        if (spinning) {
            vinylDisc.style.animationPlayState = 'paused';
        } else {
            vinylDisc.style.animationPlayState = 'running';
        }
        spinning = !spinning;
    });
});