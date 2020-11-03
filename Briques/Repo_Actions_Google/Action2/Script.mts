'Variable
Dim url



'Fermeture d'IE
SystemUtil.CloseProcessByName("iexplore.exe")

'Ouverture du navigateur avec Google en URL
url= "www.google.com"
SystemUtil.Run "iexplore", url

If Browser("Google").Page("Google").Image("Google").Exist Then
	Reporter.ReportEvent micPass, "Statut", "OK"
	Parameter("STATUT_BRIQUE") = "OK"
Else
	Reporter.ReportEvent micFail, "Statut", "KO"
	Parameter("STATUT_BRIQUE") = "KO"
End If

