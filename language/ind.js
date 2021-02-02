exports.wait = () => {
	return`*「 ESPERE 」EM PROCESSO *`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVAR 」NIVELAMENTO *`
}

exports.lvloff = () => {
	return`*「 DESATIVAR 」NIVELAMENTO *`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO * ''
}

exports.lvlnoon = () => {
	return`*NÍVEL NO GRUPO NÃO ATIVADO *`
}

exports.noregis = () => {
	return`*「 AINDA NÃO REGISTRADO 」* \ n \ n * como se registrar ${prefix}daftar nome | idade* \n*exemplo ${prefix}daftar Ronaldo|19*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」* \ n \ n * Você já está registrado no banco de dados do bot *`
}

exports.stikga = () => {
	return`*Falha, tente repetir daqui a alguns segundos * `
}

exports.linkga = () => {
	return`*Desculpe, link inválido * `
}

exports.groupo = () => {
	return`*「SÓ GRUPO 」*`
}

exports.ownerb = () => {
	return`*「APENAS O PROPRIETÁRIO DO BOT PODE USAR ESSE COMANDO」*`
}

exports.ownerg = () => {
	return`*「SOMENTE ADMINISTRADORES DO GRUPO PODEM USAR ESSE COMANDO」*`
}

exports.admin = () => {
	return`*「SOMENTE ADMINISTRAÇÃO PODE USAR ESSE COMANDO」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW EM EXECUÇÃO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos *`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco * `
}

exports.clears = () => {
	return`*Limpado com sucesso * `
}

exports.pc = () => {
	return`*「 INSCRIÇÃO 」* \ n \ nPara saber se você se inscreveu, verifique a mensagem que enviei \n\nNOTA:\n*se você não entendeu a mensagem. significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS DO PAÍS 」* \ n \ nVocê já está registrado com os dados \ n \ n┏━⊱Nome \n┗⊱${namaUser}\n┏━⊱Número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Idade\n┗⊱${umurUser}\n┏━⊱Hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : Não se esqueça deste número porque é importante: v`
}

exports.cmdnf = (prefix, command) => {
	return`Comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} você não é o meu dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente *\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${aha}*\n\n_NOTA : NEM SEMPRE O BOT VAI ESTAR ON_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${ahb}*\n\n_NOTA : NEM SEMPRE O BOT VAI ESTAR ON_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${ahc}*\n\n_NOTA : NEM SEMPRE O BOT VAI ESTAR ON_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} seu nível não é suficiente *\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${ahd}*\n\n_NOTA : NEM SEMPRE O BOT VAI ESTAR ON_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${ahe}*\n\n_NOTA : NEM SEMPRE O BOT VAI ESTAR ON_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${ahf}*\n\n_NOTA : NEM SEMPRE O BOT VAI ESTAR ON_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
┏━━━⊱  *SOBRE O USUÁRIO*  ⊰━━┓
┣⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *O teu dinheiro* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *Nível* : ${getLevelingLevel(sender)}
┣⊱ *Registro do usuário* : ${_registered.length}
┗━━━⊱  ⸨ *AFFIS* ⸩  ⊰━━━━┛


┏━━⊱ *MAKER MENU* ⊰━━┓
┣⊱ *${prefix}sticker*
┣⊱ *${prefix}vinta*
┣⊱ *${prefix}avengers*
┣⊱ *${prefix}summer*
┣⊱ *${prefix}sandwrite*
┣⊱ *${prefix}metaldark*
┣⊱ *${prefix}dropwater*
┣⊱ *${prefix}greenneon*
┣⊱ *${prefix}neontext*
┣⊱ *${prefix}sumery*
┣⊱ *${prefix}blood*
┣⊱ *${prefix}firework*
┣⊱ *${prefix}lava*
┣⊱ *${prefix}qrcode*
┣⊱ *${prefix}ninjalogo*
┣⊱ *${prefix}glitch*
┣⊱ *${prefix}wolflogo*
┣⊱ *${prefix}lionlogo*
┣⊱ *${prefix}jokerlogo*
┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}mining*
┣⊱ *${prefix}bisakah*
┣⊱ *${prefix}kapankah*
┣⊱ *${prefix}apakah*
┣⊱ *${prefix}rate*
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid*
┣⊱ *${prefix}happymod*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣━━⊱ *MUTUAL* ⊰━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}toxic*
┣⊱ *${prefix}quotes*
┣⊱ *${prefix}beritahoax*
┣⊱ *${prefix}brainly*
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan*
┣⊱ *${prefix}igstalk*
┣⊱ *${prefix}bitly*
┣━━⊱ *YT & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3*
┣⊱ *${prefix}ytmp4*
┣⊱ *${prefix}joox*
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}kpop*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}shota*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMIT & UANG* ⊰━┫
┣⊱ *${prefix}limit*
┣⊱ *${prefix}buylimit*
┣⊱ *${prefix}transfer*
┣⊱ *${prefix}dompet*
┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *OWNER MENU* ⊰━┫
┣⊱ *${prefix}bc*
┣⊱ *${prefix}bcgc*
┣⊱ *${prefix}kickall*
┣⊱ *${prefix}setreply*
┣⊱ *${prefix}setprefix*
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block*
┣⊱ *${prefix}unblock*
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone*
┣⊱ *${prefix}setppbot*
┣━━⊱ *THANGKS TO* ⊰━┫
┃
┣⊱ *AFFIS JUNIANTO*
┣⊱ *FADHIL GRAPHY*
┣⊱ *MHANKBARBARS*
┣⊱ *MYBOT TEAM*
┣⊱ *AGUNG(XPTN)*
┣⊱ *BRYAN(SUHU)*
┣⊱ *TOBZ*
┣⊱ *ARUGAZ*
┃
┣⊱ NOTE : TQTO DI HAPUS
┃ GW GAK UP LAGI OKE
┃
┗━━⊱  ⸨ *AFFIS* ⸩  ⊰━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 PARABÉNS 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* = +3
┗⊱ *Nível* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} O limite de hoje expira*\n*O limite é redefinido a cada hora 24h * `
}

exports.limitcount = (limitCounts) => {
	return`
*「 CONTAGEM 」*
O resto do seu limite : ${limitCounts}

NOTA : para chegar ao limite. pode passar de nível acima ou limite de vida
}

exports.satukos = () => {
	return`*Adicionar parâmetro 1 / habilitar ou 0 / desabilitar
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinheiro* : ${uangkau}\n┗━━━━━━━━━━`
}