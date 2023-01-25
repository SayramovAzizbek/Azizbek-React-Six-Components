import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "sadjflks",
      label: "Can I use React on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "asdas",
      label: "Can I use JS",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "kafgshs",
      label: "Can I use CSS",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];
  
  return <Accordion items={items} />;
};

export default AccordionPage;
