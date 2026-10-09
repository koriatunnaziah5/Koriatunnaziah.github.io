var $=function(i){return document.getElementById(i)},app=$('app'),best={},C=[],M=[],R=0,ac=null,X=0,CL=['#e5484d','#3a86ff','#8338ec','#06a77d','#f08a00','#d6336c'];
var D=[
{id:'rupa',tag:'Seni Rupa',t:'Seni Rupa',e:'🎨',c:CL[0],w:'mix',intro:'Warna, garis, dan bentuk bikin gambar jadi hidup! Ketuk kartu untuk membalik.',
items:`🔴🟡🔵|Warna Pokok|Merah, kuning, dan biru. Warna ini tidak bisa dibuat dari campuran warna lain.
🟠🟢🟣|Warna Campuran|Merah + kuning = oranye. Kuning + biru = hijau. Biru + merah = ungu.
〰️|Garis|Ada garis lurus, garis lengkung seperti ombak, dan garis zigzag seperti petir.
🔷|Bentuk Dasar|Lingkaran, segitiga, dan persegi. Banyak benda di sekitar kita berbentuk seperti ini.
✂️|Kolase|Karya seni dari potongan kertas, kain, atau daun yang ditempel di kertas gambar.
🍃|Cetak Daun|Daun diberi cat lalu ditekan ke kertas sehingga bentuk daunnya tercetak.`,
quiz:`Mana yang termasuk warna pokok?|Merah|Hijau|Oranye
Merah dicampur kuning menjadi warna...|Oranye|Ungu|Hijau
Kuning dicampur biru menjadi warna...|Hijau|Merah|Cokelat
Biru dicampur merah menjadi warna...|Ungu|Oranye|Hijau
Garis yang patah-patah seperti petir disebut garis...|Zigzag|Lurus|Lengkung
Karya dari potongan kertas yang ditempel disebut...|Kolase|Cetak|Patung
Roda sepeda berbentuk...|Lingkaran|Segitiga|Persegi
Cetak daun dibuat dengan cara...|Menekan daun yang diberi cat ke kertas|Menggunting daun|Merebus daun`},
{id:'musik',tag:'Seni Musik',t:'Musik Daerah',e:'🎵',c:CL[1],w:'tone',intro:'Bunyi bisa tinggi atau rendah. Coba dengarkan nadanya, lalu kenali alat musik daerah!',
items:`🎼|Nada Tinggi dan Rendah|Nada tinggi suaranya kecil dan melengking. Nada rendah suaranya besar dan berat.
🎋|Angklung|Dari Jawa Barat, terbuat dari bambu. Dibunyikan dengan cara digoyangkan.
🥁|Tifa|Dari Papua dan Maluku. Dibunyikan dengan cara dipukul.
🎶|Gamelan|Dari Jawa dan Bali. Dimainkan bersama-sama oleh banyak orang.
🪕|Sasando|Dari Nusa Tenggara Timur. Dibunyikan dengan cara dipetik.
🪵|Kolintang|Dari Sulawesi Utara, terbuat dari bilah kayu yang dipukul.`,
quiz:`Angklung dibunyikan dengan cara...|Digoyangkan|Ditiup|Digesek
Tifa berasal dari...|Papua|Aceh|Bali
Sasando dibunyikan dengan cara...|Dipetik|Dipukul|Ditiup
Kolintang berasal dari...|Sulawesi Utara|Kalimantan|Sumatera Barat
Gamelan dimainkan...|Bersama-sama|Sendirian saja|Tidak dimainkan
Nada yang suaranya kecil dan melengking adalah nada...|Tinggi|Rendah|Diam
Angklung terbuat dari...|Bambu|Besi|Plastik
Sasando berasal dari...|Nusa Tenggara Timur|Papua|Jawa Barat`},
{id:'tari',tag:'Seni Tari',t:'Tari Daerah',e:'💃',c:CL[2],intro:'Menari artinya bergerak mengikuti irama. Tiap daerah punya tarian khas!',
items:`🙆|Gerak Tari|Menari memakai gerak tangan, kaki, dan kepala yang mengikuti irama musik.
🔥|Tari Kecak|Dari Bali. Ditarikan banyak orang yang duduk melingkar sambil bersuara "cak".
👏|Tari Saman|Dari Aceh. Penari duduk berbaris dan bertepuk tangan dengan kompak.
🍽️|Tari Piring|Dari Sumatera Barat. Penari membawa piring di tangan.
🌺|Tari Pendet|Dari Bali. Ditarikan untuk menyambut tamu sambil menabur bunga.
🦁|Reog Ponorogo|Dari Jawa Timur. Penari memakai topeng singa besar dengan hiasan bulu merak.`,
quiz:`Tari Saman berasal dari...|Aceh|Bali|Papua
Penari membawa piring di tangan pada tari...|Piring|Saman|Kecak
Tari Kecak berasal dari...|Bali|Aceh|Maluku
Tari Pendet ditarikan untuk...|Menyambut tamu|Berperang|Menanam padi
Reog berasal dari...|Jawa Timur|Sumatera Barat|Aceh
Menari harus mengikuti...|Irama musik|Suara hujan|Warna baju
Tari Saman ditarikan sambil...|Bertepuk tangan|Membawa piring|Memakai topeng
Tari Piring berasal dari...|Sumatera Barat|Bali|Jawa Timur`},
{id:'rumah',tag:'Budaya',t:'Rumah Adat',e:'🏠',c:CL[3],intro:'Rumah adat adalah rumah khas suatu daerah. Bentuknya bermacam-macam!',
items:`🌴|Rumah Adat|Rumah khas suatu daerah. Dibuat dari bahan alam seperti kayu, bambu, dan jerami.
🛖|Honai|Dari Papua. Bentuknya bulat dengan atap jerami.
🏯|Joglo|Dari Jawa Tengah. Atapnya tinggi di bagian tengah.
🐂|Rumah Gadang|Dari Sumatera Barat. Atapnya melengkung seperti tanduk kerbau.
🛶|Tongkonan|Dari Toraja, Sulawesi Selatan. Atapnya melengkung seperti perahu.
🏘️|Rumah Betang|Dari Kalimantan. Rumah panjang di atas tiang yang dihuni banyak keluarga.`,
quiz:`Honai berasal dari...|Papua|Bali|Aceh
Rumah Gadang berasal dari...|Sumatera Barat|Papua|Jawa Tengah
Atap rumah yang seperti perahu ada pada...|Tongkonan|Honai|Joglo
Rumah adat Jawa Tengah bernama...|Joglo|Honai|Betang
Rumah Betang berasal dari...|Kalimantan|Papua|Bali
Rumah Betang dihuni oleh...|Banyak keluarga|Satu orang|Hewan saja
Atap Rumah Gadang seperti...|Tanduk kerbau|Perahu layar|Payung
Rumah adat dibuat dari bahan...|Alam seperti kayu dan bambu|Plastik|Kaca`},
{id:'baju',tag:'Budaya',t:'Pakaian Adat',e:'👘',c:CL[4],intro:'Pakaian adat dipakai pada acara penting. Setiap daerah punya yang berbeda!',
items:`👘|Batik|Kain bergambar motif indah yang dibuat dengan lilin malam. Terkenal dari Jawa.
🧵|Ulos|Kain tenun dari Sumatera Utara, dipakai suku Batak.
✨|Songket|Kain tenun dari Sumatera dengan benang emas atau perak.
👚|Kebaya|Baju adat perempuan, banyak dipakai di Jawa dan daerah lain.
👗|Baju Bodo|Baju adat Sulawesi Selatan dari suku Bugis dan Makassar.
🎩|Blangkon|Penutup kepala laki-laki dari Jawa.`,
quiz:`Kain bermotif yang dibuat dengan lilin malam disebut...|Batik|Ulos|Songket
Ulos berasal dari...|Sumatera Utara|Papua|Bali
Songket ditenun dengan benang...|Emas atau perak|Tali rafia|Karet
Blangkon dipakai di...|Kepala|Kaki|Tangan
Baju Bodo berasal dari...|Sulawesi Selatan|Aceh|Papua
Baju adat perempuan Jawa adalah...|Kebaya|Blangkon|Ulos
Pakaian adat setiap daerah...|Berbeda-beda|Sama semua|Tidak ada`},
{id:'teater',tag:'Seni Teater',t:'Lagu & Teater',e:'🎭',c:CL[5],intro:'Nyanyian dan pertunjukan khas daerah bikin budaya kita meriah!',
items:`🎤|Lagu Daerah|Lagu khas suatu daerah, biasanya memakai bahasa daerah.
🍌|Ampar-Ampar Pisang|Lagu dari Kalimantan Selatan.
🏝️|Ayo Mama|Lagu dari Maluku.
🌄|Apuse|Lagu dari Papua.
🎭|Wayang Kulit|Pertunjukan boneka dari kulit hewan. Dalang memainkannya. Dari Jawa.
🪆|Ondel-Ondel|Boneka besar yang diarak, dari budaya Betawi di Jakarta.`,
quiz:`Ampar-Ampar Pisang berasal dari...|Kalimantan Selatan|Maluku|Papua
Ayo Mama berasal dari...|Maluku|Aceh|Bali
Apuse berasal dari...|Papua|Jawa Barat|Sumatera Utara
Orang yang memainkan wayang kulit disebut...|Dalang|Penari|Penyanyi
Wayang kulit dibuat dari...|Kulit hewan|Kain|Kertas
Ondel-ondel berasal dari budaya...|Betawi|Batak|Dayak
Lagu khas suatu daerah disebut lagu...|Daerah|Asing|Kota`}];
try{best=JSON.parse(localStorage.getItem('sbc3')||'{}')}catch(e){}
try{C=JSON.parse(localStorage.getItem('sbc3_c')||'[]')}catch(e){}
function sx(s){return String(s==null?'':s).replace(/[<>]/g,'')}
function cl(o){return{id:'c'+String(o.id||Date.now()).replace(/^c|\W/g,''),t:sx(o.t),e:sx(o.e||'📚'),tag:sx(o.tag||'Budaya Lokal'),intro:sx(o.intro),items:sx(o.items),quiz:sx(o.quiz)}}
function mk(o,k){var m=Object.assign({},o);m.c=o.c||CL[(k+D.length)%CL.length];
 m.items=o.items.trim().split('\n').map(function(l){var p=l.split('|');return{e:p[0],n:(p[1]||'').trim(),d:(p[2]||'').trim()}}).filter(function(x){return x.n});
 m.quiz=o.quiz.trim().split('\n').map(function(l){var p=l.split('|').map(function(x){return x.trim()}).filter(Boolean);return{q:p[0],o:p.slice(1)}}).filter(function(q){return q.o.length>1});return m}
