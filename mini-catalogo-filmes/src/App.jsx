import { useState, useEffect } from 'react'

const fetchMoviesAndSeries = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    {
      id: 1,
      titulo: "Stranger Things",
      tipo: "Série",
      capa: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      favorito: false
    },
    {
      id: 2,
      titulo: "Avatar: O Caminho da Água",
      tipo: "Filme",
      capa: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      favorito: true
    },
    {
      id: 3,
      titulo: "The Crown",
      tipo: "Série",
      capa: "https://image.tmdb.org/t/p/w500/1M876KQUEYfG8W7rohUO9UQGAUH.jpg",
      favorito: false
    },
    {
      id: 4,
      titulo: "Inception",
      tipo: "Filme",
      capa: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      favorito: true
    },
    {
      id: 5,
      titulo: "Breaking Bad",
      tipo: "Série",
      capa: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
      favorito: false
    },
    {
      id: 6,
      titulo: "Interstellar",
      tipo: "Filme",
      capa: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      favorito: false
    },
    {
      id: 7,
      titulo: "Wednesday",
      tipo: "Série",
      capa: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
      favorito: true
    },
    {
      id: 8,
      titulo: "The Dark Knight",
      tipo: "Filme",
      capa: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      favorito: false
    },
    {
      id: 9,
      titulo: "The Last of Us",
      tipo: "Série",
      capa: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
      favorito: false
    },
    {
      id: 10,
      titulo: "Top Gun: Maverick",
      tipo: "Filme",
      capa: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      favorito: true
    },
    {
      id: 11,
      titulo: "House of the Dragon",
      tipo: "Série",
      capa: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
      favorito: false
    },
    {
      id: 12,
      titulo: "Dune",
      tipo: "Filme",
      capa: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      favorito: false
    },
    {
      id: 13,
      titulo: "The Bear",
      tipo: "Série",
      capa: "https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg",
      favorito: true
    },
    {
      id: 14,
      titulo: "Spider-Man: Sem Volta Para Casa",
      tipo: "Filme",
      capa: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      favorito: false
    },
    {
      id: 15,
      titulo: "Euphoria",
      tipo: "Série",
      capa: "https://image.tmdb.org/t/p/w500/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg",
      favorito: true
    },
    {
      id: 16,
      titulo: "Everything Everywhere All at Once",
      tipo: "Filme",
      capa: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
      favorito: false
    }
  ];
};

const Header = ({ currentPage, setCurrentPage, searchTerm, setSearchTerm }) => {
  const navItems = ['Inicio', 'Filmes', 'Series', 'Favoritos'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-pastel-purple/5 via-transparent to-pastel-blue/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pastel-lavender via-pastel-purple to-pastel-blue bg-clip-text text-transparent drop-shadow-sm">
              🎬 StreamCat
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    currentPage === item
                      ? 'bg-gradient-to-r from-pastel-purple/20 to-pastel-blue/20 text-pastel-lavender border border-pastel-purple/30 shadow-lg shadow-pastel-purple/10'
                      : 'text-gray-300 hover:text-pastel-lavender hover:bg-gray-800/50 hover:shadow-md'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>

          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar filmes e séries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-2 pl-10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pastel-purple/50 focus:border-pastel-purple/50 transition-all duration-200 backdrop-blur-sm"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="md:hidden">
            <select
              value={currentPage}
              onChange={(e) => setCurrentPage(e.target.value)}
              className="bg-gray-800/80 border border-gray-700/50 rounded-xl px-3 py-2 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-purple/50 backdrop-blur-sm"
            >
              {navItems.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

const MovieCard = ({ movie, onToggleFavorite }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const fallbackImage = `https://placehold.co/300x450/${movie.tipo === 'Filme' ? 'E8F4F8' : 'F0E6FF'}/2D2B3A?text=${encodeURIComponent(movie.titulo)}`;

  return (
    <div className="group relative bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700/30">
      <div className="aspect-[2/3] relative overflow-hidden bg-gray-700/50">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse bg-gray-600/50 w-full h-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}
        
        <img
          src={imageError ? fallbackImage : movie.capa}
          alt={movie.titulo}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <button className="bg-white/90 hover:bg-white text-gray-900 font-semibold py-2 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg backdrop-blur-sm">
              ▶ Assistir
            </button>
          </div>
        </div>

        {/* Badge de qualidade/novo conteúdo */}
        <div className="absolute top-3 left-3">
          <span className="bg-gradient-to-r from-pastel-purple to-pastel-lavender text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
            HD
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-100 truncate mb-2 group-hover:text-pastel-lavender transition-colors duration-200">
              {movie.titulo}
            </h3>
            <div className="flex items-center space-x-2 mb-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                movie.tipo === 'Filme' 
                  ? 'bg-pastel-blue/20 text-pastel-blue border border-pastel-blue/30' 
                  : 'bg-pastel-mint/20 text-emerald-300 border border-emerald-400/30'
              }`}>
                {movie.tipo}
              </span>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-gray-400 text-xs ml-1">{(Math.random() * 2 + 8).toFixed(1)}</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => onToggleFavorite(movie.id)}
            className={`ml-2 p-2 rounded-xl transition-all duration-200 transform hover:scale-110 ${
              movie.favorito
                ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30 shadow-lg shadow-red-500/20'
                : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50 hover:text-red-400'
            }`}
            title={movie.favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            {movie.favorito ? (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const MovieList = ({ movies, onToggleFavorite, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-purple mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando conteúdo...</p>
        </div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p className="text-gray-400 text-lg">Nenhum conteúdo encontrado</p>
          <p className="text-gray-500 text-sm mt-2">Tente ajustar seus filtros de busca</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

// Componente principal App
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState('Inicio');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMoviesAndSeries();
        setMovies(data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const toggleFavorite = (movieId) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === movieId
          ? { ...movie, favorito: !movie.favorito }
          : movie
      )
    );
  };

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    
    switch (currentPage) {
      case 'Filmes':
        return matchesSearch && movie.tipo === 'Filme';
      case 'Series':
        return matchesSearch && movie.tipo === 'Série';
      case 'Favoritos':
        return matchesSearch && movie.favorito;
      default:
        return matchesSearch;
    }
  });

  const getPageTitle = () => {
    switch (currentPage) {
      case 'Filmes':
        return 'Filmes';
      case 'Series':
        return 'Séries';
      case 'Favoritos':
        return 'Meus Favoritos';
      default:
        return 'Início';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-100 mb-2">
              {getPageTitle()}
            </h2>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{filteredMovies.length} itens encontrados</span>
              {searchTerm && (
                <span>• Buscando por: "{searchTerm}"</span>
              )}
            </div>
          </div>

          <MovieList
            movies={filteredMovies}
            onToggleFavorite={toggleFavorite}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
