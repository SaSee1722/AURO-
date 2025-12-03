(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/lib/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Simple translation system for the habit tracker app
__turbopack_context__.s([
    "getTranslation",
    ()=>getTranslation,
    "translations",
    ()=>translations
]);
const translations = {
    English: {
        // Navigation
        navToday: "Today",
        navCalendar: "History",
        navVybes: "Vybes",
        navProfile: "Profile",
        // Quotes
        quote1: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        quote1Author: "Aristotle",
        quote2: "The secret of getting ahead is getting started.",
        quote2Author: "Mark Twain",
        // General
        today: "Today",
        todayProgress: "Today's Progress",
        noHabitsToday: "No habits for today",
        addFirstHabit: "Tap the + button to add your first habit",
        me: "ME",
        backupRestore: "Backup & Restore",
        backupRestoreDesc: "Sign in and synchronize your data",
        goPremium: "GO PREMIUM",
        generalSettings: "General settings",
        languageOptions: "Language Options",
        shareWithFriends: "Share with friends",
        rateUs: "Rate us",
        feedback: "Feedback",
        version: "Version",
        darkMode: "Dark Mode",
        notifications: "Notifications",
        done: "Done",
        selectLanguage: "Select Language",
        sendFeedback: "Send Feedback",
        feedbackPlaceholder: "Tell us what you think...",
        cancel: "Cancel",
        submit: "Submit",
        synchronizeData: "Synchronize your data",
        continueWithGoogle: "Continue with Google",
        others: "Others",
        continueWithEmail: "Continue with Email",
        continueWithApple: "Continue with Apple",
        deleteHabit: "Delete Habit?",
        deleteConfirmation: "Are you sure you want to delete",
        deleteMessage: "This action cannot be undone.",
        delete: "Delete",
        notificationsEnabled: "Notifications enabled",
        notificationsDisabled: "Notifications disabled",
        languageChanged: "Language changed to",
        thanksForSharing: "Thanks for sharing!",
        linkCopied: "Link copied to clipboard!",
        thanksForFeedback: "Thank you for your feedback! 💙",
        enterFeedback: "Please enter your feedback",
        googleSignInSoon: "Google sign-in coming soon!",
        emailSignInSoon: "Email sign-in coming soon!",
        appleSignInSoon: "Apple sign-in coming soon!",
        premiumSoon: "Premium features coming soon! 👑",
        thankYouSupport: "Thank you for your support! ⭐",
        openingPlayStore: "Opening Play Store...",
        openingAppStore: "Opening App Store...",
        // Journey Detail
        keyResults: "KEY RESULTS",
        moreToExpect: "MORE TO EXPECT",
        yourPersonalizedJourney: "YOUR PERSONALIZED JOURNEY",
        startMyJourney: "START MY JOURNEY",
        day: "DAY",
        // Vybes Content
        vybesWalkTitle: "WALK EVERYDAY FOR HEALTH",
        vybesWalkDays: "30 Days",
        vybesEnergyTitle: "ENERGY MORNING",
        vybesEnergyDays: "30 Days",
        vybesWaterTitle: "STAY HYDRATED",
        vybesWaterDays: "21 Days",
        vybesSleepTitle: "Bedtime ritual for a sweet sleep",
        vybesSugarTitle: "Say goodbye to sugar",
        vybesMeditationTitle: "Meditation for peace of mind",
        vybesPetTitle: "Happy life with furry friends",
        // Journey Details (Sleep Journey)
        journeySleepDesc: "Relaxing sleep rituals are proven to significantly overcome sleep disorders and stress overload. They also allow moments for deep family interactions. Before bed, try to prepare yourself mentally and physically for a night of restful sleep.",
        journeySleepResult1: "Say bye to insomnia",
        journeySleepResult2: "Sleep faster and better",
        journeySleepResult3: "More energetic and creative",
        journeySleepResult4: "Healthy life schedule",
        journeySleepExpect1: "Better mood",
        journeySleepExpect2: "Higher productivity",
        journeySleepExpect3: "Improved memory",
        journeySleepTimeline1: "DAY 1-7",
        journeySleepTimeline1Desc: "Establish a routine",
        journeySleepTimeline2: "DAY 8-21",
        journeySleepTimeline2Desc: "Adjust and improve",
        journeySleepTimeline3: "DAY 22-30",
        journeySleepTimeline3Desc: "Maintain and enjoy",
        // Presets
        presetTrendTitle: "Habits in trend",
        presetTrendSub: "Keep up the pace with the world",
        presetEssentialTitle: "Essential habits",
        presetEssentialSub: "Refresh your life with simple acts",
        presetHealthTitle: "Eat & drink healthily",
        presetHealthSub: "Stay healthy with daily intakes",
        presetFitTitle: "Keep active & get fit",
        presetFitSub: "Sweat never lies",
        // Suggestions
        sugScreenTime: "Block screen time",
        sugScreenTimeSub: "Lock screen and glue attention",
        sugCaffeine: "Limit caffeine intake",
        sugCaffeineSub: "Replace with other healthy choices",
        sugFasting: "Intermittent fasting",
        sugFastingSub: "Your stomach needs a little rest",
        sugMeditation: "Practice meditation",
        sugMeditationSub: "Connect with your inner peace",
        sugLaugh: "Laugh more",
        sugLaughSub: "Find a moment that can make you laugh loudly",
        sugBest: "\"You're the best\"",
        sugBestSub: "Say it to yourself when waking up",
        sugHobby: "Practice a hobby",
        sugHobbySub: "Fill your time, life won't pass you by",
        sugClean: "Fast clean-up",
        sugCleanSub: "Tidy your space in just minutes",
        sugWeight: "Achieve your ideal weight",
        sugWeightSub: "You look different today",
        sugWater: "Drink water",
        sugWaterSub: "Stay hydrated",
        sugRead: "Read a book",
        sugReadSub: "Expand your knowledge",
        sugExercise: "Exercise",
        sugExerciseSub: "Keep your body fit",
        sugVeggies: "Eat vegetables",
        sugVeggiesSub: "Get your vitamins",
        sugSoda: "No soda",
        sugSodaSub: "Cut down on sugar",
        sugRun: "Morning run",
        sugRunSub: "Start the day with energy",
        sugYoga: "Yoga",
        sugYogaSub: "Stretch and relax",
        // Calendar Tab
        history: "HISTORY",
        calendar: "Calendar",
        allHabits: "All Habits",
        achievements: "Achievements",
        statistics: "STATISTICS",
        avgCompletionRate: "Avg. completion rate",
        active: "ACTIVE",
        anytime: "ANYTIME",
        morning: "MORNING",
        everyday: "Everyday",
        myAchievements: "My achievements",
        earnedAchievements: "You've earned 5% of all achievements",
        habitsFinished: "Habits Finished",
        archived: "Archived",
        finishHabit: "Finish Habit",
        firstTime: "for The First Time",
        times: "Times",
        perfectDays: "Perfect Days",
        perfect: "Perfect",
        // Vybes Tab
        journey: "JOURNEY",
        recommendedForYou: "RECOMMENDED FOR YOU",
        allJourneys: "ALL JOURNEYS",
        // Add Habit Modal
        createNewHabit: "Create a new habit",
        regular: "REGULAR",
        negative: "NEGATIVE",
        onetime: "ONE-TIME TODO",
        regularDesc: "Related to your daily routine. Check it in a regular and repeated way.",
        negativeDesc: "Start each day as complete. Only to uncheck it when you fail.",
        onetimeDesc: "Remind you of important one-time events on a specific date you set.",
        createYourOwn: "CREATE YOUR OWN",
        chooseFromPresets: "OR CHOOSE FROM PRESETS",
        habitName: "Habit Name",
        chooseEmoji: "Choose an Emoji",
        chooseColor: "Choose a Color",
        reminderTime: "Reminder Time (optional)",
        repeatDays: "Repeat Days",
        saveChanges: "Save Changes",
        createHabit: "Create Habit",
        editHabit: "Edit Habit",
        newHabitDetails: "New Habit Details"
    },
    Spanish: {
        navToday: "Hoy",
        navCalendar: "Historial",
        navVybes: "Vybes",
        navProfile: "Perfil",
        quote1: "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito.",
        quote1Author: "Aristóteles",
        quote2: "El secreto de salir adelante es comenzar.",
        quote2Author: "Mark Twain",
        today: "Hoy",
        todayProgress: "Progreso de hoy",
        noHabitsToday: "No hay hábitos para hoy",
        addFirstHabit: "Toca el botón + para agregar tu primer hábito",
        me: "YO",
        backupRestore: "Copia de seguridad y restauración",
        backupRestoreDesc: "Inicia sesión y sincroniza tus datos",
        goPremium: "HAZTE PREMIUM",
        generalSettings: "Configuración general",
        languageOptions: "Opciones de idioma",
        shareWithFriends: "Compartir con amigos",
        rateUs: "Califícanos",
        feedback: "Comentarios",
        version: "Versión",
        darkMode: "Modo oscuro",
        notifications: "Notificaciones",
        done: "Hecho",
        selectLanguage: "Seleccionar idioma",
        sendFeedback: "Enviar comentarios",
        feedbackPlaceholder: "Cuéntanos qué piensas...",
        cancel: "Cancelar",
        submit: "Enviar",
        synchronizeData: "Sincroniza tus datos",
        continueWithGoogle: "Continuar con Google",
        others: "Otros",
        continueWithEmail: "Continuar con correo",
        continueWithApple: "Continuar con Apple",
        deleteHabit: "¿Eliminar hábito?",
        deleteConfirmation: "¿Estás seguro de que quieres eliminar",
        deleteMessage: "Esta acción no se puede deshacer.",
        delete: "Eliminar",
        notificationsEnabled: "Notificaciones activadas",
        notificationsDisabled: "Notificaciones desactivadas",
        languageChanged: "Idioma cambiado a",
        thanksForSharing: "¡Gracias por compartir!",
        linkCopied: "¡Enlace copiado al portapapeles!",
        thanksForFeedback: "¡Gracias por tus comentarios! 💙",
        enterFeedback: "Por favor ingresa tus comentarios",
        googleSignInSoon: "¡Inicio de sesión con Google próximamente!",
        emailSignInSoon: "¡Inicio de sesión con correo próximamente!",
        appleSignInSoon: "¡Inicio de sesión con Apple próximamente!",
        premiumSoon: "¡Funciones premium próximamente! 👑",
        thankYouSupport: "¡Gracias por tu apoyo! ⭐",
        openingPlayStore: "Abriendo Play Store...",
        openingAppStore: "Abriendo App Store...",
        // Journey Detail
        keyResults: "RESULTADOS CLAVE",
        moreToExpect: "MÁS POR ESPERAR",
        yourPersonalizedJourney: "TU VIAJE PERSONALIZADO",
        startMyJourney: "COMENZAR MI VIAJE",
        day: "DÍA",
        // Vybes Content
        vybesWalkTitle: "CAMINA TODOS LOS DÍAS POR SALUD",
        vybesWalkDays: "30 Días",
        vybesEnergyTitle: "MAÑANA DE ENERGÍA",
        vybesEnergyDays: "30 Días",
        vybesWaterTitle: "MANTENTE HIDRATADO",
        vybesWaterDays: "21 Días",
        vybesSleepTitle: "Ritual antes de dormir para un dulce sueño",
        vybesSugarTitle: "Dile adiós al azúcar",
        vybesMeditationTitle: "Meditación para la paz mental",
        vybesPetTitle: "Vida feliz con amigos peludos",
        // Calendar Tab
        history: "HISTORIAL",
        calendar: "Calendario",
        allHabits: "Todos los hábitos",
        achievements: "Logros",
        statistics: "ESTADÍSTICAS",
        avgCompletionRate: "Tasa de finalización media",
        active: "ACTIVO",
        anytime: "CUALQUIER MOMENTO",
        morning: "MAÑANA",
        everyday: "Todos los días",
        myAchievements: "Mis logros",
        earnedAchievements: "Has ganado el 5% de todos los logros",
        habitsFinished: "Hábitos terminados",
        archived: "Archivado",
        finishHabit: "Terminar hábito",
        firstTime: "por primera vez",
        times: "Veces",
        perfectDays: "Días perfectos",
        perfect: "Perfecto",
        // Vybes Tab
        journey: "VIAJE",
        recommendedForYou: "RECOMENDADO PARA TI",
        allJourneys: "TODOS LOS VIAJES",
        // Add Habit Modal
        createNewHabit: "Crear un nuevo hábito",
        regular: "REGULAR",
        negative: "NEGATIVO",
        onetime: "TAREA ÚNICA",
        regularDesc: "Relacionado con tu rutina diaria. Hazlo de manera regular y repetida.",
        negativeDesc: "Comienza cada día como completo. Solo desmárcalo cuando falles.",
        onetimeDesc: "Te recuerda eventos importantes únicos en una fecha específica.",
        createYourOwn: "CREA EL TUYO",
        chooseFromPresets: "O ELIGE DE PREAJUSTES",
        habitName: "Nombre del hábito",
        chooseEmoji: "Elige un emoji",
        chooseColor: "Elige un color",
        reminderTime: "Hora del recordatorio (opcional)",
        repeatDays: "Días de repetición",
        saveChanges: "Guardar cambios",
        createHabit: "Crear hábito",
        editHabit: "Editar hábito",
        newHabitDetails: "Detalles del nuevo hábito"
    },
    French: {
        navToday: "Aujourd'hui",
        navCalendar: "Historique",
        navVybes: "Vybes",
        navProfile: "Profil",
        quote1: "Nous sommes ce que nous faisons de manière répétée. L'excellence n'est donc pas un acte, mais une habitude.",
        quote1Author: "Aristote",
        quote2: "Le secret pour avancer est de commencer.",
        quote2Author: "Mark Twain",
        today: "Aujourd'hui",
        todayProgress: "Progrès du jour",
        noHabitsToday: "Pas d'habitudes aujourd'hui",
        addFirstHabit: "Appuyez sur + pour ajouter votre première habitude",
        me: "MOI",
        backupRestore: "Sauvegarde et restauration",
        backupRestoreDesc: "Connectez-vous et synchronisez vos données",
        goPremium: "PASSER PREMIUM",
        generalSettings: "Paramètres généraux",
        languageOptions: "Options de langue",
        shareWithFriends: "Partager avec des amis",
        rateUs: "Évaluez-nous",
        feedback: "Commentaires",
        version: "Version",
        darkMode: "Mode sombre",
        notifications: "Notifications",
        done: "Terminé",
        selectLanguage: "Sélectionner la langue",
        sendFeedback: "Envoyer des commentaires",
        feedbackPlaceholder: "Dites-nous ce que vous pensez...",
        cancel: "Annuler",
        submit: "Soumettre",
        synchronizeData: "Synchronisez vos données",
        continueWithGoogle: "Continuer avec Google",
        others: "Autres",
        continueWithEmail: "Continuer avec e-mail",
        continueWithApple: "Continuer avec Apple",
        deleteHabit: "Supprimer l'habitude?",
        deleteConfirmation: "Êtes-vous sûr de vouloir supprimer",
        deleteMessage: "Cette action ne peut pas être annulée.",
        delete: "Supprimer",
        notificationsEnabled: "Notifications activées",
        notificationsDisabled: "Notifications désactivées",
        languageChanged: "Langue changée en",
        thanksForSharing: "Merci d'avoir partagé!",
        linkCopied: "Lien copié dans le presse-papiers!",
        thanksForFeedback: "Merci pour vos commentaires! 💙",
        enterFeedback: "Veuillez entrer vos commentaires",
        googleSignInSoon: "Connexion Google bientôt disponible!",
        emailSignInSoon: "Connexion e-mail bientôt disponible!",
        appleSignInSoon: "Connexion Apple bientôt disponible!",
        premiumSoon: "Fonctionnalités premium bientôt! 👑",
        thankYouSupport: "Merci pour votre soutien! ⭐",
        openingPlayStore: "Ouverture du Play Store...",
        openingAppStore: "Ouverture de l'App Store...",
        // Journey Detail
        keyResults: "RÉSULTATS CLÉS",
        moreToExpect: "PLUS À ATTENDRE",
        yourPersonalizedJourney: "VOTRE VOYAGE PERSONNALISÉ",
        startMyJourney: "COMMENCER MON VOYAGE",
        day: "JOUR",
        // Vybes Content
        vybesWalkTitle: "MARCHER TOUS LES JOURS POUR LA SANTÉ",
        vybesWalkDays: "30 Jours",
        vybesEnergyTitle: "MATIN ÉNERGIQUE",
        vybesEnergyDays: "30 Jours",
        vybesWaterTitle: "RESTEZ HYDRATÉ",
        vybesWaterDays: "21 Jours",
        vybesSleepTitle: "Rituel du coucher pour un doux sommeil",
        vybesSugarTitle: "Dites adieu au sucre",
        vybesMeditationTitle: "Méditation pour la tranquillité d'esprit",
        vybesPetTitle: "Une vie heureuse avec des amis à fourrure",
        // Calendar Tab
        history: "HISTORIQUE",
        calendar: "Calendrier",
        allHabits: "Toutes les habitudes",
        achievements: "Réalisations",
        statistics: "STATISTIQUES",
        avgCompletionRate: "Taux d'achèvement moyen",
        active: "ACTIF",
        anytime: "À TOUT MOMENT",
        morning: "MATIN",
        everyday: "Tous les jours",
        myAchievements: "Mes réalisations",
        earnedAchievements: "Vous avez gagné 5% de toutes les réalisations",
        habitsFinished: "Habitudes terminées",
        archived: "Archivé",
        finishHabit: "Terminer l'habitude",
        firstTime: "pour la première fois",
        times: "Fois",
        perfectDays: "Jours parfaits",
        perfect: "Parfait",
        // Vybes Tab
        journey: "VOYAGE",
        recommendedForYou: "RECOMMANDÉ POUR VOUS",
        allJourneys: "TOUS LES VOYAGES",
        // Add Habit Modal
        createNewHabit: "Créer une nouvelle habitude",
        regular: "RÉGULIER",
        negative: "NÉGATIF",
        onetime: "TÂCHE UNIQUE",
        regularDesc: "Lié à votre routine quotidienne. Vérifiez-le de manière régulière et répétée.",
        negativeDesc: "Commencez chaque journée comme complète. Décochez-le seulement si vous échouez.",
        onetimeDesc: "Vous rappelle des événements importants uniques à une date précise.",
        createYourOwn: "CRÉEZ LE VÔTRE",
        chooseFromPresets: "OU CHOISISSEZ PARMI LES PRÉRÉGLAGES",
        habitName: "Nom de l'habitude",
        chooseEmoji: "Choisir un emoji",
        chooseColor: "Choisir une couleur",
        reminderTime: "Heure de rappel (facultatif)",
        repeatDays: "Jours de répétition",
        saveChanges: "Enregistrer les modifications",
        createHabit: "Créer l'habitude",
        editHabit: "Modifier l'habitude",
        newHabitDetails: "Détails de la nouvelle habitude"
    },
    // ... (Other languages would follow similar pattern, truncated for brevity but in real app would be full)
    German: {
        navToday: "Heute",
        navCalendar: "Verlauf",
        navVybes: "Vybes",
        navProfile: "Profil",
        quote1: "Wir sind, was wir wiederholt tun.",
        quote1Author: "Aristoteles",
        quote2: "Das Geheimnis des Vorwärtskommens besteht darin, anzufangen.",
        quote2Author: "Mark Twain",
        today: "Heute",
        history: "VERLAUF",
        calendar: "Kalender",
        allHabits: "Alle Gewohnheiten",
        achievements: "Erfolge",
        statistics: "STATISTIKEN",
        avgCompletionRate: "Durchschn. Abschlussrate",
        active: "AKTIV",
        anytime: "JEDERZEIT",
        morning: "MORGEN",
        everyday: "Jeden Tag",
        myAchievements: "Meine Erfolge",
        earnedAchievements: "Du hast 5% aller Erfolge verdient",
        habitsFinished: "Gewohnheiten beendet",
        archived: "Archiviert",
        finishHabit: "Gewohnheit beenden",
        firstTime: "zum ersten Mal",
        times: "Mal",
        perfectDays: "Perfekte Tage",
        perfect: "Perfekt",
        journey: "REISE",
        recommendedForYou: "FÜR DICH EMPFOHLEN",
        allJourneys: "ALLE REISEN",
        createNewHabit: "Neue Gewohnheit erstellen",
        regular: "REGULÄR",
        negative: "NEGATIV",
        onetime: "EINMALIG",
        regularDesc: "Bezieht sich auf deine tägliche Routine.",
        negativeDesc: "Beginne jeden Tag als erledigt.",
        onetimeDesc: "Erinnert dich an wichtige einmalige Ereignisse.",
        createYourOwn: "ERSTELLE DEINE EIGENE",
        chooseFromPresets: "ODER WÄHLE AUS VOREINSTELLUNGEN",
        habitName: "Name der Gewohnheit",
        chooseEmoji: "Wähle ein Emoji",
        chooseColor: "Wähle eine Farbe",
        reminderTime: "Erinnerungszeit (optional)",
        repeatDays: "Wiederholungstage",
        saveChanges: "Änderungen speichern",
        createHabit: "Gewohnheit erstellen",
        editHabit: "Gewohnheit bearbeiten",
        newHabitDetails: "Details zur neuen Gewohnheit",
        cancel: "Abbrechen",
        submit: "Absenden",
        // ... (rest of keys)
        todayProgress: "Heutiger Fortschritt",
        noHabitsToday: "Keine Gewohnheiten für heute",
        addFirstHabit: "Tippe auf +, um deine erste Gewohnheit hinzuzufügen",
        me: "ICH",
        backupRestore: "Sichern & Wiederherstellen",
        backupRestoreDesc: "Anmelden und Daten synchronisieren",
        goPremium: "PREMIUM WERDEN",
        generalSettings: "Allgemeine Einstellungen",
        languageOptions: "Sprachoptionen",
        shareWithFriends: "Mit Freunden teilen",
        rateUs: "Bewerten Sie uns",
        feedback: "Feedback",
        version: "Version",
        darkMode: "Dunkelmodus",
        notifications: "Benachrichtigungen",
        done: "Fertig",
        selectLanguage: "Sprache auswählen",
        sendFeedback: "Feedback senden",
        feedbackPlaceholder: "Sag uns deine Meinung...",
        synchronizeData: "Daten synchronisieren",
        continueWithGoogle: "Weiter mit Google",
        others: "Andere",
        continueWithEmail: "Weiter mit E-Mail",
        continueWithApple: "Weiter mit Apple",
        deleteHabit: "Gewohnheit löschen?",
        deleteConfirmation: "Möchtest du wirklich löschen",
        deleteMessage: "Diese Aktion kann nicht rückgängig gemacht werden.",
        delete: "Löschen",
        notificationsEnabled: "Benachrichtigungen aktiviert",
        notificationsDisabled: "Benachrichtigungen deaktiviert",
        languageChanged: "Sprache geändert zu",
        thanksForSharing: "Danke fürs Teilen!",
        linkCopied: "Link in die Zwischenablage kopiert!",
        thanksForFeedback: "Danke für dein Feedback! 💙",
        enterFeedback: "Bitte gib dein Feedback ein",
        googleSignInSoon: "Google-Anmeldung kommt bald!",
        emailSignInSoon: "E-Mail-Anmeldung kommt bald!",
        appleSignInSoon: "Apple-Anmeldung kommt bald!",
        premiumSoon: "Premium-Funktionen kommen bald! 👑",
        thankYouSupport: "Danke für deine Unterstützung! ⭐",
        openingPlayStore: "Öffne Play Store...",
        openingAppStore: "Öffne App Store...",
        // Journey Detail
        keyResults: "WICHTIGE ERGEBNISSE",
        moreToExpect: "MEHR ZU ERWARTEN",
        yourPersonalizedJourney: "DEINE PERSÖNLICHE REISE",
        startMyJourney: "MEINE REISE BEGINNEN",
        day: "TAG",
        // Vybes Content
        vybesWalkTitle: "JEDEN TAG GEHEN FÜR DIE GESUNDHEIT",
        vybesWalkDays: "30 Tage",
        vybesEnergyTitle: "ENERGIE MORGEN",
        vybesEnergyDays: "30 Tage",
        vybesWaterTitle: "HYDRIERT BLEIBEN",
        vybesWaterDays: "21 Tage",
        vybesSleepTitle: "Schlafritual für einen süßen Schlaf",
        vybesSugarTitle: "Verabschiede dich vom Zucker",
        vybesMeditationTitle: "Meditation für inneren Frieden",
        vybesPetTitle: "Glückliches Leben mit pelzigen Freunden"
    },
    // Adding Hindi as requested
    Hindi: {
        navToday: "आज",
        navCalendar: "इतिहास",
        navVybes: "Vybes",
        navProfile: "प्रोफ़ाइल",
        quote1: "हम वही हैं जो हम बार-बार करते हैं।",
        quote1Author: "अरस्तू",
        quote2: "आगे बढ़ने का रहस्य शुरुआत करना है।",
        quote2Author: "मार्क ट्वेन",
        today: "आज",
        history: "इतिहास",
        calendar: "कैलेंडर",
        allHabits: "सभी आदतें",
        achievements: "उपलब्धियां",
        statistics: "आंकड़े",
        avgCompletionRate: "औसत पूर्णता दर",
        active: "सक्रिय",
        anytime: "किसी भी समय",
        morning: "सुबह",
        everyday: "हर दिन",
        myAchievements: "मेरी उपलब्धियां",
        earnedAchievements: "आपने सभी उपलब्धियों का 5% अर्जित किया है",
        habitsFinished: "आदतें पूरी हुईं",
        archived: "संग्रहीत",
        finishHabit: "आदत पूरी करें",
        firstTime: "पहली बार",
        times: "बार",
        perfectDays: "सही दिन",
        perfect: "सही",
        journey: "यात्रा",
        recommendedForYou: "आपके लिए अनुशंसित",
        allJourneys: "सभी यात्राएं",
        createNewHabit: "नई आदत बनाएं",
        regular: "नियमित",
        negative: "नकारात्मक",
        onetime: "एक बार का काम",
        regularDesc: "आपकी दिनचर्या से संबंधित।",
        negativeDesc: "हर दिन को पूर्ण के रूप में शुरू करें।",
        onetimeDesc: "आपको महत्वपूर्ण एक बार की घटनाओं की याद दिलाता है।",
        createYourOwn: "अपना खुद का बनाएं",
        chooseFromPresets: "या प्रीसेट से चुनें",
        habitName: "आदत का नाम",
        chooseEmoji: "एक इमोजी चुनें",
        chooseColor: "एक रंग चुनें",
        reminderTime: "रिमाइंडर का समय (वैकल्पिक)",
        repeatDays: "दोहराने के दिन",
        saveChanges: "परिवर्तन सहेजें",
        createHabit: "आदत बनाएं",
        editHabit: "आदत संपादित करें",
        newHabitDetails: "नई आदत का विवरण",
        cancel: "रद्द करें",
        submit: "जमा करें",
        // ... (rest of keys)
        todayProgress: "आज की प्रगति",
        noHabitsToday: "आज के लिए कोई आदत नहीं",
        addFirstHabit: "अपनी पहली आदत जोड़ने के लिए + बटन दबाएं",
        me: "मैं",
        backupRestore: "बैकअप और पुनर्स्थापना",
        backupRestoreDesc: "साइन इन करें और अपना डेटा सिंक करें",
        goPremium: "प्रीमियम बनें",
        generalSettings: "सामान्य सेटिंग्स",
        languageOptions: "भाषा विकल्प",
        shareWithFriends: "दोस्तों के साथ साझा करें",
        rateUs: "हमें रेट करें",
        feedback: "प्रतिक्रिया",
        version: "संस्करण",
        darkMode: "डार्क मोड",
        notifications: "सूचनाएं",
        done: "हो गया",
        selectLanguage: "भाषा चुनें",
        sendFeedback: "प्रतिक्रिया भेजें",
        feedbackPlaceholder: "हमें बताएं कि आप क्या सोचते हैं...",
        synchronizeData: "अपना डेटा सिंक करें",
        continueWithGoogle: "Google के साथ जारी रखें",
        others: "अन्य",
        continueWithEmail: "ईमेल के साथ जारी रखें",
        continueWithApple: "Apple के साथ जारी रखें",
        deleteHabit: "आदत हटाएं?",
        deleteConfirmation: "क्या आप वाकई हटाना चाहते हैं",
        deleteMessage: "यह कार्रवाई पूर्ववत नहीं की जा सकती।",
        delete: "हटाएं",
        notificationsEnabled: "सूचनाएं सक्षम",
        notificationsDisabled: "सूचनाएं अक्षम",
        languageChanged: "भाषा बदल दी गई",
        thanksForSharing: "साझा करने के लिए धन्यवाद!",
        linkCopied: "लिंक क्लिपबोर्ड पर कॉपी किया गया!",
        thanksForFeedback: "आपकी प्रतिक्रिया के लिए धन्यवाद! 💙",
        enterFeedback: "कृपया अपनी प्रतिक्रिया दर्ज करें",
        googleSignInSoon: "Google साइन-इन जल्द आ रहा है!",
        emailSignInSoon: "ईमेल साइन-इन जल्द आ रहा है!",
        appleSignInSoon: "Apple साइन-इन जल्द आ रहा है!",
        premiumSoon: "प्रीमियम सुविधाएं जल्द आ रही हैं! 👑",
        thankYouSupport: "आपके समर्थन के लिए धन्यवाद! ⭐",
        openingPlayStore: "Play Store खोल रहा है...",
        openingAppStore: "App Store खोल रहा है...",
        // Journey Detail
        keyResults: "मुख्य परिणाम",
        moreToExpect: "अधिक उम्मीद",
        yourPersonalizedJourney: "आपकी व्यक्तिगत यात्रा",
        startMyJourney: "मेरी यात्रा शुरू करें",
        day: "दिन",
        // Vybes Content
        vybesWalkTitle: "स्वास्थ्य के लिए हर दिन चलें",
        vybesWalkDays: "30 दिन",
        vybesEnergyTitle: "ऊर्जा सुबह",
        vybesEnergyDays: "30 दिन",
        vybesWaterTitle: "हाइड्रेटेड रहें",
        vybesWaterDays: "21 दिन",
        vybesSleepTitle: "मीठी नींद के लिए सोने का अनुष्ठान",
        vybesSugarTitle: "चीनी को अलविदा कहें",
        vybesMeditationTitle: "मन की शांति के लिए ध्यान",
        vybesPetTitle: "प्यारे दोस्तों के साथ खुशहाल जीवन"
    },
    // Fallbacks for others to avoid errors, mapping to English for now if not fully translated
    Italian: {
        navToday: "Oggi",
        navCalendar: "Cronologia",
        navVybes: "Vybes",
        navProfile: "Profilo",
        quote1: "Siamo ciò che facciamo ripetutamente.",
        quote1Author: "Aristotele",
        quote2: "Il segreto per andare avanti è iniziare.",
        quote2Author: "Mark Twain",
        today: "Oggi",
        history: "CRONOLOGIA",
        calendar: "Calendario",
        allHabits: "Tutte le abitudini",
        achievements: "Risultati",
        statistics: "STATISTICHE",
        avgCompletionRate: "Tasso medio di completamento",
        active: "ATTIVO",
        anytime: "QUALSIASI MOMENTO",
        morning: "MATTINA",
        everyday: "Ogni giorno",
        myAchievements: "I miei risultati",
        earnedAchievements: "Hai guadagnato il 5% di tutti i risultati",
        habitsFinished: "Abitudini finite",
        archived: "Archiviato",
        finishHabit: "Finisci abitudine",
        firstTime: "per la prima volta",
        times: "Volte",
        perfectDays: "Giorni perfetti",
        perfect: "Perfetto",
        journey: "VIAGGIO",
        recommendedForYou: "CONSIGLIATO PER TE",
        allJourneys: "TUTTI I VIAGGI",
        createNewHabit: "Crea nuova abitudine",
        regular: "REGOLARE",
        negative: "NEGATIVO",
        onetime: "UNA TANTUM",
        regularDesc: "Legato alla tua routine quotidiana.",
        negativeDesc: "Inizia ogni giorno come completo.",
        onetimeDesc: "Ti ricorda eventi importanti una tantum.",
        createYourOwn: "CREA IL TUO",
        chooseFromPresets: "O SCEGLI DAI PREIMPOSTATI",
        habitName: "Nome abitudine",
        chooseEmoji: "Scegli un'emoji",
        chooseColor: "Scegli un colore",
        reminderTime: "Orario promemoria (opzionale)",
        repeatDays: "Giorni di ripetizione",
        saveChanges: "Salva modifiche",
        createHabit: "Crea abitudine",
        editHabit: "Modifica abitudine",
        newHabitDetails: "Dettagli nuova abitudine",
        cancel: "Annulla",
        submit: "Invia",
        // ... (rest of keys)
        todayProgress: "Progressi di oggi",
        noHabitsToday: "Nessuna abitudine per oggi",
        addFirstHabit: "Tocca + per aggiungere la tua prima abitudine",
        me: "IO",
        backupRestore: "Backup e Ripristino",
        backupRestoreDesc: "Accedi e sincronizza i tuoi dati",
        goPremium: "DIVENTA PREMIUM",
        generalSettings: "Impostazioni generali",
        languageOptions: "Opzioni lingua",
        shareWithFriends: "Condividi con amici",
        rateUs: "Valutaci",
        feedback: "Feedback",
        version: "Versione",
        darkMode: "Modalità scura",
        notifications: "Notifiche",
        done: "Fatto",
        selectLanguage: "Seleziona lingua",
        sendFeedback: "Invia feedback",
        feedbackPlaceholder: "Dicci cosa ne pensi...",
        synchronizeData: "Sincronizza i tuoi dati",
        continueWithGoogle: "Continua con Google",
        others: "Altri",
        continueWithEmail: "Continua con Email",
        continueWithApple: "Continua con Apple",
        deleteHabit: "Eliminare l'abitudine?",
        deleteConfirmation: "Sei sicuro di voler eliminare",
        deleteMessage: "Questa azione non può essere annullata.",
        delete: "Elimina",
        notificationsEnabled: "Notifiche abilitate",
        notificationsDisabled: "Notifiche disabilitate",
        languageChanged: "Lingua cambiata in",
        thanksForSharing: "Grazie per la condivisione!",
        linkCopied: "Link copiato negli appunti!",
        thanksForFeedback: "Grazie per il tuo feedback! 💙",
        enterFeedback: "Inserisci il tuo feedback",
        googleSignInSoon: "Accesso Google in arrivo!",
        emailSignInSoon: "Accesso Email in arrivo!",
        appleSignInSoon: "Accesso Apple in arrivo!",
        premiumSoon: "Funzionalità Premium in arrivo! 👑",
        thankYouSupport: "Grazie per il tuo supporto! ⭐",
        openingPlayStore: "Apertura Play Store...",
        openingAppStore: "Apertura App Store...",
        // Journey Detail
        keyResults: "RISULTATI CHIAVE",
        moreToExpect: "ALTRO DA ASPETTARSI",
        yourPersonalizedJourney: "IL TUO VIAGGIO PERSONALIZZATO",
        startMyJourney: "INIZIA IL MIO VIAGGIO",
        day: "GIORNO",
        // Vybes Content
        vybesWalkTitle: "CAMMINA OGNI GIORNO PER LA SALUTE",
        vybesWalkDays: "30 Giorni",
        vybesEnergyTitle: "MATTINA ENERGETICA",
        vybesEnergyDays: "30 Giorni",
        vybesWaterTitle: "RIMANI IDRATATO",
        vybesWaterDays: "21 Giorni",
        vybesSleepTitle: "Rituale della buonanotte per un dolce sonno",
        vybesSugarTitle: "Dì addio allo zucchero",
        vybesMeditationTitle: "Meditazione per la pace della mente",
        vybesPetTitle: "Vita felice con amici pelosi"
    },
    Portuguese: {
        navToday: "Hoje",
        navCalendar: "Histórico",
        navVybes: "Vybes",
        navProfile: "Perfil",
        quote1: "Nós somos o que fazemos repetidamente.",
        quote1Author: "Aristóteles",
        quote2: "O segredo de progredir é começar.",
        quote2Author: "Mark Twain",
        today: "Hoje",
        history: "HISTÓRICO",
        calendar: "Calendário",
        allHabits: "Todos os hábitos",
        achievements: "Conquistas",
        statistics: "ESTATÍSTICAS",
        avgCompletionRate: "Taxa média de conclusão",
        active: "ATIVO",
        anytime: "QUALQUER HORA",
        morning: "MANHÃ",
        everyday: "Todo dia",
        myAchievements: "Minhas conquistas",
        earnedAchievements: "Você ganhou 5% de todas as conquistas",
        habitsFinished: "Hábitos terminados",
        archived: "Arquivado",
        finishHabit: "Terminar hábito",
        firstTime: "pela primeira vez",
        times: "Vezes",
        perfectDays: "Dias perfeitos",
        perfect: "Perfeito",
        journey: "JORNADA",
        recommendedForYou: "RECOMENDADO PARA VOCÊ",
        allJourneys: "TODAS AS JORNADAS",
        createNewHabit: "Criar novo hábito",
        regular: "REGULAR",
        negative: "NEGATIVO",
        onetime: "TAREFA ÚNICA",
        regularDesc: "Relacionado à sua rotina diária.",
        negativeDesc: "Comece cada dia como completo.",
        onetimeDesc: "Lembra você de eventos importantes.",
        createYourOwn: "CRIE O SEU",
        chooseFromPresets: "OU ESCOLHA DE PREDEFINIÇÕES",
        habitName: "Nome do hábito",
        chooseEmoji: "Escolha um emoji",
        chooseColor: "Escolha uma cor",
        reminderTime: "Hora do lembrete (opcional)",
        repeatDays: "Dias de repetição",
        saveChanges: "Salvar alterações",
        createHabit: "Criar hábito",
        editHabit: "Editar hábito",
        newHabitDetails: "Detalhes do novo hábito",
        cancel: "Cancelar",
        submit: "Enviar",
        // ... (rest of keys)
        todayProgress: "Progresso de hoje",
        noHabitsToday: "Sem hábitos para hoje",
        addFirstHabit: "Toque no + para adicionar seu primeiro hábito",
        me: "EU",
        backupRestore: "Backup e Restauração",
        backupRestoreDesc: "Faça login e sincronize seus dados",
        goPremium: "SEJA PREMIUM",
        generalSettings: "Configurações gerais",
        languageOptions: "Opções de idioma",
        shareWithFriends: "Compartilhar com amigos",
        rateUs: "Avalie-nos",
        feedback: "Feedback",
        version: "Versão",
        darkMode: "Modo escuro",
        notifications: "Notificações",
        done: "Concluído",
        selectLanguage: "Selecionar idioma",
        sendFeedback: "Enviar feedback",
        feedbackPlaceholder: "Diga-nos o que você acha...",
        synchronizeData: "Sincronize seus dados",
        continueWithGoogle: "Continuar com Google",
        others: "Outros",
        continueWithEmail: "Continuar com Email",
        continueWithApple: "Continuar com Apple",
        deleteHabit: "Excluir hábito?",
        deleteConfirmation: "Tem certeza que deseja excluir",
        deleteMessage: "Esta ação não pode ser desfeita.",
        delete: "Excluir",
        notificationsEnabled: "Notificações ativadas",
        notificationsDisabled: "Notificações desativadas",
        languageChanged: "Idioma alterado para",
        thanksForSharing: "Obrigado por compartilhar!",
        linkCopied: "Link copiado para a área de transferência!",
        thanksForFeedback: "Obrigado pelo seu feedback! 💙",
        enterFeedback: "Por favor, insira seu feedback",
        googleSignInSoon: "Login com Google em breve!",
        emailSignInSoon: "Login com Email em breve!",
        appleSignInSoon: "Login com Apple em breve!",
        premiumSoon: "Recursos Premium em breve! 👑",
        thankYouSupport: "Obrigado pelo seu apoio! ⭐",
        openingPlayStore: "Abrindo Play Store...",
        openingAppStore: "Abrindo App Store...",
        // Journey Detail
        keyResults: "RESULTADOS CHAVE",
        moreToExpect: "MAIS A ESPERAR",
        yourPersonalizedJourney: "SUA JORNADA PERSONALIZADA",
        startMyJourney: "INICIAR MINHA JORNADA",
        day: "DIA",
        // Vybes Content
        vybesWalkTitle: "CAMINHE TODOS OS DIAS PELA SAÚDE",
        vybesWalkDays: "30 Dias",
        vybesEnergyTitle: "MANHÃ DE ENERGIA",
        vybesEnergyDays: "30 Dias",
        vybesWaterTitle: "MANTENHA-SE HIDRATADO",
        vybesWaterDays: "21 Dias",
        vybesSleepTitle: "Ritual de dormir para um sono doce",
        vybesSugarTitle: "Diga adeus ao açúcar",
        vybesMeditationTitle: "Meditação para paz de espírito",
        vybesPetTitle: "Vida feliz com amigos peludos"
    },
    Chinese: {
        navToday: "今天",
        navCalendar: "历史",
        navVybes: "Vybes",
        navProfile: "个人资料",
        quote1: "我们重复做的事情造就了我们。",
        quote1Author: "亚里士多德",
        quote2: "取得领先的秘诀是开始。",
        quote2Author: "马克·吐温",
        today: "今天",
        history: "历史",
        calendar: "日历",
        allHabits: "所有习惯",
        achievements: "成就",
        statistics: "统计",
        avgCompletionRate: "平均完成率",
        active: "活跃",
        anytime: "随时",
        morning: "早上",
        everyday: "每天",
        myAchievements: "我的成就",
        earnedAchievements: "您已获得 5% 的成就",
        habitsFinished: "已完成习惯",
        archived: "已归档",
        finishHabit: "完成习惯",
        firstTime: "第一次",
        times: "次",
        perfectDays: "完美日",
        perfect: "完美",
        journey: "旅程",
        recommendedForYou: "为您推荐",
        allJourneys: "所有旅程",
        createNewHabit: "创建新习惯",
        regular: "常规",
        negative: "消极",
        onetime: "一次性",
        regularDesc: "与您的日常生活相关。",
        negativeDesc: "每天开始时都已完成。",
        onetimeDesc: "提醒您重要的一次性事件。",
        createYourOwn: "创建您自己的",
        chooseFromPresets: "或从预设中选择",
        habitName: "习惯名称",
        chooseEmoji: "选择表情符号",
        chooseColor: "选择颜色",
        reminderTime: "提醒时间（可选）",
        repeatDays: "重复天数",
        saveChanges: "保存更改",
        createHabit: "创建习惯",
        editHabit: "编辑习惯",
        newHabitDetails: "新习惯详情",
        cancel: "取消",
        submit: "提交",
        // ... (rest of keys)
        todayProgress: "今日进度",
        noHabitsToday: "今天没有习惯",
        addFirstHabit: "点击 + 按钮添加你的第一个习惯",
        me: "我",
        backupRestore: "备份与恢复",
        backupRestoreDesc: "登录并同步您的数据",
        goPremium: "升级高级版",
        generalSettings: "通用设置",
        languageOptions: "语言选项",
        shareWithFriends: "与朋友分享",
        rateUs: "评价我们",
        feedback: "反馈",
        version: "版本",
        darkMode: "深色模式",
        notifications: "通知",
        done: "完成",
        selectLanguage: "选择语言",
        sendFeedback: "发送反馈",
        feedbackPlaceholder: "告诉我们您的想法...",
        synchronizeData: "同步您的数据",
        continueWithGoogle: "通过 Google 继续",
        others: "其他",
        continueWithEmail: "通过电子邮件继续",
        continueWithApple: "通过 Apple 继续",
        deleteHabit: "删除习惯？",
        deleteConfirmation: "您确定要删除吗",
        deleteMessage: "此操作无法撤销。",
        delete: "删除",
        notificationsEnabled: "通知已启用",
        notificationsDisabled: "通知已禁用",
        languageChanged: "语言已更改为",
        thanksForSharing: "感谢分享！",
        linkCopied: "链接已复制到剪贴板！",
        thanksForFeedback: "感谢您的反馈！💙",
        enterFeedback: "请输入您的反馈",
        googleSignInSoon: "Google 登录即将推出！",
        emailSignInSoon: "电子邮件登录即将推出！",
        appleSignInSoon: "Apple 登录即将推出！",
        premiumSoon: "高级功能即将推出！👑",
        thankYouSupport: "感谢您的支持！⭐",
        openingPlayStore: "正在打开 Play 商店...",
        openingAppStore: "正在打开 App Store...",
        // Journey Detail
        keyResults: "关键结果",
        moreToExpect: "更多期待",
        yourPersonalizedJourney: "您的个性化旅程",
        startMyJourney: "开始我的旅程",
        day: "天",
        // Vybes Content
        vybesWalkTitle: "为了健康每天步行",
        vybesWalkDays: "30 天",
        vybesEnergyTitle: "活力早晨",
        vybesEnergyDays: "30 天",
        vybesWaterTitle: "保持水分",
        vybesWaterDays: "21 天",
        vybesSleepTitle: "为了甜美睡眠的睡前仪式",
        vybesSugarTitle: "告别糖分",
        vybesMeditationTitle: "为了内心平静的冥想",
        vybesPetTitle: "与毛茸茸朋友的幸福生活"
    },
    Japanese: {
        navToday: "今日",
        navCalendar: "履歴",
        navVybes: "Vybes",
        navProfile: "プロフィール",
        quote1: "私たちは繰り返し行うことによって作られます。",
        quote1Author: "アリストテレス",
        quote2: "先へ進むための秘訣は、始めることです。",
        quote2Author: "マーク・トウェイン",
        today: "今日",
        history: "履歴",
        calendar: "カレンダー",
        allHabits: "すべての習慣",
        achievements: "実績",
        statistics: "統計",
        avgCompletionRate: "平均完了率",
        active: "アクティブ",
        anytime: "いつでも",
        morning: "朝",
        everyday: "毎日",
        myAchievements: "私の実績",
        earnedAchievements: "全実績の5%を獲得しました",
        habitsFinished: "完了した習慣",
        archived: "アーカイブ済み",
        finishHabit: "習慣を完了",
        firstTime: "初めて",
        times: "回",
        perfectDays: "完璧な日",
        perfect: "完璧",
        journey: "ジャーニー",
        recommendedForYou: "あなたへのおすすめ",
        allJourneys: "すべてのジャーニー",
        createNewHabit: "新しい習慣を作成",
        regular: "レギュラー",
        negative: "ネガティブ",
        onetime: "一度きり",
        regularDesc: "日常生活に関連しています。",
        negativeDesc: "毎日完了として開始します。",
        onetimeDesc: "重要な一度きりのイベントをリマインドします。",
        createYourOwn: "独自に作成",
        chooseFromPresets: "またはプリセットから選択",
        habitName: "習慣名",
        chooseEmoji: "絵文字を選択",
        chooseColor: "色を選択",
        reminderTime: "リマインダー時間（オプション）",
        repeatDays: "繰り返し曜日",
        saveChanges: "変更を保存",
        createHabit: "習慣を作成",
        editHabit: "習慣を編集",
        newHabitDetails: "新しい習慣の詳細",
        cancel: "キャンセル",
        submit: "送信",
        // ... (rest of keys)
        todayProgress: "今日の進捗",
        noHabitsToday: "今日の習慣はありません",
        addFirstHabit: "+ ボタンをタップして最初の習慣を追加",
        me: "私",
        backupRestore: "バックアップと復元",
        backupRestoreDesc: "サインインしてデータを同期",
        goPremium: "プレミアムへ",
        generalSettings: "一般設定",
        languageOptions: "言語オプション",
        shareWithFriends: "友達と共有",
        rateUs: "評価する",
        feedback: "フィードバック",
        version: "バージョン",
        darkMode: "ダークモード",
        notifications: "通知",
        done: "完了",
        selectLanguage: "言語を選択",
        sendFeedback: "フィードバックを送信",
        feedbackPlaceholder: "ご意見をお聞かせください...",
        synchronizeData: "データを同期",
        continueWithGoogle: "Googleで続ける",
        others: "その他",
        continueWithEmail: "メールで続ける",
        continueWithApple: "Appleで続ける",
        deleteHabit: "習慣を削除しますか？",
        deleteConfirmation: "本当に削除しますか",
        deleteMessage: "この操作は取り消せません。",
        delete: "削除",
        notificationsEnabled: "通知が有効になりました",
        notificationsDisabled: "通知が無効になりました",
        languageChanged: "言語が変更されました：",
        thanksForSharing: "共有ありがとうございます！",
        linkCopied: "リンクがクリップボードにコピーされました！",
        thanksForFeedback: "フィードバックありがとうございます！💙",
        enterFeedback: "フィードバックを入力してください",
        googleSignInSoon: "Googleログインは近日公開予定！",
        emailSignInSoon: "メールログインは近日公開予定！",
        appleSignInSoon: "Appleログインは近日公開予定！",
        premiumSoon: "プレミアム機能は近日公開予定！👑",
        thankYouSupport: "サポートありがとうございます！⭐",
        openingPlayStore: "Playストアを開いています...",
        openingAppStore: "App Storeを開いています...",
        // Journey Detail
        keyResults: "主な結果",
        moreToExpect: "その他の期待",
        yourPersonalizedJourney: "あなたのパーソナライズされた旅",
        startMyJourney: "旅を始める",
        day: "日",
        // Vybes Content
        vybesWalkTitle: "健康のために毎日歩く",
        vybesWalkDays: "30 日",
        vybesEnergyTitle: "エナジーモーニング",
        vybesEnergyDays: "30 日",
        vybesWaterTitle: "水分補給",
        vybesWaterDays: "21 日",
        vybesSleepTitle: "甘い眠りのための就寝前の儀式",
        vybesSugarTitle: "砂糖にさよなら",
        vybesMeditationTitle: "心の平和のための瞑想",
        vybesPetTitle: "毛皮の友達との幸せな生活"
    },
    Korean: {
        navToday: "오늘",
        navCalendar: "기록",
        navVybes: "Vybes",
        navProfile: "프로필",
        quote1: "우리가 반복적으로 하는 것이 우리를 만듭니다.",
        quote1Author: "아리스토텔레스",
        quote2: "앞서가는 비결은 시작하는 것입니다.",
        quote2Author: "마크 트웨인",
        today: "오늘",
        history: "기록",
        calendar: "달력",
        allHabits: "모든 습관",
        achievements: "업적",
        statistics: "통계",
        avgCompletionRate: "평균 완료율",
        active: "활성",
        anytime: "언제든지",
        morning: "아침",
        everyday: "매일",
        myAchievements: "나의 업적",
        earnedAchievements: "전체 업적의 5%를 달성했습니다",
        habitsFinished: "완료된 습관",
        archived: "보관됨",
        finishHabit: "습관 완료",
        firstTime: "처음으로",
        times: "회",
        perfectDays: "완벽한 날",
        perfect: "완벽",
        journey: "여정",
        recommendedForYou: "추천",
        allJourneys: "모든 여정",
        createNewHabit: "새 습관 만들기",
        regular: "일반",
        negative: "부정적",
        onetime: "일회성",
        regularDesc: "일상 생활과 관련이 있습니다.",
        negativeDesc: "매일 완료된 상태로 시작합니다.",
        onetimeDesc: "중요한 일회성 이벤트를 상기시켜줍니다.",
        createYourOwn: "직접 만들기",
        chooseFromPresets: "또는 사전 설정에서 선택",
        habitName: "습관 이름",
        chooseEmoji: "이모티콘 선택",
        chooseColor: "색상 선택",
        reminderTime: "알림 시간 (선택 사항)",
        repeatDays: "반복 요일",
        saveChanges: "변경 사항 저장",
        createHabit: "습관 만들기",
        editHabit: "습관 편집",
        newHabitDetails: "새 습관 세부 정보",
        cancel: "취소",
        submit: "제출",
        // ... (rest of keys)
        todayProgress: "오늘의 진행 상황",
        noHabitsToday: "오늘의 습관이 없습니다",
        addFirstHabit: "+ 버튼을 눌러 첫 번째 습관을 추가하세요",
        me: "나",
        backupRestore: "백업 및 복원",
        backupRestoreDesc: "로그인하고 데이터 동기화",
        goPremium: "프리미엄으로 이동",
        generalSettings: "일반 설정",
        languageOptions: "언어 옵션",
        shareWithFriends: "친구와 공유",
        rateUs: "평가하기",
        feedback: "피드백",
        version: "버전",
        darkMode: "다크 모드",
        notifications: "알림",
        done: "완료",
        selectLanguage: "언어 선택",
        sendFeedback: "피드백 보내기",
        feedbackPlaceholder: "의견을 알려주세요...",
        synchronizeData: "데이터 동기화",
        continueWithGoogle: "Google로 계속",
        others: "기타",
        continueWithEmail: "이메일로 계속",
        continueWithApple: "Apple로 계속",
        deleteHabit: "습관을 삭제하시겠습니까?",
        deleteConfirmation: "정말 삭제하시겠습니까",
        deleteMessage: "이 작업은 취소할 수 없습니다.",
        delete: "삭제",
        notificationsEnabled: "알림이 활성화되었습니다",
        notificationsDisabled: "알림이 비활성화되었습니다",
        languageChanged: "언어가 변경되었습니다:",
        thanksForSharing: "공유해 주셔서 감사합니다!",
        linkCopied: "링크가 클립보드에 복사되었습니다!",
        thanksForFeedback: "피드백 감사합니다! 💙",
        enterFeedback: "피드백을 입력해주세요",
        googleSignInSoon: "Google 로그인은 곧 제공됩니다!",
        emailSignInSoon: "이메일 로그인은 곧 제공됩니다!",
        appleSignInSoon: "Apple 로그인은 곧 제공됩니다!",
        premiumSoon: "프리미엄 기능이 곧 제공됩니다! 👑",
        thankYouSupport: "지원해 주셔서 감사합니다! ⭐",
        openingPlayStore: "Play 스토어 여는 중...",
        openingAppStore: "App Store 여는 중...",
        // Journey Detail
        keyResults: "주요 결과",
        moreToExpect: "더 기대할 것",
        yourPersonalizedJourney: "당신의 개인화된 여정",
        startMyJourney: "내 여정 시작",
        day: "일",
        // Vybes Content
        vybesWalkTitle: "건강을 위해 매일 걷기",
        vybesWalkDays: "30 일",
        vybesEnergyTitle: "에너지 모닝",
        vybesEnergyDays: "30 일",
        vybesWaterTitle: "수분 유지",
        vybesWaterDays: "21 일",
        vybesSleepTitle: "달콤한 잠을 위한 취침 의식",
        vybesSugarTitle: "설탕과 작별하세요",
        vybesMeditationTitle: "마음의 평화를 위한 명상",
        vybesPetTitle: "털복숭이 친구들과의 행복한 삶"
    },
    Tamil: {
        navToday: "இன்று",
        navCalendar: "நாட்காட்டி",
        navVybes: "Vybes",
        navProfile: "சுயவிவரம்",
        quote1: "நாம் திரும்பத் திரும்பச் செய்வதே நாம்.",
        quote1Author: "அரிஸ்டாட்டில்",
        quote2: "முன்னேறுவதற்கான ரகசியம் தொடங்குவதே.",
        quote2Author: "மார்க் டுவைன்",
        today: "இன்று",
        history: "வரலாறு",
        calendar: "நாட்காட்டி",
        allHabits: "அனைத்து பழக்கங்கள்",
        achievements: "சாதனைகள்",
        statistics: "புள்ளிவிவரங்கள்",
        avgCompletionRate: "சராசரி நிறைவு விகிதம்",
        active: "செயலில்",
        anytime: "எப்போது வேண்டுமானாலும்",
        morning: "காலை",
        everyday: "தினமும்",
        myAchievements: "என் சாதனைகள்",
        earnedAchievements: "நீங்கள் அனைத்து சாதனைகளிலும் 5% பெற்றுள்ளீர்கள்",
        habitsFinished: "முடிக்கப்பட்ட பழக்கங்கள்",
        archived: "காப்பகப்படுத்தப்பட்டது",
        finishHabit: "பழக்கத்தை முடி",
        firstTime: "முதல் முறையாக",
        times: "முறை",
        perfectDays: "சரியான நாட்கள்",
        perfect: "சரியானது",
        journey: "பயணம்",
        recommendedForYou: "உங்களுக்காக பரிந்துரைக்கப்படுகிறது",
        allJourneys: "அனைத்து பயணங்கள்",
        createNewHabit: "புதிய பழக்கத்தை உருவாக்கு",
        regular: "வழக்கமான",
        negative: "எதிர்மறை",
        onetime: "ஒரு முறை",
        regularDesc: "உங்கள் தினசரி வழக்கத்துடன் தொடர்புடையது.",
        negativeDesc: "ஒவ்வொரு நாளையும் முழுமையாகத் தொடங்குங்கள்.",
        onetimeDesc: "முக்கியமான ஒரு முறை நிகழ்வுகளை நினைவூட்டுகிறது.",
        createYourOwn: "சொந்தமாக உருவாக்கு",
        chooseFromPresets: "அல்லது முன்னமைவுகளிலிருந்து தேர்ந்தெடு",
        habitName: "பழக்கத்தின் பெயர்",
        chooseEmoji: "எமோஜியைத் தேர்ந்தெடு",
        chooseColor: "நிறத்தைத் தேர்ந்தெடு",
        reminderTime: "நினைவூட்டல் நேரம் (விருப்பத்தேர்வு)",
        repeatDays: "நாட்களை மீண்டும் செய்",
        saveChanges: "மாற்றங்களைச் சேமி",
        createHabit: "பழக்கத்தை உருவாக்கு",
        editHabit: "பழக்கத்தைத் திருத்து",
        newHabitDetails: "புதிய பழக்க விவரங்கள்",
        cancel: "ரத்துசெய்",
        submit: "சமர்ப்பி",
        todayProgress: "இன்றைய முன்னேற்றம்",
        noHabitsToday: "இன்று பழக்கங்கள் இல்லை",
        addFirstHabit: "உங்கள் முதல் பழக்கத்தைச் சேர்க்க + பொத்தானைத் தட்டவும்",
        me: "நான்",
        backupRestore: "காப்பு மற்றும் மீட்டெடுப்பு",
        backupRestoreDesc: "உள்நுழைந்து தரவை ஒத்திசைக்கவும்",
        goPremium: "பிரீமியம் செல்லுங்கள்",
        generalSettings: "பொது அமைப்புகள்",
        languageOptions: "மொழி விருப்பங்கள்",
        shareWithFriends: "நண்பர்களுடன் பகிர்",
        rateUs: "எங்களை மதிப்பிடு",
        feedback: "கருத்து",
        version: "பதிப்பு",
        darkMode: "இருண்ட பயன்முறை",
        notifications: "அறிவிப்புகள்",
        done: "முடிந்தது",
        selectLanguage: "மொழியைத் தேர்ந்தெடு",
        sendFeedback: "கருத்தை அனுப்பு",
        feedbackPlaceholder: "உங்கள் எண்ணத்தைச் சொல்லுங்கள்...",
        synchronizeData: "தரவை ஒத்திசைக்கவும்",
        continueWithGoogle: "Google உடன் தொடரவும்",
        others: "மற்றவை",
        continueWithEmail: "மின்னஞ்சல் உடன் தொடரவும்",
        continueWithApple: "Apple உடன் தொடரவும்",
        deleteHabit: "பழக்கத்தை நீக்கவா?",
        deleteConfirmation: "நிச்சயமாக நீக்க விரும்புகிறீர்களா",
        deleteMessage: "இந்த செயலை மாற்ற முடியாது.",
        delete: "நீக்கு",
        notificationsEnabled: "அறிவிப்புகள் இயக்கப்பட்டது",
        notificationsDisabled: "அறிவிப்புகள் முடக்கப்பட்டது",
        languageChanged: "மொழி மாற்றப்பட்டது",
        thanksForSharing: "பகிர்ந்தமைக்கு நன்றி!",
        linkCopied: "இணைப்பு நகலெடுக்கப்பட்டது!",
        thanksForFeedback: "உங்கள் கருத்துக்களுக்கு நன்றி! 💙",
        enterFeedback: "தயவுசெய்து உங்கள் கருத்தை உள்ளிடவும்",
        googleSignInSoon: "Google உள்நுழைவு விரைவில்!",
        emailSignInSoon: "மின்னஞ்சல் உள்நுழைவு விரைவில்!",
        appleSignInSoon: "Apple உள்நுழைவு விரைவில்!",
        premiumSoon: "பிரீமியம் அம்சங்கள் விரைவில்! 👑",
        thankYouSupport: "உங்கள் ஆதரவுக்கு நன்றி! ⭐",
        openingPlayStore: "Play Store திறக்கிறது...",
        openingAppStore: "App Store திறக்கிறது...",
        keyResults: "முக்கிய முடிவுகள்",
        moreToExpect: "மேலும் எதிர்பார்க்கலாம்",
        yourPersonalizedJourney: "உங்கள் தனிப்பயனாக்கப்பட்ட பயணம்",
        startMyJourney: "என் பயணத்தைத் தொடங்கு",
        day: "நாள்",
        vybesWalkTitle: "ஆரோக்கியத்திற்காக தினமும் நடக்கவும்",
        vybesWalkDays: "30 நாட்கள்",
        vybesEnergyTitle: "ஆற்றல் காலை",
        vybesEnergyDays: "30 நாட்கள்",
        vybesWaterTitle: "நீரேற்றமாக இருங்கள்",
        vybesWaterDays: "21 நாட்கள்",
        vybesSleepTitle: "இனிய தூக்கத்திற்கான படுக்கை சடங்கு",
        vybesSugarTitle: "சர்க்கரைக்கு விடைபெறுங்கள்",
        vybesMeditationTitle: "மன அமைதிக்கான தியானம்",
        vybesPetTitle: "செல்லப்பிராணிகளுடன் மகிழ்ச்சியான வாழ்க்கை",
        // Journey Details (Sleep Journey)
        journeySleepDesc: "நிம்மதியான தூக்க சடங்குகள் தூக்கக் கோளாறுகள் மற்றும் மன அழுத்தத்தை கணிசமாக சமாளிக்க உதவுவதாக நிரூபிக்கப்பட்டுள்ளது. அவை ஆழ்ந்த குடும்ப தொடர்புகளுக்கான தருணங்களையும் அனுமதிக்கின்றன. படுக்கும் முன், நிம்மதியான தூக்கத்திற்காக உங்களை மனரீதியாகவும் உடல்ரீதியாகவும் தயார்படுத்த முயற்சிக்கவும்.",
        journeySleepResult1: "தூக்கமின்மைக்கு விடைபெறுங்கள்",
        journeySleepResult2: "வேகமாகவும் சிறப்பாகவும் தூங்குங்கள்",
        journeySleepResult3: "அதிக ஆற்றல் மற்றும் படைப்பாற்றல்",
        journeySleepResult4: "ஆரோக்கியமான வாழ்க்கை அட்டவணை",
        journeySleepExpect1: "சிறந்த மனநிலை",
        journeySleepExpect2: "அதிக உற்பத்தித்திறன்",
        journeySleepExpect3: "மேம்பட்ட நினைவாற்றல்",
        journeySleepTimeline1: "நாள் 1-7",
        journeySleepTimeline1Desc: "ஒரு வழக்கத்தை உருவாக்குங்கள்",
        journeySleepTimeline2: "நாள் 8-21",
        journeySleepTimeline2Desc: "சரிசெய்து மேம்படுத்தவும்",
        journeySleepTimeline3: "நாள் 22-30",
        journeySleepTimeline3Desc: "பராமரித்து மகிழுங்கள்",
        // Presets
        presetTrendTitle: "பிரபலமான பழக்கங்கள்",
        presetTrendSub: "உலகத்துடன் வேகத்தை ஈடுசெய்யுங்கள்",
        presetEssentialTitle: "அவசியமான பழக்கங்கள்",
        presetEssentialSub: "எளிய செயல்களால் உங்கள் வாழ்க்கையைப் புதுப்பிக்கவும்",
        presetHealthTitle: "ஆரோக்கியமாக சாப்பிடுங்கள் & குடிங்கள்",
        presetHealthSub: "தினசரி உட்கொள்ளல்களுடன் ஆரோக்கியமாக இருங்கள்",
        presetFitTitle: "சுறுசுறுப்பாக இருங்கள் & உடற்தகுதி பெறுங்கள்",
        presetFitSub: "வியர்வை ஒருபோதும் பொய் சொல்லாது",
        // Suggestions
        sugScreenTime: "திரை நேரத்தைத் தடு",
        sugScreenTimeSub: "திரையைப் பூட்டி கவனத்தைச் செலுத்துங்கள்",
        sugCaffeine: "காஃபின் உட்கொள்ளலைக் குறைக்கவும்",
        sugCaffeineSub: "பிற ஆரோக்கியமான தேர்வுகளுடன் மாற்றவும்",
        sugFasting: "இடைப்பட்ட விரதம்",
        sugFastingSub: "உங்கள் வயிற்றுக்கு சிறிது ஓய்வு தேவை",
        sugMeditation: "தியானம் செய்யுங்கள்",
        sugMeditationSub: "உங்கள் உள் அமைதியுடன் இணையுங்கள்",
        sugLaugh: "அதிகம் சிரியுங்கள்",
        sugLaughSub: "உங்களை சத்தமாக சிரிக்க வைக்கும் தருணத்தைக் கண்டறியவும்",
        sugBest: "\"நீங்கள் சிறந்தவர்\"",
        sugBestSub: "எழுந்ததும் இதை நீங்களே சொல்லுங்கள்",
        sugHobby: "ஒரு பொழுதுபோக்கை பயிற்சி செய்யுங்கள்",
        sugHobbySub: "உங்கள் நேரத்தை நிரப்புங்கள், வாழ்க்கை உங்களைக் கடந்து செல்லாது",
        sugClean: "விரைவான சுத்தம்",
        sugCleanSub: "சில நிமிடங்களில் உங்கள் இடத்தை ஒழுங்குபடுத்துங்கள்",
        sugWeight: "உங்கள் இலட்சிய எடையை அடையுங்கள்",
        sugWeightSub: "நீங்கள் இன்று வித்தியாசமாக இருக்கிறீர்கள்",
        sugWater: "தண்ணீர் குடிக்கவும்",
        sugWaterSub: "நீரேற்றமாக இருங்கள்",
        sugRead: "ஒரு புத்தகத்தைப் படியுங்கள்",
        sugReadSub: "உங்கள் அறிவை விரிவுபடுத்துங்கள்",
        sugExercise: "உடற்பயிற்சி",
        sugExerciseSub: "உங்கள் உடலை ஆரோக்கியமாக வைத்திருங்கள்",
        sugVeggies: "காய்கறிகளை சாப்பிடுங்கள்",
        sugVeggiesSub: "உங்கள் வைட்டமின்களைப் பெறுங்கள்",
        sugSoda: "சோடா வேண்டாம்",
        sugSodaSub: "சர்க்கரையைக் குறைக்கவும்",
        sugRun: "காலை ஓட்டம்",
        sugRunSub: "ஆற்றலுடன் நாளைத் தொடங்குங்கள்",
        sugYoga: "யோகா",
        sugYogaSub: "நீட்டி ஓய்வெடுங்கள்"
    }
};
function getTranslation(language, key) {
    const langTranslations = translations[language];
    return langTranslations?.[key] || translations.English[key] || key;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/lib/use-translation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/translations.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useTranslation() {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("English");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranslation.useEffect": ()=>{
            // Load language from localStorage
            const savedLanguage = localStorage.getItem("language");
            if (savedLanguage && __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][savedLanguage]) {
                setLanguage(savedLanguage);
            }
            // Listen for language changes
            const handleStorageChange = {
                "useTranslation.useEffect.handleStorageChange": (e)=>{
                    if (e.key === "language" && e.newValue) {
                        const newLang = e.newValue;
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][newLang]) {
                            setLanguage(newLang);
                        }
                    }
                }
            }["useTranslation.useEffect.handleStorageChange"];
            window.addEventListener("storage", handleStorageChange);
            return ({
                "useTranslation.useEffect": ()=>window.removeEventListener("storage", handleStorageChange)
            })["useTranslation.useEffect"];
        }
    }["useTranslation.useEffect"], []);
    const t = (key)=>{
        const langTranslations = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language];
        return langTranslations?.[key] || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"].English[key] || key;
    };
    return {
        t,
        language,
        setLanguage
    };
}
_s(useTranslation, "Brn1zp+Bdick7y+tZ3eVyoxD2zY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/bottom-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/use-translation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BottomNav({ activeTab, onTabChange }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const tabs = [
        {
            id: "home",
            label: t("navToday"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            id: "calendar",
            label: t("navCalendar"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
        },
        {
            id: "vybes",
            label: t("navVybes"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
        },
        {
            id: "profile",
            label: t("navProfile"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 z-40 glass border-t border-border/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-around h-16 max-w-md mx-auto",
            children: tabs.map((tab)=>{
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange(tab.id),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1 px-4 py-2 transition-all", isActive ? "text-primary" : "text-muted-foreground"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-6 w-6 transition-transform", isActive && "scale-110")
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/bottom-nav.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium",
                            children: tab.label
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/bottom-nav.tsx",
                            lineNumber: 41,
                            columnNumber: 15
                        }, this)
                    ]
                }, tab.id, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/bottom-nav.tsx",
                    lineNumber: 32,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Downloads/habit-tracker-design/components/bottom-nav.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/bottom-nav.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(BottomNav, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = BottomNav;
var _c;
__turbopack_context__.k.register(_c, "BottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/habit-tracker-design/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Checkbox;
;
var _c;
__turbopack_context__.k.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmDialog",
    ()=>ConfirmDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
"use client";
;
;
;
;
function ConfirmDialog({ open, title, message, confirmText = "Confirm", cancelText = "Cancel", variant = "warning", onConfirm, onCancel }) {
    if (!open) return null;
    const icons = {
        danger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
            className: "h-12 w-12 text-destructive"
        }, void 0, false, {
            fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
            lineNumber: 31,
            columnNumber: 17
        }, this),
        warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
            className: "h-12 w-12 text-orange-500"
        }, void 0, false, {
            fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
            lineNumber: 32,
            columnNumber: 18
        }, this),
        info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
            className: "h-12 w-12 text-primary"
        }, void 0, false, {
            fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
            lineNumber: 33,
            columnNumber: 15
        }, this),
        success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
            className: "h-12 w-12 text-success"
        }, void 0, false, {
            fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
            lineNumber: 34,
            columnNumber: 18
        }, this)
    };
    const iconBgs = {
        danger: "bg-destructive/10",
        warning: "bg-orange-500/10",
        info: "bg-primary/10",
        success: "bg-success/10"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200",
        style: {
            position: 'fixed',
            inset: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "glass border-0 p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-16 w-16 rounded-full ${iconBgs[variant]} flex items-center justify-center mb-4`,
                        children: icons[variant]
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-foreground mb-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
                        lineNumber: 58,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mb-6 text-sm leading-relaxed",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onCancel,
                                variant: "outline",
                                className: "flex-1 h-11 font-medium",
                                children: cancelText
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onConfirm,
                                className: `flex-1 h-11 font-medium ${variant === "danger" ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"}`,
                                children: confirmText
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
                lineNumber: 51,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_c = ConfirmDialog;
var _c;
__turbopack_context__.k.register(_c, "ConfirmDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/fire-streak.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FireStreak",
    ()=>FireStreak
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function FireStreak({ streak, size = "md", animate = false }) {
    const sizeClasses = {
        sm: "text-lg",
        md: "text-2xl",
        lg: "text-4xl",
        xl: "text-6xl"
    };
    const numberSizes = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-lg",
        xl: "text-2xl"
    };
    if (streak === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizeClasses[size], "opacity-40"),
                    children: "🔥"
                }, void 0, false, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/fire-streak.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(numberSizes[size], "font-semibold text-muted-foreground"),
                    children: "0"
                }, void 0, false, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/fire-streak.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/habit-tracker-design/components/fire-streak.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizeClasses[size], animate && "fire-animate"),
                children: "🔥"
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/fire-streak.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(numberSizes[size], "font-bold", streak >= 30 ? "text-accent" : streak >= 7 ? "text-primary" : "text-foreground"),
                children: streak
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/fire-streak.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/habit-tracker-design/components/fire-streak.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = FireStreak;
var _c;
__turbopack_context__.k.register(_c, "FireStreak");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/confetti.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Confetti",
    ()=>Confetti
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Confetti({ trigger }) {
    _s();
    const [pieces, setPieces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Confetti.useEffect": ()=>{
            if (trigger) {
                const colors = [
                    "#0A5F4E",
                    "#E85D4C",
                    "#F39C12",
                    "#4ECDC4",
                    "#9B59B6"
                ];
                const newPieces = [];
                for(let i = 0; i < 20; i++){
                    newPieces.push({
                        id: i,
                        x: 50 + (Math.random() - 0.5) * 60,
                        y: 50 + (Math.random() - 0.5) * 60,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        rotation: Math.random() * 360,
                        scale: 0.5 + Math.random() * 0.5
                    });
                }
                setPieces(newPieces);
                const timeout = setTimeout({
                    "Confetti.useEffect.timeout": ()=>{
                        setPieces([]);
                    }
                }["Confetti.useEffect.timeout"], 600);
                return ({
                    "Confetti.useEffect": ()=>clearTimeout(timeout)
                })["Confetti.useEffect"];
            }
        }
    }["Confetti.useEffect"], [
        trigger
    ]);
    if (pieces.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        children: pieces.map((piece)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "confetti-burst absolute h-2 w-2 rounded-full",
                style: {
                    left: `${piece.x}%`,
                    top: `${piece.y}%`,
                    backgroundColor: piece.color,
                    transform: `rotate(${piece.rotation}deg) scale(${piece.scale})`
                }
            }, piece.id, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/confetti.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/confetti.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Confetti, "dst5rWbiaTb9BsiZiBj3FczSZXg=");
