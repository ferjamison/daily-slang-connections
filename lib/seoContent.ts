export type PillarPage = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  intro: string;
  exampleGroups: {
    name: string;
    words: string[];
    note: string;
  }[];
};

export type SlangMeaningPage = {
  slug: string;
  phrase: string;
  shortMeaning: string;
  tone: string;
  examples: string[];
  similar: string[];
  traps: string[];
  puzzleCategory: string;
};

export const pillarPages: PillarPage[] = [
  {
    slug: "daily-slang-puzzle",
    title: "Daily Slang Puzzle: Learn American Slang with a Daily Word Game",
    description: "A daily American slang puzzle for English learners with 16 words, 4 groups, hints, answers, and simple usage notes.",
    keyword: "daily slang puzzle",
    intro:
      "A daily slang puzzle is a quick English word game built around casual American speech. Every board gives you 16 slang words or phrases, and your job is to sort them into 4 groups of 4. Each group has a shared meaning, usage situation, or tone.",
    exampleGroups: [
      { name: "sounds excellent", words: ["fire", "lit", "dope", "sick"], note: "All four can praise something in casual speech." },
      { name: "seems suspicious", words: ["sus", "shady", "sketchy", "off"], note: "These point to doubt, risk, or a bad feeling." },
      { name: "canceling or disappearing", words: ["ghosted", "flaked", "bailed", "left on read"], note: "These connect through social plans or messages." },
    ],
  },
  {
    slug: "american-slang-quiz",
    title: "American Slang Quiz for English Learners",
    description: "An American slang quiz with simple meanings, examples, tone notes, and daily grouping challenges.",
    keyword: "american slang quiz for english learners",
    intro:
      "An American slang quiz should test more than dictionary definitions. Daily Slang Connections uses a daily grouping challenge, so you can check whether you understand the meaning, tone, and real-life use of common American slang.",
    exampleGroups: [
      { name: "agreement", words: ["bet", "say less", "i'm down", "sounds good"], note: "Each one can accept a plan or show agreement." },
      { name: "money talk", words: ["broke", "loaded", "pricey", "ballin'"], note: "The category is built around cost, cash, or wealth." },
      { name: "low energy", words: ["drained", "beat", "wiped", "fried"], note: "These describe being tired or mentally done." },
    ],
  },
  {
    slug: "slang-word-grouping-game",
    title: "Slang Word Grouping Game: Learn Slang by Categories",
    description: "A word grouping game that helps you learn American slang by categories, meanings, situations, and tone.",
    keyword: "slang word grouping game",
    intro:
      "A slang word grouping game asks you to compare casual phrases by meaning, context, and tone. Instead of answering one quiz question at a time, you get 16 words and discover the hidden categories through elimination.",
    exampleGroups: [
      { name: "texting back", words: ["hit me up", "dm me", "text me", "ping me"], note: "These all mean to contact someone." },
      { name: "relaxed", words: ["chill", "laid-back", "low-key", "easygoing"], note: "These describe a calm mood or style." },
      { name: "too much", words: ["extra", "over the top", "dramatic", "doing the most"], note: "The shared idea is exaggeration." },
    ],
  },
];

