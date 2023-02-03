/**
 * 
 */
// WEAPON
const tracer = 0.1		// 0.1 equals to 10% (Sureshot)
const viperMark = 0.02		// 0.02 equals to 2% (Sureshot)
// ARTIFACT
const vulnerability = 0.08	// 0.08 equals to 8% (Vulnerability Detector)
const blade = 0.04		// 0.04 equals to 4% (Bloodied Blade)
// DIVINE WEAPON
const macha_hammer = 0.15	// 0.15 equals to 15% (Machavann's Guard)
// BUFFS
const bless = 0.35			// 0.35 equals to 35% (Blessing of the Sun)
const lightInc = 0.5		// 0.5 equals to 50% (Incarnation of Light)
const shower = 0.3			// 0.3 equals to 30% (Energy Shower)
const alcBiotrap = 0.4		// 0.4 equals to 40% (Biotrap)
// SERVICE
let digit = Intl.NumberFormat()	// used to separate thousands values with dots
let timeDamageOnGoing = false	// prevents multiple clicks of calculate damage while time menu is on
let enemyHealthStatus = document.getElementById("actualStatus")	// status of enemy
let outputHealth = document.getElementById("outputHealth")	// enemy health output value
let healthChar = document.getElementById("outputHealthChar1")	// enemy char output
let outputHitsToKill = document.getElementById("outputHitsToKill")	// hits to kill counter output
let enemyHealthCurrent = -1		// current enemy health value
let hitsToKill = 0	// counter for hits
let timeoutArrayOne = []	// timeout array
let timeoutArrayTwo = []	// timeout array

function changeLang()
{
	const elements = document.querySelectorAll("#linkEng, #linkIta, #langEng, #langIta, #descEng, #descIta,"
		+ "#outputEng, #outputIta, #lastInfoEng, #lastInfoIta, #calcButtonEng, #clearButtonEng, #calcButtonIta,"
		+ "#clearButtonIta, #authorEng, #authorIta, #outputEng2, #outputIta2, #critHitEng, #critHitIta,"
		+ "#outputEng4, #outputIta4, #outputEng5, #outputIta5, #outputEng6, #outputIta6")
	elements.forEach(e => { e.hidden = (e.hidden)? false : true })
}

function showEffects()
{
	const elements = document.querySelectorAll("#tableOfEffects")
	elements.forEach(e => { e.hidden = (e.hidden)? false : true })
}

function showSuppAura()
{
	const elements = document.querySelectorAll("#charAura, #auraDesc")
	elements.forEach(e => { e.hidden = (e.hidden)? false : true })
}

function showVerdictStacks()
{
	const elements = document.querySelectorAll("#verdictDesc, #verdictValue")
	elements.forEach(e => { e.hidden = (e.hidden)? false : true })
}

function showTravelBonus()
{
	const elements = document.querySelectorAll("#travelDesc, #soloDesc, #defSuppDesc, #multiSelect4,"
		+ "#defSuppBonus, #monsterDmgDesc, #monsterDmg")
	elements.forEach(e => { e.hidden = (e.hidden)? false : true })
}

function useStimulants()
{
	const elements = document.querySelectorAll("#stimsDesc, #stimsValue")
	elements.forEach(e => { e.hidden = (e.hidden)? false : true })
}

function healthStatus(value) {
	if (value < 0) {
		enemyHealthStatus.style.color = "#ff9900"
		enemyHealthStatus.innerText = "Unset"
	}
	else {
		enemyHealthStatus.style.color = (value > 0)? "#03fc3d" : "#ff0000"
		enemyHealthStatus.innerText = (value > 0)? "Alive" : "Killed"
	}
}

function removeHealth() {
	enemyHealthCurrent = -1
	hitsToKill = 0
	outputHealth.innerText = 0
	outputHitsToKill.innerText = hitsToKill
	healthChar.innerText = ""
	healthStatus(enemyHealthCurrent)
}

function healthValue(value, output, char) {
	output.innerText = digit.format(value)
	char.innerText = damageChar(value)
	healthStatus(value)
}

function setHits(value, output) {
	hitsToKill = value
	output.innerText = hitsToKill
}

function enableEnemyHealth() {
	const elements = document.querySelectorAll("#enemyHealth, #enemyHealthNum, #enemyStatus, #actualStatus,"
	+ "#setHealth, #healthOutputSection, #hitsToKillSection, #enableHealthDesc, #disableHealthDesc")
	elements.forEach(e => { e.hidden = (e.hidden)? false : true })
	healthStatus(enemyHealthCurrent)
}

function setHealth() {
	let inputHealth = document.getElementById("enemyHealthNum").value
	if (inputHealth < 0 || inputHealth === "") inputHealth = 0
	enemyHealthCurrent = inputHealth
	healthValue(enemyHealthCurrent, outputHealth, healthChar)
	setHits(0, outputHitsToKill)
}

