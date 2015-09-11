var eyeN = '~>~?~A';
var eyeP = 'cdefgh~-~.~/~0~1~2~@';
var headM = '{N{O{P{\\{]{^{_{`{k{l{m{n{o{p$%&\'()*456789:CDEFGHIJSTUVWXYZcdefghijstuv~!~"~#~$~-~.~/~0~1~2~3~4~=~>~?~@~A~B~C~D~L~M~N~O~P~Q~R~S~T~\\~]~^~_~`~a~b~c~d~l~m~n~o~p~q~r~s~t';
var headN = '';
var jawM = '{({){*{+{,{-{.{/{0{9{:{;{<{={>{?{@{I{J{K{L{M{N{O{P{Y{Z{[{\\{]{^{_{`{i{j{k{l{m{n{o{p$%&\'()*456789:DEFGHIJUVWXYZfghij~!~"~#~$';
var mouthP = 'pu~+~,~-~.';
var noseM = '3CScqrs';

var frames = [
  '', // 0
  'XWVUTShgfedc', // 1
  'HGFEDCXWVUTS', // 2
  'XWVUTSHGFEDC', // 3
  'hgfedcXWVUTS', // 4
  'cSC4$', // 5
  '{^{]{\\{N', // 6
  '%{l{k{`{_{P{O', // 7
  '~M~=~-sdTD5&{p{o{n{m', // 8
  '~<~,rb', // 9
  '~K~;cSC43$', // 10
  '~[~+RB#{j{i{^{]{\\{N{M{L', // 11
  '~k~Z~J~:~*qa2%{l{k{`{_{[{Z{P{O{K{@{?{>{={<', // 12
  '~M~=~-spd`TQD5&"{p{o{n{m{h{g{Y{J{;{0{/{-{,', // 13
  'D4${i', // 14
  '~!fUE5', // 15
  'V', // 16
  '~/~*up', // 17
  '~?~:~/~*', // 18
  '~/~*~?~:', // 19
  'up~/~*', // 20
];

var animations = {
  eyeN: {
    kf: eyeN,
    f: [0,0,0,0,0,0,0,0,0,0,0]
  },
  eyeP: {
    kf: eyeP,
    f: [1,0,2,0,3,0,2,0,3,0,4]
  },
  headM: {
    kf: headM,
    f: [0,5,6,7,8,0,8,7,6,5,0]
  },
  headN: {
    kf: headN,
    f: [9,10,11,12,13,0,13,12,11,10,9]
  },
  jawM: {
    kf: jawM,
    f: [14,15,16,16,15,14]
  },
  mouthP: {
    kf: mouthP,
    f: [0,0,17,0,0,0,18,0,0,0,19,0,0,0,20,0,0]
  },
  noseM: {
    kf: noseM,
    f: [0]
  },
};