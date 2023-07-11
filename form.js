document.getElementById("submit").addEventListener("click", e => {
    e.preventDefault();

    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "50688997787";

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const voy = document.getElementById("voy");

    let resultvoy;
    if (voy.checked) {
        resultvoy = "Sí, asistiré.";
    } else {
        resultvoy = "No, no asistiré.";
    }

    const mensaje = document.getElementById("mensaje").value;


    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
    Evento: Baby Shower Agnes Olivia.%0A
    Asunto: Confirmacion de asistencia.%0A
    Nombre: ${nombre}.%0A
    Apellidos: ${apellidos}.%0A
    Voy a asistir: ${resultvoy}%0A
    Mensaje adicional: ${mensaje}.`;

    window.open(url);
});