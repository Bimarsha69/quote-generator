document.getElementById('generateQuote').addEventListener('click', function() {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            var quote = data[Math.floor(Math.random() * data.length)];
            document.getElementById('quote').textContent = `"${quote.text}" - ${quote.author}`;
            document.body.style.backgroundColor = getRandomColor();
        });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
