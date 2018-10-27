window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
          
            /*element.addEventListener("click", () => {
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            });*/
            // Añadir un boton para marcar de finalizado
            let tarea =document.createElement("p");
            tarea.innerText=task;
            element.appendChild(tarea);
 

            let finalizado= document.createElement("input");
            finalizado.type ="button";
            finalizado.value="finalizado";
            finalizado.addEventListener("click", function(){
                let elemento_lista= this.parentNode.firstChild;
                elemento_lista.style.textDecoration= "line-through";
                
            });
           
            // Elmine de la lista
            let borrar = document.createElement("input");
            borrar.type ="button";
            borrar.value= "ELiminar";
            borrar.addEventListener("click", function(){
                let nodox= this.parentNode.parentNode;
                nodox.removeChild(this.parentNode);

            });
            element.appendChild(borrar);
            element.appendChild(finalizado);



            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}