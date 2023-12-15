window.onload = function() {
    var bars = document.querySelectorAll('.progress-bar');

    bars.forEach(function(bar) {
        var skillLevel = parseInt(bar.getAttribute('data-skill-level')); // Convert to number
        var segment = document.createElement('span');

        segment.className = 'filled';
        segment.style.width = skillLevel + '%'; // Set width based on skill level

        bar.appendChild(segment);
    });
};