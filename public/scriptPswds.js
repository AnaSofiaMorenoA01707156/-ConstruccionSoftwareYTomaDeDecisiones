const enviado = document.getElementById("botonValidar");
const forma = document.getElementById("forma");
const inputPswd = document.getElementById("password");
const inputVerif = document.getElementById("verif");
const reset = document.getElementById("botonReinicio");

const limpiar = () => {
    document.querySelectorAll(".inputWarning").forEach(el => el.remove());
    forma.reset();
}

const validar = () => {
    document.querySelectorAll(".inputWarning").forEach(el => el.remove());
    let pswd = forma["password"].value;
    let verif = forma["verif"].value;
    if (pswd == "") {
        inputPswd.insertAdjacentHTML("afterend", `<p class="inputWarning">Campo requerido.</p>`);
    }
    if (verif == "") {
        inputVerif.insertAdjacentHTML("afterend", `<p class="inputWarning">Campo requerido.</p>`);
    }
    else if (pswd != "" && verif != "")
        if (pswd == verif){
            forma.innerHTML = `<h2 id="aceptado" class="containerMarcado">¡Password nueva confirmada con éxito! (La contraseña coincide con su verificación).</h2>`;
        }
        else {
            inputVerif.insertAdjacentHTML("afterend", `<p class="inputWarning">El password y la verificación del mismo no coinciden. <br>Intenta de nuevo.</p>`);
            forma.reset();
        }
}

enviado.onclick = validar;
reset.onclick = limpiar;