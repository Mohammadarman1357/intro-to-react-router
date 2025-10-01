import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const { name, website } = user;

    // const params = useParams();
    // console.log(params.userId);

    const { userId } = useParams();
    console.log(userId);

    return (
        <div>
            <h3>User Details here</h3>
            <h5>{name}</h5>
            <p>Website : {website}</p>
        </div>
    );
};

export default UserDetails;