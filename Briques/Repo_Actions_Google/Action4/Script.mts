'Variable
Dim reg

'Création de la regex
regex = ".*" & Parameter("Compte") & ".*"

'Set du compte voulu dans l'objet de test
Browser("Nav").Page("Gmail").Link("Link").SetTOProperty "text", regex

'S'il a le bon compte en mémoire
If Browser("Nav").Page("Gmail").Link("Link").Exist Then
	'Click sur le bon compte
	Browser("Nav").Page("Gmail").Link("Link").Click @@ hightlight id_;_Browser("Gmail").Page("Gmail").Link("Link")_;_script infofile_;_ZIP::ssf1.xml_;_
Else
	'Set du compte
	Browser("Nav").Page("Gmail").WebEdit("Adresse e-mail ou numéro").Set Parameter("Compte")
	Browser("Nav").Page("Gmail").WebButton("Suivant").Click
End  If

'Saisie du mot de passe par la méthode SetSecure
Browser("Nav").Page("Gmail").WebEdit("mdp").WaitProperty "visible", True, 10000
Browser("Nav").Page("Gmail").WebEdit("mdp").SetSecure "5fa2aaf79af0d256db0efcf875954962fbf66c4b24f0649708cd3fa40a1a"
Browser("Nav").Page("Gmail").WebButton("Suivant").Click @@ hightlight id_;_Browser("Gmail").Page("Gmail 2").WebButton("Suivant")_;_script infofile_;_ZIP::ssf3.xml_;_

'Synchronisation
Browser("Nav").Page("Boîte de réception").Image("logo_gmail").WaitProperty "visible", True, 10000 @@ hightlight id_;_Browser("Gmail").Page("Boîte de réception - gwinter@q").Image("logo gmail lockup default 1x r")_;_script infofile_;_ZIP::ssf4.xml_;_







