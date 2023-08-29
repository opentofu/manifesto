window.onload = function() {
    let counts = {
        'Company': 0,
        'Project': 0,
        'Foundation': 0,
        'Individual': 0
    };

    let rows = document.querySelectorAll('table tr');

    rows.forEach(row => {
        let cells = row.querySelectorAll('td');
        cells.forEach(cell => {
            if (counts.hasOwnProperty(cell.textContent)) {
                counts[cell.textContent]++;
            }
        });
    });
    
    document.querySelector('#companyOutput .count').textContent = counts['Company'];
    document.querySelector('#projectOutput .count').textContent = counts['Project'];
    document.querySelector('#foundationOutput .count').textContent = counts['Foundation'];
    document.querySelector('#individualOutput .count').textContent = counts['Individual'];
};