function rebuild(){M=D.map(mk).concat(C.map(function(o,k){return mk(o,k)}))}
function saveC(){try{localStorage.setItem('sbc3_c',JSON.stringify(C))}catch(e){}}
function sayT(t){try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang='id-ID';u.rate=.85;speechSynthesis.speak(u)}catch(e){}}
function say(i,j){var x=M[i].items[j];sayT(x.n+'. '+x.d)}
function total(){var s=0;M.forEach(function(m){s+=best[m.id]||0});return s}
function max(){var s=0;M.forEach(function(m){s+=m.quiz.length});return s}
function zr(){return Math.max(150,Math.round(80/Math.tan(Math.PI/M.length)+14))}
function home(){
 if(!cur)return login();tOk=0;
 var n=M.length,A=360/n,z=zr();
 var h='<div class="top"><span class="chip">👤 '+cur+'</span><button class="b3 alt" onclick="login()">🔄 Ganti siswa</button></div><h1>🌈 Seni Budaya 3D</h1><p class="sub">Untuk semua kurikulum · geser atau ketuk kartu</p><div class="stars">⭐ Bintangmu: '+total()+' / '+max()+'</div><div class="stage" ontouchstart="X=event.touches[0].clientX" ontouchend="sw(event.changedTouches[0].clientX-X)"><div class="ring" id="ring" style="transform:translateZ(-'+z+'px) rotateY('+R+'deg)">';
 M.forEach(function(m,i){h+='<div class="c3" style="background:linear-gradient(145deg,'+m.c+','+m.c+'cc);transform:rotateY('+i*A+'deg) translateZ('+z+'px)" onclick="pickC('+i+')"><span class="big">'+m.e+'</span><b>'+m.t+'</b><small>'+m.tag+'</small><span>'+('⭐'.repeat(best[m.id]||0).slice(0,24)||'Belum main')+'</span></div>'});
 app.innerHTML=h+'</div></div><div class="nav"><button class="b3" onclick="spin(-1)">◀</button><button class="b3" onclick="spin(1)">▶</button></div><div style="text-align:center"><button class="b3 alt" onclick="teacher()">👩‍🏫 Mode Guru: tambah materi daerahmu</button></div>';scrollTo(0,0)}
