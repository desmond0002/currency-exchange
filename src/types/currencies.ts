export interface RateType {
  date: string;
  usd?: ICurrencies<number> 
  cny?: ICurrencies<number>
  eur?: ICurrencies<number>

};

export interface ICurrencies<T> {
  $myro: T;

  $wen: T;

  "00": T;

  "0x0": T;

  "1000sats": T;

  "1inch": T;

  aave: T;

  abt: T;

  ach: T;

  acs: T;

  ada: T;

  aed: T;

  aergo: T;

  aero: T;

  aevo: T;

  afn: T;

  agi: T;

  agix: T;

  agld: T;

  ai: T;

  aioz: T;

  akt: T;

  alcx: T;

  aleph: T;

  alex: T;

  algo: T;

  alice: T;

  all: T;

  alph: T;

  alt: T;

  alusd: T;

  amd: T;

  amp: T;

  ampl: T;

  ang: T;

  ankr: T;

  ant: T;

  aoa: T;

  ape: T;

  apex: T;

  api3: T;

  apl: T;

  apt: T;

  ar: T;

  arb: T;

  ark: T;

  arkm: T;

  arpa: T;

  ars: T;

  asm: T;

  ast: T;

  astr: T;

  ata: T;

  atom: T;

  ats: T;

  auction: T;

  aud: T;

  audio: T;

  aurora: T;

  avax: T;

  avt: T;

  awg: T;

  axl: T;

  axs: T;

  azero: T;

  azm: T;

  azn: T;

  babydoge: T;

  badger: T;

  bake: T;

  bal: T;

  bam: T;

  band: T;

  bat: T;

  bbd: T;

  bch: T;

  bdt: T;

  bdx: T;

  beam: T;

  bef: T;

  bgb: T;

  bgn: T;

  bhd: T;

  bico: T;

  bif: T;

  bigtime: T;

  bit: T;

  bld: T;

  blur: T;

  blz: T;

  bmd: T;

  bnb: T;

  bnd: T;

  bnt: T;

  bob: T;

  boba: T;

  bome: T;

  bond: T;

  bone: T;

  bonk: T;

  bora: T;

  borg: T;

  brett: T;

  brl: T;

  bsd: T;

  bsv: T;

  bsw: T;

  btc: T;

  "btc.b": T;

  btcb: T;

  btg: T;

  btn: T;

  btrst: T;

  btt: T;

  busd: T;

  bwp: T;

  byn: T;

  byr: T;

  bzd: T;

  c98: T;

  cad: T;

  caf: T;

  cake: T;

  canto: T;

  cbeth: T;

  cdai: T;

  cdf: T;

  cdt: T;

  celo: T;

  celr: T;

  ceth: T;

  cfg: T;

  cfx: T;

  cgld: T;

  cheel: T;

  chf: T;

  chr: T;

  chz: T;

  ckb: T;

  clp: T;

  clv: T;

  cnh: T;

  cny: T;

  comai: T;

  comp: T;

  cop: T;

  coq: T;

  core: T;

  corgiai: T;

  coti: T;

  coval: T;

  cqt: T;

  crc: T;

  cro: T;

  crpt: T;

  crv: T;

  cspr: T;

  ctc: T;

  ctsi: T;

  ctx: T;

  cuc: T;

  cup: T;

  cvc: T;

  cve: T;

  cvx: T;

  cwbtc: T;

  cyp: T;

  czk: T;

  dag: T;

  dai: T;

  dao: T;

  dar: T;

  dash: T;

  dcr: T;

  ddx: T;

  dem: T;

  deso: T;

  dexe: T;

  dext: T;

  dfi: T;

  dia: T;

  dimo: T;

  djf: T;

  dkk: T;

  dnt: T;

  doge: T;

  dop: T;

  dora: T;

  dot: T;

  drep: T;

  dydx: T;

  dym: T;

  dyp: T;

  dzd: T;

  edu: T;

  edum: T;

  eek: T;

  eeth: T;

  egld: T;

  egp: T;

  ela: T;

  elf: T;

  elg: T;

  enj: T;

  ens: T;

  eos: T;

  ern: T;

  esp: T;

  etb: T;

  etc: T;

  eth: T;

  eth2: T;

  ethdydx: T;

  ethfi: T;

  ethw: T;

  ethx: T;

  eur: T;

  euroc: T;

  ever: T;

  farm: T;

  fdusd: T;

  fei: T;

  fet: T;

  fida: T;

  fil: T;

  fim: T;

  fis: T;

  fjd: T;

  fkp: T;

  floki: T;

  flow: T;

  flr: T;

  flux: T;

  fnsa: T;

