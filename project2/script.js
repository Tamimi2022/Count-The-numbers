let count = 0;

// Declare a Variable
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('.value');

// Make a connection
btns.forEach(function (item) {
    item.addEventListener('click', function(event) {
        const styles = event.currentTarget.classList;
        
        // We do if/else statement
        if (styles.contains('increment')) {
            count --;
        }
        else if (styles.contains('descrement')) {
            count ++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
    })
})