function ring(){var r=$('ring');if(r)r.style.transform='translateZ(-'+zr()+'px) rotateY('+R+'deg)'}
function spin(d){R-=d*360/M.length;ring()}
function sw(dx){if(Math.abs(dx)>40)spin(dx<0?1:-1)}
function front(){var n=M.length;return((Math.round(-R/(360/n))%n)+n)%n}
function pickC(i){if(i===front())return learn(i);var A=360/M.length;R=-i*A+360*Math.round((R+i*A)/360);ring()}
var MC={merah:'#e63946',kuning:'#ffd60a',biru:'#1d6fe0'},MR={'biru+kuning':['Hijau','#2fb344'],'biru+merah':['Ungu','#8338ec'],'kuning+merah':['Oranye','#ff8c1a']},pick=[];
function mixer(){
 var h='<div class="card"><b>Campur warna! Pilih 2 warna:</b><div class="mix">';
 for(var k in MC)h+='<span class="dot'+(pick.indexOf(k)>-1?' sel':'')+'" style="background-color:'+MC[k]+'" onclick="pk(\''+k+'\')"></span>';
 var r='',c='var(--bd)';
 if(pick.length==2){var v=MR[pick.slice().sort().join('+')];if(v){r=pick[0]+' + '+pick[1]+' = <b>'+v[0]+'</b>';c=v[1]}}
 return h+'<span>➜</span><span class="dot res" style="background-color:'+c+'"></span></div><div class="msg">'+r+'</div></div>'}
