import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/MovieList.css';

const movies = [
  { id: 1, title: 'THE RETURNING', description: '"Returning" adalah sebuah film yang mengisahkan tentang perjalanan emosional seorang pria yang kembali ke kampung halamannya setelah bertahun-tahun menjauh', imageUrl: '/images/image1.jpg',videoUrl: 'videos/movie1.mp4' },
  { id: 2, title: 'TERSANJUNG', description: '"Tersanjung" adalah kisah inspiratif tentang perjalanan seorang wanita muda dari latar belakang sederhana yang menghadapi kedihupan dan tantangan besar dalam hidupnya. ', imageUrl: '/images/image2.jpg',videoUrl: 'videos/movie2.mp4' },
  { id: 3, title: 'DREADOUT', description: '"DreadOut" adalah film horor yang mengambil inspirasi dari permainan video populer dengan nama yang sama. Kisahnya mengikuti sekelompok remaja yang nekat menjelajahi sebuah desa terpencil.', imageUrl: '/images/image3.jpg', videoUrl: 'videos/movie3.mp4' },
  { id: 4, title: 'KKN DI DESA PENARI', description: '"KKN di Desa Penari" adalah film horor yang berlatar belakang perdesaan Indonesia. Kisahnya mengikuti sekelompok mahasiswa yang melakukan program Kuliah Kerja Nyata (KKN) di sebuah desa terpencil', imageUrl: '/images/image4.jpg', videoUrl: 'videos/movie4.mp4' },
  { id: 5, title: 'DIGTINATE', description: 'lorem20', imageUrl: '/images/image5.jpg', videoUrl: 'videos/movie5.mp4' },
  { id: 6, title: 'VINA Sebelum 7 hari', description: 'lorem ipsu loprem ipsum lorem ipsum ', imageUrl: '/images/image6.jpg', videoUrl:'videos/movie6.mp4' },
];

const MovieList = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <section className="list-wrapper">
      {movies.map(movie => (
        <div className="movie-card" key={movie.id} onClick={() => handleCardClick(movie.id)}>
          <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>
      ))}
    </section>
  );
};

export default MovieList;







