// stars
var g=document.getElementById('stars'),h='';for(var i=0;i<70;i++){h+='<circle class="star" cx="'+(Math.random()*1200)+'" cy="'+(Math.random()*330)+'" r="'+(Math.random()*1.6+.4)+'" style="animation-delay:'+(Math.random()*3)+'s"/>'}g.innerHTML=h;
// parallax
var L=document.querySelectorAll('.layer');
addEventListener('mousemove',function(e){var x=(e.clientX/innerWidth-.5);L.forEach(function(l){l.style.transform='translateX('+(-x*l.dataset.s)+'px)'})});
// facts
var F=[["محطة الحجاز","ما زالت قاطرات قديمة محفوظة فيها كشاهد على خط سكة حديد الحجاز."],["ارتفاع معان","المدينة على ارتفاع يزيد عن 1,000 م، فصيفها معتدل وشتاؤها بارد وقد تتساقط فيه الثلوج."],["الفوسفات","يُستخرج في منطقة الشيدية جنوب المحافظة وهو من أهم صادرات الأردن."],["الطاقة الشمسية","شمس المنطقة القوية جعلتها مناسبة لمشاريع الطاقة المتجددة في منطقة معان التنموية."],["جامعة الحسين بن طلال","تأسست عام 1999 في معان وتخدم طلبة الجنوب."]];
var fe=document.getElementById('facts');F.forEach(function(f){var d=document.createElement('div');d.className='fact';d.tabIndex=0;d.innerHTML='<h3>'+f[0]+'</h3><p>اضغط لتعرف</p>';var o=0;function t(){o=!o;d.querySelector('p').textContent=o?f[1]:'اضغط لتعرف'}d.onclick=t;d.onkeydown=function(e){if(e.key=='Enter')t()};fe.appendChild(d)});
// reveal + counters
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;if(el.dataset.n){var n=+el.dataset.n,s=performance.now();(function f(t){var p=Math.min((t-s)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)}else el.classList.add('in');io.unobserve(el)})},{threshold:.4});
document.querySelectorAll('[data-n],.tl div').forEach(function(el){io.observe(el)});
var du=document.getElementById('dust'),dh='';for(var i=0;i<26;i++){dh+='<span style="left:'+(Math.random()*100)+'%;animation-duration:'+(8+Math.random()*10)+'s;animation-delay:'+(Math.random()*8)+'s"></span>'}du.innerHTML=dh;
addEventListener('scroll',function(){document.getElementById('pb').style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+'%'});
var lt=0;if(!matchMedia('(prefers-reduced-motion:reduce)').matches)addEventListener('pointermove',function(e){var n=Date.now();if(n-lt<40)return;lt=n;var i=document.createElement('i');i.className='sp';i.style.left=e.clientX+'px';i.style.top=e.clientY+'px';document.body.appendChild(i);setTimeout(function(){i.remove()},700)});
document.querySelectorAll('.dish').forEach(function(d){d.addEventListener('pointermove',function(e){var r=d.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;d.style.transform='perspective(600px) rotateY('+x*14+'deg) rotateX('+(-y*14)+'deg) translateY(-6px)'});d.addEventListener('pointerleave',function(){d.style.transform=''})});