
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

// MAIL
document.getElementById('contact').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch('https://<region>-<projekt>.cloudfunctions.net/sendContactEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    alert(await res.text());
  });