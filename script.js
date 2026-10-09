var MODS = [
    {
        id: 'warna', tag: 'Seni Rupa', t: 'Warna & Garis', e: '🎨', c: '#ff7a59', intro: 'Warna membuat gambar jadi cantik! Ayo kenali warna dan garis.',
        items: [
            { e: '🔴🟡🔵', n: 'Warna Pokok', d: 'Merah, kuning, dan biru adalah warna pokok.' },
            { e: '〰️', n: 'Garis Lengkung', d: 'Garis yang melengkung seperti ombak.' },
            { e: '➖', n: 'Garis Lurus', d: 'Garis yang lurus, bisa mendatar atau tegak.' },
            { e: '⚡', n: 'Garis Zigzag', d: 'Garis patah-patah seperti petir.' }],
        widget: 'mix',
        quiz: [
            { q: 'Mana yang termasuk warna pokok?', o: ['Merah', 'Hijau', 'Oranye'], a: 0 },
            { q: 'Merah dicampur kuning menjadi warna...', o: ['Ungu', 'Oranye', 'Hijau'], a: 1 },
            { q: 'Kuning dicampur biru menjadi warna...', o: ['Hijau', 'Merah', 'Cokelat'], a: 0 },
            { q: 'Garis yang patah-patah disebut garis...', o: ['Lurus', 'Lengkung', 'Zigzag'], a: 2 }]
    },
    {
        id: 'musik', tag: 'Seni Musik', t: 'Musik Daerah', e: '🎵', c: '#3a86ff', intro: 'Bunyi bisa tinggi atau rendah. Alat musik daerah punya bunyi yang unik!',
        items: [
            { e: '🎋', n: 'Angklung', d: 'Dari Jawa Barat. Dibunyikan dengan cara digoyangkan.' },
            { e: '🥁', n: 'Tifa', d: 'Dari Papua dan Maluku. Dibunyikan dengan cara dipukul.' },
            { e: '🎶', n: 'Gamelan', d: 'Dari Jawa dan Bali. Dimainkan ramai-ramai.' },
            { e: '🪕', n: 'Sasando', d: 'Dari Nusa Tenggara Timur. Dibunyikan dengan cara dipetik.' }],
        widget: 'tone',
        quiz: [
            { q: 'Angklung dibunyikan dengan cara...', o: ['Digoyangkan', 'Ditiup', 'Digesek'], a: 0 },
            { q: 'Tifa berasal dari daerah...', o: ['Aceh', 'Papua', 'Bali'], a: 1 },
            { q: 'Sasando dibunyikan dengan cara...', o: ['Dipukul', 'Dipetik', 'Ditiup'], a: 1 },
            { q: 'Nada yang suaranya kecil dan melengking adalah nada...', o: ['Rendah', 'Tinggi', 'Diam'], a: 1 }]
    },
    {
        id: 'tari', tag: 'Seni Tari', t: 'Tari Daerah', e: '💃', c: '#8338ec', intro: 'Menari adalah bergerak mengikuti irama. Setiap daerah punya tarian khas!',
        items: [
            { e: '🔥', n: 'Tari Kecak', d: 'Dari Bali. Ditarikan banyak orang sambil bersuara "cak".' },
            { e: '👏', n: 'Tari Saman', d: 'Dari Aceh. Ditarikan duduk berbaris sambil bertepuk tangan.' },
            { e: '🍽️', n: 'Tari Piring', d: 'Dari Sumatera Barat. Penari membawa piring di tangan.' },
            { e: '🌸', n: 'Tari Jaipong', d: 'Dari Jawa Barat. Gerakannya lincah dan ceria.' }],
        quiz: [
            { q: 'Tari Piring berasal dari...', o: ['Sumatera Barat', 'Papua', 'Bali'], a: 0 },
            { q: 'Tari Saman berasal dari...', o: ['Bali', 'Jawa Barat', 'Aceh'], a: 2 },
            { q: 'Penari membawa piring di tangan pada tari...', o: ['Kecak', 'Piring', 'Saman'], a: 1 },
            { q: 'Tari Kecak berasal dari...', o: ['Bali', 'Aceh', 'Maluku'], a: 0 }]
    },
    {
        id: 'rumah', tag: 'Budaya', t: 'Rumah Adat', e: '🏠', c: '#06a77d', intro: 'Rumah adat adalah rumah khas suatu daerah. Bentuknya bermacam-macam!',
        items: [
            { e: '🛖', n: 'Honai', d: 'Rumah adat Papua. Bentuknya bulat dengan atap jerami.' },
            { e: '🏯', n: 'Joglo', d: 'Rumah adat Jawa Tengah. Atapnya tinggi di tengah.' },
            { e: '🐂', n: 'Rumah Gadang', d: 'Rumah adat Sumatera Barat. Atapnya melengkung seperti tanduk kerbau.' },
            { e: '🛶', n: 'Tongkonan', d: 'Rumah adat Toraja, Sulawesi Selatan. Atapnya seperti perahu.' }],
        quiz: [
            { q: 'Honai adalah rumah adat dari...', o: ['Papua', 'Bali', 'Aceh'], a: 0 },
            { q: 'Rumah Gadang berasal dari...', o: ['Papua', 'Sumatera Barat', 'Jawa Tengah'], a: 1 },
            { q: 'Atap rumah yang seperti perahu adalah...', o: ['Honai', 'Joglo', 'Tongkonan'], a: 2 },
            { q: 'Rumah adat Jawa Tengah bernama...', o: ['Joglo', 'Honai', 'Gadang'], a: 0 }]
    }
];
var best = {}, app = document.getElementById('app'), ac = null;
try { best = JSON.parse(localStorage.getItem('sbc') || '{}') } catch (e) { }
function sx(s) { return String(s == null ? '' : s).replace(/[<>]/g, '') }
function clean(m) { return { id: 'c' + String(m.id || Date.now()).replace(/^c|\W/g, ''), t: sx(m.t), e: sx(m.e || '📚'), c: /^#[0-9a-f]{6}$/i.test(m.c) ? m.c : '#ff7a59', tag: sx(m.tag || 'Budaya Lokal'), intro: sx(m.intro), items: (m.items || []).map(function (x) { return { e: sx(x.e), n: sx(x.n), d: sx(x.d) } }), quiz: (m.quiz || []).map(function (q) { return { q: sx(q.q), o: q.o.map(sx), a: +q.a | 0 } }), custom: 1 } }
function saveC() { try { localStorage.setItem('sbc_c', JSON.stringify(MODS.filter(function (m) { return m.custom }))) } catch (e) { } }
try { JSON.parse(localStorage.getItem('sbc_c') || '[]').forEach(function (m) { MODS.push(clean(m)) }) } catch (e) { }
function sayT(t) { try { speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(t); u.lang = 'id-ID'; u.rate = .85; speechSynthesis.speak(u) } catch (e) { } }
function say(i, j) { var x = MODS[i].items[j]; sayT(x.n + '. ' + x.d) }
function save() { try { localStorage.setItem('sbc', JSON.stringify(best)) } catch (e) { } }
function total() { var s = 0; MODS.forEach(function (m) { s += best[m.id] || 0 }); return s }
function max() { var s = 0; MODS.forEach(function (m) { s += m.quiz.length }); return s }
function home() {
    var h = '<h1>🌈 Seni Budaya Ceria</h1><p class="sub">Untuk semua kurikulum · materi dasar seni budaya SD</p><div class="stars">⭐ Bintangmu: ' + total() + ' / ' + max() + '</div><div class="grid">';
    MODS.forEach(function (m, i) { h += '<button class="mod" style="border-color:' + m.c + '" onclick="learn(' + i + ')"><span class="big">' + m.e + '</span>' + m.t + '<small><span class="tag">' + (m.tag || 'Budaya') + '</span></small><small>' + ('⭐'.repeat(best[m.id] || 0) || 'Belum main') + '</small></button>' });
    app.innerHTML = h + '</div><div style="text-align:center;margin-top:16px"><button class="btn alt" onclick="teacher()">👩‍🏫 Mode Guru: tambah materi daerahmu</button></div>'; window.scrollTo(0, 0)
}
function learn(i) {
    var m = MODS[i], h = '<div class="top"><button class="btn alt" onclick="home()">⬅ Beranda</button></div><h1>' + m.e + ' ' + m.t + '</h1><p class="sub">' + m.intro + '</p>';
    if (m.widget === 'mix') h += mixer();
    if (m.widget === 'tone') h += '<div class="card"><b>Coba dengarkan nada!</b><div class="tones"><button class="btn" style="background:#3a86ff" onclick="tone(220)">⬇ Rendah</button><button class="btn" style="background:#3a86ff" onclick="tone(440)">➡ Sedang</button><button class="btn" style="background:#3a86ff" onclick="tone(880)">⬆ Tinggi</button></div></div>';
    m.items.forEach(function (x, j) { h += '<div class="card item"><span class="e">' + x.e + '</span><div style="flex:1"><b>' + x.n + '</b><span>' + x.d + '</span></div><button class="spk" aria-label="Bacakan" onclick="say(' + i + ',' + j + ')">🔊</button></div>' });
    h += '<button class="btn" style="width:100%;background:' + m.c + '" onclick="quiz(' + i + ')">Main Kuis! 🎯</button>';
    app.innerHTML = h; window.scrollTo(0, 0)
}
var MC = { 'merah': '#e63946', 'kuning': '#ffd60a', 'biru': '#1d6fe0' }, MR = { 'merah+kuning': ['Oranye', '#ff8c1a'], 'biru+kuning': ['Hijau', '#2fb344'], 'biru+merah': ['Ungu', '#8338ec'] }, pick = [];
function mixer() {
    var h = '<div class="card"><b>Campur warna! Pilih 2 warna:</b><div class="mix">';
    for (var k in MC) h += '<span class="dot' + (pick.indexOf(k) > -1 ? ' sel' : '') + '" style="background:' + MC[k] + '" onclick="pk(\'' + k + '\')"></span>';
    var r = '', c = 'var(--bd)';
    if (pick.length == 2) { var key = pick.slice().sort().join('+'), v = MR[key]; if (v) { r = pick[0] + ' + ' + pick[1] + ' = <b>' + v[0] + '</b>'; c = v[1] } else r = 'Pilih 2 warna yang berbeda ya!' }
    return h + '<span>➜</span><span class="res" style="background:' + c + '"></span></div><div class="msg">' + r + '</div></div>'
}
function pk(k) { var i = pick.indexOf(k); if (i > -1) pick.splice(i, 1); else { if (pick.length == 2) pick = []; pick.push(k) } learn(0) }
function tone(f) { try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); var o = ac.createOscillator(), g = ac.createGain(); o.frequency.value = f; o.type = 'triangle'; o.connect(g); g.connect(ac.destination); g.gain.setValueAtTime(.3, ac.currentTime); g.gain.exponentialRampToValueAtTime(.001, ac.currentTime + 1); o.start(); o.stop(ac.currentTime + 1) } catch (e) { } }
var qi = 0, sc = 0, cm = 0, lock = false;
function quiz(i) { cm = i; qi = 0; sc = 0; showQ() }
function showQ() {
    var m = MODS[cm], q = m.quiz[qi]; lock = false;
    var h = '<div class="top"><button class="btn alt" onclick="learn(' + cm + ')">⬅ Belajar</button></div><div class="prog"><i style="width:' + qi / m.quiz.length * 100 + '%"></i></div><div class="card"><b>Soal ' + (qi + 1) + ' dari ' + m.quiz.length + '</b><p style="font-size:22px;margin:6px 0">' + q.q + ' <button class="spk" aria-label="Bacakan soal" onclick="sayT(MODS[' + cm + '].quiz[' + qi + '].q)">🔊</button></p>';
    q.o.forEach(function (o, j) { h += '<button class="opt" onclick="ans(this,' + j + ')">' + o + '</button>' });
    app.innerHTML = h + '<div class="msg" id="fb"></div></div>'; window.scrollTo(0, 0)
}
function ans(b, j) {
    if (lock) return; lock = true; var q = MODS[cm].quiz[qi], ok = j === q.a, bs = document.querySelectorAll('.opt');
    bs[q.a].classList.add('ok'); if (!ok) b.classList.add('no'); else sc++;
    document.getElementById('fb').innerHTML = (ok ? '🎉 Hebat, benar!' : '💪 Belum tepat, jawabannya: ' + q.o[q.a]) + '<br><button class="btn" style="margin-top:8px;background:' + MODS[cm].c + '" onclick="nx()">Lanjut ➡</button>'
}
function nx() { qi++; if (qi < MODS[cm].quiz.length) showQ(); else done() }
function done() {
    var m = MODS[cm]; if (sc > (best[m.id] || 0)) { best[m.id] = sc; save() }
    var msg = sc == m.quiz.length ? 'Luar biasa! Kamu juara! 🏆' : sc >= m.quiz.length / 2 ? 'Bagus sekali! Terus belajar ya!' : 'Ayo belajar lagi, kamu pasti bisa!';
    app.innerHTML = '<div class="card end"><div class="big">' + ('⭐'.repeat(sc) || '🌱') + '</div><h1>' + sc + ' / ' + m.quiz.length + ' benar</h1><p>' + msg + '</p><button class="btn" style="background:' + m.c + '" onclick="quiz(' + cm + ')">Main Lagi 🔄</button> <button class="btn alt" onclick="home()">Beranda 🏠</button></div>'
}
function teacher(msg) {
    var h = '<div class="top"><button class="btn alt" onclick="home()">⬅ Beranda</button></div><h1>👩‍🏫 Mode Guru</h1><p class="sub">Tambahkan materi seni budaya daerahmu, untuk kurikulum apa pun.</p><div class="card"><b>Materi baru</b>' +
        '<input id="f_t" placeholder="Judul, contoh: Tari Daerah Kami">' +
        '<input id="f_e" placeholder="Emoji, contoh: 🌾">' +
        '<input id="f_g" placeholder="Bidang: Seni Rupa / Seni Musik / Seni Tari / Budaya">' +
        '<input id="f_i" placeholder="Pengantar singkat">' +
        '<textarea id="f_l" placeholder="Isi materi, satu baris satu hal:&#10;🥁|Nama|Penjelasan singkat"></textarea>' +
        '<textarea id="f_q" placeholder="Soal kuis, satu baris satu soal. Tulis jawaban BENAR paling pertama:&#10;Tarian dari Aceh adalah?|Saman|Kecak|Piring"></textarea>' +
        '<button class="btn" onclick="addMod()">Simpan materi ✅</button><div class="msg">' + (msg || '') + '</div></div>';
    var cu = MODS.filter(function (m) { return m.custom });
    
    if (cu.length) { h += '<div class="card"><b>Materi buatanmu</b>'; MODS.forEach(function (m, i) { if (m.custom) h += '<div class="item" style="margin:8px 0"><span class="e">' + m.e + '</span><b style="flex:1">' + m.t + '</b><button class="btn alt" onclick="delMod(' + i + ')">Hapus</button></div>' }); h += '</div>' }
    h += '<div class="card"><b>Bagikan / pindahkan materi</b><p class="note">Salin kode di bawah, kirim lewat WhatsApp ke guru lain. Kode dari guru lain ditempel di kotak kedua.</p><textarea id="f_x" readonly onclick="this.select()">' + JSON.stringify(cu) + '</textarea><textarea id="f_m" placeholder="Tempel kode materi di sini"></textarea><button class="btn alt" onclick="impMod()">Masukkan materi</button></div>';
    app.innerHTML = h; window.scrollTo(0, 0)
}
function v(id) { return document.getElementById(id).value.trim() }
function addMod() {
    var items = [], quiz = [];
    v('f_l').split('\n').forEach(function (l) { var p = l.split('|').map(function (x) { return x.trim() }); if (p.length >= 2 && p[1]) items.push({ e: p[0], n: p[1], d: p[2] || '' }) });
    v('f_q').split('\n').forEach(function (l) { var p = l.split('|').map(function (x) { return x.trim() }).filter(Boolean); if (p.length >= 3) { var c = p[1], o = p.slice(1).sort(function () { return Math.random() - .5 }); quiz.push({ q: p[0], o: o, a: o.indexOf(c) }) } });
    if (!v('f_t') || !items.length || !quiz.length) return teacher('Isi judul, minimal 1 materi, dan 1 soal (dengan 2 pilihan atau lebih) ya.');
    MODS.push(clean({ id: Date.now(), t: v('f_t'), e: v('f_e'), tag: v('f_g'), intro: v('f_i'), items: items, quiz: quiz }));
    saveC(); teacher('Tersimpan! Materi muncul di Beranda. ✅')
}
function delMod(i) { MODS.splice(i, 1); saveC(); teacher('Materi dihapus.') }
function impMod() {
    try { var a = JSON.parse(v('f_m')), n = 0; a.forEach(function (m) { var c = clean(m); if (!MODS.some(function (x) { return x.id === c.id }) && c.t && c.items.length && c.quiz.length) { MODS.push(c); n++ } }); saveC(); teacher(n + ' materi dimasukkan.') } catch (e) { teacher('Kode tidak valid, coba salin lagi.') }
}
home();