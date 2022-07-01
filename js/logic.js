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
	var a = document.getElementById("linkEng");
	var b = document.getElementById("linkIta");
	// LANG BUTTONS
	var c = document.getElementById("langEng");
	var d = document.getElementById("langIta");
	// DESCRIPTION
	var e = document.getElementById("descEng");
	var f = document.getElementById("descIta");
	// OUTPUT
	var g = document.getElementById("outputEng");
	var h = document.getElementById("outputIta");
	// LAST INFO
	var i = document.getElementById("lastInfoEng");
	var j = document.getElementById("lastInfoIta");
	// CALC BUTTONS
	var k = document.getElementById("calcButtonEng");
	var l = document.getElementById("clearButtonEng");
	var m = document.getElementById("calcButtonIta");
	var n = document.getElementById("clearButtonIta");
	// AUTHOR
	var o = document.getElementById("authorEng");
	var p = document.getElementById("authorIta");
	// TIME OUTPUT
	var q = document.getElementById("outputEng2");
	var r = document.getElementById("outputIta2");
	// CRIT COUNTER
	var s = document.getElementById("critHitEng");
	var t = document.getElementById("critHitIta");
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
	s.hidden = ((s.hidden)? false : true);
	t.hidden = ((t.hidden)? false : true);
}

function showEffects()
{
// SHOW TABLE EFFECTS
	var a = document.getElementById("tableOfEffects");
	a.hidden = ((a.hidden)? false : true );
}

function showSuppAura()
{
	var a = document.getElementById("charAura");
	var b = document.getElementById("auraDesc");
	a.hidden = ((a.hidden)? false : true );
	b.hidden = ((b.hidden)? false : true );
}

function showVerdictStacks()
{
	var a = document.getElementById("verdictDesc");
	var b = document.getElementById("verdictValue");
	a.hidden = ((a.hidden)? false : true );
	b.hidden = ((b.hidden)? false : true );
}

function showTravelBonus()
{
	var a = document.getElementById("travelDesc");
	var b = document.getElementById("soloDesc");
	var c = document.getElementById("defSuppDesc");
	var d = document.getElementById("multiSelect4");
	var e = document.getElementById("defSuppBonus");
	var f = document.getElementById("monsterDmgDesc");
	var g = document.getElementById("monsterDmg");
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
	var a = document.getElementById("stimsDesc");
	var b = document.getElementById("stimsValue");
	a.hidden = ((a.hidden)? false : true );
	b.hidden = ((b.hidden)? false : true );
}

function enableTimeDamage()
{
	var a = document.getElementById("atkNumDesc");
	var b = document.getElementById("atkNum");
	var c = document.getElementById("atkTimeDesc");
	var d = document.getElementById("atkTime");
	var e = document.getElementById("timeDamageOutput");
	var f = document.getElementById("critChanceDesc");
	var g = document.getElementById("critChance");
	var h = document.getElementById("enemiesDesc");
	var i = document.getElementById("enemies");
	var j = document.getElementById("critHits");
	a.hidden = ((a.hidden)? false : true );
	b.hidden = ((b.hidden)? false : true );
	c.hidden = ((c.hidden)? false : true );
	d.hidden = ((d.hidden)? false : true );
	e.hidden = ((e.hidden)? false : true );
	f.hidden = ((f.hidden)? false : true );
	g.hidden = ((g.hidden)? false : true );
	h.hidden = ((h.hidden)? false : true );
	i.hidden = ((i.hidden)? false : true );
	j.hidden = ((j.hidden)? false : true );
}

