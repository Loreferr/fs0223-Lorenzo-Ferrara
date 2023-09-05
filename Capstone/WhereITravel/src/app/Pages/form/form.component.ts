import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/Interfaces/question';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponent {
  personality: string = ''
  age: number = 0
  budget: number = 0
  destination: string = ''

  selectAnswer(questionIndex: number, option: string) {
    this.userAnswers[questionIndex] = option;
  }
  answers: { dimension: string, score: number }[] = [
    { dimension: 'E', score: 3 }, // Esempio di risposta per la dimensione E/I
    { dimension: 'I', score: 2 },
    { dimension: 'S', score: 4 }, // Esempio di risposta per la dimensione S/N
    { dimension: 'N', score: 1 },
    { dimension: 'T', score: 5 }, // Esempio di risposta per la dimensione T/F
    { dimension: 'F', score: 2 },
    { dimension: 'J', score: 4 }, // Esempio di risposta per la dimensione J/P
    { dimension: 'P', score: 3 },
  ];


  userAnswers: string[] = [];

   questions: Question[] = [
    {
      text: 'Quando incontri nuove persone, ti senti più...',
      options: ['Energizzato (Estroverso)', 'Riflessivo (Introverso)']
    },
    {
      text: 'Quando prendi decisioni importanti, tendi a fare affidamento su...',
      options: ['Dati concreti (Sensoriale)', 'Intuizioni (Intuitivo)']
    },
    {
      text: 'Nelle discussioni, sei più incline a seguire la tua...',
      options: ['Logica (Pensiero)', 'Cuore (Sentimento)']
    },
    {
      text: 'Nel tuo lavoro, preferisci avere...',
      options: ['Struttura e pianificazione (Giudizio)', 'Flessibilità e adattabilità (Percezione)']
    },
    {
      text: 'Sei più propenso a...',
      options: ['Pianificare attentamente le attività (Giudizio)', "Lasciare spazio per l'improvvisazione (Percezione)"]
    },
    {
      text: 'Ti piace passare il tempo con...',
      options: ['Molte persone (Estroverso)', 'Pochi amici intimi (Introverso)']
    },
    {
      text: 'Quando affronti un problema, solitamente segui il tuo...',
      options: ['Ragionamento (Pensiero)', 'Istinto (Sentimento)']
    },
    {
      text: 'Preferisci situazioni in cui hai chiare...',
      options: ['Regole e struttura (Giudizio)', 'Flessibilità e apertura (Percezione)']
    },
    {
      text: 'Ti senti più a tuo agio con...',
      options: ['Fatti e dati concreti (Sensoriale)', 'Concetti e idee astratte (Intuitivo)']
    },
    {
      text: 'Nelle relazioni, tendi a essere più...',
      options: ['Obiettivo e critico (Pensiero)', 'Empatico e comprensivo (Sentimento)']
    },
    {
      text: 'Quando pianifichi un viaggio, preferisci...',
      options: ['Avere un itinerario dettagliato (Giudizio)', "Lasciare spazio per l'avventura (Percezione)"]
    },
    {
      text: 'Ti senti più stimolato da...',
      options: ['Situazioni sociali e interazioni (Estroverso)', 'Riflessioni e solitudine (Introverso)']
    },
    {
      text: 'Sei più orientato verso...',
      options: ['La realtà tangibile (Sensoriale)', 'Le possibilità future (Intuitivo)']
    },
    {
      text: 'Ti consideri più un...',
      options: ['Pianificatore (Giudizio)', 'Esploratore (Percezione)']
    },
    {
      text: 'Nelle tue decisioni, tendi a dare maggior peso...',
      options: ["Alla logica e all'obiettività (Pensiero)", 'Alle tue emozioni e ai valori personali (Sentimento)']
    }
  ];

  getMBTIResult(): string {
    const extrovertScore = this.calculateScore(this.answers, 'E');
    const introvertScore = this.calculateScore(this.answers, 'I');
    const sensingScore = this.calculateScore(this.answers, 'S');
    const intuitionScore = this.calculateScore(this.answers, 'N');
    const thinkingScore = this.calculateScore(this.answers, 'T');
    const feelingScore = this.calculateScore(this.answers, 'F');
    const judgingScore = this.calculateScore(this.answers, 'J');
    const perceivingScore = this.calculateScore(this.answers, 'P');

    // Resto del codice per determinare il tipo di personalità MBTI



    let mbtiResult = '';

    // Determina la dimensione E/I dominante
    if (extrovertScore > introvertScore) {
      mbtiResult += 'E';
    } else {
      mbtiResult += 'I';
    }

    // Determina la dimensione S/N dominante
    if (sensingScore > intuitionScore) {
      mbtiResult += 'S';
    } else {
      mbtiResult += 'N';
    }

    // Determina la dimensione T/F dominante
    if (thinkingScore > feelingScore) {
      mbtiResult += 'T';
    } else {
      mbtiResult += 'F';
    }

    // Determina la dimensione J/P dominante
    if (judgingScore > perceivingScore) {
      mbtiResult += 'J';
    } else {
      mbtiResult += 'P';
    }

    // Ora mbtiResult contiene il tipo di personalità MBTI basato sulle dimensioni dominanti
    return mbtiResult;
  }

  mbtiDestinations: Record<string, string> = {
    'ENFP': 'Destinazione A',
    'INTJ': 'Destinazione B',
    'ESFP': 'Destinazione C',
    'ISTP': 'Destinazione D',
    // Aggiungi altre associazioni per gli altri tipi di personalità MBTI
    'ESTJ': 'Destinazione E',
    'ISFJ': 'Destinazione F',
    'ENTJ': 'Destinazione G',
    'INFJ': 'Destinazione H',
    'ESTP': 'Destinazione I',
    'ISFP': 'Destinazione J',
    'ENTP': 'Destinazione K',
    'INFP': 'Destinazione L',
    'ESTJ2': 'Destinazione M',
    'ESFJ': 'Destinazione N',
    'INTP': 'Destinazione O',
    'INFP2': 'Destinazione P',
  };

   calculateScore(answers: { dimension: string, score: number }[], dimension: string): number {
    // Filtra le risposte solo per la dimensione specificata
    const dimensionAnswers = answers.filter(answer => answer.dimension === dimension);

    // Calcola il punteggio totale per la dimensione
    const totalScore = dimensionAnswers.reduce((acc, answer) => acc + answer.score, 0);

    return totalScore;
  }

  /*onFormSubmit(form: NgForm) {
    // Calcola il tipo di personalità MBTI basato sulle risposte dell'utente
    const mbtiResult = this.getMBTIResult();

    // Ottieni la destinazione associata al tipo di personalità
    const destination = this.mbtiDestinations[mbtiResult];

    // Reindirizza l'utente alla pagina dei risultati con la destinazione
    this.router.navigate(['results'], { queryParams: { destination: destination } });

    // Resetta il form
    this.resetForm(form);
  }*/





  @ViewChild('formRef') formRef: any;
  constructor(private router: Router){}
  resetForm(form: NgForm) {
    form.resetForm();
  }


  onFormSubmit() {
    if (this.personality === 'avventuroso') {
      if (this.age < 30) {
        this.destination = 'Montagna';
      } else {
        this.destination = 'Spiaggia';
      }
    } else if (this.personality === 'cultura') {
      if (this.age < 30) {
        this.destination = 'Città storiche';
      } else {
        this.destination = 'Musei';
      }
    } else {
      this.destination = 'Destinazione generica';
    }


    this.router.navigate(['results'], { queryParams: { destination: this.destination } });
    this.formRef.resetForm()
  }


}
