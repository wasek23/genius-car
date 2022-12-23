export const setJwtToken = (user) => {
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: user.email })
    })
        .then(res => res.json())
        .then(data => {
            // localStorage is easiest but not best place to store token
            localStorage.setItem('geniusToken', data.token)
        });
}