export const oralPhrases = [
  {
    id: 1,
    category: "Voyage",
    emoji: "✈️",
    phrases: [
      {
        darija: "فين كاين الحمام؟",
        romanization: "Fin kayn l-hammam?",
        translation: "Où sont les toilettes ?",
        difficulty: "easy",
        tags: ["voyage", "pratique"]
      },
      {
        darija: "بغيت نمشي ل...",
        romanization: "Bghit nmshi l...",
        translation: "Je veux aller à...",
        difficulty: "easy",
        tags: ["voyage", "transport"]
      },
      {
        darija: "شحال تاكسي ل...",
        romanization: "Shhal taxi l...?",
        translation: "Combien pour un taxi jusqu'à... ?",
        difficulty: "medium",
        tags: ["voyage", "transport", "prix"]
      },
      {
        darija: "وين مشيت بلا ما تعرف؟",
        romanization: "Win mshiti bla ma t3ref?",
        translation: "Où tu es allé sans savoir le chemin ?",
        difficulty: "hard",
        tags: ["voyage", "conversation"]
      }
    ]
  },
  {
    id: 2,
    category: "Café & Restaurant",
    emoji: "☕",
    phrases: [
      {
        darija: "عطيني واحد أتاي",
        romanization: "3tini wahd atay",
        translation: "Donne-moi un thé",
        difficulty: "easy",
        tags: ["café", "commande"]
      },
      {
        darija: "بلا سكر من فضلك",
        romanization: "Bla skkor men fadlak",
        translation: "Sans sucre s'il vous plaît",
        difficulty: "easy",
        tags: ["café", "commande"]
      },
      {
        darija: "واش عندكم طاجين؟",
        romanization: "Wash 3ndkom tajine?",
        translation: "Vous avez du tajine ?",
        difficulty: "medium",
        tags: ["restaurant", "nourriture"]
      },
      {
        darija: "الحساب من فضلك",
        romanization: "L-hsab men fadlak",
        translation: "L'addition s'il vous plaît",
        difficulty: "easy",
        tags: ["restaurant", "paiement"]
      }
    ]
  },
  {
    id: 3,
    category: "Amis & Famille",
    emoji: "👨‍👩‍👧",
    phrases: [
      {
        darija: "كيفاش دير حالك؟",
        romanization: "Kifash dir halek?",
        translation: "Comment tu vas ? (informel)",
        difficulty: "easy",
        tags: ["salutations", "amis"]
      },
      {
        darija: "وين كنت؟ شحال منين",
        romanization: "Win kenti? Shhal mnin",
        translation: "T'étais où ? Ça fait longtemps !",
        difficulty: "medium",
        tags: ["amis", "conversation"]
      },
      {
        darija: "خوك لاباس؟",
        romanization: "Khwak labas?",
        translation: "Ton frère ça va ?",
        difficulty: "medium",
        tags: ["famille", "salutations"]
      },
      {
        darija: "رانا نتلاقاو ف-الليل",
        romanization: "Rana ntlaqaw f-l-lil",
        translation: "On se retrouve ce soir",
        difficulty: "hard",
        tags: ["amis", "plans"]
      }
    ]
  },
  {
    id: 4,
    category: "Urgences",
    emoji: "🚨",
    phrases: [
      {
        darija: "عيياوني!",
        romanization: "3iyyawni!",
        translation: "Aidez-moi !",
        difficulty: "easy",
        tags: ["urgence", "sécurité"]
      },
      {
        darija: "سمحي ليا",
        romanization: "Semhli ya",
        translation: "Excusez-moi / Pardon",
        difficulty: "easy",
        tags: ["politesse", "urgence"]
      },
      {
        darija: "ما فهمتش",
        romanization: "Ma fhemtsh",
        translation: "Je n'ai pas compris",
        difficulty: "easy",
        tags: ["communication", "langue"]
      },
      {
        darija: "واش تقدر تعاود مرة أخرى؟",
        romanization: "Wash tqder t3awwd merra okhra?",
        translation: "Peux-tu répéter encore une fois ?",
        difficulty: "medium",
        tags: ["communication", "langue"]
      }
    ]
  },
  {
    id: 5,
    category: "Shopping",
    emoji: "🛍️",
    phrases: [
      {
        darija: "فين كاين السوق؟",
        romanization: "Fin kayn s-souq?",
        translation: "Où est le marché ?",
        difficulty: "easy",
        tags: ["shopping", "navigation"]
      },
      {
        darija: "خفض شوية",
        romanization: "Khfed shwiya",
        translation: "Baisse un peu (le prix)",
        difficulty: "medium",
        tags: ["shopping", "négociation"]
      },
      {
        darija: "هاد اللون مزيان عليا؟",
        romanization: "Had l-lewn mzyan 3liya?",
        translation: "Cette couleur me va bien ?",
        difficulty: "hard",
        tags: ["shopping", "vêtements"]
      },
      {
        darija: "واش عندك نفس الشي بلون آخر؟",
        romanization: "Wash 3ndek nfs sh-shi b-lewn akhor?",
        translation: "Tu as la même chose dans une autre couleur ?",
        difficulty: "hard",
        tags: ["shopping", "vêtements"]
      }
    ]
  }
];

export const difficultyConfig = {
  easy: { label: 'Facile', color: 'text-emerald-400 bg-emerald-400/10', icon: '⭐' },
  medium: { label: 'Moyen', color: 'text-amber-400 bg-amber-400/10', icon: '⭐⭐' },
  hard: { label: 'Difficile', color: 'text-rose-400 bg-rose-400/10', icon: '⭐⭐⭐' },
};
