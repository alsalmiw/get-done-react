import {useState} from 'react';

export default function useUser(){
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');

    return {user, setUser, userId, setUserId}
}