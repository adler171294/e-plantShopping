import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-content-card">
        <h2 className="about-title">Tentang Kebun Hijau</h2>
        <div className="about-body">
          <div className="about-text">
            <p>
              Berawal dari kecintaan terhadap alam, <strong>Kebun Hijau</strong> hadir untuk membawa kesegaran 
              hutan tropis langsung ke dalam ruangan Anda. Kami percaya bahwa setiap rumah berhak memiliki 
              udara yang lebih bersih dan suasana yang lebih tenang melalui tanaman hias.
            </p>
            <h3>Misi Kami:</h3>
            <ul>
              <li>Menyediakan tanaman hias kualitas premium yang dirawat secara organik.</li>
              <li>Mendukung gaya hidup hijau dan berkelanjutan di perkotaan.</li>
            </ul>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070" 
              alt="Our Garden" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;