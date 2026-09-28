# bi3.dz

نظام إدارة المبيعات للشركات الصغيرة والمتوسطة في الجزائر.

## التشغيل المحلي

1. انسخ `.env.example` إلى `.env` وضع بيانات PostgreSQL/Supabase.
2. نفّذ `npm install`.
3. نفّذ `npx prisma generate` ثم `npx prisma migrate dev --name init`.
4. شغّل `npm run dev` وافتح `http://localhost:3000`.

المشروع يستخدم Next.js 15 وTypeScript وTailwind وPrisma وPostgreSQL. لا تضع أسرار الإنتاج داخل GitHub؛ استخدم Secrets في بيئة الاستضافة.
