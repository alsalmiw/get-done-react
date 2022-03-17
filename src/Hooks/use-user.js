import {useState} from 'react';
import {login} from '../Services/DataServices'

export default function useUser(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [isAdmin, setIsAdmin] = useState(true);
    const [isOwner, setIsOwner] = useState(false);
    const [token, setToken] = useState("null");

    return {username, setUsername, userId, setUserId, isAdmin, setIsAdmin, password, setPassword, token, setToken}
}