function deleteForm()
{
	const inputs = document.querySelectorAll('#might, #skillDmg, #baseDmg, #classBuff, #a9Buff,'
		+ ' #weaponDmg, #weaponAura, #elderMulti, #mainDmg, #critDmg, #critChance, #compDmg,'
		+ ' #troopDmg, #armorFracture, #startDmg, #stunDmg, #slowDmg, #chainDmg, #artifactDmg,'
		+ ' #stack, #stack2, #stack3, #compStat, #suppMight, #aura, #mightPercentage, #plrRank,'
		+ ' #monsterRank, #atlasDmg, #atlasTroopDmg, #atkNum, #atkTime, #symbolBuff, #guildDmg,'
		+ ' #node1, #node2, #enemies');
	inputs.forEach(input => {input.value = ""});
}

function getDamageValue(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15)
{
	var dmg = ((((((((((((n1 * n2) * (n3 + (n4 + n5))) * n6) * n7) 
		* n8) * n9) * n10) * n11) * n12) * n13) * n14) * n15);
	return dmg;
}

function calculateDamage()
{
	var output = document.getElementById("outputDmg");	// OUTPUT VAR
/*				FIRST MENU				*/
// CLASS
	var skill = document.getElementById("skillDmg").value;
	var classBuff = 1 + (document.getElementById("classBuff").value / 100);
	var a9Buff = 1 + (document.getElementById("a9Buff").value / 100);
	var symbolBuff = 1 + (document.getElementById("symbolBuff").value / 100);
	var classEffectCnt = 0;
// STATS
	var isPlrGod = document.getElementById("isPlrGod").checked;	// if player in divine form
	var monsterDmg = document.getElementById("monsterDmg").checked;	// if god, check if we have dmg to monster bonus
	var might = document.getElementById("might").value;
	var base = 1 + (document.getElementById("baseDmg").value / 100);
	var elder = 1 + (document.getElementById("elderMulti").value / 100);
	var armor = 1 + (document.getElementById("armorFracture").value / 100);
	var main = 1 + (document.getElementById("mainDmg").value / 100);
	var crit = 1 + (document.getElementById("critDmg").value / 100);
	var critChance = document.getElementById("critChance").value;
	var comp = (document.getElementById("compDmg").value / 100);
	var troop = 1 + (document.getElementById("troopDmg").value / 100);
	var start = 1 + (document.getElementById("startDmg").value / 100);
	var stun = 1 + ( document.getElementById("stunDmg").value / 100);
	var slow = 1 + (document.getElementById("slowDmg").value / 100);
	var chain = 1 + (document.getElementById("chainDmg").value / 100);
	var charAura = document.getElementById("charAura").checked;		// character support aura boost
	var isPlrSupp = document.getElementById("isPlrSupport").checked;	// if player is support
	var plrSuppAura = 0;	// player's base support aura power
/*				SECOND MENU				*/
// SUPERIORITY CALCULATION
	var plrRank = document.getElementById("plrRank").value;		// player rank
	var monsterRank = document.getElementById("monsterRank").value;	// monster rank
// WEAPON STATS
	var wpn = (document.getElementById("weaponDmg").value / 100);		// weapon damage
	var wpnAura = (document.getElementById("weaponAura").value / 100);	// weapon support aura
// ARTIFACT BONUS
	var artif = 1 + (document.getElementById("artifactDmg").value / 100);	// artifact damage
// CATHEDRAL SEALS
	var dmgSeal = document.getElementById("sealAllDmg").checked;	// all damage bonus +3%
	var cSeal = document.getElementById("sealClass").checked;	// class seal
	var aSeal = document.getElementById("sealAdv").checked;	// adventure seal
// VERDICT
	var useVerdict = document.getElementById("useVerdict").checked;
	var verdict = 1 + (document.getElementById("verdictValue").value / 100);
// HALL OF TRAVELS
	var soloBonus = document.getElementById("multiSelect4");
	var defSuppBonus = document.getElementById("defSuppBonus").checked;
// ATLAS
	var atlasDmg = 1 + (document.getElementById("atlasDmg").value / 100);
	var atlasTroopDmg = 1 + (document.getElementById("atlasTroopDmg").value / 100);
	var node1 = 1 + (document.getElementById("node1").value / 100);
	var node2 = 1 + (document.getElementById("node2").value / 100);
// MISC
	var panthDmg = 1 + (document.getElementById("guildDmg").value / 100);
	var premiumDmg = document.getElementById("premiumDmg").checked;
/* 				EFFECTS MENU				*/
// WEAPON EFFECT
	var stack = document.getElementById("stack").value;	// weapon
	var select = document.getElementById("multiSelect");	// weapon
// ARTIFACT EFFECT
	var stack2 = document.getElementById("stack2").value;	// artifact
	var select2 = document.getElementById("multiSelect2");	// artifact
// EUPHOMINE
	var useStims = document.getElementById("useStims").checked;			// euphomine
	var stimsValue = (document.getElementById("stimsValue").value / 100);	// euphomine
// SUPPORT
	var suppMight = document.getElementById("suppMight").value;		// support's might
	var suppAura = (document.getElementById("aura").value / 100);	// support's aura
	var mightGiven = (document.getElementById("mightPercentage").value / 100);	// support
// BUFF EFFECT
	var select3 = document.getElementById("multiSelect3");		// soundweaver
	var wings = document.getElementById("wings").checked;		// wings of skies artifact - use biotrap const
	var sunBless = document.getElementById("bless").checked;	// lightbinder's bless
	var iLight = document.getElementById("light").checked;		// lightbinder's ulti
	var eShower = document.getElementById("shower").checked;	// alchemist's shower	
	var biotrap = document.getElementById("biotrap").checked;	// alchemist's biotrap
	var hammer = document.getElementById("nerion").checked;		// nerion's hammer
	var macha = document.getElementById("machavann").checked;	// machavann upgrade
// EXO NIGHTFALL
	var stack3 = document.getElementById("stack3").value;			// nightfall
	var compStat = (document.getElementById("compStat").value / 100);	// nightfall
// DAMAGE OUTPUT VARIABLE
	var finalDmg = 0;
	var critCalc = 0;
	var dmgOvertime = 0;
// TIME VARIABLES
	var enableTime = document.getElementById("enableTime").checked;	// time enabler
	var atkNum = document.getElementById("atkNum").value;		// number of attacks
	var atkTime = document.getElementById("atkTime").value;		// attacks per second
	var enemies = document.getElementById("enemies").value;		// number of enemies hitted with one attack
// SERVICE
	var digit = Intl.NumberFormat();	// used to separate thousands values with dots
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
	if (+node1 < +1) node1 = 1;		// generic atlas node buff (class or symbol)
	if (+node2 < +1) node2 = 1;		// generic atlas node buff (class or symbol)
	if (+suppMight < +1000 ) suppMight = 1000;	// support's might
	if (+suppAura < +0) suppAura = 0;			// support's aura power
	if (+mightGiven < +0) mightGiven = 0;		// support's transferred might percentage
	if (+mightGiven > +0.8) mightGiven = 0.8;	// transferred might max 80% (elder mercy)
	if (+enemies < +1) enemies = 1;
	if (+stack < +0) stack = 0;
	skill = Math.floor( skill );	// workaround
	var effect = select.options[select.selectedIndex].value;	// get option value
	var effect2 = select2.options[select2.selectedIndex].value;	// get option value
	var effect3 = select3.options[select3.selectedIndex].value;	// get option value
	var effect4 = soloBonus.options[soloBonus.selectedIndex].value;	// hall of travels bonus
	var multiplier = 1;	// base multiplier is always 1
	var alertValue = 0;	// send value for those attacks where the use of time is suggested
	stack = Math.floor( stack );	// workaround
	stack2 = Math.floor( stack2 );	// workaround
	stack3 = Math.floor( stack3 );	// workaround
// calculate player superiority bonus (+1% dmg done for every excess rank player has than monster, or -10% dmg done for every excess rank monster has)
	if ( (Number(plrRank) > Number(0)) && (Number(monsterRank) > Number(0)) )	// calculate only if both ranks are higher than 0
	{
		var superiorityMultiplier = 1;
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
		if ( (Number(mightGiven) > Number(0)) && !(isPlrSupp) )	// increase might if player is not support
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
// if values are higher than 1, calculate generic atlas buff (related to class skill or symbols)
	if ( Number(node1) > Number(1) ) skill *= node1;
	if ( Number(node2) > Number(1) ) skill *= node2;
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
				var newMark = (stack - 20);
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
			switch ( enableTime )
			{
				case false:
				{
					var bakSkill = skill;
					for ( var i = 0; i < 9; i++ )	// gladiator strike hits 5 times per 9 uses
					{	// every use increases damage, i think 10% per stack
						if ( Number(i) > Number(0) )
							skill += (bakSkill * (1 + (tracer * i)));
					}
					alertValue = 1;
					break;
				}
				case true:
				{
					skill /= 5;	// get single attack damage
					break;
				}
			}
			multiplier += alcBiotrap;	// gladiator strike 40% damage bonus
			break;
		}
		case "gvardar":		// berserker's gvardar effect
		{
			switch ( enableTime )
			{
				case false:
				{
					if ( Number(a9Buff) > Number(1) ) skill /= a9Buff;	// remove a9 buff in case
					var bakSkill = (skill / 4);	// get single attack damage
					var skDmg = 0;	// value boosted by a9 talent
					skill = 0;	// reset skill value to fill later
					for ( var i = 0; i < 10; i++ )	// crippling bow deals damage 10 times in one go
					{	// starting from 4th attack, crippling bow damage is 4 times higher
						if ( Number(a9Buff) > Number(1) )
						{
							if ( Number(a9Buff) > Number(2.5) ) a9Buff = 2.5;
							skDmg = (bakSkill * a9Buff);
						}
						if ( Number(i) > Number(2) ) skill += ((bakSkill * 4) + skDmg);
						else skill += (bakSkill + skDmg);		// up to 3 continuous attacks, damage is standard
					}
					alertValue = 2;
					break;
				}
				case true:
				{
					if ( Number(a9Buff) > Number(1) ) skill /= a9Buff;	// remove a9 buff in case
					skill /= 4;	// need to get the effective single attack damage
					break;
				}
			}
			break;
		}
		case "bloodlust1":	// berserker's ragnar bloodlust effect (firestorm)
		{
			if ( Number(stack) > Number(100) ) stack = 100;	// bloodlust max 100 stacks
			if ( enableTime ) skill /= 9;	// get single firestorm attack damage (9 hit max)
			else alertValue = 3;
			multiplier += (blade * stack);
			break;
		}
		case "bloodlust2":	// berserker's ragnar bloodlust effect (whirlwind)
		{
			if ( Number(stack) > Number(100) ) stack = 100;	// bloodlust max 100 stacks
			if ( enableTime ) skill /= 4;	// get single whirlwind attack damage (4 hit max)
			else alertValue = 4;
			multiplier += (blade * stack);
			break;
		}
		case "slaughter":	// revenant's slaughter skill (stacks will simulate baron samedi boost)
		{
			if ( !enableTime ) alertValue = 5;
			if ( Number(stack) > Number(10) ) stack = 10;	// baron samedi idol of death 100% bonus
			multiplier += (tracer * stack);		// max 100% bonus
			break;
		}
	}
	if ( Number(multiplier) > Number(1) ) skill *= multiplier;	// multiply class skill damage based on weapon effect
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
		if ( !isPlrSupp )
		{
			multiplier = 1;	// reinizialize multiplier
			if ( wings ) multiplier += (macha_hammer * alcBiotrap);
			multiplier += macha_hammer;
			skill *= multiplier;
		}
	}
