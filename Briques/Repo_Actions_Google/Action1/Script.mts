'Variables
Dim nav, pageGoogle

'Set des objets
Set nav = Browser("Google")
Set pageGoogle = nav.Page("Google")

'Recherche Google
pageGoogle.WebEdit("Rech.").Set Parameter("VALEUR_RECHERCHE")
pageGoogle.WebEdit("Rech.").Submit

'Synchro
Browser("Nav").Page("Recherche").Image("Google").WaitProperty "visible", True, 10000 @@ hightlight id_;_Browser("Google").Page("Recherche - Recherche").Image("Google")_;_script infofile_;_ZIP::ssf8.xml_;_


'Lien
Browser("Nav").Page("Recherche").WebElement(Parameter("VALEUR_RECHERCHE")).Click




