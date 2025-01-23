const lepes = localStorage.getItem("Setup step");
if (lepes != "3") {
  window.location.href("game.html");
}

const szoveg_0 = localStorage.getItem("Questions");
const szoveg_1 = localStorage.getItem("Players");
const szoveg_2 = localStorage.getItem("Player cards");
const szoveg_3 = localStorage.getItem("Own cards");
const szoveg_4 = localStorage.getItem("Suspects");
const szoveg_5 = localStorage.getItem("Weapons");
const szoveg_6 = localStorage.getItem("Rooms");
const tablazat = document.getElementById("tablazat");
if (szoveg_0) {
  kerdesek = szoveg_0.includes(";") ? szoveg_0.split(";").map((szoveg) => szoveg.split(",")) : szoveg_0 ? [szoveg_0.split(",")] : [];
} else {
  kerdesek = [];
}
const jatekosok = szoveg_1.split(",");
const kartyaszamok = szoveg_2.split(",").map(Number);
const sajat_kartyak = szoveg_3.split(",");
const suspects = szoveg_4.split(",");
const weapons = szoveg_5.split(",");
const rooms = szoveg_6.split(",");

const osszes_kartya = [...suspects, ...weapons, ...rooms];
const fejlec = ["Card", ...jatekosok, "Leftover cards", "Possible"];
const fejlec_kartyaszamok = [0, ...kartyaszamok, osszes_kartya.length - 3 - kartyaszamok.reduce((a, b) => a + b, 0), 0];
const adatok = osszes_kartya.map((kartya) => [kartya, ...Array(fejlec.length - 2).fill(" "), "True"]);

const min_index = 1;
const max_index = fejlec.indexOf("Possible");

function szoveg_indexek(lista) {
  return lista.map((item) => osszes_kartya.indexOf(item));
}

function ertekek_oszlopban(command, oszlop_index) {
  const szoveg_szam = adatok.flatMap((adat) =>
    adat[oszlop_index]
      .split(" ")
      .filter((elem) => elem.trim() !== "")
      .map((elem) => (isNaN(elem) ? elem : Number(elem)))
  );
  const csak_szam = [...new Set(szoveg_szam.filter((elem) => typeof elem == "number"))].sort((a, b) => a - b);

  if (command == "csak_szam") return csak_szam;
  if (command == "szoveg_szam") return szoveg_szam;
  if (Array.isArray(command)) return adatok.filter((_, i) => command.includes(i)).map((adat) => adat[oszlop_index]);
}

function torles_oszlopban(cella, oszlop_index) {
  const szoveg = cella.split(" ");

  szoveg.forEach((szo) => {
    adatok.forEach((sor) => {
      if (sor[oszlop_index].includes(szo)) {
        sor[oszlop_index] = sor[oszlop_index].replace(szo, "").trim();
      }
      if (sor[oszlop_index] == "") {
        sor[oszlop_index] = " ";
      }
    });
  });
}

function x_sor(sor_indexek, start_index, end_index) {
  sor_indexek.forEach((sor_index) => {
    if (start_index == end_index) {
      for (let i = min_index; i < max_index; i++) {
        if (i !== start_index && adatok[sor_index][i] !== "o") {
          adatok[sor_index][i] = "x";
        }
      }
    } else if (start_index < end_index && !(start_index == min_index && end_index == max_index)) {
      for (let i = start_index + 1; i < end_index; i++) {
        if (adatok[sor_index][i] !== "o") {
          adatok[sor_index][i] = "x";
        }
      }
    } else if (start_index > end_index && !(start_index == min_index && end_index == max_index)) {
      for (let i = start_index + 1; i < max_index; i++) {
        if (adatok[sor_index][i] !== "o") {
          adatok[sor_index][i] = "x";
        }
      }
      for (let i = min_index; i < end_index; i++) {
        if (adatok[sor_index][i] !== "o") {
          adatok[sor_index][i] = "x";
        }
      }
    } else if (start_index == min_index && end_index == max_index) {
      for (let i = min_index; i < max_index; i++) {
        adatok[sor_index][i] = "x";
      }
    }
  });
}

function o_sor(sor_indexek, oszlop_index) {
  sor_indexek.forEach((sor_index) => {
    const cella = adatok[sor_index][oszlop_index];
    if (!["x", "o", " ", ""].includes(cella)) {
      torles_oszlopban(cella, oszlop_index);
      adatok[sor_index][oszlop_index] = "o";
      adatok[sor_index][max_index] = "False";
    } else if (cella == " ") {
      adatok[sor_index][oszlop_index] = "o";
      adatok[sor_index][max_index] = "False";
    }
  });
}

