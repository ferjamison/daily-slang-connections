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

export type CoreSlangPage = {
  slug: string;
  phrase: string;
  title: string;
  quickMeaning: string;
  simpleExplanation: string;
  whenPeopleUseIt: string;
  tone: string;
  examples: string[];
  replies: string[];
  similar: string[];
  difference: string;
  whenNotToUse: string;
  faqs: { question: string; answer: string }[];
};

export type LongTailGuidePage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
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

export const coreSlangPages: CoreSlangPage[] = [
  {
    slug: "what-does-no-cap-mean",
    phrase: "no cap",
    title: "What Does \"No Cap\" Mean in Slang?",
    quickMeaning: "\"No cap\" means \"no lie,\" \"for real,\" or \"I'm serious.\"",
    simpleExplanation: "People use \"no cap\" when they want to show that they are being honest or not exaggerating. It often makes a strong opinion sound more believable.",
    whenPeopleUseIt: "You usually see it in texting, TikTok comments, Instagram captions, and casual conversations with friends.",
    tone: "Casual, confident, and internet-native. It is not usually rude, but it can sound awkward in formal situations.",
    examples: ["This song is so good, no cap.", "No cap, that was the best burger I've ever had.", "She's actually really talented, no cap.", "I'm tired as hell, no cap.", "That outfit is fire, no cap."],
    replies: ["Fr.", "I know, right?", "No lies detected.", "Exactly.", "You're not wrong."],
    similar: ["for real", "fr", "deadass", "not gonna lie", "seriously"],
    difference: "\"No cap\" sounds younger and more internet-native than \"seriously.\" \"For real\" is more common and safer in everyday speech. \"Deadass\" is stronger and rougher.",
    whenNotToUse: "Do not use it in formal emails, essays, job interviews, or when talking to teachers or bosses unless the situation is very casual.",
    faqs: [
      { question: "Is \"no cap\" rude?", answer: "No. It is usually not rude, but it is very casual." },
      { question: "Is \"no cap\" still used?", answer: "Yes, especially online, but it has a strong Gen Z and internet feel." },
      { question: "What does \"no cap\" mean on TikTok?", answer: "It usually means the person is being honest or strongly agreeing with something." },
    ],
  },
  {
    slug: "what-does-low-key-mean",
    phrase: "low-key",
    title: "What Does \"Low-Key\" Mean in Texting?",
    quickMeaning: "\"Low-key\" means a little, secretly, quietly, or not too intensely.",
    simpleExplanation: "People use \"low-key\" to soften a feeling or opinion. It can make a sentence sound less dramatic, more private, or more casual.",
    whenPeopleUseIt: "You see it in texting, comments, casual conversation, and captions when someone wants to say something without sounding too intense.",
    tone: "Casual, soft, and sometimes slightly secretive. It is usually not rude.",
    examples: ["I'm low-key tired.", "That place is low-key amazing.", "I low-key want to leave early.", "She's low-key funny.", "This game is low-key hard."],
    replies: ["Same.", "Honestly, yeah.", "I get that.", "Low-key true.", "Kind of, yeah."],
    similar: ["kind of", "sort of", "a little", "quietly", "secretly"],
    difference: "\"Low-key\" is more casual than \"kind of\" and can suggest a private feeling. \"High-key\" means the feeling is obvious or strong.",
    whenNotToUse: "Avoid it in formal writing or serious professional messages. Use \"somewhat\" or \"a little\" instead.",
    faqs: [
      { question: "Is low-key positive or negative?", answer: "It can be either. The word after it decides the meaning." },
      { question: "Does low-key mean secretly?", answer: "Sometimes. It can mean secretly, quietly, or just a little." },
      { question: "Can I say low-key in texting?", answer: "Yes. Texting is one of the most natural places to use it." },
    ],
  },
  {
    slug: "what-does-sus-mean",
    phrase: "sus",
    title: "What Does \"Sus\" Mean in Slang?",
    quickMeaning: "\"Sus\" means suspicious, strange, or not trustworthy.",
    simpleExplanation: "People use \"sus\" when something feels wrong, fake, unsafe, or hard to trust. It is short for \"suspicious.\"",
    whenPeopleUseIt: "It appears in texting, gaming, TikTok comments, group chats, and casual reactions when something feels off.",
    tone: "Casual, playful, and sometimes critical. It is usually lighter than a serious accusation.",
    examples: ["That link looks sus.", "His excuse sounds sus.", "Why is that account so sus?", "The price is weirdly low. Sus.", "She was acting sus all night."],
    replies: ["Yeah, that's sketchy.", "I thought the same thing.", "Something feels off.", "For real.", "Let's not click it."],
    similar: ["shady", "sketchy", "off", "fishy", "weird"],
    difference: "\"Sus\" is short and internet-style. \"Shady\" often suggests dishonest behavior. \"Sketchy\" can suggest danger or low quality.",
    whenNotToUse: "Do not use it for serious accusations, legal claims, or formal reports. Use \"suspicious\" instead.",
    faqs: [
      { question: "Is sus rude?", answer: "It can be mildly rude if you call a person sus, but it is often playful." },
      { question: "Where did sus come from?", answer: "It comes from \"suspicious\" and became very popular in gaming and online speech." },
      { question: "Is sus still common?", answer: "Yes. It is common online and in casual speech." },
    ],
  },
  {
    slug: "what-does-fire-mean",
    phrase: "fire",
    title: "What Does \"Fire\" Mean in Slang?",
    quickMeaning: "\"Fire\" means really good, impressive, or exciting.",
    simpleExplanation: "People use \"fire\" to praise music, outfits, food, ideas, videos, performances, or anything that feels excellent.",
    whenPeopleUseIt: "You see it in comments, captions, texting, music talk, fashion talk, sports reactions, and casual compliments.",
    tone: "Positive, excited, and casual.",
    examples: ["This song is fire.", "Those shoes are fire.", "Her new video is fire.", "That sauce is fire.", "Your setup looks fire."],
    replies: ["Right?", "Appreciate it.", "No cap.", "Glad you like it.", "It's so good."],
    similar: ["lit", "dope", "sick", "amazing", "awesome"],
    difference: "\"Fire\" is a strong casual compliment. \"Lit\" often suggests excitement or energy. \"Dope\" sounds cool and stylish.",
    whenNotToUse: "Avoid it in formal feedback, business writing, or serious evaluations unless the tone is intentionally casual.",
    faqs: [
      { question: "Is fire a compliment?", answer: "Yes. In slang, it is usually a strong compliment." },
      { question: "Can food be fire?", answer: "Yes. It means the food tastes very good." },
      { question: "Is fire still used?", answer: "Yes, it is still common in casual speech and comments." },
    ],
  },
  {
    slug: "what-does-lit-mean",
    phrase: "lit",
    title: "What Does \"Lit\" Mean?",
    quickMeaning: "\"Lit\" means exciting, fun, excellent, or full of energy.",
    simpleExplanation: "People use \"lit\" when something feels fun, intense, or really good, especially parties, songs, events, and performances.",
    whenPeopleUseIt: "It appears in party talk, music comments, social media captions, and casual reactions.",
    tone: "Positive, energetic, and casual. In some groups it may sound a little dated, but it is still understood.",
    examples: ["The party was lit.", "That concert looked lit.", "This playlist is lit.", "Last night was lit.", "The crowd was lit."],
    replies: ["It really was.", "You should've been there.", "No cap.", "So good.", "Best night ever."],
    similar: ["fire", "dope", "sick", "hype", "awesome"],
    difference: "\"Lit\" often emphasizes energy and excitement. \"Fire\" can praise almost anything. \"Dope\" sounds more stylish or cool.",
    whenNotToUse: "Do not use it in formal writing or professional descriptions unless your brand voice is very casual.",
    faqs: [
      { question: "Does lit mean drunk?", answer: "It can in some contexts, but today it often means exciting or excellent." },
      { question: "Is lit outdated?", answer: "It is not new, but many people still understand and use it casually." },
      { question: "Can a song be lit?", answer: "Yes. It means the song is exciting or very good." },
    ],
  },
  {
    slug: "what-does-dope-mean",
    phrase: "dope",
    title: "What Does \"Dope\" Mean in Slang?",
    quickMeaning: "\"Dope\" means cool, excellent, or impressive.",
    simpleExplanation: "People use \"dope\" to praise something that looks good, sounds good, or feels stylish.",
    whenPeopleUseIt: "It appears in music, fashion, design, sports, art, and casual compliments.",
    tone: "Positive, relaxed, and cool. It can sound very casual.",
    examples: ["That jacket is dope.", "This beat is dope.", "Your room looks dope.", "That's a dope idea.", "The artwork is dope."],
    replies: ["Thanks.", "Appreciate it.", "I thought so too.", "Right?", "Glad you like it."],
    similar: ["cool", "fire", "sick", "fresh", "awesome"],
    difference: "\"Dope\" often sounds stylish and relaxed. \"Fire\" is more excited. \"Cool\" is safer and more neutral.",
    whenNotToUse: "Be careful because \"dope\" can also refer to drugs in other contexts. Avoid it in formal settings.",
    faqs: [
      { question: "Is dope positive or negative?", answer: "As slang for quality, it is positive." },
      { question: "Can I call a person dope?", answer: "Yes, casually. It means they are cool or impressive." },
      { question: "Is dope formal?", answer: "No. It is informal slang." },
    ],
  },
  {
    slug: "what-does-sick-mean",
    phrase: "sick",
    title: "What Does \"Sick\" Mean in Slang?",
    quickMeaning: "\"Sick\" can mean very cool, impressive, or exciting.",
    simpleExplanation: "Although \"sick\" normally means ill, in slang it can be a positive word for something excellent.",
    whenPeopleUseIt: "It is common in sports, gaming, music, fashion, and reactions to impressive skills.",
    tone: "Positive, excited, and casual.",
    examples: ["That trick was sick.", "Sick setup!", "The guitar solo was sick.", "Your car looks sick.", "That save was sick."],
    replies: ["Thanks.", "That was wild.", "I know, right?", "So clean.", "Appreciate it."],
    similar: ["fire", "dope", "cool", "insane", "awesome"],
    difference: "\"Sick\" often praises skill or style. \"Fire\" is broader. \"Insane\" is stronger and more dramatic.",
    whenNotToUse: "Avoid it when health could be confused, and avoid it in formal writing.",
    faqs: [
      { question: "Why does sick mean good?", answer: "Slang often flips meanings for emphasis. Here, it means impressively good." },
      { question: "Is sick rude?", answer: "No, not when used as praise." },
      { question: "Can I say sick at work?", answer: "Only in very casual workplaces." },
    ],
  },
  {
    slug: "what-does-ghosted-mean",
    phrase: "ghosted",
    title: "What Does \"Ghosted\" Mean in Dating?",
    quickMeaning: "\"Ghosted\" means someone suddenly stopped replying without explanation.",
    simpleExplanation: "People say they were ghosted when another person disappears from communication, especially after texting or dating.",
    whenPeopleUseIt: "It is common in dating, friendships, job applications, texting, and online conversations.",
    tone: "Casual, disappointed, and sometimes annoyed.",
    examples: ["He ghosted me after two dates.", "The recruiter ghosted her.", "I texted twice and got ghosted.", "Don't ghost people.", "She got ghosted again."],
    replies: ["That's rough.", "Their loss.", "I hate when that happens.", "Move on.", "You deserve better."],
    similar: ["left on read", "ignored", "disappeared", "stopped replying", "went silent"],
    difference: "\"Ghosted\" usually means a complete disappearance. \"Left on read\" means the message was seen but not answered.",
    whenNotToUse: "Do not use it in formal reports. Say \"stopped responding\" instead.",
    faqs: [
      { question: "Is ghosting only dating?", answer: "No, but dating is the most common context." },
      { question: "Is ghosting rude?", answer: "Usually yes, because it avoids communication." },
      { question: "What should I reply if someone got ghosted?", answer: "Show sympathy, such as \"That's rough\" or \"Their loss.\"" },
    ],
  },
  {
    slug: "what-does-left-on-read-mean",
    phrase: "left on read",
    title: "What Does \"Left on Read\" Mean?",
    quickMeaning: "\"Left on read\" means someone saw your message but did not reply.",
    simpleExplanation: "The phrase comes from read receipts in messaging apps. It means your message was read, but the other person stayed silent.",
    whenPeopleUseIt: "It is common in texting, dating, group chats, and social media DMs.",
    tone: "Casual, awkward, disappointed, or annoyed.",
    examples: ["I asked a question and got left on read.", "She left me on read all day.", "Being left on read feels awkward.", "He saw it and left me on read.", "Don't leave me on read."],
    replies: ["Ouch.", "Maybe they're busy.", "That's awkward.", "Text them later.", "I hate that."],
    similar: ["ghosted", "ignored", "no reply", "seen", "went silent"],
    difference: "\"Left on read\" is about one seen message. \"Ghosted\" is a bigger pattern of disappearing.",
    whenNotToUse: "Avoid it in formal communication. Say \"did not respond\" instead.",
    faqs: [
      { question: "Is left on read rude?", answer: "It can feel rude, but sometimes the person is just busy." },
      { question: "Does left on read mean ignored?", answer: "Often yes, but not always intentionally." },
      { question: "Is it dating slang?", answer: "It is common in dating but also used in regular texting." },
    ],
  },
  {
    slug: "what-does-flaked-mean",
    phrase: "flaked",
    title: "What Does \"Flaked\" Mean?",
    quickMeaning: "\"Flaked\" means canceled plans or failed to show up.",
    simpleExplanation: "If someone flaked, they did not follow through on a plan. It often suggests they were unreliable.",
    whenPeopleUseIt: "People use it for plans with friends, dates, casual meetups, parties, and group activities.",
    tone: "Casual, disappointed, and mildly annoyed.",
    examples: ["He flaked at the last minute.", "Please don't flake tonight.", "She flaked on our plans.", "They always flake.", "I hate when people flake."],
    replies: ["That's annoying.", "Classic.", "Make other plans.", "Again?", "Their loss."],
    similar: ["bailed", "canceled", "no-showed", "backed out", "ditched"],
    difference: "\"Flaked\" focuses on unreliability. \"Bailed\" can mean leaving or canceling, sometimes with a reason.",
    whenNotToUse: "Do not use it in formal scheduling messages. Say \"canceled\" or \"did not attend.\"",
    faqs: [
      { question: "Is flaked rude?", answer: "Calling someone flaky can sound critical, but the word itself is common." },
      { question: "What is a flaky person?", answer: "Someone who often cancels or does not follow through." },
      { question: "Is flaked the same as bailed?", answer: "They are close, but flaked suggests unreliability more strongly." },
    ],
  },
  {
    slug: "what-does-bailed-mean",
    phrase: "bailed",
    title: "What Does \"Bailed\" Mean?",
    quickMeaning: "\"Bailed\" means left, canceled, or backed out of a plan.",
    simpleExplanation: "People use \"bailed\" when someone leaves a place or decides not to do something they had planned.",
    whenPeopleUseIt: "It appears in casual plans, parties, dates, hangouts, and situations where someone leaves early.",
    tone: "Casual and sometimes annoyed, depending on context.",
    examples: ["He bailed before dinner.", "I might bail if I'm too tired.", "They bailed on the plan.", "Don't bail on me.", "She bailed early."],
    replies: ["Seriously?", "That's fair.", "No worries.", "Again?", "We can reschedule."],
    similar: ["flaked", "left", "dipped", "canceled", "backed out"],
    difference: "\"Bailed\" can be neutral if someone had a reason. \"Flaked\" sounds more unreliable or careless.",
    whenNotToUse: "Avoid it in formal emails. Use \"canceled,\" \"withdrew,\" or \"left early.\"",
    faqs: [
      { question: "Does bailed mean canceled?", answer: "Often yes, especially with plans." },
      { question: "Can bailed mean left?", answer: "Yes. It can mean someone left a place." },
      { question: "Is bailed rude?", answer: "The word is not rude, but the action may be annoying." },
    ],
  },
  {
    slug: "what-does-shady-mean",
    phrase: "shady",
    title: "What Does \"Shady\" Mean in Slang?",
    quickMeaning: "\"Shady\" means dishonest, suspicious, or morally questionable.",
    simpleExplanation: "People use \"shady\" when something or someone does not seem honest or trustworthy.",
    whenPeopleUseIt: "It appears in gossip, warnings, business talk, dating, online deals, and social situations.",
    tone: "Critical, suspicious, and casual.",
    examples: ["That deal sounds shady.", "He was acting shady.", "This website looks shady.", "Her excuse was shady.", "I don't trust that shady offer."],
    replies: ["Yeah, avoid it.", "That sounds sketchy.", "Trust your gut.", "Something feels off.", "Don't do it."],
    similar: ["sus", "sketchy", "fishy", "off", "questionable"],
    difference: "\"Shady\" often suggests dishonest behavior. \"Sketchy\" may suggest danger or poor quality. \"Sus\" is shorter and more internet-style.",
    whenNotToUse: "Do not use it as a formal accusation without evidence. Use careful language in serious situations.",
    faqs: [
      { question: "Is shady an insult?", answer: "It can be, especially if used about a person." },
      { question: "Can a place be shady?", answer: "Yes, it can mean the place feels unsafe or untrustworthy." },
      { question: "Is shady the same as sus?", answer: "They are similar, but shady feels more about dishonesty." },
    ],
  },
  {
    slug: "what-does-sketchy-mean",
    phrase: "sketchy",
    title: "What Does \"Sketchy\" Mean?",
    quickMeaning: "\"Sketchy\" means suspicious, unsafe, unreliable, or not quite right.",
    simpleExplanation: "People use \"sketchy\" when something makes them uncomfortable or doubtful.",
    whenPeopleUseIt: "It is common for places, websites, offers, people, plans, and situations that feel risky.",
    tone: "Casual warning, cautious, and sometimes critical.",
    examples: ["That alley looks sketchy.", "This app seems sketchy.", "The plan feels sketchy.", "He gave me sketchy details.", "That link is sketchy."],
    replies: ["Let's avoid it.", "Yeah, that's sus.", "Good call.", "Don't click it.", "Trust your gut."],
    similar: ["sus", "shady", "off", "unsafe", "fishy"],
    difference: "\"Sketchy\" often suggests risk or low trust. \"Shady\" suggests dishonesty. \"Off\" is softer and more general.",
    whenNotToUse: "Avoid it in formal safety reports. Use \"unsafe,\" \"unreliable,\" or \"suspicious.\"",
    faqs: [
      { question: "Is sketchy rude?", answer: "It can sound critical, but it is not a curse word." },
      { question: "Can a website be sketchy?", answer: "Yes, if it seems unsafe or fake." },
      { question: "Does sketchy mean dangerous?", answer: "Sometimes. It can mean unsafe or suspicious." },
    ],
  },
  {
    slug: "what-does-something-feels-off-mean",
    phrase: "something feels off",
    title: "What Does \"Something Feels Off\" Mean?",
    quickMeaning: "\"Something feels off\" means something seems wrong, strange, or not normal.",
    simpleExplanation: "People say this when they cannot fully explain the problem, but their instinct says the situation is not right.",
    whenPeopleUseIt: "It appears in texting, dating, work, safety situations, social plans, and reactions to strange behavior.",
    tone: "Cautious, uncertain, and conversational.",
    examples: ["Something feels off about this message.", "The vibe feels off.", "His story feels off.", "This deal feels off.", "I don't know why, but something is off."],
    replies: ["Trust your gut.", "What seems weird?", "Yeah, I noticed that too.", "Let's be careful.", "Maybe ask more questions."],
    similar: ["sus", "sketchy", "weird", "fishy", "not right"],
    difference: "\"Off\" is softer than \"sus\" or \"shady.\" It can mean a small strange feeling, not a clear accusation.",
    whenNotToUse: "Avoid it when you need a precise formal reason. Explain the exact issue instead.",
    faqs: [
      { question: "Is off slang?", answer: "It is casual everyday English, often used like slang in reactions." },
      { question: "Does off mean bad?", answer: "Not always. It means not quite right." },
      { question: "Can a person feel off?", answer: "Yes. It can mean they seem different or unwell." },
    ],
  },
  {
    slug: "what-does-broke-mean",
    phrase: "broke",
    title: "What Does \"Broke\" Mean in Slang?",
    quickMeaning: "\"Broke\" means having little or no money.",
    simpleExplanation: "People use \"broke\" casually when they cannot afford something or have very little money at the moment.",
    whenPeopleUseIt: "It appears in texting, student life, shopping, rent talk, jokes, and casual money conversations.",
    tone: "Casual, honest, sometimes funny, and sometimes stressed.",
    examples: ["I can't go out. I'm broke.", "This month made me broke.", "I'm too broke for that trip.", "College has me broke.", "Broke but happy."],
    replies: ["Same.", "I feel that.", "Maybe next time.", "Let's do something cheap.", "Been there."],
    similar: ["short on cash", "out of money", "strapped", "poor", "low on funds"],
    difference: "\"Broke\" is casual and temporary in many contexts. \"Poor\" sounds stronger and more serious.",
    whenNotToUse: "Avoid it in formal financial documents. Use \"low on funds\" or \"unable to afford.\"",
    faqs: [
      { question: "Is broke rude?", answer: "It can be rude if you call someone else broke as an insult." },
      { question: "Does broke mean broken?", answer: "It can, but in money slang it means no money." },
      { question: "Can I say I'm broke?", answer: "Yes, casually." },
    ],
  },
  {
    slug: "what-does-loaded-mean",
    phrase: "loaded",
    title: "What Does \"Loaded\" Mean in Slang?",
    quickMeaning: "\"Loaded\" means very rich or having a lot of money.",
    simpleExplanation: "People use \"loaded\" to describe someone who seems wealthy or has a lot of resources.",
    whenPeopleUseIt: "It appears in casual money talk, celebrity talk, family wealth, business, and jokes.",
    tone: "Casual, blunt, and sometimes judgmental.",
    examples: ["Her family is loaded.", "That company is loaded.", "He acts like he's loaded.", "They must be loaded.", "Loaded people live there."],
    replies: ["Must be nice.", "No way.", "Probably.", "That explains it.", "I figured."],
    similar: ["rich", "wealthy", "well-off", "ballin'", "flush"],
    difference: "\"Loaded\" is more casual and blunt than \"wealthy.\" \"Ballin'\" sounds more flashy and playful.",
    whenNotToUse: "Avoid it in polite formal descriptions. Use \"wealthy\" or \"financially successful.\"",
    faqs: [
      { question: "Is loaded positive or negative?", answer: "It can be neutral, admiring, or judgmental depending on tone." },
      { question: "Can loaded mean drunk?", answer: "Yes in some contexts, so pay attention to the sentence." },
      { question: "Is loaded formal?", answer: "No. It is casual." },
    ],
  },
  {
    slug: "what-does-pricey-mean",
    phrase: "pricey",
    title: "What Does \"Pricey\" Mean?",
    quickMeaning: "\"Pricey\" means expensive.",
    simpleExplanation: "People use \"pricey\" when something costs more than expected or feels a little expensive.",
    whenPeopleUseIt: "It appears in shopping, restaurant talk, travel planning, rent talk, and casual reviews.",
    tone: "Casual, mild, and usually not rude.",
    examples: ["That restaurant is pricey.", "The tickets were pricey.", "This jacket is cute but pricey.", "Rent is pricey here.", "The hotel looks pricey."],
    replies: ["Yeah, too much.", "Worth it though.", "Let's find a cheaper one.", "That's expensive.", "Maybe later."],
    similar: ["expensive", "costly", "not cheap", "overpriced", "high-end"],
    difference: "\"Pricey\" is softer than \"overpriced.\" Something can be pricey but still worth it.",
    whenNotToUse: "It is okay in most casual settings, but use \"expensive\" in formal writing.",
    faqs: [
      { question: "Is pricey negative?", answer: "A little, but not always. It just means expensive." },
      { question: "Is pricey formal?", answer: "It is more casual than formal." },
      { question: "What's the difference between pricey and overpriced?", answer: "Overpriced means too expensive for the value. Pricey just means expensive." },
    ],
  },
  {
    slug: "what-does-slay-mean",
    phrase: "slay",
    title: "What Does \"Slay\" Mean in Slang?",
    quickMeaning: "\"Slay\" means to do something very well or look amazing.",
    simpleExplanation: "People use \"slay\" as praise when someone performs well, looks great, or handles something with confidence.",
    whenPeopleUseIt: "It appears in TikTok comments, fashion, performance, makeup, school events, and supportive messages.",
    tone: "Positive, enthusiastic, playful, and dramatic.",
    examples: ["You slayed that presentation.", "That outfit slays.", "She slayed the performance.", "Slay, queen.", "You absolutely slayed."],
    replies: ["Thank you!", "You too.", "I tried.", "Stop, you're sweet.", "Period."],
    similar: ["ate", "crushed it", "killed it", "looked amazing", "nailed it"],
    difference: "\"Slay\" is playful and dramatic. \"Ate\" is more TikTok-style. \"Crushed it\" is safer in everyday speech.",
    whenNotToUse: "Avoid it in formal feedback or serious professional contexts.",
    faqs: [
      { question: "Is slay a compliment?", answer: "Yes, in slang it is a strong compliment." },
      { question: "Can men say slay?", answer: "Yes, anyone can, but tone and context matter." },
      { question: "Is slay still popular?", answer: "Yes, especially in social media and playful comments." },
    ],
  },
  {
    slug: "what-does-ate-mean",
    phrase: "ate",
    title: "What Does \"Ate\" Mean on TikTok?",
    quickMeaning: "\"Ate\" means someone did something extremely well.",
    simpleExplanation: "On TikTok and in comments, people say someone \"ate\" when they looked great, performed well, or completely succeeded.",
    whenPeopleUseIt: "It appears in TikTok comments, fashion posts, dance videos, performances, makeup, and praise.",
    tone: "Excited, praising, playful, and internet-native.",
    examples: ["She ate that look.", "You ate and left no crumbs.", "He ate that performance.", "This edit ate.", "That comeback ate."],
    replies: ["Period.", "No crumbs.", "Thank you!", "You already know.", "Stop, that's so nice."],
    similar: ["slay", "crushed it", "killed it", "nailed it", "devoured"],
    difference: "\"Ate\" is more TikTok-native than \"slay.\" \"Crushed it\" is more common in school, work, and sports.",
    whenNotToUse: "Avoid it in formal messages. It can confuse people who do not know TikTok slang.",
    faqs: [
      { question: "Does ate mean eating food?", answer: "Literally yes, but on TikTok it means someone did very well." },
      { question: "What does left no crumbs mean?", answer: "It means the person did so well that nothing was left to criticize." },
      { question: "Is ate a compliment?", answer: "Yes. It is usually strong praise." },
    ],
  },
  {
    slug: "what-does-delulu-mean",
    phrase: "delulu",
    title: "What Does \"Delulu\" Mean?",
    quickMeaning: "\"Delulu\" means delusional in a joking or internet-style way.",
    simpleExplanation: "People use \"delulu\" when someone has unrealistic hopes, fantasies, or confidence, often in dating, fandom, or social media jokes.",
    whenPeopleUseIt: "It appears in TikTok comments, dating talk, fandom posts, group chats, and jokes about unrealistic expectations.",
    tone: "Playful, teasing, dramatic, and sometimes critical.",
    examples: ["I'm delulu but hopeful.", "She thinks he'll text back. Delulu.", "Being delulu is the solulu.", "That theory is delulu.", "I'm choosing to be delulu today."],
    replies: ["Honestly, same.", "Delulu is the solulu.", "Maybe you're right.", "That's a reach.", "I support the fantasy."],
    similar: ["delusional", "unrealistic", "in your head", "wishful thinking", "reaching"],
    difference: "\"Delulu\" is lighter and more playful than \"delusional.\" Do not use it for serious mental health situations.",
    whenNotToUse: "Do not use it in serious discussions about mental health, formal writing, or when it could sound cruel.",
    faqs: [
      { question: "Is delulu rude?", answer: "It can be rude if aimed at someone harshly, but it is often playful online." },
      { question: "What does delulu is the solulu mean?", answer: "It jokingly means being unrealistic is the solution." },
      { question: "Is delulu TikTok slang?", answer: "Yes, it is very common in TikTok-style internet language." },
    ],
  },
];

