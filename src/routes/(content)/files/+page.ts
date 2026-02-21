import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

export const csr = dev;
export const prerender = false; 

export const load = () => {
    const now = new Date();
    const openDate = new Date('2027-03-01T09:00:00');

    if (now < openDate) {
        error(404, {
            message: 'ขออภัย ระบบยังไม่เปิดให้เข้าใช้งานในขณะนี้'
        });
    }
    
    return {}; 
};