// if stack3 value is greater than 0, calculate nightfall buff
	if ( Number(stack3) > Number(0) )
	{
		multiplier = 1;	// reinizialize multiplier
		if (Number(comp) > Number(1.81)) comp = 1.81;	// comp damage max 181%
		if (Number(stack3) > Number(3)) stack3 = 3;	// max 3 stacks
		if (Number(compStat) < Number(0)) compStat = 0;
		if (Number(compStat) > Number(0.33)) compStat = 0.33;
		var nightfall = (comp * compStat);
		if ( wings ) multiplier += (nightfall * alcBiotrap);
		multiplier += (nightfall * stack3);
		skill *= multiplier;
	}
// CALCULATION
	switch ( enableTime )
	{
		// SINGLE DAMAGE (better use with skills that deal one attack)
		case false:
		{
			finalDmg = getDamageValue(skill,elder,base,wpn,wpnAura,main,troop,
				artif,start,stun,slow,chain,armor,atlasDmg,atlasTroopDmg);
			// IF CRIT
			if ( (Number(crit) > Number(1)) )	// crit with stat only
			{
				critCalc = getDamageValue(skill,elder,base,wpn,wpnAura,crit,troop,
					artif,start,stun,slow,chain,armor,atlasDmg,atlasTroopDmg);
				finalDmg += critCalc;	// ADD TO FINAL DMG
			}
			output.innerText = digit.format( Math.floor(finalDmg) );	// OUTPUT
			// send alert to suggest time use for best calculation of some skills dmg
			if ( Number(alertValue) != Number(0) ) sendAlert(alertValue);
			break;
		}
		// TIME BASED DAMAGE (this output simulate damage from continuous attacks)
		case true:
		{
			var delay = 1000;	// time delay for inner cycle
			var timeOutput = document.getElementById("timeOutputDmg");	// TIME OUTPUT VAR
			var critOutput = document.getElementById("critTime");	// CRIT OUTPUT VAR
			var critCnt = 0;	// critical hits counter for output
			var armorTime = 1;	// armor fracture attacks counter, min 1 - max 5
			var armorFr = 1;	// armor fracture value that will increased for buff damage
			var armorStack = (armor - 1);	// get armor fracture percentage for stacks
			armorStack /= 4;	// take 1/4 of the value that will multiplied later
			multiplier = 1;		// reset multiplier
			if ( Number(atkNum) < Number(1) ) atkNum = 1;	// number of attacks min 1, max unlimited
			if ( Number(atkTime) < Number(1) ) atkTime = 1;		// attacks per second min 1
			if ( Number(atkTime) > Number(5) ) atkTime = 5;		// attacks per second max 5
			if ( Number(critChance) < Number(5) ) critChance = 5;	// base crit chance
			if ( Number(critChance) > Number(100) ) critChance = 100;	// max chance including weapons and other stuff
			if ( Number(crit) < Number(1.3) ) crit = 1.3;	// here calculate base crit damage in case
			for ( var i = 0; i < atkNum; i++ )
			{	// time based cycle
				setTimeout(function(){
					if ( effect == "ironHeart")
					{	// increase damage at every attack, i think 10% each
						delay = 500;	// half the delay to simulate gladiator strike dmg overtime
						if ( Number(i) > Number(0) ) multiplier += tracer; // increase dmg at each attack
					}
					for ( var j = 0; j < atkTime; j++ )
					{	// time based inner cycle
						setTimeout(function(){
							for ( var z = 0; z < enemies; z++ )
							{	// execute this chunk more times if multiple enemies are found
								var random = ((Math.random() * 100) + 1);	// generate random number for crit chance
								var bakSkill = skill;	// backup skill value since we need original for each iteration
								if ( effect == "ironHeart") bakSkill *= multiplier;
								if ( effect == "gvardar" )
								{	// gvardar crippling bow hits 10 times
									var skDmg = 0;	// used to store values boosted by talent
									classEffectCnt++;	// determine the use of weapon effect
									if ( Number(a9Buff) > Number(1) )
									{	// single damage value boosted by a9 Talent
										if ( Number(a9Buff) > Number(2.5) ) a9Buff = 2.5;	// a9 talent max 150% boost
										skDmg = (bakSkill * a9Buff);
										if ( Number(classEffectCnt) < Number(4) ) bakSkill = skDmg;
									}
									// from 4th attack, damage is increased 4 times, in case boosted by talent
									if ( Number(classEffectCnt) > Number(3) ) bakSkill = ((bakSkill * 4) + skDmg);
								}
								if ( effect == "slaughter")
								{	// slaughter deals 33% more damage for every enemy behind the first one, supposing this by number
									classEffectCnt++;	// determine the amount of damage bonus done by slaughter
									if ( Number(classEffectCnt) > Number(1) )
									{
										multiplier = (1 + (0.33 * (classEffectCnt - 1)));
										if ( Number(multiplier) > Number(2) ) multiplier = 2;	// max 100% bonus
										bakSkill *= multiplier;
									}
								}
								if ( (Number(armor) > Number(1)) && (Number(armorTime) <= Number(5)) )	// calculate armor fracture buff overtime
								{
									if (Number(armorTime) > Number(1))
										armorFr = 1 + (armorStack * (armorTime - 1));
									armorTime++;
								}
								finalDmg = getDamageValue(bakSkill,elder,base,wpn,wpnAura,main,troop,
									artif,start,stun,slow,chain,armorFr,atlasDmg,atlasTroopDmg);
								if ( Number(random) <= Number(critChance) )	// crit if random is within the range
								{
									critCalc = getDamageValue(bakSkill,elder,base,wpn,wpnAura,crit,troop,
										artif,start,stun,slow,chain,armorFr,atlasDmg,atlasTroopDmg);
									if ( effect == "ironHeart") critCalc *= multiplier;	// give stacks to crit dmg
									finalDmg += critCalc;
									critCnt++;	// increase crit counter
								}
								if ( Number(start) > Number(1) )
								{	// remove start buff after 15 attacks (guess 1 attack per second)
									if ( Number(atkNum) > Number(15) ) finalDmg /= start;
								}
								dmgOvertime += finalDmg;	// value increased at each iteration
								output.innerText = digit.format( Math.floor(finalDmg) );	// output (single attack)
								timeOutput.innerText = digit.format( Math.floor(dmgOvertime) );	// output (continuous attacks)
								critOutput.innerText = critCnt;		// show how many times critical damage was done
							}
						}, (delay / atkTime) * j);
					}
				}, 1000 * i);
			}
			break;
		}
	}
}

