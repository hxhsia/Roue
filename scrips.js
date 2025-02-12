function tournerRoulette() {
    let roue = document.getElementById("roulette");
    let resultat = document.getElementById("resultat");
    
    let rotation = Math.floor(Math.random() * 3600) + 1800; // Tourne entre 5 et 10 tours
    roue.style.transition = "transform 4s ease-out";
    roue.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        let degresFinal = rotation % 360;
        let prix;

        if (degresFinal >= 0 && degresFinal < 60) prix = "5 pcs de Nem Poulet";
        else if (degresFinal >= 60 && degresFinal < 120) prix = "6 pcs de Gyoza";
        else if (degresFinal >= 120 && degresFinal < 180) prix = "8 pcs de California Saumon Avocat";
        else if (degresFinal >= 180 && degresFinal < 240) prix = "Une portion de Litchi";
        else if (degresFinal >= 240 && degresFinal < 300) prix = "Une portion de Nougat Chinois";
        else prix = "2 pcs Perle de Coco";

        resultat.innerText = `🎉 Félicitations ! Vous avez gagné : ${prix}`;
    }, 4000);
}