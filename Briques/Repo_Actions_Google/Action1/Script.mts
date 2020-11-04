'Variables
Dim nav, pageGoogle

'Set des objets
Set nav = Browser("Google")
Set pageGoogle = nav.Page("Google")

'Recherche Google
pageGoogle.WebEdit("Rech.").Set Parameter("VALEUR_RECHERCHE")
pageGoogle.WebEdit("Rech.").Submit



Browser("Google").Page("Recherche - Recherche").WebElement("recherche").Check CheckPoint("recherche") @@ hightlight id_;_Browser("Google").Page("Recherche - Recherche").WebElement("recherche")_;_script infofile_;_ZIP::ssf1.xml_;_

