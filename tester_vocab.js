// UN-OBFUSCATED VERSION IS IN THE SAME DIRECTORY, INSIDE "tester_vocab-non-obfuscated.js"
function paramVal(_0x27622f,_0x35a9e9){return url['searchParams']['has'](_0x27622f)?url['searchParams']['get'](_0x27622f):_0x35a9e9;}function paramNumVal(_0x49ad31,_0x173aa0){return url['searchParams']['has'](_0x49ad31)?Number['parseInt'](url['searchParams']['get'](_0x49ad31)):_0x173aa0;}var url=new URL(location['href']),all=paramVal('test',0x0),start=paramNumVal('start',0x1),end=paramNumVal('end',0x28),english=paramVal('english','yes');if(end<start)end=start;function checkEnglish(_0x5e709c,_0x43f814){var _0x2bfe4b=_0x5e709c['toLowerCase']()['replace'](/ ?\([^\)]*\) ?/g,'')['replace'](/;/g,',')['split'](','),_0x2dcf7e=_0x43f814['toLowerCase']()['replace'](/^(a|an|the|to) /,'')['replace'](/ ?\([^\)]*\) ?/g,'')['replace'](/!/g,'');for(i=0x0;i<_0x2bfe4b['length'];i++){var _0x395ed9=_0x2bfe4b[i]['replace'](/!/g,'')['replace'](/^ */,'')['replace'](/ *$/,'')['replace'](/^(a|an|the|to) /,'');if(_0x395ed9==_0x2dcf7e)return!![];}return![];}function checkLatin(_0x5a6768,_0x26873a){var _0x1a20c1=_0x5a6768['replace'](/ ?\([^\)]*\) ?/g,'')['replace'](/;/g,',')['split'](',');return _0x1a20c1[0x0]=='-'?_0x26873a['toLowerCase']()==_0x1a20c1[0x1]['replace'](/^ +/,'')['toLowerCase']():_0x26873a['toLowerCase']()==_0x1a20c1[0x0]['toLowerCase']();}function checkAnswer(_0x44f149){var _0x48e7f8=document['getElementById']('check'+_0x44f149),_0x1497d3=document['getElementById']('result'+_0x44f149),_0x3ba4ce=![];return english=='yes'?_0x3ba4ce=checkEnglish(_0x48e7f8['name'],_0x48e7f8['value']):_0x3ba4ce=checkLatin(_0x48e7f8['name'],_0x48e7f8['value']),_0x3ba4ce?(_0x1497d3['innerHTML']='<font\x20color=\x22green\x22>Correct!</font>\x20'+_0x48e7f8['name'],_0x48e7f8['disabled']=!![]):(_0x1497d3['innerHTML']='<font\x20color=\x22red\x22>Incorrect!</font>\x20'+_0x48e7f8['name'],_0x48e7f8['disabled']=!![]),![];}function createChapterOptions(_0x53a9a2,_0x2cdb2f){var _0x1a701f=document['getElementById'](_0x53a9a2);for(var _0x2c8514=0x1;_0x2c8514<=0x28;_0x2c8514++){var _0x59de25=document['createElement']('option');_0x59de25['value']=_0x2c8514,_0x59de25['text']=_0x2c8514,_0x59de25['selected']=_0x2c8514===_0x2cdb2f,_0x1a701f['appendChild'](_0x59de25);}}function shuffle(_0x44846a){for(let _0x185d4c=_0x44846a['length']-0x1;_0x185d4c>0x0;_0x185d4c--){const _0x47b4ee=Math['floor'](Math['random']()*(_0x185d4c+0x1));[_0x44846a[_0x185d4c],_0x44846a[_0x47b4ee]]=[_0x44846a[_0x47b4ee],_0x44846a[_0x185d4c]];}}function buildTable(){var _0x3cecff=document['getElementById']('vocabtable'),_0x1b23de=vocab['filter'](_0x8654e=>_0x8654e['chapter']>=start&&_0x8654e['chapter']<=end&&_0x8654e['type']!='adjective,\x20ordinal'&&_0x8654e['type']!='adjective.\x20cardinal');shuffle(_0x1b23de),_0x1b23de['forEach']((_0x129b12,_0x3af3e0)=>{var _0x15b3ae=document['createElement']('tr'),_0x228407=document['createElement']('td');_0x228407['valign']='top';var _0x50371c;english=='yes'?(_0x228407['innerText']=_0x129b12['latin'],_0x50371c=_0x129b12['english']):(_0x228407['innerText']=_0x129b12['english'],_0x50371c=_0x129b12['latin']);if(_0x129b12['gender'])_0x228407['innerText']+='\x20('+_0x129b12['gender']+'.)';else{if(_0x129b12['type']!='verb')_0x228407['innerText']+='\x20('+_0x129b12['type']+')';}_0x15b3ae['appendChild'](_0x228407),_0x228407=document['createElement']('td'),_0x228407['valign']='bottom',_0x15b3ae['appendChild'](_0x228407);var _0x4f0b58=document['createElement']('form');_0x4f0b58['autocomplete']=![],_0x4f0b58['autocorrect']=![],_0x4f0b58['spellcheck']=![],_0x4f0b58['onsubmit']=()=>{return checkAnswer(_0x3af3e0);},_0x228407['appendChild'](_0x4f0b58);var _0x28c7c4=document['createElement']('input');_0x28c7c4['name']=_0x50371c,_0x28c7c4['id']='check'+_0x3af3e0,_0x28c7c4['type']='text',_0x28c7c4['autocomplete']=![],_0x28c7c4['autocorrect']=![],_0x28c7c4['spellcheck']=![],_0x4f0b58['appendChild'](_0x28c7c4);var _0xdcb226=document['createElement']('label');_0xdcb226['id']='result'+_0x3af3e0,_0x4f0b58['appendChild'](_0xdcb226),_0x3cecff['appendChild'](_0x15b3ae);});}function checkCookieExists(_0x4990da){const _0x599cca=document['cookie'],_0x401d0a=_0x599cca['split'](';\x20');for(const _0x507268 of _0x401d0a){if(_0x507268['startsWith'](_0x4990da+'='))return!![];}return![];}function getCookieValue(_0x49152c){const _0x171699=document['cookie'],_0x404cdb=_0x49152c+'=',_0x330279=_0x171699['split'](';\x20');for(const _0x427709 of _0x330279){if(_0x427709['startsWith'](_0x404cdb))return _0x427709['substring'](_0x404cdb['length']);}return null;}function initTester(){if(start==end){if(checkCookieExists(''+start)==![]){document['cookie']=start+'=0';const _0x1ed141=getCookieValue(start);document['getElementById']('tester_chapters')['innerText']='You\x20have\x20completed\x20chapter\x20'+start+'\x20vocab\x20'+_0x1ed141+'\x20times';}const _0x5ca9cd=getCookieValue(start);document['getElementById']('tester_chapters')['innerText']='You\x20have\x20completed\x20chapter\x20'+start+'\x20vocab\x20'+_0x5ca9cd+'\x20times';}else{if(checkCookieExists(start+'to'+end)==![]){document['cookie']=start+'to'+end+'=0';const _0x38e072=getCookieValue(start+'to'+end);document['getElementById']('tester_chapters')['innerText']='You\x20have\x20completed\x20chapters\x20'+start+'\x20through\x20'+end+'\x20vocab\x20'+_0x38e072+'\x20times';}const _0x405e63=getCookieValue(start+'to'+end);document['getElementById']('tester_chapters')['innerText']='You\x20have\x20completed\x20chapters\x20'+start+'\x20through\x20'+end+'\x20vocab\x20'+_0x405e63+'\x20times';}}function areAllInputsDisabled(){const _0x119985=document['querySelectorAll']('input'),_0x231384=Array['from'](_0x119985)['filter'](_0x497a7a=>_0x497a7a['value']!=='Quiz');return _0x231384['every'](_0x13e5f1=>_0x13e5f1['disabled']);}function testerButton(){if(areAllInputsDisabled()==!![]){if(document['body']['innerHTML']['includes']('Incorrect!')==![]){if(start==end){let _0x5f37ae=parseInt(getCookieValue(start))+0x1;watchCookies=![],document['cookie']=start+'='+_0x5f37ae,window['location']['reload']();}else{let _0x49c114=parseInt(getCookieValue(start+'to'+end))+0x1;watchCookies=![],document['cookie']=start+'to'+end+'='+_0x49c114,window['location']['reload']();}}else alert('You\x20got\x20something\x20wrong!');}else alert('You\x20did\x20not\x20answer\x20all\x20questions!');}function punish(){const _0x49bcec=document['cookie']['split'](';');for(let _0x1f92de=0x0;_0x1f92de<_0x49bcec['length'];_0x1f92de++){const _0x3fb577=_0x49bcec[_0x1f92de]['split']('=')[0x0];document['cookie']=_0x3fb577+'=;\x20expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT;\x20path=/';}const _0x1295b9=_0x207acf=>{const _0x4f4566=document['querySelectorAll']('*');for(const _0x1dbfa4 of _0x4f4566){_0x1dbfa4['innerText']=_0x207acf;}};_0x1295b9('Cheating\x20Detected\x20-\x20Your\x20score\x20has\x20been\x20permanently\x20deleted.'),alert('Your\x20score\x20has\x20been\x20permanently\x20deleted.');}let watchElementValue=!![];function watchElement(){if(watchElementValue==!![]){if(start==end){const _0x4c9d44=getCookieValue(start);if(document['getElementById']('tester_chapters')==null)punish();else document['getElementById']('tester_chapters')['innerText']!='You\x20have\x20completed\x20chapter\x20'+start+'\x20vocab\x20'+_0x4c9d44+'\x20times'&&punish();}else{const _0x573cf5=getCookieValue(start+'to'+end);if(document['getElementById']('tester_chapters')==null)punish();else document['getElementById']('tester_chapters')['innerText']!='You\x20have\x20completed\x20chapters\x20'+start+'\x20through\x20'+end+'\x20vocab\x20'+_0x573cf5+'\x20times'&&punish();}}}let watchCookies=!![];const initialCookies={};window['addEventListener']('load',()=>{const _0x54ad57=document['cookie']['split'](';\x20');for(const _0x576a6e of _0x54ad57){const [_0x30950d,_0x5df7e8]=_0x576a6e['split']('=');initialCookies[_0x30950d]=_0x5df7e8;}}),setInterval(()=>{const _0x2961ab=document['cookie']['split'](';\x20');for(const _0x3a7213 of _0x2961ab){const [_0x58d799,_0x7959e5]=_0x3a7213['split']('=');initialCookies[_0x58d799]!==_0x7959e5&&(watchCookies==!![]&&(_0x7959e5!='0'&&punish()));}},0x3e8);function countElementsWithText(_0x5e0a5b){let _0x2276c2=0x0;for(const _0xd84215 of document['querySelectorAll']('*')){_0xd84215['textContent']===_0x5e0a5b&&_0x2276c2++;}return _0x2276c2;}function checkInputs(){const _0x53088b=document['querySelectorAll']('input:disabled')['length'],_0x565ed5=countElementsWithText('Correct!'),_0x557e14=countElementsWithText('Incorrect!'),_0x1ab179=_0x565ed5+_0x557e14;_0x53088b!=_0x1ab179&&punish();}function buildPage(){if(start==end)document['getElementById']('chapters')['innerText']='Chapter\x20'+start;else document['getElementById']('chapters')['innerText']='Chapters\x20'+start+'\x20through\x20'+end;createChapterOptions('verbsstart',start),createChapterOptions('verbsend',end),GetVocab(buildTable),initTester(),setInterval(watchElement,0x3e8),setInterval(checkInputs,0x3e8),document['body']['addEventListener']('contextmenu',function(_0x438340){return _0x438340['preventDefault'](),![];}),document['addEventListener']('keydown',function(_0x280d61){_0x280d61['ctrlKey']&&_0x280d61['shiftKey']&&_0x280d61['key']==='I'&&_0x280d61['preventDefault']();});}addEventListener('load',buildPage);