function enableTimeDamage()
{
	const elements = document.querySelectorAll("#atkNumDesc, #atkNum, #atkTimeDesc, #atkTime,"
	+ "#timeDamageOutput, #critChanceDesc, #critChance, #enemiesDesc, #enemies, #critHits,"
	+ "#timerOutput, #timerOutput2, #resetTime, #enableTimeDesc, #disableTimeDesc")
	elements.forEach(e => { e.hidden = (e.hidden)? false : true })
	timeDamageOnGoing = false
}

function resetTimer()
{
	const elements = document.querySelectorAll("#timer, #totalTimer")
	elements.forEach(e => { e.innerText = 0 })
	timeoutArrayOne.forEach(function(timer) { clearTimeout(timer) })
	timeoutArrayTwo.forEach(function(timer) { clearTimeout(timer) })
	timeDamageOnGoing = false
}

function deleteForm()
{
	const elements = document.querySelectorAll("#might, #skillDmg, #baseDmg, #classBuff, #a9Buff,"
		+ "#weaponDmg, #weaponAura, #elderMulti, #mainDmg, #critDmg, #critChance, #compDmg,"
		+ "#troopDmg, #armorFracture, #startDmg, #stunDmg, #slowDmg, #chainDmg, #artifactDmg,"
		+ "#stack, #stack2, #stack3, #compStat, #suppMight, #aura, #mightPercentage, #plrRank,"
		+ "#monsterRank, #atlasDmg, #atlasTroopDmg, #atkNum, #atkTime, #symbolBuff, #guildDmg,"
		+ "#node1, #node2, #enemies, #strUnity, #enemyHealthNum")
	elements.forEach(e => { e.value = "" })
}

function getDamageValue(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15)
{
	return ((((((((((((n1 * n2) * (n3 + (n4 + n5))) * n6) * n7) 
		* n8) * n9) * n10) * n11) * n12) * n13) * n14) * n15)
}

function damageChar(dmg) {
	if (dmg >= 1000000000000000000000000000000n) return "Ge"
	if (dmg >= 1000000000000000000000000000n) return "B"
	if (dmg >= 1000000000000000000000000n) return "Y"
	if (dmg >= 1000000000000000000000n) return "Z"
	if (dmg >= 1000000000000000000n) return "E"
	if (dmg >= 1000000000000000) return "P"
	if (dmg >= 1000000000000) return "T"
	if (dmg >= 1000000000) return "G"
	if (dmg >= 1000000) return "M"
	if (dmg >= 1000) return "K"
	if (dmg < 1000) return ""
}

function damageEnemy(damage) {
	if (enemyHealthCurrent > 0)
	{
		enemyHealthCurrent -= damage
		setHits((hitsToKill + 1), outputHitsToKill)
		if (enemyHealthCurrent < 0) enemyHealthCurrent = 0
	}
	else enemyHealthCurrent = 0
	healthValue(enemyHealthCurrent, outputHealth, healthChar)
}

function random() {
	return Number((Math.random() * 100) + 1)	// generate random number for crit chance
}

