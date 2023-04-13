
const changeTitle = function () {
    document.querySelector('h1').innerHTML = 'Questo é il nuovo titolo della pagina'
}
    changeTitle()
    



/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

       const addClassToTitle = function () {
        document.querySelector('h1').classList.add('myHeading')

       }
       addClassToTitle()

/* ESERCIZIO 3
       Scrivi una funzione per che cambi il testo dei p figli di un div
      */

    const changePcontent = function () {
        
        for (const element of document.querySelectorAll('div p')) {
            element.textContent = 'questo é il nuovo testo degli P'
        }
    }
        changePcontent()

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

       const changeUrls = function () {
        for (const element of document.querySelectorAll('body div a')) {
            element.href = 'https://www.google.com'
            
        }
            

       }
       changeUrls()
   
/* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */
   
       const addToTheSecond = function () {
        let li = document.getElementById('secondList')
        let nuovoli = document.createElement('li')
        nuovoli.textContent ='4th'
        secondList.append(nuovoli)
   
   
       }
       addToTheSecond()
/* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */
   
       const addParagraph = function () {
        let secondp = document.querySelector('.contenitorep')
        let p2 = document.createElement('p')
        p2.textContent = 'secondo paragrafo aggiunto'
        secondp.append(p2)
        console.log(secondp);
       }
       addParagraph()
       
/* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */
   
       const hideFirstUl = function () {
        document.getElementById('firstList').style.display = 'none'
   
   
       }
       hideFirstUl()
/* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */
   
       const paintItGreen = function () {
        for (const iterator of document.querySelectorAll('ul') ) {
             iterator.style.backgroundColor = 'green'
        }
   
   
       }
       paintItGreen()
   
/* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */
   
       const makeItClickable = function () {
        let h1 = document.querySelector('h1')
        
        h1.addEventListener("click",function(){
            h1.textContent.slice(0, -1)
            
        })
   
       }
       
       makeItClickable()
   
/* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */
   
       const revealFooterLink = function () {
        let footer = document.querySelector('footer')
        let url = footer.querySelector('a').href
        footer.addEventListener("click",function(){
            alert(url)
        }
        )
   
   
       }
       revealFooterLink()
   
/* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */
   
       const generateTable = function () {
        let contenitore = document.querySelector('#tableArea')
        let tabella = document.createElement('th')
        let tabella2 = document.createElement('th')
        let tabella3 = document.createElement('th')
        let tabella4 = document.createElement('th')

        tabella.textContent = 'immagine'
        tabella2.textContent = 'nome prodotto'
        tabella3.textContent = 'quantitá'
        tabella4.textContent = 'prezzo'
        contenitore.append(tabella,tabella2,tabella3,tabella4)
   

       }
       generateTable()
   
/* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */
   
       const addRow = function () {

   
   
       }
   
/* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */
   
       const hideAllImages = function () {
   
   
       }
   
/* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */
   
       const changeColorWithRandom = function () {
   
   
       }
   
/* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */
   
       const deleteVowels = function () {
   
   
       }