function pk(k){var i=pick.indexOf(k);if(i>-1)pick.splice(i,1);else{if(pick.length==2)pick=[];pick.push(k)}learn(0)}
function tone(f){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();var o=ac.createOscillator(),g=ac.createGain();o.frequency.value=f;o.type='triangle';o.connect(g);g.connect(ac.destination);g.gain.setValueAtTime(.3,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+1);o.start();o.stop(ac.currentTime+1)}catch(e){}}
function learn(i){
 var m=M[i];app.style.setProperty('--c',m.c);
 var h=bar("home()","Kembali")+'<h1>'+m.e+' '+m.t+'</h1><p class="sub">'+m.intro+'</p><p class="sub" id="rp">📖 Sudah dibaca: '+rd(st(),m)+' / '+m.items.length+' kartu</p>';
 if(m.w==='mix')h+=mixer();
 if(m.w==='tone')h+='<div class="card"><b>Coba dengarkan nada!</b><div class="tones"><button class="b3" onclick="tone(220)">⬇ Rendah</button><button class="b3" onclick="tone(440)">➡ Sedang</button><button class="b3" onclick="tone(880)">⬆ Tinggi</button></div></div>';
 h+='<div class="grid">';
 m.items.forEach(function(x,j){h+='<div class="fc" onclick="flip(this,'+i+','+j+')"><div class="in"><div class="fr" style="background:linear-gradient(145deg,'+m.c+','+m.c+'cc)"><span>'+x.e+'</span><b>'+x.n+'</b><small>Ketuk untuk membalik</small></div><div class="bk"><p>'+x.d+'</p><button class="spk" aria-label="Bacakan" onclick="event.stopPropagation();say('+i+','+j+')">🔊</button></div></div></div>'});
 app.innerHTML=h+'</div><button class="b3" style="width:100%" onclick="quiz('+i+')">Main Kuis! 🎯 ('+m.quiz.length+' soal)</button>';scrollTo(0,0)}
