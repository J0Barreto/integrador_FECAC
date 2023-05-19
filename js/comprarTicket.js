const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('email');
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const total = document.getElementById('total');
const resumen = document.getElementById('resumen');
const borrar = document.getElementById('borrar');
const valorEntrada = 200
const estudiante = 0.8
const trainee = 0.5
const junior = 0.15

resumen.addEventListener('click', precioFinal);
borrar.addEventListener('click', borrarCampos);

function precioFinal(){
   if (nombre.value ==="" || apellido.value ==="" || ElementInternals.value === "" || cantidad.value === ""){
      alert('Debe completar todos los campos');
      return
   }

   if (categoria.value === 'estudiante') {
      total.innerText = (parseFloat(valorEntrada)- parseFloat(valorEntrada) * parseFloat(estudiante))*cantidad.value;
   } else if (categoria.value === 'trainee') {
      total.innerText = (parseFloat(valorEntrada)- parseFloat(valorEntrada) * parseFloat(trainee))*cantidad.value;
   } else if (categoria.value === 'junior') {
      total.innerText = (parseFloat(valorEntrada)- parseFloat(valorEntrada) * parseFloat(junior))*cantidad.value;
   }
}

function borrarCampos() {
   nombre.value = "";
   apellido.value = "";
   correo.value ="";
   cantidad.value ="";
   total.innerText = "";
}
