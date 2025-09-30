import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const { name, website } = user;

    return (
        <div>
            <h3>User Details here</h3>
            <h5>{name}</h5>
            <p>Website : {website}</p>
        </div>
    );
};

export default UserDetails;