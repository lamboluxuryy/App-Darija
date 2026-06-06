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
  },
  {
    id: 26,
    courseId: 20,
    title: "Quiz : Chiffres Avancés",
    emoji: "🔢",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie '3shrin' ?",
        correct: "20",
        options: ["12", "20", "22", "30"],
        explanation: "'3shrin' = vingt (20). Le '3' représente la lettre arabe 'aïn'."
      },
      {
        id: 2,
        type: "translate-to-french",
        question: "Que signifie 'Miya' ?",
        correct: "100",
        options: ["10", "50", "100", "1000"],
        explanation: "'Miya' = cent (100). 'Miyatayn' = deux cents, 'tlata miya' = trois cents."
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Alf' ?",
        correct: "1000",
        options: ["100", "500", "1000", "10000"],
        explanation: "'Alf' = mille (1000). 'Jouj alaf' = deux mille, 'khemsa alaf' = cinq mille."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'3ndi _____ 3am' (J'ai 30 ans)",
        correct: "tlatin",
        options: ["3shrin", "tlatin", "rb3in", "khemsin"],
        explanation: "'Tlatin' = trente (30). Les dizaines : 3shrin=20, tlatin=30, rb3in=40, khemsin=50."
      },
      {
        id: 5,
        type: "translate-to-darija",
        question: "Comment dit-on '80 dirhams' en Darija ?",
        correct: "Tmanin dirham",
        options: ["Tmanin dirham", "Tmanya dirham", "Sb3in dirham", "Ts3in dirham"],
        explanation: "'Tmanin' = quatre-vingts (80). 'Sb3in' = soixante-dix, 'ts3in' = quatre-vingt-dix."
      },
      {
        id: 6,
        type: "match-pairs",
        question: "Associe chaque nombre Darija à sa valeur française",
        correct: '[["3shrin","20"],["Tlatin","30"],["Miya","100"],["Alf","1000"]]',
        options: [],
        explanation: "Nombres importants : 3shrin=20, Tlatin=30, Miya=100, Alf=1000."
      },
      {
        id: 7,
        type: "choose-meaning",
        question: "Que signifie 'Shħal f-3amrek?' ?",
        correct: "Quel âge as-tu ?",
        options: ["Comment tu t'appelles ?", "Quel âge as-tu ?", "D'où viens-tu ?", "Où habites-tu ?"],
        explanation: "'Shħal f-3amrek?' = littéralement 'combien dans ton âge ?' = quel âge as-tu ?"
      },
      {
        id: 8,
        type: "translate-to-french",
        question: "Que signifie 'S-sa3a khmsa' ?",
        correct: "Il est 5h",
        options: ["Il est 3h", "Il est 5h", "Il est 50h", "Il est midi"],
        explanation: "'S-sa3a khmsa' = l'heure cinq = il est 5h. 'S-sa3a' = l'heure, 'khmsa' = cinq."
      },
      {
        id: 9,
        type: "fill-blank",
        question: "'Had l-qamija _____ dirham' (Cette chemise coûte 150 dirhams)",
        correct: "miya w khemsin",
        options: ["miya w 3shrin", "miya w khemsin", "miyatayn", "rb3a miya"],
        explanation: "'Miya w khemsin' = cent cinquante (150). En Darija on dit 'miya w' puis la dizaine."
      },
      {
        id: 10,
        type: "translate-to-darija",
        question: "Comment dit-on '40' en Darija ?",
        correct: "Rb3in",
        options: ["Rb3a", "Rb3in", "Arb3in", "Arb3a w 3shrin"],
        explanation: "'Rb3in' = quarante (40). Vient de 'rb3a' (4). Les dizaines se forment avec le suffixe '-in'."
      }
    ]
  },
  {
    id: 27,
    courseId: 22,
    title: "Quiz : Religion & Expressions",
    emoji: "🕌",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "choose-meaning",
        question: "Dans quel contexte dit-on 'Bismillah' ?",
        correct: "Avant de commencer à manger ou une activité importante",
        options: [
          "Uniquement avant de manger",
          "Avant de commencer à manger ou une activité importante",
          "Uniquement avant de prier",
          "Pour dire au revoir"
        ],
        explanation: "'Bismillah' = au nom de Dieu. Se dit avant de manger, de conduire, de commencer toute activité."
      },
      {
        id: 2,
        type: "translate-to-french",
        question: "Que signifie 'Alħamdoulillah' ?",
        correct: "Grâce à Dieu / Ça va bien",
        options: ["Au nom de Dieu", "Grâce à Dieu / Ça va bien", "Si Dieu le veut", "Que Dieu bénisse"],
        explanation: "'Alħamdoulillah' = grâce à Dieu. Réponse courante à 'comment tu vas ?' signifiant 'ça va'."
      },
      {
        id: 3,
        type: "match-pairs",
        question: "Associe chaque expression religieuse à sa traduction",
        correct: '[["Inshallah","Si Dieu le veut"],["Mshallah","Dieu a voulu"],["Bismillah","Au nom de Dieu"],["Rbi ybarek","Que Dieu bénisse"]]',
        options: [],
        explanation: "Expressions fondamentales de la culture marocaine musulmane. Très utilisées dans la vie quotidienne."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'Mshallah, weldk _____ bzzaf!' (Ton fils a beaucoup grandi !)",
        correct: "kbir",
        options: ["sghir", "kbir", "zwine", "mzyan"],
        explanation: "'Mshallah' précède les compliments pour protéger de l'envie. 'Kbir' = grand, 'weldk' = ton fils."
      },
      {
        id: 5,
        type: "choose-meaning",
        question: "Pourquoi dit-on 'Mshallah' quand on fait un compliment ?",
        correct: "Pour protéger la personne du mauvais œil (l-3in)",
        options: [
          "Pour montrer qu'on est surpris",
          "Pour protéger la personne du mauvais œil (l-3in)",
          "Par politesse formelle uniquement",
          "Pour exprimer l'incertitude"
        ],
        explanation: "'Mshallah' (ce que Dieu a voulu) protège contre 'l-3in' (le mauvais œil). Croyance culturelle très répandue."
      },
      {
        id: 6,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Que Dieu te facilite le travail'",
        correct: "Allah ysaħħel 3lik l-khedma",
        options: ["l-khedma", "3lik", "Allah", "ysaħħel"],
        explanation: "'Allah ysaħħel 3lik l-khedma' = que Dieu te facilite le travail. Expression de bienveillance."
      },
      {
        id: 7,
        type: "translate-to-french",
        question: "Que signifie 'Inshallah' ?",
        correct: "Si Dieu le veut / J'espère",
        options: [
          "C'est certain",
          "Si Dieu le veut / J'espère",
          "Peut-être pas",
          "Non merci"
        ],
        explanation: "'Inshallah' = si Dieu le veut. Peut exprimer l'espoir sincère ou, de façon informelle, une réponse évasive."
      },
      {
        id: 8,
        type: "fill-blank",
        question: "'_____ 3lik, kliti mezyan?' (Grâce à Dieu, tu as bien mangé ?)",
        correct: "Alħamdoulillah",
        options: ["Bismillah", "Inshallah", "Alħamdoulillah", "Mshallah"],
        explanation: "'Alħamdoulillah 3lik' = grâce à Dieu pour toi. Façon affectueuse de s'enquérir de quelqu'un."
      },
      {
        id: 9,
        type: "translate-to-darija",
        question: "Comment dit-on 'Que Dieu te bénisse' en réponse à un compliment ?",
        correct: "Rbi ybarek fik",
        options: ["Rbi ybarek fik", "Alħamdoulillah", "Inshallah", "Bismillah"],
        explanation: "'Rbi ybarek fik' = que Dieu te bénisse. Réponse polie à un compliment ou un service rendu."
      },
      {
        id: 10,
        type: "choose-meaning",
        question: "Que signifie 'L-3in' dans la culture marocaine ?",
        correct: "Le mauvais œil (envie qui porte malheur)",
        options: [
          "Un regard bienveillant",
          "Le mauvais œil (envie qui porte malheur)",
          "La chance",
          "La protection divine"
        ],
        explanation: "'L-3in' = le mauvais œil. Croyance que certains regards d'envie ou de jalousie peuvent porter malheur."
      }
    ]
  },
  {
    id: 28,
    courseId: 23,
    title: "Quiz : L'École & Les Études",
    emoji: "📚",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Madrasa' ?",
        correct: "École",
        options: ["Université", "École", "Bibliothèque", "Classe"],
        explanation: "'Madrasa' = école. 'Jami3a' = université. 'Qism' = classe/salle."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'professeur' en Darija ?",
        correct: "Ustad",
        options: ["Talmid", "Ustad", "Mdir", "Katib"],
        explanation: "'Ustad' = professeur/maître. 'Ustada' = professeure (féminin). 'Talmid' = élève."
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Imtiħan' ?",
        correct: "Examen",
        options: ["Cours", "Examen", "Devoir", "Note"],
        explanation: "'Imtiħan' = examen. 'Njħ f-l-imtiħan' = réussir l'examen."
      },
      {
        id: 4,
        type: "match-pairs",
        question: "Associe chaque mot scolaire Darija à sa traduction française",
        correct: '[["Madrasa","École"],["Ustad","Professeur"],["Imtihan","Examen"],["Jami3a","Université"]]',
        options: [],
        explanation: "Vocabulaire scolaire essentiel : Madrasa=École, Ustad=Professeur, Imtihan=Examen, Jami3a=Université."
      },
      {
        id: 5,
        type: "fill-blank",
        question: "'Ghadi n_____ mezyan l-imtiħan' (Je vais bien étudier pour l'examen)",
        correct: "qra",
        options: ["mshi", "qra", "ktb", "hdr"],
        explanation: "'Nqra' = étudier/lire (1ère personne). 'Ghadi nqra' = je vais étudier. 'Qra' = lire/étudier."
      },
      {
        id: 6,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Le professeur est très bien à l'école'",
        correct: "L-ustad mzyan bzzaf f-l-madrasa",
        options: ["f-l-madrasa", "mzyan", "L-ustad", "bzzaf"],
        explanation: "'L-ustad mzyan bzzaf f-l-madrasa' = le professeur est très bien à l'école."
      },
      {
        id: 7,
        type: "choose-meaning",
        question: "Que signifie 'Njħ' ?",
        correct: "Réussir",
        options: ["Réussir", "Rater", "Étudier", "Partir"],
        explanation: "'Njħ' = réussir (un examen, dans la vie). 'Ma njħ-sh' = il n'a pas réussi. 'Njħ f-l-imtiħan' = réussir l'examen."
      },
      {
        id: 8,
        type: "translate-to-french",
        question: "Que signifie 'Talmid' ?",
        correct: "Élève",
        options: ["Professeur", "Directeur", "Élève", "Parent"],
        explanation: "'Talmid' = élève (masculin), 'talmida' = élève (féminin). 'Talamiyd' = les élèves."
      },
      {
        id: 9,
        type: "fill-blank",
        question: "'L-_____ d-l-madrasa ghadi ybda ghda' (La rentrée scolaire commence demain)",
        correct: "3am",
        options: ["3am", "imtiħan", "kitab", "qism"],
        explanation: "'L-3am d-l-madrasa' = l'année scolaire. 'Bda' = commencer. Expression utile en septembre."
      },
      {
        id: 10,
        type: "translate-to-darija",
        question: "Comment dit-on 'Je dois étudier ce soir' ?",
        correct: "Kħessni nqra l-lila",
        options: ["Kħessni nqra l-lila", "Ghadi nmshi l-madrasa", "Bghit nktb", "3ndi imtiħan ghda"],
        explanation: "'Kħessni' = je dois/il me faut, 'nqra' = étudier, 'l-lila' = ce soir. Construction avec obligation."
      }
    ]
  },
  {
    id: 29,
    courseId: 24,
    title: "Quiz : La Nature & Paysages",
    emoji: "🏔️",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Jbal' ?",
        correct: "Montagne",
        options: ["Mer", "Montagne", "Désert", "Forêt"],
        explanation: "'Jbal' = montagne. 'Jbal l-atlas' = les montagnes de l'Atlas. Pluriel de 'jbel'."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'mer' en Darija ?",
        correct: "Bħar",
        options: ["Bħar", "Nhr", "Ghdir", "Wadi"],
        explanation: "'Bħar' = mer/océan. 'Nhr' = fleuve/rivière. Le Maroc est bordé par l'Atlantique et la Méditerranée."
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Saħra' ?",
        correct: "Désert",
        options: ["Plaine", "Désert", "Montagne", "Oasis"],
        explanation: "'Saħra' = désert. Le Sahara marocain (région de Merzouga/Zagora) est une destination touristique majeure."
      },
      {
        id: 4,
        type: "translate-to-darija",
        question: "Comment dit-on 'soleil' en Darija ?",
        correct: "Shemsh",
        options: ["Shemsh", "Qmar", "Njem", "Rih"],
        explanation: "'Shemsh' = soleil. 'Qmar' = lune, 'njem' = étoile, 'rih' = vent."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Berd' ?",
        correct: "Froid",
        options: ["Chaud", "Froid", "Pluie", "Vent"],
        explanation: "'Berd' = froid. 'Shkhoun' = chaud. 'L-jaw berd' = il fait froid."
      },
      {
        id: 6,
        type: "match-pairs",
        question: "Associe chaque mot de nature Darija à sa traduction française",
        correct: '[["Jbal","Montagne"],["Bhar","Mer"],["Sahra","Désert"],["Ghaba","Forêt"]]',
        options: [],
        explanation: "Paysages marocains : Jbal=Montagne, Bhar=Mer, Sahra=Désert, Ghaba=Forêt."
      },
      {
        id: 7,
        type: "fill-blank",
        question: "'L-jbal d-l-atlas _____ bzzaf' (Les montagnes de l'Atlas sont très hautes)",
        correct: "3alyin",
        options: ["kbirin", "3alyin", "zwinin", "b3idin"],
        explanation: "'3alyin' = hautes/élevées (pluriel). '3ali' = haut (singulier masculin). Les plus hauts sommets du Maroc dépassent 4000m."
      },
      {
        id: 8,
        type: "choose-meaning",
        question: "Le Maroc est bordé par combien de mers/océans ?",
        correct: "Deux : l'Atlantique et la Méditerranée",
        options: [
          "Un seul : l'Atlantique",
          "Deux : l'Atlantique et la Méditerranée",
          "Trois : Atlantique, Méditerranée et mer Rouge",
          "Aucun, le Maroc est enclavé"
        ],
        explanation: "Le Maroc a une double façade maritime : l'océan Atlantique à l'ouest et la mer Méditerranée au nord."
      },
      {
        id: 9,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Je veux aller dans le désert'",
        correct: "Bghit nmshi l-s-saħra",
        options: ["nmshi", "l-s-saħra", "Bghit"],
        explanation: "'Bghit nmshi l-s-saħra' = je veux aller dans le désert. 'l-s-' = à la/au."
      },
      {
        id: 10,
        type: "translate-to-darija",
        question: "Comment dit-on 'Il pleut' en Darija ?",
        correct: "Kat-tih sh-shta",
        options: ["Kat-tih sh-shta", "L-jaw berd", "Kay-hb r-rih", "Shemsh kayna"],
        explanation: "'Kat-tih sh-shta' = la pluie tombe = il pleut. 'Sh-shta' = la pluie."
      }
    ]
  },
  {
    id: 30,
    courseId: 25,
    title: "Quiz : Les Métiers",
    emoji: "👨‍💼",
    difficulty: "Intermédiaire",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Tbib' ?",
        correct: "Médecin",
        options: ["Infirmier", "Médecin", "Pharmacien", "Dentiste"],
        explanation: "'Tbib' = médecin/docteur. 'Tbib l-asnan' = dentiste. 'Mumarrid' = infirmier."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'avocat' en Darija ?",
        correct: "Muħami",
        options: ["Muħandis", "Muħami", "Mudarris", "Katib"],
        explanation: "'Muħami' = avocat. 'Muħandis' = ingénieur, 'mudarris' = enseignant (formel)."
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Muħandis' ?",
        correct: "Ingénieur",
        options: ["Architecte", "Technicien", "Ingénieur", "Comptable"],
        explanation: "'Muħandis' = ingénieur. Profession très valorisée au Maroc, souvent associée aux grandes écoles."
      },
      {
        id: 4,
        type: "match-pairs",
        question: "Associe chaque métier Darija à sa traduction française",
        correct: '[["Tbib","Médecin"],["Muhami","Avocat"],["Muhandis","Ingénieur"],["Tjar","Commerçant"]]',
        options: [],
        explanation: "Métiers courants : Tbib=Médecin, Muhami=Avocat, Muhandis=Ingénieur, Tjar=Commerçant."
      },
      {
        id: 5,
        type: "fill-blank",
        question: "'Weld-i _____ f-Casablanca' (Mon fils est ingénieur à Casablanca)",
        correct: "muħandis",
        options: ["tbib", "muħandis", "muħami", "tjar"],
        explanation: "En Darija, on omet souvent le verbe 'être' : 'weld-i muħandis' = mon fils [est] ingénieur."
      },
      {
        id: 6,
        type: "choose-meaning",
        question: "Que signifie 'Fallah' ?",
        correct: "Agriculteur",
        options: ["Agriculteur", "Policier", "Médecin", "Professeur"],
        explanation: "'Fallah' = agriculteur/paysan. Vient de 'falaħa' = cultiver la terre. Métier très répandu au Maroc rural."
      },
      {
        id: 7,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Le médecin m'a dit de prendre le médicament'",
        correct: "L-tbib gal-li shreb dawa",
        options: ["gal-li", "dawa", "L-tbib", "shreb"],
        explanation: "'L-tbib gal-li' = le médecin m'a dit, 'shreb dawa' = prends le médicament."
      },
      {
        id: 8,
        type: "translate-to-french",
        question: "Que signifie 'Mudarris' ?",
        correct: "Enseignant / Professeur",
        options: ["Directeur", "Enseignant / Professeur", "Proviseur", "Assistant"],
        explanation: "'Mudarris' = enseignant (terme formel). 'Ustad' est plus courant en Darija pour professeur."
      },
      {
        id: 9,
        type: "fill-blank",
        question: "'Ash tayt-khdem ?' veut dire...",
        correct: "Quel est ton métier ?",
        options: [
          "Où travailles-tu ?",
          "Quel est ton métier ?",
          "Depuis quand travailles-tu ?",
          "Tu aimes ton travail ?"
        ],
        explanation: "'Ash tayt-khdem ?' = qu'est-ce que tu fais comme travail ? Question courante pour demander la profession."
      },
      {
        id: 10,
        type: "translate-to-darija",
        question: "Comment dit-on 'Je travaille dans un hôpital' ?",
        correct: "Kankhdem f-l-mustashfa",
        options: ["Kankhdem f-l-mustashfa", "Bghit nkhdem f-s-sbitar", "3ndi khedma zwina", "L-mustashfa b3id"],
        explanation: "'Kankhdem' = je travaille (présent), 'f-l-mustashfa' = dans l'hôpital. 'Mustashfa' = hôpital (formel)."
      }
    ]
  },
  {
    id: 31,
    courseId: 26,
    title: "Quiz : La Ville & Les Lieux",
    emoji: "🏙️",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Mdina' ?",
        correct: "Médina / Vieille ville",
        options: ["Ville moderne", "Médina / Vieille ville", "Quartier", "Banlieue"],
        explanation: "'Mdina' = médina, la vieille ville historique. Chaque grande ville marocaine possède sa médina."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'mosquée' en Darija ?",
        correct: "Jame3",
        options: ["Jame3", "Kniisa", "Msjid", "Qbba"],
        explanation: "'Jame3' = grande mosquée. 'Msjid' = petite mosquée de quartier. La distinction est importante."
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Funduq' ?",
        correct: "Hôtel",
        options: ["Auberge de jeunesse", "Hôtel", "Riad", "Camping"],
        explanation: "'Funduq' = hôtel. Historiquement, c'était une caravansérail (lieu d'hébergement des marchands)."
      },
      {
        id: 4,
        type: "translate-to-french",
        question: "Que signifie 'Ħanout' ?",
        correct: "Épicerie / Petit commerce",
        options: ["Supermarché", "Épicerie / Petit commerce", "Boulangerie", "Restaurant"],
        explanation: "'Ħanout' = épicerie, petit magasin de quartier. Lieu social très important dans les quartiers marocains."
      },
      {
        id: 5,
        type: "match-pairs",
        question: "Associe chaque lieu Darija à sa traduction française",
        correct: '[["Mdina","Médina/Vieille ville"],["Jame3","Mosquée"],["Funduq","Hôtel"],["Hanout","Épicerie"]]',
        options: [],
        explanation: "Lieux typiques de la ville marocaine : Mdina=Médina, Jame3=Mosquée, Funduq=Hôtel, Hanout=Épicerie."
      },
      {
        id: 6,
        type: "choose-meaning",
        question: "Qu'est-ce qu'un 'Riad' ?",
        correct: "Maison traditionnelle marocaine avec patio central",
        options: [
          "Grand hôtel de luxe",
          "Maison traditionnelle marocaine avec patio central",
          "Type de mosquée",
          "Souk couvert"
        ],
        explanation: "Un riad est une maison traditionnelle marocaine organisée autour d'un patio intérieur. Très prisé comme hébergement touristique."
      },
      {
        id: 7,
        type: "fill-blank",
        question: "'Dribt rasi f-d-_____ d-l-mdina' (Je me suis perdu dans les ruelles de la médina)",
        correct: "drub",
        options: ["zuqaq", "drub", "shwar3", "triqa"],
        explanation: "'Drub' = ruelles (pluriel de 'derb'). Les drub de la médina sont les petites rues labyrinthiques traditionnelles."
      },
      {
        id: 8,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Il est allé à l'épicerie acheter du pain'",
        correct: "Msha l-l-ħanout yshri l-khobz",
        options: ["yshri", "l-khobz", "Msha", "l-l-ħanout"],
        explanation: "'Msha l-l-ħanout' = il est allé à l'épicerie, 'yshri l-khobz' = acheter le pain."
      },
      {
        id: 9,
        type: "translate-to-darija",
        question: "Comment dit-on 'la place publique' en Darija ?",
        correct: "Jima3",
        options: ["Jima3", "Mdina", "Derb", "Bab"],
        explanation: "'Jima3' = la place publique (comme Jemaa el-Fna à Marrakech). 'Bab' = porte de la ville."
      },
      {
        id: 10,
        type: "translate-to-french",
        question: "Que signifie 'Derb' dans le contexte de la médina ?",
        correct: "Ruelle / Impasse",
        options: ["Grande avenue", "Ruelle / Impasse", "Place publique", "Quartier entier"],
        explanation: "'Derb' = petite ruelle ou impasse dans la médina. Les derbs forment le réseau de circulation piétonne traditionnel."
      }
    ]
  },
  {
    id: 32,
    courseId: 28,
    title: "Quiz : La Conjugaison",
    emoji: "📖",
    difficulty: "Avancé",
    questions: [
      {
        id: 1,
        type: "translate-to-darija",
        question: "Comment dit-on 'Je suis allé' en Darija ?",
        correct: "Mshit",
        options: ["Msha", "Mshit", "Mshat", "Mshaw"],
        explanation: "'Mshit' = je suis allé(e). Conjugaison passé 1ère personne singulier du verbe 'msha' (aller)."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'Ils sont allés' en Darija ?",
        correct: "Mshaw",
        options: ["Mshiw", "Mshaw", "Mshitw", "Mshaw"],
        explanation: "'Mshaw' = ils/elles sont allés. Le suffixe '-aw' marque le pluriel passé."
      },
      {
        id: 3,
        type: "fill-blank",
        question: "'Hiya kat-_____ f-l-jami3a' (Elle étudie à l'université)",
        correct: "qra",
        options: ["tqra", "qra", "nqra", "yqra"],
        explanation: "'Kat-qra' = elle étudie/lit (présent féminin). Forme complète : 'kat-qra'. Le radical est 'qra'."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'Ghadi _____ l-Marrakesh ghda' (Nous allons aller à Marrakech demain)",
        correct: "nmshiw",
        options: ["nmshi", "nmshiw", "mshiw", "ghadi"],
        explanation: "'Ghadi nmshiw' = nous allons aller. 'Nmshiw' = forme présent/futur 1ère personne pluriel."
      },
      {
        id: 5,
        type: "translate-to-darija",
        question: "Comment dit-on 'Il n'est pas venu' en Darija ?",
        correct: "Ma ja-sh",
        options: ["Ma msha-sh", "Ma ja-sh", "Ma kan-sh", "Ma jiw-sh"],
        explanation: "'Ma ja-sh' = il n'est pas venu. Négation : ma + verbe + sh. 'Ja' = il est venu."
      },
      {
        id: 6,
        type: "choose-meaning",
        question: "Comment dit-on 'Va !' (impératif) en Darija ?",
        correct: "Mshi!",
        options: ["Msha!", "Mshi!", "Mshit!", "Nmshi!"],
        explanation: "'Mshi' = l'impératif de 'msha' (aller). 'Kol' = mange (impératif de 'kla')."
      },
      {
        id: 7,
        type: "match-pairs",
        question: "Associe chaque forme conjuguée à sa traduction",
        correct: '[["Mshit","Je suis allé"],["Msha","Il est allé"],["Mshat","Elle est allée"],["Mshaw","Ils sont allés"]]',
        options: [],
        explanation: "Conjugaison passé de 'msha' (aller) : Mshit=1ère sg, Msha=3ème sg m, Mshat=3ème sg f, Mshaw=3ème pl."
      },
      {
        id: 8,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Je vais aller au marché et acheter des légumes'",
        correct: "Ana ghadi nmshi l-s-souq w n-shri khodra",
        options: ["n-shri", "l-s-souq", "Ana", "khodra", "ghadi", "nmshi", "w"],
        explanation: "'Ana ghadi nmshi l-s-souq' = je vais aller au marché, 'w n-shri khodra' = et acheter des légumes."
      },
      {
        id: 9,
        type: "fill-blank",
        question: "'Kant _____ mlli skent f-Rabat' (J'étais jeune quand j'habitais à Rabat)",
        correct: "sghir",
        options: ["kbir", "sghir", "mzyan", "ferhan"],
        explanation: "'Kant sghir' = j'étais jeune (féminin). 'Kont sghir' = j'étais jeune (masculin). 'Mlli' = quand/lorsque."
      },
      {
        id: 10,
        type: "translate-to-french",
        question: "Que signifie 'Kan kay-kħdem walakin daba ma bqa-sh kaykhdem' ?",
        correct: "Il travaillait mais maintenant il ne travaille plus",
        options: [
          "Il cherche du travail",
          "Il travaillait mais maintenant il ne travaille plus",
          "Il va travailler demain",
          "Il n'a jamais travaillé"
        ],
        explanation: "'Kan kay-kħdem' = il travaillait (imparfait), 'walakin' = mais, 'daba ma bqa-sh kaykhdem' = maintenant il ne travaille plus."
      },
      {
        id: 11,
        type: "translate-to-darija",
        question: "Comment dit-on 'Tu n'as pas mangé' en Darija ?",
        correct: "Ma klitish",
        options: ["Ma klitish", "Ma kla-sh", "Ma taklish", "Kliti ?"],
        explanation: "'Ma kliti-sh' = tu n'as pas mangé. 'Kliti' = tu as mangé (passé 2ème sg). 'Ma...sh' = négation."
      },
      {
        id: 12,
        type: "translate-to-french",
        question: "Que signifie 'Ma mshitsh l-7afla ħit ma kont-sh mezyan' ?",
        correct: "Je ne suis pas allé à la fête car je n'allais pas bien",
        options: [
          "Je suis allé à la fête malgré la maladie",
          "Je ne suis pas allé à la fête car je n'allais pas bien",
          "La fête était annulée à cause de la maladie",
          "Je voulais aller à la fête mais j'étais occupé"
        ],
        explanation: "'Ma mshitsh' = je ne suis pas allé, 'l-7afla' = à la fête, 'ħit' = parce que, 'ma kont-sh mezyan' = je n'allais pas bien."
      },
      {
        id: 13,
        type: "fill-blank",
        question: "'Ghadi _____ mezyan f-l-imtiħan' (Elle va réussir à l'examen)",
        correct: "tnjħ",
        options: ["ynjħ", "tnjħ", "nnjħ", "njħw"],
        explanation: "'Tnjħ' = elle va réussir (féminin 3ème sg). 'Ynjħ' = il va réussir (masculin). 'Ghadi' = futur proche."
      },
      {
        id: 14,
        type: "choose-meaning",
        question: "Quel est le rôle du préfixe 'Kat-' dans 'Kat-mshi' ?",
        correct: "Indique le présent progressif féminin",
        options: [
          "Indique le futur",
          "Indique le présent progressif féminin",
          "Indique le passé récent",
          "Indique l'impératif féminin"
        ],
        explanation: "'Kat-' est le préfixe du présent féminin (elle/tu-féminin). 'Kay-' est le masculin. Ex: 'Kay-mshi' = il va, 'Kat-mshi' = elle va."
      },
      {
        id: 15,
        type: "translate-to-darija",
        question: "Comment dit-on 'Nous n'avons pas encore mangé' en Darija ?",
        correct: "Ma klina-sh mazal",
        options: ["Ma klina-sh mazal", "Klinaw mezyan", "Ghadi naklu", "Ma bghina-sh naklu"],
        explanation: "'Ma klina-sh' = nous n'avons pas mangé, 'mazal' = encore/pas encore. 'Mazal ma...sh' = pas encore."
      }
    ]
  },
  {
    id: 33,
    courseId: 27,
    title: "Quiz : Santé & Corps",
    emoji: "🏥",
    difficulty: "Avancé",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Kħaydini ras' ?",
        correct: "J'ai mal à la tête",
        options: ["J'ai de la fièvre", "J'ai mal à la tête", "J'ai la nausée", "Je suis fatigué"],
        explanation: "'Kħaydini ras' = littéralement 'ma tête me fait mal'. 'Kħaydini' = me fait mal, 'ras' = tête."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'fièvre' en Darija ?",
        correct: "Ħrara",
        options: ["Ħrara", "Kankoh", "Dawa", "Daba"],
        explanation: "'Ħrara' = fièvre (littéralement chaleur). '3ndi ħrara' = j'ai de la fièvre."
      },
      {
        id: 3,
        type: "translate-to-french",
        question: "Que signifie 'Kankoh' ?",
        correct: "Toux",
        options: ["Grippe", "Toux", "Rhume", "Maux de gorge"],
        explanation: "'Kankoh' = toux. '3ndi kankoh' = j'ai la toux. Associé souvent à 'rih' (froid/rhume)."
      },
      {
        id: 4,
        type: "fill-blank",
        question: "'Kħessni _____, 3ndi ħrara' (J'ai besoin d'un médecin, j'ai de la fièvre)",
        correct: "tbib",
        options: ["dawa", "tbib", "mustashfa", "kankoh"],
        explanation: "'Kħessni tbib' = j'ai besoin d'un médecin. 'Kħessni' = il me faut/j'ai besoin de."
      },
      {
        id: 5,
        type: "match-pairs",
        question: "Associe chaque symptôme Darija à sa traduction française",
        correct: '[["Khaydini ras","Mal de tête"],["Hrara","Fièvre"],["Kankoh","Toux"],["Dawa","Médicament"]]',
        options: [],
        explanation: "Santé essentielle : Khaydini ras=Mal de tête, Hrara=Fièvre, Kankoh=Toux, Dawa=Médicament."
      },
      {
        id: 6,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'J'ai beaucoup de fièvre, j'ai besoin d'un médecin'",
        correct: "3ndi ħrara 3aliya kħessni tbib",
        options: ["tbib", "3ndi", "kħessni", "3aliya", "ħrara"],
        explanation: "'3ndi ħrara 3aliya' = j'ai une forte fièvre, 'kħessni tbib' = j'ai besoin d'un médecin."
      },
      {
        id: 7,
        type: "choose-meaning",
        question: "Que signifie 'Mustashfa' ?",
        correct: "Hôpital",
        options: ["Hôpital", "Pharmacie", "Médecin", "Ambulance"],
        explanation: "'Mustashfa' = hôpital. 'Farmashiya' = pharmacie. 'Sbitar' est aussi utilisé familièrement pour hôpital."
      },
      {
        id: 8,
        type: "translate-to-darija",
        question: "Comment dit-on 'Je dois aller à la pharmacie acheter un médicament contre la fièvre' ?",
        correct: "Kħessni nmshi l-l-farmashiya nshri dawa d-l-ħrara",
        options: [
          "Kħessni nmshi l-l-farmashiya nshri dawa d-l-ħrara",
          "Bghit nmshi l-mustashfa",
          "3ndi ħrara bzzaf kħessni tbib",
          "Mshit l-farmashiya w shreyt dawa"
        ],
        explanation: "'Kħessni nmshi l-l-farmashiya' = je dois aller à la pharmacie, 'nshri dawa d-l-ħrara' = acheter un médicament contre la fièvre."
      },
      {
        id: 9,
        type: "translate-to-french",
        question: "Que signifie 'Sħħa w raha' ?",
        correct: "Bonne santé et repos (toast marocain)",
        options: [
          "Bon appétit",
          "Bonne santé et repos (toast marocain)",
          "Prends soin de toi",
          "Guérissez vite"
        ],
        explanation: "'Sħħa w raha' = santé et repos. Formule utilisée comme toast ou pour souhaiter du bien à quelqu'un."
      },
      {
        id: 10,
        type: "fill-blank",
        question: "'Ras-i _____ bzzaf, ma qdarsh nmshi l-l-khedma' (J'ai très mal à la tête, je ne peux pas aller au travail)",
        correct: "kay-derni",
        options: ["mzyan", "kay-derni", "ferhan", "bard"],
        explanation: "'Ras-i kay-derni' = ma tête me fait mal. 'Ma qdar-sh' = je ne peux pas."
      },
      {
        id: 11,
        type: "translate-to-darija",
        question: "Comment dit-on 'Je me sens mieux maintenant' ?",
        correct: "Daba ħsit b-rasi mzyan",
        options: ["Daba ħsit b-rasi mzyan", "3ndi ħrara mazal", "Ma nqdar-sh nmshi", "Kħessni dawa"],
        explanation: "'Ħsit b-rasi mzyan' = je me sens bien/mieux. 'Ħssa' = sentir/ressentir."
      },
      {
        id: 12,
        type: "choose-meaning",
        question: "Que signifie '3ndi wja3 f-kersh' ?",
        correct: "J'ai mal au ventre",
        options: ["J'ai mal au dos", "J'ai mal au ventre", "J'ai mal aux jambes", "J'ai mal à la gorge"],
        explanation: "'Wja3' = douleur/mal, 'kersh' = ventre/estomac. '3ndi wja3 f-kersh' = j'ai mal au ventre."
      }
    ]
  },
  {
    id: 34,
    courseId: null,
    title: "Grand Quiz Semaine 1 — Débutant",
    emoji: "🎯",
    difficulty: "Débutant",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Salam 3alikum' ?",
        correct: "Bonjour / La paix soit sur vous",
        options: ["Au revoir", "Bonjour / La paix soit sur vous", "Merci", "Comment tu vas ?"],
        explanation: "'Salam 3alikum' = la paix soit sur vous. Salutation musulmane universelle."
      },
      {
        id: 2,
        type: "translate-to-darija",
        question: "Comment dit-on 'Au revoir' en Darija ?",
        correct: "Bslama",
        options: ["Salam", "Bslama", "Labas", "Mzyan"],
        explanation: "'Bslama' = au revoir, littéralement 'en sécurité'."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Que répond-on à 'Labas 3lik ?' ?",
        correct: "Labas, alħamdoulillah",
        options: ["Bslama", "Labas, alħamdoulillah", "Inshallah", "Shukran"],
        explanation: "'Labas, alħamdoulillah' = ça va, grâce à Dieu. Réponse standard à 'comment tu vas ?'"
      },
      {
        id: 4,
        type: "translate-to-french",
        question: "Que signifie 'Wahd, jouj, tlata' ?",
        correct: "Un, deux, trois",
        options: ["Un, deux, trois", "Deux, trois, quatre", "Un, trois, cinq", "Trois, six, neuf"],
        explanation: "'Wahd' = 1, 'jouj' = 2, 'tlata' = 3. Les trois premiers chiffres en Darija."
      },
      {
        id: 5,
        type: "translate-to-darija",
        question: "Comment dit-on '10' en Darija ?",
        correct: "3shra",
        options: ["Ts3oud", "3shra", "Hdash", "Rb3a"],
        explanation: "'3shra' = dix (10). '3' représente la lettre arabe 'aïn'."
      },
      {
        id: 6,
        type: "translate-to-french",
        question: "Que signifie 'Khouya' dans le contexte familial ?",
        correct: "Mon frère",
        options: ["Mon père", "Mon oncle", "Mon frère", "Mon cousin"],
        explanation: "'Khouya' = mon frère. 'Khti' = ma sœur, 'bba' = mon père, 'mmi' = ma mère."
      },
      {
        id: 7,
        type: "fill-blank",
        question: "'Weld-i w _____ -i mshiw l-l-madrasa' (Mon fils et ma fille sont allés à l'école)",
        correct: "bent",
        options: ["khouya", "bent", "mmi", "3ammi"],
        explanation: "'Bent-i' = ma fille (féminin de 'weld' = fils). 'Bent' = fille, 'weld' = fils/garçon."
      },
      {
        id: 8,
        type: "translate-to-darija",
        question: "Comment dit-on 'Combien ça coûte ?' au marché ?",
        correct: "B-shhal had sh-shi ?",
        options: ["Wash kayn ?", "B-shhal had sh-shi ?", "Bghit nshri", "3tini wahd"],
        explanation: "'B-shhal had sh-shi?' = combien coûte cette chose ? Formule indispensable au souk."
      },
      {
        id: 9,
        type: "match-pairs",
        question: "Associe chaque expression à sa traduction française",
        correct: '[["Salam 3alikum","Bonjour"],["Bslama","Au revoir"],["Shukran","Merci"],["Men fadlak","S il vous plaît"]]',
        options: [],
        explanation: "Expressions de politesse essentielles en Darija. La base de toute interaction."
      },
      {
        id: 10,
        type: "translate-to-french",
        question: "Que signifie 'L-ysar' ?",
        correct: "À gauche",
        options: ["À droite", "À gauche", "Tout droit", "Derrière"],
        explanation: "'L-ysar' = à gauche. 'L-limin' = à droite. 'Negda' = tout droit."
      },
      {
        id: 11,
        type: "fill-blank",
        question: "'Mshi _____, men b3d dir l-ysar' (Va tout droit, puis tourne à gauche)",
        correct: "negda",
        options: ["l-limin", "negda", "lura", "qdam"],
        explanation: "'Negda' = tout droit. Instructions de navigation essentielles."
      },
      {
        id: 12,
        type: "choose-meaning",
        question: "Que signifie 'Khssk tkheddem' ?",
        correct: "Tu dois travailler",
        options: ["Tu veux travailler ?", "Tu dois travailler", "Tu travailles ?", "Tu as travaillé"],
        explanation: "'Khssk' = tu dois/il te faut (2ème personne singulier de 'kħess'). Construction d'obligation."
      },
      {
        id: 13,
        type: "translate-to-french",
        question: "Que signifie 'Bnin' ?",
        correct: "Délicieux",
        options: ["Cher", "Délicieux", "Chaud", "Grand"],
        explanation: "'Bnin' = délicieux/bon au goût. 'Bnin bzzaf' = très délicieux. Utilisé pour la nourriture."
      },
      {
        id: 14,
        type: "translate-to-darija",
        question: "Comment dit-on 'Je m'appelle Youssef' ?",
        correct: "Smiti Youssef",
        options: ["Ana Youssef", "Smiti Youssef", "Bghit Youssef", "Khouya Youssef"],
        explanation: "'Smiti' = je m'appelle (mon nom est). 'Ash smitik ?' = comment tu t'appelles ?"
      },
      {
        id: 15,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Bonjour, je veux aller au marché, combien le taxi ?'",
        correct: "Salam, bghit nmshi l-s-souq b-shhal taxi?",
        options: ["nmshi", "Salam,", "l-s-souq", "bghit", "b-shhal", "taxi?"],
        explanation: "Phrase complète de la vie quotidienne : salutation + destination + question de prix."
      }
    ]
  },
  {
    id: 35,
    courseId: null,
    title: "Grand Quiz Semaine 2 — Intermédiaire",
    emoji: "🎯",
    difficulty: "Intermédiaire",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Ferħan' ?",
        correct: "Content / Heureux",
        options: ["Triste", "Content / Heureux", "En colère", "Effrayé"],
        explanation: "'Ferħan' = content/heureux. 'Ferħana' = heureuse (féminin)."
      },
      {
        id: 2,
        type: "translate-to-french",
        question: "Que signifie 'Ħzin' ?",
        correct: "Triste",
        options: ["Fatigué", "Triste", "Malade", "Nerveux"],
        explanation: "'Ħzin' = triste. 'Ħzina' = triste (féminin). '3ndi ħzin' = j'ai de la tristesse."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Que signifie 'Kħaif' ?",
        correct: "Effrayé / Il a peur",
        options: ["Il est fatigué", "Effrayé / Il a peur", "Il est content", "Il est en colère"],
        explanation: "'Kħaif' = il a peur / effrayé. 'Kħaifa' = elle a peur. '3ndi kħif' = j'ai peur."
      },
      {
        id: 4,
        type: "translate-to-darija",
        question: "Comment dit-on 'Il fait beau' en Darija ?",
        correct: "L-jaw mezyan",
        options: ["L-jaw berd", "L-jaw mezyan", "Kat-tih sh-shta", "Shkhoun bzzaf"],
        explanation: "'L-jaw mezyan' = le temps est beau. 'L-jaw' = le temps/l'atmosphère."
      },
      {
        id: 5,
        type: "fill-blank",
        question: "'L-jaw _____ bzzaf l-yum' (Il fait très froid aujourd'hui)",
        correct: "berd",
        options: ["shkhoun", "berd", "mezyan", "ħlu"],
        explanation: "'L-jaw berd' = il fait froid. 'Berd' = froid, 'shkhoun' = chaud, 'mezyan' = beau."
      },
      {
        id: 6,
        type: "translate-to-french",
        question: "Que signifie 'Ras' dans un contexte médical ?",
        correct: "Tête",
        options: ["Dos", "Tête", "Ventre", "Jambe"],
        explanation: "'Ras' = tête. 'Kħaydini ras' = j'ai mal à la tête. 'Ras' désigne aussi le chef/la tête d'un groupe."
      },
      {
        id: 7,
        type: "fill-blank",
        question: "'3ndi _____ f-l-kersh' (J'ai mal au ventre)",
        correct: "wja3",
        options: ["ħrara", "wja3", "kankoh", "dawa"],
        explanation: "'Wja3' = douleur/mal. '3ndi wja3 f-l-kersh' = j'ai mal au ventre."
      },
      {
        id: 8,
        type: "translate-to-darija",
        question: "Comment dit-on 'le bureau' en Darija ?",
        correct: "Maktab",
        options: ["Maktab", "Khedma", "Sharika", "Irfada"],
        explanation: "'Maktab' = bureau. 'Khedma' = travail, 'sharika' = entreprise/société."
      },
      {
        id: 9,
        type: "choose-meaning",
        question: "Que signifie 'Bghit nkhdem' ?",
        correct: "Je veux travailler",
        options: ["Je travaille", "Je veux travailler", "J'ai travaillé", "Je dois travailler"],
        explanation: "'Bghit' = je veux, 'nkhdem' = travailler (1ère pers. sg présent). 'Bghit nkhdem' = je veux travailler."
      },
      {
        id: 10,
        type: "match-pairs",
        question: "Associe chaque émotion Darija à sa traduction française",
        correct: '[["Ferhan","Content"],["Hzin","Triste"],["Khaif","Effrayé"],["3yyad","Malade"]]',
        options: [],
        explanation: "Émotions et états : Ferhan=Content, Hzin=Triste, Khaif=Effrayé, 3yyad=Malade."
      },
      {
        id: 11,
        type: "translate-to-french",
        question: "Que signifie 'Tren' ?",
        correct: "Train",
        options: ["Bus", "Train", "Avion", "Taxi"],
        explanation: "'Tren' = train. 'Autobis' = bus, 'tiran' = avion, 'taxi' = taxi (même mot)."
      },
      {
        id: 12,
        type: "fill-blank",
        question: "'S-sa3a _____ f-s-sbah' (Il est 9h du matin)",
        correct: "ts3oud",
        options: ["tmanya", "ts3oud", "3ashra", "hdash"],
        explanation: "'Ts3oud' = neuf (9). 'F-s-sbah' = du matin. 'S-sa3a ts3oud' = il est 9h."
      },
      {
        id: 13,
        type: "translate-to-darija",
        question: "Comment dit-on 'Le matin' en Darija ?",
        correct: "S-sbah",
        options: ["S-sbah", "L-3shiya", "L-lil", "D-dhor"],
        explanation: "'S-sbah' = le matin. 'L-3shiya' = le soir, 'l-lil' = la nuit, 'd-dhor' = midi."
      },
      {
        id: 14,
        type: "choose-meaning",
        question: "Que signifie 'B3id' ?",
        correct: "Loin",
        options: ["Proche", "Loin", "À droite", "En face"],
        explanation: "'B3id' = loin. 'Qrib' = proche/près. 'B3id bzzaf' = très loin."
      },
      {
        id: 15,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'J'ai besoin d'aller chez le médecin parce que j'ai beaucoup de fièvre'",
        correct: "Kħessni nmshi l-l-tbib ħit 3ndi ħrara bzzaf",
        options: ["l-l-tbib", "3ndi", "Kħessni", "nmshi", "ħit", "bzzaf", "ħrara"],
        explanation: "'Kħessni nmshi' = je dois aller, 'l-l-tbib' = chez le médecin, 'ħit' = parce que, '3ndi ħrara bzzaf' = j'ai beaucoup de fièvre."
      }
    ]
  },
  {
    id: 36,
    courseId: null,
    title: "Grand Quiz Semaine 3 — Intermédiaire",
    emoji: "🎯",
    difficulty: "Intermédiaire",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Quelle est la forme féminine de 'Khdar' (vert) ?",
        correct: "Khdra",
        options: ["Khdari", "Khdra", "Khadra", "Khdar"],
        explanation: "En Darija, les adjectifs de couleur s'accordent : Khdar (m) → Khdra (f). Ex: 'qamija khdra' = chemise verte."
      },
      {
        id: 2,
        type: "fill-blank",
        question: "'L-kuzina _____ zwina f-dar-na' (La cuisine bleue est belle dans notre maison)",
        correct: "zerqa",
        options: ["zerq", "zerqa", "ħmra", "sfra"],
        explanation: "'Zerqa' = bleu (féminin). 'L-kuzina' = la cuisine (féminin), donc l'adjectif s'accorde."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Quelle couleur est associée à la ville de Chefchaouen ?",
        correct: "Zerq (bleu)",
        options: ["Ħmer (rouge)", "Zerq (bleu)", "Sfar (jaune)", "Khdar (vert)"],
        explanation: "Chefchaouen est célèbre pour ses ruelles peintes en bleu (zerq). Ville emblématique du nord du Maroc."
      },
      {
        id: 4,
        type: "translate-to-french",
        question: "Que signifie 'Kabout' ?",
        correct: "Veste / Manteau",
        options: ["Chapeau", "Veste / Manteau", "Chaussures", "Ceinture"],
        explanation: "'Kabout' = veste ou manteau. 'Qftan' = caftan (vêtement traditionnel). 'Chchia' = bonnet traditionnel."
      },
      {
        id: 5,
        type: "translate-to-darija",
        question: "Comment dit-on 'Je cherche des chaussures' ?",
        correct: "Kanqllb 3la sabbat",
        options: ["Bghit nshri qamija", "Kanqllb 3la sabbat", "3ndi sabbat jdid", "Sabbat ghali bzzaf"],
        explanation: "'Kanqllb 3la' = je cherche. 'Sabbat' = chaussures. Expression utile pour faire du shopping."
      },
      {
        id: 6,
        type: "translate-to-french",
        question: "Que signifie 'Brtqal' ?",
        correct: "Orange (fruit)",
        options: ["Citron", "Orange (fruit)", "Pamplemousse", "Mandarine"],
        explanation: "'Brtqal' = orange. Le nom du fruit vient du portugais 'Portugal', d'où les oranges étaient importées."
      },
      {
        id: 7,
        type: "fill-blank",
        question: "Au souk : 'Bghit _____ kilo d-l-limo' (Je veux deux kilos de citrons)",
        correct: "jouj",
        options: ["wahd", "jouj", "tlata", "rb3a"],
        explanation: "'Jouj' = deux. 'Jouj kilo d-l-limo' = deux kilos de citrons. 'Jouj' remplace 'tnin' en Darija."
      },
      {
        id: 8,
        type: "match-pairs",
        question: "Associe chaque mot à sa traduction",
        correct: '[["Teffah","Pomme"],["Qamija","Chemise"],["Khdar","Vert"],["3shrin","20"]]',
        options: [],
        explanation: "Révision croisée : fruits, vêtements, couleurs et nombres."
      },
      {
        id: 9,
        type: "translate-to-darija",
        question: "Comment dit-on 'Elle mange' (présent) en Darija ?",
        correct: "Kat-takul",
        options: ["Kay-yakul", "Kat-takul", "Klat", "Ghadi takul"],
        explanation: "'Kat-takul' = elle mange (présent féminin). 'Kay-yakul' = il mange (présent masculin)."
      },
      {
        id: 10,
        type: "choose-meaning",
        question: "Que signifie 'Ma klayt-sh l-ftour' ?",
        correct: "Je n'ai pas mangé le petit-déjeuner",
        options: [
          "Je veux manger le déjeuner",
          "Je n'ai pas mangé le petit-déjeuner",
          "J'ai déjà mangé",
          "Le petit-déjeuner est prêt"
        ],
        explanation: "'Ma klayt-sh' = je n'ai pas mangé (négatif passé). 'L-ftour' = le petit-déjeuner."
      },
      {
        id: 11,
        type: "fill-blank",
        question: "'3ndi _____ w khemsa w 3shrin 3am' (J'ai 45 ans)",
        correct: "rb3in",
        options: ["3shrin", "tlatin", "rb3in", "khemsin"],
        explanation: "'Rb3in w khemsa w 3shrin' = 40+5 = 45. En Darija les dizaines viennent avant les unités."
      },
      {
        id: 12,
        type: "translate-to-french",
        question: "Que signifie '3shrin w wahd dirham' ?",
        correct: "21 dirhams",
        options: ["12 dirhams", "21 dirhams", "20 dirhams", "201 dirhams"],
        explanation: "'3shrin w wahd' = vingt et un (21). En Darija : dizaine + 'w' + unité."
      },
      {
        id: 13,
        type: "translate-to-darija",
        question: "Comment dit-on 'Nous mangeons du couscous le vendredi' ?",
        correct: "Kanaklu kseksou nhar l-jm3a",
        options: ["Bghina naklu kseksou", "Kanaklu kseksou nhar l-jm3a", "Klina kseksou lbareh", "Kseksou bnin bzzaf"],
        explanation: "'Kanaklu' = nous mangeons (présent), 'nhar l-jm3a' = le jour du vendredi. Tradition marocaine."
      },
      {
        id: 14,
        type: "choose-meaning",
        question: "Que signifie 'Tbghi tatay ?' ?",
        correct: "Tu veux du thé ?",
        options: ["Tu as du thé ?", "Tu veux du thé ?", "Tu achètes du thé ?", "Le thé est prêt ?"],
        explanation: "'Tbghi' = tu veux (2ème sg). 'Tatay/Atay' = thé. Offrir du thé est un geste d'hospitalité."
      },
      {
        id: 15,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Je vais aller acheter un kilo de pommes et un nouveau pantalon'",
        correct: "Ghadi nmshi nshri kilo teffah w serwal jdid",
        options: ["teffah", "nshri", "jdid", "Ghadi", "nmshi", "serwal", "kilo", "w"],
        explanation: "Phrase de shopping combinant fruits et vêtements. Structure : Ghadi + verbe + compléments."
      }
    ]
  },
  {
    id: 37,
    courseId: null,
    title: "Grand Quiz Semaine 4 — Avancé",
    emoji: "🏆",
    difficulty: "Avancé",
    questions: [
      {
        id: 1,
        type: "choose-meaning",
        question: "Dans quel contexte dit-on 'Bismillah' avant de commencer ?",
        correct: "Avant de manger, conduire, ou commencer toute action importante",
        options: [
          "Uniquement avant de prier",
          "Avant de manger, conduire, ou commencer toute action importante",
          "Seulement lors des fêtes religieuses",
          "Pour remercier quelqu'un"
        ],
        explanation: "'Bismillah' = au nom de Dieu. S'utilise avant toute action pour se placer sous la protection divine."
      },
      {
        id: 2,
        type: "translate-to-french",
        question: "Que signifie 'Rbi ybarek fik' ?",
        correct: "Que Dieu te bénisse",
        options: ["Si Dieu le veut", "Que Dieu te bénisse", "Grâce à Dieu", "Au nom de Dieu"],
        explanation: "'Rbi ybarek fik' = que Dieu te bénisse. Réponse à un compliment ou expression de gratitude."
      },
      {
        id: 3,
        type: "fill-blank",
        question: "'L-_____ d-l-madrasa kayna f-had l-ħay' (L'école se trouve dans ce quartier)",
        correct: "madrasa",
        options: ["jami3a", "madrasa", "ustad", "imtiħan"],
        explanation: "'L-madrasa kayna' = l'école se trouve. 'F-had l-ħay' = dans ce quartier."
      },
      {
        id: 4,
        type: "translate-to-darija",
        question: "Comment dit-on 'Mon fils est étudiant à l'université' ?",
        correct: "Weld-i talib f-l-jami3a",
        options: ["Weld-i talmid f-l-madrasa", "Weld-i talib f-l-jami3a", "Weld-i ustad f-l-jami3a", "Weld-i f-l-imtiħan"],
        explanation: "'Talib' = étudiant (universitaire). 'Talmid' = élève (école). 'Jami3a' = université."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Jbal l-atlas' ?",
        correct: "Les montagnes de l'Atlas",
        options: ["Le désert du Sahara", "Les montagnes de l'Atlas", "La forêt du Rif", "La mer Méditerranée"],
        explanation: "'Jbal l-atlas' = les montagnes de l'Atlas. Le plus haut sommet, Toubkal, culmine à 4167m."
      },
      {
        id: 6,
        type: "choose-meaning",
        question: "Combien de façades maritimes le Maroc possède-t-il ?",
        correct: "Deux : Atlantique à l'ouest, Méditerranée au nord",
        options: [
          "Une seule : l'Atlantique",
          "Deux : Atlantique à l'ouest, Méditerranée au nord",
          "Trois : Atlantique, Méditerranée et mer Rouge",
          "Aucune, le Maroc est enclavé"
        ],
        explanation: "Le Maroc borde deux mers : l'Atlantique (ouest) et la Méditerranée (nord). Géographie unique en Afrique du Nord."
      },
      {
        id: 7,
        type: "translate-to-darija",
        question: "Comment dit-on 'Le médecin m'a prescrit des médicaments' ?",
        correct: "L-tbib 3tani dawa",
        options: ["L-tbib msha l-mustashfa", "L-tbib 3tani dawa", "Kħessni tbib mezyan", "L-farmashiya b3ida"],
        explanation: "'L-tbib 3tani dawa' = le médecin m'a donné des médicaments. '3ta' = donner (passé)."
      },
      {
        id: 8,
        type: "fill-blank",
        question: "'Kont _____ mlli kont sghir f-l-mdina' (J'habitais dans la médina quand j'étais enfant)",
        correct: "kansken",
        options: ["kankhdem", "kansken", "kanqra", "kanhder"],
        explanation: "'Kansken' = j'habitais (imparfait de 'sken'). 'Mlli' = quand/lorsque. Construction de l'imparfait avec 'k-' + verbe présent."
      },
      {
        id: 9,
        type: "match-pairs",
        question: "Associe chaque expression à sa traduction",
        correct: '[["Bismillah","Au nom de Dieu"],["Tbib","Médecin"],["Jbal","Montagne"],["Mustashfa","Hôpital"]]',
        options: [],
        explanation: "Révision des semaines 3-4 : religion, santé, nature."
      },
      {
        id: 10,
        type: "translate-to-french",
        question: "Que signifie 'Kan kaykhdem f-sharika kbira' ?",
        correct: "Il travaillait dans une grande entreprise",
        options: [
          "Il cherche une grande entreprise",
          "Il travaillait dans une grande entreprise",
          "Il va travailler dans une grande entreprise",
          "Il a créé une grande entreprise"
        ],
        explanation: "'Kan kaykhdem' = il travaillait (imparfait). 'F-sharika kbira' = dans une grande entreprise."
      },
      {
        id: 11,
        type: "fill-blank",
        question: "'Ghadi _____ l-imtiħan ghda' (Elle va passer l'examen demain)",
        correct: "tjri 3liha",
        options: ["ynjħ", "tjri 3liha", "tqra", "tja"],
        explanation: "'Tjri 3liha l-imtiħan' = l'examen lui sera soumis / elle va passer l'examen. 'Jra 3la' = concerner/se passer pour."
      },
      {
        id: 12,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Je ne suis pas allé à l'école parce que j'étais malade et j'avais mal à la tête'",
        correct: "Ma mshitsh l-l-madrasa ħit kont 3yyad w kħaydini rasi",
        options: ["kont", "ħit", "Ma", "rasi", "mshitsh", "l-l-madrasa", "3yyad", "kħaydini", "w"],
        explanation: "'Ma mshitsh' = je ne suis pas allé, 'l-l-madrasa' = à l'école, 'ħit kont 3yyad' = parce que j'étais malade."
      },
      {
        id: 13,
        type: "translate-to-french",
        question: "Que signifie '3ndi wja3 f-dhri w ma qdar-sh nmshi' ?",
        correct: "J'ai mal au dos et je ne peux pas marcher",
        options: [
          "J'ai mal à la tête et je suis fatigué",
          "J'ai mal au dos et je ne peux pas marcher",
          "J'ai la fièvre et je dois rester",
          "Je suis malade et je vais à l'hôpital"
        ],
        explanation: "'Wja3 f-dhri' = mal au dos, 'ma qdar-sh nmshi' = je ne peux pas marcher/aller."
      },
      {
        id: 14,
        type: "choose-meaning",
        question: "Que signifie 'Njħ f-l-imtiħan' ?",
        correct: "Réussir l'examen",
        options: ["Passer un examen", "Réussir l'examen", "Rater l'examen", "Réviser pour l'examen"],
        explanation: "'Njħ f-' = réussir dans/à. 'Ma njħ-sh' = il n'a pas réussi. 'Rshq' = rater (examen)."
      },
      {
        id: 15,
        type: "translate-to-darija",
        question: "Comment dit-on 'Mon ami est commerçant dans la médina de Fès' ?",
        correct: "Sħabi tjar f-mdina d-Fas",
        options: [
          "Khouya tbib f-l-mustashfa",
          "Sħabi tjar f-mdina d-Fas",
          "L-ustad mzyan f-l-madrasa",
          "Weld-i muħandis f-Casablanca"
        ],
        explanation: "'Sħabi' = mon ami, 'tjar' = commerçant, 'f-mdina d-Fas' = dans la médina de Fès."
      }
    ]
  },
  {
    id: 38,
    courseId: null,
    title: "Quiz Vitesse — Vocabulaire Complet",
    emoji: "⚡",
    difficulty: "Intermédiaire",
    questions: [
      {
        id: 1,
        type: "choose-meaning",
        question: "Zerq = ?",
        correct: "Bleu",
        options: ["Rouge", "Bleu", "Vert", "Jaune"],
        explanation: "'Zerq' = bleu. Couleur emblématique de Chefchaouen."
      },
      {
        id: 2,
        type: "choose-meaning",
        question: "Sabbat = ?",
        correct: "Chaussures",
        options: ["Pantalon", "Chemise", "Chaussures", "Veste"],
        explanation: "'Sabbat' = chaussures. 'Belgha' = babouches traditionnelles."
      },
      {
        id: 3,
        type: "choose-meaning",
        question: "Teffah = ?",
        correct: "Pomme",
        options: ["Citron", "Pastèque", "Pomme", "Orange"],
        explanation: "'Teffah' = pomme. Fruit populaire des régions montagneuses du Maroc."
      },
      {
        id: 4,
        type: "choose-meaning",
        question: "Msha = ?",
        correct: "Aller / Il est allé",
        options: ["Venir", "Manger", "Aller / Il est allé", "Dormir"],
        explanation: "'Msha' = aller (infinitif) ou il est allé (passé 3ème sg masculin)."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "3shrin = ?",
        correct: "20",
        options: ["10", "12", "20", "30"],
        explanation: "'3shrin' = vingt (20). '3' représente la lettre arabe 'aïn'."
      },
      {
        id: 6,
        type: "translate-to-french",
        question: "Salam 3alikum = ?",
        correct: "Bonjour",
        options: ["Au revoir", "Merci", "Bonjour", "Excuse-moi"],
        explanation: "'Salam 3alikum' = la paix soit sur vous. Salutation principale en Darija."
      },
      {
        id: 7,
        type: "choose-meaning",
        question: "Mmi = ?",
        correct: "Ma mère",
        options: ["Ma sœur", "Ma grand-mère", "Ma mère", "Ma tante"],
        explanation: "'Mmi' = ma mère. 'Bba' = mon père, 'jdda' = ma grand-mère."
      },
      {
        id: 8,
        type: "choose-meaning",
        question: "Kseksou = ?",
        correct: "Couscous",
        options: ["Tajine", "Couscous", "Harira", "Pastilla"],
        explanation: "'Kseksou' = couscous. Plat traditionnel marocain, souvent mangé le vendredi."
      },
      {
        id: 9,
        type: "translate-to-french",
        question: "Negda = ?",
        correct: "Tout droit",
        options: ["À gauche", "À droite", "Tout droit", "En face"],
        explanation: "'Negda' = tout droit. Direction essentielle pour se repérer."
      },
      {
        id: 10,
        type: "choose-meaning",
        question: "Ferħan = ?",
        correct: "Content",
        options: ["Triste", "Content", "Fatigué", "Malade"],
        explanation: "'Ferħan' = content/heureux. État émotionnel positif."
      },
      {
        id: 11,
        type: "choose-meaning",
        question: "Ras = ?",
        correct: "Tête",
        options: ["Main", "Pied", "Tête", "Dos"],
        explanation: "'Ras' = tête. 'Kħaydini ras' = j'ai mal à la tête."
      },
      {
        id: 12,
        type: "translate-to-french",
        question: "Tbib = ?",
        correct: "Médecin",
        options: ["Pharmacien", "Médecin", "Infirmier", "Dentiste"],
        explanation: "'Tbib' = médecin/docteur. 'Kħessni tbib' = j'ai besoin d'un médecin."
      },
      {
        id: 13,
        type: "match-pairs",
        question: "Associe chaque mot à sa traduction",
        correct: '[["Zerq","Bleu"],["Sabbat","Chaussures"],["Msha","Aller"],["Jame3","Mosquée"]]',
        options: [],
        explanation: "Révision rapide : couleur, vêtement, verbe, lieu."
      },
      {
        id: 14,
        type: "choose-meaning",
        question: "Inshallah = ?",
        correct: "Si Dieu le veut",
        options: ["Au nom de Dieu", "Grâce à Dieu", "Si Dieu le veut", "Que Dieu bénisse"],
        explanation: "'Inshallah' = si Dieu le veut. Expression d'espoir ou de condition."
      },
      {
        id: 15,
        type: "choose-meaning",
        question: "Jbal = ?",
        correct: "Montagne",
        options: ["Mer", "Désert", "Montagne", "Forêt"],
        explanation: "'Jbal' = montagne. 'Jbal l-atlas' = les montagnes de l'Atlas."
      }
    ]
  },
  {
    id: 39,
    courseId: null,
    title: "Quiz Culture Marocaine",
    emoji: "🇲🇦",
    difficulty: "Intermédiaire",
    questions: [
      {
        id: 1,
        type: "choose-meaning",
        question: "'Mshallah' se dit lors d'un compliment pour protéger de...",
        correct: "L-3in (le mauvais œil)",
        options: [
          "La jalousie générale",
          "L-3in (le mauvais œil)",
          "La malchance naturelle",
          "Les maladies"
        ],
        explanation: "'Mshallah' protège contre 'l-3in' (le mauvais œil). Croyance que l'envie ou l'admiration excessive peut porter malheur."
      },
      {
        id: 2,
        type: "choose-meaning",
        question: "Qu'est-ce qu'un 'Riad' ?",
        correct: "Maison traditionnelle marocaine avec patio central",
        options: [
          "Un grand hôtel de luxe",
          "Maison traditionnelle marocaine avec patio central",
          "Un type de mosquée",
          "Un souk couvert"
        ],
        explanation: "Le riad est une demeure traditionnelle organisée autour d'un jardin ou patio intérieur. Le mot vient de l'arabe 'rawdha' (jardin)."
      },
      {
        id: 3,
        type: "translate-to-darija",
        question: "Comment appelle-t-on les montagnes de l'Atlas en Darija ?",
        correct: "Jbal l-atlas",
        options: ["S-saħra", "Jbal l-atlas", "L-bħar", "L-ghaba"],
        explanation: "'Jbal l-atlas' = les montagnes de l'Atlas. Chaîne principale du Maroc, avec le Toubkal à 4167m."
      },
      {
        id: 4,
        type: "choose-meaning",
        question: "'L-khmsa' (5) est aussi le nom de...",
        correct: "L'amulette en forme de main (main de Fatima)",
        options: [
          "Un plat traditionnel",
          "L'amulette en forme de main (main de Fatima)",
          "Un type de tissu",
          "Une danse traditionnelle"
        ],
        explanation: "'L-khmsa' = la main à cinq doigts, amulette protectrice très répandue au Maghreb. Aussi appelée 'main de Fatima'."
      },
      {
        id: 5,
        type: "translate-to-french",
        question: "Que signifie 'Ftour' selon le contexte ?",
        correct: "Petit-déjeuner et aussi rupture du jeûne (iftar)",
        options: [
          "Uniquement le petit-déjeuner",
          "Petit-déjeuner et aussi rupture du jeûne (iftar)",
          "Le déjeuner uniquement",
          "Un repas de fête"
        ],
        explanation: "'Ftour' = petit-déjeuner en usage quotidien. Pendant Ramadan, 'ftour' désigne aussi l'iftar (repas de rupture du jeûne au coucher du soleil)."
      },
      {
        id: 6,
        type: "choose-meaning",
        question: "Le Maroc est bordé par quelles étendues d'eau ?",
        correct: "L'Atlantique et la Méditerranée",
        options: [
          "Uniquement l'Atlantique",
          "L'Atlantique et la Méditerranée",
          "La Méditerranée et la mer Rouge",
          "L'Atlantique et la mer Noire"
        ],
        explanation: "Le Maroc a une double façade maritime unique : l'océan Atlantique (côte ouest) et la mer Méditerranée (côte nord)."
      },
      {
        id: 7,
        type: "translate-to-french",
        question: "Que désigne 'Derb' dans la médina ?",
        correct: "Ruelle ou impasse de la vieille ville",
        options: [
          "Une grande avenue",
          "Ruelle ou impasse de la vieille ville",
          "La place principale",
          "Le marché couvert"
        ],
        explanation: "'Derb' = ruelle/impasse dans la médina. Ces petites rues tortueuses forment le tissu urbain traditionnel."
      },
      {
        id: 8,
        type: "choose-meaning",
        question: "La tradition du 'Hammam' est particulièrement observée...",
        correct: "Avant la prière du vendredi et pour les occasions spéciales",
        options: [
          "Uniquement lors du Ramadan",
          "Avant la prière du vendredi et pour les occasions spéciales",
          "Chaque matin",
          "Uniquement en hiver"
        ],
        explanation: "Le hammam (bain public) est une pratique sociale et religieuse. La purification avant la prière du vendredi est une tradition importante."
      },
      {
        id: 9,
        type: "translate-to-french",
        question: "Que signifie 'L-argan' dans la culture marocaine ?",
        correct: "L'arganier et son huile, trésor endémique du Maroc",
        options: [
          "Un type de tapis artisanal",
          "L'arganier et son huile, trésor endémique du Maroc",
          "Une épice traditionnelle",
          "Un instrument de musique gnaoui"
        ],
        explanation: "L'arganier (argania spinosa) pousse uniquement au Maroc (région de Souss). L'UNESCO a classé cette forêt biosphère en 1998."
      },
      {
        id: 10,
        type: "choose-meaning",
        question: "Que sont les 'Belgha' ?",
        correct: "Babouches / chaussures traditionnelles marocaines",
        options: [
          "Un type de vêtement traditionnel",
          "Babouches / chaussures traditionnelles marocaines",
          "Un plat traditionnel",
          "Des bijoux traditionnels"
        ],
        explanation: "'Belgha' = babouches marocaines en cuir, sans talon, souvent jaunes ou blanches. Symbole de l'artisanat marocain."
      },
      {
        id: 11,
        type: "match-pairs",
        question: "Associe chaque symbole culturel à sa description",
        correct: '[["Khmsa","Main de Fatima"],["Riad","Maison à patio"],["Belgha","Babouches"],["Kseksou","Couscous"]]',
        options: [],
        explanation: "Culture marocaine : Khmsa=amulette, Riad=demeure traditionnelle, Belgha=babouches, Kseksou=couscous."
      },
      {
        id: 12,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'Dieu merci, ton fils a beaucoup grandi, que Dieu te bénisse'",
        correct: "Mshallah, weldk kbir bzzaf, rbi ybarek fik",
        options: ["kbir", "Mshallah,", "rbi", "weldk", "ybarek", "fik", "bzzaf,"],
        explanation: "'Mshallah' protège du mauvais œil lors du compliment. 'Rbi ybarek fik' = que Dieu te bénisse."
      }
    ]
  },
  {
    id: 40,
    courseId: null,
    title: "Grand Quiz Final du Mois",
    emoji: "👑",
    difficulty: "Avancé",
    questions: [
      {
        id: 1,
        type: "translate-to-french",
        question: "Que signifie 'Mshit l-s-souq w shreyt khodra w lħem' ?",
        correct: "Je suis allé au marché et j'ai acheté des légumes et de la viande",
        options: [
          "Je veux aller au marché acheter des légumes",
          "Je suis allé au marché et j'ai acheté des légumes et de la viande",
          "J'ai besoin d'aller au marché demain",
          "Le marché est fermé, je n'ai pas pu acheter"
        ],
        explanation: "'Mshit' = je suis allé (passé), 'shreyt' = j'ai acheté (passé), 'khodra w lħem' = légumes et viande."
      },
      {
        id: 2,
        type: "translate-to-french",
        question: "Que signifie 'Kan kaykhdem f-s-sbah walakin l-3shiya kankhdm f-d-dar' ?",
        correct: "Il travaillait le matin mais le soir il travaille à la maison",
        options: [
          "Il travaille matin et soir à la maison",
          "Il travaillait le matin mais le soir il travaille à la maison",
          "Il voulait travailler le matin et le soir",
          "Il a travaillé toute la journée à la maison"
        ],
        explanation: "'Kan kaykhdem' = il travaillait (imparfait), 'kankhdm' = je travaille (présent) — attention au changement de sujet."
      },
      {
        id: 3,
        type: "translate-to-darija",
        question: "Comment dit-on 'Je ne suis pas allé à la fête hier soir parce que j'étais fatigué' ?",
        correct: "Ma mshitsh l-l-ħafla lbareh l-lil ħit kont 3yyad",
        options: [
          "Mshit l-l-ħafla lbareh ħit kont ferħan",
          "Ma mshitsh l-l-ħafla lbareh l-lil ħit kont 3yyad",
          "Ghadi nmshi l-l-ħafla l-lila",
          "Ma bghitsh nmshi l-l-ħafla"
        ],
        explanation: "'Ma mshitsh' = je ne suis pas allé (négatif passé), 'lbareh l-lil' = hier soir, 'ħit kont 3yyad' = parce que j'étais fatigué."
      },
      {
        id: 4,
        type: "translate-to-darija",
        question: "Conjugue au passé : 'Nous avons mangé du couscous vendredi'",
        correct: "Klina kseksou nhar l-jm3a",
        options: ["Kanaklu kseksou nhar l-jm3a", "Klina kseksou nhar l-jm3a", "Ghadi naklu kseksou", "Bghinа naklu kseksou"],
        explanation: "'Klina' = nous avons mangé (passé 1ère pl). 'Kanaklu' = nous mangeons (présent). 'Nhar l-jm3a' = le vendredi."
      },
      {
        id: 5,
        type: "fill-blank",
        question: "Mets au futur : 'Ghadi _____ l-Fes l-jm3a l-jayya' (Nous allons aller à Fès la semaine prochaine)",
        correct: "nmshiw",
        options: ["nmshi", "nmshiw", "mshaw", "mshiw"],
        explanation: "'Nmshiw' = nous allons (futur 1ère pl). 'Ghadi nmshiw' = nous allons aller. 'L-jm3a l-jayya' = la semaine prochaine."
      },
      {
        id: 6,
        type: "match-pairs",
        question: "Associe chaque expression complexe à sa traduction",
        correct: '[["Ma mshitsh","Je ne suis pas allé"],["Ghadi yji","Il va venir"],["Kan kaykhdem","Il travaillait"],["Ma bqa-sh","Ne plus"]]',
        options: [],
        explanation: "Structures avancées : passé négatif, futur, imparfait, et négation de continuité."
      },
      {
        id: 7,
        type: "choose-meaning",
        question: "Quel est le plat national marocain servi traditionnellement le vendredi ?",
        correct: "Kseksou (couscous)",
        options: ["Tajine", "Kseksou (couscous)", "Harira", "Pastilla"],
        explanation: "'Kseksou' = couscous. La tradition du couscous du vendredi réunit la famille après la prière."
      },
      {
        id: 8,
        type: "translate-to-french",
        question: "Que représente 'L-khmsa' comme amulette ?",
        correct: "La main à cinq doigts pour protéger du mauvais œil",
        options: [
          "La lune croissante islamique",
          "La main à cinq doigts pour protéger du mauvais œil",
          "L'étoile à cinq branches du drapeau",
          "Le chiffre 5 sacré dans la tradition berbère"
        ],
        explanation: "'L-khmsa' = la main (5 doigts). Amulette contre 'l-3in' (mauvais œil). Très présente dans la décoration et les bijoux marocains."
      },
      {
        id: 9,
        type: "fill-blank",
        question: "'Ma _____ ħta ħaja mn l-imtiħan' (Je n'ai rien compris de l'examen)",
        correct: "fhemtsh",
        options: ["3reftsh", "fhemtsh", "klitsh", "mshitsh"],
        explanation: "'Ma fhemtsh ħta ħaja' = je n'ai rien compris. 'Fhem' = comprendre, 'ħta ħaja' = rien/quoi que ce soit (négatif)."
      },
      {
        id: 10,
        type: "fill-blank",
        question: "'Bghit _____ l-s-souq nshri khodra w lħem bash ndir tajine' (Je veux aller au marché acheter des légumes et de la viande pour faire un tajine)",
        correct: "nmshi",
        options: ["mshi", "nmshi", "ghadi", "msha"],
        explanation: "'Bghit nmshi' = je veux aller. 'Bash' = pour (but). 'Ndir' = faire/préparer."
      },
      {
        id: 11,
        type: "word-order",
        question: "Remets les mots dans le bon ordre : 'J'étais jeune quand j'habitais à Fès et j'étudiais à l'école'",
        correct: "Kant sghir mlli skent f-Fes w kont katqra f-l-madrasa",
        options: ["f-Fes", "sghir", "mlli", "Kant", "w", "kont", "skent", "katqra", "f-l-madrasa"],
        explanation: "'Kant sghir' = j'étais jeune (féminin), 'mlli skent f-Fes' = quand j'habitais à Fès, 'kont katqra' = j'étudiais."
      },
      {
        id: 12,
        type: "translate-to-french",
        question: "Que signifie le proverbe 'Sber w sber, ghir Allah lli y3awnek' ?",
        correct: "Patience, patience, seul Dieu peut t'aider",
        options: [
          "Travaille dur et Dieu t'aidera",
          "Patience, patience, seul Dieu peut t'aider",
          "La prière vient avant tout effort",
          "Fais confiance à Dieu et agis"
        ],
        explanation: "'Sber' = patience (impératif), 'ghir' = seulement/juste, 'y3awnek' = t'aide. Proverbe marocain sur l'endurance."
      },
      {
        id: 13,
        type: "choose-meaning",
        question: "Que signifie l'expression 'Zwine dyal l-3in' ?",
        correct: "Si beau que ça peut attirer le mauvais œil",
        options: [
          "Très beau mais mauvais caractère",
          "Si beau que ça peut attirer le mauvais œil",
          "Beau à l'extérieur mais vide à l'intérieur",
          "Belle apparence trompeuse"
        ],
        explanation: "'Zwine dyal l-3in' = beau à en attirer le mauvais œil. Expression qui mêle admiration et mise en garde culturelle."
      },
      {
        id: 14,
        type: "choose-meaning",
        question: "Dans un contexte formel (travail, administration), quel registre utilise-t-on ?",
        correct: "L'arabe classique (fusha) ou le français, pas la Darija",
        options: [
          "La Darija avec les formules de politesse",
          "L'arabe classique (fusha) ou le français, pas la Darija",
          "L'amazigh/berbère selon la région",
          "L'anglais dans les entreprises modernes"
        ],
        explanation: "La Darija est informelle. Dans les contextes officiels (administration, éducation formelle, discours), l'arabe classique (fusha) ou le français sont utilisés au Maroc."
      },
      {
        id: 15,
        type: "translate-to-darija",
        question: "Traduire : 'Je veux aller au marché acheter des légumes et de la viande pour faire un tajine'",
        correct: "Bghit nmshi l-s-souq nshri khodra w lħem bash ndir tajine",
        options: [
          "Mshit l-s-souq w shreyt khodra w lħem",
          "Bghit nmshi l-s-souq nshri khodra w lħem bash ndir tajine",
          "Kħessni nmshi nshri khodra w lħem",
          "Ghadi nmshi l-s-souq w nshri tajine"
        ],
        explanation: "'Bghit nmshi' = je veux aller, 'l-s-souq' = au marché, 'nshri khodra w lħem' = acheter légumes et viande, 'bash ndir tajine' = pour faire un tajine."
      }
    ]
  }
];
