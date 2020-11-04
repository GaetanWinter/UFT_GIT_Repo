
'Click sur le bouton Nouveau message
Browser("Nav").Page("Boîte de réception").WebButton("Nouveau message").Click


'Complétion du destinataire
'Browser("Nav").Page("Boîte de réception").WebList("À").Click
Browser("Nav").Page("Boîte de réception").WebElement("Destinataire").Object.innerText = Parameter("Destinataire")


'Complétion du titre @@ hightlight id_;_Browser("Boîte de réception (1)").Page("Boîte de réception (1)").WebList("À")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Nav").Page("Boîte de réception").WebEdit("Objet").Set Parameter("Titre") @@ hightlight id_;_Browser("Boîte de réception (1)").Page("Boîte de réception (1)").WebEdit("Objet")_;_script infofile_;_ZIP::ssf5.xml_;_

'Complétion du corps
Browser("Nav").Page("Boîte de réception").WebEdit("Corps du message").Set Parameter("Corps") @@ hightlight id_;_Browser("Boîte de réception (1)").Page("Boîte de réception (1)").WebEdit("Corps du message")_;_script infofile_;_ZIP::ssf6.xml_;_

'Envoi
Browser("Nav").Page("Boîte de réception").WebButton("Envoyer").Click @@ hightlight id_;_Browser("Boîte de réception (1)").Page("Boîte de réception (1)").WebButton("Envoyer ‪(Ctrl-Enter)‬")_;_script infofile_;_ZIP::ssf7.xml_;_


 @@ hightlight id_;_Browser("Boîte de réception (1)").Page("Boîte de réception (1)").WebElement("Corps-- Winter GaëtanConsultan")_;_script infofile_;_ZIP::ssf10.xml_;_
