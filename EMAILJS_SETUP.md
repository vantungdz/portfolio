# EmailJS Setup Guide

## Bước 1: Đăng ký EmailJS
1. Truy cập [EmailJS.com](https://www.emailjs.com/)
2. Đăng ký tài khoản miễn phí
3. Xác nhận email

## Bước 2: Tạo Email Service
1. Vào Dashboard → Email Services
2. Click "Add New Service"
3. Chọn "Gmail" hoặc "Outlook"
4. Đăng nhập với email: `dovantung1000@gmail.com`
5. Lưu lại Service ID

## Bước 3: Tạo Email Template
1. Vào Dashboard → Email Templates
2. Click "Create New Template"
3. Sử dụng template sau:

```html
Subject: New Contact Message from {{from_name}}

Hello,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{reply_to}}
```

4. Lưu template và copy Template ID

## Bước 4: Lấy Public Key
1. Vào Dashboard → Account → API Keys
2. Copy Public Key

## Bước 5: Cập nhật Code
Thay thế các giá trị trong file `src/components/Contact.jsx`:

```javascript
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Thay bằng Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Thay bằng Template ID  
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Thay bằng Public Key
```

## Bước 6: Test
1. Chạy ứng dụng: `npm run dev`
2. Vào trang Contact
3. Điền form và gửi test message
4. Kiểm tra email `dovantung1000@gmail.com`

## Lưu ý:
- EmailJS miễn phí cho 200 email/tháng
- Nên test kỹ trước khi deploy production
- Có thể thêm reCAPTCHA để tránh spam
- Backup các ID và Key để sử dụng sau này

## Troubleshooting:
- Nếu không nhận được email, kiểm tra Spam folder
- Đảm bảo Service đã được kết nối đúng
- Kiểm tra console để xem lỗi
- Verify template variables match code 