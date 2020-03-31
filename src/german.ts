import React from "react";

enum attribute {
  // articulation modifiers: font face? 
  aspirated,
  nasal,
  plosive,
  rounded,
  vocal, 
  // dipthone
  glideFront,
  glideBack,
  // sonarances: hue,weight
  voiced,
  long,
// postion  : crosshair background
  high,
  low,
  front,
  back,

  labial,
  dental,
  aveolar,
  palatal,
  glotal,
}

type a = attribute

type attributeDisplayMapping = {
  aspirated: {color:'green'},
  liquid: {color:'blue'},
  plosive: {color:'black'},
  vocal: { color:'red'}

  rounded: { textDecoration: ' line-through wavy'},

  // sonarances: hue,weight
  voiced: {fontWeight:'bold'},
  long: {fontWeight:'bold'},
// postion  : crosshair background
  high: {textDecoration: 'lineover'},
  low: {textDecoration: 'underline'},
  mid: {textDecoration: 'line-through'}
  // horizontal
  front: {backgroundImage:'front'},
  back: {backgroundImage:'back'},

  labial: {backgroundImage:'labial'},
  dental: {},
  avelar: {},
  palatal: {},
  glotal: {},
}

type phone = {
  grapheme : grapheme
  attributes : attribute[] 
} 
// position,sonorance,blockage,movement,length/intensity

const phones = {
  a: [attribute.vocal,attribute.front,attribute.low],
  e: [attribute.vocal,attribute.front],
  i: [attribute.vocal,attribute.front,attribute.high],
  o: [attribute.vocal,attribute.back],
  u: [attribute.vocal,attribute.back,attribute.high],
  ä: [attribute.vocal],
  ö: [attribute.vocal,attribute.back,attribute.rounded],
  ü: [attribute.vocal,attribute.back,attribute.high,attribute.rounded],
  au: [attribute.vocal,attribute.front,attribute.low,attribute.glideBack],
  ei: [attribute.vocal,attribute.front,attribute.low,attribute.glideFront],
  eu: [attribute.vocal,attribute.back,attribute.glideFront],
  b: [attribute.labial,attribute.plosive,attribute.voiced],
  p: [attribute.labial,attribute.plosive],
  d: [attribute.dental,attribute.plosive,attribute.voiced],
  t: [attribute.dental,attribute.plosive],
  g: [attribute.glotal,attribute.plosive,attribute.voiced],
  k: [attribute.glotal,attribute.plosive],
  ch: [attribute.glotal,attribute.aspirated],
  r: [attribute.glotal,attribute.aspirated,attribute.voiced],
  sch: [attribute.palatal,attribute.aspirated],
  m: [attribute.labial,attribute.voiced,attribute.nasal],
  n: [attribute.dental,attribute.voiced,attribute.nasal],
  l: [attribute.dental,attribute.voiced],
  z: [attribute.dental,attribute.plosive,attribute.aspirated],
  pf: [attribute.plosive,attribute.aspirated,attribute.labial],
  f: [attribute.aspirated,attribute.labial],
  v: [attribute.aspirated,attribute.labial],
  w: [attribute.aspirated,attribute.labial,attribute.voiced],
  ss: [attribute.aspirated,attribute.aveolar],
  x: [attribute.plosive,attribute.aspirated,attribute.palatal],
  s: [attribute.palatal,attribute.aspirated],
} 

type grapheme = keyof typeof phones 

// s: stand: sch, bis : s =>  initial vs final.... 
// disambiguate: final=> s, sonst sch 

const parseWordToGraphemes: (word:string) => grapheme[] = (word) => {
  return []
}

const findByAttributes: (positive:attribute[],negative?:attribute) => grapheme[] = (word) => {
  return []
}