var Q,qi,sc,cm,lock;
function rnd(){return Math.random()-.5}
function quiz(i){cm=i;qi=0;sc=0;app.style.setProperty('--c',M[i].c);Q=M[i].quiz.map(function(q){var o=q.o.slice().sort(rnd);return{q:q.q,o:o,a:o.indexOf(q.o[0])}}).sort(rnd);showQ()}
function showQ(){
 var q=Q[qi];lock=0;
 var h=bar('learn('+cm+')','Belajar')+'<div class="prog"><i style="width:'+qi/Q.length*100+'%"></i></div><div class="card"><b>Soal '+(qi+1)+' / '+Q.length+'</b><p class="q">'+q.q+' <button class="spk" aria-label="Bacakan soal" onclick="sayT(Q['+qi+'].q)">🔊</button></p>';
 q.o.forEach(function(o,j){h+='<button class="opt" onclick="ans(this,'+j+')">'+o+'</button>'});
 app.innerHTML=h+'<div class="msg" id="fb"></div></div>';scrollTo(0,0)}
function ans(b,j){
 if(lock)return;lock=1;var q=Q[qi],ok=j===q.a;
 document.querySelectorAll('.opt')[q.a].classList.add('ok');if(ok)sc++;else b.classList.add('no');
 $('fb').innerHTML=(ok?'🎉 Hebat, benar!':'💪 Belum tepat. Jawabannya: '+q.o[q.a])+'<br><button class="b3" style="margin-top:10px" onclick="nx()">Lanjut ➡</button>'}
function nx(){qi++;if(qi<Q.length)showQ();else done()}
function done(){
 var m=M[cm];var s=st(),o=s.q[m.id]||{b:0,n:0};o.n++;o.l=sc;o.m=Q.length;o.d=Date.now();if(sc>o.b)o.b=sc;s.q[m.id]=o;best[m.id]=o.b;s.t=Date.now();saveS();
 var p=sc/Q.length,msg=p==1?'Luar biasa! Kamu juara! 🏆':p>=.5?'Bagus sekali! Terus belajar ya!':'Ayo belajar lagi, kamu pasti bisa!';
 app.innerHTML='<div class="card end"><div class="spin">'+(p>=.5?'⭐':'🌱')+'</div><h2>'+sc+' / '+Q.length+' benar</h2><p>'+msg+'</p><button class="b3" onclick="quiz('+cm+')">Main Lagi 🔄</button> <button class="b3 alt" onclick="home()">Beranda 🏠</button></div>'}
var db={},cur='',tOk=0,dm=0;
try{db=JSON.parse(localStorage.getItem('sbc3_s')||'{}')}catch(e){}
function saveS(){try{localStorage.setItem('sbc3_s',JSON.stringify(db))}catch(e){}}
function st(){return db[cur]}
function rd(s,m){return((s.r||{})[m.id]||[]).filter(function(j){return j<m.items.length}).length}
function bar(f,l){return '<div class="top"><button class="b3 alt" onclick="'+f+'">⬅ '+l+'</button><button class="b3 alt" onclick="home()">🏠 Menu</button>'+(cur?'<span class="chip">👤 '+cur+'</span>':'')+'</div>'}
function login(){
 cur='';tOk=0;best={};if(!Object.keys(db).length)dm=0;
 var ks=Object.keys(db),h='<h1>👋 Halo!</h1><p class="sub">Siapa namamu?</p><div class="card"><input id="nm" placeholder="Tulis namamu di sini" maxlength="30"><button class="b3" style="width:100%" onclick="start()">Mulai Belajar 🚀</button><div class="msg" id="lm"></div></div>';
 if(ks.length){h+='<div class="card"><b>'+(dm?'Ketuk nama yang mau dihapus:':'Atau ketuk namamu:')+'</b>'+(dm&&pin()?'<input id="dp" type="password" inputmode="numeric" placeholder="PIN guru (wajib untuk menghapus)">':'')+'<div class="names">';ks.forEach(function(n,i){h+=dm?'<button class="b3" style="--c:#e5484d" onclick="delN('+i+',this)">🗑️ '+n+'</button>':'<button class="b3 alt" onclick="pickS('+i+')">'+n+'</button>'});h+='</div><div style="margin-top:14px"><button class="b3 alt" onclick="tg()">'+(dm?'✅ Selesai':'✏️ Salah nama? Hapus nama')+'</button></div></div>'}
 app.innerHTML=h+'<div style="text-align:center"><button class="b3 alt" onclick="teacher()">👩‍🏫 Mode Guru</button></div>';scrollTo(0,0)}
