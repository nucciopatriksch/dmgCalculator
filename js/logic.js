/**
 * 
 */
// WEAPON
const tracer = 0.1;		// 0.1 equals to 10%
const viperMark = 0.02;		// 0.02 equals to 2%
// ARTIFACT
const vulnerability = 0.08;	// 0.08 equals to 8%
const blade = 0.04;		// 0.04 equals to 4%
// DIVINE WEAPON
const macha_hammer = 0.15;	// 0.15 equals to 15%
// BUFFS
const bless = 0.35;			// 0.35 equals to 35%
const lightInc = 0.5;		// 0.5 equals to 50%
const shower = 0.3			// 0.3 equals to 30%
const alcBiotrap = 0.4;		// 0.4 equals to 40%

function changeLang()
{
	// HREF
	let a = document.getElementById("linkEng");
	let b = document.getElementById("linkIta");
	// LANG BUTTONS
	let c = document.getElementById("langEng");
	let d = document.getElementById("langIta");
	// DESCRIPTION
	let e = document.getElementById("descEng");
	let f = document.getElementById("descIta");
	// OUTPUT
	let g = document.getElementById("outputEng");
	let h = document.getElementById("outputIta");
	// LAST INFO
	let i = document.getElementById("lastInfoEng");
	let j = document.getElementById("lastInfoIta");
	// CALC BUTTONS
	let k = document.getElementById("calcButtonEng");
	let l = document.getElementById("clearButtonEng");
	let m = document.getElementById("calcButtonIta");
	let n = document.getElementById("clearButtonIta");
	// AUTHOR
	let o = document.getElementById("authorEng");
	let p = document.getElementById("authorIta");
	// TIME OUTPUT
	let q = document.getElementById("outputEng2");
	let r = document.getElementById("outputIta2");
	// SET VISIBLE ITEMS ORDER
	a.hidden = ((a.hidden)? false : true);
	b.hidden = ((b.hidden)? false : true);
	c.hidden = ((c.hidden)? false : true);
	d.hidden = ((d.hidden)? false : true);
	e.hidden = ((e.hidden)? false : true);
	f.hidden = ((f.hidden)? false : true);
	g.hidden = ((g.hidden)? false : true);
	h.hidden = ((h.hidden)? false : true);
	i.hidden = ((i.hidden)? false : true);
	j.hidden = ((j.hidden)? false : true);
	k.hidden = ((k.hidden)? false : true);
	l.hidden = ((l.hidden)? false : true);
	m.hidden = ((m.hidden)? false : true);
	n.hidden = ((n.hidden)? false : true);
	o.hidden = ((o.hidden)? false : true);
	p.hidden = ((p.hidden)? false : true);
	q.hidden = ((q.hidden)? false : true);
	r.hidden = ((r.hidden)? false : true);
}

function showEffects()
{
// SHOW TABLE EFFECTS
	let a = document.getElementById("tableOfEffects");
	a.hidden = ((a.hidden)? false : true );
}

function showSuppAura()
{
	let a = document.getElementById("charAura");
	let b = document.getElementById("auraDesc");
	a.hidden = ((a.hidden)? false : true );
	b.hidden = ((b.hidden)? false : true );
}

function showVerdictStacks()
{
	let a = document.getElementById("verdictDesc");
	let b = document.getElementById("verdictValue");
	a.hidden = ((a.hidden)? false : true );
	b.hidden = ((b.hidden)? false : true );
}

function showTravelBonus()
{
	let a = document.getElementById("travelDesc");
	let b = document.getElementById("soloDesc");
	let c = document.getElementById("defSuppDesc");
	let d = document.getElementById("multiSelect4");
	let e = document.getElementById("defSuppBonus");
	let f = document.getElementById("monsterDmgDesc");
	let g = document.getElementById("monsterDmg");
	a.hidden = ((a.hidden)? false : true );
	b.hidden = ((b.hidden)? false : true );
	c.hidden = ((c.hidden)? false : true );
	d.hidden = ((d.hidden)? false : true );
	e.hidden = ((e.hidden)? false : true );
	f.hidden = ((f.hidden)? false : true );
	g.hidden = ((g.hidden)? false : true );
}

