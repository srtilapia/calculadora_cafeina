const CalcularCafeina = () => {
    const peso = document.Cafeinaform.elements["peso"].value;

    if (peso) {
        const ml = peso * 2.2;
        const mg = ml * 1.5;
        const xicaras = ml / 60;

        document.getElementById("ml").innerHTML = "Sua massa permite que você tome " + ml.toFixed(2) + " ml de café diariamente.";
        document.getElementById("xicara").innerHTML = "É equivalente a " + xicaras.toFixed(2) + " xícaras de café.";
        document.getElementById("miligramas").innerHTML = "Todas as xícaras juntas contêm " + mg.toFixed(2) + " miligramas de café.";

        // Resetando a animação
        document.querySelectorAll('.result').forEach(p => {
            p.style.opacity = '0';
            p.style.animation = 'none';
            setTimeout(() => {
                p.style.animation = '';
            }, 10);
        });
    } else {
        alert("Por favor, insira seu peso.");
    }
}
