var eyeN = '~@~A~C';
var eyeP = 'defghi~/~0~1~2~3~4~B';
var headM = '{N{O{P{\\{]{^{_{`{k{l{m{n{o{p%&\'()*+56789:;DEFGHIJKTUVWXYZ[defghijktu~!~"~#~$~%~&~/~0~1~2~3~4~5~6~?~@~A~B~C~D~E~F~N~O~P~Q~R~S~T~U~V~^~_~`~a~b~c~d~e~f~n~o~p~q~r~s~t~u~!';
var jawM = '{({){*{+{,{-{.{/{0{9{:{;{<{={>{?{@{I{J{K{L{M{N{O{P{Y{Z{[{\\{]{^{_{`{i{j{k{l{m{n{o{p%&\'()*+56789:;EFGHIJKVWXYZ[ghijk~#~$~%~&';

var frames = [
  '', // 0
  'YXWVUTihgfed', // 1
  'IHGFEDYXWVUT', // 2
  'YXWVUTIHGFED', // 3
  'ihgfedYXWVUT', // 4
  'E5%{i', // 5
  '~#gVF6', // 6
  'W', // 7
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
    f: [0]
  },
  jawM: {
    kf: jawM,
    f: [5,6,7,7,6,5]
  },
};