function szam_sorokba(sor_indexek, oszlop_index) {
  const szoveg_indexekben = ertekek_oszlopban(sor_indexek, oszlop_index);
  if (!szoveg_indexekben.includes("o")) {
    const csak_szam = ertekek_oszlopban("csak_szam", oszlop_index);
    const kovetkezo_szam = csak_szam.length ? csak_szam[csak_szam.length - 1] + 1 : 1;

    sor_indexek.forEach((sor_index) => {
      if (adatok[sor_index][oszlop_index] !== "x") {
        adatok[sor_index][oszlop_index] += ` ${kovetkezo_szam}`;
      }
    });
  }
}

function oszlop_manager() {
  for (let oszlop_index = min_index; oszlop_index < max_index; oszlop_index++) {
    const szoveg_szam = ertekek_oszlopban("szoveg_szam", oszlop_index);
    const csak_szam = ertekek_oszlopban("csak_szam", oszlop_index);
    const maximalis_kartyaszam = fejlec_kartyaszamok[oszlop_index];
    const felfedezett_o = szoveg_szam.filter((elem) => elem == "o").length;
    const felfedezett_x = szoveg_szam.filter((elem) => elem == "x").length;

    //1. fajta: ha az oszlopban egy számból csak egy van
    csak_szam.forEach((szam) => {
      szam = String(szam);
      if (szoveg_szam.filter((x) => x == szam).length == 1) {
        for (i = 0; i < adatok.length; i++) {
          if (adatok[i][oszlop_index].includes(szam)) {
            o_sor([i], oszlop_index);
            x_sor([i], oszlop_index, oszlop_index);
          }
        }
      }
    });

    //2. fajta: ha az o-k száma egyenlő a játékos kártyaszámával
    if (felfedezett_o == maximalis_kartyaszam) {
      adatok.forEach((adat) => {
        if (adat[oszlop_index] != "o") {
          adat[oszlop_index] = "x";
        }
      });
    }

    //3. fajta: üres helyek száma egyenlő a hiányzó kártyák számával
    if (felfedezett_x + maximalis_kartyaszam == osszes_kartya.length) {
      for (i = 0; i < adatok.length; i++) {
        if (adatok[i][oszlop_index] != "x") {
          o_sor([i], oszlop_index);
          x_sor([i], oszlop_index, oszlop_index);
        }
      }
    }
  }
}

function accusation_assist() {
  let vadolas = ["None", "None", "None"];
  let gyanusitottak = adatok.slice(0, suspects.length);
  let fegyverek = adatok.slice(suspects.length, suspects.length + weapons.length);
  let szobak = adatok.slice(suspects.length + weapons.length);
  let kategoriak = [gyanusitottak, fegyverek, szobak];

  //1. fajta: ha a kategórián belül egy True van
  kategoriak.forEach((kategoria, i) => {
    let kategoria_1d = kategoria.flat();
    if (kategoria_1d.filter((elem) => elem == "False").length == kategoria.length - 1) {
      let elem = kategoria.find((elem) => elem[max_index] == "True");
      if (elem) {
        x_sor([osszes_kartya.indexOf(elem[0])], min_index, max_index);
        vadolas[i] = elem[0];
        elem[max_index] = "In the envelope";
      }
    }
  });

  // 2. fajta: ha egy sorban minden játékosnál x van
  kategoriak.forEach((kategoria, i) => {
    let elem = kategoria.find((elem) => elem.filter((e) => e == "x").length == fejlec.length - 2);
    if (elem) {
      x_sor([osszes_kartya.indexOf(elem[0])], min_index, max_index);
      vadolas[i] = elem[0];
      elem[max_index] = "In the envelope";
    }
  });

  if (vadolas.filter((item) => item == "None").length !== 3) {
    localStorage.setItem("Accusation Assist", vadolas);
  }
}

