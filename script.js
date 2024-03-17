document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    function thefunction(elm) {
        // Toggle the display property
        elm.style.display = (elm.style.display === 'none') ? 'block' : 'none';
    }

    var btn1 = document.getElementById('experience-button');
    var elms1 = document.querySelectorAll('#work-experience .experience');

    // Attach a click event listener to the button
    btn1.addEventListener('click', function() {
        // Loop through each .experience element
        elms1.forEach(thefunction);
    });

    var btn2 = document.getElementById('honors-button');
    var elms2 = document.querySelectorAll('#honors-awards .experience');
    btn2.addEventListener('click', function() {
        // Loop through each .experience element
        elms2.forEach(thefunction);
    });

    var btn3 = document.getElementById('education-button');
    var elms3 = document.querySelectorAll('#education .educational');
    btn3.addEventListener('click', function() {
        // Loop through each .experience element
        elms3.forEach(thefunction);
    });

    var btn4 = document.getElementById('projects-button');
    var elms4 = document.querySelectorAll('#projects .projects');
    btn4.addEventListener('click', function() {
        // Loop through each .experience element
        elms4.forEach(thefunction);
    });

    var btn5 = document.getElementById('classes-button');
    var elms5 = document.querySelectorAll('#relevant-classes .class');
    btn5.addEventListener('click', function() {
        // Loop through each .experience element
        elms5.forEach(thefunction);
    });
});

