# Bahra Electric Employee Development & AI Training Platform

منصة بحرة إلكتريك لتطوير وتدريب الموظفين، وهي منصة متكاملة لإدارة رحلة التعلم والتطوير من تحليل الاحتياج التدريبي وحتى قياس أثر التدريب وإصدار الشهادات.

## 🎯 الهدف من المنصة

تهدف المنصة إلى تحويل التدريب من عملية تسجيل دورات فقط إلى منظومة متكاملة تعتمد على البيانات والذكاء الاصطناعي لتحديد:

- من يحتاج إلى تدريب؟
- ما المهارة التي تحتاج إلى تطوير؟
- ما مستوى فجوة المهارة؟
- ما الدورة الأنسب للموظف؟
- لماذا تم ترشيح الموظف لهذه الدورة؟
- هل يحتاج التدريب إلى موافقة المدير؟
- هل أكمل الموظف المحتوى التدريبي؟
- هل اجتاز الاختبار؟
- ما أثر التدريب على أدائه؟

---

## 🤖 AI Training Needs Analysis

تحتوي المنصة على نظام لتحليل الاحتياج التدريبي يعتمد على عدة مؤشرات، منها:

- Competency Gap
- Knowledge Assessment
- Employee Self-Assessment
- Manager Assessment
- Performance Rating
- Role Criticality
- Previous Training Records
- Attendance & Assessment Results

ويقوم النظام بحساب مستوى الاحتياج التدريبي واقتراح الدورة المناسبة مع توضيح سبب التوصية.

### نموذج التحليل الأساسي

- Competency Gap: 45%
- Knowledge Test: 25%
- Performance Gap: 15%
- Manager Assessment: 10%
- Role Criticality: 5%

يمكن استخدام Groq AI لإضافة تحليل وتفسير ذكي للتوصيات.

---

## 🔐 Training Approval Workflow

الموظف لا يستطيع بدء أي دورة مباشرة.

مسار العملية:

Employee  
↓  
AI Training Needs Analysis  
↓  
Recommended Course  
↓  
Training Request  
↓  
Manager Approval  
↓  
Enrollment Created  
↓  
Course Unlocked  
↓  
Study Lessons  
↓  
Final Assessment  
↓  
Certificate  
↓  
Training Impact Measurement

إذا لم تتم موافقة المدير، يبقى محتوى الدورة مقفلاً للموظف.

---

## 📚 Learning Management

تشمل المنصة:

- إدارة الدورات التدريبية
- محتوى تدريبي داخل المنصة
- Lessons
- Training Sessions
- Training Calendar
- Course Enrollment
- Progress Tracking
- Final Assessments
- Training Requests
- Development Plans

النسخة الحالية تحتوي على:

**12 دورة تدريبية**  
**72 درسًا**  
**120 سؤال اختبار**

ويمكن إضافة المزيد من خلال قاعدة البيانات.

---

## 📝 Assessments & Exams

كل دورة يمكن أن تحتوي على اختبار نهائي.

النظام يقوم بتسجيل:

- Employee Score
- Passing Score
- Assessment Date
- Result
- Course Completion

إذا لم يحقق الموظف درجة النجاح المطلوبة، لا يتم إصدار الشهادة.

---

## 🎓 Certificates

بعد استكمال الدورة واجتياز الاختبار، يمكن إصدار شهادة إلكترونية تتضمن:

- Employee Name
- Employee ID
- Course Name
- Training Hours
- Assessment Score
- Issue Date
- Unique Certificate Number
- Verification Reference
- Bahra Electric Branding

مثال على رقم الشهادة:

`BAHRA-LD-2026-0001`

---

## 📄 Training Letters

تدعم المنصة خطابات التدريب، ومنها:

- Training Nomination Letter
- Training Approval Letter
- Training Completion Letter

ويمكن ربط الخطاب بنتيجة تحليل الاحتياج التدريبي وسبب ترشيح الموظف.

---

## 👥 User Roles

### Admin

يمتلك صلاحيات إدارة المنصة، ومنها:

