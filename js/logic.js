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
	a.hidden = ((a.hidden)? false : true );
	b.hidden = ((b.hidden)? false : true );
	c.hidden = ((c.hidden)? false : true );
	d.hidden = ((d.hidden)? false : true );
	e.hidden = ((e.hidden)? false : true );
}

function useStimulants()
{
	let a = document.getElementById("stimsDesc");
	let b = document.getElementById("stimsValue");
	a.hidden = ((a.hidden)? false : true );
	b.hidden = ((b.hidden)? false : true );
}

function deleteForm()
{
// VARIABLES
	let output = document.getElementById("outputDmg");
	let might = document.getElementById("might");
	let skill = document.getElementById("skillDmg");
	let base = document.getElementById("baseDmg");
	let wpn = document.getElementById("weaponDmg");
	let wpnAura = document.getElementById("weaponAura");
	let elder = document.getElementById("elderMulti");
	let main = document.getElementById("mainDmg");
	let crit = document.getElementById("critDmg");
	let comp = document.getElementById("compDmg");
	let troop = document.getElementById("troopDmg");
	let armor = document.getElementById("armorFracture");
	let start = document.getElementById("startDmg");
	let stun = document.getElementById("stunDmg");
	let slow = document.getElementById("slowDmg");
	let chain = document.getElementById("chainDmg");
	let artif = document.getElementById("artifactDmg");
	let stack = document.getElementById("stack");
	let stack2 = document.getElementById("stack2");
	let stack3 = document.getElementById("stack3");
	let compStat = document.getElementById("compStat");
	let suppMight = document.getElementById("suppMight");
	let suppAura = document.getElementById("aura");
	let mightGiven = document.getElementById("mightPercentage");
	let plrRank = document.getElementById("plrRank");
	let monsterRank = document.getElementById("monsterRank");
	let atlasDmg = document.getElementById("atlasDmg");
	let atlasTroopDmg = document.getElementById("atlasTroopDmg");
// ERASE	
	output.value = "";
	might.value = "";
	skill.value = "";
	base.value = "";
	wpn.value = "";
	wpnAura.value = "";
	elder.value = "";
	main.value = "";
	crit.value = "";
	comp.value = "";
	troop.value = "";
	armor.value = "";
	start.value = "";
	stun.value = "";
	slow.value = "";
	chain.value = "";
	artif.value = "";
	stack.value = "";
	stack2.value = "";
	stack3.value = "";
	compStat.value = "";
	suppMight.value = "";
	suppAura.value = "";
	mightGiven.value = "";
	plrRank.value = "";
	monsterRank.value = "";
	atlasDmg.value= "";
	atlasTroopDmg.value = "";
}

