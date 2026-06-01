import { genZSlangArticle } from "./genZArticle";
import { genZSlang2026H1Article } from "./genZArticle2026H1";

export type LearnArticle = {
  slug: string;
  title: string;
  description: string;
  sections: {
    heading: string;
    body: string[];
    items?: string[];
    links?: {
      href: string;
      label: string;
      description: string;
    }[];
  }[];
};

export const learnArticles: LearnArticle[] = [
  genZSlang2026H1Article,
  genZSlangArticle,
  {
    slug: "what-does-no-cap-mean",
    title: "What Does No Cap Mean?",
    description: "Learn the meaning of no cap, how Americans use it, and when it sounds natural.",
    sections: [
      {
        heading: "Meaning",
        body: [
          "No cap means no lie, for real, or I am serious. People use it when they want to show that something is true or honest.",
          "Example: This pizza is amazing, no cap. The speaker means the pizza is genuinely very good.",
        ],
      },
      {
        heading: "How to Use It",
        body: [
          "No cap is casual. It is common in texts, comments, and relaxed conversations. It is not a good choice for formal emails or school essays.",
          "You can put it at the end of a sentence, or use it as a short reply when you agree that something is true.",
        ],
      },
      {
        heading: "Similar Phrases",
        body: [
          "Similar phrases include for real, seriously, dead serious, and not kidding. These phrases are useful because they all show honesty or emphasis.",
          "In a Daily Slang Connections puzzle, no cap might belong with phrases about truth, agreement, or strong emphasis.",
        ],
      },
    ],
  },
  {
    slug: "what-does-low-key-mean",
    title: "What Does Low-Key Mean?",
    description: "A simple guide to low-key in American casual English.",
    sections: [
      {
        heading: "Meaning",
        body: [
          "Low-key can mean a little, secretly, quietly, or not too intense. It depends on the sentence.",
          "Example: I am low-key tired means I am kind of tired. Example: That place is low-key great means it is quietly or surprisingly great.",
        ],
      },
      {
        heading: "Tone",
        body: [
          "Low-key makes a sentence feel softer. It can make an opinion sound less dramatic or less direct.",
          "It is common in everyday speech, but it is still casual. Use it with friends, classmates, or online comments, not in formal writing.",
        ],
      },
      {
        heading: "Common Groups",
        body: [
          "Low-key often appears with words about feelings, opinions, or intensity. It may connect with kind of, sorta, a little, or quietly.",
          "Seeing it in a group helps you notice that slang is not only about dictionary meaning. It is also about tone.",
        ],
      },
    ],
  },
  {
    slug: "common-american-slang-word-game",
    title: "Common American Slang in Daily Word Games",
    description: "A practical guide to common American slang and how phrases connect by situation.",
    sections: [
      {
        heading: "Start with Situations",
        body: [
          "The best way to learn slang is by situation. People use different words when they agree, complain, make plans, compliment someone, talk about money, or react to news.",
          "For example, bet, sounds good, and I am down can all show agreement. Grouping them together makes the connection easier to spot.",
        ],
      },
      {
        heading: "Learn Tone",
        body: [
          "Many slang phrases carry tone. Some sound excited, some sound annoyed, and some sound relaxed. The phrase itself is only half the meaning.",
          "If a phrase feels too strong, too young, or too casual, it may not fit every speaker. That is why this site keeps explanations simple and practical.",
        ],
      },
      {
        heading: "Review with Groups",
        body: [
          "Grouping games help memory because they make you compare meanings. You do not only ask, What does this word mean? You ask, Which other words work in the same situation?",
          "That comparison is close to how real listening works. You hear a phrase, then use context to understand what the speaker probably means.",
        ],
      },
    ],
  },
  {
    slug: "slang-vs-idioms",
    title: "Slang vs Idioms: What Is the Difference?",
    description: "Understand how slang and idioms overlap, and why both matter for casual English.",
    sections: [
      {
        heading: "Slang",
        body: [
          "Slang is informal language used by groups of speakers. It can change quickly, and it often shows identity, age, mood, or social context.",
          "Examples include no cap, sus, flex, and ghosted. These words are common in casual speech and online spaces.",
        ],
      },
      {
        heading: "Idioms",
        body: [
          "An idiom is a phrase whose meaning is not obvious from the individual words. For example, call it a day means stop working for now.",
          "Idioms can be informal or formal. Some are very old, while slang often changes faster.",
        ],
      },
      {
        heading: "Why They Overlap",
        body: [
          "Many casual phrases are both idiom-like and slang-like. Hit me up means contact me, and spill the tea means share gossip. Their meanings are not literal, and they are also informal.",
          "The practical question is not always What label is this? A better question is When does this phrase sound natural?",
        ],
      },
    ],
  },
];

export function getLearnArticle(slug: string) {
  return learnArticles.find((article) => article.slug === slug);
}