- Employees
- Trainers
- Courses
- Training Requests
- Approvals
- Sessions
- Assessments
- Certificates
- Training Needs
- Development Plans
- Training Impact
- Reports
- Notifications
- Settings
- AI Analysis

### Trainer

يمكنه الوصول إلى الوظائف المتعلقة بالتدريب، مثل:

- Assigned Courses
- Course Content
- Trainees
- Training Sessions
- Attendance
- Evaluations
- Training Results

### Employee

يمكن للموظف الوصول إلى بياناته فقط، ومنها:

- Employee Profile
- Employee Card
- Recommended Training
- Training Needs Analysis
- Training Requests
- Approved Courses
- Course Content
- Assessments
- Certificates
- Development Plan
- Notifications

---

## 👤 Demo Users

تحتوي قاعدة البيانات التجريبية على **50 مستخدمًا**.

### Admin

Employee ID:

`BE-1001`

Name:

`عبدالله الشريف`

Position:

`مدير الموارد البشرية`

PIN:

`1234`

### Trainer

Employee ID:

`BE-1002`

PIN:

`1234`

### Employee

Employee ID:

`BE-1004`

PIN:

`1234`

> بيانات الدخول الحالية مخصصة للاختبار والتطوير ويجب تغييرها قبل الاستخدام الفعلي.

---

## 🗄️ Database

قاعدة البيانات الحالية:

`Bahra_Electric_AI_Training_Database_50.xlsx`

وتحتوي على جداول مثل:

- Dashboard
- Departments
- Employees
- Courses
- Course_Content
- Course_Quizzes
- Need_Questionnaire
- Need_Answers
- Training_Needs
- Requests
- Enrollments
- Attendance
- Assessments
- Certificates
- Sessions
- Letters
- Development_Plans
- Notifications
- Settings

---

## ⚙️ Technology

Frontend:

- HTML
- CSS
- JavaScript
- Responsive UI

Backend:

- Google Apps Script

Database:

- Google Sheets

AI:

- Groq API

Hosting:

- GitHub Pages

---

## 🧠 Groq AI Setup

لتفعيل التحليل الذكي، تتم إضافة مفتاح Groq داخل:

Google Apps Script  
→ Project Settings  
→ Script Properties

ثم إضافة:

`GROQ_API_KEY`

ويستخدم النظام الذكاء الاصطناعي في تحليل وتفسير الاحتياج التدريبي.

> لا يجب وضع API Key داخل `index.html` أو رفعه إلى GitHub.

---

## 📁 Project Structure

Bahra-Electric/

- index.html
- README.md
- assets/
- Code.gs
- Bahra_Electric_AI_Training_Database_50.xlsx

يجب المحافظة على أسماء ملفات الصور داخل مجلد `assets` لأن المنصة مرتبطة بها.

---

## 🎨 Bahra Electric Design

تم تصميم المنصة بهوية Bahra Electric:

- Red
- Black
- White
- Industrial visual identity
- Responsive Dashboard
- Course Visuals
- Training Path Visuals
- Employee Development Interface
- Arabic / English support
- Light / Dark Mode

---

## 🔄 Complete Employee Learning Journey

المنصة مصممة لإدارة رحلة التطوير كاملة:

**Employee Data → Skills Analysis → AI Training Need → Course Recommendation → Manager Approval → Enrollment → Learning Content → Assessment → Certificate → Development Plan → Training Impact**

---

## 🔒 Important

قبل الاستخدام الفعلي يجب:

1. تغيير أرقام PIN التجريبية.
2. عدم رفع Groq API Key إلى GitHub.
3. نشر Google Apps Script كـ Web App.
4. ربط `SCRIPT_URL` في `index.html` برابط `/exec`.
5. تحديد صلاحيات المستخدمين الفعلية.
6. اختبار مسار الموافقات بالكامل.
7. اختبار إصدار الشهادات.
8. اختبار قاعدة البيانات قبل إضافة بيانات الموظفين الحقيقية.

---

## Bahra Electric

**Employee Development & AI Training Platform**

Learning • Development • Skills • AI • Performance
