Set WshShell = CreateObject("WScript.Shell")
WshShell.Run chr(34) & "F:\Projects\potplayer-extension\potplayer_server_start.bat" & chr(34), 0
Set WshShell = Nothing