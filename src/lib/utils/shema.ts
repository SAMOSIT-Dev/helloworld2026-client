import { z } from 'zod';

export const formRegister = z.object({
	email: z.email('อีเมลไม่ถูกต้อง'),
	studentId: z.string().min(11, 'รหัสนักศึกษาต้องมี 11 หลัก'),
	fullName: z.string().min(2, 'กรุณากรอกชื่อ'),
	nickname: z.string().min(1, 'กรุณากรอกชื่อเล่น'),
	phone: z.string().optional(),
	discord: z.string().optional(),
	major: z.string().min(1, 'กรุณาเลือกสาขา'),
	track: z.string().min(1, 'กรุณาเลือกสาย'),
	question_1: z.string().min(10, 'ต้องตอบข้อความอย่างน้อย 10 ตัวอักษร'),
	question_2: z.string().min(10, 'ต้องตอบข้อความอย่างน้อย 10 ตัวอักษร'),
	question_3: z.string().min(10, 'ต้องตอบข้อความอย่างน้อย 10 ตัวอักษร'),
	question_4: z.string().min(10, 'ต้องตอบข้อความอย่างน้อย 10 ตัวอักษร'),
	question_5: z.string().min(10, 'ต้องตอบข้อความอย่างน้อย 10 ตัวอักษร')
});

export type FormSchema = z.infer<typeof formRegister>;
