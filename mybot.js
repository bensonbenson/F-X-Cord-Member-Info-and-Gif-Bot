const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () =>
{
  console.log('Im ready for commands!');
});

//Profile Embeds 
const embedVic = new Discord.RichEmbed()
  .setTitle('Victoria')
  .setColor('#3498db')
  .addField('Birth Name:','Song Qian (宋茜)')
  .addField('Birthdate:','February 2, 1987 (age 30)')
  .addField('Nationality:','Chinese :flag_cn:')
  .addField('Position:','Leader, Main Dancer, Vocalist')
  .addField('Social Media:', '[IG] https://www.instagram.com/victoria02_02/                                 [Weibo] http://weibo.com/u/2902408801?is_all=1')
  .setThumbnail('https://i.imgur.com/K77tkH2.png')

const embedAmber = new Discord.RichEmbed()
    .setTitle('Amber')
    .setColor('#e67e22')
    .addField('Birth Name:','Amber Josephine Liu')
    .addField('Birthdate:','September 18, 1992 (age 24)')
    .addField('Nationality:','Taiwanese-American :flag_tw: - :flag_us:')
    .addField('Position:','Main Rapper, Sub-Vocalist')
    .addField('Social Media:', '[IG] https://www.instagram.com/ajol_llama/                                   [Weibo] http://weibo.com/u/2978548182?is_all=1                                                                                                     [Twitter] https://twitter.com/llama_ajol')
    .setThumbnail('https://i.imgur.com/gDddgMn.png')

const embedLuna = new Discord.RichEmbed()
    .setTitle('Luna')
    .setColor('#e168f1')
    .addField('Birth Name:','Park Sunyoung (박선영)')
    .addField('Birthdate:','August 12, 1993 (age 23)')
    .addField('Nationality:','Korean :flag_kr:')
    .addField('Position:','Main Vocalist, Lead Dancer')
    .addField('Social Media:', '[IG] https://www.instagram.com/hermosavidaluna/                                   [Weibo] http://weibo.com/u/5967085303?is_all=1')
    .setThumbnail('https://i.imgur.com/4T1whZr.png')

const embedKrystal = new Discord.RichEmbed()
    .setTitle('Krystal')
    .setColor('#1abc9c')
    .addField('Birth Name:','Chrystal Jung Soo Jung (정수정)')
    .addField('Birthdate:','October 24, 1994 (age 22)')
    .addField('Nationality:','Korean-American :flag_kr: - :flag_us:')
    .addField('Position:','Lead Vocalist, Face of the Group')
    .addField('Social Media:', '[IG] https://www.instagram.com/vousmevoyez/                                   [Weibo] http://weibo.com/u/5866653170?is_all=1#_0')
    .setThumbnail('https://i.imgur.com/oGhevWS.png')

const embedSulli = new Discord.RichEmbed()
    .setTitle('Sulli')
    .setColor('#c394F2')
    .addField('Birth Name:','Choi Jinri (최진리)')
    .addField('Birthdate:','March 29, 1994 (age 23)')
    .addField('Nationality:','Korean :flag_kr:')
    .addField('Position:','Vocalist, Sub Rapper, Face of the Group')
    .addField('Social Media:', '[IG] https://www.instagram.com/jelly_jilli/                                  [Weibo] http://weibo.com/u/5900965596?is_all=1')
    .setThumbnail('https://i.imgur.com/aRRmuiG.jpg ')

