import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Pane, Button, TextInputField, FormField, Avatar, toaster } from 'evergreen-ui';

//Bagian ini merupakan halaman login dengan akun : kevin/kevin

export default () => {
    const history = useHistory();
    const data = localStorage.getItem('username')
    if (data !== null) {
        history.push('/home')
    }
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const processLogin = (e) => {
        e.preventDefault();
        if (name === 'kevin' && pass === 'kevin') {
            toaster.success(
                `Welcome ${name}`,
                {
                    duration: 5
                }
            )
            localStorage.setItem('username', name)
            history.push('/home')
        } else if (name === '' || pass === '') {
            toaster.danger(
                'Username / Password tidak boleh kosong',
                {
                    duration: 5
                }
            )
        } else {
            toaster.danger(
                'Username / Password salah',
                {
                    duration: 5
                }
            )
            setName('')
            setPass('')
        }
    }

    return (
        <React.Fragment>
            <Pane display='flex' alignItems='center' justifyContent='center' marginTop={100} height='100vh'>
                <Pane background='tint' height={500} width={300} alignItems='center' justifyContent='center' padding={10}>
                    <Avatar isSolid name='Kevin Tan' size={40} />
                    <FormField>
                        <TextInputField
                            label='Username'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Nama...'
                        />
                        <TextInputField
                            type='password'
                            label='Password'
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder='Password...'
                        />
                        <Button onClick={processLogin} appearance='primary'>Login</Button>
                    </FormField>
                </Pane>
            </Pane>
        </React.Fragment>
    )
}