Option Explicit


'Dim excelSheetName,dataSheetName,rowCount,i,key,expected,dataValue,objClass,htmlId,htmlTag,name,innerText,page,notes,browserOpenTitle,browserOpenUrl _
'	,pageTitle,pageTitleString,browserTitle,choice,result,c,loginSheetName,l,currPassword,newPassword

'Call OpenAppInChrome(Environment.Value("watchDogUrl"))
'Call OpenApp(Environment.Value("watchDogUrl"))

SystemUtil.Run "iexplore.exe","https://jbosstest.twc.state.tx.us/WATCHDOG/security/logon.do", , ,7
