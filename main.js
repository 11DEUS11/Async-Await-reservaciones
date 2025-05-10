const mesasDisponibles = 5;

function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mesasSolicitadas <= mesasDisponibles) {
                resolve(`Hay ${mesasDisponibles - mesasSolicitadas} mesas disponibles.`);
            } else {
                reject(`No hay suficientes mesas disponibles. Solo quedan ${mesasDisponibles} mesas.`);
            }
        }, 2000);
    });
}

function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() < 0.7;
            if (exito) {
                resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
            } else {
                reject(`Error al enviar el correo a ${nombreCliente}`)
                    
            }
        }, 1500);
    });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
    try {
        console.log("Verificando disponibilidad de mesas...");
        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
        if (disponibilidad) {
            console.log(disponibilidad);
            const confirmacion = await enviarConfirmacionReserva(nombreCliente);
            console.log(confirmacion);
        } else {
            console.log("No se pudo realizar la reserva.");
        }
    } catch (error){
        console.log("Error:", error);
    }
}

hacerReserva("Juan Perez", 3);
hacerReserva("Zak Hernandez", 6);