function calculateDamage()
{
	let output = document.getElementById("outputDmg");	// OUTPUT VAR
/*				FIRST MENU				*/
// STATS
	let skill = document.getElementById("skillDmg").value;
	let isPlrGod = document.getElementById("isPlrGod").checked;	// if player in divine form
	let might = document.getElementById("might").value;
	let base = 1 + (document.getElementById("baseDmg").value / 100);
	let elder = 1 + (document.getElementById("elderMulti").value / 100);
	let armor = 1 + (document.getElementById("armorFracture").value / 100);
	let main = 1 + (document.getElementById("mainDmg").value / 100);
	let crit = 1 + (document.getElementById("critDmg").value / 100);
	let comp = (document.getElementById("compDmg").value / 100);
	let troop = 1 + (document.getElementById("troopDmg").value / 100);
	let start = 1 + (document.getElementById("startDmg").value / 100);
	let stun = 1 + ( document.getElementById("stunDmg").value / 100);
	let slow = 1 + (document.getElementById("slowDmg").value / 100);
	let chain = 1 + (document.getElementById("chainDmg").value / 100);
	let charAura = document.getElementById("charAura").checked;		// character support aura
	let isPlrSupp = document.getElementById("isPlrSupport").checked;	// if player is support
/*				SECOND MENU				*/
// SUPERIORITY CALCULATION
	let plrRank = document.getElementById("plrRank").value;		// player rank
	let monsterRank = document.getElementById("monsterRank").value;	// monster rank
	let monsterBoss = document.getElementById("isBoss").checked;	// check if monster is boss
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
/* 				EFFECTS MENU				*/
// WEAPON EFFECT
	let stack = document.getElementById("stack").value;	// weapon
	let select = document.getElementById("multiSelect");	// weapon
// ARTIFACT EFFECT
	let stack2 = document.getElementById("stack2").value;	// artifact
	let select2 = document.getElementById("multiSelect2");	// artifact
// EUPHOMINE
	let useStims = document.getElementById("useStims").checked;			// euphomine
	let stimsValue = 1 + (document.getElementById("stimsValue").value / 100);	// euphomine
// SUPPORT
	let suppMight = document.getElementById("suppMight").value;			// support
	let suppAura = 1 + (document.getElementById("aura").value / 100);		// support
	let mightGiven = (document.getElementById("mightPercentage").value / 100);	// support
// BUFF EFFECT
	let select3 = document.getElementById("multiSelect3");		// soundweaver
	let sunBless = document.getElementById("bless").checked;	// lightbinder's bless
	let iLight = document.getElementById("light").checked;		// lightbinder's ulti
	let eShower = document.getElementById("shower").checked;	// alchemist's shower	
	let biotrap = document.getElementById("biotrap").checked;	// alchemist's biotrap
	let hammer = document.getElementById("nerion").checked;		// nerion's hammer
	let macha = document.getElementById("machavann").checked;	// machavann upgrade
// EXO NIGHTFALL
	let stack3 = document.getElementById("stack3").value;			// nightfall
	let compStat = (document.getElementById("compStat").value / 100);	// nightfall
// FINAL DAMAGE VARIABLE
	let finalDmg = 0;
// CHECKS
	if (+might < +1000) might = 1000;		// character base might
	if (+skill < +0) skill = 0;		// class skill damage
	if (+base < +1) base = 1;			// character base damage min 1x
	if (+base > +1.56) base = 1.56;	// character base damage max 56%
	if (+wpn < +0) wpn = 0;			// weapon all damage
	if (+wpnAura < +0) wpnAura = 0;	// weapon support aura
	if (+elder < +1) elder = 1;			// elder multiplier min 1x
	if (+elder > +1.28) elder = 1.28;		// elder multiplier max 28%
	if (+main < +1) main = 1;
	if (+crit < +1) crit = 1;
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
	if (+atlasTroopDmg < +1) atlasTroopDmg = 1;	// atlas troop damage bonus
	if (+atlasTroopDmg > +1.39) atlasTroopDmg = 1.39;
	if (+suppMight < +1000 ) suppMight = 1000;	// support's might
	if (+suppAura < +1) suppAura = 1;			// support's aura power
	if (+mightGiven < +0 ) mightGiven = 0;		// support's transferred might percentage
	if (+mightGiven > +0.8 ) mightGiven = 0.8;	// transferred might max 80% (elder mercy)
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
	if ( (Number(plrRank) > +0) && (Number(monsterRank) > +0) )	// calculate only if both ranks are higher than 0
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
			might += suppMight;		// add support's might percentage to player's might
		}
		skill *= might;	// calcolate final skill damage value based on might
	}
// check if player is playing solo and in god form, then apply selected buff
	if ( isPlrGod )
	{
		if ( !monsterBoss ) skill *= 2;		// hall of war, third node increases damage done to monsters by 100%
		if ( effect4 == "soloGroup" ) skill *= 1.5;		// scorching light 40% + warming light 10%
		if ( effect4 == "soloParty" ) skill *= 1.85;	// scorching light 70% + warming light 15%
		if ( defSuppBonus ) skill *= 1.3;	// increases damage by 30% when solo if in defense or support class
	}
// check if player is support
	if ( isPlrSupp )
	{
		let suppBoost = 1.2;
		base += 0.2;		// support class ability give +20% to base damage
		if ( charAura )
		{
			base += 0.24;	// support node give extra +24% to base damage
			suppBoost += 0.24;
			if ( isPlrGod )
			{
				base += 0.36;	// support node give extra +36% to base damage if god
				suppBoost += 0.36;
			}
		}
		skill *= suppBoost;	// skill should be boosted by support aura and not only base damage
	}
// if checked apply cathedral seals
	if ( dmgSeal ) skill *= 1.03;	// all damage seal +3% damage increase
	if ( cSeal ) skill *= 1.1;	// class seal +10% damage increase
	if ( aSeal ) skill *= 1.05;	// adventure seal +5% damage increase
// use verdict buff if checked
	if ( useVerdict )
	{
		if (Number(verdict) < Number(1)) verdict = 1;
		if (Number(verdict) > Number(1.2)) verdict = 1.2;
		skill *= verdict;
	}
// in case apply atlas buffs

// if stack value is greater than 0, calculate weapon special effect
	if ( Number(stack) > Number(0) )
	{
		if ( effect == "genEffect" ) multiplier += (tracer * stack);	// generic effect
		if ( effect == "tracer" )	// outlaw's tracer
		{
			if ( Number(stack) > Number(16) ) stack = 16;
			multiplier += (tracer * stack);
		}
		if ( effect == "viperMark" )	// outlaw's viper mark
		{
			if ( Number(stack) > Number(100) ) stack = 100;	// max 100 viper marks
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
		}
		skill *= multiplier;	// multiply the base class skill damage
	}