function enter(n){dm=0;cur=n;db[n]=db[n]||{r:{},q:{}};db[n].t=Date.now();best={};for(var k in db[n].q)best[k]=db[n].q[k].b;saveS();home()}
function start(){var n=sx($('nm').value).replace(/\s+/g,' ').trim();if(!n)return $('lm').textContent='Tulis namamu dulu ya 🙂';enter(n)}
function tg(){dm=!dm;login()}
function delN(i,b){
 if(pin()&&v('dp')!==pin())return $('lm').textContent='PIN salah. Minta bantuan guru ya.';
 if(!b.dataset.s){b.dataset.s=1;b.textContent='Yakin dihapus? Ketuk lagi';return}
 delete db[Object.keys(db)[i]];saveS();login()}
function pickS(i){enter(Object.keys(db)[i])}
function flip(el,i,j){
 el.classList.toggle('f');var s=st(),id=M[i].id,a=(s.r[id]=s.r[id]||[]);if(a.indexOf(j)<0)a.push(j);s.t=Date.now();saveS();
 var r=$('rp');if(r)r.textContent='📖 Sudah dibaca: '+rd(s,M[i])+' / '+M[i].items.length+' kartu'}
function v(id){return $(id).value.trim()}
function pin(){try{return localStorage.getItem('sbc3_pin')||''}catch(e){return ''}}
function teacher(){
 if(pin()&&!tOk){app.innerHTML=bar('login()','Keluar')+'<h2>🔒 Mode Guru</h2><div class="card"><input id="pn" type="password" inputmode="numeric" placeholder="Masukkan PIN guru"><button class="b3" style="width:100%" onclick="chk()">Masuk</button><div class="msg" id="pm"></div></div>';return}
 tOk=1;
 app.innerHTML=bar('home()','Kembali')+'<h2>👩‍🏫 Mode Guru</h2><p class="sub">Pilih yang ingin dilakukan:</p>'+(pin()?'<p class="stars">🔒 Mode Guru terkunci PIN</p>':'<div class="card" style="border-color:#e5484d"><b>⚠️ Mode Guru belum dikunci!</b><p class="note">Siswa bisa membuka halaman ini. Atur PIN agar aman.</p><button class="b3" style="--c:#e5484d" onclick="tPin()">🔒 Atur PIN sekarang</button></div>')+'<div class="hub"><button class="b3" onclick="tAbs()">📋<br>Absensi &amp; Rekap Siswa</button><button class="b3" style="--c:#3a86ff" onclick="tAdd()">➕<br>Tambah Materi Daerah</button><button class="b3" style="--c:#06a77d" onclick="tShare()">📤<br>Bagikan / Pindah Materi</button><button class="b3" style="--c:#8338ec" onclick="tPin()">🔒<br>Atur PIN Guru</button></div>';scrollTo(0,0)}
