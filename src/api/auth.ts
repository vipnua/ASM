import instance from './instance';
import { Users } from '../interfaces/Users';

export const signup = async (user: Users): Promise<Users> => {
    return await instance.post('/signup',user);
}
export const signin = async (user: Users): Promise<Users> => {
    return await instance.post('/signin',user);
}

