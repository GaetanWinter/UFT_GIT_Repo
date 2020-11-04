'Click sur le lien de l'envoi
Browser("Nav").Page("Boîte de réception").Link("LienEnvoi").WaitProperty "visible", True, 10000
Browser("Nav").Page("Boîte de réception").Link("LienEnvoi").Click

'Vérifications
Browser("Nav").Page("Boîte de réception").WebElement("TitreMail").Check CheckPoint("TitreMail")
Browser("Nav").Page("Boîte de réception").WebElement("Corps").Check CheckPoint("CorpsMail")

