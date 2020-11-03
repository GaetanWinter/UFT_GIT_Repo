
'test "bonjour", 1

Dim statut

'Appel de l'action de login google
RunAction "LoginGoogle [Repo_Actions_Google]", oneIteration, statut

'Appel de l'action recherche Google du répertoire d'action Google
RunAction "RechercheGoogle [Repo_Actions_Google]", oneIteration, "Recherche"

Sub test ( texte, nombre)
	Msgbox texte & nombre
End Sub



