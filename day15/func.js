const taskList = document.getElementById('task-list');
const createTask = document.getElementById('create-task');
const inputText = document.getElementById('input-text')
const taskComplate = document.getElementById('task-complate');

window.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter' && document.activeElement === inputText) {
        makeTask();
    }
})

createTask.addEventListener('click',makeTask)


function makeTask() {
    const task = document.createElement('div');
    task.classList.add('task');

    const chkInput = document.createElement('input');
    chkInput.setAttribute('type','checkbox');
    chkInput.addEventListener('change', (e) => {
        console.log(e);

        if(chkInput.checked){            
            taskComplate.insertBefore(task,taskComplate.firstElementChild);
            taskList.removeChild(task);
        }else {
            taskComplate.removeChild(task);
            taskList.appendChild(task);

        }
    })

    const pInput = document.createElement('p');
    pInput.innerText = inputText.value;


    const timeInput = document.createElement('span');
    const today = new Date();
    timeInput.classList.add('make-time')
    timeInput.innerText = `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`


    const delButton = document.createElement('div');
    delButton.innerText = `삭제`;
    delButton.addEventListener('click', () => {
        task.remove();
    })
    
    task.appendChild(chkInput);
    task.appendChild(pInput);
    task.appendChild(timeInput);
    task.appendChild(delButton);

    taskList.appendChild(task);

    inputText.value = ''
}