const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    if (!isNaN(name) || !isNaN(email)) {
        console.log('Not a number');
    } else {
        const user = {
            name, email
        }

        const usersDataArray = JSON.parse(localStorage.getItem('usersData') || '[]');
        usersDataArray.push(user);
        localStorage.setItem('usersData', JSON.stringify(usersDataArray));

        e.target.name.value = '';
        e.target.email.value = '';

        alert('Form submitted successfully!');
    }
}

export { handleFormSubmit }