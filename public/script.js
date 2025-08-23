
// Smooth scroll for internal links
document.addEventListener('click', function(e){
  const t = e.target;
  if(t.tagName === 'A' && t.getAttribute('href') && t.getAttribute('href').startsWith('#')){
    e.preventDefault();
    document.querySelector(t.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  }
});

const form = document.getElementById('contact');
if(form){
  form.addEventListener('submit', ()=>{
    const btn = form.querySelector('button[type=submit]');
    if(btn) btn.disabled = true;
  });
}

const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
