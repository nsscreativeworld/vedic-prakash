const body=document.body, toggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=>{const orange=body.dataset.theme!=='orange';body.dataset.theme=orange?'orange':'green';toggle.textContent=orange?'Theme A':'Theme B';});
const menuBtn=document.getElementById('menuBtn'), mobileNav=document.getElementById('mobileNav');
menuBtn.addEventListener('click',()=>mobileNav.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));

const testimonials=[
["I appreciate Sanjiv Sir’s knowledge and patient guidance. He explained life path and destiny numbers with such depth, helping me understand myself on a whole new level.","Subodh Kaushuk"],
["Sanjiv Tiwari sir’s approach is positive and empowering. He gave us skills and techniques to understand the world of numbers.","Sujoy Goswami"],
["I gained too much confidence with my prediction. I would definitely suggest others join his course.","Prashant Bhat"],
["Very fortunate to have had Sanjiv Sir as my guru for numerology. The course was excellent and helpful.","Mishika Chouhan"],
["He taught us how to see through the numbers to get to know others more profoundly.","Karunamoyi Majumdar"],
["I was amazed by how accurate my numerology reading was. It helped me make better career decisions.","Ritu Sharma"]
];
let idx=0;const q=document.getElementById('quote'),n=document.getElementById('name');
function render(){q.textContent='“'+testimonials[idx][0]+'”';n.textContent=testimonials[idx][1];}
document.getElementById('prev').onclick=()=>{idx=(idx-1+testimonials.length)%testimonials.length;render()};
document.getElementById('next').onclick=()=>{idx=(idx+1)%testimonials.length;render()};
render();