function chk(){if(v('pn')===pin()){tOk=1;teacher()}else $('pm').textContent='PIN salah, coba lagi.'}
function tPin(){app.innerHTML=bar('teacher()','Menu Guru')+'<h2>🔒 PIN Guru</h2><div class="card"><b>Status: '+(pin()?'🔒 PIN aktif':'🔓 belum ada PIN')+'</b><p class="note">PIN mencegah siswa membuka Mode Guru dan menghapus nama teman. Isi 4 sampai 8 angka, contoh: 2468. Catat PIN-nya! Kosongkan kotak lalu simpan untuk menghapus PIN.</p><input id="pn" type="password" inputmode="numeric" maxlength="8" placeholder="Ketik PIN baru"><button class="b3" style="width:100%" onclick="setPin()">Simpan PIN</button><div class="msg" id="pm"></div></div>'}
function setPin(){var x=v('pn').replace(/\D/g,'');try{localStorage.setItem('sbc3_pin',x)}catch(e){}$('pm').textContent=x?'PIN tersimpan ✅':'PIN dihapus.'}
function tAbs(){
 var ks=Object.keys(db),h=bar('teacher()','Menu Guru')+'<h2>📋 Absensi &amp; Rekap</h2><p class="note">📖 = kartu materi yang sudah dibuka. 🎯 = nilai kuis terbaik. ✅ hijau = sudah baca semua kartu dan sudah kuis. Data ada di perangkat ini.</p>';
 if(!ks.length)return app.innerHTML=h+'<div class="card">Belum ada siswa yang masuk.</div>';
 h+='<div style="overflow-x:auto"><table><tr><th>Nama</th>';M.forEach(function(m){h+='<th>'+m.e+'</th>'});h+='<th>Tuntas</th><th></th></tr>';
 var txt='REKAP SENI BUDAYA\n';
 ks.forEach(function(n,i){var s=db[n],dn=0,line=n+': ';h+='<tr><td><b>'+n+'</b></td>';
  M.forEach(function(m){var r=rd(s,m),q=s.q[m.id],f=r>=m.items.length&&q;if(f)dn++;
   h+='<td class="'+(f?'g':'')+'">📖'+(r>=m.items.length?'✅':r+'/'+m.items.length)+'<br>🎯'+(q?q.b+'/'+q.m:'–')+'</td>';
   line+=m.t+' (baca '+r+'/'+m.items.length+', kuis '+(q?q.b+'/'+q.m:'belum')+'); '});
  h+='<td><b>'+dn+'/'+M.length+'</b></td><td><button class="b3 alt" onclick="delS('+i+',this)">Hapus</button></td></tr>';txt+=line+'\n'});
 app.innerHTML=h+'</table></div><div class="card"><b>Salin rekap untuk dikirim ke WhatsApp</b><textarea readonly onclick="this.select()">'+txt+'</textarea></div>';scrollTo(0,0)}
function delS(i,b){if(!b.dataset.s){b.dataset.s=1;b.textContent='Yakin?';return}delete db[Object.keys(db)[i]];saveS();tAbs()}
function tAdd(msg){
 var h=bar('teacher()','Menu Guru')+'<h2>➕ Tambah Materi</h2><div class="card" style="border-color:#3a86ff"><b>📖 Cara mudah menambah materi</b><ol class="note" style="padding-left:20px;margin:6px 0"><li>Tulis nama materi (contoh: Permainan Tradisional) dan satu emoji.</li><li>Buat kartu. Satu kartu = satu hal yang dipelajari (contoh: Congklak).</li><li>Buat soal. Tulis pertanyaan, lalu jawaban yang BENAR di kotak kedua, lalu 1 atau 2 jawaban salah.</li><li>Tekan Simpan. Materi langsung muncul di menu siswa.</li></ol><button class="b3" style="--c:#3a86ff" onclick="fillEx()">✨ Isi contoh otomatis</button><p class="note">Tombol ini mengisi formulir dengan contoh. Boleh diganti, atau langsung tekan Simpan untuk mencoba.</p></div><div class="card"><b>1. Nama materi</b><input id="f_t" placeholder="Contoh: Tari Daerah Kami"><input id="f_e" placeholder="Emoji gambar, contoh: 🌾"><input id="f_g" placeholder="Bidang (Seni Rupa, Seni Musik, Seni Tari, Budaya)"><input id="f_i" placeholder="Kalimat pengantar singkat"></div><div class="card"><b>2. Kartu materi</b><p class="note">Setiap kartu: emoji, nama, dan penjelasan.</p><div id="rl"></div><button class="b3 alt" onclick="rowL()">+ Tambah kartu</button></div><div class="card"><b>3. Soal kuis</b><p class="note">Tulis jawaban yang BENAR di kotak kedua. Urutan pilihan diacak otomatis.</p><div id="rq"></div><button class="b3 alt" onclick="rowQ()">+ Tambah soal</button></div><button class="b3" style="width:100%" onclick="addMod()">✅ Simpan Materi</button><div class="msg" id="am">'+(msg||'')+'</div>';
 if(C.length){h+='<div class="card"><b>Materi buatanmu</b>';C.forEach(function(o,k){h+='<div class="top"><span style="font-size:30px">'+o.e+'</span><b style="flex:1">'+o.t+'</b><button class="b3 alt" onclick="delMod('+k+')">Hapus</button></div>'});h+='</div>'}
 app.innerHTML=h;for(var k=0;k<3;k++){rowL();rowQ()}scrollTo(0,0)}
