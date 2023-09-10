const groups = {
  1: ["BAYERN MUNCHEN(GER)", "MANCHESTER UNITED(ENG)", "COPENHAGEN(DEN)", "GALATASARAY(TUR)"],
  2: ["SEVILLA (SPA)", "ARSENAL(ENG)", "PSV(NED)", "LENS(FRA)"],
  3: ["NAPOLI (ITA)", "REAL MADRID(SPA)", "BRAGA(POR)", "UNION BERLIN(GER)"],
  4: ["BENFICA (POR)", "INTER(ITA)", "SALZBURG(NOR)", "REAL SOCIEDAD(SPA)"],
  5: ["FEYENOORD (NED)", "ATLETICO DE MADRID(SPA)", "LAZIO(ITA)", "CELTIC(SCO)"],
  6: ["PARIS SAINT GERMAIN (FRA)", "DORTMUND(GER)", "AC MILAN(ITA)", "NEWCASTLE(ENG)"],
 7: ["MAN CITY(ENG)", "LEIPZIG(GER)", "CRVENA ZVEZDA(SRB)", "YOUNG BOYS(SUI)"],
  8: ["BARCELONA (SPA)", "PORTO(POR)", "SHAKHTAR DONETSK(UKR)", "ANTWERP(BEL)"]};
  //displaying teams's names
  let teams=document.createElement("div");
for(let i=1;i<=8;i++){
  let group=document.createElement("div");
  group.textContent="𝓖𝓡𝓞𝓤𝓟"+" "+i;
  group.style.color="#00F0FF";
  group.style.fontSize="30px";
  group.style.backgroundImage="url(IMAGES/puurple.png)";
  let groupTeams = document.createElement("p");
  groupTeams.classList.add("CLUBS");
  for(let j=0;j<4;j++){
  let club=document.createElement("p");
  club.textContent=groups[i][j];
  club.style.color="white";
  groupTeams.appendChild(club);}
  group.appendChild(groupTeams);
  teams.appendChild(group);}
  document.body.appendChild(teams);
  //
  let select = document.createElement("select");
  select.id = "cl";
  let groupNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
  for (let i = 0; i < groupNames.length; i++) {
    let option = document.createElement("option");
    option.value = i + 1; 
    option.textContent = "𝔾𝕣𝕠𝕦𝕡𝕖 " + groupNames[i];
    select.appendChild(option);
}
document.body.appendChild(select);
select.style.borderLeft="10px solid #FF11E7";
select.style.color="#FF11E7";
select.style.backgroundImage="url(IMAGES/blue.png";
select.style.fontSize="25px";
  let pp = document.createElement("div");
  pp.id="pp";
  cl.addEventListener("change", function updateClubs() {
    let ID = cl.value;
    let gr = document.createElement("div");
    if (groups[ID]) {
      pp.innerHTML = "";
      for (let i = 0; i < 4; i++) {
        let club = document.createElement("div"); // Create a new div for each club
        club.textContent = groups[ID][i];
        club.style.fontSize = "50px";
        club.style.color="white"; // Set the font size here (e.g., "16px")
        gr.appendChild(club);
      }
    }
    pp.appendChild(gr);
    document.body.appendChild(pp);
  });
  let pvi=document.createElement("div");
let video = document.createElement("video");
video.src = "VIDEOS/TIRAGE.mp4";
video.style.width = "800px"; // Use a percentage to make it responsive
video.style.height = "600px"; // Use a percentage to make it responsive
video.autoplay = true;
video.loop = true;
video.controls = true;
pvi.appendChild(video);

document.body.appendChild(pvi);

  onload=function(){document.body.style.backgroundImage="url(IMAGES/459817.jpg)";}
  onresize=function(){document.body.style.backgroundImage="url(IMAGES/64c9dc2a9f4d14e51675a26a54a0e72e.jpg)";}

  

