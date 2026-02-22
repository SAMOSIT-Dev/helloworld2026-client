import { z } from 'zod';

export const formRegister = z.object({
	email: z.email('รูปแบบอีเมลไม่ถูกต้อง').refine(
		(val) => {
			return val.endsWith('@mail.kmutt.ac.th');
		},
		{
			message: 'กรุณาใช้อีเมลนักศึกษา (@mail.kmutt.ac.th)'
		}
	),
	studentId: z
		.string()
		.length(11, 'รหัสนักศึกษาต้องมี 11 หลัก')
		.regex(/^[0-9]/, 'รหัสนักศึกษาตัองเป็นตัวเลข')
		.refine((val) => val.startsWith('681305'), 'เฉพาะนักศึกษาคณะ SIT (รหัส 681305XXXXX) เท่านั้น'),
	fullName: z.string().min(2, 'กรุณากรอกชื่อ'),
	nickname: z.string().min(1, 'กรุณากรอกชื่อเล่น'),
	phone: z.string().min(1,"กรุณาใส่เบอร์").regex(/^\d/, 'การุณาใส่เบอร์โทรศัพท์ให้ถูกต้อง').length(10, 'การุณาใส่เบอร์โทรศัพท์ให้ถูกต้อง'),
	discord: z.string().optional(),
	major: z.string().min(1, 'กรุณาเลือกสาขา'),
	track: z.string().min(1, 'กรุณาเลือกสายที่ต้องการสมัคร'),
	question_1: z.string().min(30, 'กรุณาอธิบายเหตุผลเพิ่มเติมอีกนิดครับ (อย่างน้อย 30 ตัวอักษร)'),
	question_2: z.string().min(30, 'กรุณาอธิบายทักษะหรือประสบการณ์ (อย่างน้อย 30 ตัวอักษร)'),
	question_3: z.string().min(30, 'กรุณาอธิบายวิธีการรับมือปัญหา (อย่างน้อย 30 ตัวอักษร)'),
	question_4: z.string().min(30, 'กรุณาอธิบายแนวทางการสื่อสาร (อย่างน้อย 30 ตัวอักษร)'),
	question_5: z.string().min(30, 'กรุณาอธิบายความคาดหวังของน้อง (อย่างน้อย 30 ตัวอักษร)')
});

export type FormSchema = z.infer<typeof formRegister>;