function useStimulants()
{
	let a = document.getElementById("stimsDesc");
	let b = document.getElementById("stimsValue");
	a.hidden = ((a.hidden)? false : true );
	b.hidden = ((b.hidden)? false : true );
}

function enableTimeDamage()
{
	let a = document.getElementById("atkNumDesc");
	let b = document.getElementById("atkNum");
	let c = document.getElementById("atkTimeDesc");
	let d = document.getElementById("atkTime");
	let e = document.getElementById("timeDamageOutput");
	let f = document.getElementById("critChanceDesc");
	let g = document.getElementById("critChance");
	a.hidden = ((a.hidden)? false : true );
	b.hidden = ((b.hidden)? false : true );
	c.hidden = ((c.hidden)? false : true );
	d.hidden = ((d.hidden)? false : true );
	e.hidden = ((e.hidden)? false : true );
	f.hidden = ((f.hidden)? false : true );
	g.hidden = ((g.hidden)? false : true );
}

function deleteForm()
{
	const inputs = document.querySelectorAll('#might, #skillDmg, #baseDmg, #classBuff, #a9Buff,'
		+ ' #weaponDmg, #weaponAura, #elderMulti, #mainDmg, #critDmg, #critChance, #compDmg,'
		+ ' #troopDmg, #armorFracture, #startDmg, #stunDmg, #slowDmg, #chainDmg, #artifactDmg,'
		+ ' #stack, #stack2, #stack3, #compStat, #suppMight, #aura, #mightPercentage, #plrRank,'
		+ ' #monsterRank, #atlasDmg, #atlasTroopDmg, #atkNum, #atkTime, #symbolBuff, #guildDmg');
	inputs.forEach(input => {input.value = ""});
}

