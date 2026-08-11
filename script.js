const videos=[
 {id:'hq0Lu131KIw',title:'Edición para podcast',type:'Podcast · Pensilvania',start:829},
 {id:'ZjQ8k0ClVhY',title:'Animación corporativa',type:'Motion graphics · Evento'},
 {id:'gxFDcVJg9IU',title:'Video recopilatorio',type:'Highlight film · Nueva York'},
 {id:'zFrDpQq1sWc',title:'Animación para actividad',type:'Motion graphics · Campaña'},
 {id:'9QINnJq-V9I',title:'Video lírico',type:'Tipografía cinética · Nueva York'},
 {id:'njSlmjg2B0A',title:'Edición de podcast',type:'Edición multicámara · Contenido'},
 {id:'2g88n9dhrMs',title:'Edición de entrevistas',type:'Entrevista · Narrativa'},
 {id:'ERSYzdSt_eo',title:'Proyecto audiovisual',type:'Edición · Posproducción'}
];
document.querySelector('#videoGrid').innerHTML=videos.map((v,i)=>`<article class="video-card reveal"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${v.id}?rel=0${v.start?`&start=${v.start}`:''}" title="${v.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="video-meta"><span>0${i+1}</span><div><h3>${v.title}</h3><p>${v.type}</p></div><b>↗</b></div></article>`).join('');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