function jatek_logika() {
  let sajat_kartyak_indexei = szoveg_indexek(sajat_kartyak);
  o_sor(sajat_kartyak_indexei, fejlec.indexOf("You"));
  x_sor(sajat_kartyak_indexei, fejlec.indexOf("You"), fejlec.indexOf("You"));

  if (kerdesek.length > 0) {
    for (let kerdes of kerdesek) {
      let start_index = fejlec.indexOf(kerdes[0]);
      let end_index = fejlec.indexOf(kerdes.length == 2 || kerdes[0] == "Leftover cards" || kerdes[4] == "No one" ? kerdes[0] : kerdes[4] == "Discarded" ? kerdes[5] : kerdes[4]);

      if (kerdes.length == 2) {
        let kartya_indexe = [osszes_kartya.indexOf(kerdes[1])];
        o_sor(kartya_indexe, end_index);
        x_sor(kartya_indexe, end_index, end_index);
      } else if (kerdes[0] == "Leftover cards") {
        let kartyak_indexei = szoveg_indexek(kerdes.slice(1));
        o_sor(kartyak_indexei, start_index);
        x_sor(kartyak_indexei, start_index, start_index);
      } else {
        let kartyak_indexei = szoveg_indexek(kerdes.slice(1, 4));
        x_sor(kartyak_indexei, start_index, end_index);

        if (kerdes[0] == "You" && kerdes[4] != "No one" && kerdes[4] != "Discarded") {
          let kartya_indexe = [osszes_kartya.indexOf(kerdes[5])];
          o_sor(kartya_indexe, end_index);
          x_sor(kartya_indexe, end_index, end_index);
        } else if (kerdes[0] != "You" && kerdes[4] != "No one" && kerdes[4] != "Discarded") {
          szam_sorokba(kartyak_indexei, end_index);
        }
      }
      accusation_assist();
      oszlop_manager();
    }
  }
  accusation_assist();
  oszlop_manager();
}

function tablazat_keszito(output_adatok, tablazat_id) {
  const tablazat = document.getElementById(tablazat_id);
  rejtett_oszlopok = [max_index];
  if (!fejlec_kartyaszamok[fejlec.indexOf("Leftover cards")]) {
    rejtett_oszlopok.push(fejlec.indexOf("Leftover cards"));
  }

  for (j = 0; j < output_adatok.length; j++) {
    const sor = document.createElement("tr");

    for (i = 0; i < output_adatok[j].length; i++) {
      if (!rejtett_oszlopok.includes(i)) {
        const cella = document.createElement("td");
        if (!["x", "o", " ", ""].includes(output_adatok[j][i]) && i > 0 && j > 0 && i < max_index) {
          cella.textContent = "?";
        } else {
          cella.textContent = output_adatok[j][i];
        }

        sor.appendChild(cella);
      } else {
        const cella = document.createElement("td");
        cella.textContent = output_adatok[j][i];
        cella.style.display = "none";
        sor.appendChild(cella);
      }
      if (output_adatok[j][max_index] === "In the envelope") {
        sor.firstChild.classList.add("important");
      } else if (output_adatok[j][max_index] === "False") {
        sor.firstChild.classList.add("unimportant");
      }
    }

    if (sor.firstChild.classList.contains("important") && !sor.firstChild.querySelector(".circled")) {
      const exclamationMark = document.createElement("span");
      exclamationMark.textContent = "!";
      exclamationMark.classList.add("circled");
      exclamationMark.title = "This card is in the envelope!";
      sor.firstChild.appendChild(exclamationMark);
    }
    tablazat.appendChild(sor);
  }
}

function tablazat_manager() {
  let output_adatok = adatok.slice(0, suspects.length);
  let output_fejlec = fejlec.map((elem) => (elem === "Leftover cards" ? "Leftover" : elem));
  let output = [output_fejlec, ...output_adatok];
  tablazat_keszito(output, "gyanusitottak");

  output_adatok = adatok.slice(suspects.length, suspects.length + weapons.length);
  output = [output_fejlec, ...output_adatok];
  tablazat_keszito(output, "fegyverek");

  output_adatok = adatok.slice(suspects.length + weapons.length);
  output = [output_fejlec, ...output_adatok];
  tablazat_keszito(output, "szobak");
}

jatek_logika();

console.log(fejlec);
console.log(adatok);

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("gyanusitottak")) {
    tablazat_manager();
  }
  document.querySelectorAll("details").forEach(function (detail) {
    const importantRow = detail.querySelector("tr td.important");

    const summary = detail.querySelector("summary");

    if (importantRow && summary) {
      const exclamation = document.createElement("span");
      exclamation.textContent = "!";
      exclamation.classList.add("circled");
      // summary.appendChild(exclamation);
    }
  });
});
