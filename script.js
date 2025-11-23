
let state = JSON.parse(localStorage.getItem('phase_v8')||'{}');
state.tasks=state.tasks||[];
state.pcm=state.pcm||[];

function save(){localStorage.setItem('phase_v8',JSON.stringify(state));}

document.getElementById('saveReadiness').onclick=()=>{state.readiness=document.getElementById('readiness').value;save();alert('saved');};
document.getElementById('saveTargets').onclick=()=>{state.targets=document.getElementById('targets').value;save();alert('saved');};

function renderTasks(){let box=document.getElementById('tasksList');box.innerHTML='';state.tasks.forEach((t,i)=>{let r=document.createElement('div');r.textContent=t;let d=document.createElement('button');d.textContent='X';d.onclick=()=>{state.tasks.splice(i,1);save();renderTasks();};r.appendChild(d);box.appendChild(r);});}
document.getElementById('addTask').onclick=()=>{let t=document.getElementById('taskInput').value.trim();if(!t)return;state.tasks.push(t);save();renderTasks();};

function renderPCM(){let box=document.getElementById('pcmList');box.innerHTML='';state.pcm.forEach((c,i)=>{let r=document.createElement('div');r.textContent=c;let d=document.createElement('button');d.textContent='X';d.onclick=()=>{state.pcm.splice(i,1);save();renderPCM();};r.appendChild(d);box.appendChild(r);});}
document.getElementById('addChapter').onclick=()=>{let c=prompt('Chapter?');if(!c)return;state.pcm.push(c);save();renderPCM();};

renderTasks();
renderPCM();
