function autoReloadPage() {
    // Establecer un tiempo de espera de 5 minutos (300 segundos)
    const timeout = 300000;

    // Inicializar una marca de tiempo de última actividad
    let lastActivity = Date.now();

    // Agregar un detector de eventos para cualquier actividad del usuario (movimiento del mouse o entrada del teclado)
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keydown', resetTimer);

    // Función para restablecer el temporizador de inactividad
    function resetTimer() {
        lastActivity = Date.now();
    }

    // Función para verificar la inactividad y actualizar la página
    setInterval(() => {
        const now = Date.now();
        const elapsedTime = now - lastActivity;

        if (elapsedTime >= timeout) {
            location.reload(); // Recargar la página
        }
    }, 1000); // Comprobar cada segundo
}

function fillRandomFormData() {
    // Seleccionar todas las entradas que comiencen con "observacion"
    var inputsObservacion = $("input[name^='observacion']");

    // Recorrer las entradas seleccionadas
    inputsObservacion.each(function() {
    let respuestasRandoms = [
        "Muy satisfecho",
        "Satisfecho",
        "Neutral",
        "Insatisfecho",
        "Totalmente de acuerdo",
        "De acuerdo",
        "Ni de acuerdo ni en desacuerdo",
        "En desacuerdo",
        "Totalmente en desacuerdo",
        "Me gustó mucho",
        "Me gustó",
        "Me pareció regular",
        "No me gustó",
        "No me gustó nada",
        "Recomendaría este servicio",
        "No recomendaría este servicio",
        "El servicio fue excelente",
        "El servicio fue bueno",
        "El servicio fue regular",
        "El servicio fue malo",
        "El servicio fue pésimo",
        "La atención fue excelente",
        "La atención fue buena",
        "La atención fue regular",
        "La atención fue mala",
        "La atención fue pésima",
        "El producto fue excelente",
        "El producto fue bueno",
        "El producto fue regular",
        "El precio fue justo",
        "El precio fue caro",
        "El precio fue económico",
        "El precio fue elevado",
        "Definitivamente regresaría",
        "Probablemente regresaría",
        "No estoy seguro de si regresaría",
        "Probablemente no regresaría",
        "Definitivamente no regresaría"
    ];
    var randomIndex = Math.floor(Math.random() * respuestasRandoms.length);
        // Agregar texto de descripción de muestra
        $(this).val(respuestasRandoms[randomIndex]);
    });

    // Seleccionar todas las entradas que comiencen con "pregunta"
    var radioGroups = $("input[name^='pregunta']").parent().parent();

    // Recorrer cada div
    radioGroups.each(function() {
    // Obtener todos los botones de radio dentro del div actual
    var radios = $(this).find("input[type='radio']");

    // Seleccionar un botón de radio aleatorio
    var randomIndex = Math.floor(Math.random() * radios.length);
        radios[randomIndex].checked = true;
    });
}


function removeModal(){
    $("div[id^='modal']").remove()
}


$(function() {
    fillRandomFormData();
    autoReloadPage();
    removeModal();
});

