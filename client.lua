RegisterNetEvent('neys-announce:showannouncement')
AddEventHandler('neys-announce:showannouncement', function(text, author)
    SendNUIMessage({
        type = "announcement",
        message = text,
        serverName = Config.ServerName,
        author = author,
        timeout = Config.Time
    })
    Citizen.Wait(Config.Time)
    SendNUIMessage({
        type = "hideAnnouncement"
    })
end) 