// Thèmes et questions
const themes = [
    {
        name: "Lutte contre la désinformation",
        knowledge: {
            intro: `La désinformation est la diffusion délibérée de fausses informations avec l’intention de tromper. 
            Contrairement à la mésinformation, qui est une diffusion involontaire d'informations inexactes, la désinformation est 
            intentionnellement fabriquée pour manipuler l'opinion publique, influencer des décisions politiques, ou déstabiliser des communautés. 
            Avec l'essor des réseaux sociaux et la rapidité de diffusion des informations sur internet, la lutte contre la désinformation est devenue un enjeu majeur.`,
            sections: [
                {
                    title: "I. Pourquoi la Désinformation est-elle un Problème ?",
                    content: [
                        { subTitle: "Impact sur les Opinions et les Décisions", text: "La désinformation peut influencer des élections, changer les perceptions des individus sur des faits scientifiques (comme la vaccination), ou semer la méfiance envers des institutions." },
                        { subTitle: "Division Sociale", text: "Les fausses informations créent des clivages au sein de la société, renforçant les préjugés et exacerbant les tensions sociales." },
                        { subTitle: "Manipulation des Comportements", text: "Certaines fake news sont conçues pour orienter les comportements, comme la promotion de produits dangereux ou des théories conspirationnistes." },
                        { subTitle: "Érosion de la Confiance dans les Médias", text: "Lorsque des informations fausses sont perçues comme vraies, elles minent la confiance du public dans les sources d’informations fiables." }
                    ]
                },
                {
                    title: "II. Comment Identifier des Fake News ?",
                    content: [
                        { subTitle: "Source d’Information", text: "Vérifier la source : Est-ce que l'information provient d'une source fiable ? Un média reconnu ou un site web douteux ? Les faux sites imitent souvent les vrais en changeant une lettre ou deux dans l’URL." },
                        { subTitle: "Titre Sensationnaliste", text: "Clickbait (piège à clics) : Les titres exagérés ou sensationnalistes, souvent en majuscules, sont conçus pour attirer les clics." },
                        { subTitle: "Absence de Citations ou de Sources", text: "Une information crédible inclut des sources vérifiables. Si l'article ne cite aucune étude ou ne fournit aucune preuve concrète, cela peut indiquer une manipulation." },
                        { subTitle: "Auteur Inconnu ou Non Fiable", text: "Recherchez l'auteur de l'article. Est-il un journaliste crédible ou quelqu'un sans qualifications claires dans le domaine ?" },
                        { subTitle: "Biais Évident", text: "Si l'article semble fortement orienté vers un certain point de vue, sans présenter de perspectives équilibrées, il pourrait s'agir de propagande ou de désinformation." },
                        { subTitle: "Date de Publication", text: "Vérifiez toujours la date de publication. Parfois, une nouvelle ancienne est partagée comme si elle était actuelle." },
                        { subTitle: "Photos et Vidéos Trompeuses", text: "Les images peuvent être sorties de leur contexte ou manipulées. Utilisez des outils comme Google Images ou TinEye pour rechercher l’origine d’une image." },
                        { subTitle: "Appel à l’Émotion", text: "Les fake news jouent souvent sur les émotions comme la peur, la colère, ou la tristesse pour pousser les gens à réagir sans réflexion." }
                    ]
                },
                {
                    title: "III. Outils pour Vérifier les Informations",
                    content: [
                        { subTitle: "Moteurs de recherche inversés pour les images", text: "Google Images, TinEye." },
                        { subTitle: "Sites de fact-checking", text: "Snopes, FactCheck.org, Les Décodeurs, AFP Factuel, HoaxBuster." },
                        { subTitle: "Outils d'analyse vidéo", text: "Des sites spécialisés permettent d’analyser l’authenticité des vidéos en recherchant des éléments de manipulation ou de montage." },
                        { subTitle: "Extensions de navigateur", text: "Certaines extensions comme NewsGuard ou Trusted News aident à évaluer la fiabilité des sites web." }
                    ]
                },
                {
                    title: "IV. Techniques Utilisées dans la Désinformation",
                    content: [
                        { subTitle: "La fabrication complète", text: "Diffuser de fausses histoires créées de toutes pièces." },
                        { subTitle: "Le faux contexte", text: "Présenter une information vraie, mais dans un contexte qui en déforme la signification." },
                        { subTitle: "Le cherry-picking", text: "Sélectionner certains éléments d'une réalité complexe pour faire croire à une conclusion erronée." },
                        { subTitle: "Le deepfake", text: "Utiliser des technologies de modification vidéo pour faire dire ou faire faire à des personnalités des choses qu’elles n’ont pas faites." },
                        { subTitle: "Les rumeurs virales", text: "Propager une rumeur non vérifiée, mais qui circule rapidement car elle paraît plausible ou est partagée par des groupes influents." }
                    ]
                },
                {
                    title: "V. L’Éducation aux Médias : Un Rempart Contre la Désinformation",
                    content: [
                        { subTitle: "Sensibilisation dès l'école", text: "Enseigner aux élèves comment analyser les sources, vérifier les informations et développer une attitude sceptique face aux informations non vérifiées." },
                        { subTitle: "Formation continue", text: "Proposer des ateliers pour les adultes sur la manière de naviguer dans le paysage médiatique moderne, y compris la reconnaissance des fake news." },
                        { subTitle: "Encourager le scepticisme", text: "Apprendre aux gens à poser des questions critiques avant de croire ou de partager des informations." },
                        { subTitle: "Responsabilité collective", text: "Nous devons tous être vigilants face à la désinformation. Avant de partager des informations, il est important de vérifier leur exactitude." }
                    ]
                },
                {
                    title: "Conclusion : Le Rôle de Chaque Citoyen",
                    content: [
                        { text: "La lutte contre la désinformation est une responsabilité partagée. Chaque citoyen doit apprendre à identifier, vérifier et signaler les fake news pour freiner leur propagation.     Ce cours doit permettre de sensibiliser aux dangers des fausses informations et à la manière de les identifier, tout en encourageant une approche critique et vigilante dans le traitement de l'information." }
                    ]
                },
                {
                    title: "Exercice Pratique",
                    content: [
                        { subTitle: "", text: "Demandez aux participants de vérifier une actualité ou une image virale à l'aide des outils présentés. Cela renforcera leur capacité à reconnaître et à contrer la désinformation." }
                    ]
                }
            ]

        },
        questions: [
            {
                question: "Qu'est-ce que la désinformation ?",
                options: ["Diffuser des informations fausses", "Rendre des informations secrètes", "Partager des informations vérifiées"],
                answer: "Diffuser des informations fausses"
            },
            {
                question: "Quel est un exemple de désinformation ?",
                options: ["Un article scientifique validé", "Une rumeur non fondée", "Une statistique officielle"],
                answer: "Une rumeur non fondée"
            },
            {
                question: "Pourquoi les fausses informations se propagent-elles rapidement sur les réseaux sociaux ?",
                options: ["Les utilisateurs partagent souvent les informations sans vérifier", "Les informations fausses sont moins coûteuses à produire", "Les informations officielles sont relayées par les utilisateurs"],
                answer: "Les utilisateurs partagent souvent les informations sans vérifier"
            },
            {
                question: "Quel rôle jouent les algorithmes des réseaux sociaux dans la propagation de la désinformation ?",
                options: ["Les utilisateurs partagent souvent les informations sans vérifier", "Ils favorisent les contenus qui suscitent des émotions fortes, comme la peur ou la colère", "Ils suppriment automatiquement les fausses informations"],
                answer: "Les utilisateurs partagent souvent les informations sans vérifier"
            },
            {
                question: "Quel est un exemple de campagne de désinformation récente ?",
                options: ["La campagne de sensibilisation à la protection de l'environnement", "La lutte contre la cybercriminalité", "Les fausses informations sur les élections américaines de 2020"],
                answer: "Les fausses informations sur les élections américaines de 2020"
            },
        ]
    },
    {
        name: "Modération des contenus en ligne",
        knowledge: {
            intro: `La modération des contenus en ligne consiste à surveiller, évaluer, et, si nécessaire, supprimer ou signaler des publications inappropriées sur des plateformes telles que les réseaux sociaux, les forums, ou les sites web de partage de contenu. L’objectif est de garantir que ces plateformes restent sûres, respectueuses et conformes aux règles en vigueur.`,
            sections: [
                {
                    title: "I. Catégories de Contenus Indésirables",
                    content: [
                        { subTitle: "Discours haineux", text: "Insultes, menaces, ou propos racistes, sexistes, homophobes, etc." },
                        { subTitle: "Harcèlement", text: "Messages répétitifs et offensants visant une personne spécifique." },
                        { subTitle: "Spam", text: "Contenu non pertinent ou publicitaire, souvent automatisé." },
                        { subTitle: "Contenu explicite", text: "Publications comportant de la nudité, des scènes violentes ou pornographiques." },
                        { subTitle: "Mésinformation ou fausses nouvelles", text: "Diffusion d'informations inexactes ou trompeuses." },
                        { subTitle: "Violations des droits d’auteur", text: "Publication de contenu protégé sans autorisation." }
                    ]
                },
                {
                    title: "II. Identification des Contenus Problématiques",
                    content: [
                        { subTitle: "Filtres automatiques", text: "Les algorithmes détectent automatiquement certains termes ou images problématiques." },
                        { subTitle: "Signaux des utilisateurs", text: "Les utilisateurs peuvent signaler du contenu qu'ils estiment inapproprié." },
                        { subTitle: "Surveillance humaine", text: "Les modérateurs passent en revue les rapports et détectent manuellement des contenus qui échappent aux filtres." }
                    ]
                },
                {
                    title: "III. Le Processus de Signalement",
                    content: [
                        { subTitle: "Analyser le contexte", text: "Avant de signaler, vérifiez le contexte du message pour éviter les erreurs. Ce qui pourrait paraître offensant à première vue pourrait ne pas enfreindre les règles." },
                        { subTitle: "Choisir la bonne catégorie", text: "Lorsque vous signalez un contenu, la plateforme vous propose souvent des options. Sélectionnez la catégorie appropriée (violence, harcèlement, etc.) pour une gestion rapide et précise." },
                        { subTitle: "Fournir des informations supplémentaires", text: "Si nécessaire, donnez des détails contextuels ou des captures d'écran pour aider les modérateurs à mieux comprendre le problème." }
                    ]
                },
                {
                    title: "IV. Bonnes Pratiques pour la Modération",
                    content: [
                        { subTitle: "Impartialité", text: "Ne laissez pas vos opinions personnelles influencer vos décisions de modération." },
                        { subTitle: "Consistance", text: "Appliquez les mêmes règles de manière égale à tous les utilisateurs, sans favoritisme." },
                        { subTitle: "Communication avec les utilisateurs", text: "Informez les utilisateurs de la raison pour laquelle leur contenu a été modéré. Cela aide à maintenir la transparence et la confiance." }
                    ]
                },
                {
                    title: "V. Outils de Modération",
                    content: [
                        { subTitle: "Filtres de mots-clés", text: "Ils permettent de bloquer ou de marquer des messages contenant des mots ou des expressions spécifiques." },
                        { subTitle: "Systèmes de signalement automatisé", text: "Les utilisateurs peuvent signaler du contenu via des boutons prévus à cet effet, ce qui alerte les modérateurs." },
                        { subTitle: "Systèmes d’apprentissage automatique (IA)", text: "Ces systèmes aident à détecter les comportements suspects (par exemple, des robots qui publient des spams)." }
                    ]
                },
                {
                    title: "VI. Défis de la Modération",
                    content: [
                        { subTitle: "Évolution des contenus", text: "Les utilisateurs trouvent constamment de nouvelles façons de contourner les règles." },
                        { subTitle: "Ambiguïté des contenus", text: "Certains contenus sont difficiles à catégoriser, ce qui rend leur modération complexe." },
                        { subTitle: "Modération en masse", text: "Pour les grandes plateformes, la quantité de contenu à examiner peut être gigantesque, nécessitant l’usage de systèmes automatisés." }
                    ]
                },
                {
                    title: "VII. Conséquences de la Mauvaise Modération",
                    content: [
                        { subTitle: "Censure injustifiée", text: "Réduction de la liberté d'expression." },
                        { subTitle: "Biais algorithmique", text: "Les systèmes automatisés peuvent cibler certains groupes de manière disproportionnée." },
                        { subTitle: "Perte de confiance des utilisateurs", text: "Si les utilisateurs sentent que le processus n'est pas juste ou transparent, ils peuvent abandonner la plateforme." }
                    ]
                },
                {
                    title: "Conclusion",
                    content: [
                        { subTitle: "", text: "La modération des contenus en ligne est un exercice délicat d’équilibre entre la protection des utilisateurs et la garantie de la liberté d’expression. Elle nécessite une combinaison de surveillance humaine et d’outils automatisés pour être efficace." }
                    ]
                }
            ]
        },

        questions: [
            {
                question: "Qu'est-ce que la modération des contenus ?",
                options: ["Surveiller et contrôler les publications", "Ignorer les publications", "Encourager les publications nocives"],
                answer: "Surveiller et contrôler les publications"
            },
            {
                question: "Parmi ces choix, lequel représente un exemple de contenu explicite pouvant nécessiter une modération ?",
                options: ["Une vidéo de violence graphique", "Une publicité pour un produit de beauté","Une infographie sur le climat"],
                answer: "Une vidéo de violence graphique"
            },
            {
                question: "Que devez-vous faire si vous voyez du contenu abusif sur un réseau social ?",
                options: ["Signaler le contenu au modérateur de la plateforme", "Liker le post pour attirer plus d’attention","Partager le post avec vos amis pour qu’ils le voient aussi"],
                answer: "Signaler le contenu au modérateur de la plateforme"
            },
            {
                question: "Qu’est-ce qu’un contenu modéré de manière proactive ?",
                options: ["Un contenu vérifié après qu'il a été signalé", "Un contenu filtré par des algorithmes avant sa publication","Un contenu approuvé par des influenceurs"],
                answer: "Un contenu filtré par des algorithmes avant sa publication"
            },
            {
                question: "Les modérateurs humains sont toujours nécessaires parce que :",
                options: ["Les algorithmes peuvent se tromper dans l'identification des nuances", "Ils sont payés pour faire ce travail","Ils peuvent bloquer tous les contenus"],
                answer: "Les algorithmes peuvent se tromper dans l'identification des nuances"
            },
            {
                question: "Lequel de ces comportements devrait être signalé comme contenu abusif ?",
                options: ["Une critique honnête et respectueuse", "Des insultes à l’égard d’un groupe de personnes","Une annonce d'un produit commercial"],
                answer: "Des insultes à l’égard d’un groupe de personnes"
            },
            {
                question: "Quand un utilisateur est banni d'une plateforme, cela signifie généralement :",
                options: ["Il ne peut plus publier pendant un certain temps", "Il ne peut plus accéder à la plateforme définitivement ou temporairement","Ses publications sont mises en avant"],
                answer: "Il ne peut plus accéder à la plateforme définitivement ou temporairement"
            },
            {
                question: "Quel est l’un des principaux défis de la modération de contenu en ligne dans plusieurs pays ?",
                options: ["Les différences culturelles et les lois locales", "La vitesse de la connexion Internet","Le manque de modérateurs humains"],
                answer: "Les différences culturelles et les lois locales"
            },
            {
                question: "Quelles données sont importantes à conserver lorsque vous signalez un contenu abusif ?",
                options: ["Le nom du harceleur", "Des captures d’écran du contenu","Votre opinion sur la situation"],
                answer: "Des captures d’écran du contenu"
            },
        ]
    },
    {
        name: "Protection de la vie privée",
        knowledge: {
            intro: `La protection de la vie privée et des données personnelles est essentielle dans un monde de plus en plus numérique. Chaque interaction en ligne peut laisser des traces de données, comme des informations personnelles, qui peuvent être exploitées à des fins malveillantes si elles ne sont pas protégées correctement.`,
            sections: [
                {
                    title: "Introduction à la Protection de la Vie Privée",
                    content: [
                        { subTitle: "", text: "La protection de la vie privée et des données personnelles est essentielle dans un monde de plus en plus numérique. Chaque interaction en ligne peut laisser des traces de données, comme des informations personnelles, qui peuvent être exploitées à des fins malveillantes si elles ne sont pas protégées correctement." }
                    ]
                },
                {
                    title: "II. Qu’est-ce qu’une Donnée Personnelle ?",
                    content: [
                        { subTitle: "", text: "Les données personnelles sont des informations permettant d'identifier directement ou indirectement une personne. Voici quelques exemples courants :" },
                        { subTitle: "Exemples de données personnelles", text: "Nom, prénom, Adresse (email, domicile), Numéro de téléphone, Informations bancaires, Adresse IP, Données de localisation, Données biométriques (empreintes, reconnaissance faciale)" },
                        { subTitle: "", text: "Ces informations sont sensibles et doivent être protégées pour éviter les risques de fraude, de vol d’identité ou d’usurpation." }
                    ]
                },
                {
                    title: "III. Principes de Protection des Données Personnelles",
                    content: [
                        { subTitle: "Minimisation des données", text: "Ne partagez que les informations absolument nécessaires. Par exemple, pour s’inscrire à un service, ne renseignez que les champs obligatoires." },
                        { subTitle: "Confidentialité", text: "Ne partagez pas publiquement des informations sensibles comme vos coordonnées personnelles ou celles des autres." },
                        { subTitle: "Transparence", text: "Lorsque vous collectez ou partagez des informations, assurez-vous d’avoir l’accord explicite des personnes concernées, et informez-les de la façon dont ces données seront utilisées." }
                    ]
                },
                {
                    title: "IV. Comment Protéger Sa Vie Privée en Ligne",
                    content: [
                        { subTitle: "Utiliser des mots de passe sécurisés", text: "Un mot de passe doit être long, complexe, et unique pour chaque compte. Utilisez des gestionnaires de mots de passe pour créer et stocker vos identifiants en toute sécurité." },
                        { subTitle: "Activer l’authentification à deux facteurs (2FA)", text: "Cette méthode ajoute une couche de sécurité supplémentaire en demandant une vérification supplémentaire, souvent sous forme de code envoyé sur votre téléphone." },
                        { subTitle: "Vérifier les paramètres de confidentialité", text: "Sur les réseaux sociaux et les autres plateformes, ajustez les paramètres de confidentialité pour limiter qui peut voir vos informations. Par exemple, limitez la visibilité de vos posts aux amis seulement." },
                        { subTitle: "Se méfier des liens et des emails suspects", text: "Évitez de cliquer sur des liens douteux, surtout ceux envoyés par des expéditeurs inconnus. Ils peuvent conduire à du phishing (hameçonnage) ou télécharger des logiciels malveillants." },
                        { subTitle: "Limiter le suivi en ligne", text: "Utilisez des extensions de navigateur qui bloquent les traceurs et publicités qui suivent votre activité en ligne." }
                    ]
                },
                {
                    title: "V. Ne Pas Partager les Données Personnelles des Autres",
                    content: [
                        { subTitle: "", text: "En plus de protéger vos propres informations, il est important de ne pas partager les données personnelles des autres sans leur consentement. Cela peut inclure :" },
                        { subTitle: "Exemples de partage", text: "Ne pas partager des photos de personnes sans leur permission. Ne pas divulguer les coordonnées ou l’adresse email d’une autre personne sans qu’elle ne soit d’accord. Éviter de publier des informations confidentielles concernant des collègues, amis ou proches sur les réseaux sociaux ou en ligne." }
                    ]
                },
                {
                    title: "VI. Risques Associés au Partage Excessif d’Informations",
                    content: [
                        { subTitle: "Vol d’identité", text: "Les cybercriminels peuvent utiliser des informations personnelles pour usurper votre identité et effectuer des fraudes." },
                        { subTitle: "Harponnage (Phishing)", text: "Des attaques où des pirates se font passer pour une entité de confiance pour collecter des informations sensibles." },
                        { subTitle: "Usurpation des comptes", text: "Si des données sensibles comme des mots de passe ou des questions de sécurité sont partagées, cela permet à des tiers d’accéder à vos comptes." }
                    ]
                },
                {
                    title: ". Législation sur la Protection des Données",
                    content: [
                        { subTitle: "RGPD (Règlement Général sur la Protection des Données)", text: "Il impose aux entreprises de respecter la vie privée des citoyens et de garantir un certain nombre de droits, comme l’accès, la rectification, et la suppression des données personnelles." },
                        { subTitle: "CCPA (California Consumer Privacy Act)", text: "Donne aux consommateurs des droits similaires sur leurs données. Les entreprises doivent obtenir le consentement explicite pour collecter des données personnelles et permettre aux utilisateurs de les modifier ou de les supprimer à tout moment." }
                    ]
                },
                {
                    title: "VIII. Les Outils pour Protéger Sa Vie Privée",
                    content: [
                        { subTitle: "VPN (Virtual Private Network)", text: "Il masque votre adresse IP et chiffre votre trafic internet pour rendre votre activité en ligne plus privée." },
                        { subTitle: "Antivirus et anti-malware", text: "Protégez votre appareil contre les logiciels malveillants qui peuvent voler vos données." },
                        { subTitle: "Chiffrement des données", text: "Utilisez des applications et services qui chiffrent vos communications (comme Signal ou WhatsApp) pour garantir que vos messages ne peuvent être lus que par vous et votre destinataire." }
                    ]
                },
                {
                    title: "IX. Conseils pour Utiliser les Réseaux Sociaux",
                    content: [
                        { subTitle: "Éviter de partager trop d’informations personnelles", text: "Les dates de naissance, adresses, numéros de téléphone peuvent être utilisées pour deviner des mots de passe ou des questions de sécurité." },
                        { subTitle: "Réfléchir avant de publier", text: "Une publication est souvent publique par défaut. Vérifiez qui peut voir vos posts et ajustez la visibilité si nécessaire." },
                        { subTitle: "Supprimer les anciennes publications", text: "Si vous avez partagé des informations sensibles dans le passé, songez à les supprimer pour éviter qu’elles ne soient récupérées." }
                    ]
                },
                {
                    title: "Conclusion",
                    content: [
                        { subTitle: "", text: "La protection de la vie privée et des données personnelles demande une vigilance constante dans vos interactions en ligne. Appliquer des pratiques de sécurité simples comme l’utilisation de mots de passe complexes, l’activation de l’authentification à deux facteurs, et la gestion proactive de vos paramètres de confidentialité vous permettra de mieux protéger votre identité et vos informations." }
                    ]
                }
            ]
        },
        questions: [
            {
                question: "Quelle est une bonne pratique pour protéger sa vie privée en ligne ?",
                options: ["Utiliser un mot de passe court mais facile à retenir", "Partager son numéro de téléphone uniquement avec ses amis proches", "Utiliser des mots de passe forts et uniques pour chaque compte"],
                answer: "Utiliser des mots de passe forts et uniques pour chaque compte"
            },
            {
                question: "Lequel de ces principes est essentiel pour protéger les données personnelles ?",
                options: ["Partager les données avec n’importe quelle entreprise qui en fait la demande", "Minimiser les données collectées et partagées", "Collecter le plus de données possible"],
                answer: "Minimiser les données collectées et partagées"
            },
            {
                question: "L’authentification à deux facteurs (2FA) permet de :",
                options: ["Ajouter une couche de sécurité supplémentaire pour protéger les comptes", "Permettre à deux personnes de se connecter en même temps", "Partager facilement des informations privées"],
                answer: "Ajouter une couche de sécurité supplémentaire pour protéger les comptes"
            },
            {
                question: "Les extensions de navigateur qui bloquent les traceurs sont utiles pour limiter le suivi de votre activité en ligne.",
                options: ["Vrai","Faux"],
                answer: "Vrai"
            },
            {
                question: "En quoi consiste le droit à l’oubli, tel qu’établi par le RGPD ?",
                options: ["Le droit de demander la suppression de données personnelles en ligne","L'obligation de sauvegarder toutes les données personnelles","Le droit de collecter librement des informations sans consentement"],
                answer: "Le droit de demander la suppression de données personnelles en ligne"
            },
            {
                question: "Quelle est une conséquence possible du partage non sécurisé d’informations personnelles en ligne ?",
                options: ["Augmentation de la visibilité de vos posts","Vol d’identité","Réduction de la publicité ciblée"],
                answer: "Vol d’identité"
            },
            {
                question: "Le droit à la portabilité des données, selon le RGPD, signifie :",
                options: ["Le droit de transférer ses données d’une plateforme à une autre","Le droit de vendre ses données à une autre entreprise","Le droit de protéger ses données contre le vol"],
                answer: "Le droit de transférer ses données d’une plateforme à une autre"
            },

        ]
    },
    {
        name: "Lutte contre le cyberharcèlement",
        knowledge: {
            intro: `Le cyberharcèlement désigne toute forme de harcèlement se produisant sur les plateformes numériques : réseaux sociaux, messageries, forums ou autres espaces en ligne. Il peut inclure des insultes, des menaces, du harcèlement de groupe, la diffusion d’informations personnelles ou la propagation de rumeurs. Le cyberharcèlement est dangereux car il peut atteindre la victime à tout moment, où qu’elle soit, et est souvent aggravé par la diffusion rapide des contenus en ligne.`,
            sections: [
                {
                    title: "I. introduction au Cyberharcèlement",
                    content: [
                        { subTitle: "", text: "Le cyberharcèlement désigne toute forme de harcèlement se produisant sur les plateformes numériques : réseaux sociaux, messageries, forums ou autres espaces en ligne. Il peut inclure des insultes, des menaces, du harcèlement de groupe, la diffusion d’informations personnelles ou la propagation de rumeurs. Le cyberharcèlement est dangereux car il peut atteindre la victime à tout moment, où qu’elle soit, et est souvent aggravé par la diffusion rapide des contenus en ligne." }
                    ]
                },
                {
                    title: "II. Formes de Cyberharcèlement",
                    content: [
                        { subTitle: "", text: "Voici quelques formes courantes de cyberharcèlement :" },
                        { subTitle: "Insultes et menaces", text: "Messages malveillants envoyés directement ou publiés en ligne." },
                        { subTitle: "Harcèlement répété", text: "Attaques continues, souvent sur plusieurs plateformes, visant une personne." },
                        { subTitle: "Diffamation et rumeurs", text: "Propagation de fausses informations pour nuire à la réputation d’une personne." },
                        { subTitle: "Usurpation d’identité", text: "Créer un faux profil au nom de la victime pour la ridiculiser ou lui nuire." },
                        { subTitle: "Doxing", text: "Partage public d’informations personnelles (adresse, numéro de téléphone) pour harceler quelqu’un." },
                        { subTitle: "Revenge porn", text: "Diffusion de photos ou vidéos à caractère intime sans le consentement de la personne concernée." }
                    ]
                },
                {
                    title: "III. Comment Se Défendre Contre le Cyberharcèlement",
                    content: [
                        { subTitle: "Ne pas répondre", text: "Ne pas alimenter le conflit en répondant aux messages. Cela peut empirer la situation en incitant le harceleur à continuer." },
                        { subTitle: "Bloquer l’harceleur", text: "Utilisez les fonctionnalités de blocage disponibles sur les réseaux sociaux ou dans les messageries pour empêcher la personne de vous contacter." },
                        { subTitle: "Signaler le comportement", text: "Toutes les plateformes de réseaux sociaux et de messagerie offrent des options pour signaler des contenus inappropriés. Signalez immédiatement les messages, photos ou vidéos qui vous harcèlent." },
                        { subTitle: "Garder des preuves", text: "Conservez des captures d’écran ou des enregistrements de tous les messages harcelants. Cela vous sera utile si vous devez prendre des mesures légales ou en informer des autorités." },
                        { subTitle: "Renforcer la sécurité de ses comptes", text: "Changez les mots de passe de vos comptes et activez l’authentification à deux facteurs pour éviter que le harceleur n’y accède ou ne les pirate." }
                    ]
                },
                {
                    title: "IV. Comment Éviter le Cyberharcèlement",
                    content: [
                        { subTitle: "Limiter les informations personnelles", text: "Évitez de publier en ligne des informations sensibles comme votre adresse, numéro de téléphone ou lieu de travail. Les cyberharceleurs utilisent souvent ces données pour vous atteindre." },
                        { subTitle: "Vérifier la confidentialité de vos profils", text: "Assurez-vous que vos profils de réseaux sociaux sont configurés pour que seuls vos amis ou abonnés approuvés puissent voir vos publications. Modifiez les paramètres de confidentialité pour limiter l’accès à votre contenu." },
                        { subTitle: "Surveiller les interactions", text: "Soyez vigilant aux commentaires ou interactions inhabituelles et n’hésitez pas à bloquer ou signaler des comportements suspects dès les premiers signes." },
                        { subTitle: "Éviter de répondre aux provocations", text: "Si quelqu’un tente de vous provoquer en ligne, il est souvent préférable d’ignorer le commentaire ou de le signaler plutôt que de répondre." }
                    ]
                },
                {
                    title: "V. Agir Lorsque l’on Est Témoin de Cyberharcèlement",
                    content: [
                        { subTitle: "Signaler le comportement", text: "Vous pouvez signaler le contenu harcelant même si vous n’êtes pas directement impliqué. De nombreuses plateformes permettent de signaler des messages abusifs en tant que tiers." },
                        { subTitle: "Soutenir la victime", text: "Envoyez un message de soutien à la victime pour lui faire savoir qu’elle n’est pas seule. Le cyberharcèlement peut être très isolant, et montrer que l’on est là pour écouter et aider est essentiel." },
                        { subTitle: "Ne pas encourager le harcèlement", text: "Ne partagez pas, ne commentez pas, et n’aimez pas les messages qui visent à harceler ou humilier une personne." },
                        { subTitle: "Alerter les autorités si nécessaire", text: "Si le harcèlement inclut des menaces graves, comme des menaces de violence physique, il est important d’alerter les autorités compétentes (police, association de lutte contre le harcèlement)." }
                    ]
                },
                {
                    title: "VI. Recours Légaux Contre le Cyberharcèlement",
                    content: [
                        { subTitle: "Porter plainte", text: "Si le harcèlement devient grave ou inclut des menaces physiques, vous pouvez porter plainte auprès des autorités locales. Ayez à disposition toutes les preuves collectées (captures d’écran, échanges)." },
                        { subTitle: "Droit à l’oubli", text: "En Europe, grâce au RGPD, vous pouvez demander la suppression de certaines informations vous concernant si elles nuisent à votre réputation ou sont publiées sans votre consentement." },
                        { subTitle: "Aide juridique", text: "Dans certains pays, il existe des recours légaux et des lois spécifiques pour lutter contre le harcèlement en ligne. Vous pouvez consulter un avocat spécialisé dans les droits numériques pour obtenir des conseils." }
                    ]
                },
                {
                    title: "VII. Ressources et Soutien",
                    content: [
                        { subTitle: "Lignes d’assistance téléphonique", text: "Certaines organisations proposent des services d’assistance pour les victimes de cyberharcèlement." },
                        { subTitle: "Groupes de soutien en ligne", text: "Rejoindre des communautés de soutien peut être un excellent moyen de partager son expérience et d’obtenir des conseils de personnes ayant vécu des situations similaires." },
                        { subTitle: "Éducation et sensibilisation", text: "De nombreuses campagnes de sensibilisation sont menées pour éduquer les jeunes et les adultes sur les dangers du cyberharcèlement et les moyens de s’en protéger." }
                    ]
                },
                {
                    title: "Conclusion",
                    content: [
                        { subTitle: "", text: "Le cyberharcèlement est un problème croissant dans le monde numérique actuel. Pour se défendre, il est essentiel de prendre des mesures de prévention, de ne pas hésiter à signaler les comportements abusifs et à chercher du soutien. Agir rapidement, préserver des preuves et solliciter de l’aide peuvent faire une grande différence dans la gestion de cette forme de harcèlement." }
                    ]
                }
            ]
        },
        questions: [
            {
                question: "Quelle est une bonne première réaction face à un acte de cyberharcèlement ?",
                options: ["Répondre au harceleur pour lui dire d’arrêter", "Bloquer immédiatement le harceleur", "Ignorer le message sans prendre de mesures"],
                answer: "Bloquer immédiatement le harceleur"
            },
            {
                question: "Si une personne diffuse des photos privées de vous sans votre consentement, quelle est la bonne démarche ?",
                options: ["Demander gentiment à la personne de retirer les photos", "Signaler immédiatement le contenu et contacter les autorités compétentes", "Partager les photos avec vos amis pour les informer"],
                answer: "Signaler immédiatement le contenu et contacter les autorités compétentes"
            },
            {
                question: "Le cyberharcèlement peut avoir des conséquences graves sur la santé mentale des victimes.",
                options: ["Vrai", "Faux"],
                answer: "Vrai"
            },
            {
                question: "Quelle mesure de sécurité permet de réduire le risque de devenir victime de cyberharcèlement ?",
                options: ["Partager des informations personnelles en privé uniquement", " Activer les paramètres de confidentialité sur les réseaux sociaux","Ajouter tous les inconnus en tant qu'amis sur les réseaux"],
                answer: " Activer les paramètres de confidentialité sur les réseaux sociaux"
            },
            {
                question: "Que devez-vous faire si vous êtes confronté à du harcèlement grave avec des menaces physiques ?",
                options: ["Bloquer l'utilisateur et en parler avec vos amis", "Répondre au harceleur pour calmer la situation","Signaler le harceleur, garder des preuves et contacter les autorités"],
                answer: "Vrai"
            },

        ]
    }
];

