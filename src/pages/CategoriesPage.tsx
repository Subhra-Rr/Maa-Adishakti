import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data';
import { Crown, Sparkles, ChevronRight, Layers, ArrowRight } from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-maroon/70 border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
          <span>॥ देवी वर्गीकरण कोशः ॥ Devi Classification Index</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text">
          Major Devi Classifications
        </h1>
        <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed">
          Explore every recognized scriptural, Tantric, Puranic, and regional classification of Maa Bhagwati. Every category features its own comprehensive directory and individual entries.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/categories/${cat.slug}`}
            className="group p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all duration-300 hover:shadow-sacred-glow flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-devanagari text-sm text-sacred-gold font-bold">
                  {cat.sanskritName}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-sacred-dark border border-sacred-borderGold/40 text-sacred-goldLight font-mono">
                  {cat.deviCount} Entries
                </span>
              </div>

              <h2 className="font-cinzel text-xl font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
                {cat.name}
              </h2>

              <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed line-clamp-3">
                {cat.description}
              </p>

              {/* Scriptural Foundations */}
              <div className="pt-2">
                <span className="text-[10px] uppercase font-mono text-sacred-goldDark tracking-wider block mb-1">
                  Scriptural Authority:
                </span>
                <div className="flex flex-wrap gap-1">
                  {cat.scripturalFoundations.slice(0, 3).map((sf, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-sacred-dark/70 border border-sacred-border text-[10px] text-sacred-ivoryMuted"
                    >
                      {sf}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-sacred-border/60 flex items-center justify-between text-xs font-semibold text-sacred-goldLight group-hover:text-sacred-gold">
              <span>Enter dedicated category page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