// dodge that only (stack here can be 0)
	if ( effect == "dodgeThat" )	// outlaw's dodge that
	{
		if ( Number(stack) < Number(0) ) stack = 0;
		if ( Number(stack) > Number(16) ) stack = 16;
		multiplier += (tracer * stack);
		skill *= 3;
		skill *= multiplier;
	}
// if stack2 value is greater than 0, calculate artifact special effect
	if ( Number(stack2) > Number(0) )
	{
		multiplier = 1;	// reinizialize multiplier
		if ( effect2 == "detector" )
		{
			if (Number(stack2) > Number(5)) stack2 = 5;	// detector max 5 stacks
			multiplier += (vulnerability * stack2);
		}
		if ( effect2 == "blade" )
		{
			if (Number(stack2) > Number(10)) stack2 = 10;	// blade max 10 stacks
			multiplier += (blade * stack2);
		}
		skill *= multiplier;
	}
// if euphomine is checked, calculate stimulants buff
	if ( useStims )
	{
		if ( Number(stimsValue) < Number(1.3) ) stimsValue = 1.3;	// min buff value is 30% (red euphomine)
		if ( Number(stimsValue) > Number(2) ) stimsValue = 2;	// max buff value is 100% (green euphomine)
		if ( Number(stimsValue) === Number(1.3) )	// if equals to 1.3x we are using red euphomine, then boost its effect with support aura
		{
			if ( isPlrSupp )
			{
				stimsValue += 0.2;
				if ( charAura )
				{
					stimsValue += 0.24;
					if ( isPlrGod ) stimsValue += 0.36;
				}
				if ( Number(wpnAura) > Number(0) ) stimsValue += wpnAura;
			}
		}
		skill *= stimsValue;
	}
// if suppAura value is greater than 1, calculate aura buff
	if ( Number(suppAura) > Number(1) )
	{
		if ( !isPlrSupp )
		{
			if ( Number(stimsValue) === Number(1.3) ) suppAura += 0.3;
			skill *= suppAura;
		}
	}
// apply soundweaver buffs
	if ( effect3 != "null" )
	{
		multiplier = 1;	// reinizialize multiplier
		if ( effect3 == "rythm1" ) multiplier += shower;	// use alc shower const since same buff value
		if ( effect3 == "rythmOC" ) multiplier += (shower * 2);	// overcharge
		if ( effect3 == "swUlti" )
		{
			multiplier += shower;
			skill *= multiplier;		// rythm of strength
			skill *= multiplier;		// rythm of courage
			multiplier = (1 + tracer);	// make rythm stronger by 10% and multiply again out of this if
		}
		skill *= multiplier;	// multiply skill
	}
// apply buffs when checked
	if ( sunBless )		// blessing of the sun
	{
		multiplier = 1;	// reinizialize multiplier
		multiplier += bless;
		skill *= multiplier;
	}
	if ( iLight )		// incarnation of light
	{
		multiplier = 1;	// reinizialize multiplier
		multiplier += lightInc;
		skill *= multiplier;
	}
	if ( eShower )		// energy shower
	{
		multiplier = 1;	// reinizialize multiplier
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
		multiplier += macha_hammer;
		skill *= multiplier;
	}
// if stack3 value is greater than 0, calculate nightfall buff
	if ( Number(stack3) > Number(0) )
	{
		multiplier = 1;	// reinizialize multiplier
		if (Number(stack3) > Number(3)) stack3 = 3;	// max 3 stacks
		if (Number(compStat) < Number(0)) compStat = 0;
		if (Number(compStat) > Number(0.33)) compStat = 0.33;
		let nightfall = (comp * compStat);
		multiplier += (nightfall * stack3);
		skill *= multiplier;
	}
// CALCULATION
	finalDmg = ((((((((((((skill * elder) * (base + (wpn + wpnAura))) * main) * troop) 
		* artif) * start) * stun) * slow) * chain) * armor) * atlasDmg) * atlasTroopDmg);
// IF CRIT
	if ( Number(crit) > Number(1) )
	{
		let critCalc = ((((((((((((skill * elder) * (base + (wpn + wpnAura))) * crit) * troop) 
			* artif) * start) * stun) * slow) * chain) * armor) * atlasDmg) * atlasTroopDmg);
		finalDmg += critCalc;	// ADD TO FINAL DMG
	}
// OUTPUT
	let digit = Intl.NumberFormat();
	output.innerText = digit.format( Math.floor(finalDmg) );	// thousands separated with dots
}
