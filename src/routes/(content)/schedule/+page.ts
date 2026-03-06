import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';



export const load = () => {
    const now = new Date();
    const openDate = new Date('2027-04-01T09:00:00');

    if (now < openDate) {
        error(404, {
            message: 'กำลังสร้างมองข้ามไปก่อน'
        });
    }
    
    return {}; 
};