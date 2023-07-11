document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();

    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "50664649512";

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const voy = document.getElementById("voy").value;
    const novoy = document.getElementById("novoy").value;

    let resultvoy;
    if (voy) {
        resultvoy = "Voy a participar del evento";
    } else if (novoy) {
        resultvoy = "No voy a participar del evento";
    }

    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_BABY SHOWER AGNES_*%0A
          *Reserva*%0A%0A
          *Nombre*%0A
          ${nombre}%0A
          *Apellidos*%0A
          ${apellidos}%0A
          *Participara del evento?*%0A
          ${resultvoy}%0A
          *Mensaje Adicional*%0A
          ${mensaje}%0A`;

    window.open(url);
});