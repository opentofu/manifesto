var toggle_theme = document.getElementById('switch-theme');
window.onload = function () {
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
    toggle_theme.innerHTML += mode_dark; 
};
var mode_light = `<svg  width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13H2Zm18 0q-.425 0-.713-.288T19 12q0-.425.288-.713T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-2Zm-8-8q-.425 0-.713-.288T11 4V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5Zm0 18q-.425 0-.713-.288T11 22v-2q0-.425.288-.713T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7t.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7t-.275.7q-.275.3-.687.288T5.65 7.05ZM18 19.425l-1.05-1.075q-.275-.3-.275-.713t.275-.687q.275-.3.688-.287t.712.287L19.425 18q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.288-.687t.288-.713L18 4.575q.275-.3.7-.288t.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275t-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.712-.275t.688.275q.3.275.288.688t-.288.712L6 19.425q-.275.3-.7.288t-.725-.288Z"/></svg>`


var mode_dark = `<svg  width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 0 0 8.997-9.252a7 7 0 0 1-10.371-8.643A9 9 0 0 0 12 21Z"/></svg>`;

toggle_theme.addEventListener('click', () => {
    const bodyElem = document.getElementsByTagName('body');
    const tfLogo = document.getElementsByClassName('logo');
    console.log('logo :>> ', tfLogo[0]);
    if (bodyElem[0].classList.contains('light')) {
        toggle_theme.innerHTML = '';
        toggle_theme.innerHTML += mode_light; 
        bodyElem[0].classList.remove('light');
        bodyElem[0].classList.add('dark');
        tfLogo[0].src = 'images/on-dark@2x.png'
    } else {
        toggle_theme.innerHTML  = ''
        toggle_theme.innerHTML += mode_dark; 
        bodyElem[0].classList.remove('dark');
        bodyElem[0].classList.add('light');
        tfLogo[0].src = 'images/on-light@2x.png'
    }
})