export const slangMeaningPages: SlangMeaningPage[] = [
  { slug: "what-does-sus-mean", phrase: "sus", shortMeaning: "suspicious, strange, or not trustworthy", tone: "casual and slightly playful", examples: ["That link looks sus.", "He changed his story twice, which feels sus."], similar: ["shady", "sketchy", "off"], traps: ["Do not use it for formal accusations.", "It is more casual than suspicious."], puzzleCategory: "suspicion" },
  { slug: "what-does-no-cap-mean", phrase: "no cap", shortMeaning: "no lie, for real, or I am serious", tone: "casual emphasis", examples: ["That was the best burger I have had, no cap.", "No cap, this game is hard."], similar: ["for real", "not kidding", "dead serious"], traps: ["It does not mean a physical hat.", "It can sound too casual in formal writing."], puzzleCategory: "truth and emphasis" },
  { slug: "what-does-lowkey-mean", phrase: "low-key", shortMeaning: "a little, quietly, secretly, or not too intense", tone: "soft and casual", examples: ["I am low-key tired.", "That place is low-key amazing."], similar: ["kind of", "sort of", "quietly"], traps: ["Low-key can change meaning by sentence.", "It is not the same as low quality."], puzzleCategory: "soft intensity" },
  { slug: "what-does-ghosted-mean", phrase: "ghosted", shortMeaning: "stopped replying without explanation", tone: "casual and social", examples: ["She ghosted me after the first date.", "The recruiter ghosted him."], similar: ["left on read", "ignored", "disappeared"], traps: ["It is usually about communication.", "It does not mean seeing a ghost."], puzzleCategory: "not replying" },
  { slug: "what-does-left-on-read-mean", phrase: "left on read", shortMeaning: "someone saw your message but did not reply", tone: "casual texting language", examples: ["I asked a question and got left on read.", "Being left on read feels awkward."], similar: ["ghosted", "ignored", "no reply"], traps: ["It refers to read receipts.", "It is not about reading a book."], puzzleCategory: "texting silence" },
  { slug: "what-does-bet-mean", phrase: "bet", shortMeaning: "okay, agreed, or sounds good", tone: "very casual", examples: ["Want to meet at seven? Bet.", "Bet, I will bring snacks."], similar: ["sounds good", "for sure", "say less"], traps: ["It can still mean wager in other contexts.", "Tone matters a lot."], puzzleCategory: "agreement" },
  { slug: "what-does-lit-mean", phrase: "lit", shortMeaning: "exciting, excellent, or very fun", tone: "casual and enthusiastic", examples: ["The party was lit.", "That playlist is lit."], similar: ["fire", "dope", "sick"], traps: ["It can also mean illuminated.", "It may sound dated in some contexts."], puzzleCategory: "praise" },
  { slug: "what-does-fire-mean", phrase: "fire", shortMeaning: "really good or impressive", tone: "casual praise", examples: ["Those shoes are fire.", "This song is fire."], similar: ["lit", "dope", "sick"], traps: ["It is positive when describing style or quality.", "It can still mean actual flames."], puzzleCategory: "praise" },
  { slug: "what-does-shady-mean", phrase: "shady", shortMeaning: "dishonest, suspicious, or morally questionable", tone: "casual criticism", examples: ["That deal sounds shady.", "He was acting shady."], similar: ["sus", "sketchy", "fishy"], traps: ["It can literally mean full of shade.", "In slang, it points to distrust."], puzzleCategory: "suspicion" },
  { slug: "what-does-flake-mean", phrase: "flake", shortMeaning: "cancel plans or fail to show up", tone: "casual and mildly annoyed", examples: ["Do not flake tonight.", "He always flakes at the last minute."], similar: ["bail", "cancel", "no-show"], traps: ["It can also be a noun for an unreliable person.", "It is not about snowflakes here."], puzzleCategory: "canceling plans" },
  { slug: "what-does-bail-mean", phrase: "bail", shortMeaning: "leave, cancel, or back out of plans", tone: "casual", examples: ["I might bail if I feel sick.", "They bailed before dinner."], similar: ["flake", "dip", "back out"], traps: ["It can also mean money paid to leave jail.", "Context decides the meaning."], puzzleCategory: "leaving or canceling" },
  { slug: "what-does-dope-mean", phrase: "dope", shortMeaning: "cool, excellent, or impressive", tone: "casual praise", examples: ["That jacket is dope.", "The design looks dope."], similar: ["fire", "lit", "sick"], traps: ["It can have drug-related meanings elsewhere.", "Use context carefully."], puzzleCategory: "praise" },
  { slug: "what-does-sick-mean", phrase: "sick", shortMeaning: "very cool or impressive", tone: "casual praise", examples: ["That trick was sick.", "Sick setup!"], similar: ["fire", "dope", "awesome"], traps: ["It can also mean ill.", "In praise, the tone is positive."], puzzleCategory: "praise" },
  { slug: "what-does-flex-mean", phrase: "flex", shortMeaning: "show off something you are proud of", tone: "casual, sometimes teasing", examples: ["He posted his new car as a flex.", "Nice flex, but okay."], similar: ["show off", "brag", "stunt"], traps: ["It can also mean bend a muscle.", "As slang, it is about status."], puzzleCategory: "showing off" },
  { slug: "what-does-vibe-mean", phrase: "vibe", shortMeaning: "the feeling or mood something gives", tone: "casual and flexible", examples: ["This cafe has a calm vibe.", "I like her vibe."], similar: ["energy", "mood", "feel"], traps: ["It is broad, so context matters.", "It is not a precise technical word."], puzzleCategory: "mood" },
  { slug: "what-does-spill-the-tea-mean", phrase: "spill the tea", shortMeaning: "share gossip or interesting private news", tone: "playful and casual", examples: ["Okay, spill the tea.", "She spilled the tea about the meeting."], similar: ["gossip", "dish", "tell me everything"], traps: ["It is not about literal tea.", "Use it in casual settings."], puzzleCategory: "gossip" },
  { slug: "what-does-hit-me-up-mean", phrase: "hit me up", shortMeaning: "contact me or message me", tone: "friendly and casual", examples: ["Hit me up when you get there.", "If you need help, hit me up."], similar: ["text me", "dm me", "ping me"], traps: ["It is not about hitting someone.", "It is usually informal."], puzzleCategory: "contacting someone" },
  { slug: "what-does-chill-mean", phrase: "chill", shortMeaning: "relaxed, calm, or easygoing", tone: "casual", examples: ["He is pretty chill.", "Let us have a chill night."], similar: ["laid-back", "relaxed", "easygoing"], traps: ["It can also mean cold.", "As slang, it often describes mood."], puzzleCategory: "relaxed mood" },
  { slug: "what-does-extra-mean", phrase: "extra", shortMeaning: "too dramatic or over the top", tone: "casual criticism or teasing", examples: ["That reaction was extra.", "She went extra with the decorations."], similar: ["dramatic", "over the top", "doing the most"], traps: ["It can simply mean additional.", "As slang, it means too much."], puzzleCategory: "too much" },
  { slug: "what-does-crash-mean", phrase: "crash", shortMeaning: "sleep suddenly, stay somewhere, or fail", tone: "casual", examples: ["I am going to crash early.", "Can I crash at your place?"], similar: ["sleep", "pass out", "stay over"], traps: ["It can also mean an accident or computer failure.", "Context decides the meaning."], puzzleCategory: "sleep or staying over" },
  { slug: "what-does-broke-mean", phrase: "broke", shortMeaning: "having little or no money", tone: "casual", examples: ["I cannot go out. I am broke.", "College made me feel broke."], similar: ["short on cash", "out of money", "strapped"], traps: ["It can also mean broken.", "As money slang, it describes finances."], puzzleCategory: "money" },
  { slug: "what-does-loaded-mean", phrase: "loaded", shortMeaning: "very rich or having a lot of money", tone: "casual", examples: ["Her family is loaded.", "That company is loaded."], similar: ["rich", "wealthy", "well-off"], traps: ["It can also mean full or carrying something.", "It may sound blunt."], puzzleCategory: "money" },
  { slug: "what-does-pricey-mean", phrase: "pricey", shortMeaning: "expensive", tone: "casual and neutral", examples: ["That restaurant is pricey.", "The tickets were pricey."], similar: ["expensive", "costly", "not cheap"], traps: ["It is softer than overpriced.", "It does not always mean bad value."], puzzleCategory: "cost" },
  { slug: "what-does-sketchy-mean", phrase: "sketchy", shortMeaning: "suspicious, unsafe, or not reliable", tone: "casual warning", examples: ["That alley looks sketchy.", "The website seems sketchy."], similar: ["sus", "shady", "unsafe"], traps: ["It can also mean rough or incomplete art.", "As slang, it suggests concern."], puzzleCategory: "suspicion" },
  { slug: "what-does-say-less-mean", phrase: "say less", shortMeaning: "I understand; no need to explain more", tone: "casual agreement", examples: ["Pizza at eight? Say less.", "Say less, I am there."], similar: ["bet", "got it", "I'm in"], traps: ["It is not rude by default.", "It means the message is clear."], puzzleCategory: "agreement" },
  { slug: "what-does-deadass-mean", phrase: "deadass", shortMeaning: "seriously or completely honest", tone: "very casual and emphatic", examples: ["I am deadass tired.", "Deadass, that was amazing."], similar: ["seriously", "for real", "no cap"], traps: ["It can sound strong or informal.", "Avoid it in formal settings."], puzzleCategory: "emphasis" },
  { slug: "what-does-mid-mean", phrase: "mid", shortMeaning: "average, not very good, or disappointing", tone: "casual criticism", examples: ["The movie was mid.", "That meal was kind of mid."], similar: ["average", "meh", "nothing special"], traps: ["It is usually negative.", "It does not mean middle in every sentence."], puzzleCategory: "mild criticism" },
  { slug: "what-does-slay-mean", phrase: "slay", shortMeaning: "do something very well or look great", tone: "enthusiastic praise", examples: ["You slayed that presentation.", "That outfit slays."], similar: ["crush it", "kill it", "look great"], traps: ["It can literally mean kill in older usage.", "As slang, it is positive."], puzzleCategory: "praise" },
  { slug: "what-does-rizz-mean", phrase: "rizz", shortMeaning: "charm or flirting ability", tone: "playful and informal", examples: ["He has rizz.", "That line had no rizz."], similar: ["charm", "game", "charisma"], traps: ["It is very casual.", "It often appears in dating or flirting contexts."], puzzleCategory: "charm" },
  { slug: "what-does-cap-mean", phrase: "cap", shortMeaning: "a lie or exaggeration", tone: "casual", examples: ["That story is cap.", "Stop the cap."], similar: ["lie", "fake", "not true"], traps: ["It can still mean a hat.", "No cap means no lie, but cap means lie."], puzzleCategory: "truth and lies" },
];

export function getPillarPage(slug: string) {
  return pillarPages.find((page) => page.slug === slug);
}

export function getSlangMeaningPage(slug: string) {
  return slangMeaningPages.find((page) => page.slug === slug);
}

export function getSeoSlugs() {
  return pillarPages.map((page) => page.slug);
}
