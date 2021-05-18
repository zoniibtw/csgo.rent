import React from 'react';

class App extends React.Component {

    async createAccount() {

        try  {

            let result = await fetch('http://csgo.rent/csgorentApi/API/User/createUser.php', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    username: 'myusername',
                    password: 'mypassword',
                    firstName: 'myFirstName',
                    lastName: 'myLastName'
                })
            });

            console.log('Result' + result)

        } catch(e) {
            console.log(e)
        }

    }

    constructor(props) {

        super(props);

        this.state = {
            userID: 0,
            username: '',
            data: [],
        }

    }

    componentDidMount() {

        fetch('http://csgo.rent/csgorentApi/API/User/readUser.php')
            .then(res => res.json())
            .then(json => {
                const { userID, username, data} = json;
                this.setState({ userID, username, data});
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {

        const { userID, username, data } = this.state;

        return (
            <div className="App">
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            UserID: {item.userID} | Username: { item.username}
                        </li>
                    ))}
                </ul>
                <button onClick={ () => this.createAccount() }>Create Account</button>
            </div>
        );

    }

}

export default App;