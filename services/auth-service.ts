import AysncStorage from '@react-native-async-storage/async-storage';
import { http } from './http-service';


export async function login(email:string, password:string) {
    const response = await http.post('https://api.codingthailand.com/api/login', {
        email:email,
        password:password
    });

    //save token to storage
    await AysncStorage.setItem('@token',JSON.stringify(response.data));
    return response;
}

export async function logout() {
    await AysncStorage.removeItem('@token');
}

export async function getProfile() {
    const tokenString = await AysncStorage.getItem('@token');

    if(!tokenString){
        return null;
    }
    const token = JSON.parse(tokenString);
    const response = await http.get('https://api.codingthailand.com/api/profile', {
        headers:{'Authorization':'Bearer '+token.access_token}
    })
    return response;
}