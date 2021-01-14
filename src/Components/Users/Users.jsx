import React from 'react';
import s from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Pablo_Escobar_Mug.jpg', followed: true, fullName: 'Egor', status: 'i am a boss', location: { city: ' Minsk', country: 'Belarus' } },
            { id: 2, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Pablo_Escobar_Mug.jpg', followed: false, fullName: 'vika', status: 'i am a dag', location: { city: ' Prague', country: 'Czech Republic' } },
            { id: 3, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Pablo_Escobar_Mug.jpg', followed: true, fullName: 'vasya', status: 'i am a keller', location: { city: ' Minsk', country: 'Belarus' } },
            { id: 4, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Pablo_Escobar_Mug.jpg', followed: false, fullName: 'vika', status: 'i am a rapper', location: { city: ' Mogilev', country: 'Belarus' } }

        ]
        )
    }
    // debugger;
    return <div>
        {

            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoURL} />
                    </div>
                    <div>

                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>  follow </button>
                            : <button onClick={() => { props.follow(u.id) }}> unfollow </button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>


                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
                </span>


            </div>)
        }
    </div>
}


export default Users;
