const taskList = document.getElementById('task-list');
const createTask = document.getElementById('create-task');
const inputText = document.getElementById('input-text')
const taskComplate = document.getElementById('task-complate');


createTask.addEventListener('click',()=>{
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

    const delButton = document.createElement('div');
    delButton.innerText = `삭제`;
    delButton.addEventListener('click', () => {
        task.remove();
    })
    
    task.appendChild(chkInput);
    task.appendChild(pInput);
    task.appendChild(delButton);

    taskList.appendChild(task);

    inputText.value = ''
})


