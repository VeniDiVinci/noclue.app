const languages = ["EN", "DE", "ES", "FR", "HU"];
const forditasok = [
  ["", "Or I messed up big time ☠️", "Either you entered the incorrect URL...", "Page not found!", "Thank you in advance.", "You can simply scan the QR-code or just click on it.", "If you had a great experience, consider supporting me:)", "Guidance on what to show", "Guidance on what to ask", "Localization", "Even more editions", "Upcoming...", "No. of games played with the help of NoClue!", "Welcome to NoClue!", "Auto", "Dark", "Light", "Settings", "Game Menu", "Disclaimer", "Donate", "Contact", "Home", "Leftover", "Delete question", "Confirm deletion", "Continue", "New Game", "Edition", "No. of Players", "Players", "Name", "No. of cards", "Your cards", "Menu", "Card", "Suspects", "Weapons", "Rooms", "Record question", "Clue sheet", "Discovered card", "Undo question", "Who asked?", "Suspect", "Weapon", "Room", "Who showed?", "showed", "Who discarded the question?", "No one", "Discarded", "Card owner", "Leftover cards", "Are you sure you want to delete the following question?", "Noone showed", "Discarded by", "showed:", "'s card:", "Discovered & Leftover cards"],
  ["", "Oder ich hab's total verbockt ☠️", "Entweder hast du die falsche URL eingegeben...", "Seite nicht gefunden!", "Danke schon mal.", "Du kannst einfach den QR-Code scannen oder draufklicken.", "Wenn es dir gefallen hat, überleg, mich zu unterstützen :)", "Was soll angezeigt werden", "Was soll gefragt werden", "Lokalisierung", "Noch mehr Editionen", "Kommende...", "Anzahl der Spiele mit NoClue! gespielt", "Willkommen bei NoClue!", "Auto", "Dunkel", "Hell", "Einstellungen", "Spielmenü", "Haftungsausschluss", "Spenden", "Kontakt", "Startseite", "Übrig", "Frage löschen", "Löschung bestätigen", "Weiter", "Neues Spiel", "Edition", "Anzahl der Spieler", "Spieler", "Name", "Anzahl der Karten", "Deine Karten", "Menü", "Karte", "Verdächtige", "Waffen", "Räume", "Frage aufnehmen", "Notizblock", "Entdeckte Karte", "Frage rückgängig machen", "Wer hat gefragt?", "Verdächtiger", "Waffe", "Raum", "Wer hat gezeigt?", "gezeigt", "Wer hat die Frage verworfen?", "Niemand", "Verworfen", "Kartenbesitzer", "Übrige Karten", "Bist du sicher, dass du die folgende Frage löschen möchtest?", "Niemand hat gezeigt", "Verworfen von", "gezeigt:", "'s Karte:", "Entdeckte & übrige Karten"],
  ["", "O la he liado a lo grande ☠️", "O has puesto la URL incorrecta...", "¡Página no encontrada!", "Gracias de antemano.", "Puedes simplemente escanear el código QR o hacer clic en él.", "Si tuviste una gran experiencia, piensa en apoyarme :)", "Qué mostrar", "Qué preguntar", "Localización", "Más ediciones", "Próximamente...", "N.º de partidas jugadas con NoClue!", "¡Bienvenido a NoClue!", "Auto", "Oscuro", "Claro", "Configuración", "Menú del juego", "Aviso legal", "Donar", "Contacto", "Inicio", "Sobrante", "Eliminar pregunta", "Confirmar eliminación", "Continuar", "Nuevo juego", "Edición", "N.º de jugadores", "Jugadores", "Nombre", "N.º de cartas", "Tus cartas", "Menú", "Carta", "Sospechosos", "Armas", "Habitaciones", "Registrar pregunta", "Hoja de pistas", "Carta descubierta", "Deshacer pregunta", "¿Quién preguntó?", "Sospechoso", "Arma", "Habitación", "¿Quién mostró?", "mostró", "¿Quién descartó la pregunta?", "Nadie", "Descartada", "Dueño de la carta", "Cartas sobrantes", "¿Estás seguro de que quieres eliminar la siguiente pregunta?", "Nadie mostró", "Descartada por", "mostró:", "carta de:", "Cartas descubiertas y sobrantes"],
  ["", "Ou j'ai vraiment tout raté ☠️", "Soit tu as entré une URL incorrecte...", "Page introuvable!", "Merci d'avance.", "Tu peux simplement scanner le QR code ou cliquer dessus.", "Si tu as passé un bon moment, pense à me soutenir :)", "Que montrer", "Que demander", "Localisation", "Encore plus d'éditions", "À venir...", "Nbre de parties jouées avec NoClue!", "Bienvenue chez NoClue!", "Auto", "Sombre", "Clair", "Paramètres", "Menu du jeu", "Avertissement", "Faire un don", "Contact", "Accueil", "Restant", "Supprimer la question", "Confirmer la suppression", "Continuer", "Nouvelle partie", "Édition", "Nbre de joueurs", "Joueurs", "Nom", "Nbre de cartes", "Tes cartes", "Menu", "Carte", "Suspects", "Armes", "Salles", "Enregistrer la question", "Feuille d'indices", "Carte découverte", "Annuler la question", "Qui a posé la question ?", "Suspect", "Arme", "Salle", "Qui a montré ?", "a montré", "Qui a écarté la question ?", "Personne", "Écartée", "Propriétaire de la carte", "Cartes restantes", "Es-tu sûr de vouloir supprimer la question suivante ?", "Personne n'a montré", "Écartée par", "a montré:", "carte de:", "Cartes découvertes et restantes"],
  ["", "Vagy valami nálam ment félre nagyon ☠️", "Vagy rossz URL-t ütöttél be...", "Az oldal nem található!", "Köszönöm előre is.", "Csak szkenneld be a QR-kódot, vagy klikkelj rá.", "Ha jól érezted magad, vedd fontolóra támogatásomat:)", "Segéd: Mit mutass?", "Segéd: Mit kérdezz?", "Fordítások", "Még több kiadás", "Következik...", "A NoClue! segítségével ennyiszer játszottak:", "Üdvözöl a NoClue!", "Auto", "Sötét", "Világos", "Beállítások", "Játék Menü", "Tájékoztató", "Támogatás", "Kapcsolat", "Főoldal", "Megmaradt", "Kérdés törlése", "Törlés megerősítése", "Folytatás", "Új játék", "Kiadás", "Játékosok száma", "Játékosok", "Név", "Kártyák száma", "Saját kártyák", "Menü", "Kártya", "Gyanúsítottak", "Fegyverek", "Helyiségek", "Kérdés rögzítése", "Nyomozói jegyzet", "Felfedezett kártya", "Kérdés visszavonása", "Ki kérdezett?", "Gyanúsított", "Fegyver", "Helyiség", "Ki mutatott?", "mit mutatott?", "Ki utasította el a kérdést?", "Senki", "Elutasítva", "Kártya tulajdonosa", "Megmaradt kártyák", "Biztosan törlöd az alábbi kérdést?", "Senki sem mutatott", "Elutasította", "mutatott:", " kártyája:", "Felfedezett & Megmaradt kártyák"],
];