function calculateDamage()
{
	if (timeDamageOnGoing) return
	timeoutArrayOne = []	// clear the timeout array
	timeoutArrayTwo = []	// clear the timeout array
	let output = document.getElementById("outputDmg")	// OUTPUT
	let dmgChar1 = document.getElementById("outputDmgChar1")	// OUTPUT
	let dmgChar2 = document.getElementById("outputDmgChar2")	// OUTPUT
/*						FIRST MENU						*/
// CLASS
	let skill = document.getElementById("skillDmg").value
	let classBuff = 1 + (document.getElementById("classBuff").value / 100)
	let a9Buff = 1 + (document.getElementById("a9Buff").value / 100)
	let symbolBuff = 1 + (document.getElementById("symbolBuff").value / 100)
	let classEffectCnt = 0
// STATS
	let isPlrGod = document.getElementById("isPlrGod").checked	// if player in divine form
	let monsterDmg = document.getElementById("monsterDmg").checked	// if god, check if we have dmg to monster bonus
	let might = document.getElementById("might").value
	let base = 1 + (document.getElementById("baseDmg").value / 100)
	let elder = 1 + (document.getElementById("elderMulti").value / 100)
	let armor = 1 + (document.getElementById("armorFracture").value / 100)
	let main = 1 + (document.getElementById("mainDmg").value / 100)
	let crit = 1 + (document.getElementById("critDmg").value / 100)
	let critChance = document.getElementById("critChance").value
	let comp = (document.getElementById("compDmg").value / 100)
	let troop = 1 + (document.getElementById("troopDmg").value / 100)
	let start = 1 + (document.getElementById("startDmg").value / 100)
	let stun = 1 + ( document.getElementById("stunDmg").value / 100)
	let slow = 1 + (document.getElementById("slowDmg").value / 100)
	let chain = 1 + (document.getElementById("chainDmg").value / 100)
	let charAura = document.getElementById("charAura").checked		// character support aura boost
	let isPlrSupp = document.getElementById("isPlrSupport").checked	// if player is support
	let strUnity = 1 + (document.getElementById("strUnity").value / 100)	// strength in unity buff (sum or multiplier?)
	let plrSuppAura = 0	// player's base support aura power
/*						SECOND MENU						*/
// SUPERIORITY CALCULATION
	let plrRank = document.getElementById("plrRank").value		// player rank
	let monsterRank = document.getElementById("monsterRank").value	// monster rank
// WEAPON STATS
	let wpn = (document.getElementById("weaponDmg").value / 100)		// weapon damage
	let wpnAura = (document.getElementById("weaponAura").value / 100)	// weapon support aura
// ARTIFACT BONUS
	let artif = 1 + (document.getElementById("artifactDmg").value / 100)	// artifact damage
// CATHEDRAL SEALS
	let dmgSeal = document.getElementById("sealAllDmg").checked	// all damage bonus +3%
	let cSeal = document.getElementById("sealClass").checked	// class seal
	let aSeal = document.getElementById("sealAdv").checked	// adventure seal
// VERDICT
	let useVerdict = document.getElementById("useVerdict").checked
	let verdict = 1 + (document.getElementById("verdictValue").value / 100)
// HALL OF TRAVELS
	let soloBonus = document.getElementById("multiSelect4")
	let defSuppBonus = document.getElementById("defSuppBonus").checked
// ATLAS
	let atlasDmg = 1 + (document.getElementById("atlasDmg").value / 100)
	let atlasTroopDmg = 1 + (document.getElementById("atlasTroopDmg").value / 100)
	let node1 = 1 + (document.getElementById("node1").value / 100)
	let node2 = 1 + (document.getElementById("node2").value / 100)
// MISC
	let panthDmg = 1 + (document.getElementById("guildDmg").value / 100)
	let premiumDmg = document.getElementById("premiumDmg").checked
/* 						EFFECTS MENU						*/
// WEAPON EFFECT
	let stack = document.getElementById("stack").value	// weapon
	let select = document.getElementById("multiSelect")	// weapon
// ARTIFACT EFFECT
	let stack2 = document.getElementById("stack2").value	// artifact
	let select2 = document.getElementById("multiSelect2")	// artifact
// EUPHOMINE
	let useStims = document.getElementById("useStims").checked			// euphomine
	let stimsValue = (document.getElementById("stimsValue").value / 100)	// euphomine
// SUPPORT
	let isSuppGod = document.getElementById("isSuppGod").checked	// support's god form
	let suppMight = document.getElementById("suppMight").value		// support's might
	let suppAura = (document.getElementById("aura").value / 100)	// support's aura
	let mightGiven = (document.getElementById("mightPercentage").value / 100)	// support
// BUFF EFFECT
	let select3 = document.getElementById("multiSelect3")		// soundweaver
	let wings = document.getElementById("wings").checked		// wings of skies artifact - use biotrap const
	let sunBless = document.getElementById("bless").checked	// lightbinder's bless
	let iLight = document.getElementById("light").checked		// lightbinder's ulti
	let eShower = document.getElementById("shower").checked	// alchemist's shower	
	let biotrap = document.getElementById("biotrap").checked	// alchemist's biotrap
	let hammer = document.getElementById("nerion").checked		// nerion's hammer
	let macha = document.getElementById("machavann").checked	// machavann upgrade
// EXO NIGHTFALL
	let stack3 = document.getElementById("stack3").value			// nightfall
	let compStat = (document.getElementById("compStat").value / 100)	// nightfall
// DAMAGE OUTPUT VARIABLES
	let finalDmg = 0
	let critCalc = 0
	let dmgOvertime = 0
// HEALTH VARIABLES
	let enableHealth = document.getElementById("enableHealth").checked	// enemy health enabler
// TIME VARIABLES
	let enableTime = document.getElementById("enableTime").checked	// time enabler
	let atkNum = document.getElementById("atkNum").value		// number of attacks
	let atkTime = document.getElementById("atkTime").value		// attacks per second
	let enemies = document.getElementById("enemies").value		// number of enemies hitted with one attack
// CHECKS
	if (+classBuff < +1) classBuff = 1
	if (+a9Buff < +1) a9Buff = 1
	if (+symbolBuff < +1) symbolBuff = 1
	if (+might < +1000) might = 1000		// character base might
	if (+skill < +0) skill = 0		// class skill damage
	if (+base < +1) base = 1			// character base damage min 1x
	if (+base > +1.56) base = 1.56	// character base damage max 56%
	if (+wpn < +0) wpn = 0			// weapon all damage
	if (+wpnAura < +0) wpnAura = 0	// weapon support aura
	if (+elder < +1) elder = 1			// elder multiplier min 1x
	if (+elder > +1.28) elder = 1.28		// elder multiplier max 28%
	if (+main < +1) main = 1			// main damage bonus
	if (+main > +2.36) main = 2.36		// main damage bonus max 136%
	if (+crit < +1) crit = 1
	if (+crit > +2.81) crit = 2.81	// crit damage bonus max 181%
	if (+comp < +0) comp = 0		// companion damage only used to calculate nightfall buff
	if (+troop < +1) troop = 1
	if (+troop > +1.6856) troop = 1.6856	// troop dmg max 68.56% (this value related to exo module buff)
	if (+armor < +1) armor = 1
	if (+armor > +1.144) armor = 1.144	// armor fracture max 14.4%
	if (+start < +1) start = 1
	if (+start > +1.59) start = 1.59		// damage at start max 59%
	if (+stun < +1) stun = 1
	if (+stun > +1.36) stun = 1.36	// stun max 36%
	if (+slow < +1) slow = 1
	if (+slow > +1.18) slow = 1.18	// slowed max 18%
	if (+chain < +1) chain = 1
	if (+chain > +1.24) chain = 1.24		// chain killing max 24%
	if (+strUnity < +1) strUnity = 1
	if (+strUnity > +1.8) strUnity = 1.8
	if (+artif < +1) artif = 1
	if (+artif > +1.35) artif = 1.35		// artifact bonus max 35%
	if (+atlasDmg < +1) atlasDmg = 1	// atlas adventure damage bonus
	if (+atlasDmg > +1.3) atlasDmg = 1.3
	if (+panthDmg < +1) panthDmg = 1	// damage bonus from pantheon
	if (+panthDmg > +1.12) panthDmg = 1.12	// pantheon damage bonus max 12%
	if (+atlasTroopDmg < +1) atlasTroopDmg = 1	// atlas troop damage bonus
	if (+atlasTroopDmg > +1.39) atlasTroopDmg = 1.39
	if (+node1 < +1) node1 = 1		// generic atlas node buff (class or symbol)
	if (+node2 < +1) node2 = 1		// generic atlas node buff (class or symbol)
	if (+suppMight < +1000 ) suppMight = 1000	// support's might
	if (+suppAura < +0) suppAura = 0			// support's aura power
	if (+mightGiven < +0) mightGiven = 0		// support's transferred might percentage
	if (+mightGiven > +0.8) mightGiven = 0.8	// transferred might max 80% (elder mercy)
	if (+enemies < +1) enemies = 1
	if (+stack < +0) stack = 0
	skill = Math.floor( skill )	// workaround
	if (enableHealth && enemyHealthCurrent <= 0) {
		sendAlert(7)	// no calculation if enemy health is 0
		return
	}
	if (skill === Number(0)) {
		sendAlert(6)	// if skill is less than 1, return and stop calculation
		return
	}
	let effect = select.options[select.selectedIndex].value	// get option value
	let effect2 = select2.options[select2.selectedIndex].value	// get option value
	let effect3 = select3.options[select3.selectedIndex].value	// get option value
	let effect4 = soloBonus.options[soloBonus.selectedIndex].value	// hall of travels bonus
	let multiplier = 1	// base multiplier is always 1
	let alertValue = 0	// send value for those attacks where the use of time is suggested
	stack = Math.floor( stack )	// workaround
	stack2 = Math.floor( stack2 )	// workaround
	stack3 = Math.floor( stack3 )	// workaround
// calculate player superiority bonus (+1% dmg done for every excess rank player has than monster, or -10% dmg done for every excess rank monster has)
	if ( (Number(plrRank) > Number(0)) && (Number(monsterRank) > Number(0)) )	// calculate only if both ranks are higher than 0
	{
		let superiorityMultiplier = 1
		if ( Number(plrRank) > Number(monsterRank) )
		{	// bonus
			superiorityMultiplier += ((plrRank - monsterRank) / 100)
			skill *= superiorityMultiplier
		}
		else
		{	// malus
			superiorityMultiplier += (((monsterRank - plrRank) / 100) * 10)
			skill /= superiorityMultiplier
		}
	}
// calculate skill damage value based on might and if we have percentage of transferred support's might, increase it
	if ( Number(might) >= Number(1000) )
	{
		/*	god increase might by 70% and damage dealt by 150%, temple of deeds
			nodes increases damage by an extra 20% and another 100% when in god		*/
		if ( isPlrGod )
		{
			might *= 1.7	// god form increases might by 70%
			skill *= 1.7	// multiply skill value by 70% to adapt it for increased might
			skill *= 2.5	// god form increase damage done by 150%
			skill *= 1.2	// hall of war, first node increases damage done by 20%
		}
		might /= 100	// subdivide by 100
		skill /= might	// subdivide skill by might value
		if ( (Number(mightGiven) > Number(0)) && !(isPlrSupp) )	// increase might if player is not support
		{
			if ( isSuppGod ) suppMight *= 1.7	// if support is in divine form, increase its might by 70%
			suppMight *= mightGiven	// get the support's might percentage
			suppMight /= 100		// subdivide by 100
			if ( wings ) might += (suppMight * alcBiotrap)
			might += suppMight		// add support's might percentage to player's might
		}
		skill *= might	// calcolate final skill damage value based on might
	}
// check if player is playing solo and in god form, then apply selected buff
	if ( isPlrGod )
	{
		if ( monsterDmg ) skill *= 2		// hall of war, third node increases damage done to monsters by 100%
		if ( effect4 == "soloGroup" ) skill *= 1.5		// scorching light 40% + warming light 10%
		if ( effect4 == "soloParty" ) skill *= 1.85	// scorching light 70% + warming light 15%
		if ( defSuppBonus ) skill *= 1.3	// increases damage by 30% when solo if in defense or support class
	}
// check if player is support, in case add values to base damage bonus
	if ( isPlrSupp )
	{		
		plrSuppAura += 0.2	// support class ability increases damage by 20%
		if ( charAura )
		{
			plrSuppAura += 0.24 // support node give extra 24% to base damage
			if ( isPlrGod ) plrSuppAura += 0.36 // support node give extra 36% to base damage if in god form
		}
		base += plrSuppAura	// add support aura to base damage bonus
	}
// apply class skill or talents buff if value is greater than 1
	if ( Number(classBuff) > Number(1) ) skill *= classBuff
	if ( Number(a9Buff) > Number(1) ) skill *= a9Buff
	if ( Number(symbolBuff) > Number(1) ) skill *= symbolBuff
// apply strength in unity buff in case
	if ( Number(strUnity) > Number(1) ) skill *= strUnity
// if checked apply cathedral seals
	if ( dmgSeal ) skill *= 1.03	// all damage seal increase damage by 3%
	if ( cSeal ) skill *= 1.1	// class seal +10% damage increase
	if ( aSeal ) skill *= 1.05	// adventure seal +5% damage increase
// use verdict buff if checked
	if ( useVerdict )
	{
		if (Number(verdict) < Number(1)) verdict = 1
		if (Number(verdict) > Number(1.2)) verdict = 1.2
		skill *= verdict
	}
// apply pantheon damage bonus
	if ( Number(panthDmg) > Number(1) ) skill *= panthDmg	// max 12%
// if values are higher than 1, calculate generic atlas buff (related to class skill or symbols)
	if ( Number(node1) > Number(1) ) skill *= node1
	if ( Number(node2) > Number(1) ) skill *= node2
// if checked apply premium damage bonus
	if ( premiumDmg ) skill *= 1.03	// premium increases all damage by 3%
// calculate weapon special effect, some of these need stacks to increase damage
	switch ( effect )	// select
	{
		default: case "genEffect":
		{
			multiplier += (tracer * stack)		// stack without limits (General)
			break
		}
		case "tracer":		// outlaw's tracer (Sureshot)
		{
			if ( Number(stack) > Number(16) ) stack = 16	// standard tracer max 16 stacks
			multiplier += (tracer * stack)
			break
		}
		case "viperHunters": { if ( Number(stack) > Number(20) ) skill *= 0.65 }	// outlaw's destroyed viper mark effect (65% of Sureshot) (no break to fall into viperMark effect)
		case "viperMark":	// outlaw's viper mark effect (Sureshot)
		{
			if ( Number(stack) > Number(100) ) stack = 100	// viper mark max 100 stacks
			if ( Number(stack) > Number(20) )	// starting from 20th mark, apply special effect
			{
				if ( stack % 2 != 0 ) stack += 1	// apply in pairs
				let newMark = (stack - 20)
				multiplier += ((tracer + (viperMark * newMark)) * stack)
			}
			else
			{
				multiplier += (tracer * stack)
			}
			break
		}
		case "dodgeThat":	// outlaw's Dodge That
		{
			if ( Number(stack) > Number(16) ) stack = 16
			multiplier += (tracer * stack)
			skill *= 3
			break
		}
		case "ironHeart":	// berserker's iron heart effect (Gladiator Strike)
		{
			switch ( enableTime )
			{
				case false:
				{
					let bakSkill = skill
					for ( let i = 0; i < 9; i++ )	// gladiator strike hits 5 times per 9 uses
					{	// every use increases damage, i think 10% per stack
						if ( Number(i) > Number(0) )
							skill += (bakSkill * (1 + (tracer * i)))
					}
					alertValue = 1
					break
				}
				case true:
				{
					skill /= 5	// get single attack damage
					break
				}
			}
			multiplier += alcBiotrap	// gladiator strike 40% damage bonus
			break
		}
		case "gvardar":		// berserker's gvardar effect (Crippling Bow)
		{
			switch ( enableTime )
			{
				case false:
				{
					if ( Number(a9Buff) > Number(1) ) skill /= a9Buff	// remove a9 buff in case
					let bakSkill = (skill / 4)	// get single attack damage
					let skDmg = 0	// value boosted by a9 talent
					skill = 0	// reset skill value to fill later
					for ( let i = 0; i < 10; i++ )	// crippling bow deals damage 10 times in one go
					{	// starting from 4th attack, crippling bow damage is 4 times higher
						if ( Number(a9Buff) > Number(1) )
						{
							if ( Number(a9Buff) > Number(2.5) ) a9Buff = 2.5
							skDmg = (bakSkill * a9Buff)
							if ( Number(i) < Number(3) ) skill += skDmg
						}
						if ( Number(i) > Number(2) ) skill += ((bakSkill * 4) + skDmg)
						else
						{
							if ( Number(a9Buff) <= Number(1) )
								skill += bakSkill	// up to 3 continuous attacks, damage is standard
						}
					}
					alertValue = 2
					break
				}
				case true:
				{
					if ( Number(a9Buff) > Number(1) ) skill /= a9Buff	// remove a9 buff in case
					skill /= 4	// need to get the effective single attack damage
					break
				}
			}
			break
		}
		case "bloodlust1":	// berserker's ragnar bloodlust effect (Firestorm)
		{
			if ( Number(stack) > Number(100) ) stack = 100	// bloodlust max 100 stacks
			if ( enableTime ) skill /= 9	// get single firestorm attack damage (9 hit max)
			else alertValue = 3
			multiplier += (blade * stack)
			break
		}
		case "bloodlust2":	// berserker's ragnar bloodlust effect (Whirlwind)
		{
			if ( Number(stack) > Number(100) ) stack = 100	// bloodlust max 100 stacks
			if ( enableTime ) skill /= 4	// get single whirlwind attack damage (4 hit max)
			else alertValue = 4
			multiplier += (blade * stack)
			break
		}
		case "slaughter":	// revenant's slaughter skill (stacks will simulate Baron Samedi's boost)
		{
			if ( !enableTime ) alertValue = 5
			if ( Number(stack) > Number(10) ) stack = 10	// baron samedi's idol of death 100% bonus
			multiplier += (tracer * stack)		// max 100% bonus
			break
		}
	}
	if ( Number(multiplier) > Number(1) ) skill *= multiplier	// multiply class skill damage based on weapon effect
// if stack2 value is greater than 0, calculate artifact special effect
	if ( Number(stack2) > Number(0) )
	{
		multiplier = 1	// reinizialize multiplier
		switch ( effect2 )
		{
			default: { break }	// case null - do nothing
			case "detector":
			{
				if (Number(stack2) > Number(5)) stack2 = 5	// detector max 5 stacks
				multiplier += (vulnerability * stack2)
				break
			}
			case "blade":
			{
				if (Number(stack2) > Number(10)) stack2 = 10	// blade max 10 stacks
				multiplier += (blade * stack2)
				break
			}
		}
		skill *= multiplier
	}
// if euphomine is checked, calculate stimulants buff
	if ( useStims )
	{
		if ( Number(stimsValue) < Number(0.3) ) stimsValue = 0.3	// min buff value is 30% (red euphomine)
		if ( Number(stimsValue) > Number(0.3) )
		{
			wpnAura = 0	// green euphomine overrides support aura
			base -= plrSuppAura	// remove support aura from base damage bonus
		}
		if ( Number(stimsValue) > Number(1) ) stimsValue = 1	// max buff value is 100% (green euphomine)
		base += stimsValue	// stimulants adds value to character's base damage bonus
	}
// if player is not support and if support's might is greater than 1000, then we have a support player, so calculate aura buff
	if ( !isPlrSupp )
	{
		if ( Number(suppMight) > Number(1000) )
		{
			if ( !(useStims) || (Number(stimsValue) === Number(0.3)) )
			{
				if ( isSuppGod ) suppAura += 0.36	// extra 36% of support aura power if support is god
				suppAura += 0.44	// extra 20% base + 24% of support aura power coming from temple of deeds
				base += suppAura	// boost only if we are using red euphomine or if we are not
			}
		}
	}
// apply soundweaver buffs
	if ( effect3 != "null" )
	{
		multiplier = 1	// reinizialize multiplier
		switch ( effect3 )
		{
			default: { break }	// case null - do nothing
			case "rythm1":
			{
				if ( wings ) multiplier += (shower * alcBiotrap)
				multiplier += shower	// use alc shower const since same buff value
				break
			}
			case "rythmOC":
			{
				if ( wings ) multiplier += ((shower * alcBiotrap) * 2)
				multiplier += (shower * 2)	// overcharge
				break
			}
			case "swUlti":
			{
				if ( wings ) multiplier += (shower * alcBiotrap)
				multiplier += shower
				skill *= multiplier		// rythm of strength
				skill *= multiplier		// rythm of courage
				multiplier = (1 + tracer)	// make rythm stronger by 10% and multiply again out of this if block
				if ( wings ) multiplier += (tracer * alcBiotrap)
				break
			}
		}
		skill *= multiplier	// multiply skill
	}
// apply buffs when checked
	if ( sunBless )		// blessing of the sun
	{
		multiplier = 1	// reinizialize multiplier
		if ( wings ) multiplier += (bless * alcBiotrap)
		multiplier += bless
		skill *= multiplier
	}
	if ( iLight )		// incarnation of light
	{
		multiplier = 1	// reinizialize multiplier
		if ( wings ) multiplier += (lightInc * alcBiotrap)
		multiplier += lightInc
		skill *= multiplier
	}
	if ( eShower )		// energy shower
	{
		multiplier = 1	// reinizialize multiplier
		if ( wings ) multiplier += (shower * alcBiotrap)
		multiplier += shower
		skill *= multiplier
	}
	if ( biotrap )		// biotrap
	{
		multiplier = 1	// reinizialize multiplier
		multiplier += alcBiotrap
		skill *= multiplier
	}
	if ( hammer )		// nerion's hammer
	{
		multiplier = 1	// reinizialize multiplier
		multiplier += macha_hammer
		skill *= multiplier
	}
	if ( macha )		// machavann's upgrade
	{
		if ( !isPlrSupp )
		{
			multiplier = 1	// reinizialize multiplier
			if ( wings ) multiplier += (macha_hammer * alcBiotrap)
			multiplier += macha_hammer
			skill *= multiplier
		}
	}
// if stack3 value is greater than 0, calculate nightfall buff
	if ( Number(stack3) > Number(0) )
	{
		multiplier = 1	// reinizialize multiplier
		if (Number(comp) > Number(1.81)) comp = 1.81	// comp damage max 181%
		if (Number(stack3) > Number(3)) stack3 = 3	// max 3 stacks
		if (Number(compStat) < Number(0)) compStat = 0
		if (Number(compStat) > Number(0.33)) compStat = 0.33
		let nightfall = (comp * compStat)
		if ( wings ) multiplier += (nightfall * alcBiotrap)
		multiplier += (nightfall * stack3)
		skill *= multiplier
	}
// CALCULATION
	switch ( enableTime )
	{
		// SINGLE DAMAGE (better use with skills that deal one attack)
		case false:
		{
			finalDmg = getDamageValue(skill,elder,base,wpn,wpnAura,main,troop,
				artif,start,stun,slow,chain,armor,atlasDmg,atlasTroopDmg)
			// IF CRIT
			if ( (Number(crit) > Number(1)) )	// crit with stat only
			{
				critCalc = getDamageValue(skill,elder,base,wpn,wpnAura,crit,troop,
					artif,start,stun,slow,chain,armor,atlasDmg,atlasTroopDmg)
				finalDmg += critCalc	// ADD TO FINAL DMG
			}
			output.innerText = digit.format( Math.floor(finalDmg) )	// OUTPUT
			dmgChar1.innerText = damageChar(finalDmg)	// OUTPUT
			if ( enableHealth ) damageEnemy(finalDmg)		// if enabled, decreases enemy health
			// send alert to suggest time use for best calculation of some skills dmg
			if ( Number(alertValue) != Number(0) ) sendAlert(alertValue)
			break
		}
		// TIME BASED DAMAGE (this output simulate damage from continuous attacks)
		case true:
		{
			timeDamageOnGoing = true
			let delay = 1000	// time delay for inner cycle
			let timeOutput = document.getElementById("timeOutputDmg")	// TIME OUTPUT
			let critOutput = document.getElementById("critTime")	// CRIT OUTPUT
			let timerOutput = document.getElementById("timer")	// TIMER OUTPUT
			let totalTimeOutput = document.getElementById("totalTimer")	// TOTAL TIMER OUTPUT
			let startCnt = 0	// damage to start counter, after 15 attacks buff will be removed
			let critCnt = 0	// critical hits counter for output
			let armorTime = 1	// armor fracture attacks counter, min 1 - max 5
			let armorFr = 1	// armor fracture value that will increased for buff damage
			let armorStack = (armor - 1)	// get armor fracture percentage for stacks
			armorStack /= 4	// take 1/4 of the value that will multiplied later
			multiplier = 1		// reset multiplier
			if ( Number(atkNum) < Number(1) ) atkNum = 1	// number of attacks min 1, max unlimited
			if ( Number(atkTime) < Number(1) ) atkTime = 1		// attacks per second min 1
			if ( Number(atkTime) > Number(5) ) atkTime = 5		// attacks per second max 5
			if ( Number(critChance) < Number(5) ) critChance = 5	// base crit chance
			if ( Number(critChance) > Number(100) ) critChance = 100	// max chance including weapons and other stuff
			if ( Number(crit) < Number(1.3) ) crit = 1.3	// here calculate base crit damage in case
			totalTimeOutput.innerText = (atkNum - 1)	// total time is equal to max attacks amount
			for ( let i = 0; i < atkNum; i++ )
			{	// time based cycle
				timeoutArrayOne.push( setTimeout(() => {
					if ( Number(start) > Number(1) ) startCnt += 1
					if ( effect == "ironHeart" )
					{	// increase damage at every attack, i think 10% each
						delay = 500	// half the delay to simulate gladiator strike dmg overtime
						classEffectCnt += 1	// determine when increase dmg multiplier
						if ( Number(classEffectCnt) > Number(1) ) multiplier += tracer // increase dmg at each attack
					}
					for ( let j = 0; j < atkTime; j++ )
					{	// time based inner cycle
						timeoutArrayTwo.push( setTimeout(() => {
							for ( let z = 0; z < enemies; z++ )
							{	// execute this chunk more times if multiple enemies are found
								let bakSkill = skill	// backup skill value since we need original for each iteration
								if ( effect == "ironHeart" ) bakSkill *= multiplier
								if ( effect == "gvardar" )
								{	// gvardar crippling bow hits 10 times
									let skDmg = 0	// used to store values boosted by talent
									classEffectCnt += 1	// determine the use of weapon effect
									if ( Number(a9Buff) > Number(1) )
									{	// single damage value boosted by a9 Talent
										if ( Number(a9Buff) > Number(2.5) ) a9Buff = 2.5	// a9 talent max 150% boost
										skDmg = (bakSkill * a9Buff)
										if ( Number(classEffectCnt) < Number(4) ) bakSkill = skDmg
									}
									// from 4th attack, damage is increased 4 times, in case boosted by talent
									if ( Number(classEffectCnt) > Number(3) ) bakSkill = ((bakSkill * 4) + skDmg)
								}
								if ( effect == "slaughter" )
								{	// slaughter deals 33% more damage for every enemy behind the first one, supposing this by number
									classEffectCnt += 1	// determine the amount of damage bonus done by slaughter
									if ( Number(classEffectCnt) > Number(1) )
									{
										multiplier = (1 + (0.33 * (classEffectCnt - 1)))
										if ( Number(multiplier) > Number(2) ) multiplier = 2	// max 100% bonus
										bakSkill *= multiplier
									}
								}
								if ( (Number(armor) > Number(1)) && (Number(armorTime) <= Number(5)) )	// calculate armor fracture buff overtime
								{
									if (Number(armorTime) > Number(1))
										armorFr = 1 + (armorStack * (armorTime - 1))
									armorTime += 1
								}
								if ( Number(startCnt) > Number(15) ) start = 1 // remove start buff after 15 attacks (guess 1 attack per second)
								finalDmg = getDamageValue(bakSkill,elder,base,wpn,wpnAura,main,troop,
									artif,start,stun,slow,chain,armorFr,atlasDmg,atlasTroopDmg)
								if ( Number(critChance) >= Number(100) ||
									random() <= Number(critChance) )	// crit if random is within the range
								{
									critCalc = getDamageValue(bakSkill,elder,base,wpn,wpnAura,crit,troop,
										artif,start,stun,slow,chain,armorFr,atlasDmg,atlasTroopDmg)
									if ( effect == "ironHeart" ) critCalc *= multiplier	// give stacks to crit dmg
									finalDmg += critCalc
									critCnt += 1	// increase crit counter
								}
								dmgOvertime += finalDmg	// value increased at each iteration
								output.innerText = digit.format( Math.floor(finalDmg) )	// output (single attack)
								timeOutput.innerText = digit.format( Math.floor(dmgOvertime) )	// output (continuous attacks)
								dmgChar1.innerText = damageChar(finalDmg)	// output (damage character)
								dmgChar2.innerText = damageChar(dmgOvertime)	// output (damage character)
								critOutput.innerText = critCnt		// show how many times critical damage was done
								if ( enableHealth )		// if enabled, decreases enemy health
								{
									damageEnemy(finalDmg)	// subtract enemy's health
									if (enemyHealthCurrent <= 0) resetTimer()	// if enemy is killed, interrupt the calculation
								}
							}
						}, (delay / atkTime) * j))
					}
					timerOutput.innerText = i	// shows how much time passed
					if (Number(i + 1) === Number(atkNum)) timeDamageOnGoing = false
				}, 1000 * i))
			}
			break
		}
	}
}

