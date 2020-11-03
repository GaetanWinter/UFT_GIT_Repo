'Variables
Dim url
Dim nav, pageGoogle

'Fermeture d'IE
SystemUtil.CloseProcessByName("iexplore.exe")

'Ouverture du navigateur avec Google en URL
url= "www.google.com"
SystemUtil.Run "iexplore", url

'Set des objets
Set nav = Browser("Google")
Set pageGoogle = nav.Page("Google")

'Recherche Google
pageGoogle.WebEdit("Rech.").Set Datatable("VALEUR_RECHERCHE", dtGlobalSheet)
pageGoogle.WebEdit("Rech.").Submit

