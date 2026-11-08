
const menu=document.querySelector('.menu'), links=document.querySelector('.links');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('show'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('show')));
const form=document.querySelector('#artistForm');
if(form) form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Artist opportunity enquiry - '+d.get('name'));const body=encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nInterested in: ${d.get('role')}\nMessage: ${d.get('message')}`);window.location.href=`mailto:artfactorytiruppur@gmail.com?subject=${subject}&body=${body}`;});
