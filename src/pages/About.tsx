import Layout from '../components/Layout';
import { Section } from '../layout/Section';

const About = () => (
  <Layout>
    <Section yPadding="py-10" title="About Us">
      <p className="mt-4 text-justify text-lg">
        Berkah Sehat Medical merupakan penyedia sewa alat kesehatan atau pun
        dapat membeli unit baru, kami menyedikan berbagai alat kesehatan seperti
        ranjang rumah sakit, kursi roda, tabung oksigen, decubitus, suction, dan
        lainnya.
      </p>
      <p className="mt-4 text-justify text-lg">
        Berkah Sehat Medical juga sudah ada cabang di beberapa daerah yang
        tersebar Jakarta Pusat, Jakarta Selatan, Jakarta Barat, Jakarta Timur
        dan Bekasi
      </p>
      <p className="mt-4 text-justify text-lg">
        Silahkan informasikan dengan detail kebutuhan kesehatan Anda dan
        Keluarga kepada Kami karena kami akan memberikan solusi terbaik untuk
        kebutuhan penyewaan alat kesehatan dalam membantu penyembuhan anda
        ataupu keluarga
      </p>
      <p className="mb-4 mt-6 text-left text-lg font-semibold text-[#295A8D]">
        Vision
      </p>
      <ol className="list-decimal pl-5">
        <li>
          Menjadi pilihan utama untuk pelayanan kesehatan yang dikenal dalam
          kualitas pelayanan.
        </li>
        <li>
          Menjadi perusahaan alat kesehatan terbaik di Indonesia dengan
          menyediakan produk yang berkualitas dalam memenuhi kebutuhan konsumen.
        </li>
        <li>
          Menjadi tenaga profesional yang inovatif dan kreatif dalam menjalin
          kemitraan.
        </li>
      </ol>
      <p className="mb-4 mt-6 text-left text-lg font-semibold text-[#295A8D]">
        Mission
      </p>
      <ol className="list-decimal pl-5">
        <li>
          Menjalankan satu jaringan yang terintegrasi untuk memberikan pelayanan
          kesehatan secara menyeluruh.
        </li>
        <li>
          Memberikan solusi yang tepat dan amanah atas kebutuhan pelanggan.
        </li>
        <li>
          Memberikan keselamatan pada setiap pasien melalui sikap penuh kasih
          dan profesionalisme yang ditunjang oleh kualitas sistem, produk, dan
          teknologi yang terbaik.
        </li>
        <li>
          Menyediakan produk alat kesehatan yang berkualitas dengan harga yang
          kompetitif.
        </li>
        <li>
          Meningkatkan azas kepercayaan dan kesejahteraan antara karyawan,
          perusahaan, dan pelanggan.
        </li>
      </ol>
    </Section>
  </Layout>
);

export default About;