function sendAlert( type )
{
	switch ( type )
	{
		case 1:
			alert("For best calculation of Gladiator Strike with Iron Heart weapon use Time menu.\n"
				+ "Suggested parameters for 45 hits:\nNumber of Attacks: 9\nAttacks per Second: 5")
			break
		case 2:
			alert("For best calculation of Crippling Bow with Gvardar weapon use Time menu.\n"
				+ "Suggested parameters for 10 hits:\nNumber of Attacks: 5\nAttacks per Second: 2")
			break
		case 3:
			alert("For best calculation of Firestorm with Ragnar weapon use Time menu.\n"
				+ "Suggested parameters for 9 hits:\nNumber of Attacks: 3\nAttacks per Second: 3")
			break
		case 4:
			alert("For best calculation of Whirlwind with Ragnar weapon use Time menu.\n"
				+ "Suggested parameters for 4 hits:\nNumber of Attacks: 2\nAttacks per Second: 2")
			break
		case 5:
			alert("For best calculation of Slaughter use Time menu.\n"
				+ "The damage is increased by 33% for each enemy behind the first one "
				+ "up to 100% bonus. For this increase the value of 'Enemies hitted' field.\n"
				+ "For Baron Samedi 'Idol of Death' effect use 'Stack Value' field, up to 100% bonus.")
			break
		case 6:
			alert("\"Class Skill Damage\" is empty.")
			break
		case 7:
			alert("Set an amount of \"Enemy Health\" before calculation")
		break
	}
}
