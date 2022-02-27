
const API_KEY = "10923b261ba94d897ac6b81148314a3f";

module.exports = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source:"/contact",
        destination : "/form",
        permanent: false,
      }
    ]
  },
  async rewrites(){
    return[{
      source: "/api/movies",
      destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    },{
      source:"/api/movies/:id",
      destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
    }];
  },
}