  fort: T;

  forth: T;

  fox: T;

  frax: T;

  frf: T;

  frxeth: T;

  ftm: T;

  ftn: T;

  ftt: T;

  fx: T;

  fxs: T;

  gaj: T;

  gal: T;

  gala: T;

  gas: T;

  gbp: T;

  gel: T;

  gf: T;

  gfi: T;

  ggp: T;

  ghc: T;

  ghs: T;

  ghst: T;

  gip: T;

  glm: T;

  glmr: T;

  gmd: T;

  gmt: T;

  gmx: T;

  gnf: T;

  gno: T;

  gns: T;

  gnt: T;

  gods: T;

  grd: T;

  grin: T;

  grt: T;

  gst: T;

  gt: T;

  gtc: T;

  gtq: T;

  gusd: T;

  gxc: T;

  gyd: T;

  gyen: T;

  hbar: T;

  hbtc: T;

  hft: T;

  high: T;

  hkd: T;

  hnl: T;

  hnt: T;

  honey: T;

  hopr: T;

  hot: T;

  hrk: T;

  ht: T;

  htg: T;

  huf: T;

  icp: T;

  icx: T;

  id: T;

  idex: T;

  idr: T;

  iep: T;

  ils: T;

  ilv: T;

  imp: T;

  imx: T;

  index: T;

  inj: T;

  inr: T;

  inv: T;

  iost: T;

  iota: T;

  iotx: T;

  iq: T;

  iqd: T;

  irr: T;

  isk: T;

  itl: T;

  jasmy: T;

  jep: T;

  jmd: T;

  jod: T;

  joe: T;

  jpy: T;

  jst: T;

  jto: T;

  jup: T;

  kas: T;

  kava: T;

  kcs: T;

  kda: T;

  keep: T;

  kes: T;

  kgs: T;

  khr: T;

  klay: T;

  kmf: T;

  knc: T;

  kpw: T;

  krl: T;

  krw: T;

  ksm: T;

  kub: T;

  kuji: T;

  kwd: T;

  kyd: T;

  kzt: T;

  ladys: T;

  lak: T;

  lbp: T;

  lcx: T;

  ldo: T;

  leo: T;

  link: T;

  lit: T;

  lkr: T;

  loka: T;

  loom: T;

  lpt: T;

  lqty: T;

  lrc: T;

  lrd: T;

  lsd: T;

  lseth: T;

  lsk: T;

  lsl: T;

  ltc: T;

  ltl: T;

  luf: T;

  luna: T;

  lunc: T;

  lusd: T;

  lvl: T;

  lyd: T;

  lyx: T;

  lyxe: T;

  mad: T;

  magic: T;

  mana: T;

  manta: T;

  mask: T;

  math: T;

  matic: T;

  mav: T;

  mavia: T;

  mbx: T;

  mco2: T;

  mdl: T;

  mdt: T;

  media: T;

  meme: T;

  meth: T;

  metis: T;

  mga: T;

  mgf: T;

  mina: T;

  mir: T;

  mkd: T;

  mkr: T;

  mkusd: T;

  mln: T;

  mmk: T;

  mnde: T;

  mnt: T;

  mobile: T;

  mog: T;

  mona: T;

  mop: T;

  movr: T;

  mpl: T;

  mro: T;

  mrs: T;

  mru: T;

  msol: T;

  mtl: T;

  mubi: T;

  multi: T;

  mur: T;

  muse: T;

  mvr: T;

  mwk: T;

  mx: T;

  mxc: T;

  mxn: T;

  mxv: T;

  myr: T;

  mzm: T;

  mzn: T;

  nad: T;

  nct: T;

  near: T;

  neo: T;

  neon: T;

  nest: T;

  nexo: T;

  nft: T;

  ngn: T;

  nio: T;

  nkn: T;

  nlg: T;

  nmr: T;

  nok: T;

  nos: T;

  npr: T;

  npxs: T;

  ntrn: T;

  nu: T;

  nxm: T;

  nzd: T;

  oas: T;

  ocean: T;

  ogn: T;

  ohm: T;

  okb: T;

  okt: T;

  olas: T;

  om: T;

  omg: T;

  omi: T;

  omr: T;

  ondo: T;

  one: T;

  ont: T;

  ooki: T;

  op: T;

  orai: T;

  orca: T;

  ordi: T;

  orn: T;

  osak: T;

  osmo: T;

  ox_old: T;

  oxt: T;

  paal: T;

  pab: T;

  pandora: T;

  pax: T;

  paxg: T;

  pen: T;

  pendle: T;

  people: T;

  pepe: T;

  perp: T;

  pgk: T;

  php: T;