function fl(id,A,f){while($(id).children.length<A.length)f();A.forEach(function(r,i){r.forEach(function(x,j){$(id).children[i].children[j].value=x})})}
function fillEx(){
 var F={f_t:'Permainan Tradisional',f_e:'🪁',f_g:'Budaya',f_i:'Ayo kenali permainan tradisional Indonesia!'};for(var k in F)$(k).value=F[k];
 fl('rl',[['🪁','Layang-Layang','Dibuat dari kertas dan bambu, diterbangkan oleh angin.'],['🐚','Congklak','Dimainkan dua orang dengan biji-bijian di papan berlubang.'],['🟦','Engklek','Melompat dengan satu kaki di kotak yang digambar di tanah.'],['🏃','Gobak Sodor','Dimainkan berkelompok. Satu kelompok menjaga, kelompok lain berusaha lolos.']],rowL);
 fl('rq',[['Permainan melompat satu kaki di kotak tanah adalah...','Engklek','Congklak','Layang-layang'],['Layang-layang diterbangkan oleh...','Angin','Api','Air'],['Congklak dimainkan dengan...','Biji-bijian','Bola','Tali']],rowQ);
 $('am').textContent='Contoh sudah terisi. Tekan Simpan Materi di bawah untuk mencoba.'}
function rowL(){$('rl').insertAdjacentHTML('beforeend','<div class="rw"><input placeholder="Emoji"><input placeholder="Nama"><input placeholder="Penjelasan"></div>')}
function rowQ(){$('rq').insertAdjacentHTML('beforeend','<div class="rw"><input placeholder="Pertanyaan"><input placeholder="Jawaban BENAR"><input placeholder="Jawaban salah 1"><input placeholder="Jawaban salah 2"></div>')}
function rows(id){return Array.prototype.map.call($(id).children,function(r){return Array.prototype.map.call(r.children,function(i){return i.value.replace(/[|\n]/g,' ').trim()})})}
function ok(o){var m=mk(o,0);return m.t&&m.items.length&&m.quiz.length}
function addMod(){
 var L=rows('rl').filter(function(r){return r[1]}).map(function(r){return(r[0]||'📌')+'|'+r[1]+'|'+r[2]}).join('\n'),
 Z=rows('rq').filter(function(r){return r[0]&&r[1]&&r[2]}).map(function(r){return r.filter(Boolean).join('|')}).join('\n'),
 o=cl({id:Date.now(),t:v('f_t'),e:v('f_e'),tag:v('f_g'),intro:v('f_i'),items:L,quiz:Z});
 if(!o.t||!L||!Z)return $('am').textContent='Isi nama materi, minimal 1 kartu, dan 1 soal (jawaban benar + 1 salah) ya.';
 C.push(o);saveC();rebuild();tAdd('Tersimpan! Materi sudah muncul di menu siswa. ✅')}
function delMod(k){C.splice(k,1);saveC();rebuild();R=0;tAdd('Materi dihapus.')}
function tShare(msg){app.innerHTML=bar('teacher()','Menu Guru')+'<h2>📤 Bagikan Materi</h2><div class="card"><b>Kirim ke guru lain</b><p class="note">Salin kode di bawah, lalu kirim lewat WhatsApp.</p><textarea readonly onclick="this.select()">'+JSON.stringify(C)+'</textarea></div><div class="card"><b>Terima dari guru lain</b><p class="note">Tempel kode dari guru lain di sini.</p><textarea id="f_m" placeholder="Tempel kode di sini"></textarea><button class="b3" onclick="impMod()">Masukkan materi</button><div class="msg">'+(msg||'')+'</div></div>'}
function impMod(){
 try{var n=0;JSON.parse(v('f_m')).forEach(function(o){var c=cl(o);if(ok(c)&&!C.some(function(x){return x.id===c.id})){C.push(c);n++}});saveC();rebuild();tShare(n+' materi dimasukkan.')}catch(e){tShare('Kode tidak valid, coba salin lagi.')}}
rebuild();login();
