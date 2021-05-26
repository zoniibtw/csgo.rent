export const postData = async() => {

    try {

        let result = await fetch('http://csgo.rent/csgorentApi/API/User/createUser.php', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                username: 'test',
                password: 'test',
                firstName: 'test',
                lastName: 'test',
            })

        });

        console.log('Result' + result);

    } catch(e) {
        console.log(e)
    }

}