const userLanguage = navigator.language.split("-")[1] || navigator.userLanguage.split("-")[1] || "EN";
if (!localStorage.getItem("Language")) {
  localStorage.setItem("Language", userLanguage);
}

function div_creator(div_index, array, class_array) {
  base_div = document.getElementById("step" + div_index);
  array.forEach((item, i) => {
    new_div = document.createElement("div");
    new_div.classList.add(class_array);
    new_div.innerHTML = array[i];
    base_div.appendChild(new_div);
  });
  forditas("EN", selected_lang);
}

function button_handler(div_index, button_index, action) {
  button = document.querySelector("#step" + div_index + " button:nth-of-type(" + button_index + ")");
  if (action == "disabled") {
    //button.disabled = true;
    button.classList.add("disabled");
  }
  if (action == "enabled") {
    //button.disabled = false;
    button.classList.remove("disabled");
  }
}

function selection_handler(div_index) {
  document.querySelectorAll("#step" + div_index + " div").forEach((div) => {
    div.addEventListener("click", function () {
      document.querySelectorAll("#step" + div_index + " div").forEach((d) => {
        d.classList.remove("selected");
        d.classList.add("inactive");
      });

      this.classList.add("selected");
      this.classList.remove("inactive");

      // button_handler(div_index, 2, "enabled");
      button_handler_uj(2, "enabled");
    });
  });
}

