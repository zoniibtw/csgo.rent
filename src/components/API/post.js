class Post extends App {

    async postData() {

    try {

        let result = await fetch('https://csgo-rent-api-lrib5.ondigitalocean.app/API/User/createUser.php', {
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
                lastName: 'test'
            })

        });

        console.log(result)
        return true;

    } catch(e) {
        console.log(e)
        return false;
    }

}

}

export default Post;