function sendAlert( type )
{
	switch ( type )
	{
		case 1:
			alert("For best calculation of Gladiator Strike with Iron Heart weapon use Time menu.\n"
				+ "Suggested parameters for 45 hits:\nNumber of Attacks: 9\nAttacks per Second: 5");
			break;
		case 2:
			alert("For best calculation of Crippling Bow with Gvardar weapon use Time menu.\n"
				+ "Suggested parameters for 10 hits:\nNumber of Attacks: 5\nAttacks per Second: 2");
			break;
		case 3:
			alert("For best calculation of Firestorm with Ragnar weapon use Time menu.\n"
				+ "Suggested parameters for 9 hits:\nNumber of Attacks: 3\nAttacks per Second: 3");
			break;
		case 4:
			alert("For best calculation of Whirlwind with Ragnar weapon use Time menu.\n"
				+ "Suggested parameters for 4 hits:\nNumber of Attacks: 2\nAttacks per Second: 2");
			break;
		case 5:
			alert("For best calculation of Slaughter use Time menu.\n"
				+ "The damage is increased by 33% for each enemy behind the first one "
				+ "up to 100% bonus. For this increase the value of 'Enemies hitted' field.\n"
				+ "For Baron Samedi 'Idol of Death' effect use 'Stack Value' field, up to 100% bonus.");
			break;
	}
}
