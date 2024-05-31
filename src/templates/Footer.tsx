import { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Footer = ({ bottom = 0 }) => {
  const [isWebViewport, setIsWebViewport] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsWebViewport(window.innerWidth > 768);
    }

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsWebViewport(window.innerWidth > 768);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Background
      color="#295A8D"
      style={{
        position: 'fixed',
        bottom,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Section fullWidth>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '10px',
            marginTop: '10px',
            color: '#fff',
          }}
          className={isWebViewport ? 'mx-44' : ''}
        >
          <div
            style={{
              flex: '3',
              paddingRight: '20px',
              minWidth: '300px',
            }}
          >
            {' '}
            <h2 className="mb-2 text-xl font-semibold">Tentang Kami</h2>
            <p className="text-justify text-xs">
              Berkah Sehat Medical merupakan penyedia sewa alat kesehatan atau
              pun dapat membeli unit baru, kami menyedikan berbagai alat
              kesehatan seperti ranjang rumah sakit, kursi roda, tabung oksigen,
              decubitus, suction, dan lainnya.
            </p>
            <div style={{ margin: '10px 0' }}>
              <a
                href="https://www.instagram.com/berkahsehatmedical/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff' }}
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <h2 className="text-xl font-semibold">Kontak</h2>
            <a
              className="text-justify text-xs"
              href="https://wa.me/6288211163207"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 882 1116 3207
            </a>
          </div>
          <div style={{ flex: '1', minWidth: '150px' }}>
            <h2 className="mb-2 text-xl font-semibold">Lokasi</h2>
            <ul
              style={{ listStyleType: 'none', padding: 0 }}
              className="text-justify text-sm"
            >
              <li className="mb-3">Pesanggrahan</li>
              <li className="mb-3">Pondok Gede</li>
              <li className="mb-3">Kebayoran Lama</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            paddingTop: '10px',
            textAlign: 'center',
            width: '92%',
            margin: '0 auto',
          }}
        >
          <p className="text-xs text-white" style={{ margin: 0 }}>
            © 2024 - Berkah Sehat Medical
          </p>
        </div>
      </Section>
    </Background>
  );
};

export { Footer };
