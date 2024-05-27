import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const FAQ = () => {
  const descriptions = [
    {
      type: "Pada hari apa saja Berkah Sehat Medical melakukan pengiriman?",
      description:
        "Berkah Sehat Medical melakukan pengiriman setiap hari, dari Senin hingga Minggu.",
    },
    {
      type: "Pada jam berapakah Berkah Sehat Medical beroperasi secara online?",
      description:
        "Berkah Sehat Medical beroperasi secara online setiap hari dari pukul 07.00 hingga 22.00.",
    },
  ];

  return (
    <Section title="FAQ">
      <div className="faq-title-line"></div> 
      <VerticalFeatureRow
        descriptions={descriptions}
        image="/assets/images/FAQ/faq-image.png"
        imageAlt="First feature alt text"
      />
      <style jsx>{`
        .faq-title-line {
          width: 100%;
          height: 1px;
          background: rgba(0, 0, 0, 0.1); /* Shadow color with opacity */
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1); /* Shadow effect */
        }
      `}</style>
    </Section>
  );
};

export { FAQ };
