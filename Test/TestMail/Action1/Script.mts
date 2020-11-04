'Déclaration des vraiables
Dim adresseMail, titreMail, corpsMail

'Set des variables
adresseMail = "gwinter@qualixo.com"
titreMail = "Titre du mail"
corpsMail = "Corps du mail"

'Connexion à Google
RunAction "LoginGoogle [Repo_Actions_Google]", oneIteration

'Recherche de Gmail du Google et Cick sur le lien
RunAction "RechercheGoogle [Repo_Actions_Google]", oneIteration, "Gmail"

'Connexion à Gmail
RunAction "LoginGmail [Repo_Actions_Google]", oneIteration, adresseMail

'Création du mail
RunAction "EnvoiMail [Repo_Actions_Google]", oneIteration, adresseMail, titreMail , corpsMail

'Vérification du mail
RunAction "VerifMail [Repo_Actions_Google]", oneIteration, titreMail , corpsMail

'Déconnexion
RunAction "DecoGmail [Repo_Actions_Google]", oneIteration


