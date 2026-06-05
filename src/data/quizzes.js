export const quizzes = [
  {
    id: 1,
    courseId: 1,
    title: "Quiz : Salutations",
    emoji: "👋",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Comment dit-on 'Bonjour' en Darija ?",
        correct: "Salam 3alikum",
        options: ["Salam 3alikum", "Bslama", "Labas", "Shukran"],
        explanation: "'Salam 3alikum' est la salutation principale, littéralement 'la paix soit sur vous'."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Que signifie 'Labas' ?",
        correct: "Ça va",
        options: ["Au revoir", "Merci", "Ça va", "Comment tu t'appelles ?"],
        explanation: "'Labas' signifie 'ça va' ou 'pas de problème', c'est une réponse positive universelle."
      },
      {
        id: 3,
        type: "fill-blank",
        question: "Complète : '_____ 3lik ?' (Comment tu vas ?)",
        correct: "Labas",
        options: ["Bslama", "Labas", "Mzyan", "Salam"],
        explanation: "'Labas 3lik ?' est la façon de demander 'comment tu vas ?'"
      },
      {
        id: 4,
        type: "translate-to-french",
        question: "Comment dit-on 'Au revoir' en Darija ?",
        correct: "Bslama",
        options: ["Salam 3alikum", "Bslama", "Inshallah", "Yallah"],
        explanation: "'Bslama' signifie 'au revoir', littéralement 'en sécurité'."
      },
      {
        id: 5,
        type: "choose-meaning",
        question: "Quelle phrase signifie 'Ça fait longtemps !' ?",
        correct: "Shhal mnin ma shafnash",
        options: ["Salam 3alikum", "Mzyan bzzaf", "Shhal mnin ma shafnash", "Labas 3lik"],
        explanation: "'Shhal mnin ma shafnash' = littéralement 'depuis combien de temps on s'est pas vus !'"
      }
    ]
  },
  {
    id: 2,
    courseId: 2,
    title: "Quiz : Les Chiffres",
    emoji: "🔢",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Jouj' ?",
        correct: "2",
        options: ["1", "2", "3", "4"],
        explanation: "'Jouj' = deux. C'est un mot typiquement marocain."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on '5' en Darija ?",
        correct: "Khmsa",
        options: ["Rb3a", "Khmsa", "Tlata", "Sitta"],
        explanation: "'Khmsa' = cinq. C'est aussi le nom de la main de Fatima !"
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Wahd' ?",
        correct: "1",
        options: ["1", "10", "100", "1000"],
        explanation: "'Wahd' = un. Aussi utilisé pour dire 'quelqu'un'."
      },
      {
        id: 4,
        type: "choose-meaning",
        question: "Comment dit-on '3' en Darija ?",
        correct: "Tlata",
        options: ["Jouj", "Wahd", "Tlata", "Rb3a"],
        explanation: "'Tlata' = trois, proche de l'arabe classique 'thalatha'."
      },
      {
        id: 5,
        type: "translate-to-darija",
        question: "Comment dit-on '10' en Darija ?",
        correct: "3shra",
        options: ["3shra", "Khmsa", "Sitta", "Tlata"],
        explanation: "'3shra' = dix. Le '3' représente la lettre arabe 'aïn' (ع)."
      }
    ]
  },
  {
    id: 3,
    courseId: 3,
    title: "Quiz : Au Marché",
    emoji: "🛒",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Ghali bzzaf' ?",
        correct: "C'est très cher",
        options: ["C'est bon marché", "C'est très cher", "C'est délicieux", "C'est loin"],
        explanation: "'Ghali' = cher, 'bzzaf' = beaucoup/très. Expression utile pour négocier !"
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment demander 'combien ça coûte' ?",
        correct: "B-shhal had sh-shi",
        options: ["3tini sh-shi", "B-shhal had sh-shi", "Wash 3ndek", "Shukran bzzaf"],
        explanation: "'B-shhal had sh-shi' = combien coûte cette chose."
      },
      {
        id: 3,
        type: "fill-blank",
        question: "'_____ kilo d-tomatim' (Donne-moi un kilo de tomates)",
        correct: "3tini",
        options: ["3tini", "Wash", "Bzzaf", "Ghali"],
        explanation: "'3tini' = donne-moi. Formule essentielle pour commander au marché."
      },
      {
        id: 4,
        type: "choose-meaning",
        question: "Que signifie 'Wash 3ndek' ?",
        correct: "Est-ce que tu as ?",
        options: ["Merci", "Au revoir", "Est-ce que tu as ?", "C'est cher"],
        explanation: "'Wash' = est-ce que (marqueur interrogatif), '3ndek' = tu as."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Bzzaf' ?",
        correct: "Beaucoup / Très",
        options: ["Un peu", "Beaucoup / Très", "Pas du tout", "Peut-être"],
        explanation: "'Bzzaf' = beaucoup ou très. Mot ultra-utile en Darija !"
      }
    ]
  },
  {
    id: 4,
    courseId: 6,
    title: "Quiz : Expressions",
    emoji: "💬",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Mashi mshkil' ?",
        correct: "Pas de problème",
        options: ["C'est un problème", "Pas de problème", "Ça va mal", "C'est difficile"],
        explanation: "'Mashi mshkil' = pas de problème. Expression très courante !"
      },
      {
        id: 2,
        type: "choose-meaning",
        question: "Quand utilise-t-on 'Yallah' ?",
        correct: "Pour inciter à l'action / On y va",
        options: [
          "Pour dire au revoir",
          "Pour inciter à l'action / On y va",
          "Pour remercier",
          "Pour saluer"
        ],
        explanation: "'Yallah' = allez, viens, on y va ! Mot qui pousse à l'action."
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Daba' ?",
        correct: "Maintenant",
        options: ["Demain", "Hier", "Maintenant", "Bientôt"],
        explanation: "'Daba' = maintenant. Attention, 'daba daba' peut ironiquement vouloir dire 'dans un moment' !"
      },
      {
        id: 4,
        type: "translate-to-darija",
        question: "Comment dire 'bonne chance' en Darija ?",
        correct: "Allah ysahhel",
        options: ["Inshallah", "Allah ysahhel", "Bslama", "Mzyan"],
        explanation: "'Allah ysahhel' = que Dieu facilite, formule de souhait de réussite."
      },
      {
        id: 5,
        type: "fill-blank",
        question: "'Ghda _____ n-jiw.' (Demain inshallah on viendra)",
        correct: "Inshallah",
        options: ["Yallah", "Bslama", "Inshallah", "Daba"],
        explanation: "'Inshallah' = si Dieu le veut. Peut exprimer l'espoir ou poliment l'incertitude."
      }
    ]
  }
];