function selection_returner(div_index, searched_text) {
  if (searched_text) {
    let found_div = null;
    document.querySelectorAll("#step" + div_index + " div").forEach((div) => {
      if (div.innerHTML == searched_text) {
        div.classList.add("selected");
        div.classList.remove("inactive");

        found_div = div;
      } else {
        div.classList.remove("selected");
        div.classList.add("inactive");
      }
    });
  }
  return document.querySelector("#step" + div_index + " div.selected");
}

function selection_unhider(lepes_index) {
  lepes_index = parseInt(lepes_index);
  if (isNaN(lepes_index) || lepes_index == null) {
    lepes_index = 0;
  }
  for (i = 0; i <= lepes_osszes; i++) {
    if (i != lepes_index) {
      document.getElementById("step" + i).style.display = "none";
    }
  }
  document.getElementById("step" + lepes_index).style.display = "grid";

  oldal = window.location.pathname.split("/").pop().split(".html")[0];

  gomb_vissza = document.querySelector("#buttons button:nth-of-type(1)");
  gomb_tovabb = document.querySelector("#buttons button:nth-of-type(2)");

  const backButtonActions = {
    "clue-sheet": "game.html",
    "discovered-card": "game.html",
    "record-question": "game.html",
    "undo-question": "game.html",
    game: "index.html",
  };

  if (lepes_index == 0 && backButtonActions[oldal]) {
    gomb_vissza.onclick = () => (window.location.href = backButtonActions[oldal]);
  } else {
    gomb_vissza.onclick = () => selection_unhider(lepes_index - 1);
  }

  gomb_tovabb.onclick = () => window["lepes_" + lepes_index]("save");

  if (oldal == "discovered-card" && lepes_index == 2) {
    gomb_vissza.onclick = () => selection_unhider(0);
  }

  if (oldal == "record-question" && lepes_index == 6) {
    gomb_vissza.onclick = () => selection_unhider(4);
  }

  if (oldal == "game" && lepes_index == 4) {
    document.querySelector("#buttons").style.display = "none";
  }

  lista = ["div", "details", "p"];
  if ((oldal == "game" && lepes_index != 4) || oldal != "game")
    lista.forEach((selector) => {
      document
        .getElementById("step" + lepes_index)
        .querySelectorAll(selector)
        .forEach((mezo) => mezo.remove());
    });

  window["lepes_" + lepes_index]("load");
  forditas("EN", selected_lang);
}

function lepes_helper(tipus) {
  if (tipus == "game") {
    lepes_utolso = parseInt(localStorage.getItem("Setup step"));
    if (lepes_utolso == lepes_osszes) {
      selection_unhider(lepes_utolso);
    } else {
      selection_unhider(lepes_utolso + 1);
    }
  }

  if (tipus == "record question") {
    kerdes = localStorage.getItem("Question");
    if (kerdes) {
      kerdes = kerdes.split(",");
      if (!kerdes.includes(" ")) {
        if (kerdes.length == 6 && kerdes[0] == "You") {
          selection_unhider(5);
        } else if (kerdes.length == 6 && kerdes[5] == "Discarded") {
          selection_unhider(6);
        } else {
          selection_unhider(4);
        }
      }
      for (i = 0; i < kerdes.length; i++) {
        if (kerdes[i] == " ") {
          selection_unhider(i);
          return;
        }
      }
    }
    if (!kerdes) {
      selection_unhider(0);
    }
  }

  if (tipus == "discovered card") {
    felfedezett_kartya = localStorage.getItem("Discovered card");
    if (felfedezett_kartya) {
      felfedezett_kartya = felfedezett_kartya.split(",");
      if (!felfedezett_kartya.includes(" ")) {
        selection_unhider(1);
      }

      for (i = 0; i < felfedezett_kartya.length; i++) {
        if (felfedezett_kartya[i] == " ") {
          selection_unhider(i);
          return;
        }
      }
    }
    if (!felfedezett_kartya) {
      selection_unhider(0);
    }
  }
}

function button_handler_uj(button_index, action) {
  button = document.querySelector("#buttons button:nth-of-type(" + button_index + ")");
  if (action == "disabled") {
    //button.disabled = true;
    button.classList.add("disabled");
  }
  if (action == "enabled") {
    //button.disabled = false;
    button.classList.remove("disabled");
  }
}

function szoveg_extractor(szoveg) {
  if (szoveg) {
    lista = [];
    if (szoveg.includes(";")) {
      lista_temp = szoveg.split(";");

      for (i = 0; i < lista_temp.length; i++) {
        lista.push(lista_temp[i].split(","));
      }
    } else {
      lista = szoveg.split(",");
    }
    return lista;
  }
}