let currentTheme = null;
let currentQuestionIndex = 0;
let score = 0;

// Références aux éléments du DOM
const themesContainer = document.getElementById("themes");
const pageThemes = document.getElementById('theme-selection');
const knowledgePage = document.getElementById("knowledge-page");
const quizSection = document.getElementById("quiz");
const resultPage = document.getElementById("result-page");
const knowledgeTitle = document.getElementById("knowledge-title");
const knowledgeText = document.getElementById("knowledge-text");
const quizTitle = document.getElementById("quiz-title");
const questionElement = document.getElementById("question");
const resultScore = document.getElementById("result-score");
const startQuizBtn = document.getElementById("start-quiz-btn");
const restartBtn = document.getElementById("restart-btn");
const returnHomeBtn = document.getElementById("return-home-btn");

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const pageAccueil = document.getElementById('page-accueil');
    const viewScoreBtn = document.getElementById('view-score-btn');
    

    // Quand le formulaire de connexion est soumis
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche le rechargement de la page
        
        // Cacher la page d'accueil
        pageAccueil.classList.add('hidden');

        // Afficher la page des thèmes
        pageThemes.classList.remove('hidden');

        // Réinitialiser les champs du formulaire après soumission
        loginForm.reset();  // Cette ligne vide les champs du formulaire
    });

    // Quand on clique sur "Voir le tableau des scores"
    viewScoreBtn.addEventListener('click', function () {
        // Cacher la page d'accueil
        pageAccueil.classList.add('hidden');

        // Afficher directement la page des résultats
        resultPage.classList.remove('hidden');

        // Si le score a été calculé avant, il sera affiché ici
        resultScore.textContent = `Votre score : ${score}/${currentTheme ? currentTheme.questions.length : 0}`;
    });
});

