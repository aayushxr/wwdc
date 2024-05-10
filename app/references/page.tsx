import { BentoGrid, BentoGridItem } from "@/components/bento";
import Page from "@/components/header";

export default function Reference() {
  const items = [
    {
      title: "Case building and Argumentation",
      description:
        "Check out a presentation on 'Case building and Argumentation'",
      className: "md:col-span-2",
      url: "https://drive.google.com/file/d/1bJt5spRmSmZWSVkq8a0nXq3o_Ww5jePb/view?usp=sharing",
    },
    {
      title: "Engagement",
      description: "Check out the Debaters Briefing  of our tournament",
      className: "md:col-span-1",
      url: "https://drive.google.com/file/d/1MBBmOQZr5SDMhRhQm9YVdIetPzmjzjLV/view?usp=sharing"
    },

    {
      title: "Marking Guidelines",
      description: "Check out the Equity Brief of our tournament",
      className: "md:col-span-3",
      url: "https://drive.google.com/file/d/1xsYT114m_rEB-0NQZbCidKthhaSe-UT3/view?usp=sharing"
    },
  ];
  return (
    <Page
      title="Other References"
      desc="You can access different presentations here"
    >
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