//Fordítás
window.selected_lang = localStorage.getItem("Language") || "EN";

function szoveg_kereso(input_language, output_language, input_text) {
  input_language_index = languages.indexOf(input_language);
  output_language_index = languages.indexOf(output_language);
  input_text_list = forditasok[input_language_index];
  input_text_index = input_text_list.indexOf(input_text);
  output_text_list = forditasok[output_language_index];
  output_text = output_text_list[input_text_index];
  return output_text;
}

function forditas(input_language, output_language) {
  if (input_language != output_language) {
    const input_language_index = languages.indexOf(input_language);
    const output_language_index = languages.indexOf(output_language);
    const input_texts = forditasok[input_language_index];
    const output_texts = forditasok[output_language_index];

    const elements = document.querySelectorAll("*");

    elements.forEach((element) => {
      if (!element.childNodes.length) return;

      element.childNodes.forEach((node) => {
        if (node.nodeType == Node.TEXT_NODE) {
          const englishText = node.nodeValue.trim();
          const input_text_index = input_texts.indexOf(englishText);
          if (input_text_index !== -1) {
            node.nodeValue = output_texts[input_text_index];
          }
        }
      });
    });
    document.documentElement.lang = selected_lang.toLowerCase();
  }
}

function nyelvek() {
  const languageSelect = document.getElementById("languages");

  const savedLanguage = localStorage.getItem("Language") || "EN";

  languages.forEach(function (language) {
    const option = document.createElement("option");
    option.value = language;
    option.text = language;
    if (language == savedLanguage) {
      option.selected = true;
    }
    languageSelect.appendChild(option);
  });

  languageSelect.addEventListener("change", function () {
    const selectedLanguage = languageSelect.value;
    localStorage.setItem("Language", selectedLanguage);
    window.location.reload();
    forditas("EN", selected_lang);
  });
  forditas("EN", selected_lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const nav = document.querySelector("nav");

  menuOpen.addEventListener("click", () => {
    nav.classList.add("shown");
    nav.classList.remove("not-shown");
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
  });

  menuClose.addEventListener("click", () => {
    nav.classList.remove("shown");
    nav.classList.add("not-shown");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });

  setupStep = localStorage.getItem("Setup step");
  kerdesek = localStorage.getItem("Questions");
  if (!setupStep || setupStep != 3) {
    document.getElementById("game_menu").classList.add("disabled");
  } else {
    document.getElementById("game_menu").classList.remove("disabled");
  }

  if (!kerdesek) {
    document.getElementById("torles").classList.add("disabled");
  } else {
    document.getElementById("torles").classList.remove("disabled");
  }
  nyelvek();
  temak();
});

function temak() {
  const themeSelect = document.getElementById("theme");

  const selectedTheme = localStorage.getItem("Theme") || "1";

  themeSelect.value = selectedTheme;

  themeSelect.addEventListener("change", function () {
    const selectedTheme = themeSelect.value;
    localStorage.setItem("Theme", selectedTheme);
    window.location.reload();
  });

  if (selectedTheme == "2") {
    localStorage.setItem("Theme", "2");
    const root = document.documentElement;
    root.style.setProperty("--hatter-kep", "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%25%27 height=%27100%25%27 viewBox=%270 0 1600 800%27%3E%3Cg%3E%3Cpolygon fill=%27%23636363%27 points=%271600 160 0 460 0 350 1600 50%27/%3E%3Cpolygon fill=%27%234a4a4a%27 points=%271600 260 0 560 0 450 1600 150%27/%3E%3Cpolygon fill=%27%233b3b3b%27 points=%271600 360 0 660 0 550 1600 250%27/%3E%3Cpolygon fill=%27%23262626%27 points=%271600 460 0 760 0 650 1600 350%27/%3E%3Cpolygon fill=%27%231a1a1a%27 points=%271600 800 0 800 0 750 1600 450%27/%3E%3C/g%3E%3C/svg%3E')");
    root.style.setProperty("--valtozo-hatter-szin", "#272727");
    root.style.setProperty("--valtozo-fekete", "#ffffff");
    root.style.setProperty("--valtozo-feher", "#000");
    root.style.setProperty("--nav-arnyek", "-2px 0 5px rgba(0, 0, 0, 0.5)");
  }
}