client.on('message', (message) =>
{
  if(!message.content===(config.prefix)) return;

  if(message.content===(config.prefix + 'jackjack'))
  {
    message.channel.sendMessage(':jackjack:');
  }

  //Gif & Profile commands
  if (message.content===(config.prefix + 'secret3')) //temp?
  {
    message.channel.sendMessage('http://i.imgur.com/02jwEvT.png');
  }
  if (message.content===(config.prefix + 'secret2')) //temp?
  {
    message.channel.sendMessage('http://i.imgur.com/Qyy8bs8.png');
  }
  if (message.content===(config.prefix + 'secret')) //temp?
  {
    message.channel.sendMessage('http://i.imgur.com/jwp5d9P.png');
  }
  if (message.content===(config.prefix + 'commands')) //temp?
  {
    message.channel.sendMessage('https://goo.gl/pY0M6a');
  }
  if (message.content===(config.prefix + 'bluena'))
  {
    message.channel.sendMessage('https://gfycat.com/GratefulConcernedIndigowingedparrot');
  }
  if (message.content===(config.prefix + 'bravo'))
  {
    message.channel.sendMessage('https://gfycat.com/UnpleasantHardCanvasback');
  }
  if (message.content===(config.prefix + 'buingbuing'))
  {
    message.channel.sendMessage('https://gfycat.com/FondNegligibleGar');
  }
  if (message.content===(config.prefix + 'byuntae'))
  {
    message.channel.sendMessage('https://www.youtube.com/watch?v=ctW_jyG_gT0');
  }
  if (message.content===(config.prefix + 'pervert'))
  {
    message.channel.sendMessage('https://www.youtube.com/watch?v=ctW_jyG_gT0');
  }
  if (message.content===(config.prefix + 'cheeky'))
  {
    message.channel.sendMessage('http://i.imgur.com/SQqbsOq.gif');
  }
  if (message.content===(config.prefix + 'cry'))
  {
    message.channel.sendMessage('https://gfycat.com/PowerlessMediocreAxisdeer');
  }
  if (message.content===(config.prefix + 'fuckyeah'))
  {
    message.channel.sendMessage('https://gfycat.com/ImmenseNaturalBrontosaurus');
  }
  if (message.content===(config.prefix + 'fy'))
  {
    message.channel.sendMessage('https://gfycat.com/ImmenseNaturalBrontosaurus');
  }
  if (message.content===(config.prefix + 'fyeah'))
  {
    message.channel.sendMessage('https://gfycat.com/ImmenseNaturalBrontosaurus');
  }
  if (message.content===(config.prefix + 'grr'))
  {
    message.channel.sendMessage('http://i.imgur.com/Skk1MCI.gif');
  }
  if (message.content===(config.prefix + 'haters'))
  {
    message.channel.sendMessage('https://gfycat.com/FixedLittleArrowworm');
  }
  if (message.content===(config.prefix + 'heterostal'))
  {
    message.channel.sendMessage('https://gfycat.com/RashPeriodicAmericantoad');
  }
  if (message.content===(config.prefix + 'hmph'))
  {
    message.channel.sendMessage('https://gfycat.com/UnnaturalVacantCottonmouth');
  }
  if (message.content===(config.prefix + 'horror'))
  {
    message.channel.sendMessage('http://i.imgur.com/SwOM0DG.gif');
  }
  if (message.content===(config.prefix + 'hug'))
  {
    message.channel.sendMessage('http://i.imgur.com/O5dsGEW.gif');
  }
  if (message.content===(config.prefix + 'icu'))
  {
    message.channel.sendMessage('https://gfycat.com/VainAssuredIceblueredtopzebra');
  }
  if (message.content===(config.prefix + 'instructions'))
  {
    message.channel.sendMessage('http://i.imgur.com/KYZAucG.gif');
  }
  if (message.content===(config.prefix + 'jig'))
  {
    message.channel.sendMessage('https://gfycat.com/DishonestImpressionableAsiaticmouflon');
  }
  if (message.content===(config.prefix + 'kryslay'))
  {
    message.channel.sendMessage('https://gfycat.com/SparklingBlankAppaloosa');
  }
  if (message.content===(config.prefix + 'omgpls'))
  {
    message.channel.sendMessage('https://gfycat.com/IcySinfulAntipodesgreenparakeet');
  }
  if (message.content===(config.prefix + 'lego'))
  {
    message.channel.sendMessage('http://i.imgur.com/WT9B0nt.jpg');
  }
  if (message.content===(config.prefix + 'letsgo'))
  {
    message.channel.sendMessage('https://streamable.com/4bul');
  }
  if (message.content===(config.prefix + 'likemyself'))
  {
    message.channel.sendMessage('https://gfycat.com/AnchoredUntriedBlacklemur');
  }
  if (message.content===(config.prefix + 'lluma1'))
  {
    message.channel.sendMessage('https://gfycat.com/ElasticRigidGreyhounddog');
  }
  if (message.content===(config.prefix + 'lluma2'))
  {
    message.channel.sendMessage('https://gfycat.com/InfantileHardtofindGallinule');
  }
  if (message.content===(config.prefix + 'lunakiss'))
  {
    message.channel.sendMessage('https://gfycat.com/RevolvingMajorBandicoot');
  }
  if (message.content===(config.prefix + 'lunagoodbye'))
  {
    message.channel.sendMessage('https://gfycat.com/SlimyAngelicIberiannase');
  }
  if (message.content===(config.prefix + 'lunaslay'))
  {
    message.channel.sendMessage('https://gfycat.com/PettyMammothAmericanavocet');
  }
  if (message.content===(config.prefix + 'ohmygod'))
  {
    message.channel.sendMessage('http://i.imgur.com/jKWJFDx.gif');
  }
  if (message.content===(config.prefix + 'omg'))
  {
    message.channel.sendMessage('http://i.imgur.com/jKWJFDx.gif');
  }
  if (message.content===(config.prefix + 'ohyeah'))
  {
    message.channel.sendMessage('https://streamable.com/mvkd6');
  }
  if (message.content===(config.prefix + 'omo'))
  {
    message.channel.sendMessage('http://i.imgur.com/a2797NI.gifJanuary');
  }
  if (message.content===(config.prefix + 'ooh'))
  {
    message.channel.sendMessage('https://gfycat.com/UnitedGivingFoxhound');
  }
  if (message.content===(config.prefix + 'pahty'))
  {
    message.channel.sendMessage('https://gfycat.com/DecentThoughtfulAustralianfurseal');
  }
  if (message.content===(config.prefix + 'peace'))
  {
    message.channel.sendMessage('https://gfycat.com/SelfishQualifiedCarp');
  }
  if (message.content===(config.prefix + 'stop'))
  {
    message.channel.sendMessage('https://gfycat.com/InfiniteWeightyBighornedsheep');
  }
  if (message.content === (config.prefix + 'sullijoy'))
  {
    message.channel.sendMessage('https://gfycat.com/FoolhardyInsidiousBarasingha');
  }
  if (message.content===(config.prefix + 'superluna'))
  {
    message.channel.sendMessage('https://gfycat.com/ShallowIncredibleChamois');
  }
  if (message.content===(config.prefix + 'totheluna'))
  {
    message.channel.sendMessage('https://gfycat.com/ShallowIncredibleChamois');
  }
  if (message.content===(config.prefix + 'timetogo'))
  {
    message.channel.sendMessage('https://gfycat.com/QuestionableGracefulFritillarybutterfly');
  }
  if (message.content===(config.prefix + 'udkm'))
  {
    message.channel.sendMessage('https://www.youtube.com/watch?v=896CTygljU0#t=27');
  }
  if (message.content===(config.prefix + 'youdontknowme'))
  {
    message.channel.sendMessage('https://www.youtube.com/watch?v=896CTygljU0#t=27');
  }
  if (message.content===(config.prefix + 'utried'))
  {
    message.channel.sendMessage('http://i.imgur.com/RMWXUHx.png');
  }
  if (message.content===(config.prefix + 'vicqueen'))
  {
    message.channel.sendMessage('https://gfycat.com/SolidGlisteningAmethystinepython');
  }
  if (message.content===(config.prefix + 'vicslay'))
  {
    message.channel.sendMessage('https://gfycat.com/FittingYawningHairstreak');
  }
  if (message.content===(config.prefix + 'wut'))
  {
    message.channel.sendMessage('http://i.imgur.com/mQv9x1r.gif');
  }
  if (message.content===(config.prefix + 'vicomo'))
  {
    message.channel.sendMessage('https://gfycat.com/CoordinatedEllipticalGrouse');
  }

  if((message.content===(config.prefix + "Victoriaprofile")) || (message.content===(config.prefix + "victoriaprofile")))
  {
    message.channel.sendEmbed(embedVic);
  }
  if((message.content===(config.prefix + "Amberprofile")) || (message.content===(config.prefix + "amberprofile")))
  {
    message.channel.sendEmbed(embedAmber);
  }
  if((message.content===(config.prefix + "Lunaprofile")) || (message.content===(config.prefix + "lunaprofile")))
  {
    message.channel.sendEmbed(embedLuna);
  }
  if((message.content===(config.prefix + "Krystalprofile")) || (message.content===(config.prefix + "krystalprofile")))
  {
    message.channel.sendEmbed(embedKrystal);
  }
  if((message.content===(config.prefix + "Sulliprofile")) || (message.content === (config.prefix + "sulli")))
  {
    message.channel.sendEmbed(embedSulli);
  }
});

client.login(config.token);