  pixel: T;

  pkr: T;

  pla: T;

  pln: T;

  plu: T;

  png: T;

  pokt: T;

  pols: T;

  poly: T;

  polyx: T;

  pond: T;

  popcat: T;

  pork: T;

  portal: T;

  powr: T;

  prime: T;

  pro: T;

  prom: T;

  prq: T;

  pte: T;

  pundix: T;

  pyg: T;

  pyr: T;

  pyth: T;

  pyusd: T;

  qar: T;

  qi: T;

  qnt: T;

  qtum: T;

  quick: T;

  rad: T;

  rai: T;

  rare: T;

  rari: T;

  ray: T;

  rbn: T;

  ren: T;

  render: T;

  rep: T;

  repv2: T;

  req: T;

  reth: T;

  rgt: T;

  rif: T;

  rlb: T;

  rlc: T;

  rly: T;

  rndr: T;

  rol: T;

  ron: T;

  ronin: T;

  rose: T;

  rpl: T;

  rsd: T;

  rseth: T;

  rsr: T;

  rss3: T;

  rub: T;

  rune: T;

  rvn: T;

  rwf: T;

  sand: T;

  sar: T;

  sats: T;

  savax: T;

  sbd: T;

  sc: T;

  scr: T;

  sdd: T;

  sdg: T;

  seam: T;

  sei: T;

  sek: T;

  sfp: T;

  sfrxeth: T;

  sfund: T;

  sgb: T;

  sgd: T;

  shdw: T;

  shib: T;

  shp: T;

  shping: T;

  sit: T;

  skk: T;

  skl: T;

  sle: T;

  slerf: T;

  sll: T;

  slp: T;

  snt: T;

  snx: T;

  sol: T;

  sos: T;

  spa: T;

  spell: T;

  spl: T;

  srd: T;

  srg: T;

  ssp: T;

  ssv: T;

  std: T;

  steth: T;

  stg: T;

  stn: T;

  storj: T;

  strax: T;

  strd: T;

  strk: T;

  stsol: T;

  stx: T;

  sui: T;

  suku: T;

  super: T;

  sushi: T;

  svc: T;

  sweth: T;

  swftc: T;

  sxp: T;

  sylo: T;

  syn: T;

  sync: T;

  syp: T;

  szl: T;

  t: T;

  tao: T;

  tel: T;

  tet: T;

  tfuel: T;

  thb: T;

  theta: T;

  tia: T;

  time: T;

  tjs: T;

  tkx: T;

  tmm: T;

  tmt: T;

  tnd: T;

  ton: T;

  tone: T;

  top: T;

  topia: T;

  tor: T;

  trac: T;

  trb: T;

  tribe: T;

  trl: T;

  tru: T;

  trump: T;

  trx: T;

  try: T;

  ttd: T;

  ttt: T;

  tusd: T;

  tvd: T;

  tvk: T;

  twd: T;

  twt: T;

  tzs: T;

  uah: T;

  ugx: T;

  uma: T;

  unfi: T;

  uni: T;

  uos: T;

  upi: T;

  uqc: T;

  usd: T;

  usdc: T;

  usdd: T;

  usde: T;

  usdp: T;

  usdt: T;

  ust: T;

  ustc: T;

  uyu: T;

  uzs: T;

  val: T;

  vanry: T;

  vara: T;

  veb: T;

  ved: T;

  vef: T;

  velo: T;

  ves: T;

  vet: T;

  vgx: T;

  vnd: T;

  vnst: T;

  voxel: T;

  vr: T;

  vtho: T;

  vuv: T;

  wampl: T;

  waves: T;

  waxl: T;

  waxp: T;

  wbeth: T;

  wbt: T;

  wbtc: T;

  wcfg: T;

  weeth: T;

  wemix: T;

  whrh: T;

  wif: T;

  wld: T;

  wluna: T;

  woo: T;

  wst: T;

  xaf: T;

  xag: T;

  xai: T;

  xau: T;

  xaut: T;

  xbt: T;

  xcd: T;

  xch: T;

  xcn: T;

  xdc: T;

  xdr: T;

  xec: T;

  xem: T;

  xlm: T;

  xmon: T;

  xmr: T;

  xof: T;

  xpd: T;

  xpf: T;

  xpt: T;

  xrd: T;

  xrp: T;

  xtz: T;

  xvs: T;

  xyo: T;

  yer: T;

  yfi: T;

  yfii: T;

  ygg: T;

  zar: T;

  zec: T;

  zen: T;

  zeta: T;

  zil: T;

  zmk: T;

  zmw: T;

  zrx: T;

  zwd: T;

  zwl: T;
}
