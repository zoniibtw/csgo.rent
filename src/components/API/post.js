export useEffect(() => {

const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ username: 'test', password: 'test', firstName: 'test', lastName: 'test' })
            };
            fetch('https://csgo-rent-api-lrib5.ondigitalocean.app/API/User/createUser.php', requestOptions)
                .then(response => response.json())
                .then(data => setUserId(data.id));
}, []);
