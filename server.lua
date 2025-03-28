local QBCore = exports['qb-core']:GetCoreObject()

QBCore.Commands.Add('duyuru', 'Duyuru Gönderir', { { name = 'Mesaj', help = 'Bir Mesaj Girin' } }, true, function(source, args)
    local src = source
    local message = table.concat(args, " ")
    local name = GetPlayerName(src)
    TriggerClientEvent('neys-announce:showannouncement', -1, message, name)
end, 'admin')