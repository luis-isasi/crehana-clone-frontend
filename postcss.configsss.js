module.exports = {
  plugins: {
    tailwindcss: {},
    //ahora debe de ir autoprefixes luego de tailwindcss, ya que postcss genera todo el css de tailwind
    //luego entra autoprefixer para añadir los prefijos, si se empieza por añadir prefijos, en ese momento
    //aún no se han generado el css por parte de postcss
    autoprefixer: {},
  },
};