export const longTailGuidePages: LongTailGuidePage[] = [
  {
    slug: "is-sus-rude",
    title: "Is \"Sus\" Rude?",
    description: "Learn whether sus sounds rude, playful, serious, or casual in American slang.",
    intro: "\"Sus\" is not automatically rude, but it can sound critical if you use it about a person.",
    sections: [
      { heading: "Short Answer", body: ["\"Sus\" means suspicious. It is often playful online, but it still suggests that something or someone does not seem trustworthy."] },
      { heading: "When It Sounds Playful", body: ["It sounds playful when people use it about a weird link, a funny excuse, a strange game move, or a suspicious-looking situation."] },
      { heading: "When It Can Sound Rude", body: ["It can sound rude if you call a person sus directly, especially without evidence. In serious situations, use clearer words like suspicious or concerning."] },
    ],
  },
  {
    slug: "is-no-cap-offensive",
    title: "Is \"No Cap\" Offensive?",
    description: "Find out whether no cap is rude, offensive, or just casual slang.",
    intro: "\"No cap\" is usually not offensive. It means the speaker is being honest or serious.",
    sections: [
      { heading: "Short Answer", body: ["Most of the time, \"no cap\" is casual but not rude. The risk is not offensiveness; the risk is sounding too informal in the wrong setting."] },
      { heading: "Good Contexts", body: ["It works in texting, TikTok comments, Instagram captions, and relaxed conversations with friends."] },
      { heading: "Bad Contexts", body: ["Avoid it in formal emails, essays, job interviews, or serious workplace messages. Use \"seriously\" or \"honestly\" instead."] },
    ],
  },
  {
    slug: "is-low-key-positive-or-negative",
    title: "Is \"Low-Key\" Positive or Negative?",
    description: "Understand when low-key is positive, negative, neutral, or secretive.",
    intro: "\"Low-key\" can be positive, negative, or neutral. The word after it decides the meaning.",
    sections: [
      { heading: "Positive Use", body: ["\"That place is low-key great\" means the place is quietly or surprisingly good."] },
      { heading: "Negative Use", body: ["\"I'm low-key annoyed\" means the speaker is a little annoyed, but not making a big scene."] },
      { heading: "Neutral Use", body: ["Sometimes it only softens the sentence, like \"I low-key want to leave.\""] },
    ],
  },
  {
    slug: "how-do-i-reply-to-no-cap",
    title: "How Do I Reply to \"No Cap\"?",
    description: "Natural replies to no cap in texting, comments, and casual conversation.",
    intro: "When someone says \"no cap,\" they are usually saying they are serious or agreeing strongly.",
    sections: [
      { heading: "Easy Replies", body: ["You can reply with \"fr,\" \"I know, right?\", \"exactly,\" \"no lies detected,\" or \"you're not wrong.\""] },
      { heading: "If You Agree", body: ["Use short agreement replies. Slang conversations often sound natural when the answer is brief."] },
      { heading: "If You Disagree", body: ["You can say \"I don't know about that\" or \"that's a stretch\" without sounding too harsh."] },
    ],
  },
  {
    slug: "how-to-respond-thats-fire",
    title: "How Do You Respond When Someone Says \"That's Fire\"?",
    description: "Natural ways to reply when someone says something is fire.",
    intro: "\"That's fire\" is a compliment. The person is saying something is really good.",
    sections: [
      { heading: "Simple Replies", body: ["Try \"thanks,\" \"right?\", \"appreciate it,\" \"no cap,\" or \"glad you like it.\""] },
      { heading: "If They Compliment Your Work", body: ["A simple \"thank you\" or \"appreciate it\" is safest."] },
      { heading: "If You Agree", body: ["Say \"I know, right?\" or \"it's so good.\""] },
    ],
  },
  {
    slug: "sus-vs-shady-vs-sketchy",
    title: "Sus vs Shady vs Sketchy",
    description: "Compare sus, shady, and sketchy with simple meanings and examples.",
    intro: "Sus, shady, and sketchy all point to distrust, but they are not exactly the same.",
    sections: [
      { heading: "Sus", body: ["\"Sus\" is short for suspicious. It is internet-style and often playful. Example: That link looks sus."] },
      { heading: "Shady", body: ["\"Shady\" often suggests dishonest behavior. Example: That deal sounds shady."] },
      { heading: "Sketchy", body: ["\"Sketchy\" suggests something may be unsafe, unreliable, or low trust. Example: That website seems sketchy."] },
    ],
  },
  {
    slug: "fire-vs-lit-vs-dope",
    title: "Fire vs Lit vs Dope",
    description: "Learn the difference between fire, lit, and dope in slang.",
    intro: "Fire, lit, and dope are all positive slang, but they highlight different kinds of praise.",
    sections: [
      { heading: "Fire", body: ["\"Fire\" means very good or impressive. It works for music, food, outfits, and ideas."] },
      { heading: "Lit", body: ["\"Lit\" often means exciting, fun, or full of energy. It is common for parties and events."] },
      { heading: "Dope", body: ["\"Dope\" sounds cool, stylish, and relaxed. It is often used for design, fashion, music, or art."] },
    ],
  },
  {
    slug: "ghosted-vs-left-on-read",
    title: "Ghosted vs Left on Read",
    description: "Understand the difference between ghosted and left on read.",
    intro: "Both phrases are about not getting a reply, but the situation is different.",
    sections: [
      { heading: "Ghosted", body: ["\"Ghosted\" means someone stopped replying completely and disappeared from communication."] },
      { heading: "Left on Read", body: ["\"Left on read\" means the person saw one message but did not reply."] },
      { heading: "Key Difference", body: ["Ghosting is a pattern. Being left on read can happen once."] },
    ],
  },
  {
    slug: "slang-people-use-when-texting",
    title: "Slang People Use When Texting",
    description: "Common texting slang with meanings, tone, and examples.",
    intro: "Texting slang is short, casual, and often emotional. It helps people react quickly.",
    sections: [
      { heading: "Common Texting Slang", body: ["No cap, fr, left on read, hit me up, say less, and low-key are all common in texting."] },
      { heading: "Tone", body: ["Texting slang can sound friendly, playful, annoyed, flirty, or sarcastic depending on context."] },
      { heading: "Puzzle Connection", body: ["In a slang grouping game, texting phrases often form categories around replies, silence, agreement, or plans."] },
    ],
  },
  {
    slug: "slang-people-use-in-dating",
    title: "Slang People Use in Dating",
    description: "Common dating slang like ghosted, left on read, flaked, red flag, and rizz.",
    intro: "Dating slang often describes texting behavior, attraction, awkwardness, and unreliable plans.",
    sections: [
      { heading: "Common Dating Slang", body: ["Ghosted, left on read, flaked, bailed, rizz, red flag, and vibe are common dating-related phrases."] },
      { heading: "Tone", body: ["Some dating slang is playful, but some can sound annoyed or disappointed."] },
      { heading: "Puzzle Connection", body: ["Dating slang often groups around not replying, canceling plans, flirting, or warning signs."] },
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

export function getCoreSlangPage(slug: string) {
  return coreSlangPages.find((page) => page.slug === slug);
}

export function getLongTailGuidePage(slug: string) {
  return longTailGuidePages.find((page) => page.slug === slug);
}

export function getSlangMeaningPage(slug: string) {
  return slangMeaningPages.find((page) => page.slug === slug);
}

export function getSeoSlugs() {
  return [
    ...pillarPages.map((page) => page.slug),
    ...coreSlangPages.map((page) => page.slug),
    ...longTailGuidePages.map((page) => page.slug),
  ];
}
