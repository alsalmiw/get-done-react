import {useState} from 'react';

export default function useUser(){
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    return {user, setUser, userId, setUserId, isAdmin, setIsAdmin}
}