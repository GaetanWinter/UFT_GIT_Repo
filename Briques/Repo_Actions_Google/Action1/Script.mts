'Variables
Dim nav, pageGoogle

'Set des objets
Set nav = Browser("Google")
Set pageGoogle = nav.Page("Google")

'Recherche Google
pageGoogle.WebEdit("Rech.").Set Parameter("VALEUR_RECHERCHE")
pageGoogle.WebEdit("Rech.").Submit
