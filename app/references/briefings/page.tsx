import { BentoGrid, BentoGridItem } from "@/components/bento";
import Page from "@/components/header";

export default function Breif() {
  const items = [
    {
      title: "Judges Briefing",
      description: "Check out the Judges Briefing of our tournament",
      url: "https://drive.google.com/file/d/1snfOE-aqPjoVbEHStIXA1uLOZqQ72T7u/view?usp=sharing",
      className: "md:col-span-2",
    },
    {
      title: "Debaters Briefing",
      description: "Check out the Debaters Briefing  of our tournament",
      url : "https://drive.google.com/file/d/1SA1H_o2S0h7QM6STd7RHo1dCmjeF-zgL/view?usp=sharing",
      className: "md:col-span-1",
    },

    {
      title: "Equity Briefing",
      description: "Check out the Equity Brief of our tournament",
      className: "md:col-span-1",
      url: "https://drive.google.com/file/d/1nnNOTlyQVWDXQrwf-4DNyFKqll3IpZqY/view?usp=sharing"
    },
    {
      title: "Marking Guildlines",
      description: "Check out the Marking Guidelines of our tournament",
      className: "md:col-span-2",
      url: "https://drive.google.com/file/d/1xsYT114m_rEB-0NQZbCidKthhaSe-UT3/view?usp=sharing"
    },
  ];
  return (
    <Page title="Briefings" desc="You can access different briefings here">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            url={item.url}
          />
        ))}
      </BentoGrid>
    </Page>
  );
}