_c = Confetti;
var _c;
__turbopack_context__.k.register(_c, "Confetti");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/habit-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HabitCard",
    ()=>HabitCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$confirm$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/confirm-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$fire$2d$streak$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/fire-streak.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$confetti$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/confetti.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/use-translation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function HabitCard({ habit, isCompleted, streak, onToggle, onDelete, onClick }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [showConfetti, setShowConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeleteDialog, setShowDeleteDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleToggle = ()=>{
        if (!isCompleted) {
            setShowConfetti(true);
            setTimeout(()=>setShowConfetti(false), 100);
        }
        onToggle();
    };
    const handleDeleteClick = ()=>{
        setShowDeleteDialog(true);
    };
    const handleConfirmDelete = ()=>{
        setShowDeleteDialog(false);
        onDelete?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glass relative overflow-hidden border-0 p-4 shadow-lg transition-all duration-300", isCompleted && "ring-2 ring-success/50"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$confetti$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Confetti"], {
                trigger: showConfetti
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleToggle,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-12 w-12 items-center justify-center rounded-2xl text-2xl transition-all duration-300", isCompleted ? "bg-success/20 scale-105" : "bg-secondary hover:bg-secondary/80"),
                        style: {
                            borderLeft: `4px solid ${habit.color}`
                        },
                        children: habit.emoji
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 cursor-pointer",
                        onClick: onClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold text-foreground transition-all", isCompleted && "line-through opacity-60"),
                                children: habit.name
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: habit.reminderTime && `⏰ ${habit.reminderTime}`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$fire$2d$streak$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FireStreak"], {
                                streak: streak,
                                size: "md",
                                animate: isCompleted
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: handleDeleteClick,
                                className: "h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                checked: isCompleted,
                                onCheckedChange: handleToggle,
                                className: "h-6 w-6 rounded-lg border-2 data-[state=checked]:bg-success data-[state=checked]:border-success"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$confirm$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmDialog"], {
                open: showDeleteDialog,
                title: t("deleteHabit"),
                message: `${t("deleteConfirmation")} "${habit.name}"? ${t("deleteMessage")}`,
                confirmText: t("delete"),
                cancelText: t("cancel"),
                variant: "danger",
                onConfirm: handleConfirmDelete,
                onCancel: ()=>setShowDeleteDialog(false)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/habit-tracker-design/components/habit-card.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(HabitCard, "oj43F1f+7zwHxtk6dUEt3UmN3pU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = HabitCard;
var _c;
__turbopack_context__.k.register(_c, "HabitCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddHabitModal",
    ()=>AddHabitModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/use-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$glass$2d$water$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlassWater$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/glass-water.js [app-client] (ecmascript) <export default as GlassWater>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/footprints.js [app-client] (ecmascript) <export default as Footprints>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const EMOJI_OPTIONS = [
    "🧘",
    "💪",
    "📚",
    "💧",
    "✍️",
    "📵",
    "🏃",
    "🎯",
    "🧠",
    "😴",
    "🥗",
    "🎨"
];
const COLOR_OPTIONS = [
    "#0A5F4E",
    "#E85D4C",
    "#5B8DEF",
    "#4ECDC4",
    "#9B59B6",
    "#F39C12"
];
function AddHabitModal({ open, onClose, onSave, initialData }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData ? "form" : "selection");
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("regular");
    const [selectedPresetId, setSelectedPresetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Form State
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.name || "");
    const [emoji, setEmoji] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.emoji || "🎯");
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.color || "#0A5F4E");
    const [reminderTime, setReminderTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.reminderTime || "");
    const [repeatDays, setRepeatDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.repeatDays || [
        0,
        1,
        2,
        3,
        4,
        5,
        6
    ]);
    const toggleDay = (day)=>{
        if (repeatDays.includes(day)) {
            setRepeatDays(repeatDays.filter((d)=>d !== day));
        } else {
            setRepeatDays([
                ...repeatDays,
                day
            ].sort());
        }
    };
    const handleSave = ()=>{
        if (!name.trim()) return;
        onSave({
            name,
            emoji,
            color,
            reminderTime,
            repeatDays
        });
        resetForm();
        onClose();
    };
    const resetForm = ()=>{
        setName("");
        setEmoji("🎯");
        setColor("#0A5F4E");
        setReminderTime("");
        setRepeatDays([
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ]);
        setStep("selection");
        setSelectedType("regular");
        setSelectedPresetId(null);
    };
    const handleClose = ()=>{
        resetForm();
        onClose();
    };
    const handlePresetClick = (presetId)=>{
        setSelectedPresetId(presetId);
        setStep("suggestions");
    };
    const handleSuggestionClick = (suggestion)=>{
        setName(suggestion.name);
        setEmoji(suggestion.emoji);
        setColor(suggestion.color);
        setStep("form");
    };
    const getDescription = ()=>{
        switch(selectedType){
            case "regular":
                return t("regularDesc");
            case "negative":
                return t("negativeDesc");
            case "onetime":
                return t("onetimeDesc");
        }
    };
    const presets = [
        {
            id: "trend",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"],
            label: t("presetTrendTitle"),
            sub: t("presetTrendSub"),
            colorClass: "text-white",
            bgClass: "bg-blue-500"
        },
        {
            id: "essential",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
            label: t("presetEssentialTitle"),
            sub: t("presetEssentialSub"),
            colorClass: "text-white",
            bgClass: "bg-yellow-500"
        },
        {
            id: "health",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$glass$2d$water$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlassWater$3e$__["GlassWater"],
            label: t("presetHealthTitle"),
            sub: t("presetHealthSub"),
            colorClass: "text-white",
            bgClass: "bg-cyan-500"
        },
        {
            id: "fit",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__["Footprints"],
            label: t("presetFitTitle"),
            sub: t("presetFitSub"),
            colorClass: "text-white",
            bgClass: "bg-[#005C4B]"
        }
    ];
    const getSuggestions = (id)=>{
        switch(id){
            case "trend":
                return [
                    {
                        name: t("sugScreenTime"),
                        sub: t("sugScreenTimeSub"),
                        emoji: "📱",
                        color: "#3B82F6"
                    },
                    {
                        name: t("sugCaffeine"),
                        sub: t("sugCaffeineSub"),
                        emoji: "☕",
                        color: "#3B82F6"
                    },
                    {
                        name: t("sugFasting"),
                        sub: t("sugFastingSub"),
                        emoji: "⏱️",
                        color: "#3B82F6"
                    },
                    {
                        name: t("sugMeditation"),
                        sub: t("sugMeditationSub"),
                        emoji: "🧘",
                        color: "#3B82F6"
                    },
                    {
                        name: t("sugLaugh"),
                        sub: t("sugLaughSub"),
                        emoji: "😂",
                        color: "#3B82F6"
                    },
                    {
                        name: t("sugBest"),
                        sub: t("sugBestSub"),
                        emoji: "😊",
                        color: "#3B82F6"
                    },
                    {
                        name: t("sugHobby"),
                        sub: t("sugHobbySub"),
                        emoji: "🌱",
                        color: "#3B82F6"
                    },
                    {
                        name: t("sugClean"),
                        sub: t("sugCleanSub"),
                        emoji: "🧹",
                        color: "#3B82F6"
                    },
                    {
                        name: t("sugWeight"),
                        sub: t("sugWeightSub"),
                        emoji: "⚖️",
                        color: "#3B82F6"
                    }
                ];
            case "essential":
                return [
                    {
                        name: t("sugWater"),
                        sub: t("sugWaterSub"),
                        emoji: "💧",
                        color: "#EAB308"
                    },
                    {
                        name: t("sugRead"),
                        sub: t("sugReadSub"),
                        emoji: "📚",
                        color: "#EAB308"
                    },
                    {
                        name: t("sugExercise"),
                        sub: t("sugExerciseSub"),
                        emoji: "🏃",
                        color: "#EAB308"
                    }
                ];
            case "health":
                return [
                    {
                        name: t("sugVeggies"),
                        sub: t("sugVeggiesSub"),
                        emoji: "🥗",
                        color: "#06B6D4"
                    },
                    {
                        name: t("sugSoda"),
                        sub: t("sugSodaSub"),
                        emoji: "🥤",
                        color: "#06B6D4"
                    },
                    {
                        name: t("sugWater"),
                        sub: t("sugWaterSub"),
                        emoji: "💧",
                        color: "#06B6D4"
                    }
                ];
            case "fit":
                return [
                    {
                        name: t("sugRun"),
                        sub: t("sugRunSub"),
                        emoji: "🏃",
                        color: "#005C4B"
                    },
                    {
                        name: t("sugYoga"),
                        sub: t("sugYogaSub"),
                        emoji: "🧘",
                        color: "#005C4B"
                    },
                    {
                        name: t("sugExercise"),
                        sub: t("sugExerciseSub"),
                        emoji: "💪",
                        color: "#005C4B"
                    }
                ];
            default:
                return [];
        }
    };
    const currentSuggestions = selectedPresetId ? getSuggestions(selectedPresetId) : [];
    const currentPreset = presets.find((p)=>p.id === selectedPresetId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "bg-white max-w-md border-0 p-0 overflow-hidden text-slate-900 h-[80vh] flex flex-col",
            children: [
                step === "selection" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6 overflow-y-auto flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-xl font-bold text-slate-900",
                                children: t("createNewHabit")
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedType("regular"),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center p-3 rounded-xl transition-all h-24 border-2", selectedType === "regular" ? "bg-[#005C4B] border-[#005C4B] text-white" : "bg-slate-100 border-transparent hover:bg-slate-200 text-slate-600"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
                                            className: "h-6 w-6 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold uppercase",
                                            children: t("regular")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedType("negative"),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center p-3 rounded-xl transition-all h-24 border-2", selectedType === "negative" ? "bg-red-500 border-red-500 text-white" : "bg-slate-100 border-transparent hover:bg-slate-200 text-slate-600"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                            className: "h-6 w-6 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold uppercase",
                                            children: t("negative")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedType("onetime"),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center p-3 rounded-xl transition-all h-24 border-2", selectedType === "onetime" ? "bg-[#005C4B] border-[#005C4B] text-white" : "bg-slate-100 border-transparent hover:bg-slate-200 text-slate-600"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                            className: "h-6 w-6 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold uppercase text-center leading-tight",
                                            children: t("onetime")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-100 p-4 rounded-xl relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -top-2 w-4 h-4 bg-slate-100 rotate-45 transition-all duration-300", selectedType === "regular" && "left-[16%]", selectedType === "negative" && "left-[50%] -translate-x-1/2", selectedType === "onetime" && "left-[84%]")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold uppercase mb-1 text-sm text-slate-900",
                                    children: selectedType === "onetime" ? t("onetime") : selectedType === "regular" ? t("regular") : t("negative")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500 leading-relaxed",
                                    children: getDescription()
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setStep("form"),
                            className: "w-full h-12 bg-[#005C4B] hover:bg-[#004a3c] text-white font-bold rounded-full text-base",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-5 w-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this),
                                t("createYourOwn")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-bold text-slate-400 uppercase mb-3 text-center",
                                    children: t("chooseFromPresets")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: presets.map((preset, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handlePresetClick(preset.id),
                                            className: "w-full bg-slate-100 hover:bg-slate-200 p-4 rounded-xl flex items-center justify-between group transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-10 w-10 rounded-lg flex items-center justify-center", preset.bgClass, preset.colorClass),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(preset.icon, {
                                                                className: "h-6 w-6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "font-bold text-sm text-slate-900",
                                                                    children: preset.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: preset.sub
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-8 w-8 rounded-full bg-white group-hover:bg-white/80 flex items-center justify-center shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this),
                step === "suggestions" && currentPreset && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full bg-slate-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 pb-4 bg-white border-b border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: ()=>setStep("selection"),
                                            className: "-ml-2 text-slate-900 hover:bg-slate-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                lineNumber: 276,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-slate-900",
                                            children: currentPreset.label
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500 pl-10",
                                    children: currentPreset.sub
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 space-y-3 overflow-y-auto flex-1",
                            children: currentSuggestions.map((suggestion, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSuggestionClick(suggestion),
                                    className: "w-full bg-white p-4 rounded-xl flex items-center justify-between group hover:shadow-md transition-all border border-slate-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-10 w-10 rounded-lg bg-blue-50 text-2xl flex items-center justify-center",
                                                    children: suggestion.emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-bold text-sm text-slate-900",
                                                            children: suggestion.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: suggestion.sub
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 w-8 rounded-full bg-slate-50 group-hover:bg-slate-100 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-4 w-4 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                lineNumber: 303,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 302,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 288,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                    lineNumber: 271,
                    columnNumber: 11
                }, this),
                step === "form" && /* Form Step */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 flex flex-col h-full overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ()=>setStep(selectedPresetId ? "suggestions" : "selection"),
                                    className: "-ml-2 text-slate-900 hover:bg-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-xl font-bold text-slate-900",
                                    children: initialData ? t("editHabit") : t("newHabitDetails")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 py-4 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-slate-700",
                                            children: t("habitName")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            placeholder: "e.g., Meditate for 10 minutes",
                                            className: "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-slate-700",
                                            children: t("chooseEmoji")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: EMOJI_OPTIONS.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setEmoji(e),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-all", emoji === e ? "bg-[#005C4B]/10 ring-2 ring-[#005C4B]" : "bg-slate-100 hover:bg-slate-200"),
                                                    children: e
                                                }, e, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-slate-700",
                                            children: t("chooseColor")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: COLOR_OPTIONS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setColor(c),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-10 w-10 rounded-full transition-all", color === c && "ring-2 ring-offset-2 ring-slate-300"),
                                                    style: {
                                                        backgroundColor: c
                                                    }
                                                }, c, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 354,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-slate-700",
                                            children: t("reminderTime")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "time",
                                            value: reminderTime,
                                            onChange: (e)=>setReminderTime(e.target.value),
                                            className: "border-slate-200 bg-slate-50 text-slate-900"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 371,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-slate-700",
                                            children: t("repeatDays")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 380,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                0,
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                                6
                                            ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleDay(day),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-all", repeatDays.includes(day) ? "bg-[#005C4B] text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"),
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayName"])(day)
                                                }, day, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-4 pt-4 border-t border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: handleClose,
                                    className: "flex-1 bg-transparent border-slate-200 text-slate-700 hover:bg-slate-50",
                                    children: t("cancel")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSave,
                                    className: "flex-1 bg-[#005C4B] hover:bg-[#004a3c] text-white",
                                    children: initialData ? t("saveChanges") : t("createHabit")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
                    lineNumber: 313,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s(AddHabitModal, "QQ4n9dv1Q96tNeEfkupxWN8gX60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = AddHabitModal;
var _c;
__turbopack_context__.k.register(_c, "AddHabitModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeTab",
    ()=>HomeTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$habit$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/habit-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$add$2d$habit$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/use-translation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function HomeTab() {
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [habits, setHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const today = new Date();
    const todayStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(today);
    const dayOfWeek = today.getDay();
    const quote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTodayQuote"])();
    // Map language names to locales
    const locales = {
        English: "en-US",
        Spanish: "es-ES",
        French: "fr-FR",
        German: "de-DE",
        Italian: "it-IT",
        Portuguese: "pt-BR",
        Chinese: "zh-CN",
        Japanese: "ja-JP",
        Korean: "ko-KR",
        Hindi: "hi-IN"
    };
    const currentLocale = locales[language] || "en-US";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeTab.useEffect": ()=>{
            const loadedHabits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHabits"])().filter({
                "HomeTab.useEffect.loadedHabits": (h)=>!h.archived && h.repeatDays.includes(dayOfWeek)
            }["HomeTab.useEffect.loadedHabits"]);
            setHabits(loadedHabits);
            const handleDataUpdate = {
                "HomeTab.useEffect.handleDataUpdate": ()=>setRefreshKey({
                        "HomeTab.useEffect.handleDataUpdate": (k)=>k + 1
                    }["HomeTab.useEffect.handleDataUpdate"])
            }["HomeTab.useEffect.handleDataUpdate"];
            window.addEventListener('vybe_data_updated', handleDataUpdate);
            return ({
                "HomeTab.useEffect": ()=>window.removeEventListener('vybe_data_updated', handleDataUpdate)
            })["HomeTab.useEffect"];
        }
    }["HomeTab.useEffect"], [
        dayOfWeek,
        refreshKey
    ]);
    const handleAddHabit = (habitData)=>{
        const newHabit = {
            id: crypto.randomUUID(),
            ...habitData,
            createdAt: new Date().toISOString(),
            archived: false
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHabit"])(newHabit);
        setRefreshKey((k)=>k + 1);
    };
    const handleToggle = (habitId)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleCompletion"])(habitId, todayStr);
        setRefreshKey((k)=>k + 1);
    };
    const handleDelete = (habitId)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteHabit"])(habitId);
        setRefreshKey((k)=>k + 1);
    };
    const completedCount = habits.filter((h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCompleted"])(h.id, todayStr)).length;
    const progressPercent = habits.length > 0 ? completedCount / habits.length * 100 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pt-6 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-muted-foreground",
                        children: today.toLocaleDateString(currentLocale, {
                            weekday: "long",
                            month: "long",
                            day: "numeric"
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-foreground mt-1",
                        children: t("today")
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-2xl bg-primary/10 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-balance text-sm font-medium leading-relaxed text-foreground",
                                children: [
                                    "“",
                                    t("quote1"),
                                    "”"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-muted-foreground",
                                children: [
                                    "— ",
                                    t("quote1Author")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    habits.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: t("todayProgress")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-foreground",
                                        children: [
                                            completedCount,
                                            "/",
                                            habits.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 rounded-full bg-secondary overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full bg-success transition-all duration-500",
                                    style: {
                                        width: `${progressPercent}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-5 space-y-3",
                children: habits.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-16 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "🌱"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-foreground",
                            children: t("noHabitsToday")
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mt-2",
                            children: t("addFirstHabit")
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this) : habits.map((habit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$habit$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HabitCard"], {
                        habit: habit,
                        isCompleted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCompleted"])(habit.id, todayStr),
                        streak: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStreak"])(habit.id),
                        onToggle: ()=>handleToggle(habit.id),
                        onDelete: ()=>handleDelete(habit.id)
                    }, habit.id, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>setModalOpen(true),
                className: "fixed top-6 right-6 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90 z-10",
                size: "icon",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$add$2d$habit$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddHabitModal"], {
                open: modalOpen,
                onClose: ()=>setModalOpen(false),
                onSave: handleAddHabit
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(HomeTab, "Mzs0ycsrtNhvCbkjXoUQkIKB0MM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = HomeTab;
var _c;
__turbopack_context__.k.register(_c, "HomeTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarTab",
    ()=>CalendarTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/use-translation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function CalendarTab() {
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("calendar");
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [habits, setHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [completions, setCompletions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(new Date()));
    // Map language names to locales
    const locales = {
        English: "en-US",
        Spanish: "es-ES",
        French: "fr-FR",
        German: "de-DE",
        Italian: "it-IT",
        Portuguese: "pt-BR",
        Chinese: "zh-CN",
        Japanese: "ja-JP",
        Korean: "ko-KR",
        Hindi: "hi-IN",
        Tamil: "ta-IN"
    };
    const currentLocale = locales[language] || "en-US";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarTab.useEffect": ()=>{
            const loadData = {
                "CalendarTab.useEffect.loadData": ()=>{
                    setHabits((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHabits"])().filter({
                        "CalendarTab.useEffect.loadData": (h)=>!h.archived
                    }["CalendarTab.useEffect.loadData"]));
                    setCompletions((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompletions"])());
                }
            }["CalendarTab.useEffect.loadData"];
            loadData();
            window.addEventListener('vybe_data_updated', loadData);
            return ({
                "CalendarTab.useEffect": ()=>window.removeEventListener('vybe_data_updated', loadData)
            })["CalendarTab.useEffect"];
        }
    }["CalendarTab.useEffect"], []);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const monthName = currentDate.toLocaleDateString(currentLocale, {
        month: "long",
        year: "numeric"
    });
    const prevMonth = ()=>setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = ()=>setCurrentDate(new Date(year, month + 1, 1));
    // --- Calendar Tab Logic ---
    const completionMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalendarTab.useMemo[completionMap]": ()=>{
            const map = {};
            completions.forEach({
                "CalendarTab.useMemo[completionMap]": (c)=>{
                    map[c.date] = (map[c.date] || 0) + 1;
                }
            }["CalendarTab.useMemo[completionMap]"]);
            return map;
        }
    }["CalendarTab.useMemo[completionMap]"], [
        completions
    ]);
    // --- All Habits Logic ---
    const activeHabits = habits.filter((h)=>!h.archived);
    const morningHabits = activeHabits.filter((h)=>h.reminderTime && parseInt(h.reminderTime.split(':')[0]) < 12);
    const anytimeHabits = activeHabits.filter((h)=>!h.reminderTime || parseInt(h.reminderTime.split(':')[0]) >= 12);
    // Generate localized day names
    const dayNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalendarTab.useMemo[dayNames]": ()=>{
            const days = [];
            for(let i = 0; i < 7; i++){
                // Create a date for a specific day of the week (e.g., Sunday, Jan 5, 2025)
                const date = new Date(2025, 0, 5 + i);
                days.push(date.toLocaleDateString(currentLocale, {
                    weekday: "short"
                }).toUpperCase());
            }
            return days;
        }
    }["CalendarTab.useMemo[dayNames]"], [
        currentLocale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col pb-24 px-5 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-foreground uppercase",
                        children: t("history")
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-6 mb-6 border-b border-border/50 pb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("calendar"),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-semibold pb-2 transition-all relative", activeTab === "calendar" ? "text-foreground" : "text-muted-foreground"),
                        children: [
                            t("calendar"),
                            activeTab === "calendar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full translate-y-1.5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("habits"),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-semibold pb-2 transition-all relative", activeTab === "habits" ? "text-foreground" : "text-muted-foreground"),
                        children: [
                            t("allHabits"),
                            activeTab === "habits" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full translate-y-1.5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("achievements"),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-semibold pb-2 transition-all relative", activeTab === "achievements" ? "text-foreground" : "text-muted-foreground"),
                        children: [
                            t("achievements"),
                            activeTab === "achievements" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full translate-y-1.5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            activeTab === "calendar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 animate-in fade-in slide-in-from-right-4 duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "glass border-0 p-4 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4 px-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-7 gap-1 w-full text-center",
                                    children: dayNames.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider",
                                            children: day
                                        }, day, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-7 gap-1",
                                children: [
                                    Array.from({
                                        length: firstDayOfMonth
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square"
                                        }, `empty-${i}`, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this)),
                                    Array.from({
                                        length: daysInMonth
                                    }).map((_, i)=>{
                                        const day = i + 1;
                                        const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(new Date(year, month, day));
                                        const isSelected = dateStr === selectedDate;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedDate(dateStr),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square flex items-center justify-center rounded-full text-sm font-bold transition-all", isSelected ? "bg-primary text-primary-foreground shadow-lg" : "text-foreground hover:bg-secondary"),
                                            children: day
                                        }, day, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-foreground mb-1 uppercase tracking-wide",
                                children: t("statistics")
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-muted-foreground mb-4 capitalize",
                                children: monthName
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "glass border-0 p-5 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-foreground",
                                                        children: "Nov 23 - Nov 29"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-bold text-foreground",
                                                        children: "33%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: t("avgCompletionRate")
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-32 flex items-end justify-between gap-2 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-1/2 left-0 right-0 border-t border-dashed border-muted-foreground/20"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            [
                                                "S",
                                                "M",
                                                "T",
                                                "W",
                                                "T",
                                                "F",
                                                "S"
                                            ].map((day, i)=>{
                                                const height = [
                                                    20,
                                                    30,
                                                    25,
                                                    35,
                                                    60,
                                                    20,
                                                    25
                                                ][i] // Mock data
                                                ;
                                                const isHigh = height > 50;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center gap-2 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3 rounded-full transition-all duration-500", isHigh ? "bg-primary shadow-lg" : "bg-secondary"),
                                                            style: {
                                                                height: `${height}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium text-muted-foreground",
                                                            children: day
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this),
            activeTab === "habits" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 animate-in fade-in slide-in-from-right-4 duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-foreground uppercase",
                                children: t("active")
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "(",
                                    activeHabits.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    anytimeHabits.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-bold text-muted-foreground uppercase mb-3 tracking-wider",
                                children: t("anytime")
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: anytimeHabits.map((habit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-0 p-4 bg-blue-500 text-white shadow-lg flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center text-xl backdrop-blur-sm",
                                                children: habit.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-lg",
                                                        children: habit.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white/80",
                                                        children: t("everyday")
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, habit.id, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 236,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 232,
                        columnNumber: 13
                    }, this),
                    morningHabits.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-bold text-muted-foreground uppercase mb-3 tracking-wider",
                                children: t("morning")
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: morningHabits.map((habit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-0 p-4 text-white shadow-lg flex items-center gap-4", index % 2 === 0 ? "bg-green-600" : "bg-orange-500"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center text-xl backdrop-blur-sm",
                                                children: habit.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 263,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-lg",
                                                        children: habit.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white/80",
                                                        children: t("everyday")
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 266,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, habit.id, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 256,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 252,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                lineNumber: 224,
                columnNumber: 9
            }, this),
            activeTab === "achievements" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 animate-in fade-in slide-in-from-right-4 duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-0 p-6 bg-blue-500 text-white shadow-lg relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-1",
                                        children: t("myAchievements")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/80",
                                        children: t("earnedAchievements")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-4 border-white/30 flex items-center justify-center font-bold text-xl",
                                children: "1"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-foreground",
                                        children: t("habitsFinished")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            "1/6 ",
                                            t("archived")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-4",
                                children: [
                                    1,
                                    10,
                                    20,
                                    50,
                                    100,
                                    300
                                ].map((count, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-16 w-16 mb-2 flex items-center justify-center rounded-full border-4", i === 0 ? "bg-blue-500/20 border-blue-500 text-blue-500" : "bg-muted border-muted-foreground/30 text-muted-foreground/50"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                    className: "h-8 w-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-foreground mb-0.5",
                                                children: t("finishHabit")
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-foreground",
                                                children: i === 0 ? t("firstTime") : `${count} ${t("times")}`
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, count, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-foreground",
                                        children: t("perfectDays")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            "0/6 ",
                                            t("archived")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-4",
                                children: [
                                    3,
                                    10,
                                    20,
                                    50,
                                    100,
                                    300
                                ].map((count)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-16 w-16 mb-2 flex items-center justify-center rounded-full bg-muted border-4 border-muted-foreground/30 text-muted-foreground/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "h-8 w-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 323,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-foreground",
                                                children: [
                                                    count,
                                                    " ",
                                                    t("perfect")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, count, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                        lineNumber: 322,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
                lineNumber: 280,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(CalendarTab, "4bhRX8v/3SxFDGP2XG5jkpv27E4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = CalendarTab;
var _c;
__turbopack_context__.k.register(_c, "CalendarTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/journey-detail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JourneyDetail",
    ()=>JourneyDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/bed.js [app-client] (ecmascript) <export default as Bed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/use-translation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function JourneyDetail({ journey, onBack }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    // Default data if not provided (fallback)
    const defaultKeyResults = [
        {
            title: "Say bye to insomnia",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
            color: "bg-indigo-100 text-indigo-600"
        },
        {
            title: "Sleep faster and better",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__["Bed"],
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "More energetic and creative",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
            color: "bg-amber-100 text-amber-600"
        },
        {
            title: "Healthy life schedule",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            color: "bg-green-100 text-green-600"
        }
    ];
    const defaultMoreToExpect = [
        "Better mood",
        "Higher productivity",
        "Improved memory"
    ];
    const defaultTimeline = [
        {
            day: "DAY 1-7",
            title: "Establish a routine",
            active: true
        },
        {
            day: "DAY 8-21",
            title: "Adjust and improve",
            active: false
        },
        {
            day: "DAY 22-30",
            title: "Maintain and enjoy",
            active: false
        }
    ];
    const description = journey.description || "Relaxing sleep rituals are proven to significantly overcome sleep disorders and stress overload. They also allow moments for deep family interactions. Before bed, try to prepare yourself mentally and physically for a night of restful sleep.";
    const keyResults = journey.keyResults || defaultKeyResults;
    const moreToExpect = journey.moreToExpect || defaultMoreToExpect;
    const timeline = journey.timeline || defaultTimeline;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex flex-col bg-background animate-in fade-in slide-in-from-bottom-8 duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[40vh] min-h-[300px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-center",
                        style: {
                            backgroundImage: `url(${journey.image})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        onClick: onBack,
                        className: "absolute top-6 left-4 text-white hover:bg-white/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 p-6 pt-20 bg-gradient-to-t from-background to-transparent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-black text-foreground uppercase leading-tight drop-shadow-sm",
                            children: journey.title
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto pb-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground leading-relaxed text-base",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                            lineNumber: 80,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xs font-bold text-muted-foreground uppercase mb-4 tracking-wider",
                                    children: t("keyResults")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: keyResults.map((result, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "border-0 bg-secondary/50 p-4 flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-8 rounded-full flex items-center justify-center", result.color),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(result.icon, {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold leading-tight",
                                                    children: result.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                            lineNumber: 89,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xs font-bold text-muted-foreground uppercase mb-4 tracking-wider",
                                    children: t("moreToExpect")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: moreToExpect.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                            lineNumber: 104,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xs font-bold text-muted-foreground uppercase mb-6 tracking-wider",
                                    children: t("yourPersonalizedJourney")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative pl-4 border-l-2 border-border space-y-8",
                                    children: timeline.map((stage, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -left-[21px] top-1 h-4 w-4 rounded-full border-2 transition-colors", stage.active ? "bg-primary border-primary" : "bg-background border-muted-foreground")
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-bold uppercase tracking-wider", stage.active ? "text-primary" : "text-muted-foreground"),
                                                            children: stage.day
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-lg", stage.active ? "text-foreground" : "text-muted-foreground"),
                                                            children: stage.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                            lineNumber: 119,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-6 right-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "w-full h-14 text-lg font-bold rounded-full shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]",
                    children: t("startMyJourney")
                }, void 0, false, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/habit-tracker-design/components/journey-detail.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_s(JourneyDetail, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = JourneyDetail;
var _c;
__turbopack_context__.k.register(_c, "JourneyDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/tabs/vybes-tab.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Downloads/habit-tracker-design/components/tabs/vybes-tab.tsx'\n\n'import', and 'export' cannot be used outside of module code");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/Downloads/habit-tracker-design/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Switch({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "switch",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            "data-slot": "switch-thumb",
            className: 'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
        }, void 0, false, {
            fileName: "[project]/Downloads/habit-tracker-design/components/ui/switch.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/ui/switch.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Switch;
;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileTab",
    ()=>ProfileTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/medal.js [app-client] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/use-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/auth-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ProfileTab() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { user, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notificationsEnabled, setNotificationsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showSettingsModal, setShowSettingsModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLanguageModal, setShowLanguageModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFeedbackModal, setShowFeedbackModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("English");
    const [feedbackText, setFeedbackText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Mock user data (replace with real data from DB later)
    const userProfile = {
        name: user?.user_metadata?.full_name || "Alex Johnson",
        age: 24,
        email: user?.email || "alex.johnson@example.com"
    };
    const achievements = [
        {
            id: 1,
            title: "Early Bird",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            desc: "Completed 5 morning habits"
        },
        {
            id: 2,
            title: "Streak Master",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
            color: "text-yellow-500",
            bg: "bg-yellow-500/10",
            desc: "7 day streak achieved"
        },
        {
            id: 3,
            title: "Zen Master",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
            color: "text-indigo-500",
            bg: "bg-indigo-500/10",
            desc: "Meditated for 10 hours total"
        },
        {
            id: 4,
            title: "Goal Crusher",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            desc: "Completed all habits for 3 days"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileTab.useEffect": ()=>{
            // Check if dark mode is enabled
            setIsDark(document.documentElement.classList.contains("dark"));
            // Load notification preference
            const notifPref = localStorage.getItem("notifications");
            if (notifPref !== null) {
                setNotificationsEnabled(notifPref === "true");
            }
            // Load language preference
            const langPref = localStorage.getItem("language");
            if (langPref) {
                setSelectedLanguage(langPref);
            }
        }
    }["ProfileTab.useEffect"], []);
    const showToastMessage = (message)=>{
        setToastMessage(message);
        setShowToast(true);
        setTimeout(()=>setShowToast(false), 3000);
    };
    const toggleDarkMode = ()=>{
        document.documentElement.classList.toggle("dark");
        setIsDark(!isDark);
    };
    const toggleNotifications = ()=>{
        const newValue = !notificationsEnabled;
        setNotificationsEnabled(newValue);
        localStorage.setItem("notifications", String(newValue));
        showToastMessage(newValue ? t("notificationsEnabled") : t("notificationsDisabled"));
    };
    const handleGeneralSettings = ()=>{
        setShowSettingsModal(true);
    };
    const handleLanguageOptions = ()=>{
        setShowLanguageModal(true);
    };
    const handleShareWithFriends = async ()=>{
        const shareData = {
            title: "Vybe - Habit Tracker",
            text: "Build unbreakable habits with Vybe! Track your progress and stay motivated.",
            url: window.location.href
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
                showToastMessage(t("thanksForSharing"));
            } else {
                await navigator.clipboard.writeText(shareData.url);
                showToastMessage(t("linkCopied"));
            }
        } catch (err) {
            console.log("Share failed:", err);
        }
    };
    const handleRateUs = ()=>{
        const userAgent = navigator.userAgent.toLowerCase();
        let storeUrl = "";
        if (userAgent.includes("android")) {
            storeUrl = "https://play.google.com/store";
            showToastMessage(t("openingPlayStore"));
        } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
            storeUrl = "https://apps.apple.com";
            showToastMessage(t("openingAppStore"));
        } else {
            showToastMessage(t("thankYouSupport"));
            return;
        }
        if (storeUrl) {
            window.open(storeUrl, "_blank");
        }
    };
    const handleFeedback = ()=>{
        setShowFeedbackModal(true);
    };
    const submitFeedback = ()=>{
        if (feedbackText.trim()) {
            console.log("Feedback submitted:", feedbackText);
            showToastMessage(t("thanksForFeedback"));
            setFeedbackText("");
            setShowFeedbackModal(false);
        } else {
            showToastMessage(t("enterFeedback"));
        }
    };
    const selectLanguage = (lang)=>{
        setSelectedLanguage(lang);
        localStorage.setItem("language", lang);
        showToastMessage(`${t("languageChanged")} ${lang}`);
        setShowLanguageModal(false);
        setTimeout(()=>window.location.reload(), 500);
    };
    const languages = [
        "English",
        "Spanish",
        "French",
        "German",
        "Italian",
        "Portuguese",
        "Chinese",
        "Japanese",
        "Korean",
        "Tamil",
        "Hindi"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col pb-24 px-5 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-foreground mb-6",
                children: t("me")
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            showToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-2 fade-in duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass border-0 px-6 py-3 rounded-full shadow-lg flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-4 w-4 text-success"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            children: toastMessage
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "glass border-0 p-6 shadow-lg mb-6 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 p-4 opacity-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            className: "h-32 w-32"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary border-2 border-primary/30",
                                        children: userProfile.name.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-foreground",
                                                children: userProfile.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Level 5 Achiever"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-3 rounded-xl bg-background/50 backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "h-5 w-5 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground uppercase tracking-wider",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium truncate",
                                                        children: userProfile.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-3 rounded-xl bg-background/50 backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "h-5 w-5 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground uppercase tracking-wider",
                                                        children: "Age"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium",
                                                        children: [
                                                            userProfile.age,
                                                            " years"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>showToastMessage("Password reset email sent!"),
                                        className: "w-full flex items-center gap-3 p-3 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                className: "h-5 w-5 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground uppercase tracking-wider",
                                                        children: "Security"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-primary",
                                                        children: "Change Password"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-foreground mb-3 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"], {
                                className: "h-5 w-5 text-yellow-500"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            "Achievements"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: achievements.map((achievement)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "glass border-0 p-4 shadow-sm hover:shadow-md transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-10 w-10 rounded-full flex items-center justify-center mb-3", achievement.bg),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(achievement.icon, {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", achievement.color)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-sm mb-1",
                                        children: achievement.title
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground leading-tight",
                                        children: achievement.desc
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, achievement.id, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "glass border-0 p-2 shadow-lg stagger-item mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleGeneralSettings,
                            className: "w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-9 w-9 rounded-lg bg-orange-500/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "h-5 w-5 text-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-foreground",
                                    children: t("generalSettings")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLanguageOptions,
                            className: "w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-9 w-9 rounded-lg bg-red-500/20 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "h-5 w-5 text-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-foreground",
                                            children: t("languageOptions")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: selectedLanguage
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "glass border-0 p-2 shadow-lg stagger-item",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleShareWithFriends,
                            className: "w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-9 w-9 rounded-lg bg-blue-500/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                        className: "h-5 w-5 text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-foreground",
                                    children: t("shareWithFriends")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRateUs,
                            className: "w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-9 w-9 rounded-lg bg-teal-500/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "h-5 w-5 text-teal-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-foreground",
                                    children: t("rateUs")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleFeedback,
                            className: "w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-9 w-9 rounded-lg bg-sky-500/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        className: "h-5 w-5 text-sky-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-foreground",
                                    children: t("feedback")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>signOut(),
                    variant: "destructive",
                    className: "w-full h-12 rounded-xl shadow-md",
                    children: "Sign Out"
                }, void 0, false, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-muted-foreground font-medium",
                    children: [
                        t("version"),
                        " 1.3.9"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            showSettingsModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "glass border-0 p-6 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-foreground",
                                    children: t("generalSettings")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowSettingsModal(false),
                                    className: "h-8 w-8 rounded-full hover:bg-accent/50 flex items-center justify-center transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 341,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-3 rounded-lg bg-accent/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 29
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 60
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: t("darkMode")
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                            checked: isDark,
                                            onCheckedChange: toggleDarkMode
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-3 rounded-lg bg-accent/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: t("notifications")
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                            lineNumber: 357,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                            checked: notificationsEnabled,
                                            onCheckedChange: toggleNotifications
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setShowSettingsModal(false),
                            className: "w-full mt-6 bg-primary hover:bg-primary/90",
                            children: t("done")
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 365,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                    lineNumber: 334,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                lineNumber: 333,
                columnNumber: 9
            }, this),
            showLanguageModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "glass border-0 p-6 w-full max-w-md shadow-2xl max-h-[80vh] overflow-auto animate-in zoom-in-95 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-foreground",
                                    children: t("selectLanguage")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowLanguageModal(false),
                                    className: "h-8 w-8 rounded-full hover:bg-accent/50 flex items-center justify-center transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 385,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 379,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>selectLanguage(lang),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full p-3 rounded-lg text-left transition-colors flex items-center justify-between", selectedLanguage === lang ? "bg-primary/20 text-primary font-medium" : "hover:bg-accent/50"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: lang
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                            lineNumber: 401,
                                            columnNumber: 19
                                        }, this),
                                        selectedLanguage === lang && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                            lineNumber: 402,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, lang, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 391,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 389,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                    lineNumber: 378,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                lineNumber: 377,
                columnNumber: 9
            }, this),
            showFeedbackModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "glass border-0 p-6 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-foreground",
                                    children: t("sendFeedback")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowFeedbackModal(false),
                                    className: "h-8 w-8 rounded-full hover:bg-accent/50 flex items-center justify-center transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                        lineNumber: 420,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: feedbackText,
                            onChange: (e)=>setFeedbackText(e.target.value),
                            placeholder: t("feedbackPlaceholder"),
                            className: "w-full h-32 p-3 rounded-lg bg-accent/20 border-0 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 424,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setShowFeedbackModal(false),
                                    variant: "outline",
                                    className: "flex-1",
                                    children: t("cancel")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 432,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: submitFeedback,
                                    className: "flex-1 bg-primary hover:bg-primary/90",
                                    children: t("submit")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                            lineNumber: 431,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                    lineNumber: 413,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
                lineNumber: 412,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
_s(ProfileTab, "/nociqUk5C67KvZ9nBV2uVe4bgo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ProfileTab;
var _c;
__turbopack_context__.k.register(_c, "ProfileTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/onboarding.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Onboarding",
    ()=>Onboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$add$2d$habit$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/add-habit-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Onboarding({ onComplete }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedPresets, setSelectedPresets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCustomModal, setShowCustomModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNext = ()=>{
        if (step < 2) {
            setStep(step + 1);
        } else {
            // Add selected habits
            selectedPresets.forEach((index)=>{
                const preset = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultHabits"][index];
                const newHabit = {
                    id: crypto.randomUUID(),
                    name: preset.name,
                    emoji: preset.emoji,
                    color: preset.color,
                    reminderTime: "09:00",
                    repeatDays: [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ],
                    createdAt: new Date().toISOString(),
                    archived: false
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHabit"])(newHabit);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOnboardingComplete"])();
            onComplete();
        }
    };
    const togglePreset = (index)=>{
        if (selectedPresets.includes(index)) {
            setSelectedPresets(selectedPresets.filter((i)=>i !== index));
        } else {
            setSelectedPresets([
                ...selectedPresets,
                index
            ]);
        }
    };
    const handleAddCustom = (habitData)=>{
        const newHabit = {
            id: crypto.randomUUID(),
            ...habitData,
            createdAt: new Date().toISOString(),
            archived: false
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHabit"])(newHabit);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-2 pt-12 pb-8",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-2 w-2 rounded-full transition-all", i === step ? "w-8 bg-primary" : i < step ? "bg-primary/50" : "bg-secondary")
                    }, i, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0 overflow-y-auto flex flex-col items-center justify-center px-8 py-4 text-center",
                children: [
                    step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-7xl mb-8",
                                children: "🌊"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-foreground mb-4",
                                children: "Welcome to Vybe"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground max-w-sm leading-relaxed",
                                children: "Build unbreakable habits. One vibe at a time."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-muted-foreground max-w-sm",
                                children: "Track your streaks, visualize progress, and stay motivated with daily insights from Atomic Habits."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "h-16 w-16 text-primary mb-8"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-foreground mb-4",
                                children: "Stay on Track"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground max-w-sm leading-relaxed",
                                children: "Enable notifications to get powerful “Do It Now” reminders that help you never miss a habit."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "glass border-0 mt-8 p-4 shadow-lg max-w-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-2xl",
                                            children: "💪"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-foreground",
                                                    children: "Time to Workout!"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Tap to complete • 12 day streak"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-16 w-16 text-primary mb-8"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-foreground mb-4",
                                children: "Add Your First Habits"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground max-w-sm mb-6",
                                children: "Choose from popular habits or create your own"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3 w-full max-w-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultHabits"].map((habit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>togglePreset(index),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glass rounded-xl p-4 text-left transition-all", selectedPresets.includes(index) ? "ring-2 ring-primary bg-primary/10" : "hover:bg-secondary/80"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: habit.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-foreground mt-2",
                                                children: habit.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: ()=>setShowCustomModal(true),
                                className: "mt-4 text-primary",
                                children: "+ Create custom habit"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 p-8 pb-10 bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleNext,
                    className: "w-full h-14 rounded-2xl bg-primary text-primary-foreground text-lg font-semibold shadow-xl",
                    children: step === 2 ? selectedPresets.length > 0 ? `Start with ${selectedPresets.length} habits` : "Skip for now" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Continue",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "ml-2 h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$add$2d$habit$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddHabitModal"], {
                open: showCustomModal,
                onClose: ()=>setShowCustomModal(false),
                onSave: handleAddCustom
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/habit-tracker-design/components/onboarding.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Onboarding, "2uKF4+F9HVDULbpFn2OAFtX4o60=");
_c = Onboarding;
var _c;
__turbopack_context__.k.register(_c, "Onboarding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoItNowScreen",
    ()=>DoItNowScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$fire$2d$streak$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/fire-streak.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$confetti$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/confetti.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MOTIVATIONAL_LINES = [
    "Your future self is watching. Make them proud.",
    "Small steps. Massive results.",
    "Don't break the chain. You've got this.",
    "One more day. One more win.",
    "Champions do what others won't.",
    "The only bad workout is the one that didn't happen.",
    "You're stronger than your excuses.",
    "Every rep counts. Every day matters."
];
function DoItNowScreen({ habit, streak, onComplete, onSnooze, onClose }) {
    _s();
    const [completed, setCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfetti, setShowConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const motivationalLine = MOTIVATIONAL_LINES[Math.floor(Math.random() * MOTIVATIONAL_LINES.length)];
    const handleComplete = ()=>{
        setShowConfetti(true);
        setCompleted(true);
        setTimeout(()=>{
            onComplete();
        }, 1500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$confetti$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Confetti"], {
                trigger: showConfetti
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-6 right-6 p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center text-center px-8 max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-8xl mb-6 animate-bounce",
                        style: {
                            animationDuration: "2s"
                        },
                        children: habit.emoji
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-foreground mb-4 text-balance",
                        children: habit.name
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$fire$2d$streak$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FireStreak"], {
                                streak: streak,
                                size: "xl",
                                animate: true
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            streak > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground mt-2",
                                children: streak === 1 ? "day streak" : `day streak`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-muted-foreground mb-12 text-balance leading-relaxed",
                        children: motivationalLine
                    }, void 0, false, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    !completed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleComplete,
                                className: "h-16 rounded-2xl bg-success text-success-foreground text-xl font-bold shadow-xl hover:bg-success/90 transition-all hover:scale-105",
                                children: "I DID IT! ✓"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onSnooze,
                                variant: "ghost",
                                className: "h-12 rounded-xl text-muted-foreground hover:text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    "Snooze 10 min"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center animate-in zoom-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-6xl mb-4",
                                children: "🎉"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-success",
                                children: "Amazing!"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-2",
                                children: "Keep the momentum going!"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(DoItNowScreen, "z5XZEIf9iB7MsNoQ5URh0g2Sk+M=");
_c = DoItNowScreen;
var _c;
__turbopack_context__.k.register(_c, "DoItNowScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/splash-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SplashScreen",
    ()=>SplashScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SplashScreen({ onFinish }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashScreen.useEffect": ()=>{
            const timer = setTimeout({
                "SplashScreen.useEffect.timer": ()=>{
                    setIsVisible(false);
                    setTimeout(onFinish, 500); // Wait for exit animation
                }
            }["SplashScreen.useEffect.timer"], 2000) // Show splash for 2 seconds
            ;
            return ({
                "SplashScreen.useEffect": ()=>clearTimeout(timer)
            })["SplashScreen.useEffect"];
        }
    }["SplashScreen.useEffect"], [
        onFinish
    ]);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                scale: 0.5,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            transition: {
                duration: 0.5,
                ease: "easeOut"
            },
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-4",
                    children: "🌊"
                }, void 0, false, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/splash-screen.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold tracking-tighter text-foreground",
                    children: [
                        "AURO",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary",
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/splash-screen.tsx",
                            lineNumber: 34,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/splash-screen.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground mt-2 tracking-widest text-xs uppercase",
                    children: "Build Unbreakable Habits"
                }, void 0, false, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/splash-screen.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/habit-tracker-design/components/splash-screen.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/splash-screen.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_s(SplashScreen, "m22S9IQwDfEe/fCJY7LYj8YPDMo=");
_c = SplashScreen;
var _c;
__turbopack_context__.k.register(_c, "SplashScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/login-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginScreen",
    ()=>LoginScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chrome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chrome$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/lucide-react/dist/esm/icons/chrome.js [app-client] (ecmascript) <export default as Chrome>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LoginScreen() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleGoogleLogin = async ()=>{
        try {
            setIsLoading(true);
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error("Error logging in with Google:", error);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center p-6 bg-background animate-in fade-in duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm space-y-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-6",
                            children: "🌊"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold tracking-tight",
                            children: "Welcome Back"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Sign in to continue your journey"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "w-full h-12 text-base font-medium relative",
                            onClick: handleGoogleLogin,
                            disabled: isLoading,
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
                                lineNumber: 45,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chrome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chrome$3e$__["Chrome"], {
                                        className: "mr-2 h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
                                        lineNumber: 48,
                                        columnNumber: 33
                                    }, this),
                                    "Continue with Google"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground px-8",
                            children: [
                                "By clicking continue, you agree to our",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "underline underline-offset-4 hover:text-primary",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this),
                                " ",
                                "and",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "underline underline-offset-4 hover:text-primary",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
            lineNumber: 30,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/login-screen.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
_s(LoginScreen, "EmvgwIb3cHpoFpeP+WmEDbjx4y4=");
_c = LoginScreen;
var _c;
__turbopack_context__.k.register(_c, "LoginScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VybeApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/bottom-nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$tabs$2f$home$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/tabs/home-tab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$tabs$2f$calendar$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/tabs/calendar-tab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$tabs$2f$vybes$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/tabs/vybes-tab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$tabs$2f$profile$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/tabs/profile-tab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$onboarding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/onboarding.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$do$2d$it$2d$now$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/do-it-now-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$splash$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/splash-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$login$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/components/login-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function VybeApp() {
    _s();
    const [showSplash, setShowSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authChecked, setAuthChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showOnboarding, setShowOnboarding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [doItNowHabit, setDoItNowHabit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VybeApp.useEffect": ()=>{
            // Check active session
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then({
                "VybeApp.useEffect": ({ data: { session } })=>{
                    setSession(session);
                    setAuthChecked(true);
                }
            }["VybeApp.useEffect"]);
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "VybeApp.useEffect": (_event, session)=>{
                    setSession(session);
                }
            }["VybeApp.useEffect"]);
            return ({
                "VybeApp.useEffect": ()=>subscription.unsubscribe()
            })["VybeApp.useEffect"];
        }
    }["VybeApp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VybeApp.useEffect": ()=>{
            if (authChecked && !showSplash && session) {
                // Check onboarding status only after auth is confirmed and splash is done
                const onboardingComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOnboardingComplete"])();
                setShowOnboarding(!onboardingComplete);
            }
        }
    }["VybeApp.useEffect"], [
        authChecked,
        showSplash,
        session
    ]);
    const handleSplashFinish = ()=>{
        setShowSplash(false);
    };
    const handleDoItNowComplete = ()=>{
        if (doItNowHabit) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleCompletion"])(doItNowHabit.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(new Date()));
            setDoItNowHabit(null);
        }
    };
    const handleDoItNowSnooze = ()=>{
        // In a real app, this would schedule a reminder for 10 minutes later
        setDoItNowHabit(null);
    };
    if (showSplash) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$splash$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplashScreen"], {
            onFinish: handleSplashFinish
        }, void 0, false, {
            fileName: "[project]/Downloads/habit-tracker-design/app/page.tsx",
            lineNumber: 71,
            columnNumber: 12
        }, this);
    }
    if (!authChecked) {
        return null // Or a loading spinner, but splash covers this usually
        ;
    }
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$login$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginScreen"], {}, void 0, false, {
            fileName: "[project]/Downloads/habit-tracker-design/app/page.tsx",
            lineNumber: 79,
            columnNumber: 12
        }, this);
    }
    if (showOnboarding) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$onboarding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Onboarding"], {
            onComplete: ()=>setShowOnboarding(false)
        }, void 0, false, {
            fileName: "[project]/Downloads/habit-tracker-design/app/page.tsx",
            lineNumber: 83,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        children: [
            doItNowHabit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$do$2d$it$2d$now$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoItNowScreen"], {
                habit: doItNowHabit,
                streak: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStreak"])(doItNowHabit.id),
                onComplete: handleDoItNowComplete,
                onSnooze: handleDoItNowSnooze,
                onClose: ()=>setDoItNowHabit(null)
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/app/page.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto",
                children: [
                    activeTab === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$tabs$2f$home$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeTab"], {}, "home", false, {
                        fileName: "[project]/Downloads/habit-tracker-design/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 34
                    }, this),
                    activeTab === "calendar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$tabs$2f$calendar$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarTab"], {}, "calendar", false, {
                        fileName: "[project]/Downloads/habit-tracker-design/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 38
                    }, this),
                    activeTab === "vybes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$tabs$2f$vybes$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VybesTab"], {}, "vybes", false, {
                        fileName: "[project]/Downloads/habit-tracker-design/app/page.tsx",
                        lineNumber: 103,
                        columnNumber: 35
                    }, this),
                    activeTab === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$tabs$2f$profile$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileTab"], {}, "profile", false, {
                        fileName: "[project]/Downloads/habit-tracker-design/app/page.tsx",
                        lineNumber: 104,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/habit-tracker-design/app/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomNav"], {
                activeTab: activeTab,
                onTabChange: setActiveTab
            }, void 0, false, {
                fileName: "[project]/Downloads/habit-tracker-design/app/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/habit-tracker-design/app/page.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(VybeApp, "FEBrLhXQEyeQ0ob+qM2j0ZRavw0=");
_c = VybeApp;
var _c;
__turbopack_context__.k.register(_c, "VybeApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_habit-tracker-design_57357c57._.js.map