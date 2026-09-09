const API_URL = "https://script.google.com/macros/s/AKfycbwXOO4J2aa_2lormezBYH5btx550kjvjSFdLoUSOf-Nno9wBWWf3ptnn1HZ3NUhQ12Y/exec";

let currentUser = null;
let currentCourse = null;
let examAnswers = {};

async function api(action, payload = {}) {
  const response = await fetch(API_URL, {
    method: "POST",
    redirect: "follow",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, ...payload })
  });
  if (!response.ok) throw new Error("API connection failed: " + response.status);
  const text = await response.text();
  let data;
  try { data = JSON.parse(text); }
  catch(e){ console.error(text); throw new Error("استجابة السيرفر غير صحيحة"); }
  if (!data.success) throw new Error(data.message || "حدث خطأ");
  return data;
}

async function login(){
  const employeeID=document.getElementById('employeeID').value.trim();
  const pin=document.getElementById('pin').value.trim();
  if(!employeeID||!pin)return alert('أدخل الرقم الوظيفي وPIN');
  try{
    const d=await api('login',{employeeID,pin});
    currentUser=d.user;
    localStorage.setItem('bahraUser',JSON.stringify(currentUser));
    showApp();
    await Promise.all([loadDashboard(),loadCourses(),loadMyRequests(),loadMyCourses()]);
  }catch(e){alert(e.message)}
}

function showApp(){
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  document.getElementById('userName').textContent=currentUser?.name||'';
  document.getElementById('userRole').textContent=currentUser?.role||'';
}
function logout(){localStorage.removeItem('bahraUser');location.reload()}
function esc(v){return String(v??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;')}
function showTab(id){document.querySelectorAll('.tab-section').forEach(x=>x.classList.add('hidden'));document.getElementById(id).classList.remove('hidden')}

async function loadDashboard(){const d=await api('dashboard',{employeeID:currentUser.employeeID});kpiEmployees.textContent=d.employees;kpiCourses.textContent=d.courses;kpiRequests.textContent=d.requests;kpiCertificates.textContent=d.certificates}
async function loadCourses(){const d=await api('courses');courseList.innerHTML=d.courses.map(c=>`<div class="course-card"><span class="tag">${esc(c.category)}</span><h3>${esc(c.name)}</h3><p>${esc(c.objective||'')}</p><div class="meta">${esc(c.hours)} ساعة · ${esc(c.level)}</div><button onclick="requestCourse('${esc(c.id)}')">طلب الدورة</button></div>`).join('')}
async function requestCourse(courseID){try{const d=await api('trainingRequest',{employeeID:currentUser.employeeID,courseID});alert(d.message);await loadMyRequests();await loadDashboard()}catch(e){alert(e.message)}}
async function loadMyRequests(){const d=await api('myRequests',{employeeID:currentUser.employeeID});requestList.innerHTML=d.requests.length?d.requests.map(r=>`<div class="row-card"><strong>${esc(r.courseName)}</strong><span>${esc(r.status)}</span></div>`).join(''):'<div class="empty">لا توجد طلبات</div>'}
async function loadMyCourses(){const d=await api('myCourses',{employeeID:currentUser.employeeID});myCourseList.innerHTML=d.courses.length?d.courses.map(c=>`<div class="course-card"><h3>${esc(c.courseName)}</h3><div class="meta">${esc(c.status)} · ${c.progress}%</div><div class="progress"><span style="width:${c.progress}%"></span></div><button onclick="openCourse('${esc(c.courseID)}')">فتح الدورة</button></div>`).join(''):'<div class="empty">لا توجد دورات مسجلة</div>'}
async function openCourse(courseID){try{const d=await api('courseDetails',{courseID});currentCourse=d.course;playerTitle.textContent=currentCourse.name;moduleList.innerHTML=currentCourse.modules.map(m=>`<div class="module-card"><div><strong>${esc(m.title)}</strong><p>${esc(m.description||'')}</p></div><button onclick="completeModule('${esc(m.id)}')">إكمال</button></div>`).join('');coursePlayer.classList.remove('hidden')}catch(e){alert(e.message)}}
async function completeModule(moduleID){try{const d=await api('completeModule',{employeeID:currentUser.employeeID,courseID:currentCourse.id,moduleID});playerProgress.textContent=d.progress+'%';alert('تم تسجيل إكمال الوحدة');await loadMyCourses()}catch(e){alert(e.message)}}
async function startExam(){try{if(!currentCourse)return alert('افتح الدورة أولاً');const d=await api('exam',{employeeID:currentUser.employeeID,courseID:currentCourse.id});examAnswers={};examQuestions.innerHTML=d.questions.map((q,i)=>`<div class="question-card"><h4>${i+1}. ${esc(q.question)}</h4>${q.options.map(o=>`<label><input type="radio" name="q_${esc(q.id)}" onchange="examAnswers['${esc(q.id)}']='${esc(o.key)}'"> ${esc(o.text)}</label>`).join('')}</div>`).join('');examBox.classList.remove('hidden')}catch(e){alert(e.message)}}
async function submitExam(){try{const d=await api('submitExam',{employeeID:currentUser.employeeID,courseID:currentCourse.id,answers:examAnswers});examResult.innerHTML=`<div class="${d.result==='Pass'?'success-box':'danger-box'}"><strong>${d.result==='Pass'?'ناجح':'لم تحقق درجة النجاح'}</strong><div>الدرجة: ${d.score}%</div>${d.certificateID?`<div>رقم الشهادة: ${esc(d.certificateID)}</div>`:''}</div>`}catch(e){alert(e.message)}}

document.addEventListener('DOMContentLoaded',async()=>{const saved=localStorage.getItem('bahraUser');if(saved){try{currentUser=JSON.parse(saved);showApp();await Promise.all([loadDashboard(),loadCourses(),loadMyRequests(),loadMyCourses()])}catch(e){localStorage.removeItem('bahraUser')}}});
