export interface FAQItem {
    question: string;
    answer: string;
}

export const faqs: FAQItem[] = [
    {
        question: "1. What is Konecta?",
        answer:
            "Konecta is a one-stop platform designed to accelerate ICP project growth by combining gamified Missions, dynamic Events, and AI-driven marketing automation. We aim to provide a single venue where ICP projects incentivize user engagement with dApps, social channels, and community activities, while users discover new opportunities and earn rewards.",
    },
    {
        question: "2. How can I earn with Konecta?",
        answer:
            "You can earn through Missions and Events that Konecta hosts on behalf of ICP projects.\n\n" +
            "Missions: By completing specific tasks (e.g., following a social channel, making on-chain transactions, joining a Discord or OpenChat community), you can receive tokens, NFTs, or points.\n\n" +
            "Events: Participating in live or virtual events (like Zoom, Google Meet, X Spaces) can also grant you rewards or tokens, especially if the event is tied to a Mission (e.g., 'Attend the event + do a follow-up task for a bonus').",
    },
    {
        question: "3. What is KTA?",
        answer:
            "KTA is the soon-to-be-released Konecta Token, set to be distributed contingent on the success of the SNS launch.",
    },
    {
        question: "4. When will the SNS go live?",
        answer: "The SNS will be launched on Q2 2025.",
    },
    {
        question: "5. How can I manage my events?",
        answer:
            "Konecta provides an Event Management Module within its web app (and eventually the browser extension) to create, configure, and track events. You can:\n\n" +
            "- Create/Manage Events via an admin panel (for projects) or directly from the platform’s interface.\n" +
            "- Integrate with platforms like Zoom, Google Meet, OpenChat, or even X Spaces (via the extension) to host token-gated events, tipping, polls, or 'betting.'\n" +
            "- Tie Events to Missions (e.g., 'Must attend Event A before unlocking Mission B').\n" +
            "- View participation metrics in an Events Dashboard, and track user engagement or reward distribution.",
    },
    {
        question: "6. Can I bill for my events?",
        answer:
            "Yes, Konecta allows you to monetize your events through flexible in-app billing options, enabling you to generate revenue from event interactions and services provided.",
    },
    {
        question: "7. How can I promote my project?",
        answer:
            "Konecta offers multiple promotional tools:\n\n" +
            "• Missions – Create step-by-step tasks (social or on-chain) and reward users with tokens or NFTs.\n" +
            "• Events – Host live or virtual gatherings with tipping, polls, or interactive rewards.\n" +
            "• AI Agents – Automate social media posts, announcements, and user outreach via on-chain or external AI providers (OpenAI, Anthropic).\n" +
            "• Browser Extension – Embed Missions, tipping, and AI interactions directly into social platforms (e.g., X), encouraging real-time engagement.\n" +
            "• Analytics Dashboard – Track DAU, UAW, or mission completion metrics, helping you refine campaigns and demonstrate project growth.",
    },
    {
        question: "8. What is TIME?",
        answer:
            "TIME is the Konecta Pre-Registration key resource, measured in seconds you earn by completing missions. It’s the foundation of the rewards system, converting your engagement and efforts into tangible benefits like KTA tokens.",
    },
    {
        question: "9. How does TIME distribution work?",
        answer:
            "Time is distributed through missions:\n\n" +
            "- Complete the tasks on the Preregistration WebApp and claim the daily streak.\n" +
            "- Earn seconds based on predefined ranges for each mission.\n" +
            "- Use these seconds to unlock further rewards and KTA tokens after the SNS launches.",
    },
    {
        question: "10. How will the airdrop work?",
        answer:
            "The airdrop involves converting your earned seconds into KTA tokens. By participating in missions and accumulating seconds, you position yourself to receive your share when the airdrop activates. Stay engaged to maximize your rewards.",
    },
];
