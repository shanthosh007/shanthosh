document.getElementById('interestSelect').addEventListener('change', function() {
    var guidance = document.getElementById('guidance');
    var guidanceText = document.getElementById('guidanceText');
    var selectedValue = this.value;

    if (selectedValue === '') {
        guidance.classList.add('hidden');
        guidanceText.innerHTML = '';
    } else {
        guidance.classList.remove('hidden');
        if (selectedValue === 'webDevelopment') {
            guidanceText.innerHTML = 'To pursue a career in Web Development, you should start by learning HTML, CSS, and JavaScript. Build projects, learn frameworks like React, and understand backend technologies.';
        } else if (selectedValue === 'dataScience') {
            guidanceText.innerHTML = 'To pursue a career in Data Science, start by learning Python or R. Get comfortable with data analysis libraries like Pandas and NumPy, and explore machine learning with libraries like scikit-learn.';
        } else if (selectedValue === 'digitalMarketing') {
            guidanceText.innerHTML = 'To pursue a career in Digital Marketing, understand the basics of SEO, content marketing, social media strategies, and pay-per-click advertising. Familiarize yourself with tools like Google Analytics and HubSpot.';
        }
    }
});
