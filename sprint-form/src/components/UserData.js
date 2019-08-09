import React from 'react';

const UserData = ({ info }) => {
    console.log('userdataprops', info)

    return (
        <>
            {info.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.course}</p>
                    <p>{item.technique}</p>
                    <ul>
                        {item.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}

export default UserData;