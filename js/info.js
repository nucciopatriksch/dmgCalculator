/**
 * 
 */
function changeLang()
{
	const elements = document.querySelectorAll("#langEng, #langIta, #introEng, #introIta, #descEng,"
		+ "#descIta, #infoRulesEng, #infoRulesIta, #infoEffectEng, #infoEffectIta, #authorEng,"
		+ "#authorIta, #premiseIntroEng, #premiseIntroIta, #premiseEng, #premiseIta")
	elements.forEach(e => { e.hidden = (e.hidden)? false : true })
}