// Affichage des thèmes
themes.forEach((theme, index) => {
    const themeBtn = document.createElement("button");
    themeBtn.textContent = theme.name;
    themeBtn.addEventListener("click", () => selectTheme(index));
    themesContainer.appendChild(themeBtn); // Ajoute les boutons dynamiquement
});

// Fonction pour sélectionner un thème et mettre à jour la page
function selectTheme(themeIndex) {
    currentTheme = themes[themeIndex];

    // Masquer la section de sélection des thèmes
    document.getElementById("theme-selection").classList.add("hidden");

    // Afficher la page des connaissances
    knowledgePage.classList.remove("hidden");

    // Mettre à jour le titre du thème et l'introduction
    knowledgeTitle.textContent = `Thème : ${currentTheme.name}`;
    knowledgeText.innerHTML = currentTheme.knowledge.intro;

    // Ajouter dynamiquement les sections
    const knowledgeSections = document.getElementById('knowledge-sections');
    knowledgeSections.innerHTML = ''; // Réinitialiser les sections avant d'ajouter les nouvelles

    currentTheme.knowledge.sections.forEach(section => {
        const sectionElement = document.createElement("div");
        sectionElement.classList.add("section");

        // Ajouter le titre de la section
        const sectionTitle = document.createElement("h2");
        sectionTitle.textContent = section.title;
        sectionElement.appendChild(sectionTitle);

        // Ajouter le contenu de la section (les sous-sections)
        const sectionContent = document.createElement("ul");
        section.content.forEach(subSection => {
            const listItem = document.createElement("li");
            const subTitle = document.createElement("strong");
            subTitle.textContent = subSection.subTitle;
            const text = document.createElement("p");
            text.textContent = subSection.text;

            listItem.appendChild(subTitle);
            listItem.appendChild(text);
            sectionContent.appendChild(listItem);
        });

        sectionElement.appendChild(sectionContent);
        knowledgeSections.appendChild(sectionElement); // Ajouter la section au conteneur

         // Afficher le bouton de démarrage du quiz
        displayStartQuizButton();
    });

    function displayStartQuizButton() {
        // Vérifier si le bouton existe déjà
        const existingBtn = document.getElementById("start-quiz-btn");
    
        // Si le bouton n'existe pas, le créer et l'ajouter
        if (!existingBtn) {
            const startBtn = document.createElement("button");
            startBtn.textContent = "Démarrer le Quiz";
            startBtn.id = "start-quiz-btn";
            startBtn.addEventListener("click", startQuiz);
            knowledgePage.appendChild(startBtn);
        }
    }


// Démarrer le quiz après la page de connaissances 
function startQuiz() {
    knowledgePage.classList.add("hidden");  // Masquer la page des connaissances
    quizSection.classList.remove("hidden"); // Afficher la section du quiz
    quizTitle.textContent = `Quiz : ${currentTheme.name}`;
    currentQuestionIndex = 0; // Réinitialiser l'index des questions
    score = 0; // Réinitialiser le score
    displayQuestion(); // Afficher la première question
}

// Afficher la question actuelle avec les réponses sous forme de boutons
function displayQuestion() {
    const currentQuestion = currentTheme.questions[currentQuestionIndex];
    const optionsContainer = document.getElementById("options-container");

    // Réinitialiser le conteneur des options à chaque nouvelle question
    optionsContainer.innerHTML = '';

    // Afficher la question
    questionElement.textContent = currentQuestion.question;

    // Créer un bouton pour chaque réponse possible
    currentQuestion.options.forEach((option) => {
        const optionBtn = document.createElement("button");
        optionBtn.textContent = option;
        optionBtn.classList.add("option-btn"); // Classe CSS pour styliser les boutons

        // Écouter l'événement de clic sur le bouton
        optionBtn.addEventListener("click", () => {
            // Vérifier si la réponse est correcte
            if (option === currentQuestion.answer) {
                score++; // Incrémente le score si la réponse est correcte
            }

            // Passer à la question suivante
            currentQuestionIndex++;

            // Si ce n'est pas la dernière question, afficher la suivante
            if (currentQuestionIndex < currentTheme.questions.length) {
                displayQuestion();
            } else {
                showResults(); // Afficher les résultats si c'est la dernière question
            }
        });

        // Ajouter le bouton au conteneur des options
        optionsContainer.appendChild(optionBtn);
    });
}

// Afficher les résultats
function showResults() {
    quizSection.classList.add("hidden"); // Masquer la section du quiz
    resultPage.classList.remove("hidden"); // Afficher la page des résultats
    resultScore.textContent = `Votre score : ${score}/${currentTheme.questions.length}`; // Afficher le score
}

// Recommencer le quiz
restartBtn.addEventListener("click", () => {
    // Masquer la page des résultats et la page du quiz
    resultPage.classList.add("hidden");
    quizSection.classList.add("hidden");

    // Réinitialiser les variables de progression
    currentQuestionIndex = 0;
    score = 0;

    // Réafficher la section de sélection des thèmes
    document.getElementById("theme-selection").classList.remove("hidden");

    // Masquer la page des connaissances si elle est affichée
    knowledgePage.classList.add("hidden");
});
}
returnHomeBtn.addEventListener("click", () => {
    // Retour à la page d'Accueil
    document.getElementById("page-accueil").classList.remove("hidden");

    // Masquer la page des résultats et la page du quiz
    resultPage.classList.add("hidden");
    quizSection.classList.add("hidden");

    // (Optionnel) Masquer la page des thèmes et des connaissances si besoin
    //pageThemes.classList.add("hidden");
    //knowledgePage.classList.add("hidden");
});