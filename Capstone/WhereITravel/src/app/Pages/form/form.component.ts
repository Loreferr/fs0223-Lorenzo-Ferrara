
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/Interfaces/question';
import { MBTIScores } from '../../Interfaces/mbtiscores';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponent {
  personality: string = ''
  age: number = 0
  budget: number = 0



  /*destination: string = ''
  extrovertScore: number = 0;
  introvertScore: number = 0;
  sensingScore: number = 0;
  intuitionScore: number = 0;
  thinkingScore: number = 0;
  feelingScore: number = 0;
  judgingScore: number = 0;
  perceivingScore: number = 0;



  mbtiScores: MBTIScores = {
    extrovertScore: 0,
    introvertScore: 0,
    sensingScore: 0,
    intuitionScore: 0,
    thinkingScore: 0,
    feelingScore: 0,
    judgingScore: 0,
    perceivingScore: 0,
  };


  answerSelected: boolean = false;

  // Nel componente TypeScript
// Nel componente TypeScript
selectAnswer(questionIndex: number, optionIndex: number) {
  // Assegna la risposta all'indice corretto
  this.userAnswers[questionIndex] = optionIndex.toString();

  // Avanza alla prossima domanda se non siamo all'ultima domanda
  if (this.currentQuestionIndex < this.questions.length - 1) {
    this.currentQuestionIndex++;
  } else {
    this.onFormSubmit();
  }

}










  currentQuestionIndex: number = 0;





  userAnswers: string[] = [];

  questions: Question[] = [
    {
      text: 'Quando incontri nuove persone, ti senti più...',
      options: ['Energizzato (Estroverso)', 'Riflessivo (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Quando prendi decisioni importanti, tendi a fare affidamento su...',
      options: ['Dati concreti (Sensoriale)', 'Intuizioni (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle discussioni, sei più incline a seguire la tua...',
      options: ['Logica (Pensiero)', 'Cuore (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Nel tuo lavoro, preferisci avere...',
      options: ['Struttura e pianificazione (Giudizio)', 'Flessibilità e adattabilità (Percezione)'],
      dimensions: ['J', 'P']
    },
    {
      text: 'Sei più propenso a...',
      options: ['Pianificare attentamente le attività (Giudizio)', "Lasciare spazio per l'improvvisazione (Percezione)"],
      dimensions: ['J', 'P']
    },
    {
      text: 'Ti piace passare il tempo con...',
      options: ['Molte persone (Estroverso)', 'Pochi amici intimi (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Quando affronti un problema, solitamente segui il tuo...',
      options: ['Ragionamento (Pensiero)', 'Istinto (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Preferisci situazioni in cui hai chiare...',
      options: ['Regole e struttura (Giudizio)', 'Flessibilità e apertura (Percezione)'],
      dimensions: ['J', 'P']
    },
    {
      text: 'Ti senti più a tuo agio con...',
      options: ['Fatti e dati concreti (Sensoriale)', 'Concetti e idee astratte (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle relazioni, tendi a essere più...',
      options: ['Obiettivo e critico (Pensiero)', 'Empatico e comprensivo (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Quando pianifichi un viaggio, preferisci...',
      options: ['Avere un itinerario dettagliato (Giudizio)', "Lasciare spazio per l'avventura (Percezione)"],
      dimensions: ['J', 'P']
    },
    {
      text: 'Ti senti più stimolato da...',
      options: ['Situazioni sociali e interazioni (Estroverso)', 'Riflessioni e solitudine (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Sei più orientato verso...',
      options: ['La realtà tangibile (Sensoriale)', 'Le possibilità future (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Ti consideri più un...',
      options: ['Pianificatore (Giudizio)', 'Esploratore (Percezione)'],
      dimensions: ['P', 'J']
    },
    {
      text: 'Nelle tue decisioni, tendi a dare maggior peso...',
      options: ["Alla logica e all'obiettività (Pensiero)", 'Alle tue emozioni e ai valori personali (Sentimento)'],
      dimensions: ['T', 'F']
    },
    // Nuove domande
    {
      text: 'Quando sei con altre persone, preferisci essere al centro dell\'attenzione o rimanere più in disparte?',
      options: ['Centro dell\'attenzione (Estroverso)', 'Rimanere in disparte (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Sei più orientato a concentrarti sui dettagli concreti o a immaginare possibilità future?',
      options: ['Dettagli concreti (Sensoriale)', 'Possibilità future (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle decisioni, segui principalmente la logica e il ragionamento o ti basi su sentimenti ed emozioni personali?',
      options: ['Logica e ragionamento (Pensiero)', 'Sentimenti ed emozioni (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Preferisci pianificare le tue attività in anticipo o ti piace mantenere la flessibilità e decidere al momento?',
      options: ['Pianificare in anticipo (Giudizio)', 'Mantenere la flessibilità (Percezione)'],
      dimensions: ['J', 'P']
    },
    {
      text: 'Ti senti più stimolato da situazioni sociali o momenti di solitudine e riflessione?',
      options: ['Situazioni sociali (Estroverso)', 'Solitudine e riflessione (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Sei solito concentrarti su ciò che è già noto e concreto o ad abbracciare nuove idee e possibilità?',
      options: ['Concentrarti sul noto (Sensoriale)', 'Abbracciare nuove idee (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle tue relazioni, tendi a essere obiettivo e critico o empatico e comprensivo?',
      options: ['Obiettivo e critico (Pensiero)', 'Empatico e comprensivo (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Quando affronti un problema, preferisci seguire il tuo ragionamento e la tua analisi o affidarti all\'istinto e all\'intuizione?',
      options: ['Seguire ragionamento (Pensiero)', 'Affidarti all\'intuizione (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Ti senti più a tuo agio in situazioni strutturate e organizzate o in contesti più aperti e adattabili?',
      options: ['Situazioni strutturate (Giudizio)', 'Contesti aperti (Percezione)'],
      dimensions: ['J', 'P']
    },
    {
      text: 'Sei più orientato a basarti sui fatti e sulla realtà concreta o a esplorare le possibilità future e le idee astratte?',
      options: ['Fatti concreti (Sensoriale)', 'Possibilità future (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle discussioni, sei più incline a seguire la logica e il pensiero razionale o a esprimere le tue emozioni e opinioni personali?',
      options: ['Logica e pensiero (Pensiero)', 'Emozioni e opinioni (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Quando pianifichi un viaggio, preferisci avere un itinerario dettagliato o lasciare spazio per l\'avventura e l\'improvvisazione?',
      options: ['Itinerario dettagliato (Giudizio)', 'Spazio per l\'avventura (Percezione)'],
      dimensions: ['J', 'P']
    },
    {
      text: 'Ti senti più stimolato da situazioni sociali e interazioni con gli altri o dalla riflessione e dalla solitudine?',
      options: ['Situazioni sociali (Estroverso)', 'Riflessione e solitudine (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Sei più orientato verso la realtà tangibile e ciò che puoi toccare o verso le possibilità future e le idee astratte?',
      options: ['Realità tangibile (Sensoriale)', 'Possibilità future (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle tue decisioni, tendi a dare maggior peso alla logica e all\'obiettività o alle tue emozioni e ai tuoi valori personali?',
      options: ['Logica e obiettività (Pensiero)', 'Emozioni e valori (Sentimento)'],
      dimensions: ['T', 'F']
    }
  ];


















  mbtiDestinations: Record<string, string> = {
    'ENFP': 'Tokyo, Giappone',
    'INTJ': 'Londra, Regno Unito',
    'ESFP': 'Bali, Indonesia',
    'ISTP': 'Patagonia, Argentina',
    'ESTJ': 'New York City, Stati Uniti',
    'ISFJ': 'Amsterdam, Paesi Bassi',
    'ENTJ': 'Singapore',
    'INFJ': 'Praga, Repubblica Ceca',
    'ESTP': 'Sydney, Australia',
    'ISFP': 'Costa Rica',
    'ENTP': 'Berlino, Germania',
    'INFP': 'Kyoto, Giappone',
    'ESFJ': 'Parigi, Francia',
    'INTP': 'Toronto, Canada',

  };




  onFormSubmit() {
    // Inizializza gli score per ciascuna dimensione MBTI
    const mbtiScores: MBTIScores = {
      extrovertScore: 0,
      introvertScore: 0,
      sensingScore: 0,
      intuitionScore: 0,
      thinkingScore: 0,
      feelingScore: 0,
      judgingScore: 0,
      perceivingScore: 0,
    };

    // Inizializza contatori per i punteggi delle domande con score 4 e 5
    let score4Counter = 0;
    let score5Counter = 0;

    // Calcola i punteggi per le dimensioni
    this.userAnswers.forEach((answer, index) => {
      const dimensions = this.questions[index].dimensions;
      let score: number;

      // Determina lo score in base all'importanza della domanda
      if (index === 2 || index === 3 || index === 6 || index === 9 || index === 12 || index === 14 || index === 17 || index === 18 || index === 19 || index === 20) {
        score = 4;
        score4Counter++;
      } else if (index === 0 || index === 1 || index === 5 || index === 7 || index === 8 || index === 10 || index === 11 || index === 13 || index === 15 || index === 16) {
        score = 5;
        score5Counter++;
      } else {
        score = 2; // Domande con score 2
      }

      // Aggiorna gli score in base alla dimensione corrente
      dimensions.forEach(dimension => {
        switch (dimension) {
          case 'E':
            mbtiScores.extrovertScore += score;
            break;
          case 'I':
            mbtiScores.introvertScore += score;
            break;
          case 'S':
            mbtiScores.sensingScore += score;
            break;
          case 'N':
            mbtiScores.intuitionScore += score;
            break;
          case 'T':
            mbtiScores.thinkingScore += score;
            break;
          case 'F':
            mbtiScores.feelingScore += score;
            break;
          case 'J':
            mbtiScores.judgingScore += score;
            break;
          case 'P':
            mbtiScores.perceivingScore += score;
            break;
          default:
            // Gestisci qualsiasi altra situazione o errore qui
            break;
        }
      });
    });

    // Somma i punteggi delle domande con score 4 e 5 separatamente
    let totalExtrovertScore = mbtiScores.extrovertScore;
    let totalIntrovertScore = mbtiScores.introvertScore;
    let totalSensingScore = mbtiScores.sensingScore;
    let totalIntuitionScore = mbtiScores.intuitionScore;
    let totalThinkingScore = mbtiScores.thinkingScore;
    let totalFeelingScore = mbtiScores.feelingScore;
    let totalJudgingScore = mbtiScores.judgingScore;
    let totalPerceivingScore = mbtiScores.perceivingScore;

    // Aggiungi i punteggi delle domande con score 4 e 5
    totalExtrovertScore += score4Counter * 4;
    totalIntrovertScore += score4Counter * 4;
    totalSensingScore += score4Counter * 4;
    totalIntuitionScore += score4Counter * 4;
    totalThinkingScore += score4Counter * 4;
    totalFeelingScore += score4Counter * 4;
    totalJudgingScore += score4Counter * 4;
    totalPerceivingScore += score4Counter * 4;

    console.log('Total Extrovert Score:', totalExtrovertScore);
    console.log('Total Introvert Score:', totalIntrovertScore);
    console.log('Total Sensing Score:', totalSensingScore);
    console.log('Total Intuition Score:', totalIntuitionScore);
    console.log('Total Thinking Score:', totalThinkingScore);
    console.log('Total Feeling Score:', totalFeelingScore);
    console.log('Total Judging Score:', totalJudgingScore);
    console.log('Total Perceiving Score:', totalPerceivingScore);

    // Determina la lettera dominante in ciascuna dimensione
    const extrovertOrIntrovert = totalExtrovertScore > totalIntrovertScore ? 'E' : 'I';
    const sensingOrIntuition = totalSensingScore > totalIntuitionScore ? 'S' : 'N';
    const thinkingOrFeeling = totalThinkingScore > totalFeelingScore ? 'T' : 'F';
    const judgingOrPerceiving = totalJudgingScore > totalPerceivingScore ? 'J' : 'P';

    // Componi la stringa MBTI finale
    const mbtiResult = extrovertOrIntrovert + sensingOrIntuition + thinkingOrFeeling + judgingOrPerceiving;

    console.log('MBTI Result:', mbtiResult);

    // Ottieni la destinazione associata al tipo di personalità
    const destination = this.mbtiDestinations[mbtiResult];
    console.log('Destination:', destination);

    // Reindirizza l'utente alla pagina dei risultati con la destinazione
    this.router.navigate(['results'], { queryParams: { destination: destination } });
  }








  @ViewChild('formRef') formRef: any;
  constructor(private router: Router){}
  resetForm(form: NgForm) {
    form.resetForm();
  }*/
  questions: Question[] = [
    {
      text: 'Quando incontri nuove persone, ti senti più...',
      options: ['Energizzato (Estroverso)', 'Riflessivo (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Quando prendi decisioni importanti, tendi a fare affidamento su...',
      options: ['Dati concreti (Sensoriale)', 'Intuizioni (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle discussioni, sei più incline a seguire la tua...',
      options: ['Logica (Pensiero)', 'Cuore (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Nel tuo lavoro, preferisci avere...',
      options: ['Struttura e pianificazione (Giudizio)', 'Flessibilità e adattabilità (Percezione)'],
      dimensions: ['J', 'P']
    },
    {
      text: 'Sei più propenso a...',
      options: ['Pianificare attentamente le attività (Giudizio)', "Lasciare spazio per l'improvvisazione (Percezione)"],
      dimensions: ['J', 'P']
    },
    {
      text: 'Ti piace passare il tempo con...',
      options: ['Molte persone (Estroverso)', 'Pochi amici intimi (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Quando affronti un problema, solitamente segui il tuo...',
      options: ['Ragionamento (Pensiero)', 'Istinto (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Preferisci situazioni in cui hai chiare...',
      options: ['Regole e struttura (Giudizio)', 'Flessibilità e apertura (Percezione)'],
      dimensions: ['J', 'P']
    },
    {
      text: 'Ti senti più a tuo agio con...',
      options: ['Fatti e dati concreti (Sensoriale)', 'Concetti e idee astratte (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle relazioni, tendi a essere più...',
      options: ['Obiettivo e critico (Pensiero)', 'Empatico e comprensivo (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Quando pianifichi un viaggio, preferisci...',
      options: ['Avere un itinerario dettagliato (Giudizio)', "Lasciare spazio per l'avventura (Percezione)"],
      dimensions: ['J', 'P']
    },
    {
      text: 'Ti senti più stimolato da...',
      options: ['Situazioni sociali e interazioni (Estroverso)', 'Riflessioni e solitudine (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Sei più orientato verso...',
      options: ['La realtà tangibile (Sensoriale)', 'Le possibilità future (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Ti consideri più un...',
      options: ['Pianificatore (Giudizio)', 'Esploratore (Percezione)'],
      dimensions: ['P', 'J']
    },
    {
      text: 'Nelle tue decisioni, tendi a dare maggior peso...',
      options: ["Alla logica e all'obiettività (Pensiero)", 'Alle tue emozioni e ai valori personali (Sentimento)'],
      dimensions: ['T', 'F']
    },
    // Nuove domande
    {
      text: 'Quando sei con altre persone, preferisci essere al centro dell\'attenzione o rimanere più in disparte?',
      options: ['Centro dell\'attenzione (Estroverso)', 'Rimanere in disparte (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Sei più orientato a concentrarti sui dettagli concreti o a immaginare possibilità future?',
      options: ['Dettagli concreti (Sensoriale)', 'Possibilità future (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle decisioni, segui principalmente la logica e il ragionamento o ti basi su sentimenti ed emozioni personali?',
      options: ['Logica e ragionamento (Pensiero)', 'Sentimenti ed emozioni (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Preferisci pianificare le tue attività in anticipo o ti piace mantenere la flessibilità e decidere al momento?',
      options: ['Pianificare in anticipo (Giudizio)', 'Mantenere la flessibilità (Percezione)'],
      dimensions: ['J', 'P']
    },
    {
      text: 'Ti senti più stimolato da situazioni sociali o momenti di solitudine e riflessione?',
      options: ['Situazioni sociali (Estroverso)', 'Solitudine e riflessione (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Sei solito concentrarti su ciò che è già noto e concreto o ad abbracciare nuove idee e possibilità?',
      options: ['Concentrarti sul noto (Sensoriale)', 'Abbracciare nuove idee (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle tue relazioni, tendi a essere obiettivo e critico o empatico e comprensivo?',
      options: ['Obiettivo e critico (Pensiero)', 'Empatico e comprensivo (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Quando affronti un problema, preferisci seguire il tuo ragionamento e la tua analisi o affidarti all\'istinto e all\'intuizione?',
      options: ['Seguire ragionamento (Pensiero)', 'Affidarti all\'intuizione (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Ti senti più a tuo agio in situazioni strutturate e organizzate o in contesti più aperti e adattabili?',
      options: ['Situazioni strutturate (Giudizio)', 'Contesti aperti (Percezione)'],
      dimensions: ['J', 'P']
    },
    {
      text: 'Sei più orientato a basarti sui fatti e sulla realtà concreta o a esplorare le possibilità future e le idee astratte?',
      options: ['Fatti concreti (Sensoriale)', 'Possibilità future (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle discussioni, sei più incline a seguire la logica e il pensiero razionale o a esprimere le tue emozioni e opinioni personali?',
      options: ['Logica e pensiero (Pensiero)', 'Emozioni e opinioni (Sentimento)'],
      dimensions: ['T', 'F']
    },
    {
      text: 'Quando pianifichi un viaggio, preferisci avere un itinerario dettagliato o lasciare spazio per l\'avventura e l\'improvvisazione?',
      options: ['Itinerario dettagliato (Giudizio)', 'Spazio per l\'avventura (Percezione)'],
      dimensions: ['J', 'P']
    },
    {
      text: 'Ti senti più stimolato da situazioni sociali e interazioni con gli altri o dalla riflessione e dalla solitudine?',
      options: ['Situazioni sociali (Estroverso)', 'Riflessione e solitudine (Introverso)'],
      dimensions: ['E', 'I']
    },
    {
      text: 'Sei più orientato verso la realtà tangibile e ciò che puoi toccare o verso le possibilità future e le idee astratte?',
      options: ['Realità tangibile (Sensoriale)', 'Possibilità future (Intuitivo)'],
      dimensions: ['S', 'N']
    },
    {
      text: 'Nelle tue decisioni, tendi a dare maggior peso alla logica e all\'obiettività o alle tue emozioni e ai tuoi valori personali?',
      options: ['Logica e obiettività (Pensiero)', 'Emozioni e valori (Sentimento)'],
      dimensions: ['T', 'F']
    }
  ];
  currentQuestionIndex: number = 0; // Inizia da 0

  currentQuestionNumber: number = 1;



  counters: { [key: string]: number } = {};
  selectedOptions: { [key: number]: number } = {};



  @ViewChild('formRef') formRef!: any;
  constructor(private router: Router) {
    // Inizializza i contatori basati sulle dimensioni delle domande
    this.questions.forEach(question => {
      question.dimensions.forEach(dimension => {
        this.counters[dimension] = 0;
      });
    });
  }

  selectOption(optionIndex: number) {
    this.selectedOptions[this.currentQuestionIndex] = optionIndex;
    this.updateCounters();

    // Verifica se siamo all'ultima domanda
    if (this.currentQuestionIndex === this.questions.length - 1) {
      // Siamo all'ultima domanda, quindi chiama onFormSubmit
      this.onFormSubmit();
    } else {
      // Altrimenti, avanza alla prossima domanda
      this.currentQuestionIndex++;
      this.currentQuestionNumber = this.currentQuestionIndex + 1;
    }
  }



  isSelected(questionIndex: number, optionIndex: number): boolean {
    return this.selectedOptions[questionIndex] === optionIndex;
  }









  // Funzione per aggiornare il contatore basato sulla risposta selezionata
  updateCounters() {
    // Resetta i contatori
    Object.keys(this.counters).forEach(dimension => {
      this.counters[dimension] = 0;
    });

    // Calcola i nuovi contatori basati sulle risposte selezionate
    Object.keys(this.selectedOptions).forEach(questionIndexKey => {
      const questionIndex = parseInt(questionIndexKey, 10); // Converte la chiave in un numero
      const optionIndex = this.selectedOptions[questionIndex];
      const dimension = this.questions[questionIndex].dimensions[optionIndex];
      this.counters[dimension] += 2;
    });
  }

  generatePersonalityString(): string {
    const letterE = this.counters['E'] > this.counters['I'] ? 'E' : 'I';
    const letterS = this.counters['S'] > this.counters['N'] ? 'S' : 'N';
    const letterT = this.counters['T'] > this.counters['F'] ? 'T' : 'F';
    const letterJ = this.counters['J'] > this.counters['P'] ? 'J' : 'P';

    return letterE + letterS + letterT + letterJ;
  }

  mbtiDestinations: Record<string, string> = {
    'ENFP': 'Tokyo, Giappone',
    'INTJ': 'Londra, Regno Unito',
    'ESFP': 'Bali, Indonesia',
    'ISTP': 'Patagonia, Argentina',
    'ESTJ': 'New York City, Stati Uniti',
    'ISFJ': 'Amsterdam, Paesi Bassi',
    'ENTJ': 'Singapore',
    'INFJ': 'Praga, Repubblica Ceca',
    'ESTP': 'Sydney, Australia',
    'ISFP': 'Costa Rica',
    'ENTP': 'Berlino, Germania',
    'INFP': 'Kyoto, Giappone',
    'ESFJ': 'Parigi, Francia',
    'INTP': 'Toronto, Canada',
    'ISTJ': 'Zurigo, Svizzera',
    'ENFJ': 'Barcellona, Spagna',

  };


  getCounterKeys(): string[] {
    return Object.keys(this.counters);
  }

  onFormSubmit() {
    // Chiama generatePersonalityString per ottenere la stringa MBTI
    const mbtiString = this.generatePersonalityString();

    // Utilizza mbtiString come chiave per ottenere la destinazione corrispondente dalla mappa
    const destination = this.mbtiDestinations[mbtiString];

    // Effettua il reindirizzamento alla pagina dei risultati con la destinazione
    this.router.navigate(['results'], { queryParams: { destination: destination } });
  }
}






