import Link from "next/link";

export const RegisterCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-strong">
            Prêt à commencer votre transformation ?
          </h2>
          <p className="text-xl text-muted/80 max-w-2xl mx-auto">
            Créez votre profil personnalisé en moins de 5 minutes et recevez
            votre premier programme d&apos;entraînement adapté à vos objectifs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/register"
              className="group relative px-8 py-4 bg-gradient-to-r from-jade-8 to-jade-9 text-white rounded-xl font-semibold text-lg hover:from-jade-9 hover:to-jade-10 transform hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">Créer mon profil</span>
              <div className="absolute inset-0 bg-gradient-to-r from-jade-9 to-jade-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <div className="flex items-center gap-2 text-muted/60">
              <span>✓</span>
              <span className="text-sm">Gratuit et sans engagement</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-8 h-8 bg-jade-3 rounded-full flex items-center justify-center">
                <span className="text-jade-9 font-bold text-sm">1</span>
              </div>
              <span className="text-muted font-medium">
                Profil personnalisé
              </span>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="w-8 h-8 bg-jade-3 rounded-full flex items-center justify-center">
                <span className="text-jade-9 font-bold text-sm">2</span>
              </div>
              <span className="text-muted font-medium">Programme adapté</span>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="w-8 h-8 bg-jade-3 rounded-full flex items-center justify-center">
                <span className="text-jade-9 font-bold text-sm">3</span>
              </div>
              <span className="text-muted font-medium">Suivi intelligent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
