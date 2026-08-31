/* TMI - Landing ERP - reveal doux au scroll + annee du footer
   Le CSS ne masque les blocs que si la classe .js est posee ici : si ce script
   ne s'execute pas, la page reste entierement lisible. */
(function () {
  var racine = document.documentElement;
  var cibles = document.querySelectorAll('.rv');
  var reduit = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduit) {
    racine.classList.add('js');
    var io = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(cibles, function (el) { io.observe(el); });
  }

  var an = document.querySelector('[data-annee]');
  if (an) { an.textContent = new Date().getFullYear(); }
})();
