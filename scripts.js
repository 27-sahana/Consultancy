// Set year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
function toggleMobileMenu(btn){
  const nav = document.querySelector('nav ul');
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  btn.setAttribute('aria-expanded', (!open).toString());
}

// Reveal sections with fade when they enter viewport
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.querySelectorAll('.fade-in').forEach(el=>el.classList.add('show'));
  })
},{threshold:0.18});
document.querySelectorAll('section.page').forEach(s=>observer.observe(s));

function handleContact(e){
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const msg = e.target.message.value.trim();
  if(!name||!email||!msg){alert('Please complete all fields');return}
  alert('Thanks, ' + name + '! Your message has been recorded (demo).');
  e.target.reset();
  location.hash = '#home';
}

function handleLogin(e){
  e.preventDefault();
  const email = document.getElementById('user').value;
  const pw = document.getElementById('pw').value;
  if(email.includes('@') && pw.length>=6){
    alert('Login successful (demo). Redirecting to dashboard...');
    location.hash = '#home';
  } else {
    alert('Invalid credentials (demo): use a valid email and 6+ char password.');
  }
}
