function createGame(player1, hour, player2)  { 
  return `
   
  <li>
      <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}" />

      <strong>${hour}</strong>

      <img src="./assets/icon-${player2}.svg" alt="bandeira da ${player2}" />
  </li>
`
  
}

function createCard(date, day, games) {
  return `
     <div class="card">
        <h2>${date} <span>${day}</span></h2>
            <ul>
            ${games}
            </ul>
        </div>
  `
}


document.querySelector('#app').innerHTML = `
<header>
      <img src="./assets/logo.svg" alt="logo da nlw">
</header>


    <main id="cards">
     ${createCard("24/11", "quinta", createGame('brazil', '16:00', 'serbia')
     )}

      ${createCard("28/11", "segunda", createGame('brazil', '13:00', 'switzerland')
      )}

       ${createCard("02/12", "sexta ", createGame('brazil', '16:00', 'cameroon')
       )}
    </main>
`
