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
  },
  {
    id: 5,
    courseId: 8,
    title: "Quiz : Émotions & Météo",
    emoji: "🌤️",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Ferhan' ?",
        correct: "Content / Heureux",
        options: ["Triste", "Content / Heureux", "Fatigué", "Effrayé"],
        explanation: "'Ferhan' = content ou heureux. 'Ferhana' pour le féminin."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'Il pleut' en Darija ?",
        correct: "Kayna shta",
        options: ["Kayna shta", "Kayn berd", "Kayn shemsh", "Kayn rih"],
        explanation: "'Kayna shta' = il y a de la pluie / il pleut. 'Shta' = la pluie."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Quelle émotion exprime 'Hzin' ?",
        correct: "Tristesse",
        options: ["Joie", "Tristesse", "Colère", "Surprise"],
        explanation: "'Hzin/Hzina' = triste. La racine 'hzn' exprime la tristesse en arabe."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'_____ bzzaf f-mrakesh f-sayf.' (Il fait très chaud à Marrakech en été)",
        correct: "Shkhoun",
        options: ["Berd", "Shta", "Shkhoun", "Rih"],
        explanation: "'Shkhoun' = chaud. 'Berd' = froid. Deux mots clés pour la météo."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie '3yyan' ?",
        correct: "Fatigué / Malade",
        options: ["Content", "En colère", "Fatigué / Malade", "Ennuyé"],
        explanation: "'3yyan/3yyana' = fatigué(e) ou malade selon le contexte."
      }
    ]
  },
  {
    id: 6,
    courseId: 12,
    title: "Quiz : La Maison & Le Corps",
    emoji: "🏠",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Dar' ?",
        correct: "Maison",
        options: ["Chambre", "Maison", "Cuisine", "Salon"],
        explanation: "'Dar' = maison ou chez soi. 'Ana f-dar' = je suis à la maison."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'tête' en Darija ?",
        correct: "Ras",
        options: ["Rejl", "Draa", "Ras", "Qelb"],
        explanation: "'Ras' = tête. Aussi utilisé familièrement pour 'chef' ou 'sommet'."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Que désigne 'Bit l-ma' ?",
        correct: "Salle de bain",
        options: ["Cuisine", "Salon", "Salle de bain", "Chambre à coucher"],
        explanation: "'Bit' = pièce, 'l-ma' = l'eau. Littéralement 'la pièce de l'eau', c'est la salle de bain."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'Khaydini _____.' (J'ai mal à la tête)",
        correct: "Ras",
        options: ["Bit", "Sali", "Ras", "Bab"],
        explanation: "'Khaydini ras' = j'ai mal à la tête. 'Khaydini' = ça me fait mal."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Shbbak' ?",
        correct: "Fenêtre",
        options: ["Porte", "Fenêtre", "Mur", "Escalier"],
        explanation: "'Shbbak' = fenêtre. Vient de l'arabe classique 'shubbak'."
      }
    ]
  },
  {
    id: 7,
    courseId: 7,
    title: "Quiz : Transports & Directions",
    emoji: "🚌",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Tiyara' ?",
        correct: "Avion",
        options: ["Bus", "Train", "Avion", "Voiture"],
        explanation: "'Tiyara' = avion. Vient de 'tar' (voler). Mot très imagé !"
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'à gauche' en Darija ?",
        correct: "L-lisar",
        options: ["L-limin", "L-lisar", "Negda", "Mn hnaya"],
        explanation: "'L-lisar' = à gauche. Emprunté du français 'la gauche' !"
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Que signifie 'Fein kayn' ?",
        correct: "Où se trouve ?",
        options: ["C'est loin", "Tourne à droite", "Où se trouve ?", "Va tout droit"],
        explanation: "'Fein kayn' = où se trouve. 'Fein' = où, 'kayn' = il y a / se trouve."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'Mshi _____ hta l-place.' (Va tout droit jusqu'à la place)",
        correct: "Negda",
        options: ["L-limin", "L-lisar", "Negda", "B3id"],
        explanation: "'Negda' = tout droit, en ligne droite. Indispensable pour s'orienter."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Qrib' ?",
        correct: "Proche / Près",
        options: ["Loin", "À droite", "Proche / Près", "Derrière"],
        explanation: "'Qrib' = proche/près. Son contraire est 'b3id' = loin."
      }
    ]
  },
  {
    id: 8,
    courseId: 11,
    title: "Quiz : Le Travail & Le Temps",
    emoji: "💼",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'L-flous' ?",
        correct: "L'argent",
        options: ["Le patron", "Le travail", "L'argent", "Le salaire"],
        explanation: "'L-flous' = l'argent. Toujours au pluriel en Darija. Vient du grec 'obolos'."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'demain' en Darija ?",
        correct: "Ghda",
        options: ["Lbareh", "Ghda", "Nhar", "Simana"],
        explanation: "'Ghda' = demain. Souvent suivi de 'inshallah' pour exprimer l'espoir."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Que signifie 'Rtabt' ?",
        correct: "Je me suis reposé(e)",
        options: ["J'ai travaillé", "Je me suis reposé(e)", "J'ai voyagé", "J'ai dormi"],
        explanation: "'Rtabt' = je me suis reposé(e). Passé du verbe 'rtah' (se reposer)."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'_____ mezyana walakin b3ida.' (Le boulot est bien mais c'est loin)",
        correct: "L-khedma",
        options: ["L-mdir", "L-flous", "L-khedma", "L-mokhdem"],
        explanation: "'L-khedma' = le travail/boulot. Plus familier que 'l-3aml'."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Lbareh' ?",
        correct: "Hier",
        options: ["Demain", "Aujourd'hui", "Hier", "La semaine dernière"],
        explanation: "'Lbareh' = hier. Très courant dans les récits du quotidien."
      }
    ]
  },
  {
    id: 9,
    courseId: 7,
    title: "Quiz : Les Directions",
    emoji: "🧭",
    difficulty: "Intermédiaire",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'L-limin' ?",
        correct: "À droite",
        options: ["À gauche", "Tout droit", "À droite", "En arrière"],
        explanation: "'L-limin' = à droite. Son opposé est 'l-lisar' (à gauche), emprunté au français."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'tournez à gauche' en Darija ?",
        correct: "Dir l-lisar",
        options: ["Dir l-limin", "Dir l-lisar", "Mshi negda", "Rja3 lura"],
        explanation: "'Dir' = fais/tourne, 'l-lisar' = à gauche. 'Dir l-lisar' = tournez à gauche."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Que signifie 'B3id' ?",
        correct: "Loin",
        options: ["Proche", "Loin", "Derrière", "Devant"],
        explanation: "'B3id' = loin. Son contraire est 'qrib' = proche/près."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'Mshi _____ hta l-jame3.' (Va tout droit jusqu'à la mosquée)",
        correct: "Negda",
        options: ["L-lisar", "Lura", "Negda", "Qdam"],
        explanation: "'Negda' = tout droit. 'Qdam' = devant, 'lura' = derrière."
      },
      {
        id: 5,
        type: "match-pairs",
        question: "Associe chaque mot Darija à sa traduction française",
        correct: '[["Negda","Tout droit"],["Qrib","Près"],["B3id","Loin"],["Lura","Derrière"]]',
        options: []
      },
      {
        id: 6,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'La gare se trouve à droite après le feu'",
        correct: "L-gar kayna l-limin mn b3d l-feu",
        options: ["l-feu", "L-gar", "l-limin", "mn", "b3d", "kayna"]
      }
    ]
  },
  {
    id: 10,
    courseId: 10,
    title: "Quiz : Le Corps & Santé",
    emoji: "🩺",
    difficulty: "Intermédiaire",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Khaydini rssi' ?",
        correct: "J'ai mal à la tête",
        options: ["J'ai mal au ventre", "J'ai mal à la tête", "J'ai mal au dos", "J'ai de la fièvre"],
        explanation: "'Khaydini' = ça me fait mal, 'rss' = tête. Expression très courante chez le médecin."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'bras' en Darija ?",
        correct: "Draa",
        options: ["Rejl", "Draa", "Ras", "Yed"],
        explanation: "'Draa' = bras. 'Yed' = main, 'rejl' = jambe, 'ras' = tête."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Que signifie 'L-kbda' ?",
        correct: "Le foie",
        options: ["Le cœur", "Le foie", "Le poumon", "L'estomac"],
        explanation: "'L-kbda' = le foie. Organe très important symboliquement en culture marocaine (terme d'affection)."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'3ndi _____.' (J'ai de la fièvre)",
        correct: "Skhana",
        options: ["Berd", "Skhana", "Dwa", "Docteur"],
        explanation: "'Skhana' = fièvre/chaleur. '3ndi skhana' = j'ai de la fièvre."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Dwa' ?",
        correct: "Médicament",
        options: ["Médecin", "Hôpital", "Médicament", "Ordonnance"],
        explanation: "'Dwa' = médicament ou remède. 'Sbitar' = hôpital, 'tbib' = médecin."
      },
      {
        id: 6,
        type: "translate-to-darija",
        question: "Comment dire 'Je ne me sens pas bien' en Darija ?",
        correct: "Ma hssitsh b rasi mezyan",
        options: ["Ana ferhan", "Ma hssitsh b rasi mezyan", "Labas 3liya", "3ndi l-flous"],
        explanation: "'Ma hssitsh b rasi mezyan' = je ne me sens pas bien. 'Rasi' = mon état/ma tête."
      }
    ]
  },
  {
    id: 11,
    courseId: 12,
    title: "Quiz : La Maison & Objets",
    emoji: "🏡",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Bab' ?",
        correct: "Porte",
        options: ["Fenêtre", "Porte", "Mur", "Toit"],
        explanation: "'Bab' = porte. Mot commun à beaucoup de langues sémitiques."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'cuisine' en Darija ?",
        correct: "Kuzina",
        options: ["Salon", "Kuzina", "Bit", "Hammam"],
        explanation: "'Kuzina' = cuisine, emprunté au français/espagnol. 'Bit' = pièce/chambre."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Que signifie 'Tebla' ?",
        correct: "Table",
        options: ["Chaise", "Table", "Lit", "Armoire"],
        explanation: "'Tebla' = table. Emprunté au français ou espagnol 'tabla'."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'L-kursi kayn qdam _____.' (La chaise est devant la table)",
        correct: "Tebla",
        options: ["Bab", "Tebla", "Shbbak", "Frasha"],
        explanation: "'Tebla' = table. 'Kursi' = chaise, 'frasha' = lit/matelas."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Frasha' ?",
        correct: "Lit / Matelas",
        options: ["Canapé", "Table", "Lit / Matelas", "Tapis"],
        explanation: "'Frasha' = lit ou matelas selon le contexte. 'Namiya' = oreiller."
      },
      {
        id: 6,
        type: "match-pairs",
        question: "Associe chaque mot Darija à sa traduction française",
        correct: '[["Bab","Porte"],["Shbbak","Fenêtre"],["Kuzina","Cuisine"],["Frasha","Lit"]]',
        options: []
      }
    ]
  },
  {
    id: 12,
    courseId: 13,
    title: "Quiz : Les Transports",
    emoji: "🚗",
    difficulty: "Intermédiaire",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Tomobil' ?",
        correct: "Voiture",
        options: ["Bus", "Voiture", "Train", "Moto"],
        explanation: "'Tomobil' = voiture, emprunté de 'automobile'. Aussi dit 'karhba'."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'train' en Darija ?",
        correct: "Tran",
        options: ["Tiyara", "Tran", "Tobis", "Taxi"],
        explanation: "'Tran' = train, emprunté au français. 'Tobis' = bus, 'tiyara' = avion."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Que signifie 'Mahtta' ?",
        correct: "Gare / Arrêt",
        options: ["Route", "Gare / Arrêt", "Billet", "Chauffeur"],
        explanation: "'Mahtta' = gare, arrêt ou station selon le transport utilisé."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'Bgha n-mshi b-_____.' (Je veux aller en taxi)",
        correct: "Taxi",
        options: ["Karhba", "Taxi", "Tran", "Rejliya"],
        explanation: "'Taxi' = taxi (petit ou grand). 'Rejliya' = à pied, 'karhba' = voiture."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Warka d-tran' ?",
        correct: "Billet de train",
        options: ["Horaire de train", "Billet de train", "Gare centrale", "Retard de train"],
        explanation: "'Warka' = billet/ticket (aussi papier), 'd-tran' = du train."
      },
      {
        id: 6,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Je veux acheter un billet pour Casablanca'",
        correct: "Bgha nshtri warka l-Casablanca",
        options: ["nshtri", "l-Casablanca", "Bgha", "warka"]
      }
    ]
  },
  {
    id: 13,
    courseId: 14,
    title: "Quiz : Le Temps & Calendrier",
    emoji: "📅",
    difficulty: "Intermédiaire",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Nhar' ?",
        correct: "Jour",
        options: ["Semaine", "Mois", "Jour", "Année"],
        explanation: "'Nhar' = jour. 'Nhar l-khmis' = le jeudi, par exemple."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'semaine' en Darija ?",
        correct: "Simana",
        options: ["Shhar", "Simana", "Sna", "Nhar"],
        explanation: "'Simana' = semaine, emprunté de l'espagnol 'semana'."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Quel jour est 'Nhar l-jm3a' ?",
        correct: "Vendredi",
        options: ["Samedi", "Dimanche", "Lundi", "Vendredi"],
        explanation: "'Nhar l-jm3a' = vendredi, le jour de la grande prière collective (jm3a = rassemblement)."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'_____ kayn f-rabi3.' (Le printemps est en avril)",
        correct: "Rabi3",
        options: ["Shta", "Sayf", "Rabi3", "Khrif"],
        explanation: "'Rabi3' = printemps. 'Sayf' = été, 'khrif' = automne, 'shta' = hiver."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Dghiya' ?",
        correct: "Tout à l'heure / Dans un moment",
        options: ["Hier", "Tout à l'heure / Dans un moment", "La semaine prochaine", "Ce matin"],
        explanation: "'Dghiya' = tout à l'heure, dans un instant. Exprime la proximité temporelle."
      },
      {
        id: 6,
        type: "match-pairs",
        question: "Associe chaque mot Darija à sa traduction française",
        correct: '[["Lbareh","Hier"],["Ghda","Demain"],["Daba","Maintenant"],["Dghiya","Bientôt"]]',
        options: []
      }
    ]
  },
  {
    id: 14,
    courseId: 11,
    title: "Quiz : Le Travail",
    emoji: "👔",
    difficulty: "Avancé",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Mdir' ?",
        correct: "Directeur / Patron",
        options: ["Employé", "Directeur / Patron", "Collègue", "Client"],
        explanation: "'Mdir' = directeur, patron ou manager. Vient de 'dir' (faire, gérer)."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'réunion' en Darija ?",
        correct: "Ijtime3",
        options: ["Ijtime3", "Khedma", "Maktab", "Mokhdem"],
        explanation: "'Ijtime3' = réunion, rencontre professionnelle. Vient de 'jma3' (rassembler)."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Que signifie 'Maktab' ?",
        correct: "Bureau",
        options: ["Usine", "Bureau", "Chantier", "Magasin"],
        explanation: "'Maktab' = bureau (lieu de travail). Aussi 'maktaba' = bibliothèque."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'Khasni n-khdm f-had _____.' (Je dois travailler sur ce dossier)",
        correct: "Malf",
        options: ["Ijtime3", "Malf", "Maktab", "Rasm"],
        explanation: "'Malf' = dossier/fichier. Vient du verbe 'laf' (enrouler, assembler)."
      },
      {
        id: 5,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'J'ai une réunion importante demain matin'",
        correct: "3ndi ijtime3 muhimm ghda f-sbah",
        options: ["f-sbah", "3ndi", "ghda", "ijtime3", "muhimm"]
      },
      {
        id: 6,
        type: "translate-to-french",
        question: "Que signifie 'Ajr' ?",
        correct: "Salaire",
        options: ["Prime", "Salaire", "Pension", "Avance"],
        explanation: "'Ajr' = salaire ou rémunération. 'L-flous' est plus familier pour parler d'argent."
      }
    ]
  },
  {
    id: 15,
    courseId: 1,
    title: "Grand Quiz Débutant",
    emoji: "🌟",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Salam 3alikum' ?",
        correct: "La paix soit sur vous / Bonjour",
        options: ["Au revoir", "La paix soit sur vous / Bonjour", "Comment tu vas ?", "Merci"],
        explanation: "'Salam 3alikum' est la salutation islamique universelle."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on '7' en Darija ?",
        correct: "Sb3a",
        options: ["Sitta", "Sb3a", "Tmnya", "Ts3oud"],
        explanation: "'Sb3a' = sept. Le '3' représente la lettre arabe 'aïn'."
      },
      {
        id: 3,
        type: "match-pairs",
        question: "Associe chaque mot Darija à sa traduction française",
        correct: '[["Salam","Bonjour"],["Bslama","Au revoir"],["Shukran","Merci"],["Smeh liya","Excuse-moi"]]',
        options: []
      },
      {
        id: 4,
        type: "choose-meaning",
        question: "Que signifie 'Ferhan' ?",
        correct: "Content / Heureux",
        options: ["Triste", "Fatigué", "Content / Heureux", "En colère"],
        explanation: "'Ferhan/Ferhana' = content(e). Mot très expressif en Darija."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Dar' ?",
        correct: "Maison",
        options: ["Cuisine", "Chambre", "Maison", "Jardin"],
        explanation: "'Dar' = maison. 'Ana f-dari' = je suis chez moi."
      },
      {
        id: 6,
        type: "fill-blank",
        question: "'_____ l-ma min fdlek.' (Donne-moi de l'eau s'il te plaît)",
        correct: "3tini",
        options: ["Shri", "3tini", "Kul", "Jib"],
        explanation: "'3tini' = donne-moi. Formule de base pour demander quelque chose."
      },
      {
        id: 7,
        type: "match-pairs",
        question: "Associe chaque mot Darija à sa traduction française",
        correct: '[["Wahd","Un"],["Jouj","Deux"],["Tlata","Trois"],["Rb3a","Quatre"]]',
        options: []
      },
      {
        id: 8,
        type: "translate-to-darija",
        question: "Comment dit-on 'beaucoup' en Darija ?",
        correct: "Bzzaf",
        options: ["Shwiya", "Bzzaf", "Hetta", "Ghi"],
        explanation: "'Bzzaf' = beaucoup ou très. 'Shwiya' = un peu."
      }
    ]
  },
  {
    id: 16,
    courseId: 3,
    title: "Grand Quiz Intermédiaire",
    emoji: "⭐",
    difficulty: "Intermédiaire",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'B-shhal had sh-shi' ?",
        correct: "Combien coûte ceci ?",
        options: ["C'est trop cher", "Combien coûte ceci ?", "Je veux acheter", "C'est bon marché"],
        explanation: "'B-shhal' = combien, 'had sh-shi' = cette chose. Phrase clé au marché."
      },
      {
        id: 2,
        type: "match-pairs",
        question: "Associe chaque mot Darija à sa traduction française",
        correct: '[["Fein","Où"],["Kifahs","Comment"],["3lash","Pourquoi"],["Shhal","Combien"]]',
        options: []
      },
      {
        id: 3,
        type: "translate-to-darija",
        question: "Comment dit-on 'je ne comprends pas' en Darija ?",
        correct: "Ma fhemtsh",
        options: ["Ma 3reftsh", "Ma fhemtsh", "Ma sme3tsh", "Ma shftsh"],
        explanation: "'Ma fhemtsh' = je n'ai pas compris. 'Fhem' = comprendre."
      },
      {
        id: 4,
        type: "choose-meaning",
        question: "Que signifie 'Fein kayn l-hammam' ?",
        correct: "Où se trouvent les toilettes ?",
        options: ["Est-ce qu'il y a une douche ?", "Où se trouvent les toilettes ?", "Où est le marché ?", "C'est loin le bain ?"],
        explanation: "'Fein kayn' = où se trouve, 'l-hammam' = les toilettes/bain public."
      },
      {
        id: 5,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Il fait beau aujourd'hui'",
        correct: "L-jaw mezyan l-yum",
        options: ["l-yum", "mezyan", "L-jaw"]
      },
      {
        id: 6,
        type: "fill-blank",
        question: "'_____ bzzaf f-sayf f-mrakesh.' (Il fait très chaud en été à Marrakech)",
        correct: "Shkhoun",
        options: ["Berd", "Shkhoun", "Rih", "Shta"],
        explanation: "'Shkhoun' = chaud. 'Berd' = froid, deux mots météo indispensables."
      },
      {
        id: 7,
        type: "match-pairs",
        question: "Associe chaque mot Darija à sa traduction française",
        correct: '[["Qrib","Proche"],["B3id","Loin"],["Negda","Tout droit"],["L-limin","À droite"]]',
        options: []
      },
      {
        id: 8,
        type: "translate-to-french",
        question: "Que signifie 'Khaydini bt-ni' ?",
        correct: "J'ai mal au ventre",
        options: ["J'ai mal au dos", "J'ai mal à la tête", "J'ai mal au ventre", "J'ai mal aux pieds"],
        explanation: "'Khaydini' = ça me fait mal, 'bt-ni' = mon ventre."
      }
    ]
  },
  {
    id: 17,
    courseId: 6,
    title: "Grand Quiz Avancé",
    emoji: "🏆",
    difficulty: "Avancé",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Ma3ndish bqiya' ?",
        correct: "Je n'ai pas de monnaie",
        options: ["Je n'ai pas d'argent", "Je n'ai pas de monnaie", "Je n'ai pas de billet", "Je n'ai pas de carte"],
        explanation: "'Bqiya' = monnaie/reste. 'Ma3ndish' = je n'ai pas. Expression courante en taxi."
      },
      {
        id: 2,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'J'ai besoin d'un bon médecin'",
        correct: "Khasni tbib mezyan",
        options: ["tbib", "Khasni", "mezyan"]
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Que signifie 'Khasni n-mshi' ?",
        correct: "Je dois partir",
        options: ["Je veux rester", "Je dois partir", "Je peux venir", "Je suis pressé"],
        explanation: "'Khasni' = j'ai besoin de / je dois. 'N-mshi' = aller/partir."
      },
      {
        id: 4,
        type: "translate-to-darija",
        question: "Comment dit-on 'je cherche un appartement' en Darija ?",
        correct: "Kanqllb 3la appartement",
        options: ["Bgha nshtri dar", "Kanqllb 3la appartement", "3ndi dar kbira", "Msha l-dar"],
        explanation: "'Kanqllb 3la' = je cherche. 'Appartement' est utilisé tel quel en Darija marocaine."
      },
      {
        id: 5,
        type: "fill-blank",
        question: "'L-ijtime3 _____ f-dak s-sa3a.' (La réunion a commencé à cette heure)",
        correct: "Bda",
        options: ["Khmmal", "Bda", "Wqf", "Rja3"],
        explanation: "'Bda' = a commencé. 'Bda/bdat' selon le genre."
      },
      {
        id: 6,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Le patron a dit que c'est important'",
        correct: "L-mdir gal blli hiya muhimma",
        options: ["blli", "L-mdir", "muhimma", "gal", "hiya"]
      },
      {
        id: 7,
        type: "translate-to-french",
        question: "Que signifie 'Wash mzyan m3ak' ?",
        correct: "Est-ce que ça va pour toi ?",
        options: ["Tu es prêt ?", "Est-ce que ça va pour toi ?", "Tu as besoin d'aide ?", "Tu comprends ?"],
        explanation: "'Wash' = est-ce que, 'mzyan' = bien, 'm3ak' = avec toi/pour toi."
      },
      {
        id: 8,
        type: "choose-meaning",
        question: "Que signifie 'Daret liya' ?",
        correct: "Elle me l'a fait / On me l'a fait",
        options: ["Elle est partie", "Elle me l'a fait / On me l'a fait", "C'est arrivé", "Elle a dit"],
        explanation: "'Dar' = faire, 'daret liya' = elle me l'a fait. Souvent utilisé pour raconter un incident."
      }
    ]
  },
  {
    id: 18,
    courseId: 2,
    title: "Quiz Vitesse : Vocabulaire",
    emoji: "⚡",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Khmsa' ?",
        correct: "5",
        options: ["3", "5", "7", "9"],
        explanation: "'Khmsa' = cinq."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on '8' en Darija ?",
        correct: "Tmnya",
        options: ["Sb3a", "Tmnya", "Ts3oud", "3shra"],
        explanation: "'Tmnya' = huit."
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Qelb' ?",
        correct: "Cœur",
        options: ["Tête", "Main", "Cœur", "Pied"],
        explanation: "'Qelb' = cœur."
      },
      {
        id: 4,
        type: "translate-to-darija",
        question: "Comment dit-on 'bonjour' (informel) en Darija ?",
        correct: "Salam",
        options: ["Bslama", "Salam", "Labas", "Merhba"],
        explanation: "'Salam' = bonjour (version courte et informelle)."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Bab' ?",
        correct: "Porte",
        options: ["Fenêtre", "Toit", "Porte", "Mur"],
        explanation: "'Bab' = porte."
      },
      {
        id: 6,
        type: "translate-to-darija",
        question: "Comment dit-on 'merci' en Darija ?",
        correct: "Shukran",
        options: ["Salam", "Bslama", "Shukran", "Inshallah"],
        explanation: "'Shukran' = merci. Emprunté à l'arabe classique."
      },
      {
        id: 7,
        type: "translate-to-french",
        question: "Que signifie 'Rejl' ?",
        correct: "Pied / Jambe",
        options: ["Bras", "Main", "Pied / Jambe", "Dos"],
        explanation: "'Rejl' = pied ou jambe."
      },
      {
        id: 8,
        type: "translate-to-darija",
        question: "Comment dit-on '100' en Darija ?",
        correct: "Mya",
        options: ["3shra", "Miyya", "Mya", "Alf"],
        explanation: "'Mya' = cent. 'Alf' = mille."
      },
      {
        id: 9,
        type: "translate-to-french",
        question: "Que signifie 'Kuzina' ?",
        correct: "Cuisine",
        options: ["Salon", "Cuisine", "Chambre", "Salle de bain"],
        explanation: "'Kuzina' = cuisine."
      },
      {
        id: 10,
        type: "translate-to-darija",
        question: "Comment dit-on 'eau' en Darija ?",
        correct: "L-ma",
        options: ["L-khobz", "L-ma", "L-atay", "L-hlib"],
        explanation: "'L-ma' = l'eau. 'L-atay' = le thé, 'l-hlib' = le lait."
      }
    ]
  },
  {
    id: 19,
    courseId: 6,
    title: "Quiz : Expressions Idiomatiques",
    emoji: "🗣️",
    difficulty: "Avancé",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Lli fat mat' ?",
        correct: "Ce qui est passé est passé / Oublions le passé",
        options: ["Il est mort depuis longtemps", "Ce qui est passé est passé / Oublions le passé", "Celui qui part revient", "Le temps file vite"],
        explanation: "'Lli fat mat' = littéralement 'ce qui est parti est mort'. Expression pour tourner la page."
      },
      {
        id: 2,
        type: "choose-meaning",
        question: "Que signifie l'expression 'Allah ykhlef' ?",
        correct: "Que Dieu compense / Tu seras remboursé",
        options: [
          "Que Dieu pardonne",
          "Que Dieu compense / Tu seras remboursé",
          "Que Dieu aide",
          "Que Dieu protège"
        ],
        explanation: "'Allah ykhlef' = que Dieu compense ce que tu as dépensé/donné. Expression de gratitude."
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Darbet f-hammou' ?",
        correct: "Ça lui est passé par-dessus la tête / Il s'en fiche",
        options: ["Il a frappé quelqu'un", "Ça lui est passé par-dessus la tête / Il s'en fiche", "Il a eu un accident", "Il a perdu son calme"],
        explanation: "'Darbet f-hammou' = ça l'a touché dans son souci = il ne s'en préoccupe pas."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'_____ 3lik.' (Que Dieu ait pitié de toi / Sois prudent)",
        correct: "Allah ysster",
        options: ["Inshallah", "Allah ysster", "Mashi mshkil", "Allah ysahhel"],
        explanation: "'Allah ysster' = que Dieu protège/voile. Peut exprimer l'inquiétude ou l'avertissement."
      },
      {
        id: 5,
        type: "choose-meaning",
        question: "Que signifie 'Rah msha f-7alou' ?",
        correct: "Il est parti sans se retourner / Il a filé",
        options: [
          "Il est devenu fou",
          "Il est parti sans se retourner / Il a filé",
          "Il s'est perdu",
          "Il est allé chez lui"
        ],
        explanation: "'Msha f-7alou' = est parti dans son état = a filé tranquillement sans rien dire."
      },
      {
        id: 6,
        type: "translate-to-french",
        question: "Que signifie 'Walu' ?",
        correct: "Rien / Zéro",
        options: ["Quelque chose", "Beaucoup", "Rien / Zéro", "Peu"],
        explanation: "'Walu' = rien, zéro, nada. Expression familière très courante."
      }
    ]
  },
  {
    id: 20,
    courseId: 1,
    title: "Quiz Final : Tout Niveaux",
    emoji: "🎓",
    difficulty: "Avancé",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Wash mzyan 3ndek ?' ",
        correct: "Est-ce que tu vas bien ?",
        options: ["Tu as quelque chose ?", "Est-ce que tu vas bien ?", "Tu as besoin de moi ?", "Où es-tu ?"],
        explanation: "'Wash' = est-ce que, 'mzyan' = bien, '3ndek' = chez toi / avec toi."
      },
      {
        id: 2,
        type: "match-pairs",
        question: "Associe chaque mot Darija à sa traduction française",
        correct: '[["Ferhan","Content"],["Hzin","Triste"],["3yyan","Fatigué"],["Mri9","Malade"]]',
        options: []
      },
      {
        id: 3,
        type: "translate-to-darija",
        question: "Comment dit-on 'je ne sais pas' en Darija ?",
        correct: "Ma 3reftsh",
        options: ["Ma fhemtsh", "Ma 3reftsh", "Ma sme3tsh", "Walu"],
        explanation: "'Ma 3reftsh' = je ne sais pas. '3ref' = savoir/connaître."
      },
      {
        id: 4,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Je cherche la gare de Casablanca'",
        correct: "Kanqllb 3la mahtta Casablanca",
        options: ["Casablanca", "3la", "Kanqllb", "mahtta"]
      },
      {
        id: 5,
        type: "choose-meaning",
        question: "Que signifie 'Safi' utilisé seul en fin de phrase ?",
        correct: "C'est bon / C'est terminé / OK",
        options: [
          "Ce n'est pas encore prêt",
          "C'est bon / C'est terminé / OK",
          "Continue",
          "Peut-être"
        ],
        explanation: "'Safi' = c'est assez, c'est bon, c'est terminé. Mot ultra-polyvalent en Darija."
      },
      {
        id: 6,
        type: "fill-blank",
        question: "'Msha l-sbitar hit _____ bzzaf.' (Il est allé à l'hôpital parce qu'il était très malade)",
        correct: "Kan 3yyan",
        options: ["Kan ferhan", "Kan 3yyan", "Kan b3id", "Kan ghali"],
        explanation: "'Kan 3yyan' = il était malade/fatigué. 'Hit' = parce que."
      },
      {
        id: 7,
        type: "translate-to-french",
        question: "Que signifie 'Bgha yjib liya' ?",
        correct: "Il veut me l'apporter",
        options: ["Il veut partir", "Il veut me l'apporter", "Il veut acheter", "Il veut savoir"],
        explanation: "'Bgha' = il/elle veut, 'yjib' = apporter, 'liya' = pour moi."
      },
      {
        id: 8,
        type: "translate-to-darija",
        question: "Comment dit-on 'c'est délicieux' en Darija ?",
        correct: "Bnin bzzaf",
        options: ["Ghali bzzaf", "Bnin bzzaf", "Mzyan bzzaf", "Kbir bzzaf"],
        explanation: "'Bnin' = délicieux/bon au goût. 'Mzyan' = bien en général, 'bnin' est spécifique à la nourriture."
      }
    ]
  },
  {
    id: 21,
    courseId: 15,
    title: "Quiz : Les Couleurs",
    emoji: "🎨",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "translate-to-darija",
        question: "Comment dit-on 'rouge' en Darija ?",
        correct: "Ħmer",
        options: ["Zerq", "Ħmer", "Khdar", "Sfar"],
        explanation: "'Ħmer' = rouge. La lettre Ħ représente le son 'h' emphatique arabe."
      },
      {
        id: 2,
        type: "translate-to-french",
        question: "Que signifie 'Zerq' en français ?",
        correct: "Bleu",
        options: ["Vert", "Bleu", "Jaune", "Blanc"],
        explanation: "'Zerq' = bleu. Couleur très présente dans l'architecture marocaine (Chefchaouen)."
      },
      {
        id: 3,
        type: "translate-to-darija",
        question: "Comment dit-on 'vert' en Darija ?",
        correct: "Khdar",
        options: ["Sfar", "Biyd", "Khdar", "Ħmer"],
        explanation: "'Khdar' = vert. Couleur sacrée en Islam, présente sur le drapeau marocain."
      },
      {
        id: 4,
        type: "choose-meaning",
        question: "Que signifie 'Kħel' ?",
        correct: "Noir",
        options: ["Noir", "Blanc", "Rouge", "Vert"],
        explanation: "'Kħel' = noir. 'Biyd' = blanc. Ces deux couleurs sont souvent opposées en Darija."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Biyd' ?",
        correct: "Blanc",
        options: ["Gris", "Beige", "Blanc", "Crème"],
        explanation: "'Biyd' = blanc. Vient de la racine arabe 'bayadh' (blancheur)."
      },
      {
        id: 6,
        type: "fill-blank",
        question: "Complète avec la forme féminine : 'L-qamija _____ (rouge)'",
        correct: "Ħmra",
        options: ["Ħmer", "Ħmra", "Zerqa", "Khdra"],
        explanation: "En Darija, les adjectifs s'accordent au féminin en ajoutant '-a' : Ħmer → Ħmra (rouge féminin)."
      },
      {
        id: 7,
        type: "match-pairs",
        question: "Associe chaque couleur Darija à sa traduction française",
        correct: '[["Ħmer","Rouge"],["Zerq","Bleu"],["Khdar","Vert"],["Sfar","Jaune"]]',
        options: [],
        explanation: "Les quatre couleurs de base : Ħmer=Rouge, Zerq=Bleu, Khdar=Vert, Sfar=Jaune."
      },
      {
        id: 8,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'La serviette rouge est belle'",
        correct: "L-fouta l-ħmra zwina",
        options: ["zwina", "l-ħmra", "L-fouta"],
        explanation: "'L-fouta' = serviette/foulard, 'l-ħmra' = la rouge (féminin), 'zwina' = belle."
      },
      {
        id: 9,
        type: "translate-to-darija",
        question: "Comment dit-on 'jaune' en Darija ?",
        correct: "Sfar",
        options: ["Sfar", "Smani", "Rmadi", "Bni"],
        explanation: "'Sfar' = jaune. 'Smani' = bleu ciel, 'rmadi' = gris, 'bni' = marron."
      },
      {
        id: 10,
        type: "choose-meaning",
        question: "De quelle couleur est le drapeau marocain ? (en Darija)",
        correct: "Ħmer w khdar",
        options: ["Ħmer w biyd", "Ħmer w khdar", "Zerq w biyd", "Kħel w biyd"],
        explanation: "Le drapeau marocain est rouge (ħmer) avec une étoile verte (khdar) à cinq branches."
      }
    ]
  },
  {
    id: 22,
    courseId: 16,
    title: "Quiz : Les Vêtements",
    emoji: "👗",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Qamija' ?",
        correct: "Chemise",
        options: ["Pantalon", "Chemise", "Chaussures", "Veste"],
        explanation: "'Qamija' = chemise. Vient de l'arabe classique 'qamis'."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'pantalon' en Darija ?",
        correct: "Serwal",
        options: ["Qamija", "Serwal", "Sabbat", "Jellaba"],
        explanation: "'Serwal' = pantalon. Mot utilisé partout au Maghreb."
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Sabbat' ?",
        correct: "Chaussures",
        options: ["Chaussettes", "Ceinture", "Chaussures", "Sandales"],
        explanation: "'Sabbat' = chaussures en général. 'Belgha' désigne spécifiquement les babouches traditionnelles."
      },
      {
        id: 4,
        type: "choose-meaning",
        question: "Que portent les Marocains traditionnellement pour l'Aïd ?",
        correct: "Jellaba / Qftan",
        options: ["Serwal w qamija", "Jellaba / Qftan", "Kabout w gravata", "Jean w t-shirt"],
        explanation: "Pour l'Aïd, les Marocains portent la jellaba (hommes et femmes) ou le qftan (femmes). Vêtements traditionnels très importants."
      },
      {
        id: 5,
        type: "fill-blank",
        question: "Complète : 'Lblast _____ l-3id' (J'ai porté la jellaba pour l'Aïd)",
        correct: "Jellaba",
        options: ["Qamija", "Serwal", "Jellaba", "Kabout"],
        explanation: "'Lblas' = porter/mettre (un vêtement). 'L-3id' = l'Aïd/la fête religieuse."
      },
      {
        id: 6,
        type: "match-pairs",
        question: "Associe chaque vêtement Darija à sa traduction française",
        correct: '[["Qamija","Chemise"],["Serwal","Pantalon"],["Sabbat","Chaussures"],["Shashiya","Bonnet"]]',
        options: [],
        explanation: "Vocabulaire de base des vêtements : Qamija=Chemise, Serwal=Pantalon, Sabbat=Chaussures, Shashiya=Bonnet/Calot."
      },
      {
        id: 7,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Je veux acheter un nouveau pantalon'",
        correct: "Bghit nshri serwal jdid",
        options: ["jdid", "nshri", "Bghit", "serwal"],
        explanation: "'Bghit' = je veux, 'nshri' = acheter, 'serwal' = pantalon, 'jdid' = nouveau."
      },
      {
        id: 8,
        type: "translate-to-french",
        question: "Que signifie 'Jellaba' ?",
        correct: "Djellaba (vêtement traditionnel à capuche)",
        options: ["Veste en cuir", "Djellaba (vêtement traditionnel à capuche)", "Robe de soirée", "Chemise brodée"],
        explanation: "La jellaba est le vêtement traditionnel marocain à capuche, portée par hommes et femmes."
      },
      {
        id: 9,
        type: "fill-blank",
        question: "Au souk : 'B-shhal _____ had l-qamija?' (Combien coûte cette chemise ?)",
        correct: "kayna",
        options: ["kayna", "ghadi", "bghit", "katbigh"],
        explanation: "'B-shhal kayna had l-qamija?' = Combien coûte cette chemise ? 'Kayna' = elle est/elle coûte."
      },
      {
        id: 10,
        type: "translate-to-darija",
        question: "Comment dit-on 'Je cherche une jellaba pour l'Aïd' ?",
        correct: "Kanqllb 3la jellaba l-3id",
        options: ["Bghit nshri l-3id", "Kanqllb 3la jellaba l-3id", "3ndi jellaba jdida", "Lblast jellaba l-bareh"],
        explanation: "'Kanqllb 3la' = je cherche. 'L-3id' = l'Aïd. Phrase utile pour faire du shopping."
      }
    ]
  },
  {
    id: 23,
    courseId: 17,
    title: "Quiz : Fruits & Légumes",
    emoji: "🥦",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Teffah' ?",
        correct: "Pomme",
        options: ["Orange", "Pomme", "Poire", "Pêche"],
        explanation: "'Teffah' = pomme. Les pommes du Moyen Atlas marocain sont réputées."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'citron' en Darija ?",
        correct: "Limo",
        options: ["Limo", "Brtqal", "Teffah", "Dellah"],
        explanation: "'Limo' = citron. 'Brtqal' = orange. Le citron confit est très utilisé dans la cuisine marocaine."
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Dellah' ?",
        correct: "Pastèque",
        options: ["Melon", "Pastèque", "Concombre", "Courgette"],
        explanation: "'Dellah' = pastèque. Fruit très populaire en été au Maroc."
      },
      {
        id: 4,
        type: "translate-to-darija",
        question: "Comment dit-on 'pomme de terre' en Darija ?",
        correct: "Betata",
        options: ["Betata", "Khodra", "Jelbana", "Slq"],
        explanation: "'Betata' = pomme de terre. Vient du mot 'patata'. Ingrédient de base dans de nombreux plats marocains."
      },
      {
        id: 5,
        type: "choose-meaning",
        question: "Que signifie 'Zaytoun' ?",
        correct: "Olive",
        options: ["Figue", "Datte", "Olive", "Raisin"],
        explanation: "'Zaytoun' = olive. Le Maroc est l'un des plus grands producteurs d'olives et d'huile d'argan au monde."
      },
      {
        id: 6,
        type: "match-pairs",
        question: "Associe chaque fruit/légume Darija à sa traduction française",
        correct: '[["Teffah","Pomme"],["Limo","Citron"],["Dellah","Pastèque"],["Zaytoun","Olive"]]',
        options: [],
        explanation: "Fruits essentiels : Teffah=Pomme, Limo=Citron, Dellah=Pastèque, Zaytoun=Olive."
      },
      {
        id: 7,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Donne-moi un kilo de pommes s'il te plaît'",
        correct: "3tini kilo d-teffah men fadlak",
        options: ["d-teffah", "3tini", "men", "kilo", "fadlak"],
        explanation: "'3tini' = donne-moi, 'kilo d-teffah' = un kilo de pommes, 'men fadlak' = s'il te plaît."
      },
      {
        id: 8,
        type: "fill-blank",
        question: "'B-shhal _____ had l-betata?' (Combien coûtent ces pommes de terre ?)",
        correct: "kayna",
        options: ["kayna", "bghit", "ghadi", "khasni"],
        explanation: "'B-shhal kayna had l-betata?' = Combien coûtent ces pommes de terre ? Phrase essentielle au marché."
      },
      {
        id: 9,
        type: "translate-to-french",
        question: "Que signifie 'Khodra' ?",
        correct: "Légumes",
        options: ["Fruits", "Légumes", "Viande", "Épices"],
        explanation: "'Khodra' = légumes (collectif). 'Fakiya' = fruits. Mots utiles au marché."
      },
      {
        id: 10,
        type: "choose-meaning",
        question: "Quel produit est unique au Maroc et protégé par l'UNESCO ?",
        correct: "L-argan (huile d'argan)",
        options: ["L-zaytoun (olive)", "L-argan (huile d'argan)", "L-dellah (pastèque)", "L-teffah (pomme)"],
        explanation: "L'arganier pousse exclusivement au Maroc (région de Souss). L'huile d'argan est protégée par l'UNESCO."
      }
    ]
  },
  {
    id: 24,
    courseId: 18,
    title: "Quiz : Les Verbes Essentiels",
    emoji: "⚡",
    difficulty: "Intermédiaire",
    questions: [
      {
        id: 1,
        type: "translate-to-darija",
        question: "Comment dit-on 'tu veux' en Darija ?",
        correct: "Tbghi",
        options: ["Bgha", "Tbghi", "Nbghi", "Bghiw"],
        explanation: "'Tbghi' = tu veux (2e personne singulier). 'Nbghi' = je veux, 'Bgha' = il veut."
      },
      {
        id: 2,
        type: "translate-to-french",
        question: "Que signifie 'Kay-mshi' ?",
        correct: "Il va / Il est en train d'aller",
        options: ["Il est allé", "Il va / Il est en train d'aller", "Il veut aller", "Il doit aller"],
        explanation: "'Kay-' est le préfixe du présent progressif masculin. 'Kay-mshi' = il va (en ce moment)."
      },
      {
        id: 3,
        type: "fill-blank",
        question: "Complète : '_____ nmshi l-s-souq ghda' (Je vais aller au marché demain)",
        correct: "Ghadi",
        options: ["Bghit", "Ghadi", "Kont", "Safi"],
        explanation: "'Ghadi' + verbe = futur proche en Darija. 'Ghadi nmshi' = je vais aller."
      },
      {
        id: 4,
        type: "match-pairs",
        question: "Associe chaque verbe Darija à sa traduction française",
        correct: '[["Msha","Aller"],["Ja","Venir"],["Bgha","Vouloir"],["Kla","Manger"]]',
        options: [],
        explanation: "Verbes fondamentaux : Msha=Aller, Ja=Venir, Bgha=Vouloir, Kla=Manger."
      },
      {
        id: 5,
        type: "choose-meaning",
        question: "Que signifie 'Kay-hder' ?",
        correct: "Il parle",
        options: ["Il parle", "Il mange", "Il dort", "Il travaille"],
        explanation: "'Kay-hder' = il parle (en ce moment). 'Hder' = parler. 'Kay-' = préfixe présent masculin."
      },
      {
        id: 6,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Est-ce qu'il veut apporter du thé ?'",
        correct: "Wash bgha yjib atay",
        options: ["yjib", "bgha", "Wash", "atay"],
        explanation: "'Wash' = est-ce que, 'bgha' = il veut, 'yjib' = apporter, 'atay' = thé."
      },
      {
        id: 7,
        type: "fill-blank",
        question: "'Ma _____ sh l-s-souq' (Je ne suis pas allé au marché)",
        correct: "mshit",
        options: ["mshit", "nmshi", "ghadi", "kont"],
        explanation: "'Ma mshit-sh' = je ne suis pas allé. La négation en Darija encadre le verbe : Ma...sh."
      },
      {
        id: 8,
        type: "translate-to-french",
        question: "Que signifie 'Ma tbghish' ?",
        correct: "Tu ne veux pas",
        options: ["Je ne veux pas", "Tu ne veux pas", "Il ne veut pas", "Nous ne voulons pas"],
        explanation: "'Ma tbghi-sh' = tu ne veux pas. 'Tbghi' = tu veux, 'ma...sh' = négation."
      },
      {
        id: 9,
        type: "translate-to-darija",
        question: "Comment dit-on 'nous allons' (présent) en Darija ?",
        correct: "Kay-mshiw",
        options: ["Kay-mshi", "Nmshiw", "Kay-mshiw", "Ghadi nmshi"],
        explanation: "'Kay-mshiw' = ils/elles vont. 'Nmshiw' = nous allons. Le préfixe 'n-' indique la 1ère personne."
      },
      {
        id: 10,
        type: "fill-blank",
        question: "'Hiya kat-_____ f-l-jami3a' (Elle étudie à l'université)",
        correct: "qra",
        options: ["mshi", "qra", "khdm", "klm"],
        explanation: "'Kat-qra' = elle étudie/lit (présent féminin). 'Kat-' est le préfixe du présent féminin."
      },
      {
        id: 11,
        type: "choose-meaning",
        question: "Que signifie 'Bgha ykhdm' ?",
        correct: "Il veut travailler",
        options: ["Il veut manger", "Il veut travailler", "Il veut partir", "Il veut dormir"],
        explanation: "'Bgha' = il veut, 'ykhdm' = travailler (forme subjontive). Construction courante en Darija."
      },
      {
        id: 12,
        type: "translate-to-darija",
        question: "Comment dit-on 'Ils mangent' (présent) en Darija ?",
        correct: "Kay-klaw",
        options: ["Klaw", "Kay-klaw", "Ghadi yaklu", "Ma klawsh"],
        explanation: "'Kay-klaw' = ils mangent (présent progressif). 'Klaw' = ils ont mangé (passé)."
      }
    ]
  },
  {
    id: 25,
    courseId: 19,
    title: "Quiz : Slang & Darija des Jeunes",
    emoji: "🔥",
    difficulty: "Avancé",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Zwine' en argot marocain ?",
        correct: "Cool / Beau",
        options: ["Ennuyeux", "Cool / Beau", "Bizarre", "Fatigant"],
        explanation: "'Zwine' = beau/belle, cool. Très utilisé par les jeunes marocains pour tout ce qui est bien."
      },
      {
        id: 2,
        type: "choose-meaning",
        question: "Dans quel contexte utilise-t-on 'Safi' ?",
        correct: "Pour marquer l'accord ou la fin d'une discussion",
        options: [
          "Uniquement quand on quitte quelqu'un",
          "Pour marquer l'accord ou la fin d'une discussion",
          "Quand on mange quelque chose de bon",
          "Pour saluer quelqu'un"
        ],
        explanation: "'Safi' est polyvalent : ok, c'est bon, ça suffit, c'est réglé. Ultra-courant dans les conversations."
      },
      {
        id: 3,
        type: "fill-blank",
        question: "'_____, mshina!' (Allons-y, je suis motivé !)",
        correct: "3andi niya",
        options: ["Ma bghitsh", "3andi niya", "Walu", "Bslama"],
        explanation: "'3andi niya' = j'ai l'intention/je suis motivé. 'Mshina' = allons-y (passé utilisé comme impératif)."
      },
      {
        id: 4,
        type: "match-pairs",
        question: "Associe chaque expression argotique à sa traduction",
        correct: '[["Zwine","Cool/Beau"],["Safi","Ok/C est bon"],["Khouya","Mon frère/ami"],["3ayb","Honteux"]]',
        options: [],
        explanation: "Argot marocain moderne : Zwine=Cool, Safi=Ok, Khouya=Ami/Frère, 3ayb=C'est honteux."
      },
      {
        id: 5,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Est-ce que ça c'est vraiment cool ?'",
        correct: "Wach hda zwine bzzaf",
        options: ["bzzaf", "Wach", "zwine", "hda"],
        explanation: "'Wach' = est-ce que, 'hda' = ça/ceci, 'zwine' = cool/beau, 'bzzaf' = beaucoup/vraiment."
      },
      {
        id: 6,
        type: "choose-meaning",
        question: "'Khouya' peut s'utiliser avec... ?",
        correct: "Un ami proche, pas forcément son frère",
        options: [
          "Uniquement son frère biologique",
          "Un ami proche, pas forcément son frère",
          "Uniquement les hommes plus âgés",
          "Uniquement en famille"
        ],
        explanation: "'Khouya' = littéralement 'mon frère', mais s'utilise entre amis proches. Comme 'bro' en français familier."
      },
      {
        id: 7,
        type: "translate-to-french",
        question: "Que signifie l'expression 'Nta wach?!' ?",
        correct: "Surprise / Incrédulité (genre 'mais c'est quoi ça ?!')",
        options: [
          "Tu vas bien ?",
          "Surprise / Incrédulité (genre 'mais c'est quoi ça ?!')",
          "Tu es d'accord ?",
          "Tu viens ?"
        ],
        explanation: "'Nta wach?!' = littéralement 'toi quoi?!' Exprime la surprise ou l'incrédulité face à une situation inattendue."
      },
      {
        id: 8,
        type: "fill-blank",
        question: "'_____ 3lik had l-khedma' (C'est honteux ce travail que tu as fait)",
        correct: "3ayb",
        options: ["Mzyan", "Zwine", "3ayb", "Baraka"],
        explanation: "'3ayb 3lik' = c'est honteux pour toi / tu devrais avoir honte. Expression morale très courante."
      },
      {
        id: 9,
        type: "translate-to-darija",
        question: "Comment dit-on 'c'est n'importe quoi !' en argot marocain ?",
        correct: "Hadshi ma kayn-sh !",
        options: ["Zwine bzzaf!", "Hadshi ma kayn-sh !", "3andi niya !", "Safi, safi!"],
        explanation: "'Hadshi ma kayn-sh' = littéralement 'ça n'existe pas' = c'est n'importe quoi / c'est incroyable."
      },
      {
        id: 10,
        type: "choose-meaning",
        question: "Que signifie 'Wili wili' ?",
        correct: "Exclamation de surprise ou de regret",
        options: [
          "Exclamation de joie intense",
          "Exclamation de surprise ou de regret",
          "Formule pour dire au revoir",
          "Expression pour dire qu'on est fatigué"
        ],
        explanation: "'Wili wili' est une exclamation qui exprime la surprise, le regret ou la consternation. Équivalent de 'oh là là' en français."
      },
      {
        id: 11,
        type: "translate-to-french",
        question: "Que signifie 'Wakha' ?",
        correct: "D'accord / Ok",
        options: ["Jamais", "D'accord / Ok", "Peut-être", "Non"],
        explanation: "'Wakha' = d'accord, ok. Réponse positive très fréquente, équivalent de 'safi' dans certains contextes."
      },
      {
        id: 12,
        type: "fill-blank",
        question: "'Dak r-rajel _____ bzzaf, ma bghitsh nshuf-h' (Cet homme est vraiment ennuyeux)",
        correct: "m3qqed",
        options: ["zwine", "mzyan", "m3qqed", "ferhan"],
        explanation: "'M3qqed' = compliqué/prise de tête/ennuyeux. 'Ma bghitsh nshuf-h' = je ne veux pas le voir."
      }
    ]
  }
];