function calculateDamage()
{
	let output = document.getElementById("outputDmg");	// OUTPUT VAR
	let timeOutput = document.getElementById("timeOutputDmg");	// TIME OUTPUT VAR
/*				FIRST MENU				*/
// CLASS
	let skill = document.getElementById("skillDmg").value;
	let classBuff = 1 + (document.getElementById("classBuff").value / 100);
	let a9Buff = 1 + (document.getElementById("a9Buff").value / 100);
	let symbolBuff = 1 + (document.getElementById("symbolBuff").value / 100);
// STATS
	let isPlrGod = document.getElementById("isPlrGod").checked;	// if player in divine form
	let monsterDmg = document.getElementById("monsterDmg").checked;	// if god, check if we have dmg to monster bonus
	let might = document.getElementById("might").value;
	let base = 1 + (document.getElementById("baseDmg").value / 100);
	let elder = 1 + (document.getElementById("elderMulti").value / 100);
	let armor = 1 + (document.getElementById("armorFracture").value / 100);
	let main = 1 + (document.getElementById("mainDmg").value / 100);
	let crit = 1 + (document.getElementById("critDmg").value / 100);
	let critChance = document.getElementById("critChance").value;
	let comp = (document.getElementById("compDmg").value / 100);
	let troop = 1 + (document.getElementById("troopDmg").value / 100);
	let start = 1 + (document.getElementById("startDmg").value / 100);
	let stun = 1 + ( document.getElementById("stunDmg").value / 100);
	let slow = 1 + (document.getElementById("slowDmg").value / 100);
	let chain = 1 + (document.getElementById("chainDmg").value / 100);
	let charAura = document.getElementById("charAura").checked;		// character support aura boost
	let isPlrSupp = document.getElementById("isPlrSupport").checked;	// if player is support
	let plrSuppAura = 0;	// player's base support aura power
/*				SECOND MENU				*/
// SUPERIORITY CALCULATION
	let plrRank = document.getElementById("plrRank").value;		// player rank
	let monsterRank = document.getElementById("monsterRank").value;	// monster rank
// WEAPON STATS
	let wpn = (document.getElementById("weaponDmg").value / 100);		// weapon damage
	let wpnAura = (document.getElementById("weaponAura").value / 100);	// weapon support aura
// ARTIFACT BONUS
	let artif = 1 + (document.getElementById("artifactDmg").value / 100);	// artifact damage
// CATHEDRAL SEALS
	let dmgSeal = document.getElementById("sealAllDmg").checked;	// all damage bonus +3%
	let cSeal = document.getElementById("sealClass").checked;	// class seal
	let aSeal = document.getElementById("sealAdv").checked;	// adventure seal
// VERDICT
	let useVerdict = document.getElementById("useVerdict").checked;
	let verdict = 1 + (document.getElementById("verdictValue").value / 100);
// HALL OF TRAVELS
	let soloBonus = document.getElementById("multiSelect4");
	let defSuppBonus = document.getElementById("defSuppBonus").checked;
// ATLAS
	let atlasDmg = 1 + (document.getElementById("atlasDmg").value / 100);
	let atlasTroopDmg = 1 + (document.getElementById("atlasTroopDmg").value / 100);
// MISC
	let panthDmg = 1 + (document.getElementById("guildDmg").value / 100);
	let premiumDmg = document.getElementById("premiumDmg").checked;
/* 				EFFECTS MENU				*/
// WEAPON EFFECT
	let stack = document.getElementById("stack").value;	// weapon
	let select = document.getElementById("multiSelect");	// weapon
// ARTIFACT EFFECT
	let stack2 = document.getElementById("stack2").value;	// artifact
	let select2 = document.getElementById("multiSelect2");	// artifact
// EUPHOMINE
	let useStims = document.getElementById("useStims").checked;			// euphomine
	let stimsValue = (document.getElementById("stimsValue").value / 100);	// euphomine
// SUPPORT
	let suppMight = document.getElementById("suppMight").value;		// support's might
	let suppAura = (document.getElementById("aura").value / 100);	// support's aura
	let mightGiven = (document.getElementById("mightPercentage").value / 100);	// support
// BUFF EFFECT
	let select3 = document.getElementById("multiSelect3");		// soundweaver
	let wings = document.getElementById("wings").checked;		// wings of skies artifact - use biotrap const
	let sunBless = document.getElementById("bless").checked;	// lightbinder's bless
	let iLight = document.getElementById("light").checked;		// lightbinder's ulti
	let eShower = document.getElementById("shower").checked;	// alchemist's shower	
	let biotrap = document.getElementById("biotrap").checked;	// alchemist's biotrap
	let hammer = document.getElementById("nerion").checked;		// nerion's hammer
	let macha = document.getElementById("machavann").checked;	// machavann upgrade
// EXO NIGHTFALL
	let stack3 = document.getElementById("stack3").value;			// nightfall
	let compStat = (document.getElementById("compStat").value / 100);	// nightfall
// DAMAGE OUTPUT VARIABLE
	let finalDmg = 0;
	let critCalc = 0;
	let dmgOvertime = 0;
// TIME VARIABLES
	let enableTime = document.getElementById("enableTime").checked;	// time enabler
	let atkNum = document.getElementById("atkNum").value;		// number of attacks
	let atkTime = document.getElementById("atkTime").value;		// attacks per second
// CHECKS
	if (+classBuff < +1) classBuff = 1;
	if (+a9Buff < +1) a9Buff = 1;
	if (+symbolBuff < +1) symbolBuff = 1;
	if (+might < +1000) might = 1000;		// character base might
	if (+skill < +0) skill = 0;		// class skill damage
	if (+base < +1) base = 1;			// character base damage min 1x
	if (+base > +1.56) base = 1.56;	// character base damage max 56%
	if (+wpn < +0) wpn = 0;			// weapon all damage
	if (+wpnAura < +0) wpnAura = 0;	// weapon support aura
	if (+elder < +1) elder = 1;			// elder multiplier min 1x
	if (+elder > +1.28) elder = 1.28;		// elder multiplier max 28%
	if (+main < +1) main = 1;			// main damage bonus
	if (+main > +2.36) main = 2.36;		// main damage bonus max 136%
	if (+crit < +1) crit = 1;
	if (+crit > +2.81) crit = 2.81;	// crit damage bonus max 181%
	if (+comp < +0) comp = 0;		// companion damage only used to calculate nightfall buff
	if (+troop < +1) troop = 1;
	if (+troop > +1.6856) troop = 1.6856;	// troop dmg max 68.56% (this value related to exo module buff)
	if (+armor < +1) armor = 1;
	if (+armor > +1.144) armor = 1.144;	// armor fracture max 14.4%
	if (+start < +1) start = 1;
	if (+start > +1.59) start = 1.59;		// damage at start max 59%
	if (+stun < +1) stun = 1;
	if (+stun > +1.36) stun = 1.36;	// stun max 36%
	if (+slow < +1) slow = 1;
	if (+slow > +1.18) slow = 1.18;	// slowed max 18%
	if (+chain < +1) chain = 1;
	if (+chain > +1.24) chain = 1.24;		// chain killing max 24%
	if (+artif < +1) artif = 1;
	if (+artif > +1.35) artif = 1.35;		// artifact bonus max 35%
	if (+atlasDmg < +1) atlasDmg = 1;	// atlas adventure damage bonus
	if (+atlasDmg > +1.3) atlasDmg = 1.3;
	if (+panthDmg < +1) panthDmg = 1;	// damage bonus from pantheon
	if (+panthDmg > +1.12) panthDmg = 1.12;	// pantheon damage bonus max 12%
	if (+atlasTroopDmg < +1) atlasTroopDmg = 1;	// atlas troop damage bonus
	if (+atlasTroopDmg > +1.39) atlasTroopDmg = 1.39;
	if (+suppMight < +1000 ) suppMight = 1000;	// support's might
	if (+suppAura < +0) suppAura = 0;			// support's aura power
	if (+mightGiven < +0 ) mightGiven = 0;		// support's transferred might percentage
	if (+mightGiven > +0.8 ) mightGiven = 0.8;	// transferred might max 80% (elder mercy)
	if (+stack < +0) stack = 0;
	skill = Math.floor( skill );	// workaround
	let effect = select.options[select.selectedIndex].value;	// get option value
	let effect2 = select2.options[select2.selectedIndex].value;	// get option value
	let effect3 = select3.options[select3.selectedIndex].value;	// get option value
	let effect4 = soloBonus.options[soloBonus.selectedIndex].value;	// hall of travels bonus
	let multiplier = 1;	// base multiplier is always 1
	stack = Math.floor( stack );	// workaround
	stack2 = Math.floor( stack2 );	// workaround
	stack3 = Math.floor( stack3 );	// workaround
// calculate player superiority bonus (+1% dmg done for every excess rank player has than monster, or -10% dmg done for every excess rank monster has)
	if ( (Number(plrRank) > Number(0)) && (Number(monsterRank) > Number(0)) )	// calculate only if both ranks are higher than 0
	{
		let superiorityMultiplier = 1;
		if ( Number(plrRank) > Number(monsterRank) )
		{	// bonus
			superiorityMultiplier += ((plrRank - monsterRank) / 100);
			skill *= superiorityMultiplier;
		}
		else
		{	// malus
			superiorityMultiplier += (((monsterRank - plrRank) / 100) * 10);
			skill /= superiorityMultiplier;
		}
	}
// calculate skill damage value based on might and if we have percentage of transferred support's might, increase it
	if ( Number(might) >= Number(1000) )
	{
		/*	god increase might by 70% and damage dealt by 150%, temple of deeds
			nodes increases damage by an extra 20% and another 100% when in god		*/
		if ( isPlrGod )
		{
			might *= 1.7;	// god form increases might by 70%
			skill *= 1.7;	// multiply skill value by 70% to adapt it for increased might
			skill *= 2.5;	// god form increase damage done by 150%
			skill *= 1.2;	// hall of war, first node increases damage done by 20%
		}
		might /= 100;	// subdivide by 100
		skill /= might;	// subdivide skill by might value
		if ( Number(mightGiven) > Number(0) )
		{
			suppMight *= mightGiven;	// get the support's might percentage
			suppMight /= 100;		// subdivide by 100
			if ( wings ) might += (suppMight * alcBiotrap);
			might += suppMight;		// add support's might percentage to player's might
		}
		skill *= might;	// calcolate final skill damage value based on might
	}
// check if player is playing solo and in god form, then apply selected buff
	if ( isPlrGod )
	{
		if ( monsterDmg ) skill *= 2;		// hall of war, third node increases damage done to monsters by 100%
		if ( effect4 == "soloGroup" ) skill *= 1.5;		// scorching light 40% + warming light 10%
		if ( effect4 == "soloParty" ) skill *= 1.85;	// scorching light 70% + warming light 15%
		if ( defSuppBonus ) skill *= 1.3;	// increases damage by 30% when solo if in defense or support class
	}
// check if player is support, in case add values to base damage bonus
	if ( isPlrSupp )
	{		
		plrSuppAura += 0.2;	// support class ability increases damage by 20%
		if ( charAura )
		{
			plrSuppAura += 0.24; // support node give extra 24% to base damage
			if ( isPlrGod ) plrSuppAura += 0.36; // support node give extra 36% to base damage if in god form
		}
		base += plrSuppAura;	// add support aura to base damage bonus
	}
// apply class skill or talents buff if value is greater than 1
	if ( Number(classBuff) > Number(1) ) skill *= classBuff;
	if ( Number(a9Buff) > Number(1) ) skill *= a9Buff;
	if ( Number(symbolBuff) > Number(1) ) skill *= symbolBuff;
// if checked apply cathedral seals
	if ( dmgSeal ) skill *= 1.03;	// all damage seal increase damage by 3%
	if ( cSeal ) skill *= 1.1;	// class seal +10% damage increase
	if ( aSeal ) skill *= 1.05;	// adventure seal +5% damage increase
// use verdict buff if checked
	if ( useVerdict )
	{
		if (Number(verdict) < Number(1)) verdict = 1;
		if (Number(verdict) > Number(1.2)) verdict = 1.2;
		skill *= verdict;
	}
// apply pantheon damage bonus
	if ( Number(panthDmg) > Number(1) ) skill *= panthDmg;	// max 12%
// if checked apply premium damage bonus
	if ( premiumDmg ) skill *= 1.03;	// premium increases all damage by 3%
// calculate weapon special effect, some of these need stacks to increase damage
	switch ( effect )	// select
	{
		default: case "genEffect":
		{
			multiplier += (tracer * stack);		// stack without limits
			break;
		}
		case "tracer":		// outlaw's tracer
		{
			if ( Number(stack) > Number(16) ) stack = 16;	// standard tracer max 16 stacks
			multiplier += (tracer * stack);
			break;
		}
		case "viperMark":	// outlaw's viper mark effect
		{
			if ( Number(stack) > Number(100) ) stack = 100;	// viper mark max 100 stacks
			if ( Number(stack) > Number(20) )	// starting from 20th mark, apply special effect
			{
				if ( stack % 2 != 0 ) stack += 1;	// apply in pairs
				let newMark = (stack - 20);
				multiplier += ((tracer + (viperMark * newMark)) * stack)
			}
			else
			{
				multiplier += (tracer * stack);
			}
			break;
		}
		case "dodgeThat":	// outlaw's dodge that
		{
			if ( Number(stack) > Number(16) ) stack = 16;
			multiplier += (tracer * stack);
			skill *= 3;
			break;
		}
		case "ironHeart":	// berserker's iron heart effect
		{
			multiplier += alcBiotrap;	// gladiator strike 40% damage bonus
			break;
		}
		case "gvardar":		// berserker's gvardar effect
		{
			skill *= 4;	// crippling bow damage increased 4 times
			break;
		}
		case "bloodlust":	// berserker's bloodlust effect
		{
			if ( Number(stack) > Number(100) ) stack = 100;	// bloodlust max 100 stacks
			multiplier += (blade * stack);
			break;
		}
	}
	skill *= multiplier;	// multiply class skill damage based on weapon effect
// if stack2 value is greater than 0, calculate artifact special effect
	if ( Number(stack2) > Number(0) )
	{
		multiplier = 1;	// reinizialize multiplier
		switch ( effect2 )
		{
			default: {break;}	// case null - do nothing
			case "detector":
			{
				if (Number(stack2) > Number(5)) stack2 = 5;	// detector max 5 stacks
				multiplier += (vulnerability * stack2);
				break;
			}
			case "blade":
			{
				if (Number(stack2) > Number(10)) stack2 = 10;	// blade max 10 stacks
				multiplier += (blade * stack2);
				break;
			}
		}
		skill *= multiplier;
	}
// if euphomine is checked, calculate stimulants buff
	if ( useStims )
	{
		if ( Number(stimsValue) < Number(0.3) ) stimsValue = 0.3;	// min buff value is 30% (red euphomine)
		if ( Number(stimsValue) > Number(0.3) )
		{
			wpnAura = 0;	// green euphomine overrides support aura
			base -= plrSuppAura;	// remove support aura from base damage bonus
		}
		if ( Number(stimsValue) > Number(1) ) stimsValue = 1;	// max buff value is 100% (green euphomine)
		base += stimsValue;	// stimulants adds value to character's base damage bonus
	}
// if player is not support and we have support aura from another player, calculate aura buff
	if ( !isPlrSupp )
	{
		if ( Number(suppAura) > Number(0) )
		{
			if ( !(useStims) || (Number(stimsValue) === Number(0.3)) )
			{
				base += suppAura;	// boost only if we are using red euphomine or if we are not
			}
		}
	}
// apply soundweaver buffs
	if ( effect3 != "null" )
	{
		multiplier = 1;	// reinizialize multiplier
		switch ( effect3 )
		{
			default: {break;}	// case null - do nothing
			case "rythm1":
			{
				if ( wings ) multiplier += (shower * alcBiotrap);
				multiplier += shower;	// use alc shower const since same buff value
				break;
			}
			case "rythmOC":
			{
				if ( wings ) multiplier += ((shower * alcBiotrap) * 2);
				multiplier += (shower * 2);	// overcharge
				break;
			}
			case "swUlti":
			{
				if ( wings ) multiplier += (shower * alcBiotrap);
				multiplier += shower;
				skill *= multiplier;		// rythm of strength
				skill *= multiplier;		// rythm of courage
				multiplier = (1 + tracer);	// make rythm stronger by 10% and multiply again out of this if block
				if ( wings ) multiplier += (tracer * alcBiotrap);
				break;
			}
		}
		skill *= multiplier;	// multiply skill
	}
// apply buffs when checked
	if ( sunBless )		// blessing of the sun
	{
		multiplier = 1;	// reinizialize multiplier
		if ( wings ) multiplier += (bless * alcBiotrap);
		multiplier += bless;
		skill *= multiplier;
	}
	if ( iLight )		// incarnation of light
	{
		multiplier = 1;	// reinizialize multiplier
		if ( wings ) multiplier += (lightInc * alcBiotrap);
		multiplier += lightInc;
		skill *= multiplier;
	}
	if ( eShower )		// energy shower
	{
		multiplier = 1;	// reinizialize multiplier
		if ( wings ) multiplier += (shower * alcBiotrap);
		multiplier += shower;
		skill *= multiplier;
	}
	if ( biotrap )		// biotrap
	{
		multiplier = 1;	// reinizialize multiplier
		multiplier += alcBiotrap;
		skill *= multiplier;
	}
	if ( hammer )		// nerion's hammer
	{
		multiplier = 1;	// reinizialize multiplier
		multiplier += macha_hammer;
		skill *= multiplier;
	}
	if ( macha )		// machavann's upgrade
	{
		multiplier = 1;	// reinizialize multiplier
		if ( wings ) multiplier += (macha_hammer * alcBiotrap);
		multiplier += macha_hammer;
		skill *= multiplier;
	}
// if stack3 value is greater than 0, calculate nightfall buff
	if ( Number(stack3) > Number(0) )
	{
		multiplier = 1;	// reinizialize multiplier
		if (Number(comp) > Number(1.81)) comp = 1.81;	// comp damage max 181%
		if (Number(stack3) > Number(3)) stack3 = 3;	// max 3 stacks
		if (Number(compStat) < Number(0)) compStat = 0;
		if (Number(compStat) > Number(0.33)) compStat = 0.33;
		let nightfall = (comp * compStat);
		if ( wings ) multiplier += (nightfall * alcBiotrap);
		multiplier += (nightfall * stack3);
		skill *= multiplier;
	}
// CALCULATION
	finalDmg = ((((((((((((skill * elder) * (base + (wpn + wpnAura))) * main) * troop) 
		* artif) * start) * stun) * slow) * chain) * armor) * atlasDmg) * atlasTroopDmg);
// IF CRIT (MANUAL)
	if ( (Number(crit) > Number(1)) && (!enableTime) )	// crit with stat only if time is disabled
	{
		critCalc = ((((((((((((skill * elder) * (base + (wpn + wpnAura))) * crit) * troop) 
			* artif) * start) * stun) * slow) * chain) * armor) * atlasDmg) * atlasTroopDmg);
		finalDmg += critCalc;	// ADD TO FINAL DMG
	}
// OUTPUT
	let digit = Intl.NumberFormat();
	output.innerText = digit.format( Math.floor(finalDmg) );	// thousands separated with dots
// TIME BASED DAMAGE
	if ( enableTime )	// this output simulate damage from continuous attacks
	{
		if ( Number(atkNum) < Number(1) ) atkNum = 1;	// number of attacks min 1 but unlimited
		if ( Number(atkTime) < Number(1) ) atkTime = 1;		// attacks per second min 1
		if ( Number(atkTime) > Number(3) ) atkTime = 3;		// attacks per second max 3
		if ( Number(critChance) < Number(5) ) critChance = 5;	// base crit chance
		if ( Number(critChance) > Number(44) ) critChance = 44;	// max chance without divine weapons
		if ( Number(crit) < Number(1.3) ) crit = 1.3;	// here calculate base crit damage in case
		for ( var i = 0; i < atkNum; i++ )
		{
			let random = ((Math.random() * 100) + 1);	// generate random number for crit chance
			for ( var j = 0; j < atkTime; j++ )
			{
				let origDmg = finalDmg;
				if ( Number(atkNum) > Number(15) ) origDmg /= start;	// remove start buff
				if ( Number(random) <= Number(critChance) )	// crit if random is within the range
				{
					critCalc = ((((((((((((skill * elder) * (base + (wpn + wpnAura))) * crit) * troop) 
						* artif) * start) * stun) * slow) * chain) * armor) * atlasDmg) * atlasTroopDmg);
					origDmg += critCalc;
				}
				dmgOvertime += origDmg;
			}
		}
		timeOutput.innerText = digit.format( Math.floor(dmgOvertime) );
	}
}
