document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("nationalite");
    let flags = document.querySelectorAll(".flag");

    function afficherDrapeau(nationalite) {
        flags.forEach(flag => {
            flag.classList.add("hidden"); 
        });

        let drapeau = document.getElementById(nationalite);
        if (drapeau) {
            drapeau.classList.remove("hidden"); 
        }
    }

    input.addEventListener("input", function () {
        let valeur = this.value.trim().toLowerCase();
        let nationalites = {
            "cameroun": "Cameroun",
            "guinee": "Guinee",
            "japon": "Japon",
            "senegal": "Senegal",
        };

        if (nationalites[valeur]) {
            afficherDrapeau(nationalites[valeur]);
        } else {
            flags.forEach(flag => flag.classList.add("hidden"));
        }
    });
});