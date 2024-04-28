'use client'
import { useState } from "react"
import { createClient } from '../../utils/supabase'


export default function CreateAccount() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    // const cookieStore = cookies();
    const supabase = createClient();

    const signUpNewUser = async () => {
        const { data, error } = await supabase.auth.signUp({
            email: mail,
            password: password,
            // options: {
            //     emailRedirectTo: 'https://example.com/welcome',
            // },
        })
        if(error){
            console.log(error)
        }
        // console.log(error)
    }

    return (
        <>
            <form onSubmit={signUpNewUser}>
                <h3>Create your account !</h3>

                <input
                    type="text"
                    placeholder="email"
                    value={mail}
                    onChange={e => { setMail(e.target.value) }}
                />

                <input 
                type="password" 
                placeholder="code"
                value={password}
                onChange={e=>{setPassword(e.target.value)}}
                />

                <input type="submit" value={'Create !'} />
            </form>

        </>
    )
}